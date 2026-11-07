
import React, { Suspense, useState, useEffect } from 'react';
import { GraduationCap, Download } from 'lucide-react';
import { FadeIn } from '../components/FadeIn.tsx';
import {
  Typewriter,
  TYPEWRITER_WORDS,
  TYPEWRITER_COLORS,
} from '../components/Typewriter.tsx';
import { ContactButton } from '../components/ContactButton.tsx';
import { GhostButton } from '../components/GhostButton.tsx';
import HeroScene3D from '../components/HeroScene3D.tsx';

export const HeroSection: React.FC = () => {
  const [shouldRender3D, setShouldRender3D] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const isSmallScreen = window.innerWidth < 640;

    const checkWebGL = () => {
      try {
        const canvas = document.createElement('canvas');
        return !!(
          window.WebGLRenderingContext &&
          (canvas.getContext('webgl') ||
            canvas.getContext('experimental-webgl'))
        );
      } catch {
        return false;
      }
    };

    setShouldRender3D(
      !isSmallScreen && !prefersReducedMotion && checkWebGL()
    );
  }, []);

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCvClick = () => {
    const link = document.createElement('a');
    link.href = '/projects/CV_raihana.pdf';
    link.download = 'CV_raihana.pdf';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden w-full bg-[#0C0C0C] pt-24 sm:pt-28 pb-16 px-6 sm:px-10 lg:px-16 select-none">

      {/* Background lighting */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-[350px] h-[350px] rounded-full bg-[#00E5FF]/[0.045] blur-[130px]" />
        <div className="absolute bottom-[-10%] left-[10%] w-[400px] h-[300px] rounded-full bg-[#426F91]/[0.05] blur-[130px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-8 relative z-10">

        {/* Left Column: Introduction */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-5 sm:space-y-6 relative z-20 min-w-0">

          {/* Greeting */}
          <FadeIn delay={0} y={-10}>
            <p className="text-xs sm:text-sm uppercase tracking-[0.16em] text-[#D7E2EA] font-medium font-mono">
              Hi, I&apos;m Raihana Khelifati
            </p>
          </FadeIn>

          {/* Main Heading */}
          <FadeIn delay={0.1} y={25}>
            <h1
              className="hero-heading font-black uppercase leading-[0.95] whitespace-nowrap select-none"
              style={{
                fontSize: 'clamp(3.2rem, 9.5vw, 9rem)',
                letterSpacing: '-0.01em',
              }}
            >
              RAIHANA
            </h1>
          </FadeIn>

          {/* Typewriter */}
          <FadeIn delay={0.2} y={15}>
            <div className="text-base sm:text-lg md:text-xl font-medium min-h-[32px]">
              <Typewriter
                words={TYPEWRITER_WORDS}
                colors={TYPEWRITER_COLORS}
                typeSpeed={80}
                deleteSpeed={40}
                pauseMs={1500}
              />
            </div>
          </FadeIn>

          {/* Description */}
          <FadeIn delay={0.3} y={15}>
            <p className="text-sm sm:text-base md:text-lg text-[#E1E8ED] font-normal max-w-lg leading-[1.8]">
              I build digital experiences and explore the technology behind them.
            </p>
          </FadeIn>

          {/* Education */}
          <FadeIn delay={0.35} y={15}>
            <div className="flex items-start gap-3 text-sm">
              <GraduationCap
                size={20}
                className="text-[#00E5FF] shrink-0 mt-0.5"
              />
              <span className="text-[#D7E2EA] leading-relaxed">
                Computer Science Engineering student at ESI Sidi Bel Abbès, Algeria
              </span>
            </div>
          </FadeIn>

          {/* Buttons */}
          <FadeIn delay={0.4} y={20}>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <ContactButton
                onClick={handleContactClick}
                label="CONTACT ME"
              />

              <GhostButton
                onClick={handleCvClick}
                icon={<Download size={16} />}
                label="DOWNLOAD CV"
              />
            </div>
          </FadeIn>
        </div>

        {/* Right Column: 3D Illustration */}
        <div className="lg:col-span-5 flex items-center justify-center relative w-full h-[280px] sm:h-[360px] md:h-[430px] lg:h-[540px] min-w-0">

          {/* Illustration glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[65%] aspect-square rounded-full bg-[#00E5FF]/[0.07] blur-[100px]" />
          </div>

          <FadeIn
            delay={0.3}
            y={25}
            className="relative z-10 w-full h-full flex items-center justify-center"
          >
            {shouldRender3D ? (
              <Suspense
                fallback={<div className="w-full h-full" />}
              >
                <HeroScene3D />
              </Suspense>
            ) : (
              <div className="w-full h-full" />
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
