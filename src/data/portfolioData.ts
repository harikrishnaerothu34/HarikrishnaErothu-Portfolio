export interface SkillGroup {
  category: string;
  sublabel: string;
  icon: string;
  skills: string[];
}

export interface ProjectItem {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  badge: string;
  badgeColor?: 'forest' | 'terracotta' | 'charcoal';
  metaLabel?: string;
  statusLabel?: string;
  statusType?: 'completed' | 'ongoing';
  tags: { name: string; highlight?: boolean }[];
  liveDemo?: string;
  githubUrl?: string;
  paperUrl?: string;
  isFullWidth?: boolean;
}

export interface ExperienceItem {
  role: string;
  project: string;
  type: string;
  timeline: string;
  badge: string;
  badgeType: 'completed' | 'ongoing';
  description: string;
}

export interface AchievementItem {
  title: string;
  category: string;
  badge: string;
  badgeType: 'terracotta' | 'dark' | 'forest';
  icon: string;
  description: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  badge: string;
  badgeType: 'forest' | 'charcoal' | 'terracotta';
  icon: string;
}

export const PERSONAL_INFO = {
  name: 'Erothu Harikrishna',
  firstName: 'Erothu',
  lastName: 'Harikrishna',
  headline: 'Full-Stack Developer | AI & LLM Enthusiast | Cloud Computing',
  bio: "I'm a final-year B.Tech Information Technology student who enjoys building robust web applications and practical AI-powered solutions. I focus on engineering clarity, real-world utility, and clean architecture.",
  email: 'erothuharikrishna2@gmail.com',
  location: 'Andhra Pradesh, India',
  education: {
    institution: 'GMR Institute of Technology',
    degree: 'B.Tech IT (2023–2027)',
    focus: 'Full-Stack Web Development, Applied AI & LLMs, Cloud Infrastructure',
  },
  githubUrl: 'https://github.com/harikrishnaerothu34',
  linkedinUrl: 'https://linkedin.com/in/erothu-harikrishna',
  leetcodeUrl: 'https://leetcode.com/u/harikrishnaerothu34/',
  resumePdf: '/resume.pdf',
  resumeDownloadName: 'Erothu_Harikrishna_Resume.pdf',
};

export const ABOUT_PILLARS = [
  {
    icon: 'web',
    title: 'Full-Stack Web Development',
    desc: 'Responsive modern applications, modular component structures, and production-ready RESTful APIs.',
    colorScheme: 'forest',
  },
  {
    icon: 'psychology',
    title: 'Applied AI & LLMs',
    desc: 'Generative AI workflows, document intelligence pipelines, and real-world machine learning solutions.',
    colorScheme: 'terracotta',
  },
  {
    icon: 'code_blocks',
    title: 'Data Structures & Algorithms',
    desc: 'Structured problem solving with 160+ LeetCode problems solved across arrays, strings, two pointers, and search.',
    colorScheme: 'terracotta',
    fullWidth: true,
  },
];

export const SKILLS_GROUPS: SkillGroup[] = [
  {
    category: 'Programming',
    sublabel: 'Languages',
    icon: 'code',
    skills: ['Python', 'C', 'Java', 'JavaScript'],
  },
  {
    category: 'Frontend',
    sublabel: 'UI & Web',
    icon: 'devices',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Angular', 'Bootstrap'],
  },
  {
    category: 'Backend',
    sublabel: 'Server Side',
    icon: 'dns',
    skills: ['Node.js', 'Express.js', 'Flask', 'Django', 'REST APIs'],
  },
  {
    category: 'AI / ML / LLM',
    sublabel: 'Intelligence',
    icon: 'neurology',
    skills: ['Machine Learning', 'LLM Applications', 'NumPy'],
  },
  {
    category: 'Databases',
    sublabel: 'Data Storage',
    icon: 'database',
    skills: ['PostgreSQL', 'SQL'],
  },
  {
    category: 'Tools',
    sublabel: 'Development',
    icon: 'construction',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman'],
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'careersync',
    number: '01',
    name: 'CareerSync',
    subtitle: 'AI-Powered Career Development & Learning Paths',
    description:
      'An AI-powered career development platform featuring personalized learning paths, course generation, career roadmaps, and skill evaluation.',
    image: '/projects/careersync.jpg',
    badge: 'AI & Full-Stack Platform',
    badgeColor: 'forest',
    tags: [
      { name: 'React' },
      { name: 'Node.js' },
      { name: 'Express' },
      { name: 'PostgreSQL' },
      { name: 'AI/LLM APIs', highlight: true },
    ],
    liveDemo: 'https://careersync-landing-oldo.onrender.com/',
    githubUrl: 'https://github.com/harikrishnaerothu34',
  },
  {
    id: 'agrimithra',
    number: '02',
    name: 'AgriMithra',
    subtitle: 'Agricultural Advisory & Farm Support Platform',
    description:
      'An agriculture-focused web application designed to provide useful information and assistance for farmers with localized crop advisory, real-time satellite weather insights, crop telemetry diagnostics, and regional market trends.',
    image: '/projects/agrimithra.jpg',
    badge: 'Agricultural Web App',
    badgeColor: 'charcoal',
    tags: [
      { name: 'JavaScript' },
      { name: 'HTML5/CSS3' },
      { name: 'Node.js' },
      { name: 'REST APIs' },
      { name: 'Weather APIs' },
    ],
    liveDemo: 'https://agri-mytra.vercel.app/',
    githubUrl: 'https://github.com/HarishBonu0/Agri_Mithra',
  },
  {
    id: 'digital-twin',
    number: '03',
    name: 'Digital Twin — Twin24',
    subtitle: 'Web-Based AI-Driven Digital Twin for Real-Time System Health Monitoring',
    description:
      'Developed a web-based AI-driven Digital Twin system for real-time system health monitoring. The project incorporates hardware telemetry, Isolation Forest anomaly detection, device health scoring, risk classification, and automated alerts. Authors: E. Harikrishna, A. Sandeep, J. Siva Sankar, L. Satyavathi. Published in International Journal of Research Publication and Reviews (Volume 7, Issue 4, April 2026, pages 6717–6723).',
    image: '/projects/digital-twin.jpg',
    badge: 'Published Research — 3rd Year B.Tech',
    badgeColor: 'terracotta',
    metaLabel: 'Third-Year B.Tech Mini Project • Dec 2025 – Apr 2026',
    statusLabel: 'Completed',
    statusType: 'completed',
    tags: [
      { name: 'Python' },
      { name: 'IoT / Telemetry' },
      { name: 'Node.js' },
      { name: 'WebSockets' },
      { name: 'REST APIs' },
      { name: 'Isolation Forest', highlight: true },
    ],
    paperUrl: 'https://ijrpr.com//uploads/V7ISSUE4/IJRPR62473.pdf',
    githubUrl: 'https://github.com/harikrishnaerothu34/twin24',
  },
  {
    id: 'pfz-prediction',
    number: '04',
    name: 'AI-Driven Potential Fishing Zone (PFZ) Prediction',
    subtitle: 'Marine Environmental Data & Oceanographic ML Analysis',
    description:
      'Currently leading the development of an AI-driven Potential Fishing Zone prediction system using satellite-derived and oceanographic environmental data to help identify potential fishing areas by processing sea surface temperature (SST) and chlorophyll-a indicators with geospatial mapping.',
    image: '/projects/pfz-prediction.jpg',
    badge: 'Current 4th-Year Final-Year Project',
    badgeColor: 'forest',
    metaLabel: 'Current 4th-Year Final-Year Project • 6 July 2026 – Present',
    statusLabel: 'Ongoing',
    statusType: 'ongoing',
    tags: [
      { name: 'Python' },
      { name: 'Oceanographic ML', highlight: true },
      { name: 'Geospatial Data' },
      { name: 'Leaflet Maps' },
    ],
    githubUrl: 'https://github.com/harikrishnaerothu34/ai-driven-pfz-prediction.git',
  },
  {
    id: 'claimflow-ai',
    number: '05',
    name: 'ClaimFlow AI',
    subtitle: 'Automated Insurance Claim Verification & Workflow Engine',
    description:
      'Streamlines insurance claim documentation using intelligent OCR parsing, policy coverage rules, and automated risk discrepancy flagging. Accelerates claim validation while systematically flagging potential fraud.',
    image: '/projects/claimflow.jpg',
    badge: 'Document Automation',
    badgeColor: 'forest',
    isFullWidth: true,
    tags: [
      { name: 'Python' },
      { name: 'OCR / Vision' },
      { name: 'LLM Workflows', highlight: true },
      { name: 'FastAPI / Node.js' },
    ],
    githubUrl: 'https://github.com/HarishBonu0/claimflow-ai',
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: 'Project Lead',
    project: 'Digital Twin Project (Twin24)',
    type: 'Third-Year B.Tech Mini Project • Real-Time System Telemetry & Virtual State Synchronization',
    timeline: 'December 2025 – April 2026',
    badge: 'Completed • Research Published in IJRPR',
    badgeType: 'completed',
    description:
      'Led architecture of real-time telemetry ingestion pipelines, Isolation Forest anomaly detection, device health scoring, and modular interface sync to visualize physical device inputs into live responsive diagnostic states. Published in International Journal of Research Publication and Reviews (Vol 7, Issue 4, April 2026, pp. 6717–6723).',
  },
  {
    role: 'Project Lead',
    project: 'AI-Driven PFZ Prediction',
    type: 'Fourth-Year B.Tech Final-Year Project • Marine Environmental Data & Oceanographic ML',
    timeline: '6 July 2026 – Present',
    badge: 'Ongoing',
    badgeType: 'ongoing',
    description:
      'Currently leading oceanographic data preprocessing, machine learning model formulation, and geospatial visualization sprints for identifying prospective coastal fishing zones through satellite SST and chlorophyll-a indicators.',
  },
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    title: 'NSRIT Hackathon',
    category: '1st Place Winner',
    badge: '1st Place Winner',
    badgeType: 'terracotta',
    icon: 'emoji_events',
    description:
      'Student Innovation Category, Team AspireX participant. Awarded 1st place for delivering a functional engineering prototype within strict hackathon constraints.',
  },
  {
    title: 'Andhra University Hackathon',
    category: 'Runner-Up',
    badge: 'Runner-Up',
    badgeType: 'dark',
    icon: 'military_tech',
    description:
      'Recognized as runner-up for designing and developing an automated rapid-response digital tool under evaluation by industry mentors.',
  },
  {
    title: 'Regional Collegiate Hackathons',
    category: 'Hackathon Participant',
    badge: 'Hackathon Participant',
    badgeType: 'forest',
    icon: 'code',
    description:
      'Active participant across competitive collegiate hackathons including Centurion University, AITAM, and GMRIT hackathons.',
  },
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    title: 'AWS Cloud Foundations',
    issuer: 'Amazon Web Services',
    badge: 'Verified Credential',
    badgeType: 'forest',
    icon: 'cloud',
  },
  {
    title: 'Introduction to Industry 4.0 and Industrial Internet of Things',
    issuer: 'NPTEL',
    badge: 'NPTEL Certified',
    badgeType: 'charcoal',
    icon: 'precision_manufacturing',
  },
  {
    title: 'Applied Machine Learning',
    issuer: 'L&T EduTech',
    badge: 'Industry Certified',
    badgeType: 'forest',
    icon: 'memory',
  },
  {
    title: 'Language Model Architecture',
    issuer: 'L&T EduTech',
    badge: 'Industry Certified',
    badgeType: 'terracotta',
    icon: 'psychology',
  },
];
