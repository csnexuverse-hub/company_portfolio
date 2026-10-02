import {
  Activity,
  BookOpen,
  Cpu,
  Drama,
  Factory,
  FileText,
  FlaskConical,
  Globe,
  HeartPulse,
  Languages,
  Lock,
  Monitor,
  Music,
  Network,
  PenLine,
  Presentation,
  Satellite,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  Sprout,
  Trophy,
} from 'lucide-react';

/*
 * Structure only: ids, icons and contact details. All visible text lives in
 * lib/i18n/messages/<language>.js so every language stays in step.
 *
 * Company details: replace placeholders before going live. The form
 * endpoint is read from NEXT_PUBLIC_FORM_ENDPOINT (see .env.example).
 */
export const SITE = {
  name: 'CS Development Technologies',
  legalName: 'CS Development Technologies',
  email: 'csdevelopmentsupport@gmail.com',
  phones: ['+91 8530120283', '+91 9763900849'],
  get phone() {
    return this.phones[0];
  },
  address: 'Pune, Maharashtra, India',
  jurisdiction: 'India',
  courts: 'the courts having jurisdiction over our registered office',
  lastUpdated: '25 September 2026',
  formEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT || '/api/contact/',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  socials: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/' },
    { label: 'Instagram', url: 'https://www.instagram.com/' },
    { label: 'X', url: 'https://x.com/' },
    { label: 'GitHub', url: 'https://github.com/' },
  ],
};

export const VIDEOS = {
  hero: 'https://cdn.sceneai.art/Hero%20Section%20Video/50b4f304-cdca-4e12-8735-580d225834be.mp4',
  footer: 'https://cdn.sceneai.art/Hero%20Section%20Video/50b4f304-cdca-4e12-8735-580d225834be.mp4',
};

/* Navbar order. `key` points at messages.nav; `menu` opens a dropdown. */
export const NAV_ITEMS = [
  { id: 'about', key: 'about' },
  { id: 'research', key: 'research', menu: 'research' },
  { id: 'services', key: 'services', menu: 'services' },
  { id: 'products', key: 'products', menu: 'products' },
  { id: 'events', key: 'events' },
  { id: 'contact', key: 'contact' },
];

/*
 * Research areas, in display order. `value` is the English name sent to the
 * team when someone picks the area in the contact form.
 */
export const RESEARCH_AREAS = [
  { key: 'health', id: 'area-health', Icon: HeartPulse, value: 'Medical and Healthcare AI' },
  { key: 'agriculture', id: 'area-agriculture', Icon: Sprout, value: 'Agriculture and Crop Intelligence' },
  { key: 'industrial', id: 'area-industrial', Icon: Factory, value: 'Industrial and Edge AI' },
  { key: 'privacy', id: 'area-privacy', Icon: Lock, value: 'Privacy-Preserving and Federated Learning' },
  { key: 'security', id: 'area-security', Icon: ShieldAlert, value: 'Cybersecurity Analytics' },
  { key: 'earth', id: 'area-earth', Icon: Satellite, value: 'Earth Observation and Climate Risk' },
  { key: 'language', id: 'area-language', Icon: Languages, value: 'Language, Speech and Multimodal AI' },
];

export const METHODS_ICON = FlaskConical;

export const SERVICES = [
  { id: 'svc-research', Icon: BookOpen, value: 'Research Advisory and Methodology Consulting' },
  { id: 'svc-writing', Icon: PenLine, value: 'Academic and Technical Writing Support' },
  { id: 'svc-implementation', Icon: Cpu, value: 'Systems Engineering and Implementation' },
  { id: 'svc-data', Icon: Activity, value: 'Data Engineering and Analytics' },
  { id: 'svc-docs', Icon: FileText, value: 'Technical Documentation' },
  { id: 'svc-review', Icon: ShieldCheck, value: 'Technical Review and Validation' },
];

export const PRODUCTS = [
  { id: 'prod-mobile', Icon: Smartphone, value: 'Mobile Applications' },
  { id: 'prod-web', Icon: Globe, value: 'Web Platforms' },
  { id: 'prod-software', Icon: Monitor, value: 'Enterprise Software' },
  { id: 'prod-ml', Icon: Network, value: 'Machine Learning Models' },
];

export const OTHER_INTERESTS = ['Physical Model Development', 'Events and programmes', 'Something else'];

/* Icons for messages.events.items, in the same order. */
export const EVENT_ICONS = [Trophy, Drama, Presentation, Music];
