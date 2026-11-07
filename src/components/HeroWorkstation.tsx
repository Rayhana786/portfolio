import React, { useState, useRef } from 'react';
import { Magnet } from './Magnet.tsx';
import { Code2, ShieldCheck, Terminal } from 'lucide-react';

interface HeroWorkstationProps {
  onOpenCv?: () => void;
  onOpenContact?: () => void;
  className?: string;
}

export const HeroWorkstation: React.FC<HeroWorkstationProps> = ({ className = '' }) => {
  const [activeScreen, setActiveScreen] = useState<'stack' | 'security' | null>(null);
  const [dragOffset, setDragOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const isDragging = useRef(false);
  const dragStart = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    dragStart.current = { x: e.clientX - dragOffset.x, y: e.clientY - dragOffset.y };
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const newX = Math.max(-40, Math.min(40, e.clientX - dragStart.current.x));
    const newY = Math.max(-25, Math.min(25, e.clientY - dragStart.current.y));
    setDragOffset({ x: newX, y: newY });
  };

  const handlePointerUp = () => {
    isDragging.current = false;
    // Spring back smoothly
    setDragOffset({ x: 0, y: 0 });
  };

  return (
    <div
      className={`relative flex items-center justify-center select-none ${className}`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      <Magnet
        padding={160}
        strength={3.2}
        tilt={true}
        activeTransition="transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)"
        inactiveTransition="transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)"
        className="relative group cursor-grab active:cursor-grabbing w-full"
      >
        <div
          className="relative rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_50px_rgba(124,58,237,0.25)] border-2 border-[#D7E2EA]/30 bg-[#0E0E14] transition-all duration-300"
          style={{
            transform: `translate3d(${dragOffset.x}px, ${dragOffset.y}px, 0)`,
          }}
        >
          {/* Isometric 3D Room Visual */}
          <img
            src="/assets/aistudio/hero_room.webp"
            alt="Raihana Khelifati 3D Developer & Cybersecurity Workstation"
            className="w-full h-auto object-cover select-none pointer-events-none filter brightness-105 contrast-110"
            draggable={false}
          />

          {/* Personalized Wall Sign: RK · ESI */}
          <div className="absolute top-[12%] left-[25%] -translate-x-1/2 pointer-events-none">
            <div className="flex flex-col items-center drop-shadow-[0_0_14px_rgba(0,229,255,0.95)]">
              <span className="text-[13px] sm:text-[16px] md:text-[18px] font-black text-white font-mono tracking-wider px-2 py-0.5 rounded border border-[#00E5FF]/80 bg-[#00E5FF]/15">
                RK<span className="text-[#00E5FF]">·</span>ESI
              </span>
              <span className="text-[7px] sm:text-[8px] font-mono tracking-widest text-[#00E5FF] uppercase">
                FULL-STACK &amp; CYBER
              </span>
            </div>
          </div>

          {/* Dynamic Glow Reflections (Cyan, Violet, Emerald) */}
          <div className="absolute top-[26%] left-[22%] w-32 h-24 bg-[#00E5FF]/25 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute top-[26%] right-[20%] w-32 h-24 bg-[#10B981]/30 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-[20%] left-[30%] w-44 h-24 bg-[#7C3AED]/25 rounded-full blur-2xl pointer-events-none" />

          {/* Floating Hotspot: Full-Stack Multi-Monitor Setup (Left) */}
          <div
            onMouseEnter={() => setActiveScreen('stack')}
            onMouseLeave={() => setActiveScreen(null)}
            className="absolute top-[48%] left-[7%] sm:left-[9%] z-20 cursor-pointer pointer-events-auto"
          >
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/85 border border-[#00E5FF]/70 text-[#00E5FF] shadow-[0_0_16px_rgba(0,229,255,0.45)] backdrop-blur-md text-[9px] sm:text-[11px] font-mono uppercase tracking-wider hover:scale-105 transition-transform">
              <Code2 size={13} />
              <span>Full-Stack</span>
            </div>
          </div>

          {/* Floating Hotspot: Cybersecurity Lab (Right) */}
          <div
            onMouseEnter={() => setActiveScreen('security')}
            onMouseLeave={() => setActiveScreen(null)}
            className="absolute top-[43%] right-[8%] sm:right-[11%] z-20 cursor-pointer pointer-events-auto"
          >
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/85 border border-[#10B981]/70 text-[#10B981] shadow-[0_0_16px_rgba(16,185,129,0.45)] backdrop-blur-md text-[9px] sm:text-[11px] font-mono uppercase tracking-wider hover:scale-105 transition-transform">
              <ShieldCheck size={13} />
              <span>Security Lab</span>
            </div>
          </div>

          {/* Interactive Screen Tooltips */}
          {activeScreen === 'stack' && (
            <div className="absolute bottom-3 left-3 right-3 bg-black/95 border border-[#00E5FF]/50 rounded-2xl p-3 backdrop-blur-md text-[#D7E2EA] z-30 animate-in fade-in duration-200">
              <div className="flex items-center gap-1.5 text-[#00E5FF] font-mono font-semibold uppercase text-[11px] mb-1">
                <Terminal size={13} />
                <span>React · HTML5 · CSS3 · PHP · SQL · Node</span>
              </div>
              <p className="text-[11px] text-white/80 font-light leading-snug">
                Client applications, responsive web interfaces, and backend database pipelines.
              </p>
            </div>
          )}

          {activeScreen === 'security' && (
            <div className="absolute bottom-3 left-3 right-3 bg-black/95 border border-[#10B981]/50 rounded-2xl p-3 backdrop-blur-md text-[#D7E2EA] z-30 animate-in fade-in duration-200">
              <div className="flex items-center gap-1.5 text-[#10B981] font-mono font-semibold uppercase text-[11px] mb-1">
                <ShieldCheck size={13} />
                <span>Wireshark · TryHackMe · CTF Labs</span>
              </div>
              <p className="text-[11px] text-white/80 font-light leading-snug">
                Ethical hacking basics, vulnerability detection, and packet inspection.
              </p>
            </div>
          )}
        </div>
      </Magnet>
    </div>
  );
};

export default HeroWorkstation;
