# CS Development Technologies website

Next.js (App Router) + React + Tailwind CSS, built as a static site.
Contact form: React Hook Form + Zod. Icons: Lucide React.

## Requirements

Node.js 18.18 or later (20 LTS recommended).

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Before going live

1. **Company details**: edit `SITE` in `lib/site.js` (email, phone, address, hours, social links).
2. **Form delivery**: create a free form at https://formspree.io, copy `.env.example` to `.env.local`
   and set `NEXT_PUBLIC_FORM_ENDPOINT`. Without it, the form opens the visitor's email app with the
   message filled in.
3. **Legal pages**: `app/privacy/page.jsx` and `app/terms/page.jsx` are templates. Have them reviewed
   by a lawyer before launch.
4. **Background videos**: URLs are in `VIDEOS` in `lib/site.js`. Replace them with your own footage
   if you prefer.

## Languages

The site is available in English, Spanish (Spain), French and Brazilian
Portuguese, at `/en/`, `/es/`, `/fr/` and `/pt-br/`.

- **First visit:** `middleware.js` sends visitors to the language their browser
  prefers, falling back to English. Someone in Madrid lands on `/es/`, someone
  in Sao Paulo on `/pt-br/`.
- **Switching:** the globe button next to the theme toggle keeps the visitor on
  the same page and section, and remembers the choice in a `NEXT_LOCALE`
  cookie.
- **Search engines:** every page declares its other language versions with
  `hreflang`. Set `NEXT_PUBLIC_SITE_URL` to your real domain in production so
  these links are absolute.
- **Contact form:** labels, hints and error messages follow the visitor's
  language. Your team still receives subjects and areas of interest in English,
  plus a `locale` field saying which language the visitor used. It is stored in
  MongoDB too.
- **Legal pages:** navigation and titles are translated; the policy text stays
  in English, which is the authoritative version, with a translated notice
  saying so.

### Editing text

All visible text lives in `lib/i18n/messages/`:

```
en.js      English, the source of truth
es.js      Spanish (Spain), formal "usted"
fr.js      French, formal "vous"
pt-br.js   Brazilian Portuguese, "voce"
```

Change a sentence in `en.js`, then make the same change in the other three.
After any edit, run:

```bash
npm run i18n:check
```

It fails if a translation is missing a key, has a different number of list
items, or drops a `{placeholder}`.

**Have a native speaker review each language before launch.** The
translations are careful, but a client in Lyon or Sao Paulo will notice
anything that reads as machine-translated.

### Adding a language

1. Copy `lib/i18n/messages/en.js` to, for example, `de.js` and translate it.
2. Add it to `LOCALES` in `lib/i18n/config.js` and to `CATALOGUES` in
   `lib/i18n/index.js`.
3. Run `npm run i18n:check`.

## Research areas

The portfolio section lists seven domains, each described by topic only, with
no client names or results. Structure (order, icons, ids) is in
`RESEARCH_AREAS` in `lib/site.js`; titles, descriptions and topics are under
`research.areas` in each language file. Each area also appears in the navbar
"Research" dropdown, the hero marquee and the contact form's interest list.

## Contact form, email and database

`POST /api/contact/` does three things in this order:

1. Validates the payload.
2. Saves the submission to MongoDB and replies to the browser. This is the
   only part the visitor waits for.
3. Sends the confirmation email to the visitor and the notification to
   `GMAIL_USER` **after** the response, using Next's `after()`. Both messages
   go out together over a pooled SMTP connection.

If MongoDB is unreachable the submission is still accepted and the emails are
still sent, so an outage never loses an enquiry. Email status is written back
to the record once sending finishes.

Environment variables live in `.env.local` (copy `.env.example`). Restart
`npm run dev` after changing them.

## Troubleshooting

### querySrv ECONNREFUSED _mongodb._tcp.<cluster>.mongodb.net

**Cause.** Your `mongodb+srv://` string makes the driver ask your DNS server
for an SRV record before it can connect. Your network refuses that query.
It is not the Atlas allow-list, not the password, and not a missing
environment variable: an SRV query never reaches Atlas at all. Home routers,
ISP resolvers, campus and office networks, VPNs and some antivirus suites all
block or refuse SRV and TXT lookups on UDP port 53.

**What the app now does about it.** `lib/db.js` tries three routes in order:
the normal lookup with public resolvers applied to both of Node's DNS
resolvers, then the same lookup over DNS-over-HTTPS on port 443, and finally
it builds a plain `mongodb://` URI from the hosts it found, which needs no SRV
lookup. In most cases it now connects with no change from you.

**Diagnose it:**

```bash
npm run db:check
```

That prints which of the lookups work and whether the connection succeeds, and
tells apart a DNS problem, a wrong password and an allow-list problem.

**If it still fails**, use the non-SRV string, which removes SRV from the
picture entirely:

1. In Atlas choose **Connect > Drivers**, then change the driver version to
   **Node.js 2.2.12 or later**.
2. You get a string like
   `mongodb://user:pass@ac-xxx-shard-00-00.abcd.mongodb.net:27017,ac-xxx-shard-00-01...:27017/csdev?ssl=true&replicaSet=atlas-xxxxxx-shard-0&authSource=admin&retryWrites=true&w=majority`
3. Put it in `MONGODB_URI` and restart `npm run dev`.

Other things worth trying, in rough order of effort:

- Change your Windows DNS to 1.1.1.1 and 8.8.8.8: Settings > Network & internet
  > your adapter > DNS server assignment > Edit > Manual > IPv4 on.
- Run `ipconfig /flushdns` afterwards.
- Test on a phone hotspot. If it works there, your router or ISP is the cause.
- Temporarily disable any antivirus web or DNS shield and retry.
- Set `MONGODB_DNS=8.8.8.8,9.9.9.9` in `.env.local` to try different resolvers,
  or `MONGODB_DNS=system` to use only your own.

Also check that the password in the URI is percent-encoded (`@` becomes `%40`,
`#` becomes `%23`) and that the database name comes before the `?`.

### Slow page loads and "Caching failed for pack ... .next\cache\webpack"

The project is inside a OneDrive folder. OneDrive syncs and locks files while
webpack is writing its cache, which produces that rename error and makes every
compile slow. Move the project somewhere OneDrive does not sync, for example
`C:\dev\cs-dev-website`, delete the `.next` folder, and run `npm run dev`
again. The first compile of a route is always a few seconds in development;
production builds are not affected.

### The form takes a long time

It should not any more. The API route replies as soon as the submission is
validated, and saves to MongoDB and sends both emails afterwards. If the POST
is still slow, the delay is Next's first compile of the route in development,
which happens once.

### Emails are slow or do not arrive

`GMAIL_APP_PASSWORD` must be a 16-character app password from
https://myaccount.google.com/apppasswords, not the account password, and
2-Step Verification must be on. Check the terminal: failures are logged as
`Email send failed`. The visitor is not kept waiting either way.

## Build and deploy

```bash
npm run build
```

This writes a static site to `out/`. Upload that folder to any static host (Netlify, Vercel,
Cloudflare Pages, GitHub Pages or cPanel hosting). `npm start` previews the built site locally.

## Theme and background

- **Light and dark themes**: the toggle is in the navbar (`components/ThemeToggle.jsx`). The choice is
  saved in `localStorage`; with no saved choice the site follows the operating system setting and
  falls back to dark. An inline script in `app/layout.jsx` applies it before the first paint, so the
  page never flashes the wrong colours.
- **Colours**: every component uses the tokens `bg`, `fg`, `muted`, `subtle`, `line`, `panel` and
  `chip`, defined once for each theme at the top of `app/globals.css`. Change a colour there and it
  updates the whole site. The hero, the two feature mockups and the video overlays keep fixed light
  text because they sit on top of dark video.
- **Animated background**: `components/AmbientBackground.jsx` plus the `.ambient-*` rules in
  `app/globals.css`. Three large blurred shapes drift behind everything from About us to Contact us.
  The layer is sticky and full height, so the movement is continuous for the whole scroll of that
  region rather than restarting per section. Tint and strength come from `--glow-a/b/c` in each
  theme; size and speed from the `.ambient-blob-*` rules. It is switched off for visitors who prefer
  reduced motion.

## Project structure

```
app/
  layout.jsx          fonts, metadata, skip link
  page.jsx            landing page (section order)
  privacy/page.jsx    Privacy Policy
  terms/page.jsx      Terms and Conditions
  not-found.jsx       404 page
  icon.svg            favicon
  globals.css         base styles, smooth scroll, marquee keyframes
components/
  Navbar.jsx          sticky navbar, Services and Products dropdowns, mobile menu
  Hero.jsx, Marquee.jsx
  About.jsx, FeatureModels.jsx, FeatureData.jsx
  Services.jsx, Products.jsx, Events.jsx, Faq.jsx
  Contact.jsx, ContactForm.jsx
  Footer.jsx, LegalLayout.jsx
  AmbientBackground.jsx  drifting gradient layer behind About us to Contact us
  ThemeToggle.jsx     light and dark switch
  FadeInUp.jsx        scroll-reveal wrapper (1000ms, respects reduced motion)
  LazyVideo.jsx       background video that loads near the viewport
  ButtonLink.jsx, Badge.jsx, Logo.jsx, SectionHeading.jsx
lib/
  site.js             all copy and company details
  contact-schema.js   form validation rules
  prefill.js          lets buttons pre-select the form subject
```

To change wording, edit `lib/site.js`; the components read everything from there.
