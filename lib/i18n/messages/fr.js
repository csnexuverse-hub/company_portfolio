/*
 * French. Formal register ("vous"). A non-breaking space (\u00a0) precedes
 * ? ! : as French typography requires. Have a native speaker review before
 * launch; keys must match en.js exactly.
 */
const fr = {
  meta: {
    title: 'CS Development Technologies | Recherche et ingénierie en IA appliquée',
    description:
      "Recherche et ingénierie en IA appliquée pour la santé, l'agriculture, l'industrie, la sécurité et les technologies du langage, de la première expérience au système en production.",
    ogDescription: 'Recherche et ingénierie en IA appliquée, de la première expérience au système en production.',
  },

  common: {
    skip: 'Aller au contenu',
    bookConsultation: 'Demander un rendez-vous',
    home: 'CS Development Technologies, accueil',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    language: 'Langue',
    themeToLight: 'Passer au thème clair',
    themeToDark: 'Passer au thème sombre',
    themeSwitch: 'Changer de thème',
    opensNewTab: "s'ouvre dans un nouvel onglet",
  },

  nav: {
    about: 'À propos',
    research: 'Recherche',
    services: 'Services',
    products: 'Produits',
    events: 'Événements',
    contact: 'Contact',
    allResearch: 'Voir tous les domaines de recherche',
    allServices: 'Voir tous les services',
    allProducts: 'Voir tous les produits',
  },

  hero: {
    badge: "L'ingénierie guidée par la recherche",
    titleStart: 'Recherche et ingénierie en IA appliquée,',
    titleEnd: 'de la première expérience au',
    titleEmphasis: 'système en production.',
    lede:
      "CS Development Technologies intervient dans la santé, l'agriculture, l'industrie, la sécurité et les technologies du langage, et conçoit des modèles, des pipelines de données et des logiciels qui résistent à un examen rigoureux.",
    primary: 'Demander un rendez-vous',
    secondary: 'Découvrir nos domaines de recherche',
    marqueeLabel: 'Nos domaines',
  },

  about: {
    badge: 'À propos',
    title: 'Un partenaire de recherche et d\u2019ingénierie.',
    paragraphs: [
      "CS Development Technologies est une société de recherche et d'ingénierie appliquées basée à Pune, en Inde. Notre équipe a contribué à des travaux en imagerie médicale, détection des maladies des cultures, diagnostic de pannes industrielles, sécurité des réseaux, apprentissage fédéré et IA pour les langues régionales.",
      "Nous travaillons là où la recherche rencontre l'ingénierie\u00a0: concevoir l'expérience, préparer les données, construire et valider le modèle, puis en faire un logiciel utilisable. Une seule équipe mène le projet du premier échange jusqu'à une livraison documentée.",
      "Nous sommes clairs sur ce que nous faisons et ne faisons pas. Notre accompagnement en recherche relève du conseil\u00a0: nous orientons, relisons, développons et formons. Les idées, les décisions et la paternité des travaux restent toujours à nos clients.",
    ],
    processTitle: "Le déroulement d'une mission",
    process: [
      { title: 'Premier échange', text: 'Nous discutons de vos objectifs, de vos contraintes et de vos délais.' },
      { title: 'Proposition écrite', text: 'Vous recevez un périmètre avec les livrables, les jalons et un devis.' },
      { title: 'Livraison par jalons', text: 'Le travail est revu avec vous à chaque étape.' },
      { title: 'Livraison et suivi', text: 'Nous livrons le travail avec sa documentation et restons disponibles pour vos questions.' },
    ],
    principles: [
      { title: 'Périmètre écrit', text: 'Les livrables, les délais et les coûts sont convenus avant de commencer.' },
      { title: 'Confidentialité', text: 'Les éléments de nos clients sont traités de façon confidentielle. Nous signons des accords de confidentialité sur demande.' },
      { title: 'Intégrité académique', text: "L'accompagnement en recherche relève du conseil. Nous ne rendons jamais un travail au nom de quelqu'un." },
      { title: 'Livraison documentée', text: 'Vous recevez le travail, sa documentation et tout le nécessaire pour le maintenir.' },
    ],
  },

  research: {
    badge: 'Domaines de recherche',
    title: 'Sept domaines, une même exigence.',
    description:
      'Notre équipe a contribué à des travaux de recherche et développement appliqués dans ces domaines. Les missions réalisées pour nos clients sont décrites par thème uniquement\u00a0; les résultats leur appartiennent.',
    areas: {
      health: {
        title: 'IA médicale et santé',
        description: "Des modèles de diagnostic fondés sur l'imagerie clinique, les signaux et les données patients.",
        topics: [
          'Diagnostic sur radiographies dentaires',
          'Détection du cancer du poumon',
          "Dépistage de l'autisme",
          'Risque de diabète gestationnel',
          'Risque cardiaque à partir d\u2019objets connectés et d\u2019ECG',
        ],
      },
      agriculture: {
        title: 'Agriculture et intelligence des cultures',
        description: "De la photo d'une seule feuille aux cultures d'une région entière.",
        topics: [
          'Détection précoce des maladies du grenadier',
          'Détection des ravageurs de la vigne',
          'Reconstruction 3D de feuilles à partir d\u2019images 2D',
          'Prédiction des maladies à partir des nutriments du sol',
          "Prévision de l'humidité du sol et aptitude des cultures",
        ],
      },
      industrial: {
        title: 'IA industrielle et embarquée',
        description: 'Une intelligence qui fonctionne là où se trouvent les machines et les réseaux.',
        topics: [
          'Détection de pannes sur les machines industrielles',
          "Apprentissage en essaim qui partage la connaissance des pannes entre machines",
          'Modèles inspirés du système immunitaire',
          "Délestage de calcul entre terminal, edge et cloud en 5G",
        ],
      },
      privacy: {
        title: 'Apprentissage fédéré et protection de la vie privée',
        description: 'Entraîner des modèles entre institutions sans déplacer les données sensibles.',
        topics: ['Apprentissage fédéré en santé', 'Confidentialité fondée sur la cryptographie', 'Agrégation sécurisée de modèles'],
      },
      security: {
        title: 'Analytique en cybersécurité',
        description: "De l'apprentissage automatique qui détecte les menaces au moment où elles surviennent.",
        topics: ['Détection de botnets en temps réel', 'Analyse du comportement des utilisateurs et des entités', 'Sécurité des transactions en cryptomonnaie'],
      },
      earth: {
        title: 'Observation de la Terre et risque climatique',
        description: 'Des données satellitaires et environnementales transformées en décisions.',
        topics: ["Prévision des inondations dans des régions de l'Inde", 'Cartographie des cultures par imagerie satellite', 'Réanalyses climatiques pour la modélisation des sols'],
      },
      language: {
        title: 'IA du langage, de la parole et multimodale',
        description: 'Une IA qui fonctionne dans les langues que les gens parlent vraiment.',
        topics: [
          'Modèles de traduction pour le hindi et le marathi',
          "Recherche multimodale dans les langues de l'Inde",
          'Reconnaissance des émotions dans la voix',
          'Résumé automatique de vidéos',
        ],
      },
    },
    methods: {
      title: 'Des méthodes communes à tous nos domaines',
      description: 'La même rigueur de validation, quel que soit le domaine.',
      items: [
        'Vision par ordinateur',
        'Prévision de séries temporelles',
        'Traitement automatique du langage',
        'IA explicable',
        'Audits de fuite de données',
        'Tests de significativité statistique',
        "Intervalles d'incertitude",
        'Déploiement embarqué',
      ],
    },
    discuss: 'Proposer une collaboration de recherche',
  },

  features: {
    models: {
      badge: 'Modèles d\u2019apprentissage automatique',
      title: 'Des modèles sur mesure, conçus selon vos besoins.',
      text: "Des modèles sur mesure, conçus selon vos besoins, évalués à l'aide de métriques claires et déployés là où ils sont utiles, avec une documentation sur leur entraînement.",
      cta: 'Demander un rendez-vous',
      aria: "Schéma d'un réseau de neurones qui se construit couche par couche, des données aux caractéristiques, aux couches cachées et à la sortie.",
      diagram: ['données', 'variables', 'couches', 'sortie'],
    },
    data: {
      badge: 'Ingénierie des données',
      title: 'Collecter, nettoyer et structurer les données.',
      text: 'Nous collectons, nettoyons et structurons les données, puis les analysons avec des méthodes adaptées à la question et présentons les résultats clairement.',
      cta: 'Voir nos services',
      aria: "Schéma d'un pipeline de données qui se construit\u00a0: des lignes brutes entrent, passent par les étapes de collecte, nettoyage, validation et analyse, puis ressortent ordonnées.",
      stages: [
        { label: 'collecter', sub: 'sources' },
        { label: 'nettoyer', sub: 'nuls, types' },
        { label: 'valider', sub: 'schéma' },
        { label: 'analyser', sub: 'résultats' },
      ],
    },
    prototypes: {
      badge: 'Conception de maquettes physiques',
      title: 'Des maquettes concrètes pour apprendre en situation réelle.',
      text: 'Des maquettes physiques fonctionnelles, des mécanismes robotiques aux kits pédagogiques sur la gravité, les mathématiques, les circuits et plus encore, réalisées sur mesure pour les salles de classe, les laboratoires, les expositions et les démonstrations.',
      cta: 'Demander un rendez-vous',
      aria: "Schéma d'un bras robotique avec engrenages, articulations et cotes qui s'assemble, illustrant la conception de maquettes physiques.",
      labels: ['moteur', 'articulation A', 'effecteur'],
    },
  },

  services: {
    badge: 'Services',
    title: 'Notre façon de travailler avec vous.',
    description:
      "Une mission peut combiner plusieurs services, par exemple la préparation des données suivie d'une analyse et d'un rapport technique.",
    items: {
      'svc-research': {
        title: 'Conseil en recherche et en méthodologie',
        short: "Conception d'études, méthodes et encadrement",
        description:
          "Un accompagnement des chercheurs et des équipes pour formuler les questions, choisir les méthodes et concevoir des études qui résistent à l'examen. Nous conseillons et encadrons\u00a0; la recherche et ses conclusions vous appartiennent.",
        points: [
          "État de l'art et identification des lacunes",
          'Conception de la recherche et choix de la méthodologie',
          'Planification expérimentale et statistique',
          "Séances d'encadrement et points d'avancement",
        ],
      },
      'svc-writing': {
        title: 'Accompagnement à la rédaction scientifique et technique',
        short: 'Révision, structure et mise en forme',
        description:
          'Un accompagnement éditorial qui améliore la clarté, la structure et la présentation des manuscrits, propositions et rapports, tandis que le contenu et la paternité restent les vôtres.',
        points: [
          'Révision structurelle et linguistique',
          'Références et mise en forme selon des normes comme APA et IEEE',
          'Adaptation aux consignes des revues et des conférences',
          'Relecture et contrôle de cohérence',
        ],
      },
      'svc-implementation': {
        title: 'Ingénierie des systèmes et mise en œuvre',
        short: 'Prototypes, intégration et déploiement',
        description:
          'Conception, intégration et déploiement de systèmes logiciels et matériels, des prototypes et simulations aux environnements de production.',
        points: [
          'Architecture et conception technique',
          'Prototypes, simulations et montages expérimentaux',
          'Intégration du matériel, du logiciel et de services tiers',
          'Déploiement, tests et livraison',
        ],
      },
      'svc-data': {
        title: 'Ingénierie et analyse des données',
        short: 'Préparation, analyse et reporting',
        description:
          'Nous collectons, nettoyons et structurons les données, puis les analysons avec des méthodes adaptées à la question et présentons les résultats clairement.',
        points: [
          'Plans de collecte et pipelines de données',
          'Nettoyage, transformation et validation',
          'Analyse et modélisation statistiques',
          'Visualisation et interprétation des résultats',
        ],
      },
      'svc-docs': {
        title: 'Documentation technique',
        short: 'Spécifications, manuels et guides',
        description:
          'Une documentation précise des systèmes, logiciels et processus, rédigée pour celles et ceux qui les utiliseront et les maintiendront.',
        points: [
          "Documentation des systèmes et de l'architecture",
          'Références d\u2019API et guides pour développeurs',
          'Manuels utilisateur et modes opératoires normalisés',
          'Rapports de projet et spécifications techniques',
        ],
      },
      'svc-review': {
        title: 'Revue et validation techniques',
        short: 'Vérification indépendante du code et des résultats',
        description:
          'Une revue indépendante du code, des modèles, des expériences et des résultats, remise sous forme de rapport écrit présentant les constats et les corrections recommandées.',
        points: [
          'Revue du code et de l\u2019architecture',
          'Vérification de la reproductibilité des expériences et des analyses',
          'Évaluation des modèles et tests de performance',
          'Rapport écrit avec recommandations hiérarchisées',
        ],
      },
    },
    notListedBefore: 'Vous cherchez autre chose\u00a0?',
    notListedLink: 'Décrivez votre besoin dans une demande',
    notListedAfter: 'et nous vous dirons franchement si nous pouvons vous aider.',
  },

  products: {
    badge: 'Produits',
    title: 'Des logiciels conçus selon votre cahier des charges.',
    description:
      "Nous développons dans quatre domaines. Dites-nous ce dont vous avez besoin et nous définirons le périmètre avec vous, qu'il s'agisse d'une première version ou de l'évolution d'un système existant.",
    typicalWork: 'Réalisations types',
    items: {
      'prod-mobile': {
        title: 'Applications mobiles',
        short: 'Applications natives et multiplateformes',
        description:
          'Des applications natives Android et iOS, et des applications multiplateformes partageant un même code, conçues pour fonctionner de façon fiable sur de vrais appareils et réseaux.',
        points: ['Applications clients et adhérents', 'Collecte de données terrain hors connexion', 'Applications compagnons pour le matériel et les objets connectés'],
        cta: 'Parler d\u2019une application mobile',
      },
      'prod-web': {
        title: 'Plateformes web',
        short: 'Portails, tableaux de bord et applications web',
        description:
          'Des applications web, portails et tableaux de bord conçus pour accompagner la croissance des utilisateurs et des données, avec un accès sécurisé et un code facile à maintenir.',
        points: ['Portails clients et adhérents', "Tableaux de bord d'administration et outils internes", 'Sites institutionnels avec gestion de contenu'],
        cta: 'Parler d\u2019une plateforme web',
      },
      'prod-software': {
        title: "Logiciels d'entreprise",
        short: 'Systèmes de bureau et cloud',
        description:
          "Des systèmes de bureau et cloud sur mesure, adaptés aux méthodes de travail de l'organisation et connectés aux outils qu'elle utilise déjà.",
        points: ['Automatisation des flux de travail et des processus', 'Systèmes de stock, de facturation et de reporting', 'Intégration entre systèmes existants'],
        cta: "Parler d'un logiciel d'entreprise",
      },
      'prod-ml': {
        title: "Modèles d'apprentissage automatique",
        short: 'Modèles sur mesure, des données au déploiement',
        description:
          "Des modèles sur mesure construits à partir de vos données, évalués à l'aide de métriques claires et déployés là où ils sont utiles, avec une documentation sur leur entraînement.",
        points: ['Classification et prédiction', 'Vision par ordinateur et traitement automatique du langage', 'Déploiement et supervision des modèles'],
        cta: "Parler d'un modèle d'apprentissage automatique",
      },
    },
  },

  events: {
    badge: 'Événements',
    title: 'Rassembler au-delà du travail.',
    description:
      "En plus de notre activité technique, nous préparons un programme d'événements pour les étudiants, les professionnels et les communautés.",
    note: "Ce programme n'a pas encore commencé et aucune date n'a été annoncée. Inscrivez-vous et nous vous préviendrons dès que le premier événement sera confirmé.",
    cta: 'Manifester mon intérêt',
    planned: 'Prévu',
    items: [
      { title: 'Tournois sportifs', description: "Tournois interuniversitaires et inter-entreprises en sports collectifs et individuels." },
      { title: 'Théâtre', description: 'Spectacles et concours de théâtre qui offrent une scène aux interprètes et aux auteurs.' },
      { title: 'Ateliers et séminaires techniques', description: 'Séances pratiques sur le logiciel, les données et la recherche, animées par des professionnels.' },
      { title: 'Soirées culturelles', description: 'Musique, danse et spectacles culturels pour les communautés et les organisations partenaires.' },
    ],
  },

  faq: {
    title: 'Vos questions, nos réponses',
    items: [
      {
        q: "Comment se déroule une mission\u00a0?",
        a: "Tout commence par un échange sur vos objectifs, vos contraintes et vos délais. Nous vous envoyons ensuite une proposition écrite avec les livrables, les jalons et un devis. Le travail ne démarre qu'après votre accord, avance par jalons avec une revue à chaque étape et se termine par une livraison documentée.",
      },
      {
        q: "Travaillez-vous avec des clients hors d'Inde\u00a0?",
        a: "Oui. Nous travaillons à distance avec des organisations d'autres pays, échangeons en anglais et planifions nos rendez-vous pendant les heures de bureau européennes et sud-américaines.",
      },
      {
        q: 'Rédigez-vous des devoirs ou des thèses à ma place\u00a0?',
        a: "Non. Nos services de recherche et de rédaction relèvent du conseil, de la révision et de la formation. Nous orientons la méthodologie, relisons les brouillons, améliorons la clarté et transmettons des techniques, mais nous ne produisons pas de travaux notés, d'examens, de mémoires ou de thèses destinés à être présentés comme le travail d'une autre personne. Nous refusons ou interrompons toute mission dont nous pensons qu'elle serait utilisée ainsi.",
      },
      {
        q: 'Mes données restent-elles confidentielles\u00a0?',
        a: "Oui. Les éléments que vous partagez servent uniquement à votre mission et sont traités de façon confidentielle. Sur demande, nous signons un accord de confidentialité avant tout partage d'informations sensibles, et nous travaillons sur des données anonymisées chaque fois que le projet le permet.",
      },
      {
        q: 'Comment obtenir un devis\u00a0?',
        a: "Envoyez une commande ou une demande via le formulaire de contact, avec une brève description de votre besoin et d'éventuelles échéances. Nous vous répondons pour définir le périmètre, puis vous envoyons un devis écrit. Rien n'est facturé avant que vous n'acceptiez une proposition.",
      },
      {
        q: 'À qui appartient le travail à la fin du projet\u00a0?',
        a: "Sauf mention contraire dans votre contrat, la propriété des livrables créés spécifiquement pour vous vous est transférée dès réception du paiement intégral. Vous recevez aussi la documentation nécessaire pour les maintenir.",
      },
    ],
  },

  contact: {
    badge: 'Contact',
    title: 'Dites-nous ce dont vous avez besoin.',
    description:
      'Passez une commande, posez une question ou donnez-nous votre avis. Pour les commandes et les demandes, nous vous répondons pour discuter du périmètre, des délais et du prix.',
    email: 'E-mail',
    phone: 'Téléphone',
    hoursLabel: 'Horaires',
    hours: "Du lundi au samedi, de 10\u00a0h à 18\u00a0h (heure de l'Inde)",
    office: 'Bureau',
    follow: 'Suivez-nous',
  },

  form: {
    title: 'Envoyez-nous un message',
    requiredBefore: 'Les champs marqués',
    requiredAfter: 'sont obligatoires.',
    requiredSr: "d'un astérisque",
    subject: 'Objet',
    subjectPlaceholder: 'Choisissez un objet',
    subjects: { order: 'Nouvelle commande', enquiry: 'Demande générale', feedback: 'Avis' },
    chooseHint: 'Choisissez un objet pour afficher les champs à remplir.',
    name: 'Nom complet',
    email: 'Adresse e-mail',
    phone: 'Numéro de téléphone',
    phoneHint: 'Indiquez l\u2019indicatif du pays, par exemple +33 ou +55.',
    organisation: 'Organisation',
    optional: '(facultatif)',
    orderInterest: 'Objet de la commande',
    areaInterest: "Domaine d'intérêt",
    selectOption: 'Choisissez une option',
    groups: { services: 'Services', products: 'Produits', research: 'Domaines de recherche', other: 'Autre' },
    otherOptions: {
      'Physical Model Development': 'Conception de maquettes physiques',
      'Events and programmes': 'Événements et programmes',
      'Something else': 'Autre chose',
    },
    projectDetails: 'Détails du projet',
    question: 'Votre question',
    messageHint: 'Les échéances, une fourchette de budget ou des liens vers des travaux existants nous aident à vous répondre précisément.',
    feedback: 'Votre avis',
    counter: '{count} sur {max} caractères',
    consentBefore: "J'accepte que CS Development Technologies utilise ces informations pour répondre à mon message, comme décrit dans la",
    consentLink: 'Politique de confidentialité',
    honeypot: 'Laissez ce champ vide',
    submit: { order: 'Envoyer la commande', enquiry: 'Envoyer la demande', feedback: "Envoyer l'avis" },
    sending: 'Envoi en cours',
    sentNoun: { order: 'commande', enquiry: 'demande', feedback: 'avis' },
    success:
      'Merci, {name}. Nous avons bien reçu votre message ({kind}). Une confirmation est en route vers {email}, et nous vous répondrons à cette adresse.',
    error: "Votre message n'a pas pu être envoyé. Vérifiez votre connexion et réessayez, ou écrivez-nous à {email}.",
    mailto:
      "Votre messagerie devrait s'ouvrir avec votre message ({kind}) déjà rédigé. Cliquez sur Envoyer pour terminer. Si rien ne s'est ouvert, écrivez-nous directement à {email}.",
    errors: {
      subject: 'Choisissez un objet.',
      nameRequired: 'Saisissez votre nom complet.',
      nameShort: 'Le nom doit comporter au moins 2 caractères.',
      nameLong: 'Le nom ne doit pas dépasser 100 caractères.',
      emailRequired: 'Saisissez votre adresse e-mail.',
      emailInvalid: 'Saisissez une adresse e-mail valide, par exemple nom@entreprise.com.',
      feedbackRequired: 'Rédigez votre avis.',
      feedbackShort: "L'avis doit comporter au moins 10 caractères.",
      feedbackLong: "L'avis ne doit pas dépasser {max} caractères.",
      phoneRequired: 'Saisissez votre numéro de téléphone.',
      phoneInvalid: "Saisissez un numéro valide, avec l'indicatif du pays.",
      interestOrder: 'Choisissez ce que vous souhaitez commander.',
      interestEnquiry: "Choisissez un domaine d'intérêt.",
      messageLong: 'Le message ne doit pas dépasser {max} caractères.',
      consent: 'Cochez la case pour donner votre accord avant l\u2019envoi.',
    },
  },

  footer: {
    ctaTitle: 'Prêt à définir votre',
    ctaEmphasis: 'projet\u00a0?',
    ctaText: 'Avant tout démarrage, vous recevez par écrit le périmètre, les livrables, les jalons et un devis.',
    primary: 'Demander un rendez-vous',
    secondary: 'Découvrir nos domaines de recherche',
    tagline: 'Recherche et ingénierie en IA appliquée, avec un périmètre écrit et une livraison documentée.',
    company: 'Entreprise',
    work: 'Activités',
    legal: 'Mentions légales',
    about: 'À propos',
    research: 'Domaines de recherche',
    events: 'Événements',
    contact: 'Contact',
    services: 'Services',
    products: 'Produits',
    order: 'Passer commande',
    privacy: 'Politique de confidentialité',
    terms: 'Conditions générales',
    rights: 'Tous droits réservés.',
  },

  legal: {
    back: "Retour à l'accueil",
    lastUpdated: 'Dernière mise à jour\u00a0:',
    privacyTitle: 'Politique de confidentialité',
    termsTitle: 'Conditions générales',
    englishOnly: "Ce document n'est disponible qu'en anglais. Seule la version anglaise fait foi.",
  },

  notFound: {
    title: "Cette page n'existe pas.",
    text: "Le lien est peut-être obsolète. Revenez à la page d'accueil pour trouver ce que vous cherchez.",
    cta: "Aller à la page d'accueil",
  },
};

export default fr;
