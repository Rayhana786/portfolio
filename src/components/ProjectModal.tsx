
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ExternalLink,
  Github,
  Layers,
  Sparkles,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Code2,
} from 'lucide-react';

export interface FrontendChallenge {
  id: string;
  title: string;
  githubUrl: string;
  liveUrl: string;
}

export interface ProjectData {
  id: string;
  number: string;
  title: string;
  category: string;
  year: string;
  description: string;
  tools: string[];
  shortDescription?: string;
  col1Img1: string;
  col1Img2: string;
  col2Img: string;
  liveUrl?: string;
  githubUrl?: string;
  learned?: string[];
  challenges?: FrontendChallenge[];
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const allImages = project
    ? [project.col2Img, project.col1Img1, project.col1Img2].filter(Boolean)
    : [];

  const isChallengeCollection = Boolean(project?.challenges?.length);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [project?.id]);

  const nextImage = () => {
    if (allImages.length === 0) return;

    setActiveImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const previousImage = () => {
    if (allImages.length === 0) return;

    setActiveImageIndex(
      (prev) => (prev - 1 + allImages.length) % allImages.length
    );
  };

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5">

          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-3xl max-h-[88vh] bg-[#101010] border border-white/15 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl text-[#D7E2EA] flex flex-col"
          >

            {/* Header */}
            <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 border-b border-white/10 shrink-0">
              <div className="flex items-center gap-3 min-w-0">
                <span className="text-xl sm:text-2xl font-black text-white/80">
                  {project.number}
                </span>

                <div className="min-w-0">
                  <span className="text-[9px] uppercase tracking-[0.18em] text-[#B600A8] font-bold">
                    {project.category} · {project.year}
                  </span>

                  <h2 className="text-base sm:text-lg font-black uppercase tracking-tight text-white truncate">
                    {project.title}
                  </h2>
                </div>
              </div>

              <button
                onClick={onClose}
                aria-label="Close project details"
                className="shrink-0 p-2 rounded-full border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-all"
              >
                <X size={17} />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto overscroll-contain">
              <div className="p-4 sm:p-6 space-y-6">

                {/* Image Gallery - regular projects only */}
                {!isChallengeCollection && allImages.length > 0 && (
                  <section className="space-y-2.5">
                    <div className="relative aspect-[16/8] rounded-xl overflow-hidden bg-black border border-white/10 group">
                      <motion.img
                        key={`${project.id}-${activeImageIndex}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        src={allImages[activeImageIndex]}
                        alt={`${project.title} preview`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />

                      {allImages.length > 1 && (
                        <>
                          <button
                            onClick={previousImage}
                            aria-label="Previous image"
                            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white hover:bg-[#B600A8] transition-all"
                          >
                            <ChevronLeft size={17} />
                          </button>

                          <button
                            onClick={nextImage}
                            aria-label="Next image"
                            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white hover:bg-[#B600A8] transition-all"
                          >
                            <ChevronRight size={17} />
                          </button>
                        </>
                      )}

                      <div className="absolute bottom-2 right-2 px-2.5 py-1 rounded-full bg-black/70 border border-white/10 text-[10px] text-white/80">
                        {activeImageIndex + 1} / {allImages.length}
                      </div>
                    </div>

                    {/* Image Thumbnails */}
                    {allImages.length > 1 && (
                      <div className="grid grid-cols-3 gap-2">
                        {allImages.map((img, index) => (
                          <button
                            key={`${project.id}-image-${index}`}
                            type="button"
                            onClick={() => setActiveImageIndex(index)}
                            aria-label={`View image ${index + 1}`}
                            className={`relative aspect-[16/9] rounded-lg overflow-hidden border transition-all ${
                              activeImageIndex === index
                                ? 'border-[#B600A8] opacity-100'
                                : 'border-white/10 opacity-50 hover:opacity-100'
                            }`}
                          >
                            <img
                              src={img}
                              alt={`Preview ${index + 1}`}
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    )}
                  </section>
                )}

                {/* Project Overview */}
                <section className="space-y-3">
                  <div className="flex items-center gap-2 text-[#B600A8]">
                    <Sparkles size={14} />
                    <h3 className="text-[10px] uppercase tracking-[0.18em] font-bold">
                      Project Overview
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm leading-7 text-white/65">
                    {project.description}
                  </p>
                </section>

                {/* Frontend Mentor Challenges */}
                {project.challenges && project.challenges.length > 0 && (
                  <section className="space-y-4">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <Code2 size={16} className="text-[#D65BCB]" />

                        <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                          Challenge Collection
                        </h3>
                      </div>

                      <span className="text-[10px] font-bold text-[#D65BCB] bg-[#B600A8]/10 border border-[#B600A8]/20 px-2.5 py-1 rounded-full">
                        {project.challenges.length} Projects
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {project.challenges.map((challenge, index) => (
                        <motion.div
                          key={challenge.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.04 }}
                          className="rounded-xl border border-white/10 bg-white/[0.035] p-4 hover:border-[#B600A8]/40 transition-colors"
                        >
                          <div className="flex items-start gap-3 mb-4">
                            <span className="shrink-0 w-7 h-7 rounded-lg flex items-center justify-center bg-[#B600A8]/10 border border-[#B600A8]/20 text-[#D65BCB] text-[10px] font-bold">
                              {String(index + 1).padStart(2, '0')}
                            </span>

                            <h4 className="text-xs sm:text-sm font-bold text-white/90 leading-relaxed">
                              {challenge.title}
                            </h4>
                          </div>

                          <div className="flex gap-2">
                            <a
                              href={challenge.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 flex items-center justify-center gap-1.5 px-2 py-2 rounded-lg bg-[#B600A8] hover:bg-[#CE19C0] text-white text-[10px] font-bold transition-all hover:-translate-y-0.5"
                            >
                              <ExternalLink size={12} />
                              Live Demo
                            </a>

                            <a
                              href={challenge.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`View ${challenge.title} source code on GitHub`}
                              className="flex-1 flex items-center justify-center gap-1.5 px-2 py-2 rounded-lg bg-[#24292F] hover:bg-[#343A40] border border-white/10 text-white text-[10px] font-bold transition-all hover:-translate-y-0.5"
                            >
                              <Github size={13} />
                              GitHub
                            </a>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </section>
                )}

                {/* Technologies */}
                <section className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Layers size={15} className="text-[#D65BCB]" />

                    <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                      Technologies & Tools
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/10 text-[11px] font-mono text-white/80 hover:border-[#B600A8]/50 transition-colors"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </section>

                {/* What I Learned */}
                {project.learned && project.learned.length > 0 && (
                  <section className="space-y-3">
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                        What I Learned
                      </h3>

                      <p className="text-[10px] text-white/40 mt-1">
                        Key technical skills and experience gained
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.learned.map((item, index) => (
                        <motion.div
                          key={item}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.04 }}
                          className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.035] border border-white/10 hover:border-[#B600A8]/40 transition-colors"
                        >
                          <span className="text-[#D65BCB] text-[10px] font-bold mt-0.5">
                            {String(index + 1).padStart(2, '0')}
                          </span>

                          <span className="text-xs text-white/80 leading-relaxed">
                            {item}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </section>
                )}

                {/* Project Links - regular projects only */}
                {!isChallengeCollection &&
                  (project.liveUrl || project.githubUrl) && (
                    <section className="pt-4 border-t border-white/10">
                      <h3 className="text-[10px] uppercase tracking-[0.18em] text-white/40 font-bold mb-3">
                        Project Resources
                      </h3>

                      <div className="flex flex-col sm:flex-row gap-2.5">
                        {/* Live Demo */}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#B600A8] hover:bg-[#CE19C0] text-white font-bold text-xs transition-all hover:-translate-y-0.5"
                          >
                            <ExternalLink size={14} />
                            Live Demo
                            <ArrowUpRight size={13} />
                          </a>
                        )}

                        {/* GitHub */}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#24292F] hover:bg-[#343A40] border border-white/10 text-white font-bold text-xs transition-all hover:-translate-y-0.5"
                          >
                            <Github size={15} />
                            GitHub Repository
                            <ArrowUpRight size={13} />
                          </a>
                        )}
                      </div>
                    </section>
                  )}

              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
