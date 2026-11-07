import React from 'react';

interface ContactButtonProps {
  onClick?: () => void;
  href?: string;
  className?: string;
  label?: string;
  children?: React.ReactNode;
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  onClick,
  href,
  className = '',
  label = 'Contact Me',
  children,
}) => {
  const content = children || label;
  const commonClasses = `rounded-full text-white font-medium uppercase tracking-widest cursor-pointer select-none inline-flex items-center justify-center transition-all duration-200 active:scale-95 px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base ${className}`;
  const customStyles: React.CSSProperties = {
    background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #00B8D4 100%)',
    boxShadow: 'inset 4px 4px 12px rgba(118, 33, 176, 0.8)',
    outline: '2px solid white',
    outlineOffset: '-3px',
  };

  if (href) {
    return (
      <a href={href} onClick={onClick} className={commonClasses} style={customStyles}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={commonClasses} style={customStyles}>
      {content}
    </button>
  );
};

export default ContactButton;
