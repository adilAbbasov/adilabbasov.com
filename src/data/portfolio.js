export const personal = {
  name: 'Adil Abbasov',
  role: 'Backend .NET Developer',
  tagline: 'Building secure, large-scale backend systems with C#, ASP.NET Core and modern .NET.',
  location: 'Baku, Azerbaijan',
  email: 'abbasov.adil.n@gmail.com',
  phone: '+994 55 209 26 64',
  linkedin: 'https://www.linkedin.com/in/adil-abbasov',
  github: 'https://github.com/adilAbbasov',
  resume: '/resume/Adil-Abbasov-Backend-NET-Developer.pdf',
}

export const about =
  "Backend-focused .NET Developer building large-scale and secure Document Management Systems for government organizations using C# and ASP.NET Core. Experienced in RESTful API and database design, event-driven integration through RabbitMQ and Kafka, and migrating legacy .NET Framework applications to modern .NET, with a strong focus on clean code, SOLID principles, automated testing and production stability. Leads core modules, owns key technical decisions and mentors developers. Brings full-stack experience with Angular, React and Next.js, communicates effectively with technical and business teams, and approaches work with ownership and attention to detail. Currently pursuing a PhD in Computer Engineering alongside industry work."

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
      "Build and maintain the large-scale government Document Management System and its integrated applications, developing secure, high-availability backend services in C# and ASP.NET Core.",
      "Design REST APIs for complex document workflows and business rules, with consistent request validation, centralized error handling and OpenAPI documentation.",
      "Implement authentication and role-based authorization through OAuth2 and JWT, ensuring users access only the documents and actions permitted for their role.",
      "Optimize queries, PL/SQL procedures and data access on Oracle with Entity Framework Core and Dapper, designing efficient schemas and caching frequently used data in Redis to reduce load.",
      "Integrate the system with third-party services, deliver real-time notifications via SignalR and run scheduled background jobs with Hangfire.",
      "Migrate legacy applications from the .NET Framework and earlier .NET versions to modern .NET, replacing NHibernate with Entity Framework Core to improve performance and maintainability.",
      "Cover business logic with unit and integration tests to catch regressions early, and ship services through Docker-based GitLab CI/CD pipelines for reliable releases.",
      "Use Claude Code for AI-assisted development to accelerate implementation, refactoring, testing and debugging, reviewing generated code for correctness, security and maintainability.",
      "Investigate and resolve production incidents and performance bottlenecks, relying on centralized logging with Serilog, Elasticsearch and Kibana to trace root causes.",
      "Lead core modules from requirements to production using Clean Architecture and CQRS, owning technical decisions and documentation, mentoring developers through code reviews and aligning API contracts with frontend and DevOps teams in Agile sprints.",
    ],
  },
  {
    id: 'mina',
    title: '.NET Developer',
    company: 'MinA',
    period: 'Jan 2024 – Oct 2024',
    location: 'Baku, Azerbaijan',
    bullets: [
      "Developed and enhanced backend services for the government Document Management System, covering document lifecycle, role-based permissions, workflow orchestration and audit tracking.",
      "Implemented business logic and REST API endpoints in ASP.NET Core, including data validation, authentication and integrations with external systems.",
      "Contributed to a microservices, event-driven architecture, using RabbitMQ and Kafka to achieve asynchronous processing and loose coupling between services.",
      "Designed database schemas, built data access layers and migrated data across SQL Server and PostgreSQL using Entity Framework Core, with Redis caching to speed up frequent reads.",
      "Wrote unit tests with NUnit to validate business logic and took part in code reviews, CI/CD-based releases and production support.",
      "Collaborated with senior engineers, QA and stakeholders in cross-functional teams, growing into an independent contributor who owned backend features from design to release.",
    ],
  },
]

// Projects section is hidden until a public project (GitHub + live demo) is ready.
export const projects = []

// Mirrors the resume's 12 skill lines: the first 6 form the left column, the last 6 the right.
export const skills = [
  { category: "Core", items: ["C#", ".NET", "ASP.NET Core", ".NET Framework"] },
  { category: "Architecture", items: ["Microservices", "Clean Architecture", "CQRS", "MediatR"] },
  { category: "Databases", items: ["SQL Server", "PostgreSQL", "Oracle", "MongoDB", "Redis"] },
  { category: "Data Access", items: ["Entity Framework Core", "Dapper", "NHibernate"] },
  { category: "Security", items: ["OAuth2", "JWT", "ASP.NET Core Identity"] },
  { category: "Messaging", items: ["Event-Driven Architecture", "RabbitMQ", "Kafka"] },
  { category: "APIs", items: ["RESTful APIs", "SignalR"] },
  { category: "Testing", items: ["xUnit", "NUnit", "Moq"] },
  { category: "DevOps", items: ["Git", "Docker", "GitLab CI/CD"] },
  { category: "Background Jobs", items: ["Hangfire", "Quartz.NET"] },
  { category: "Observability", items: ["Serilog", "Elasticsearch", "Kibana"] },
  { category: "Frontend", items: ["Angular", "React", "Next.js"] },
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
    institution: 'Azerbaijan State Oil and Industry University',
    period: 'Jun 2025',
    location: 'Baku, Azerbaijan',
  },
  {
    id: 'step',
    degree: 'Diploma, Software Development',
    institution: 'STEP IT Academy',
    period: 'Dec 2023',
    location: 'Baku, Azerbaijan',
  },
  {
    id: 'bsc',
    degree: 'BSc, Computer Engineering',
    institution: 'Azerbaijan State Oil and Industry University',
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
  { name: 'Azerbaijani', level: 'Native', percent: 100 },
  { name: 'Turkish', level: 'Fluent', percent: 90 },
  { name: 'English', level: 'C1 — Advanced', percent: 80 },
  { name: 'Russian', level: 'B2 — Upper Intermediate', percent: 65 },
]
