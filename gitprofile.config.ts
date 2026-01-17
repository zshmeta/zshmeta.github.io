

const CONFIG = {
  github: {
    username: 'zshmeta', 
  },

  base: '/',
  projects: {
    github: {
      display: true, 
      header: 'GitHub Projects',
      mode: 'manual', 
      automatic: {
        sortBy: 'stars', 
        limit: 12, 
        exclude: {
          forks: true, 
          projects: [], 
        },
      },
      manual: {
        
        projects: [
          'zshmeta/bhcmarkets',
          'zshmeta/price-crawl',
          'zshmeta/bhcm-ui',
          'zshmeta/les-democrates',
          'zshmeta/zshmeta.dev',
          'zshmeta/whispc-api',
          'zshmeta/whispapi',
          'zshmeta/assad-renovations',
          'zshmeta/dotzshrc',
          'zshmeta/tarjm'
        ], 
      },
    },
    external: {
      header: 'Featured Projects',
      
      projects: [
        {
          title: 'BHC Markets',
          description:
            'A market-focused platform for tracking instruments, surfacing insights, and turning raw price data into actionable views.',
          imageUrl: 'https://opengraph.githubassets.com/1/zshmeta/bhcmarkets',
          link: 'https://github.com/zshmeta/bhcmarkets',
        },
        {
          title: 'Olympique de Marseille VSCode Theme',
          description: "A VSCode theme inspired by the colors of Olympique de Marseille football club.",
          imageUrl: 'https://opengraph.githubassets.com/1/zshmeta/olympique-de-marseille',
          link: 'https://marketplace.visualstudio.com/items?itemName=zshmeta.olympique-de-marseille-away',
        },
        {
          title: 'Price Crawl',
          description:
            'A data collection pipeline that crawls pricing sources, normalizes results, and prepares datasets for analysis and automation.',
          imageUrl: 'https://opengraph.githubassets.com/1/zshmeta/price-crawl',
          link: 'https://github.com/zshmeta/price-crawl',
        },
        {
          title: 'zshmeta.dev',
          description:
            'My personal site—projects, writing, and a living lab for experimenting with modern web tooling and UX polish.',
          imageUrl: 'https://opengraph.githubassets.com/1/zshmeta/zshmeta.dev',
          link: 'https://github.com/zshmeta/zshmeta.dev',
        },
        {
          title: 'Whispc API',
          description:
            'A lightweight API layer for speech-to-text workflows—built to make transcription simple to integrate into apps and pipelines.',
          imageUrl: 'https://opengraph.githubassets.com/1/zshmeta/whispc-api',
          link: 'https://github.com/zshmeta/whispc-api',
        },
        {
          title: 'dotzshrc',
          description:
            'My Zsh configuration and productivity tweaks—aliases, tooling, and a repeatable dev environment setup.',
          imageUrl: 'https://opengraph.githubassets.com/1/zshmeta/dotzshrc',
          link: 'https://github.com/zshmeta/dotzshrc',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio | zshmeta',
    description:
      'Developer portfolio featuring projects in web apps, tooling, and data pipelines.',
    imageURL: 'https://github.com/zshmeta.png',
  },
  social: {
    linkedin: '',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', 
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', 
    discord: '',
    telegram: '',
    website: '',
    phone: '',
    email: '',
  },
  resume: {
    fileUrl: 'https://rxresu.me/zshmeta/industrial-meaningful-wallaby', 
  },
  skills: [
    'TypeScript',
    'JavaScript',
    'React.js',
    'Node.js',
    'Python',
    'REST APIs',
    'Vite',
    'Docker',
    'Git',
    'CI/CD',
  ],
  experiences: [
    {
      company: 'Homelab - Open Cloud',
      position: 'Développeur Fullstack & DevOps',
      from: '2023',
      to: 'Present',
      companyLink: '',
    },
    {
      company: 'Portfolio de projets technique',
      position: 'Développeur FullStack',
      from: 'Jan 2023',
      to: 'Present',
      companyLink: '',
    },
    {
      company: 'Brokerage House Capital',
      position: 'Responsable de Comptes (Account Executive)',
      from: '2017',
      to: '2022',
      companyLink: '',
    },
    {
      company: 'Optus Singtel',
      position: 'Représentant Commercial',
      from: '2014',
      to: '2017',
      companyLink: '',
    },
    {
      company: 'ITCC - IT Consulting Company',
      position: 'Développeur Commercial',
      from: '2013',
      to: '2015',
      companyLink: '',
    }
  ],
  certifications: [
    {
      name: 'AWS Certified Developer',
      body: 'Cloud applications, serverless, microservices, S3, API Gateway, CI/CD',
      year: '2024',
      link: '',
    },
    {
      name: 'Red Hat Application Development Courses',
      body: 'Containers / OpenShift (Kubernetes for devs), middleware Java & microservices',
      year: '2024',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'AFPA',
      degree: 'Développeur Full-Stack (Titre Professionnel)',
      from: '2023',
      to: '2024',
    },
    {
      institution: 'Southern Cross University',
      degree: 'Bachelor in Economics',
      from: '2012',
      to: '2015',
    },
    {
      institution: 'Lycée Rempart',
      degree: 'Baccalauréat Économique et Sociale',
      from: '2008',
      to: '2008',
    },
  ],
  publications: [],
  
  blog: {
    source: 'dev', 
    username: '', 
    limit: 2, 
  },
  googleAnalytics: {
    id: '', 
  },
  
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',

    
    
    disableSwitch: false,

    
    
    respectPrefersColorScheme: false,

    
    displayAvatarRing: true,

    
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  
  footer: `Made with <a 
      class="text-primary" href="https://github.com/zshmeta"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
