export interface ServiceItem {
  number: string;
  name: string;
  description: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    number: '01',
    name: 'Website Development',
    description:
      'Fast, responsive websites and landing pages built with React, designed to present your business clearly and attract clients.',
  },
  {
    number: '02',
    name: 'Full-Stack Web Apps',
    description:
      'Complete web applications with a React frontend, a Node.js and Express API, and a database, from idea to deployment.',
  },
  {
    number: '03',
    name: 'UI/UX Implementation',
    description:
      'I turn your design, from Figma or just an idea, into clean, accessible and pixel-accurate interfaces.',
  },
  {
    number: '04',
    name: 'Backend and Databases',
    description:
      'Well-structured APIs and database design that keep your application reliable and easy to grow.',
  },
  {
    number: '05',
    name: 'Security-Aware Development',
    description:
      'Applying secure coding basics such as input validation, safe authentication and careful configuration, guided by my growing interest in web security.',
  },
];
