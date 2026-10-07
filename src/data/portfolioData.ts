import type { Project, SkillItem, Achievement, Certification, EducationItem, ExperienceItem, CodingStats } from '../types';

export const PERSONAL_INFO = {
  name: 'Erothu Harikrishna',
  roles: ['Full-Stack Developer', 'AI & LLM Enthusiast', 'Cloud Computing'],
  tagline: 'Full-Stack Developer | AI & LLM Enthusiast | Cloud Computing',
  status: 'Open to Software Engineering Roles & Summer 2026 / 2027 Opportunities',
  bioShort:
    'Final-year B.Tech Information Technology student passionate about building scalable web applications and AI-powered solutions. Experienced in full-stack development, AI/LLM applications, cloud technologies, and rapid product development through hackathons.',
  location: 'Andhra Pradesh, India',
  email: 'harikrishnaerothu34@gmail.com',
  githubUrl: 'https://github.com/harikrishnaerothu34',
  linkedinUrl: 'https://www.linkedin.com/in/erothu-harikrishna/',
  leetcodeUrl: 'https://leetcode.com/u/harikrishnaerothu34/',
  resumeUrl: '/Erothu_Harikrishna_Resume.pdf',
};

export const ABOUT_DETAILS = {
  headline: 'Engineering Scalable Software & Practical AI Solutions',
  paragraphs: [
    'I am a final-year B.Tech Information Technology student with a strong passion for transforming intricate real-world challenges into reliable, high-performance web applications and intelligent AI systems.',
    'My technical focus spans full-stack web engineering, end-to-end AI/LLM pipelines, and resilient cloud architectures. Grounded in strong fundamentals in Data Structures & Algorithms, I build production-grade web systems backed by robust backend APIs and modern databases.',
    'Through competitive hackathons and hands-on projects—from satellite oceanographic machine learning to automated workflow engines—I have cultivated a track record of rapid prototyping, multidisciplinary collaboration, and delivering clean, maintainable software.',
  ],
  highlights: [
    {
      title: 'Full-Stack Web Engineering',
      desc: 'Building responsive frontend interfaces and high-throughput REST APIs with Node.js, Express, Flask, and Django.',
    },
    {
      title: 'AI & LLM Applications',
      desc: 'Designing generative AI workflows, intelligent document processing, and predictive ML systems using Scikit-learn and Python.',
    },
    {
      title: 'Cloud & System Design',
      desc: 'Architecting scalable cloud backends, containerized services, and SQL/PostgreSQL databases with AWS fundamentals.',
    },
    {
      title: 'Competitive Problem Solving',
      desc: 'Active problem solver with rigorous DSA practice on LeetCode and multiple hackathon podium placements.',
    },
  ],
};

export const SKILLS_DATA: SkillItem[] = [
  // Programming
  { name: 'Python', category: 'Programming' },
  { name: 'JavaScript', category: 'Programming' },
  { name: 'Java', category: 'Programming' },
  { name: 'C', category: 'Programming' },

  // Frontend
  { name: 'HTML5', category: 'Frontend' },
  { name: 'CSS3', category: 'Frontend' },
  { name: 'JavaScript (ES6+)', category: 'Frontend' },
  { name: 'Angular', category: 'Frontend' },
  { name: 'Bootstrap', category: 'Frontend' },

  // Backend
  { name: 'Node.js', category: 'Backend' },
  { name: 'Express.js', category: 'Backend' },
  { name: 'Flask', category: 'Backend' },
  { name: 'Django', category: 'Backend' },

  // Databases
  { name: 'PostgreSQL', category: 'Databases' },
  { name: 'SQL', category: 'Databases' },

  // AI / ML / LLM
  { name: 'Machine Learning', category: 'AI / ML / LLM' },
  { name: 'Generative AI', category: 'AI / ML / LLM' },
  { name: 'LLM Applications', category: 'AI / ML / LLM' },
  { name: 'Python for AI', category: 'AI / ML / LLM' },
  { name: 'Scikit-learn', category: 'AI / ML / LLM' },
  { name: 'Pandas', category: 'AI / ML / LLM' },
  { name: 'NumPy', category: 'AI / ML / LLM' },

  // Cloud
  { name: 'AWS (Amazon Web Services)', category: 'Cloud' },
  { name: 'Cloud Computing Architecture', category: 'Cloud' },

  // Tools
  { name: 'Git', category: 'Tools' },
  { name: 'GitHub', category: 'Tools' },
  { name: 'VS Code', category: 'Tools' },
  { name: 'REST APIs', category: 'Tools' },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'careersync',
    name: 'CareerSync',
    tagline: 'AI-Powered Career Development & Skill Path Engine',
    category: 'AI / LLM',
    problemStatement:
      'Students and junior professionals struggle with fragmented learning paths, generic syllabi, and a lack of role-aligned competency evaluation.',
    description:
      'An AI-powered career development platform that provides personalized learning paths, dynamic course generation, roadmap guidance, and automated skill evaluation tailored to target industry roles.',
    image: '/projects/careersync.jpg',
    highlightBadge: 'AI & Full-Stack Platform',
    technologies: ['React', 'Node.js', 'Express', 'AI/LLM APIs', 'PostgreSQL', 'Tailwind CSS'],
    keyFeatures: [
      'Personalized course & syllabus generation driven by LLMs',
      'Interactive skill evaluation and competency radar analysis',
      'Dynamic step-by-step career roadmaps for software roles',
      'Curated technical learning resources & milestones',
      'Job-oriented guidance tailored to market skill requirements',
    ],
    liveDemoUrl: 'https://careersync-landing-oldo.onrender.com/',
  },
  {
    id: 'agrimithra',
    name: 'AgriMithra',
    tagline: 'Intelligent Web Platform for Agriculture & Farm Support',
    category: 'Full-Stack',
    problemStatement:
      'Farmers frequently lack accessible digital tools for real-time crop telemetry, local weather anomalies, and market price insights in local contexts.',
    description:
      'An agriculture-focused intelligent web platform designed to provide actionable agricultural information, telemetry diagnostics, and real-time advisory assistance for farmers.',
    image: '/projects/agrimithra.jpg',
    highlightBadge: 'Smart Agriculture Web App',
    technologies: ['JavaScript', 'HTML5/CSS3', 'Node.js', 'Weather APIs', 'REST APIs', 'Vercel'],
    keyFeatures: [
      'Real-time crop health monitoring dashboard & telemetry',
      'Localized satellite weather forecasts and anomaly alerts',
      'Live market price trends for regional produce',
      'Intelligent agronomy advisory and pest mitigation tips',
      'Farmer-first responsive interface accessible on low-bandwidth mobile devices',
    ],
    githubUrl: 'https://github.com/HarishBonu0/Agri_Mithra',
    liveDemoUrl: 'https://agri-mytra.vercel.app/',
  },
  {
    id: 'pfz-prediction',
    name: 'AI-Driven PFZ Prediction',
    tagline: 'Predicting Potential Fishing Zones with Satellite Oceanographic ML',
    category: 'Machine Learning',
    problemStatement:
      'Traditional maritime fishing relies on intuition or coarse forecasts, leading to excessive fuel consumption, inefficient fishing trips, and safety risks at sea.',
    description:
      'A final-year engineering project focused on accurately predicting Potential Fishing Zones (PFZ) by synthesizing multi-source oceanographic satellite data through trained machine learning models.',
    image: '/projects/pfz-prediction.jpg',
    highlightBadge: 'Final-Year Engineering Project',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Oceanographic Data', 'Satellite APIs'],
    keyFeatures: [
      'Multi-parameter oceanographic feature ingestion: SST (Sea Surface Temperature) & Chlorophyll-a',
      'Analysis of Sea Surface Height (SSH) and directional ocean currents',
      'Meteorological & weather parameters integration for marine safety',
      'Machine learning classification pipeline for high-probability PFZ zones',
      'Fisherman-oriented decision support interface reducing fuel waste and search time',
    ],
    githubUrl: 'https://github.com/harikrishnaerothu34/ai-driven-pfz-prediction.git',
  },
  {
    id: 'claimflow-ai',
    name: 'ClaimFlow AI',
    tagline: 'Automating & Streamlining Insurance Claim Workflows with AI',
    category: 'AI / LLM',
    problemStatement:
      'Manual insurance claim verification suffers from long turnaround cycles, repetitive document processing, and human error in fraud scoring.',
    description:
      'An AI-powered enterprise solution engineered to automate and optimize insurance claim workflows through intelligent document parsing, policy validation, and risk analysis.',
    image: '/projects/claimflow.jpg',
    highlightBadge: 'InsurTech AI Automation',
    technologies: ['Python', 'Node.js', 'LLM Processing', 'Document OCR', 'REST APIs', 'PostgreSQL'],
    keyFeatures: [
      'Automated claim intake and multi-stage status processing pipeline',
      'AI-driven document OCR parsing for policy documents and invoices',
      'Intelligent fraud risk detection scoring with visual risk indicators',
      'Automated policy coverage verification against policy clauses',
      'Comprehensive audit trails and adjuster review workflow',
    ],
    githubUrl: 'https://github.com/HarishBonu0/claimflow-ai',
  },
];

export const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    id: 'nsrit-hackathon',
    title: 'NSRIT Hackathon Champion',
    award: '1st Place – Student Innovation Category',
    rank: '1st Place',
    event: 'NSRIT National Hackathon',
    organization: 'NSRIT',
    team: 'Team AspireX',
    badge: '🏆 1st Place',
    description:
      'Secured 1st Place in the Student Innovation Category out of dozens of competing engineering teams. Led full-stack product prototyping and presented the solution to an industry jury.',
  },
  {
    id: 'au-hackathon',
    title: 'Andhra University Hackathon Runner-up',
    award: '2nd Place / Runner-up',
    rank: 'Runner-up',
    event: 'Andhra University Hackathon',
    organization: 'Andhra University',
    badge: '🥈 Runner-up',
    description:
      'Awarded Runner-up position for architecting and deploying a rapid software prototype within tight 24-hour hackathon constraints.',
  },
  {
    id: 'other-hackathons',
    title: 'National Hackathon Competitions',
    award: 'Finalist & Active Participant',
    rank: 'Finalist / Participant',
    event: 'Centurion, AITAM & GMRIT Hackathons',
    organization: 'Multiple Engineering Institutions',
    badge: '⚡ Participant & Finalist',
    description:
      'Participated and reached final rounds in Centurion University Hackathon, AITAM Hackathon, and GMRIT Hackathon, building collaborative solutions under intense competitive deadlines.',
  },
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: 'aws-cloud-foundations',
    title: 'AWS Cloud Foundations',
    issuer: 'Amazon Web Services (AWS)',
    category: 'Cloud',
    skillsVerified: ['Cloud Infrastructure', 'AWS Core Services', 'Cloud Security & IAM', 'Compute & Storage Architecture'],
  },
  {
    id: 'nptel-cert',
    title: 'NPTEL Certification',
    issuer: 'NPTEL / IIT',
    category: 'Computer Science',
    skillsVerified: ['Core Computer Science Fundamentals', 'Data Structures & Algorithms', 'Academic Rigor'],
  },
  {
    id: 'lt-applied-ml',
    title: 'Applied Machine Learning',
    issuer: 'L&T EduTech',
    category: 'AI / Machine Learning',
    skillsVerified: ['Supervised & Unsupervised Learning', 'Model Evaluation & Optimization', 'Feature Engineering with Python'],
  },
  {
    id: 'lt-llm-arch',
    title: 'Language Model Architecture',
    issuer: 'L&T EduTech',
    category: 'AI / Machine Learning',
    skillsVerified: ['Transformer Architecture', 'Attention Mechanisms', 'LLM Prompt Engineering & Applications'],
  },
];

export const EDUCATION_DATA: EducationItem = {
  degree: 'Bachelor of Technology (B.Tech)',
  major: 'Information Technology',
  institution: 'GMR Institute of Technology (GMRIT)',
  duration: '2023 – 2027',
  status: 'Final Year Student',
  coursework: [
    'Data Structures & Algorithms',
    'Database Management Systems (DBMS)',
    'Object-Oriented Programming (Java/Python)',
    'Operating Systems & Computer Networks',
    'Cloud Computing & Distributed Systems',
    'Artificial Intelligence & Machine Learning',
    'Web Technologies & Full-Stack Development',
    'Software Engineering & Agile Methodologies',
  ],
  highlights: [
    'Maintained strong academic standing in Information Technology',
    'Active participant in Technical Clubs, Hackathon Teams, and Coding Competitions',
    'Developed Capstone & Final-Year Oceanographic AI Research Project',
  ],
};

export const CODING_STATS: CodingStats = {
  platform: 'LeetCode',
  username: 'harikrishnaerothu34',
  profileUrl: 'https://leetcode.com/u/harikrishnaerothu34/',
  // Baseline stats easily editable manually
  totalSolved: 160,
  easySolved: 80,
  mediumSolved: 70,
  hardSolved: 10,
  contestRating: 'Active Solver',
  activeStreak: 'Consistent Practice',
  topTopics: [
    { name: 'Arrays & Strings', count: 48 },
    { name: 'Hash Tables & Two Pointers', count: 35 },
    { name: 'Binary Trees & BFS/DFS', count: 28 },
    { name: 'Dynamic Programming', count: 22 },
    { name: 'Sorting & Binary Search', count: 27 },
  ],
};

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'exp-hackathons',
    role: 'Lead Full-Stack Developer & Team Lead',
    organization: 'Hackathon Projects & Team AspireX',
    period: '2024 – Present',
    location: 'Andhra Pradesh, India',
    type: 'Competitive Product Development',
    description: [
      'Led technical architecture and full-stack development for competitive hackathons including NSRIT (1st Place Winner) and AU Hackathon (Runner-up).',
      'Designed and deployed cloud-hosted web applications, integrated real-time REST APIs, and integrated AI-driven features under 24-48 hour constraints.',
      'Collaborated closely with cross-functional team members, pitching product demonstrations to panels of technical judges and industry evaluators.',
    ],
    technologies: ['React', 'Node.js', 'Express', 'Python', 'Git', 'Cloud Deployment'],
  },
  {
    id: 'exp-projects-lead',
    role: 'Full-Stack & Machine Learning Researcher',
    organization: 'GMR Institute of Technology – Capstone',
    period: '2025 – Present',
    location: 'GMRIT Campus, India',
    type: 'Academic Engineering Research',
    description: [
      'Spearheaded research and implementation of the AI-driven Potential Fishing Zone (PFZ) prediction system utilizing oceanographic satellite parameters.',
      'Constructed machine learning data pipelines preprocessing Sea Surface Temperature (SST), Chlorophyll-a, and sea surface height data.',
      'Engineered responsive web interfaces to present predictive decision support data in an accessible format for end users.',
    ],
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'REST APIs', 'Modern Web Stack'],
  },
  {
    id: 'exp-placeholder',
    role: 'Software Engineering / Full-Stack Intern (Target Role)',
    organization: 'Open to Opportunities',
    period: 'Available Immediately / Summer 2026',
    location: 'Remote / Hybrid / On-Site (India)',
    type: 'Upcoming Role',
    description: [
      'Seeking full-stack developer or software engineer internships/entry-level positions where I can contribute to production web systems, AI pipelines, and cloud services.',
      'Equipped with strong foundational DSA, modern JavaScript/TypeScript, Python, and cloud infrastructure experience.',
    ],
    technologies: ['Full-Stack Development', 'AI/LLM Engineering', 'AWS', 'Team Collaboration'],
    isCustomizableNotice: true,
  },
];
