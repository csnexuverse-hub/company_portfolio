/*
 * Brazilian Portuguese ("você"). Have a native speaker review before launch;
 * keys must match en.js exactly.
 */
const ptBr = {
  meta: {
    title: 'CS Development Technologies | Pesquisa e engenharia em IA aplicada',
    description:
      'Pesquisa e engenharia em IA aplicada para saúde, agricultura, sistemas industriais, segurança e tecnologias de linguagem, do primeiro experimento ao sistema em produção.',
    ogDescription: 'Pesquisa e engenharia em IA aplicada, do primeiro experimento ao sistema em produção.',
  },

  common: {
    skip: 'Pular para o conteúdo',
    bookConsultation: 'Agendar uma conversa',
    home: 'CS Development Technologies, página inicial',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    language: 'Idioma',
    themeToLight: 'Mudar para o tema claro',
    themeToDark: 'Mudar para o tema escuro',
    themeSwitch: 'Mudar tema',
    opensNewTab: 'abre em uma nova aba',
  },

  nav: {
    about: 'Sobre nós',
    research: 'Pesquisa',
    services: 'Serviços',
    products: 'Produtos',
    events: 'Eventos',
    contact: 'Contato',
    allResearch: 'Ver todas as áreas de pesquisa',
    allServices: 'Ver todos os serviços',
    allProducts: 'Ver todos os produtos',
  },

  hero: {
    badge: 'Engenharia orientada pela pesquisa',
    titleStart: 'Pesquisa e engenharia em IA aplicada,',
    titleEnd: 'do primeiro experimento ao',
    titleEmphasis: 'sistema em produção.',
    lede:
      'A CS Development Technologies atua em saúde, agricultura, sistemas industriais, segurança e tecnologias de linguagem, desenvolvendo modelos, pipelines de dados e software capazes de resistir a uma avaliação rigorosa.',
    primary: 'Agendar uma conversa',
    secondary: 'Conheça nossas áreas de pesquisa',
    marqueeLabel: 'Onde atuamos',
  },

  about: {
    badge: 'Sobre nós',
    title: 'Um parceiro de pesquisa e engenharia.',
    paragraphs: [
      'A CS Development Technologies é uma empresa de pesquisa e engenharia aplicadas sediada em Pune, na Índia. Nossa equipe contribuiu com trabalhos em imagem médica, detecção de doenças em culturas agrícolas, diagnóstico de falhas industriais, segurança de redes, aprendizado federado e IA para idiomas regionais.',
      'Trabalhamos onde a pesquisa encontra a engenharia: desenhamos o experimento, preparamos os dados, construímos e validamos o modelo e o transformamos em software que as pessoas conseguem usar. Uma única equipe conduz o projeto da primeira conversa até uma entrega documentada.',
      'Somos claros sobre o que fazemos e o que não fazemos. Nosso apoio à pesquisa é consultivo: orientamos, revisamos, desenvolvemos e ensinamos. As ideias, as decisões e a autoria são sempre dos nossos clientes.',
    ],
    processTitle: 'Como funciona um projeto',
    process: [
      { title: 'Conversa inicial', text: 'Falamos sobre seus objetivos, restrições e prazos.' },
      { title: 'Proposta por escrito', text: 'Você recebe um escopo com entregas, marcos e um orçamento.' },
      { title: 'Entrega por marcos', text: 'O trabalho é revisado com você a cada etapa.' },
      { title: 'Entrega e suporte', text: 'Entregamos o trabalho com documentação e continuamos disponíveis para dúvidas.' },
    ],
    principles: [
      { title: 'Escopo por escrito', text: 'Entregas, prazos e custos são acordados antes de qualquer trabalho começar.' },
      { title: 'Confidencialidade', text: 'O material do cliente é tratado de forma confidencial. Assinamos acordos de confidencialidade quando solicitado.' },
      { title: 'Integridade acadêmica', text: 'O apoio à pesquisa é consultivo. Nunca entregamos trabalhos em nome de ninguém.' },
      { title: 'Entrega documentada', text: 'Você recebe o trabalho, a documentação e o necessário para mantê-lo.' },
    ],
  },

  research: {
    badge: 'Áreas de pesquisa',
    title: 'Sete áreas, o mesmo padrão de rigor.',
    description:
      'Nossa equipe contribuiu com pesquisa e desenvolvimento aplicados nestas áreas. Os trabalhos para clientes são descritos apenas por tema; os resultados pertencem aos nossos clientes.',
    areas: {
      health: {
        title: 'IA médica e em saúde',
        description: 'Modelos de diagnóstico baseados em imagens clínicas, sinais e dados de pacientes.',
        topics: [
          'Diagnóstico em radiografias odontológicas',
          'Detecção de câncer de pulmão',
          'Triagem de autismo',
          'Risco de diabetes gestacional',
          'Risco cardíaco a partir de vestíveis e ECG',
        ],
      },
      agriculture: {
        title: 'Agricultura e inteligência de culturas',
        description: 'Da foto de uma única folha às lavouras de uma região inteira.',
        topics: [
          'Detecção precoce de doenças na romã',
          'Detecção de pragas na videira',
          'Reconstrução 3D de folhas a partir de imagens 2D',
          'Previsão de doenças a partir de nutrientes do solo',
          'Previsão de umidade do solo e aptidão de culturas',
        ],
      },
      industrial: {
        title: 'IA industrial e na borda',
        description: 'Inteligência que funciona onde estão as máquinas e as redes.',
        topics: [
          'Detecção de falhas em máquinas industriais',
          'Aprendizado em enxame que compartilha o conhecimento de falhas entre máquinas',
          'Modelos inspirados no sistema imunológico',
          'Distribuição de tarefas entre dispositivo, borda e nuvem em 5G',
        ],
      },
      privacy: {
        title: 'Aprendizado federado e preservação da privacidade',
        description: 'Treinar modelos entre instituições sem mover dados sensíveis.',
        topics: ['Aprendizado federado em saúde', 'Privacidade baseada em criptografia', 'Agregação segura de modelos'],
      },
      security: {
        title: 'Análise de cibersegurança',
        description: 'Aprendizado de máquina que detecta ameaças no momento em que acontecem.',
        topics: ['Detecção de botnets em tempo real', 'Análise de comportamento de usuários e entidades', 'Segurança em transações de criptomoedas'],
      },
      earth: {
        title: 'Observação da Terra e risco climático',
        description: 'Dados de satélite e ambientais transformados em decisões.',
        topics: ['Previsão de enchentes em regiões da Índia', 'Mapeamento de culturas com imagens de satélite', 'Reanálise climática para modelagem do solo'],
      },
      language: {
        title: 'IA de linguagem, fala e multimodal',
        description: 'IA que funciona nos idiomas que as pessoas realmente falam.',
        topics: [
          'Modelos de tradução para hindi e marata',
          'Busca multimodal em idiomas da Índia',
          'Reconhecimento de emoções na fala',
          'Resumo automático de vídeos',
        ],
      },
    },
    methods: {
      title: 'Métodos que aplicamos em todas as áreas',
      description: 'A mesma disciplina de validação, qualquer que seja o campo.',
      items: [
        'Visão computacional',
        'Previsão de séries temporais',
        'Processamento de linguagem natural',
        'IA explicável',
        'Auditorias de vazamento de dados',
        'Testes de significância estatística',
        'Intervalos de incerteza',
        'Implantação na borda',
      ],
    },
    discuss: 'Propor uma colaboração de pesquisa',
  },

  features: {
    models: {
      badge: 'Modelos de aprendizado de máquina',
      title: 'Modelos sob medida a partir dos seus requisitos.',
      text: 'Modelos sob medida a partir dos seus requisitos, avaliados com métricas claras e implantados onde são necessários, com documentação de como foram treinados.',
      cta: 'Agendar uma conversa',
      aria: 'Diagrama de uma rede neural que se monta camada por camada, dos dados e atributos às camadas ocultas e à saída.',
      diagram: ['dados', 'atributos', 'camadas', 'saída'],
    },
    data: {
      badge: 'Engenharia de dados',
      title: 'Coletar, limpar e estruturar dados.',
      text: 'Coletamos, limpamos e estruturamos dados, analisamos com métodos adequados à pergunta e apresentamos os resultados com clareza.',
      cta: 'Ver nossos serviços',
      aria: 'Diagrama de um pipeline de dados se montando: linhas brutas entram, passam pelas etapas de coleta, limpeza, validação e análise e saem organizadas.',
      stages: [
        { label: 'coletar', sub: 'fontes' },
        { label: 'limpar', sub: 'nulos, tipos' },
        { label: 'validar', sub: 'esquema' },
        { label: 'analisar', sub: 'resultados' },
      ],
    },
    prototypes: {
      badge: 'Desenvolvimento de modelos físicos',
      title: 'Modelos concretos para o aprendizado na prática.',
      text: 'Modelos físicos funcionais, de mecanismos robóticos a kits didáticos de ciências sobre gravidade, matemática, circuitos e muito mais, feitos sob medida para salas de aula, laboratórios, exposições e demonstrações.',
      cta: 'Agendar uma conversa',
      aria: 'Diagrama de um braço robótico com engrenagens, juntas e cotas se montando, representando o desenvolvimento de modelos físicos.',
      labels: ['motor', 'junta A', 'efetuador'],
    },
  },

  services: {
    badge: 'Serviços',
    title: 'Como trabalhamos com você.',
    description:
      'Um projeto pode combinar vários serviços, por exemplo a preparação de dados seguida de uma análise e de um relatório técnico.',
    items: {
      'svc-research': {
        title: 'Consultoria em pesquisa e metodologia',
        short: 'Desenho do estudo, métodos e orientação',
        description:
          'Orientação para pesquisadores e equipes sobre como formular perguntas, escolher métodos e planejar estudos que resistam a uma avaliação rigorosa. Orientamos e acompanhamos; a pesquisa e suas conclusões são suas.',
        points: [
          'Revisão do estado da arte e identificação de lacunas',
          'Desenho da pesquisa e escolha da metodologia',
          'Planejamento experimental e estatístico',
          'Sessões de orientação e revisões de andamento',
        ],
      },
      'svc-writing': {
        title: 'Apoio à redação acadêmica e técnica',
        short: 'Revisão, estrutura e formatação',
        description:
          'Apoio editorial que melhora a clareza, a estrutura e a apresentação de manuscritos, propostas e relatórios, enquanto o conteúdo e a autoria continuam sendo seus.',
        points: [
          'Revisão estrutural e de linguagem',
          'Referências e formatação em normas como APA e IEEE',
          'Adequação às normas de periódicos e conferências',
          'Revisão final e verificação de consistência',
        ],
      },
      'svc-implementation': {
        title: 'Engenharia de sistemas e implementação',
        short: 'Protótipos, integração e implantação',
        description:
          'Projeto, integração e implantação de sistemas de software e hardware, de protótipos e simulações a ambientes de produção.',
        points: [
          'Arquitetura e projeto técnico',
          'Protótipos, simulações e montagens experimentais',
          'Integração de hardware, software e serviços de terceiros',
          'Implantação, testes e entrega',
        ],
      },
      'svc-data': {
        title: 'Engenharia e análise de dados',
        short: 'Preparação, análise e relatórios',
        description:
          'Coletamos, limpamos e estruturamos dados, analisamos com métodos adequados à pergunta e apresentamos os resultados com clareza.',
        points: [
          'Planos de coleta e pipelines de dados',
          'Limpeza, transformação e validação',
          'Análise e modelagem estatística',
          'Visualização e interpretação dos resultados',
        ],
      },
      'svc-docs': {
        title: 'Documentação técnica',
        short: 'Especificações, manuais e guias',
        description:
          'Documentação precisa de sistemas, software e processos, escrita para quem vai usá-los e mantê-los.',
        points: [
          'Documentação de sistemas e arquitetura',
          'Referências de API e guias para desenvolvedores',
          'Manuais do usuário e procedimentos operacionais padrão',
          'Relatórios de projeto e especificações técnicas',
        ],
      },
      'svc-review': {
        title: 'Revisão e validação técnica',
        short: 'Verificação independente de código e resultados',
        description:
          'Uma revisão independente de código, modelos, experimentos e resultados, entregue como relatório escrito com as constatações e as correções recomendadas.',
        points: [
          'Revisão de código e arquitetura',
          'Verificação da reprodutibilidade de experimentos e análises',
          'Avaliação de modelos e testes de desempenho',
          'Relatório escrito com recomendações priorizadas',
        ],
      },
    },
    notListedBefore: 'Precisa de algo que não está na lista?',
    notListedLink: 'Descreva em uma consulta',
    notListedAfter: 'e diremos com franqueza se podemos ajudar.',
  },

  products: {
    badge: 'Produtos',
    title: 'Software feito de acordo com a sua especificação.',
    description:
      'Desenvolvemos em quatro áreas. Conte o que você precisa e definiremos o escopo juntos, seja uma primeira versão ou a evolução de um sistema que você já usa.',
    typicalWork: 'Trabalhos típicos',
    items: {
      'prod-mobile': {
        title: 'Aplicativos móveis',
        short: 'Aplicativos nativos e multiplataforma',
        description:
          'Aplicativos nativos para Android e iOS, e aplicativos multiplataforma com um único código para os dois, feitos para funcionar bem em aparelhos e redes reais.',
        points: ['Aplicativos para clientes e associados', 'Coleta de dados em campo com modo offline', 'Aplicativos complementares para hardware e dispositivos IoT'],
        cta: 'Falar sobre um aplicativo',
      },
      'prod-web': {
        title: 'Plataformas web',
        short: 'Portais, painéis e aplicações web',
        description:
          'Aplicações web, portais e painéis projetados para crescer em usuários e dados, com acesso seguro e um código fácil de manter.',
        points: ['Portais para clientes e associados', 'Painéis administrativos e ferramentas internas', 'Sites institucionais com gestão de conteúdo'],
        cta: 'Falar sobre uma plataforma web',
      },
      'prod-software': {
        title: 'Software corporativo',
        short: 'Sistemas desktop e em nuvem',
        description:
          'Sistemas desktop e em nuvem sob medida, que se adaptam à forma como a organização já trabalha e se conectam às ferramentas que ela já usa.',
        points: ['Automação de fluxos de trabalho e processos', 'Sistemas de estoque, faturamento e relatórios', 'Integração entre sistemas existentes'],
        cta: 'Falar sobre software corporativo',
      },
      'prod-ml': {
        title: 'Modelos de aprendizado de máquina',
        short: 'Modelos sob medida, dos dados à implantação',
        description:
          'Modelos sob medida construídos com os seus dados, avaliados com métricas claras e implantados onde são necessários, com documentação de como foram treinados.',
        points: ['Classificação e previsão', 'Visão computacional e processamento de linguagem natural', 'Implantação e monitoramento de modelos'],
        cta: 'Falar sobre um modelo de aprendizado de máquina',
      },
    },
  },

  events: {
    badge: 'Eventos',
    title: 'Aproximando pessoas além do trabalho.',
    description:
      'Além do nosso trabalho técnico, estamos preparando uma programação de eventos para estudantes, profissionais e comunidades.',
    note: 'Esta programação ainda não começou e nenhuma data foi anunciada. Registre seu interesse e avisaremos quando o primeiro evento for confirmado.',
    cta: 'Registrar meu interesse',
    planned: 'Previsto',
    items: [
      { title: 'Torneios esportivos', description: 'Torneios universitários e corporativos em esportes coletivos e individuais.' },
      { title: 'Teatro', description: 'Montagens e festivais de teatro que dão palco a atores e autores.' },
      { title: 'Oficinas e seminários técnicos', description: 'Sessões práticas sobre software, dados e pesquisa, conduzidas por profissionais da área.' },
      { title: 'Noites culturais', description: 'Música, dança e apresentações culturais para comunidades e organizações parceiras.' },
    ],
  },

  faq: {
    title: 'Respostas para suas dúvidas',
    items: [
      {
        q: 'Como funciona um projeto?',
        a: 'Começa com uma conversa sobre seus objetivos, restrições e prazos. Depois enviamos uma proposta por escrito com entregas, marcos e orçamento. O trabalho só começa depois que você aceita, avança por marcos com revisão em cada etapa e termina com uma entrega documentada.',
      },
      {
        q: 'Vocês trabalham com clientes fora da Índia?',
        a: 'Sim. Trabalhamos remotamente com organizações de outros países, nos comunicamos em inglês e agendamos reuniões no horário comercial da Europa e da América do Sul.',
      },
      {
        q: 'Vocês escrevem trabalhos acadêmicos ou teses por mim?',
        a: 'Não. Nossos serviços de pesquisa e redação são consultivos, editoriais e educacionais. Orientamos a metodologia, revisamos rascunhos, melhoramos a clareza e ensinamos técnicas, mas não produzimos trabalhos avaliativos, provas, TCCs, dissertações ou teses para serem apresentados como trabalho de outra pessoa. Recusamos ou encerramos qualquer projeto quando acreditamos que ele seria usado dessa forma.',
      },
      {
        q: 'Meus dados ficam em sigilo?',
        a: 'Sim. O material que você compartilha é usado apenas no seu projeto e tratado de forma confidencial. Quando solicitado, assinamos um acordo de confidencialidade antes de você compartilhar qualquer informação sensível, e trabalhamos com dados anonimizados sempre que o projeto permite.',
      },
      {
        q: 'Como peço um orçamento?',
        a: 'Envie um pedido ou uma consulta pelo formulário de contato com uma breve descrição do que você precisa e de eventuais prazos. Respondemos para definir o escopo e depois enviamos um orçamento por escrito. Nada é cobrado antes de você aceitar uma proposta.',
      },
      {
        q: 'De quem é o trabalho quando o projeto termina?',
        a: 'Salvo disposição em contrário no seu acordo, a propriedade das entregas criadas especificamente para você passa a ser sua após o pagamento integral. Você também recebe a documentação necessária para mantê-las.',
      },
    ],
  },

  contact: {
    badge: 'Contato',
    title: 'Conte o que você precisa.',
    description:
      'Faça um pedido, tire uma dúvida ou conte o que achou do nosso trabalho. Para pedidos e consultas, respondemos para conversar sobre escopo, prazos e preço.',
    email: 'E-mail',
    phone: 'Telefone',
    hoursLabel: 'Horário de atendimento',
    hours: 'De segunda a sábado, das 10h às 18h (horário da Índia)',
    office: 'Escritório',
    follow: 'Siga-nos',
  },

  form: {
    title: 'Envie uma mensagem',
    requiredBefore: 'Os campos marcados com',
    requiredAfter: 'são obrigatórios.',
    requiredSr: 'asterisco',
    subject: 'Assunto',
    subjectPlaceholder: 'Selecione um assunto',
    subjects: { order: 'Novo pedido', enquiry: 'Consulta geral', feedback: 'Avaliação' },
    chooseHint: 'Escolha um assunto para ver os campos que você precisa preencher.',
    name: 'Nome completo',
    email: 'E-mail',
    phone: 'Telefone',
    phoneHint: 'Inclua o código do país, por exemplo +55 ou +34.',
    organisation: 'Organização',
    optional: '(opcional)',
    orderInterest: 'O que você quer encomendar',
    areaInterest: 'Área de interesse',
    selectOption: 'Selecione uma opção',
    groups: { services: 'Serviços', products: 'Produtos', research: 'Áreas de pesquisa', other: 'Outros' },
    otherOptions: {
      'Physical Model Development': 'Desenvolvimento de modelos físicos',
      'Events and programmes': 'Eventos e programas',
      'Something else': 'Outro assunto',
    },
    projectDetails: 'Detalhes do projeto',
    question: 'Sua pergunta',
    messageHint: 'Prazos, uma faixa de orçamento ou links para trabalhos existentes nos ajudam a responder com precisão.',
    feedback: 'Sua avaliação',
    counter: '{count} de {max} caracteres',
    consentBefore: 'Concordo que a CS Development Technologies use estes dados para responder à minha mensagem, conforme descrito na',
    consentLink: 'Política de Privacidade',
    honeypot: 'Deixe este campo em branco',
    submit: { order: 'Enviar pedido', enquiry: 'Enviar consulta', feedback: 'Enviar avaliação' },
    sending: 'Enviando',
    sentNoun: { order: 'pedido', enquiry: 'consulta', feedback: 'avaliação' },
    success:
      'Obrigado, {name}. Recebemos sua mensagem ({kind}). Uma confirmação está a caminho de {email}, e responderemos por lá.',
    error: 'Não foi possível enviar sua mensagem. Verifique sua conexão e tente novamente, ou escreva para {email}.',
    mailto:
      'Seu aplicativo de e-mail deve abrir com a mensagem ({kind}) já preenchida. Clique em enviar para concluir. Se nada abriu, escreva diretamente para {email}.',
    errors: {
      subject: 'Selecione um assunto.',
      nameRequired: 'Informe seu nome completo.',
      nameShort: 'O nome deve ter pelo menos 2 caracteres.',
      nameLong: 'O nome deve ter no máximo 100 caracteres.',
      emailRequired: 'Informe seu e-mail.',
      emailInvalid: 'Informe um e-mail válido, por exemplo nome@empresa.com.',
      feedbackRequired: 'Escreva sua avaliação.',
      feedbackShort: 'A avaliação deve ter pelo menos 10 caracteres.',
      feedbackLong: 'A avaliação deve ter no máximo {max} caracteres.',
      phoneRequired: 'Informe seu telefone.',
      phoneInvalid: 'Informe um telefone válido, com o código do país.',
      interestOrder: 'Selecione o que você quer encomendar.',
      interestEnquiry: 'Selecione uma área de interesse.',
      messageLong: 'A mensagem deve ter no máximo {max} caracteres.',
      consent: 'Marque a caixa para concordar antes de enviar.',
    },
  },

  footer: {
    ctaTitle: 'Vamos definir o escopo do seu',
    ctaEmphasis: 'projeto?',
    ctaText: 'Antes de começar, você recebe por escrito o escopo, as entregas, os marcos e um orçamento.',
    primary: 'Agendar uma conversa',
    secondary: 'Conheça nossas áreas de pesquisa',
    tagline: 'Pesquisa e engenharia em IA aplicada, com escopo por escrito e entrega documentada.',
    company: 'Empresa',
    work: 'Atuação',
    legal: 'Jurídico',
    about: 'Sobre nós',
    research: 'Áreas de pesquisa',
    events: 'Eventos',
    contact: 'Contato',
    services: 'Serviços',
    products: 'Produtos',
    order: 'Fazer um pedido',
    privacy: 'Política de Privacidade',
    terms: 'Termos e Condições',
    rights: 'Todos os direitos reservados.',
  },

  legal: {
    back: 'Voltar para o início',
    lastUpdated: 'Última atualização:',
    privacyTitle: 'Política de Privacidade',
    termsTitle: 'Termos e Condições',
    englishOnly: 'Este documento está disponível apenas em inglês. Somente a versão em inglês tem validade.',
  },

  notFound: {
    title: 'Esta página não existe.',
    text: 'O link pode estar desatualizado. Volte para a página inicial para encontrar o que procura.',
    cta: 'Ir para a página inicial',
  },
};

export default ptBr;
