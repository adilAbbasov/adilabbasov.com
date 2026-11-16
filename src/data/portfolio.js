export const personal = {
  name: 'Adil Abbasov',
  role: 'Full-Stack .NET Developer',
  tagline: 'Building robust enterprise systems with .NET and modern web technologies.',
  location: 'Baku, Azerbaijan',
  email: 'abbasov.adil.n@gmail.com',
  phone: '+994 55 209 26 64',
  linkedin: 'https://www.linkedin.com/in/adil-abbasov',
  github: 'https://github.com/adilAbbasov',
}

export const about =
  'Full-Stack .NET Developer with hands-on experience delivering backend and frontend solutions for complex enterprise systems, including government-related Document Management platforms. Skilled in building robust APIs, data-driven services, and user-focused interfaces using modern .NET technologies. Strong problem-solving mindset, adaptable to new tools, and experienced in Agile environments with increasing responsibility and technical leadership. Currently pursuing a PhD in Computer Engineering while working in industry.'

export const aboutStats = [
  { label: 'Years Experience', value: '3+' },
  { label: 'Enterprise Projects', value: '5+' },
  { label: 'Degree', value: 'MSc AI' },
  { label: 'Technologies', value: '30+' },
]

export const experience = [
  {
    id: 'agile',
    title: 'Full-Stack .NET Developer',
    company: 'Agile Solutions Azerbaijan',
    period: 'Oct 2024 – Present',
    location: 'Baku, Azerbaijan',
    bullets: [
      'Developed and maintained a large-scale enterprise Document Management System across .NET backend and Angular/React frontend for secure, high-availability solutions.',
      'Implemented RESTful APIs using ASP.NET Core, including complex business logic, authentication/authorization, and external integrations.',
      'Built responsive, accessible UI using HTML, CSS, JavaScript and modern frontend frameworks for multiple user roles.',
      'Optimized data access using Entity Framework Core and Dapper; worked with Oracle, MongoDB, and Redis.',
      'Led core modules end-to-end (requirements → implementation → deployment) following clean architecture and SOLID principles.',
      'Collaborated with PM/Design/QA/Stakeholders; contributed to Agile ceremonies and improved team standards via mentoring and leadership.',
    ],
  },
  {
    id: 'mina',
    title: '.NET Developer',
    company: 'MinA',
    period: 'Jan 2024 – Oct 2024',
    location: 'Baku, Azerbaijan',
    bullets: [
      'Contributed to backend development for a government Document Management platform with focus on reliability and security.',
      'Developed API services with ASP.NET Core, including validation, secure authentication, and external integrations.',
      'Worked with microservices and event-driven architecture using RabbitMQ and Kafka for async processing and decoupling.',
      'Implemented data access with Entity Framework Core; worked with SQL Server, PostgreSQL, and Redis.',
      'Supported services for document lifecycle, role-based permissions, workflows, and audit tracking.',
      'Participated in code reviews, CI/CD, and production deployments; grew into an independent contributor with increased ownership.',
    ],
  },
]

export const projects = [
  {
    id: 'edms',
    title: 'Enterprise Document Management System',
    company: 'Agile Solutions Azerbaijan',
    description:
      '',
    tags: ['.NET', 'ASP.NET Core', 'Angular', 'React', 'Oracle', 'MongoDB', 'Redis', 'Clean Architecture', 'EF Core', 'Dapper', 'JWT'],
    highlights: [
      'A Document Management System built for a large enterprise, covering document creation, versioning, approval workflows, archiving, and secure deletion across multiple departments.',
      'Worked across both backend and frontend — built .NET APIs on the server side and developed responsive interfaces in Angular and React for different user roles within the organization.',
      'Designed RESTful APIs with JWT and refresh-token authentication, covering complex business logic, role-based authorization rules, and secure integrations with multiple external services.',
      'Combined Oracle, MongoDB, and Redis in the data layer — Oracle for structured relational data, MongoDB for flexible document metadata, and Redis for caching frequently accessed data to keep response times fast under load.',
      'Took full ownership of key modules from requirements through to production, and contributed to team standards through code reviews, Agile ceremonies, and mentoring.',
    ],
    githubUrl: null,
    liveUrl: null,
  },
  {
    id: 'gdms',
    title: 'Government Document Management Platform',
    company: 'MinA',
    description:
      '',
    tags: ['Microservices', 'ASP.NET Core', 'RabbitMQ', 'Kafka', 'SQL Server', 'PostgreSQL', 'EF Core', 'Dapper', 'Redis', 'CI/CD'],
    highlights: [
      'A Document Management Platform built for a government agency from the ground up, handling official workflows, cross-department communication, and regulatory compliance.',
      'Designed and built an event-driven microservices architecture with RabbitMQ and Kafka, where each service runs and deploys independently, keeping the system stable even when individual parts fail.',
      'Developed backend services covering document submission, routing, role-based permissions, and multi-step approval workflows, with input validation and secure authentication handled at every entry point.',
      'Ensured all activity across the system is logged and traceable through a dedicated audit stream, meeting the strict compliance standards required by the government agency.',
      'Actively contributed to CI/CD pipelines, participated in code reviews, handled production deployments, and steadily grew into a more independent contributor with greater ownership over time.',
    ],
    githubUrl: null,
    liveUrl: null,
  },
]

export const skills = [
  {
    category: 'Backend',
    items: ['C#', '.NET / ASP.NET Core', 'Web API', 'WPF', 'EF Core', 'Dapper'],
  },
  {
    category: 'Architecture & Patterns',
    items: ['Clean Architecture', 'DDD', 'Microservices', 'Event-Driven Architecture', 'SOLID', 'Design Patterns', 'OOP'],
  },
  {
    category: 'Messaging & Integration',
    items: ['RabbitMQ', 'Kafka', 'REST', 'SOAP'],
  },
  {
    category: 'Databases',
    items: ['SQL Server', 'PostgreSQL', 'Oracle', 'MongoDB', 'Redis'],
  },
  {
    category: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'Angular', 'React.js'],
  },
  {
    category: 'DevOps & Workflow',
    items: ['CI/CD', 'Git', 'Agile (Scrum/Kanban)'],
  },
]

export const education = [
  {
    id: 'phd',
    degree: 'PhD, Computer Engineering',
    institution: 'Istanbul Okan University',
    period: 'Expected Jun 2029',
    location: 'Istanbul, Turkey',
  },
  {
    id: 'msc',
    degree: 'MSc, Artificial Intelligence',
    institution: 'Azerbaijan State Oil And Industry University',
    period: 'Jun 2025',
    location: 'Baku, Azerbaijan',
  },
  {
    id: 'step',
    degree: 'Secondary Education, Software Development',
    institution: 'STEP IT Academy',
    period: 'Dec 2023',
    location: 'Baku, Azerbaijan',
  },
  {
    id: 'bsc',
    degree: 'BSc, Computer Engineering',
    institution: 'Azerbaijan State Oil And Industry University',
    period: 'Jun 2023',
    location: 'Baku, Azerbaijan',
  },
]

export const certifications = [
  {
    id: 'az900',
    title: 'Microsoft Certified: Azure Fundamentals',
    issuer: 'Microsoft',
    examCode: 'AZ-900',
    status: 'Planned',
  },
  {
    id: 'az204',
    title: 'Microsoft Certified: Azure Developer Associate',
    issuer: 'Microsoft',
    examCode: 'AZ-204',
    status: 'Planned',
  },
  {
    id: 'az400',
    title: 'Microsoft Certified: DevOps Engineer Expert',
    issuer: 'Microsoft',
    examCode: 'AZ-400',
    status: 'Planned',
  },
  {
    id: 'ckad',
    title: 'Certified Kubernetes Application Developer',
    issuer: 'CNCF / Linux Foundation',
    examCode: 'CKAD',
    status: 'Planned',
  },
  {
    id: 'dotnet',
    title: '.NET Fundamentals Professional Certificate',
    issuer: 'Microsoft / freeCodeCamp',
    examCode: null,
    status: 'In Progress',
  },
]

export const languages = [
  { name: 'Azerbaijani', level: 'C2 — Native', percent: 100 },
  { name: 'Turkish', level: 'C1 — Proficient', percent: 85 },
  { name: 'English', level: 'B2 — Upper Intermediate', percent: 70 },
  { name: 'Russian', level: 'B1 — Intermediate', percent: 55 },
]
