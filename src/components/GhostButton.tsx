import React from 'react';

interface GhostButtonProps {
  onClick?: () => void;
  href?: string;
  download?: string | boolean;
  className?: string;
  label?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  variant?: 'default' | 'cyber';
  target?: string;
  rel?: string;
}

export const GhostButton: React.FC<GhostButtonProps> = ({
  onClick,
  href,
  download,
  className = '',
  label,
  icon,
  children,
  variant = 'default',
  target,
  rel,
}) => {
  const content = children || label;
  const isCyber = variant === 'cyber';

  const baseClasses = `rounded-full border-2 font-medium uppercase tracking-widest transition-all duration-200 cursor-pointer select-none inline-flex items-center justify-center gap-2 px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base active:scale-95 ${
    isCyber
      ? 'border-[#10B981]/70 text-[#10B981] hover:bg-[#10B981]/15 hover:border-[#10B981]'
      : 'border-[#D7E2EA] text-[#D7E2EA] hover:bg-[#D7E2EA]/10'
  } ${className}`;

  if (href) {
    return (
      <a
        href={href}
        download={download}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : rel}
        onClick={onClick}
        className={baseClasses}
      >
        {icon && <span className="shrink-0">{icon}</span>}
        <span>{content}</span>
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={baseClasses}>
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{content}</span>
    </button>
  );
};

export default GhostButton;
