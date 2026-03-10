// export const headshotUrl =
  // 'https://qcf.gatech.edu/sites/default/files/styles/bio_pic/public/pictures/2026-02/Stephen%20Diamond%20Sulimani.jpg?itok=2QqLlppH'

export const headshotUrl = '/professional_headshot.webp'

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#education', label: 'Education' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#activity', label: 'Activity' },
  { href: '#interests', label: 'Interests' },
  { href: '#contact', label: 'Contact' },
]

export const projects = [
  {
    name: 'Roots',
    description:
      'Led development of a financial platform for budgeting, investing, and credit services.',
    longDescription: 'Led development of a comprehensive financial platform integrating budgeting, investing, and credit services. Won Best Financial Hack. Built an AI-driven investment recommendations dashboard using Flask and PostgreSQL, aiming to democratize access to personalized financial planning tools.',
    language: 'Python',
    tech: ['Python', 'Pandas', 'Next.js', 'Flask', 'PostgreSQL'],
    url: 'https://devpost.com/software/roots-xk19te',
    updated: '2025',
  },
  {
    name: 'Sentiment-Driven Stock Predictor',
    description:
      'Developed a machine learning model for stock investment forecasts using financial news sentiment.',
    longDescription: 'Developed a machine learning model for stock investment forecasts utilizing natural language processing on financial news sentiment. Applied VADER and NLTK toolkits for robust sentiment analysis, and constructed a scalable data ingestion pipeline to feed the scikit-learn predictive models.',
    language: 'Python',
    tech: ['Python', 'Pandas', 'scikit-learn', 'NLTK', 'Git'],
    url: 'https://github.com/vennreddy490/Sentiment-Driven-Stock-Predictor',
    updated: '2025',
  },
  // {
  //   name: 'AlphaSweep',
  //   description: 'Quantitative research and trading tooling for systematic strategies.',
  //   language: 'Python',
  //   tech: ['Python', 'Pandas', 'NumPy', 'Backtesting'],
  //   url: 'https://github.com/StephenSulimani/AlphaSweep',
  //   updated: '2026',
  // },
  // {
  //   name: 'MeanReversalResearch',
  //   description: 'Statistical research on mean reversion strategies and market microstructure.',
  //   language: 'Python',
  //   tech: ['Python', 'Statistics', 'Research'],
  //   url: 'https://github.com/StephenSulimani/MeanReversalResearch',
  //   updated: '2025',
  // },
  // {
  //   name: 'UGAHacksX',
  //   description: 'Full-stack hackathon platform for event management and participant experience.',
  //   language: 'Svelte',
  //   tech: ['Svelte', 'TypeScript', 'Full-stack'],
  //   url: 'https://github.com/StephenSulimani/UGAHacksX',
  //   updated: '2025',
  // },
  {
    name: 'GroupMeBot',
    description: 'TypeScript library for building GroupMe bots with a clean, extensible API.',
    longDescription: 'An open-source TypeScript library designed to streamline the creation of GroupMe bots. It provides a clean, strongly-typed, and extensible API wrapper around the GroupMe REST endpoints, allowing developers to easily handle message events and bot replies without wrestling with the underlying HTTP requests.',
    language: 'TypeScript',
    tech: ['TypeScript', 'Node.js', 'REST API'],
    url: 'https://github.com/StephenSulimani/GroupMeBot',
    updated: '2024',
  },
  //   {
  //     name: 'EmailLookup',
  //     description: 'C# library to resolve SMTP, POP3, and IMAP servers for any email domain.',
  //     language: 'C#',
  //     tech: ['C#', '.NET', 'DNS'],
  //     url: 'https://github.com/StephenSulimani/EmailLookup',
  //     updated: '2020',
  //   },
]

export const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'JavaScript', icon: 'javascript', color: '#F7DF1E' },
      { name: 'TypeScript', icon: 'typescript', color: '#3178C6' },
      { name: 'Python', icon: 'python', color: '#3776AB' },
      { name: 'Java', icon: 'java', color: '#ED8B00', localIcon: '/java.svg' },
      { name: 'C#', icon: 'dotnet', color: '#512BD4', localIcon: '/csharp.svg' },
      { name: 'Go', icon: 'go', color: '#00ADD8' },
      { name: 'C', icon: 'c', color: '#A8B9CC' },
      { name: 'C++', icon: 'cplusplus', color: '#00599C' },
      { name: 'Ruby', icon: 'ruby', color: '#CC342D' },
      { name: 'PHP', icon: 'php', color: '#777BB4' }
    ],
  },
  {
    title: 'Frameworks & libraries',
    skills: [
      { name: 'React', icon: 'react', color: '#61DAFB' },
      { name: 'Svelte', icon: 'svelte', color: '#FF3E00' },
      { name: 'SvelteKit', icon: 'svelte', color: '#FF3E00' },
      { name: 'Next.js', icon: 'nextdotjs', color: '#000000' },
      { name: 'Node.js', icon: 'nodedotjs', color: '#339933' },
      { name: 'Flask', icon: 'flask', color: '#000000' },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'PostgreSQL', icon: 'postgresql', color: '#4169E1' },
      { name: 'MongoDB', icon: 'mongodb', color: '#47A248' },
      { name: 'MySQL', icon: 'mysql', color: '#4479A1' },
      { name: 'SQLite', icon: 'sqlite', color: '#003B57' },
      { name: 'Redis', icon: 'redis', color: '#DC382D' },
    ],
  },
  {
    title: 'Operating Systems',
    skills: [
      { name: 'Linux', icon: 'linux', color: '#000000' },
      { name: 'macOS', icon: 'apple', color: '#000000' },
      { name: 'Arch', icon: 'archlinux', color: '#1793D1' },
      { name: 'Ubuntu', icon: 'ubuntu', color: '#E95420' },
      { name: 'Windows', icon: 'windows', color: '#0078D6', localIcon: '/windows.png' },
    ]
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', icon: 'amazonaws', color: '#FF9900', localIcon: '/amazon_aws.png' },
      { name: 'Google Cloud', icon: 'googlecloud', color: '#4285F4' },
      { name: 'Docker', icon: 'docker', color: '#2496ED' },
      { name: 'Git', icon: 'git', color: '#F05032' },
      { name: 'GitHub', icon: 'github', color: '#000000' }
    ],
  },
  {
    title: 'Specializations',
    skills: [
      { name: 'Quant Finance', icon: 'tradingview', color: '#2962FF' },
      { name: 'Data Science', icon: 'pandas', color: '#150458' },
      { name: 'Machine Learning', icon: 'tensorflow', color: '#FF6F00' },
    ],
  },
]

export const education = [
  {
    degree: 'Master of Science in Quantitative and Computational Finance',
    institution: 'Georgia Institute of Technology, Scheller College of Business',
    location: 'Atlanta, GA',
    period: 'January 2026 – May 2027',
    logo: '/georgia-tech-logo.png',
    details: [
      'Coursework: Derivative Securities, Fixed Income Securities, Numerical Methods in Finance, GenAI in Finance.',
    ],
  },
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of Georgia, School of Computing',
    location: 'Athens, GA',
    period: 'August 2023 – December 2025',
    logo: '/uga-logo.png',
    details: [
      'GPA: 3.91/4.00; summa cum laude.',
      "Honors: HOPE Scholarship, Presidential Scholar (Spring 2021, Fall 2021, Spring 2022, Spring 2023), Dean's List.",
      'Coursework: Data Structures & Algorithms, Software Engineering, Database Management, Systems Programming, Intro to Computational Investing.',
    ],
  },
]

export const experience = [
  {
    role: 'Software Engineering Intern',
    company: 'NCR Voyix',
    location: 'Atlanta, GA',
    period: 'May 2025 – August 2025',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/NCR_Voyix_logo.svg',
    details: [
      'Developed React + Material UI interfaces for enterprise applications.',
      'Built Go APIs for search functionality and backend services.',
      'Created modular, reusable React views to improve development velocity.',
    ],
  },
  {
    role: 'Software Engineering Intern',
    company: 'HeyBrain',
    location: 'Tel Aviv, Israel',
    period: 'May 2024 – August 2024',
    logo: '/heybrain-logo.svg',
    details: [
      'Implemented machine learning solutions for product features.',
      'Applied Logistic Regression, OpenAI CLIP, and K-Means clustering to real-world datasets.',
      'Built a Svelte/SvelteKit dashboard for internal tools and analytics.',
    ],
  },
]

export const interests = [
  {
    org: 'Kappa Theta Pi',
    institution: 'University of Georgia',
    role: 'VP of External Affairs',
    period: 'April 2024 – December 2025',
  },
  {
    org: 'CodeHub@UGA',
    institution: 'University of Georgia',
    role: 'Director of Project Track',
    period: 'September 2023 – December 2025',
  },
  {
    org: 'Hillel at KSU',
    institution: 'Kennesaw State University',
    role: 'Treasurer',
    period: 'May 2022 – May 2023',
  },
  {
    org: 'Alpha Epsilon Pi',
    institution: 'Kennesaw State University',
    role: 'Treasurer',
    period: 'November 2021 – May 2023',
  },
]
