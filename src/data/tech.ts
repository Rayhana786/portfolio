export interface TechItem {
  name: string;
  category?: 'primary' | 'exploring';
  tag?: string;
}

export const PRIMARY_TECH: TechItem[] = [
  { name: 'HTML5', category: 'primary' },
  { name: 'CSS3', category: 'primary' },
  { name: 'PHP', category: 'primary' },
  { name: 'SQL', category: 'primary' },
  { name: 'React', category: 'primary' },
  { name: 'TypeScript', category: 'primary' },
  { name: 'JavaScript', category: 'primary' },
  { name: 'Node.js', category: 'primary' },
  { name: 'Express', category: 'primary' },
  { name: 'Sequelize ORM', category: 'primary' },
  { name: 'MySQL', category: 'primary' },
  { name: 'PostgreSQL', category: 'primary' },
  { name: 'Tailwind CSS', category: 'primary' },
  { name: 'REST APIs', category: 'primary' },
  { name: 'Git & GitHub', category: 'primary' },
  { name: 'Vite', category: 'primary' },
  { name: 'UI/UX Design', category: 'primary' },
  { name: 'Responsive Web', category: 'primary' },
];

export const EXPLORING_TECH: TechItem[] = [
  { name: 'Linux', category: 'exploring' },
  { name: 'Kali Linux', category: 'exploring' },
  { name: 'TryHackMe Labs', category: 'exploring' },
  { name: 'Computer Networking', category: 'exploring' },
  { name: 'Web Security Basics', category: 'exploring' },
  { name: 'CTF Challenges', category: 'exploring' },
  { name: 'OWASP Top 10', category: 'exploring' },
  { name: 'Bash Scripting', category: 'exploring' },
  { name: 'Wireshark', category: 'exploring' },
  { name: 'Nmap Scanning', category: 'exploring' },
  { name: 'Input Validation & Sanitization', category: 'exploring' },
  { name: 'Session & Auth Security', category: 'exploring' },
];
