import React from 'react';

interface HeroSvgIllustrationProps {
  className?: string;
}

export const HeroSvgIllustration: React.FC<HeroSvgIllustrationProps> = ({ className = '' }) => {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-w-[420px] max-h-[420px] drop-shadow-[0_20px_50px_rgba(0,229,255,0.15)]"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="cyanTile" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#0284C7" stopOpacity="0.4" />
          </linearGradient>

          <linearGradient id="violetTile" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#4C1D95" stopOpacity="0.4" />
          </linearGradient>

          <linearGradient id="blueTile" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#0369A1" stopOpacity="0.4" />
          </linearGradient>

          <linearGradient id="emeraldShield" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#047857" stopOpacity="0.3" />
          </linearGradient>

          <filter id="glowCyan" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <filter id="glowEmerald" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Base Glow Ring */}
        <ellipse cx="250" cy="420" rx="140" ry="25" fill="#00E5FF" fillOpacity="0.08" />
        <ellipse cx="250" cy="420" rx="110" ry="18" stroke="#7C3AED" strokeWidth="1.5" strokeOpacity="0.3" strokeDasharray="6 6" />

        {/* BOTTOM SLAB: Database (#38BDF8) */}
        <g transform="translate(0, 320)">
          <path
            d="M140 30 L250 80 L360 30 L250 -20 Z"
            fill="url(#blueTile)"
            stroke="#38BDF8"
            strokeWidth="1.5"
            strokeOpacity="0.9"
          />
          <path
            d="M140 30 L140 45 L250 95 L360 45 L360 30 L250 80 Z"
            fill="#0369A1"
            fillOpacity="0.7"
            stroke="#38BDF8"
            strokeWidth="1"
            strokeOpacity="0.5"
          />
          <text x="375" y="38" fill="#38BDF8" fontSize="11" fontFamily="Kanit, sans-serif" opacity="0.75" letterSpacing="2">
            DATABASE
          </text>
        </g>

        {/* MIDDLE SLAB: Backend (#7C3AED), offset rotation */}
        <g transform="translate(0, 250) rotate(-6 250 30)">
          <path
            d="M140 30 L250 80 L360 30 L250 -20 Z"
            fill="url(#violetTile)"
            stroke="#7C3AED"
            strokeWidth="1.5"
            strokeOpacity="0.9"
          />
          <path
            d="M140 30 L140 45 L250 95 L360 45 L360 30 L250 80 Z"
            fill="#4C1D95"
            fillOpacity="0.7"
            stroke="#7C3AED"
            strokeWidth="1"
            strokeOpacity="0.5"
          />
          <text x="375" y="38" fill="#A78BFA" fontSize="11" fontFamily="Kanit, sans-serif" opacity="0.75" letterSpacing="2">
            BACKEND
          </text>
        </g>

        {/* TOP SLAB: Frontend (#00E5FF), offset rotation */}
        <g transform="translate(0, 180) rotate(5 250 30)">
          <path
            d="M140 30 L250 80 L360 30 L250 -20 Z"
            fill="url(#cyanTile)"
            stroke="#00E5FF"
            strokeWidth="2"
            strokeOpacity="0.95"
            filter="url(#glowCyan)"
          />
          <path
            d="M140 30 L140 45 L250 95 L360 45 L360 30 L250 80 Z"
            fill="#0284C7"
            fillOpacity="0.7"
            stroke="#00E5FF"
            strokeWidth="1"
            strokeOpacity="0.6"
          />
          <text x="375" y="38" fill="#00E5FF" fontSize="11" fontFamily="Kanit, sans-serif" opacity="0.85" letterSpacing="2">
            FRONTEND
          </text>

          {/* Planted CTF Flag on the left edge */}
          <line x1="160" y1="20" x2="160" y2="-45" stroke="#D7E2EA" strokeWidth="2.5" strokeLinecap="round" />
          <polygon points="160,-45 205,-35 160,-25" fill="#10B981" stroke="#34D399" strokeWidth="1" />
        </g>

        {/* SECURITY PART: Shield and Padlock hovering above top slab */}
        <g transform="translate(250, 105)">
          {/* Emerald Shield Outline */}
          <path
            d="M0 -35 C30 -35, 45 -25, 45 5 C45 35, 20 55, 0 65 C-20 55, -45 35, -45 5 C-45 -25, -30 -35, 0 -35 Z"
            fill="url(#emeraldShield)"
            stroke="#10B981"
            strokeWidth="2"
            strokeOpacity="0.9"
            filter="url(#glowEmerald)"
          />

          {/* Padlock Body */}
          <rect x="-16" y="-5" width="32" height="28" rx="6" fill="#064E3B" stroke="#10B981" strokeWidth="2" />
          {/* Keyhole */}
          <circle cx="0" cy="7" r="3" fill="#10B981" />
          <path d="M-1.5 7 L1.5 7 L2.5 16 L-2.5 16 Z" fill="#10B981" />
          {/* Padlock Shackle */}
          <path
            d="M-10 -5 L-10 -18 C-10 -26, 10 -26, 10 -18 L10 -5"
            fill="none"
            stroke="#34D399"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
        </g>

        {/* Floating Accent Particles */}
        <rect x="90" y="160" width="10" height="10" rx="2" fill="#00E5FF" fillOpacity="0.4" transform="rotate(25 95 165)" />
        <rect x="390" y="220" width="12" height="12" rx="2" fill="#7C3AED" fillOpacity="0.4" transform="rotate(40 396 226)" />
        <circle cx="370" cy="110" r="5" fill="#10B981" fillOpacity="0.5" />
        <circle cx="110" cy="270" r="4" fill="#00E5FF" fillOpacity="0.3" />
      </svg>
    </div>
  );
};

export default HeroSvgIllustration;
