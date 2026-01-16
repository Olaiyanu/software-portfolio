import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import ProjectModal from './ProjectModal';

interface AllProjectsProps {
  onBack: () => void;
}

const AllProjects: React.FC<AllProjectsProps> = ({ onBack }) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const lastActiveElement = useRef<HTMLElement | null>(null);

  // Automatically scroll to top when mounting
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const selectedProject = projects.find(p => p.id === selectedId) || null;

  const openModal = (id: string) => {
    lastActiveElement.current = document.activeElement as HTMLElement;
    setSelectedId(id);
  };

  const closeModal = () => {
    setSelectedId(null);
    if (lastActiveElement.current) {
      setTimeout(() => {
        lastActiveElement.current?.focus();
      }, 0);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-background text-secondary"
    >
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-6 flex items-center">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-muted hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Portfolio</span>
          </button>
          <span className="mx-4 text-white/10">|</span>
          <span className="font-heading font-bold text-white">Project Archive</span>
        </div>
      </div>

      <div className="pt-32 pb-24 max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            All Projects
          </h1>
          <p className="text-muted text-lg max-w-2xl">
            A complete collection of my engineering endeavors, ranging from large-scale distributed systems to experimental creative coding sketches.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="group bg-surface rounded-xl border border-white/5 overflow-hidden hover:border-primary/50 transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10 mix-blend-overlay"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                  <span className="text-xs font-medium text-primary uppercase tracking-wider mb-2 block">{project.role}</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{project.title}</h3>
                </div>
                
                <p className="text-sm text-muted mb-6 line-clamp-3 flex-grow">
                  {project.summary}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.slice(0, 3).map(tech => (
                    <span key={tech} className="px-2 py-1 bg-background border border-white/10 rounded text-xs text-muted/80">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-2 py-1 bg-background border border-white/10 rounded text-xs text-muted/80">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>

                <button 
                  onClick={() => openModal(project.id)}
                  className="w-full py-3 border border-white/10 rounded-lg text-sm font-medium text-white hover:bg-primary hover:border-primary hover:text-white transition-all flex items-center justify-center gap-2 group/btn"
                >
                  View Details
                  <ArrowUpRight className="w-4 h-4 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            key={selectedProject.id}
            project={selectedProject} 
            onClose={closeModal} 
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default AllProjects;