/*
 * English copy. This file is the source of truth: every other language file
 * must have exactly the same keys and array lengths (run `npm run i18n:check`).
 */
const en = {
  meta: {
    title: 'CS Development Technologies | Applied AI Research and Engineering',
    description:
      'Applied AI research and engineering across healthcare, agriculture, industrial systems, security and language technology, from first experiment to deployed system.',
    ogDescription: 'Applied AI research and engineering, from first experiment to deployed system.',
  },

  common: {
    skip: 'Skip to content',
    bookConsultation: 'Book a consultation',
    home: 'CS Development Technologies, home',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    language: 'Language',
    themeToLight: 'Switch to light theme',
    themeToDark: 'Switch to dark theme',
    themeSwitch: 'Switch theme',
    opensNewTab: 'opens in a new tab',
  },

  nav: {
    about: 'About us',
    research: 'Research',
    services: 'Services',
    products: 'Products',
    events: 'Events',
    contact: 'Contact us',
    allResearch: 'View all research areas',
    allServices: 'View all services',
    allProducts: 'View all products',
  },

  hero: {
    badge: 'Research-led engineering',
    titleStart: 'Applied AI research and engineering,',
    titleEnd: 'from first experiment to',
    titleEmphasis: 'deployed system.',
    lede:
      'CS Development Technologies works across healthcare, agriculture, industrial systems, security and language technology, building models, data pipelines and software that hold up to scrutiny.',
    primary: 'Book a consultation',
    secondary: 'Explore our research areas',
    marqueeLabel: 'Where we work',
  },

  about: {
    badge: 'About us',
    title: 'A research and engineering partner.',
    paragraphs: [
      'CS Development Technologies is an applied research and engineering firm based in Pune, India. Our team has contributed to work in medical imaging, crop disease detection, industrial fault diagnosis, network security, federated learning and AI for regional languages.',
      'We work where research meets engineering: designing the experiment, preparing the data, building and validating the model, and turning it into software people can use. One team carries a project from the first conversation to a documented handover.',
      'We are clear about what we do and do not do. Our research support is advisory: we guide, review, build and teach. The ideas, decisions and authorship always remain with our clients.',
    ],
    processTitle: 'How an engagement runs',
    process: [
      { title: 'Consultation', text: 'We discuss your goals, constraints and timeline.' },
      { title: 'Written proposal', text: 'You receive a scope with deliverables, milestones and a quote.' },
      { title: 'Delivery in milestones', text: 'Work is reviewed with you at each checkpoint.' },
      { title: 'Handover and support', text: 'We hand over the work with documentation and stay available for questions.' },
    ],
    principles: [
      { title: 'Written scope', text: 'Deliverables, timelines and costs are agreed before any work begins.' },
      { title: 'Confidentiality', text: 'Client material is handled confidentially. We sign non-disclosure agreements on request.' },
      { title: 'Academic integrity', text: "Research support is advisory. We never submit work on anyone's behalf." },
      { title: 'Documented handover', text: 'You receive the work, its documentation and what you need to maintain it.' },
    ],
  },

  research: {
    badge: 'Research areas',
    title: 'Seven domains, one standard of rigour.',
    description:
      'Our team has contributed to applied research and development across these fields. Client work is described by topic only; the results belong to our clients.',
    areas: {
      health: {
        title: 'Medical and Healthcare AI',
        description: 'Diagnostic models built on clinical images, signals and patient data.',
        topics: [
          'Dental X-ray diagnosis',
          'Lung cancer detection',
          'Autism screening',
          'Gestational diabetes risk',
          'Cardiac risk from wearables and ECG',
        ],
      },
      agriculture: {
        title: 'Agriculture and Crop Intelligence',
        description: 'From a single leaf photograph to the crops of a whole region.',
        topics: [
          'Early disease detection in pomegranate',
          'Pest detection in grapes',
          '3D leaf reconstruction from 2D images',
          'Disease prediction from soil nutrients',
          'Soil moisture forecasting and crop suitability',
        ],
      },
      industrial: {
        title: 'Industrial and Edge AI',
        description: 'Intelligence that runs where machines and networks are.',
        topics: [
          'Fault detection for factory machinery',
          'Swarm learning that shares fault knowledge across machines',
          'Immune-inspired models',
          'Task offloading across device, edge and cloud on 5G',
        ],
      },
      privacy: {
        title: 'Privacy-Preserving and Federated Learning',
        description: 'Training models across institutions without moving sensitive data.',
        topics: ['Federated learning for healthcare', 'Cryptography-driven privacy preservation', 'Secure model aggregation'],
      },
      security: {
        title: 'Cybersecurity Analytics',
        description: 'Machine learning that detects threats as they happen.',
        topics: ['Live botnet detection', 'User and entity behaviour analytics', 'Transaction security for cryptocurrency'],
      },
      earth: {
        title: 'Earth Observation and Climate Risk',
        description: 'Satellite and environmental data turned into decisions.',
        topics: ['Flood prediction for Indian regions', 'Crop mapping from satellite imagery', 'Climate reanalysis for soil modelling'],
      },
      language: {
        title: 'Language, Speech and Multimodal AI',
        description: 'AI that works in the languages people actually speak.',
        topics: [
          'Translation models for Hindi and Marathi',
          'Multimodal retrieval across Indian languages',
          'Speech emotion recognition',
          'Automatic video summarisation',
        ],
      },
    },
    methods: {
      title: 'Methods we bring to every domain',
      description: 'The same validation discipline applies whatever the field.',
      items: [
        'Computer vision',
        'Time series forecasting',
        'Natural language processing',
        'Explainable AI',
        'Data leakage audits',
        'Statistical significance testing',
        'Uncertainty intervals',
        'Edge deployment',
      ],
    },
    discuss: 'Discuss a research collaboration',
  },

  features: {
    models: {
      badge: 'Machine Learning Models',
      title: 'Custom models built from your requirements.',
      text: 'Custom models built from your requirements, evaluated against clear metrics, and deployed where they are needed, with documentation of how they were trained.',
      cta: 'Book a consultation',
      aria: 'Diagram of a neural network assembling layer by layer, from data through features and hidden layers to an output.',
      diagram: ['data', 'features', 'layers', 'output'],
    },
    data: {
      badge: 'Data engineering',
      title: 'Collecting, cleaning and structuring data.',
      text: 'Collecting, cleaning and structuring data, then analysing it with methods suited to the question and presenting the results clearly.',
      cta: 'See our services',
      aria: 'Diagram of a data pipeline building itself: raw rows enter, pass through collect, clean, validate and analyse stages, and leave as tidy rows.',
      stages: [
        { label: 'collect', sub: 'sources' },
        { label: 'clean', sub: 'nulls, types' },
        { label: 'validate', sub: 'schema' },
        { label: 'analyse', sub: 'results' },
      ],
    },
    prototypes: {
      badge: 'Physical Model Development',
      title: 'Tangible models built for real-world learning.',
      text: 'Physical working models, from robotic mechanisms to educational science kits for concepts like gravitational pull, mathematics, circuits and more, custom-built to your requirements for classrooms, labs, exhibitions and demonstrations.',
      cta: 'Book a consultation',
      aria: 'Diagram of a robotic arm with gears, joints and measurement labels assembling itself, representing physical model development.',
      labels: ['drive', 'joint-A', 'effector'],
    },
  },

  services: {
    badge: 'Services',
    title: 'How we work with you.',
    description:
      'Engagements can combine several services, for example data preparation followed by analysis and a written technical report.',
    items: {
      'svc-research': {
        title: 'Research Advisory and Methodology Consulting',
        short: 'Study design, methods and mentoring',
        description:
          'Guidance for researchers and research teams on framing questions, choosing methods and planning studies that hold up to scrutiny. We advise and mentor; the research and its conclusions remain yours.',
        points: [
          'Literature landscape reviews and gap identification',
          'Research design and methodology selection',
          'Experimental and statistical planning',
          'Mentoring sessions and progress reviews',
        ],
      },
      'svc-writing': {
        title: 'Academic and Technical Writing Support',
        short: 'Editing, structure and formatting',
        description:
          'Editorial support that improves the clarity, structure and presentation of manuscripts, proposals and reports, while the content and authorship stay with you.',
        points: [
          'Structural and language editing',
          'Referencing and formatting to styles such as APA and IEEE',
          'Preparation to journal and conference guidelines',
          'Proofreading and consistency checks',
        ],
      },
      'svc-implementation': {
        title: 'Systems Engineering and Implementation',
        short: 'Prototypes, integration and deployment',
        description:
          'Design, integration and deployment of software and hardware systems, from prototypes and simulations to production environments.',
        points: [
          'Architecture and technical design',
          'Prototypes, simulations and experimental setups',
          'Integration of hardware, software and third-party services',
          'Deployment, testing and handover',
        ],
      },
      'svc-data': {
        title: 'Data Engineering and Analytics',
        short: 'Preparation, analysis and reporting',
        description:
          'Collecting, cleaning and structuring data, then analysing it with methods suited to the question and presenting the results clearly.',
        points: [
          'Data collection plans and pipelines',
          'Cleaning, transformation and validation',
          'Statistical analysis and modelling',
          'Visualisation and interpretation of results',
        ],
      },
      'svc-docs': {
        title: 'Technical Documentation',
        short: 'Specifications, manuals and guides',
        description:
          'Accurate documentation for systems, software and processes, written for the people who will use and maintain them.',
        points: [
          'System and architecture documentation',
          'API references and developer guides',
          'User manuals and standard operating procedures',
          'Project reports and technical specifications',
        ],
      },
      'svc-review': {
        title: 'Technical Review and Validation',
        short: 'Independent checks of code and results',
        description:
          'An independent review of code, models, experiments and results, delivered as a written report of findings and recommended fixes.',
        points: [
          'Code and architecture review',
          'Reproducibility checks on experiments and analyses',
          'Model evaluation and performance testing',
          'Written findings with prioritised recommendations',
        ],
      },
    },
    notListedBefore: 'Need something that is not listed?',
    notListedLink: 'Describe it in an enquiry',
    notListedAfter: 'and we will tell you honestly whether we can help.',
  },

  products: {
    badge: 'Products',
    title: 'Software built to your specification.',
    description:
      'We build in four domains. Tell us what you need and we will scope it with you, whether it is a first version or an extension of a system you already run.',
    typicalWork: 'Typical work',
    items: {
      'prod-mobile': {
        title: 'Mobile Applications',
        short: 'Native and cross-platform apps',
        description:
          'Native Android and iOS apps, and cross-platform apps that share one codebase across both, built for reliable performance on real devices and networks.',
        points: ['Customer and member apps', 'Field data collection with offline support', 'Companion apps for hardware and IoT devices'],
        cta: 'Discuss a mobile app',
      },
      'prod-web': {
        title: 'Web Platforms',
        short: 'Portals, dashboards and web applications',
        description:
          'Web applications, portals and dashboards designed to handle growth in users and data, with secure access and a maintainable codebase.',
        points: ['Client and member portals', 'Admin dashboards and internal tools', 'Corporate websites with content management'],
        cta: 'Discuss a web platform',
      },
      'prod-software': {
        title: 'Enterprise Software',
        short: 'Desktop and cloud business systems',
        description:
          'Bespoke desktop and cloud systems that fit the way an organisation already works, and connect to the tools it already uses.',
        points: ['Workflow and process automation', 'Inventory, billing and reporting systems', 'Integrations between existing systems'],
        cta: 'Discuss enterprise software',
      },
      'prod-ml': {
        title: 'Machine Learning Models',
        short: 'Custom models, from data to deployment',
        description:
          'Custom models built from your data, evaluated against clear metrics, and deployed where they are needed, with documentation of how they were trained.',
        points: ['Classification and prediction', 'Computer vision and natural language processing', 'Model deployment and monitoring'],
        cta: 'Discuss a machine learning model',
      },
    },
  },

  events: {
    badge: 'Events',
    title: 'Bringing people together beyond the work.',
    description:
      'Alongside our technical work, we are preparing a programme of events for students, professionals and communities.',
    note: 'This programme has not started yet and no dates have been announced. Register your interest and we will contact you when the first event is confirmed.',
    cta: 'Register your interest',
    planned: 'Planned',
    items: [
      { title: 'Sports tournaments', description: 'Inter-college and corporate tournaments in team and individual sports.' },
      { title: 'Theatre and drama', description: 'Stage productions and drama competitions that give performers and writers a platform.' },
      { title: 'Technical workshops and seminars', description: 'Hands-on sessions on software, data and research skills, led by practitioners.' },
      { title: 'Cultural evenings', description: 'Music, dance and cultural showcases for communities and partner organisations.' },
    ],
  },

  faq: {
    title: "We've got answers",
    items: [
      {
        q: 'How does an engagement run?',
        a: 'It starts with a consultation about your goals, constraints and timeline. We then send a written proposal with deliverables, milestones and a quote. Work begins only after you accept it, proceeds in milestones with a review at each checkpoint, and ends with a documented handover.',
      },
      {
        q: 'Do you work with clients outside India?',
        a: 'Yes. We work remotely with organisations in other countries, communicate in English, and schedule calls to overlap with European and South American working hours.',
      },
      {
        q: 'Do you write coursework or theses on my behalf?',
        a: "No. Our research and writing services are advisory, editorial and educational. We guide methodology, review drafts, edit for clarity and teach techniques, but we do not produce assessed coursework, examinations, theses or dissertations for submission as someone else's work. We decline or end engagements where we believe our work would be used that way.",
      },
      {
        q: 'Is my data confidential?',
        a: 'Yes. Material you share is used only to deliver your engagement and is handled confidentially. We sign a non-disclosure agreement on request before you share anything sensitive, and work with anonymised data wherever the project allows.',
      },
      {
        q: 'How do I get a quote?',
        a: 'Send an order or enquiry through the contact form with a short description of what you need and any deadline. We reply to discuss scope, then send a written quote. Nothing is billed until you accept a proposal.',
      },
      {
        q: 'Who owns the work when the project ends?',
        a: 'Unless your agreement says otherwise, ownership of deliverables created specifically for you transfers to you once full payment is received. You also receive the documentation needed to maintain them.',
      },
    ],
  },

  contact: {
    badge: 'Contact us',
    title: 'Tell us what you need.',
    description:
      'Place an order, ask a question or tell us how we did. For orders and enquiries, we reply to discuss scope, timeline and pricing.',
    email: 'Email',
    phone: 'Phone',
    hoursLabel: 'Working hours',
    hours: 'Monday to Saturday, 10:00 to 18:00 IST',
    office: 'Office',
    follow: 'Follow us',
  },

  form: {
    title: 'Send us a message',
    requiredBefore: 'Fields marked',
    requiredAfter: 'are required.',
    requiredSr: 'with an asterisk',
    subject: 'Subject',
    subjectPlaceholder: 'Select a subject',
    subjects: { order: 'New order', enquiry: 'General enquiry', feedback: 'Feedback' },
    chooseHint: 'Choose a subject to see the fields you need to fill in.',
    name: 'Full name',
    email: 'Email address',
    phone: 'Phone number',
    phoneHint: 'Include the country code, for example +34 or +55.',
    organisation: 'Organisation',
    optional: '(optional)',
    orderInterest: 'Order interest',
    areaInterest: 'Area of interest',
    selectOption: 'Select an option',
    groups: { services: 'Services', products: 'Products', research: 'Research areas', other: 'Other' },
    otherOptions: {
      'Physical Model Development': 'Physical model development',
      'Events and programmes': 'Events and programmes',
      'Something else': 'Something else',
    },
    projectDetails: 'Project details',
    question: 'Your question',
    messageHint: 'Deadlines, budget range or links to existing work help us reply with specifics.',
    feedback: 'Your feedback',
    counter: '{count} of {max} characters',
    consentBefore: 'I agree that CS Development Technologies may use these details to respond to my message, as described in the',
    consentLink: 'Privacy Policy',
    honeypot: 'Leave this field empty',
    submit: { order: 'Send order request', enquiry: 'Send enquiry', feedback: 'Send feedback' },
    sending: 'Sending',
    sentNoun: { order: 'order request', enquiry: 'enquiry', feedback: 'feedback' },
    success:
      'Thank you, {name}. Your {kind} has been received. A confirmation is on its way to {email}, and we will reply from there.',
    error: 'Your message could not be sent. Check your connection and try again, or email us at {email}.',
    mailto:
      'Your email app should open with your {kind} filled in. Press send there to complete it. If nothing opened, email us directly at {email}.',
    errors: {
      subject: 'Select a subject.',
      nameRequired: 'Enter your full name.',
      nameShort: 'Name must be at least 2 characters.',
      nameLong: 'Name must be 100 characters or fewer.',
      emailRequired: 'Enter your email address.',
      emailInvalid: 'Enter a valid email address, for example name@company.com.',
      feedbackRequired: 'Write your feedback.',
      feedbackShort: 'Feedback must be at least 10 characters.',
      feedbackLong: 'Feedback must be {max} characters or fewer.',
      phoneRequired: 'Enter your phone number.',
      phoneInvalid: 'Enter a valid phone number, including the country code.',
      interestOrder: 'Select what you would like to order.',
      interestEnquiry: 'Select an area of interest.',
      messageLong: 'Message must be {max} characters or fewer.',
      consent: 'Tick the box to agree before sending.',
    },
  },

  footer: {
    ctaTitle: 'Ready to scope your',
    ctaEmphasis: 'project?',
    ctaText: 'You receive a written scope with deliverables, milestones and a quote before any work begins.',
    primary: 'Book a consultation',
    secondary: 'Explore our research areas',
    tagline: 'Applied AI research and engineering, delivered with a written scope and a documented handover.',
    company: 'Company',
    work: 'Work',
    legal: 'Legal',
    about: 'About us',
    research: 'Research areas',
    events: 'Events',
    contact: 'Contact us',
    services: 'Services',
    products: 'Products',
    order: 'Place an order',
    privacy: 'Privacy Policy',
    terms: 'Terms and Conditions',
    rights: 'All rights reserved.',
  },

  legal: {
    back: 'Back to home',
    lastUpdated: 'Last updated:',
    privacyTitle: 'Privacy Policy',
    termsTitle: 'Terms and Conditions',
    englishOnly: null,
  },

  notFound: {
    title: 'This page does not exist.',
    text: 'The link may be out of date. Return to the home page to find what you need.',
    cta: 'Go to the home page',
  },
};

export default en;
