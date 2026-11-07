
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';

import Navbar from './components/Navbar.tsx';
import HeroSection from './sections/HeroSection.tsx';
import TechMarquee from './sections/TechMarquee.tsx';
import AboutSection from './sections/AboutSection.tsx';
import ServicesSection from './sections/ServicesSection.tsx';
import ProjectsSection from './sections/ProjectsSection.tsx';
import ContactSection from './sections/ContactSection.tsx';
import Footer from './components/Footer.tsx';

import ProjectModal from './components/ProjectModal.tsx';
import type { ProjectData } from './components/ProjectModal.tsx';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  return (
    <div
      className="w-full min-h-screen bg-[#0C0C0C] text-[#D7E2EA] font-['Kanit',sans-serif]"
      style={{ overflowX: 'clip' }}
    >
      {/* Fixed Navbar */}
      <Navbar />

      <main className="w-full">

        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Tech Marquee */}
        <TechMarquee />

        {/* 3. About Section */}
        <AboutSection />

        {/* 4. Services Section */}
        <ServicesSection />

        {/* 5. Projects Section */}
        <ProjectsSection
          onOpenProject={(project) => setSelectedProject(project)}
        />

        {/* 6. Contact Section */}
        <ContactSection />

      </main>

      {/* 7. Footer */}
      <Footer />

      {/* Project Inspection Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </div>
  );
}
