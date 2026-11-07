import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from '../components/FadeIn.tsx';
import { LiveProjectButton } from '../components/LiveProjectButton.tsx';
import type { ProjectData } from '../components/ProjectModal.tsx';

interface ProjectsSectionProps {
  onOpenProject: (project: ProjectData) => void;
}

const PROJECTS: ProjectData[] = [
  {
    id: 'oulamauna',
    number: '01',
    title: 'OULAMAUNA',
    category: 'Full-Stack Web Application',
    year: '2026',

    shortDescription:
      'A multilingual digital platform designed to preserve and promote Algerian and Islamic scholarly heritage through an organized, accessible online experience.',

    description:
      'OULAMAUNA is a full-stack web application that brings Algerian and Islamic scholarly heritage into a digital space. Visitors can explore scholars, their biographies, and their contributions in Arabic, French, and English. The platform also provides content management workflows for contributors and administrators, including role-based access and content review. I worked on the frontend and backend integration, REST API communication, database integration, and deployment.',

    tools: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'Prisma',
      'MySQL',
      'REST API',
    ],

    col1Img1: '/images/oulamauna-1.png',
    col1Img2: '/images/oulamauna-2.png',
    col2Img: '/images/oulamauna-main.png',

    liveUrl: 'https://oulamauna-frontend.vercel.app/',
    githubUrl: 'https://github.com/Rayhana786/Oulamauna-frontend',

    learned: [
      'Developing a full-stack application using React and Express',
      'Designing and integrating REST APIs',
      'Database modeling and management with MySQL and Prisma',
      'Implementing authentication and role-based access control',
      'Connecting frontend components to backend services',
      'Building multilingual interfaces (Arabic, French, and English)',
      'Configuring environment variables and deploying a web application',
    ],
  },

  {
    id: 'rogue-dhcp-detector',
    number: '02',
    title: 'Rogue DHCP Detector',
    category: 'Cybersecurity · Network Security',
    year: '2026',

    shortDescription:
      'A Python-based network security tool that identifies unauthorized DHCP servers by analyzing network traffic and verifying DHCP responses against trusted servers.',

    description:
      'This project focuses on detecting and helping prevent rogue DHCP servers in a local network. Using Python and Scapy, the tool analyzes DHCP traffic, identifies DHCP responses, and checks whether the responding server is authorized through a trusted-server whitelist. Unauthorized responses trigger security alerts and are recorded in event logs. The project also explores network monitoring, packet analysis, and practical detection techniques in a virtual network laboratory.',

    tools: [
      'Python',
      'Scapy',
      'Kali Linux',
      'Networking',
      'DHCP',
      'Wireshark',
    ],

    col1Img1: '/projects/rogue-dhcp-1.webp',
    col1Img2: '/projects/rogue-dhcp-2.webp',
    col2Img: '/projects/rogue-dhcp-main.webp',

    learned: [
      'Understanding DHCP protocol and client-server communication',
      'Detecting unauthorized DHCP server responses',
      'Capturing and analyzing network packets with Scapy',
      'Monitoring network traffic and interpreting packet data',
      'Verifying trusted servers using a whitelist',
      'Generating security alerts and maintaining event logs',
      'Configuring isolated virtual network environments for security testing',
    ],
  },

  {
    id: 'frontend-mentor',
    number: '03',
    title: 'Frontend Mentor Challenges',
    category: 'Frontend Development · UI Challenges',
    year: '2025 – 2026',

    shortDescription:
      'A collection of eight hands-on frontend projects demonstrating responsive layouts, interactive components, JavaScript functionality, and practical interface development.',

    description:
      'This collection brings together eight frontend projects developed to strengthen my practical web development skills. Each challenge focuses on translating interface designs into functional web pages, creating responsive layouts, handling user interactions, and implementing JavaScript-based functionality. The projects helped me improve my understanding of HTML, CSS, JavaScript, DOM manipulation, and form validation.',

    tools: [
      'HTML',
      'CSS',
      'JavaScript',
      'Responsive Design',
      'DOM Manipulation',
      'Form Validation',
      'GitHub Pages',
    ],

    col1Img1: '',
    col1Img2: '',
    col2Img: '',

    challenges: [
      {
        id: 'browser-extension',
        title: 'Browser Extension Manager UI',
        githubUrl:
          'https://github.com/Rayhana786/Browser-extension-manager-UI',
        liveUrl:
          'https://rayhana786.github.io/Browser-extension-manager-UI/',
      },
      {
        id: 'todo-list',
        title: 'Simple To-Do List',
        githubUrl:
          'https://github.com/Rayhana786/SIMPLE-TO-DO-LIST',
        liveUrl:
          'https://rayhana786.github.io/SIMPLE-TO-DO-LIST/',
      },
      {
        id: 'signup-form',
        title: 'Intro Component with Sign Up Form',
        githubUrl:
          'https://github.com/Rayhana786/Intro-component-with-sign-up-form',
        liveUrl:
          'https://rayhana786.github.io/Intro-component-with-sign-up-form/',
      },
      {
        id: 'rating-component',
        title: 'Interactive Rating Component',
        githubUrl:
          'https://github.com/Rayhana786/nteractive-rating-component',
        liveUrl:
          'https://rayhana786.github.io/nteractive-rating-component/',
      },
      {
        id: 'mortgage-calculator',
        title: 'Mortgage Repayment Calculator',
        githubUrl:
          'https://github.com/Rayhana786/Mortgage-repayment-calculator',
        liveUrl:
          'https://rayhana786.github.io/Mortgage-repayment-calculator/',
      },
      {
        id: 'results-summary',
        title: 'Results Summary Component',
        githubUrl:
          'https://github.com/Rayhana786/fm-Results-summary-component',
        liveUrl:
          'https://rayhana786.github.io/fm-Results-summary-component/',
      },
      {
        id: 'recipe-page',
        title: 'Recipe Page',
        githubUrl:
          'https://github.com/Rayhana786/fm-recipe-page',
        liveUrl:
          'https://rayhana786.github.io/fm-recipe-page/',
      },
      {
        id: 'social-links',
        title: 'Social Links Profile',
        githubUrl:
          'https://github.com/Rayhana786/fm-Social-links-profile',
        liveUrl:
          'https://rayhana786.github.io/fm-Social-links-profile/',
      },
    ],

    learned: [
      'Building responsive interfaces for different screen sizes',
      'Writing structured and maintainable HTML and CSS',
      'Using JavaScript to create interactive functionality',
      'Manipulating the DOM and handling user events',
      'Implementing form validation and user feedback',
      'Publishing frontend projects using GitHub Pages',
    ],
  },

  {
    id: 'handy',
    number: '04',
    title: 'Handy',
    category: 'Full-Stack E-Commerce',
    year: '2026',

    shortDescription:
      'A full-stack e-commerce platform created to showcase Algerian handmade products and connect customers with local artisans and traditional creations.',

    description:
      'Handy is an Algerian handmade e-commerce platform that provides an online space for discovering local products and supporting artisans. The platform focuses on handmade creations, traditional crafts, natural products, recipes, and decorations that reflect Algerian culture. The project involves backend development with Laravel, database management with MySQL, and the development of e-commerce functionality for organizing and presenting products and categories.',

    tools: [
      'PHP',
      'Laravel',
      'MySQL',
      'HTML',
      'CSS',
      'JavaScript',
    ],

    col1Img1: '/images/handy-main.png',
    col1Img2: '/images/handy-2.png',
    col2Img: '/images/handy-1.png',

    githubUrl: 'https://github.com/Rayhana786/ecommerce-fullstack',

    learned: [
      'Backend development using PHP and Laravel',
      'Database design and management with MySQL',
      'Building e-commerce application functionality',
      'Managing products and categories',
      'Connecting backend logic with frontend interfaces',
      'Designing a digital marketplace around Algerian handmade products',
    ],
  },

  {
    id: 'concoursdoctor',
    number: '05',
    title: 'ConcoursDoctor',
    category: 'Full-Stack Development · Web Security',
    year: '2026',

    shortDescription:
      'A full-stack academic platform for managing doctoral entrance competitions, with a focus on OTP-based authentication, secure access, and candidate data protection.',

    description:
      'ConcoursDoctor is a web application designed to digitalize the management of doctoral entrance competitions, covering competition setup, candidate registration, and result publication. I contributed to both frontend and backend development. An important part of the project was exploring web application security, including OTP-based authentication, secure access management, and measures to protect sensitive candidate information. The project combines academic management workflows with practical considerations for building more secure web applications.',

    tools: [
      'React',
      'Backend Development',
      'Web Security',
      'OTP Authentication',
    ],

    col1Img1: '/images/doctorat-2.png',
    col1Img2: '/images/doctorat-1.png',
    col2Img: '/images/doctorat-main.png',

    learned: [
      'Contributing to frontend and backend development',
      'Understanding OTP-based authentication workflows',
      'Applying web application security concepts',
      'Managing secure access to application features',
      'Understanding the importance of protecting candidate information',
      'Developing academic management workflows',
      'Collaborating on a team-based software project',
    ],
  },
];

interface CardProps {
  project: ProjectData;
  index: number;
  totalCards: number;
  onOpenProject: (project: ProjectData) => void;
}

const ProjectCard: React.FC<CardProps> = ({
  project,
  index,
  totalCards,
  onOpenProject,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, targetScale]
  );

  const openProject = () => onOpenProject(project);

  const isChallengeCollection = Boolean(project.challenges?.length);
  const isDoctorProject = project.id === 'concoursdoctor';

  const imageFitClass = isDoctorProject
    ? 'object-contain'
    : 'object-cover';

  return (
    <div
      ref={containerRef}
      className="h-[85vh] sm:h-[90vh] flex items-start justify-center sticky top-24 md:top-32"
    >
      <motion.div
        style={{
          scale,
          top: `${index * 28}px`,
        }}
        className="w-full relative rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 shadow-2xl origin-top"
      >
        {/* Top row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 sm:pb-8 border-b border-[#D7E2EA]/20">
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            <span
              className="font-black text-[#D7E2EA] leading-none tracking-tighter select-none"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              }}
            >
              {project.number}
            </span>

            <div className="space-y-1">
              <span className="text-xs uppercase tracking-widest text-[#B600A8] font-semibold block">
                {project.category}
              </span>

              <h3
                className="font-black uppercase text-[#D7E2EA] tracking-tight leading-none"
                style={{
                  fontSize: 'clamp(1.1rem, 2.8vw, 2.5rem)',
                }}
              >
                {project.title}
              </h3>
            </div>
          </div>

          <div className="shrink-0 self-end sm:self-center">
            <LiveProjectButton onClick={openProject} />
          </div>
        </div>

        {/* Short project description */}
        {project.shortDescription && (
          <div className="pt-4 sm:pt-5 pb-1">
            <p className="text-xs sm:text-sm md:text-base text-[#D7E2EA]/65 leading-relaxed max-w-4xl">
              {project.shortDescription}
            </p>
          </div>
        )}

        {/* Frontend Mentor collection visual */}
        {isChallengeCollection ? (
          <button
            type="button"
            onClick={openProject}
            aria-label="Explore Frontend Mentor challenges"
            className="w-full mt-4 sm:mt-6 min-h-[360px] sm:min-h-[420px] rounded-[30px] sm:rounded-[40px] border border-white/10 bg-[#111] p-5 sm:p-8 text-left overflow-hidden relative group"
          >
            <div className="absolute -top-24 -right-20 w-72 h-72 rounded-full bg-[#B600A8]/20 blur-[90px] group-hover:bg-[#B600A8]/30 transition-colors" />

            <div className="absolute -bottom-24 -left-20 w-72 h-72 rounded-full bg-purple-700/10 blur-[90px]" />

            <div className="relative z-10 flex flex-col h-full justify-between gap-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#B600A8] font-bold">
                    Frontend Practice Collection
                  </span>

                  <h4 className="mt-3 text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-none">
                    08
                    <span className="text-[#B600A8]">.</span>
                    <br />
                    Challenges
                  </h4>

                  <p className="mt-3 text-xs sm:text-sm text-white/45 max-w-md leading-relaxed">
                    Eight practical projects demonstrating responsive
                    interfaces, JavaScript interactions, and frontend
                    development skills.
                  </p>
                </div>

                <span className="hidden sm:flex w-14 h-14 rounded-2xl border border-[#B600A8]/40 bg-[#B600A8]/10 items-center justify-center text-[#D65BCB] text-2xl font-black">
                  FE
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                {project.challenges?.map((challenge, challengeIndex) => (
                  <div
                    key={challenge.id}
                    className="min-h-[72px] sm:min-h-[92px] rounded-xl border border-white/10 bg-white/[0.035] p-3 sm:p-4 flex flex-col justify-between group-hover:border-[#B600A8]/30 transition-colors"
                  >
                    <span className="text-[10px] font-mono text-[#B600A8]">
                      {String(challengeIndex + 1).padStart(2, '0')}
                    </span>

                    <span className="text-[10px] sm:text-xs font-semibold text-white/75 leading-snug line-clamp-2">
                      {challenge.title}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between border-t border-white/10 pt-4">
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.18em] text-white/40">
                  Explore all 8 projects
                </span>

                <span className="text-xs font-bold text-[#D65BCB] group-hover:translate-x-1 transition-transform">
                  VIEW COLLECTION →
                </span>
              </div>
            </div>
          </button>
        ) : (
          /* Standard project image gallery */
          <div className="pt-4 sm:pt-6 flex flex-col md:flex-row gap-4 sm:gap-6">
            {/* Left column */}
            <div className="w-full md:w-[40%] flex flex-col gap-4 sm:gap-6">
              <button
                type="button"
                onClick={openProject}
                aria-label={`Open ${project.title} preview 1`}
                className="w-full h-[150px] sm:h-[180px] md:h-[190px] overflow-hidden rounded-[30px] sm:rounded-[40px] md:rounded-[50px] bg-neutral-900 border border-white/10 group flex items-center justify-center"
              >
                <img
                  src={project.col1Img1}
                  alt={`${project.title} preview 1`}
                  referrerPolicy="no-referrer"
                  className={`w-full h-full ${imageFitClass} group-hover:scale-[1.03] transition-transform duration-500`}
                />
              </button>

              <button
                type="button"
                onClick={openProject}
                aria-label={`Open ${project.title} preview 2`}
                className="w-full h-[170px] sm:h-[210px] md:h-[220px] overflow-hidden rounded-[30px] sm:rounded-[40px] md:rounded-[50px] bg-neutral-900 border border-white/10 group flex items-center justify-center"
              >
                <img
                  src={project.col1Img2}
                  alt={`${project.title} preview 2`}
                  referrerPolicy="no-referrer"
                  className={`w-full h-full ${imageFitClass} group-hover:scale-[1.03] transition-transform duration-500`}
                />
              </button>
            </div>

            {/* Right column */}
            <button
              type="button"
              onClick={openProject}
              aria-label={`Open ${project.title} main preview`}
              className="w-full md:w-[60%] h-[280px] sm:h-[350px] md:h-[426px] shrink-0 overflow-hidden rounded-[30px] sm:rounded-[40px] md:rounded-[50px] bg-neutral-900 border border-white/10 group flex items-center justify-center"
            >
              <img
                src={project.col2Img}
                alt={`${project.title} main preview`}
                referrerPolicy="no-referrer"
                className={`w-full h-full ${imageFitClass} group-hover:scale-[1.03] transition-transform duration-500`}
              />
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onOpenProject,
}) => {
  return (
    <section
      id="projects"
      className="w-full bg-[#0C0C0C] text-[#D7E2EA] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 relative pt-20 sm:pt-24 md:pt-32 pb-16 px-4 sm:px-6 md:px-10"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16 sm:mb-20 md:mb-24">
          <FadeIn delay={0} y={40}>
            <h2
              className="hero-heading font-black uppercase text-center leading-none tracking-tight select-none"
              style={{
                fontSize: 'clamp(3rem, 12vw, 160px)',
              }}
            >
              Project
            </h2>
          </FadeIn>
        </div>

        {/* Sticky project cards */}
        <div className="relative pb-32">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              totalCards={PROJECTS.length}
              onOpenProject={onOpenProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;