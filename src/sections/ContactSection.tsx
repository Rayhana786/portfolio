
import React, { useState, useEffect } from 'react';
import {
  Mail,
  Github,
  Linkedin,
  Send,
  Check,
  AlertCircle,
  Loader2,
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { FadeIn } from '../components/FadeIn.tsx';
import { SOCIALS_DATA } from '../data/socials.ts';

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

interface ContactSectionProps {
  onOpenCv?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    botcheck: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<
    'idle' | 'sending' | 'success' | 'error'
  >('idle');

  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    if (countdown <= 0) return;

    const timer = setTimeout(() => {
      setCountdown((current) => current - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    } else if (formData.name.trim().length > 80) {
      newErrors.name = 'Name must be under 80 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please write a message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    } else if (formData.message.trim().length > 1000) {
      newErrors.message = 'Message cannot exceed 1000 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Honeypot protection
    if (formData.botcheck) return;

    if (!validate() || countdown > 0) return;

    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;

    if (!accessKey) {
      setStatus('error');
      return;
    }

    setStatus('sending');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          subject: `Portfolio Inquiry from ${formData.name.trim()}`,
          from_name: 'Raihana Khelifati Portfolio',
          botcheck: formData.botcheck,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          message: '',
          botcheck: '',
        });
        setErrors({});
        setCountdown(30);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const contactCards = [
    {
      id: 'email',
      icon: <Mail size={22} className="text-[#00E5FF]" />,
      label: 'Email',
      value: SOCIALS_DATA.email,
      href: `mailto:${SOCIALS_DATA.email}`,
    },
    {
      id: 'whatsapp',
      icon: <FaWhatsapp size={22} className="text-[#10B981]" />,
      label: 'WhatsApp',
      value: 'Let’s chat',
      href: SOCIALS_DATA.whatsapp,
    },
    {
      id: 'github',
      icon: <Github size={22} className="text-white" />,
      label: 'GitHub',
      value: 'Explore my repositories',
      href: SOCIALS_DATA.github,
    },
    {
      id: 'linkedin',
      icon: <Linkedin size={22} className="text-[#0A66C2]" />,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: SOCIALS_DATA.linkedin,
    },
  ];

  return (
    <section
      id="contact"
      className="w-full bg-[#0C0C0C] text-[#D7E2EA] mt-20 sm:mt-28 md:mt-32 py-24 sm:py-32 px-5 sm:px-8 md:px-10 border-t border-white/10 relative"
    >
      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <FadeIn delay={0} y={30}>
            <h2
              className="hero-heading font-black uppercase text-center leading-none tracking-tight select-none"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 120px)' }}
            >
              Contact
            </h2>
          </FadeIn>

          <FadeIn delay={0.1} y={20}>
            <p className="text-sm sm:text-base md:text-lg text-[#D7E2EA]/80 font-light leading-relaxed">
              Have a project in mind? Send me a message and I&apos;ll reply as soon as possible.
            </p>
          </FadeIn>
        </div>

        {/* Contact Form + Social Links */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <FadeIn delay={0.2} y={30}>
              <div className="rounded-3xl border border-[#D7E2EA]/20 bg-[#121212]/90 p-6 sm:p-8 md:p-10 shadow-2xl">

                {status === 'success' ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                      <Check size={32} />
                    </div>

                    <h3 className="text-2xl font-bold uppercase tracking-tight text-white">
                      Message sent!
                    </h3>

                    <p className="text-sm text-[#D7E2EA]/80 max-w-md mx-auto">
                      Thank you for reaching out. Your message has been sent successfully. I&apos;ll get back to you soon.
                    </p>

                    {countdown > 0 && (
                      <p className="text-xs text-[#10B981] font-mono">
                        You can send another message in {countdown}s.
                      </p>
                    )}

                    <button
                      type="button"
                      disabled={countdown > 0}
                      onClick={() => setStatus('idle')}
                      className="mt-4 px-6 py-3 rounded-full border border-[#00E5FF]/40 text-[#00E5FF] text-xs uppercase tracking-widest hover:bg-[#00E5FF]/10 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-5"
                  >

                    {/* Honeypot */}
                    <div className="hidden" aria-hidden="true">
                      <label htmlFor="botcheck">Do not fill this</label>
                      <input
                        id="botcheck"
                        name="botcheck"
                        type="text"
                        tabIndex={-1}
                        autoComplete="off"
                        value={formData.botcheck}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            botcheck: e.target.value,
                          })
                        }
                      />
                    </div>

                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs uppercase tracking-wider text-[#D7E2EA]/70 mb-2 font-medium"
                      >
                        Your Name <span className="text-[#00E5FF]">*</span>
                      </label>

                      <input
                        id="name"
                        type="text"
                        autoComplete="name"
                        maxLength={80}
                        required
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            name: e.target.value,
                          });
                          if (errors.name) {
                            setErrors({ ...errors, name: undefined });
                          }
                        }}
                        className={`w-full bg-black/50 border rounded-2xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#00E5FF] transition-all ${
                          errors.name
                            ? 'border-red-500/80 ring-1 ring-red-500/50'
                            : 'border-[#D7E2EA]/25'
                        }`}
                      />

                      {errors.name && (
                        <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                          <AlertCircle size={13} />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs uppercase tracking-wider text-[#D7E2EA]/70 mb-2 font-medium"
                      >
                        Email Address <span className="text-[#00E5FF]">*</span>
                      </label>

                      <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        required
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            email: e.target.value,
                          });
                          if (errors.email) {
                            setErrors({ ...errors, email: undefined });
                          }
                        }}
                        className={`w-full bg-black/50 border rounded-2xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#00E5FF] transition-all ${
                          errors.email
                            ? 'border-red-500/80 ring-1 ring-red-500/50'
                            : 'border-[#D7E2EA]/25'
                        }`}
                      />

                      {errors.email && (
                        <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                          <AlertCircle size={13} />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs uppercase tracking-wider text-[#D7E2EA]/70 mb-2 font-medium"
                      >
                        Your Message <span className="text-[#00E5FF]">*</span>
                      </label>

                      <textarea
                        id="message"
                        rows={4}
                        required
                        minLength={10}
                        maxLength={1000}
                        placeholder="Tell me about your project or idea..."
                        value={formData.message}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            message: e.target.value,
                          });
                          if (errors.message) {
                            setErrors({ ...errors, message: undefined });
                          }
                        }}
                        className={`w-full bg-black/50 border rounded-2xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#00E5FF] transition-all resize-none ${
                          errors.message
                            ? 'border-red-500/80 ring-1 ring-red-500/50'
                            : 'border-[#D7E2EA]/25'
                        }`}
                      />

                      <div className="flex justify-between items-center mt-1.5">
                        {errors.message ? (
                          <p className="text-xs text-red-400 flex items-center gap-1">
                            <AlertCircle size={13} />
                            {errors.message}
                          </p>
                        ) : (
                          <span className="text-[11px] text-white/40">
                            10 - 1000 characters
                          </span>
                        )}

                        <span className="text-[11px] text-white/40 font-mono">
                          {formData.message.length}/1000
                        </span>
                      </div>
                    </div>

                    {/* Error */}
                    {status === 'error' && (
                      <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-300 flex items-center gap-2">
                        <AlertCircle size={16} className="shrink-0" />
                        <span>
                          Message could not be sent. Please try again or contact me directly by email.
                        </span>
                      </div>
                    )}

                    {/* Submit */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={status === 'sending' || countdown > 0}
                        className="w-full contact-btn py-3.5 sm:py-4 rounded-full text-white font-medium uppercase tracking-widest text-xs sm:text-sm md:text-base flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed select-none"
                      >
                        {status === 'sending' ? (
                          <>
                            <Loader2 size={16} className="animate-spin" />
                            <span>Sending message...</span>
                          </>
                        ) : countdown > 0 ? (
                          <span>Please wait ({countdown}s)</span>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <Send size={15} />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>

          {/* Contact Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {contactCards
              .filter((card) => card.href && card.href.trim() !== '')
              .map((card, idx) => (
                <FadeIn key={card.id} delay={0.25 + idx * 0.05} y={20}>
                  <a
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-5 rounded-3xl border border-[#D7E2EA]/20 bg-[#121212]/80 hover:border-[#00E5FF]/50 hover:-translate-y-1 transition-all duration-200 group shadow-lg cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      {card.icon}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="text-xs uppercase tracking-wider text-[#D7E2EA]/60 font-medium">
                        {card.label}
                      </div>

                      <div className="text-sm font-semibold text-[#D7E2EA] truncate group-hover:text-white transition-colors">
                        {card.value}
                      </div>
                    </div>
                  </a>
                </FadeIn>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
