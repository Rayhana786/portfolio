import React from 'react';
import { FadeIn } from '../components/FadeIn.tsx';
import { SERVICES_DATA } from '../data/services.ts';

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="w-full bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-0"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading: "Services" in #0C0C0C */}
        <FadeIn delay={0} y={40}>
          <h2
            className="text-[#0C0C0C] font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-28"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Services
          </h2>
        </FadeIn>

        {/* 5 Service Items in vertical list */}
        <div className="divide-y divide-[#0C0C0C]/15 border-t border-b border-[#0C0C0C]/15">
          {SERVICES_DATA.map((item, index) => (
            <FadeIn key={item.number} delay={index * 0.1} y={30}>
              <div className="py-8 sm:py-10 md:py-12 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-12 group transition-colors duration-300">
                {/* Number on left */}
                <div
                  className="font-black text-[#0C0C0C] leading-none shrink-0 tracking-tighter select-none min-w-[120px] sm:min-w-[160px] md:min-w-[200px]"
                  style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                >
                  {item.number}
                </div>

                {/* Name + Description stacked on right */}
                <div className="flex-1 space-y-2 md:space-y-3">
                  <h3
                    className="font-medium uppercase text-[#0C0C0C] tracking-wide"
                    style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                  >
                    {item.name}
                  </h3>
                  <p
                    className="font-light leading-relaxed max-w-2xl text-[#0C0C0C]"
                    style={{
                      fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)',
                      opacity: 0.6,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
