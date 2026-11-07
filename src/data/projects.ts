export interface ProjectItem {
  id: string;
  number: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  images: {
    col1Img1: string;
    col1Img2: string;
    col2Img: string;
  };
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'project-1',
    number: '01',
    name: 'Full-Stack Web Application',
    category: 'Full-Stack Web',
    description:
      'A complete web platform built with React, HTML5/CSS3, Node.js, Express, and a relational database via SQL/Sequelize. Features clean modular architecture, authenticated sessions, and responsive UI.',
    tags: ['React', 'HTML5', 'CSS3', 'Node.js', 'Express', 'SQL', 'REST API'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    images: {
      col1Img1: '/projects/p1-col1-1.webp',
      col1Img2: '/projects/p1-col1-2.webp',
      col2Img: '/projects/p1-col2.webp',
    },
  },
  {
    id: 'project-2',
    number: '02',
    name: 'University Management System',
    category: 'Full-Stack · Academic',
    description:
      'Academic project developed at ESI Sidi Bel Abbès for tracking student modules, course submissions, and grading analytics with PHP, MySQL, and modern responsive frontends.',
    tags: ['PHP', 'MySQL', 'SQL', 'HTML5', 'CSS3', 'React', 'Express'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    images: {
      col1Img1: '/projects/p2-col1-1.webp',
      col1Img2: '/projects/p2-col1-2.webp',
      col2Img: '/projects/p2-col2.webp',
    },
  },
  {
    id: 'project-3',
    number: '03',
    name: 'Security-Aware Web Platform',
    category: 'Full-Stack & Security Exploration',
    description:
      'An educational lab and web platform designed to demonstrate secure development practices: input sanitization, token handling, and protection against common web vulnerabilities.',
    tags: ['HTML5', 'React', 'Node.js', 'SQL', 'Web Security', 'CTF Labs', 'Linux'],
    liveUrl: '',
    githubUrl: 'https://github.com',
    images: {
      col1Img1: '/projects/p3-col1-1.webp',
      col1Img2: '/projects/p3-col1-2.webp',
      col2Img: '/projects/p3-col2.webp',
    },
  },
];
