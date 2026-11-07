import React from 'react';
import { ShieldCheck, Bug, Flag, Network, ExternalLink, Shield } from 'lucide-react';
import { FadeIn } from '../components/FadeIn.tsx';
import { GhostButton } from '../components/GhostButton.tsx';
import { TerminalCard } from '../components/TerminalCard.tsx';
import { ChallengeCard } from '../components/ChallengeCard.tsx';
import { NetworkGraph } from '../components/NetworkGraph.tsx';
import { SOCIALS_DATA } from '../data/socials.ts';

export const CybersecuritySection: React.FC = () => {
  return (
    <section
      id="security"
      className="w-full bg-[#0C0C0C] text-[#D7E2EA] relative py-24 sm:py-32 px-5 sm:px-8 md:px-10 overflow-hidden"
    >
      {/* Background subtle emerald radial glow and faint CSS grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          background: 'radial-gradient(circle at 50% 30%, rgba(16, 185, 129, 0.15) 0%, transparent 65%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(to right, #10B981 1px, transparent 1px), linear-gradient(to bottom, #10B981 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10 space-y-16 sm:space-y-20">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <FadeIn delay={0} y={15}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 text-xs font-mono tracking-widest text-[#10B981] uppercase mb-2">
              <ShieldCheck size={14} />
              <span>Learning Journey</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} y={25}>
            <h2
              className="hero-heading font-black uppercase tracking-tight leading-tight select-none"
              style={{ fontSize: 'clamp(2rem, 7vw, 100px)' }}
            >
              Beyond Development — Exploring Cybersecurity
            </h2>
          </FadeIn>

          <FadeIn delay={0.2} y={20}>
            <p className="text-sm sm:text-base md:text-lg text-[#D7E2EA]/85 font-light leading-relaxed max-w-2xl mx-auto">
              Alongside full-stack development, I&apos;m a cybersecurity student learning how systems work,
              how vulnerabilities are discovered, and how digital products can be made more secure.
              This is an ongoing, hands-on learning journey, and I&apos;m at the beginning of it.
            </p>
          </FadeIn>
        </div>

        {/* 3 Cybersecurity Cards in a row (stacked on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Ethical Hacking */}
          <FadeIn delay={0.15} y={30}>
            <div className="rounded-3xl border border-[#10B981]/30 bg-[#0A120F]/90 p-6 sm:p-8 flex flex-col justify-between h-full hover:border-[#10B981]/70 hover:shadow-[0_0_30px_rgba(16,185,129,0.12)] transition-all duration-300 group">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#10B981]/15 text-[#10B981] flex items-center justify-center">
                    <Bug size={24} />
                  </div>
                  <span className="text-[11px] font-mono tracking-wider px-3 py-1 rounded-full bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30">
                    Currently Exploring
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
                  Ethical Hacking
                </h3>

                <p className="text-xs sm:text-sm text-[#D7E2EA]/75 font-light leading-relaxed">
                  Learning how security testing works, understanding vulnerabilities, and exploring ethical
                  approaches to identifying security weaknesses.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Card 2: Capture The Flag */}
          <FadeIn delay={0.25} y={30}>
            <div className="rounded-3xl border border-[#10B981]/30 bg-[#0A120F]/90 p-6 sm:p-8 flex flex-col justify-between h-full hover:border-[#10B981]/70 hover:shadow-[0_0_30px_rgba(16,185,129,0.12)] transition-all duration-300 group">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#10B981]/15 text-[#10B981] flex items-center justify-center">
                    <Flag size={24} />
                  </div>
                  <span className="text-[11px] font-mono tracking-wider px-3 py-1 rounded-full bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30">
                    Learning in Progress
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
                  Capture The Flag
                </h3>

                <p className="text-xs sm:text-sm text-[#D7E2EA]/75 font-light leading-relaxed">
                  Interested in solving technical challenges, analyzing problems, developing logical thinking,
                  and learning through hands-on security exercises.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Card 3: Network & Web Security */}
          <FadeIn delay={0.35} y={30}>
            <div className="rounded-3xl border border-[#10B981]/30 bg-[#0A120F]/90 p-6 sm:p-8 flex flex-col justify-between h-full hover:border-[#10B981]/70 hover:shadow-[0_0_30px_rgba(16,185,129,0.12)] transition-all duration-300 group">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#10B981]/15 text-[#10B981] flex items-center justify-center">
                    <Network size={24} />
                  </div>
                  <span className="text-[11px] font-mono tracking-wider px-3 py-1 rounded-full bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30">
                    Interested In
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
                  Network &amp; Web Security
                </h3>

                <p className="text-xs sm:text-sm text-[#D7E2EA]/75 font-light leading-relaxed">
                  Building on my computer networking and web development background to understand how applications
                  and networks can be protected.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* TryHackMe Card (Full Width under the 3 cards) */}
        <FadeIn delay={0.3} y={30}>
          <div className="w-full rounded-3xl border border-[#10B981]/35 bg-[#09110E]/90 p-6 sm:p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-3">
                <Shield size={22} className="text-[#10B981]" />
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
                  Practical Learning: TryHackMe
                </h3>
                <span className="text-[11px] font-mono tracking-wider px-3 py-0.5 rounded-full bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30">
                  Beginner Journey
                </span>
              </div>
              <p className="text-sm sm:text-base text-[#D7E2EA]/80 font-light leading-relaxed">
                I use TryHackMe and practical labs to learn security concepts by doing.
              </p>
            </div>

            {SOCIALS_DATA.tryhackme && SOCIALS_DATA.tryhackme.trim() !== '' && (
              <div className="shrink-0">
                <GhostButton
                  href={SOCIALS_DATA.tryhackme}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="cyber"
                  icon={<ExternalLink size={15} />}
                  label="View my TryHackMe profile"
                />
              </div>
            )}
          </div>
        </FadeIn>

        {/* Decorative Visuals Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pt-6">
          {/* Terminal Card */}
          <div className="lg:col-span-5">
            <FadeIn delay={0.2} y={20}>
              <TerminalCard />
            </FadeIn>
          </div>

          {/* Abstract Network Graph */}
          <div className="lg:col-span-2 hidden lg:flex items-center justify-center">
            <FadeIn delay={0.3} y={0}>
              <NetworkGraph />
            </FadeIn>
          </div>

          {/* Example Challenge Interface Card */}
          <div className="lg:col-span-5">
            <FadeIn delay={0.4} y={20}>
              <ChallengeCard />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CybersecuritySection;
