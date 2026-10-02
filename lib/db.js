import dns from 'node:dns';
import dnsPromises from 'node:dns/promises';
import mongoose from 'mongoose';

/*
 * MongoDB connection.
 *
 * The hard part is not Atlas, it is DNS. A "mongodb+srv://" URI makes the
 * driver ask for an SRV record (_mongodb._tcp.<cluster>) and a TXT record
 * before it can connect. Plenty of home routers, ISP resolvers, campus
 * networks and antivirus suites refuse those queries over UDP port 53, which
 * surfaces as "querySrv ECONNREFUSED". Nothing about the Atlas allow-list or
 * the password is involved.
 *
 * So this file tries three things in order:
 *
 *   1. The normal SRV lookup, with public resolvers applied to Node's DNS
 *      module (both the callback and the promise resolver, which are separate
 *      instances; only setting one was why the previous fix did nothing).
 *   2. If that fails, the same SRV and TXT lookups over DNS-over-HTTPS. This
 *      runs on port 443 like any web request, so it works even when port 53
 *      is blocked entirely.
 *   3. The hosts found that way are turned into a plain "mongodb://" URI with
 *      every shard listed, which needs no SRV lookup at all.
 *
 * Set MONGODB_URI to a non-SRV string yourself and none of this runs.
 */
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('MONGODB_URI is not defined in .env.local - add your Atlas connection string.');
}

const isSrv = MONGODB_URI.startsWith('mongodb+srv://');
const dnsSetting = (process.env.MONGODB_DNS || '').trim();
const useCustomDns = isSrv && dnsSetting.toLowerCase() !== 'system';

if (useCustomDns) {
  const servers = dnsSetting
    ? dnsSetting.split(',').map((s) => s.trim()).filter(Boolean)
    : ['1.1.1.1', '8.8.8.8'];
  const ordered = [...new Set([...servers, ...dns.getServers()])];
  try {
    // These are two separate resolver instances in Node, so both need setting.
    dns.setServers(ordered);
    dnsPromises.setServers(ordered);
  } catch (err) {
    console.warn('Could not set DNS resolvers for the MongoDB SRV lookup:', err.message);
  }
}

const DOH_ENDPOINTS = [
  'https://cloudflare-dns.com/dns-query',
  'https://dns.google/resolve',
];

async function dohQuery(name, type) {
  let lastError = null;
  for (const endpoint of DOH_ENDPOINTS) {
    try {
      const url = `${endpoint}?name=${encodeURIComponent(name)}&type=${type}`;
      const response = await fetch(url, {
        headers: { accept: 'application/dns-json' },
        signal: AbortSignal.timeout(8000),
      });
      if (!response.ok) throw new Error(`${endpoint} returned ${response.status}`);
      const body = await response.json();
      const answers = (body.Answer || []).filter((a) => a.type === (type === 'SRV' ? 33 : 16));
      if (answers.length) return answers.map((a) => a.data);
    } catch (err) {
      lastError = err;
    }
  }
  if (lastError) throw lastError;
  return [];
}

/**
 * Resolves a mongodb+srv:// URI into a plain mongodb:// URI over HTTPS.
 */
export async function resolveSrvOverHttps(srvUri) {
  const match = /^mongodb\+srv:\/\/(?:([^:@/]+)(?::([^@/]*))?@)?([^/?]+)(?:\/([^?]*))?(?:\?(.*))?$/.exec(srvUri);
  if (!match) throw new Error('MONGODB_URI is not a valid mongodb+srv:// connection string.');

  const [, user, password, host, database = '', query = ''] = match;

  const srvRecords = await dohQuery(`_mongodb._tcp.${host}`, 'SRV');
  if (!srvRecords.length) throw new Error(`No SRV records found for _mongodb._tcp.${host}`);

  // Each record looks like: "0 0 27017 ac-abc-shard-00-00.xxxx.mongodb.net."
  const hosts = srvRecords
    .map((record) => {
      const parts = String(record).trim().split(/\s+/);
      const port = parts[2];
      const target = (parts[3] || '').replace(/\.$/, '');
      return target ? `${target}:${port || 27017}` : null;
    })
    .filter(Boolean);

  if (!hosts.length) throw new Error(`Could not read SRV records for ${host}`);

  // The TXT record carries connection options such as authSource and replicaSet.
  let txtOptions = '';
  try {
    const txtRecords = await dohQuery(host, 'TXT');
    txtOptions = txtRecords.map((r) => String(r).replace(/^"|"$/g, '')).join('&');
  } catch {
    // Optional: Atlas still connects without it, just with defaults.
  }

  const params = new URLSearchParams(query);
  for (const [key, value] of new URLSearchParams(txtOptions)) {
    if (!params.has(key)) params.set(key, value);
  }
  params.set('ssl', 'true');
  if (!params.has('authSource') && user) params.set('authSource', 'admin');

  const credentials = user ? `${user}${password ? `:${password}` : ''}@` : '';
  return `mongodb://${credentials}${hosts.join(',')}/${database}?${params.toString()}`;
}

const CONNECT_OPTIONS = {
  bufferCommands: false,
  serverSelectionTimeoutMS: 8000,
  connectTimeoutMS: 8000,
  socketTimeoutMS: 20000,
  maxPoolSize: 10,
  minPoolSize: 1,
  retryWrites: true,
};

const DNS_FAILURE = /querySrv|queryTxt|ENOTFOUND|EAI_AGAIN|ECONNREFUSED|ETIMEOUT|ESERVFAIL|EREFUSED/i;

let cached = global.__mongoose;
if (!cached) {
  cached = global.__mongoose = { conn: null, promise: null, resolvedUri: null };
}

async function openConnection() {
  // A URI resolved over HTTPS earlier in this process is reused.
  if (cached.resolvedUri) return mongoose.connect(cached.resolvedUri, CONNECT_OPTIONS);

  try {
    return await mongoose.connect(MONGODB_URI, CONNECT_OPTIONS);
  } catch (err) {
    if (!isSrv || !DNS_FAILURE.test(err.message)) throw err;

    console.warn('SRV lookup over DNS failed, retrying through DNS-over-HTTPS:', err.message);
    const directUri = await resolveSrvOverHttps(MONGODB_URI);
    cached.resolvedUri = directUri;
    const conn = await mongoose.connect(directUri, CONNECT_OPTIONS);
    console.log('Connected to MongoDB using hosts resolved over HTTPS.');
    return conn;
  }
}

export default async function connectDB() {
  if (cached.conn && mongoose.connection.readyState === 1) return cached.conn;

  if (!cached.promise) {
    cached.promise = openConnection().catch((err) => {
      // Clear the cached promise so the next call retries rather than reusing
      // a rejected one forever.
      cached.promise = null;
      throw err;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

/*
 * Opens the connection in the background at startup, so the first visitor does
 * not pay for the handshake. Failures are logged and do not crash the app.
 */
export function warmUpDB() {
  connectDB().catch((err) => {
    const hint = DNS_FAILURE.test(err.message)
      ? '\n  Both the DNS and the DNS-over-HTTPS lookups failed. Run "npm run db:check" for a diagnosis.'
      : '';
    console.error('MongoDB connection failed:', err.message + hint);
  });
}

export function dbStatus() {
  return ['disconnected', 'connected', 'connecting', 'disconnecting'][mongoose.connection.readyState] || 'unknown';
}
