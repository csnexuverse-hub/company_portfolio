/*
 * Diagnoses MongoDB connection problems:
 *   node scripts/check-db.mjs     (or: npm run db:check)
 *
 * It reports which step fails, so you can tell a DNS problem from a
 * credentials problem from an allow-list problem.
 */
import fs from 'node:fs';
import path from 'node:path';
import dns from 'node:dns/promises';

// Load .env.local without adding a dependency.
for (const file of ['.env.local', '.env']) {
  const full = path.join(process.cwd(), file);
  if (!fs.existsSync(full)) continue;
  for (const line of fs.readFileSync(full, 'utf8').split('\n')) {
    const match = /^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/.exec(line);
    if (match && !process.env[match[1]]) {
      process.env[match[1]] = match[2].replace(/^["']|["']$/g, '');
    }
  }
}

const uri = process.env.MONGODB_URI;
if (!uri) {
  console.error('MONGODB_URI is not set. Copy .env.example to .env.local and fill it in.');
  process.exit(1);
}

const isSrv = uri.startsWith('mongodb+srv://');
const host = (/@([^/?]+)/.exec(uri) || [])[1] || '(unknown)';
const safeUri = uri.replace(/\/\/([^:]+):([^@]+)@/, '//$1:****@');

console.log('Connection string :', safeUri);
console.log('Type              :', isSrv ? 'SRV (mongodb+srv://)' : 'standard (mongodb://)');
console.log('System resolvers  :', (await import('node:dns')).getServers().join(', '));
console.log('');

if (isSrv) {
  console.log('1. SRV lookup using the system resolvers');
  try {
    const records = await dns.resolveSrv(`_mongodb._tcp.${host}`);
    console.log('   OK:', records.map((r) => `${r.name}:${r.port}`).join(', '));
  } catch (err) {
    console.log(`   FAILED: ${err.code || err.message}`);
    console.log('   Your network refuses SRV queries. Step 2 works around it.');
  }

  console.log('');
  console.log('2. SRV lookup using public resolvers (1.1.1.1, 8.8.8.8)');
  try {
    dns.setServers(['1.1.1.1', '8.8.8.8']);
    const records = await dns.resolveSrv(`_mongodb._tcp.${host}`);
    console.log('   OK:', records.map((r) => `${r.name}:${r.port}`).join(', '));
  } catch (err) {
    console.log(`   FAILED: ${err.code || err.message}`);
    console.log('   Port 53 looks blocked on this network. Step 3 works around it.');
  }

  console.log('');
  console.log('3. SRV lookup over HTTPS (what the app falls back to)');
  try {
    const { resolveSrvOverHttps } = await import('../lib/db.js');
    const direct = await resolveSrvOverHttps(uri);
    console.log('   OK:', direct.replace(/\/\/([^:]+):([^@]+)@/, '//$1:****@'));
  } catch (err) {
    console.log(`   FAILED: ${err.message}`);
    console.log('   No DNS route works from here. Use the non-SRV string from Atlas');
    console.log('   (Connect > Drivers > Node.js 2.2.12 or later) as MONGODB_URI.');
  }
  console.log('');
}

console.log('4. Connecting');
try {
  const { default: connectDB } = await import('../lib/db.js');
  const mongoose = (await import('mongoose')).default;
  await connectDB();
  const admin = mongoose.connection.db.admin();
  await admin.ping();
  console.log('   OK: connected to database', mongoose.connection.name);
  const count = await mongoose.connection.db.collection('contactsubmissions').countDocuments();
  console.log('   contactsubmissions documents:', count);
  await mongoose.disconnect();
  process.exit(0);
} catch (err) {
  console.log('   FAILED:', err.message);
  if (/Authentication failed|bad auth/i.test(err.message)) {
    console.log('   The username or password is wrong. If the password contains @ : / ? # & %');
    console.log('   it must be percent-encoded in the URI (@ becomes %40).');
  } else if (/IP that isn.t whitelisted|not allowed|allowlist/i.test(err.message)) {
    console.log('   Add your IP (or 0.0.0.0/0 while testing) under Atlas > Network Access.');
  }
  process.exit(1);
}
