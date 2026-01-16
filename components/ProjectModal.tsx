import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Layers, Code, Target, Zap, Github } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Lock Body Scroll
    document.body.style.overflow = 'hidden';

    // 2. Focus Trap Logic
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!modalRef.current) return;

      if (e.key === 'Escape') {
        onClose();
        return;
      }

      if (e.key === 'Tab') {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (e.shiftKey) {
          // Shift + Tab
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          // Tab
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    
    // 3. Set Initial Focus (to Close Button)
    const timer = setTimeout(() => {
      const closeBtn = modalRef.current?.querySelector('button');
      if (closeBtn) {
        closeBtn.focus();
      }
    }, 100);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
      clearTimeout(timer);
    };
  }, [onClose]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3 } }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-sm" 
        onClick={onClose}
        aria-hidden="true"
      ></div>
      
      <motion.div 
        ref={modalRef}
        initial={{ opacity: 0, y: 100, scale: 0.9 }}
        animate={{ 
          opacity: 1, 
          y: 0, 
          scale: 1,
          transition: { type: "spring", damping: 25, stiffness: 300 }
        }}
        exit={{ 
          opacity: 0, 
          y: 100, 
          scale: 0.9,
          transition: { duration: 0.2, ease: "easeIn" }
        }}
        className="relative bg-card w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 shadow-2xl custom-scrollbar focus:outline-none"
        tabIndex={-1}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-white/5 hover:bg-white/10 rounded-full text-white transition-colors z-50 focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="relative h-64 sm:h-80 w-full">
            <img 
            src={project.image} 
            alt="" 
            className="w-full h-full object-cover opacity-50"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent flex items-end p-8 sm:p-12">
              <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                <h2 id="modal-title" className="text-3xl md:text-5xl font-bold text-white mb-2">{project.title}</h2>
                <p className="text-primary text-lg">{project.role}</p>
                </div>
                
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center gap-2 text-white hover:text-primary transition-colors pb-1 group/gh focus:outline-none focus:text-primary"
                  >
                    <Github className="w-5 h-5" aria-hidden="true" />
                    <span className="font-medium border-b border-white/30 group-hover/gh:border-primary transition-colors">View Code on GitHub</span>
                  </a>
                )}
              </div>
          </div>
        </div>

        <div className="p-8 sm:p-12 grid gap-12">
          {/* SR Only Description for ARIA */}
          <div id="modal-description" className="sr-only">
            {project.summary}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
                <Target className="w-5 h-5 text-primary" aria-hidden="true" /> Problem Statement
              </h4>
              <p className="text-muted leading-relaxed">{project.problem}</p>
            </div>
              <div>
              <h4 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
                <Zap className="w-5 h-5 text-primary" aria-hidden="true" /> Key Outcomes
              </h4>
              <p className="text-muted leading-relaxed">{project.outcomes}</p>
            </div>
          </div>

          <div>
              <h4 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
                <Layers className="w-5 h-5 text-primary" aria-hidden="true" /> System Architecture & Approach
              </h4>
              <p className="text-muted leading-relaxed whitespace-pre-line">{project.architecture}</p>
          </div>

            <div>
              <h4 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
                <Code className="w-5 h-5 text-primary" aria-hidden="true" /> Technical Challenges
              </h4>
              <p className="text-muted leading-relaxed">{project.challenges}</p>
          </div>

          <div className="border-t border-white/10 pt-8">
            <h4 className="text-sm font-bold text-muted uppercase tracking-wider mb-4">Technologies Used</h4>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map(tech => (
                <span key={tech} className="px-4 py-2 bg-background border border-white/10 rounded-lg text-secondary text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;