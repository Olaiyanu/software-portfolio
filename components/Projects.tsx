import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { projects } from '../data';
import ProjectModal from './ProjectModal';

interface ProjectsProps {
  onViewAll?: () => void;
}

const Projects: React.FC<ProjectsProps> = ({ onViewAll }) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const lastActiveElement = useRef<HTMLElement | null>(null);

  // Show only the first 3 projects in the featured section
  const featuredProjects = projects.slice(0, 3);
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
    <div className="py-24 bg-surface" id="projects-container">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Selected Case Studies</h2>
          <p className="text-muted">Engineering challenges, architectural decisions, and measurable impacts.</p>
        </motion.div>

        <div className="grid gap-12 mb-16">
          {featuredProjects.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-background rounded-2xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-500"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                    loading="lazy"
                  />
                </div>

                {/* Content Section */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-primary font-medium tracking-wider text-xs uppercase border border-primary/20 px-3 py-1 rounded-full bg-primary/5">
                      {project.role}
                    </span>
                    <span className="text-muted text-sm">{project.period}</span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted mb-8 line-clamp-3">
                    {project.summary}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.techStack.slice(0, 4).map(t => (
                      <span key={t} className="text-xs text-muted/80 bg-white/5 px-2 py-1 rounded">
                        {t}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="text-xs text-muted/80 bg-white/5 px-2 py-1 rounded">
                        +{project.techStack.length - 4} more
                      </span>
                    )}
                  </div>

                  <button 
                    onClick={() => openModal(project.id)}
                    className="inline-flex items-center gap-2 text-white font-medium hover:text-primary transition-colors group/btn w-fit"
                    aria-label={`Read case study for ${project.title}`}
                  >
                    Read Case Study
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {onViewAll && (
          <div className="flex justify-center">
            <button 
              onClick={onViewAll}
              className="px-8 py-4 bg-transparent border border-white/10 text-white font-semibold rounded-lg hover:bg-white/5 hover:border-primary/50 hover:text-primary transition-all flex items-center gap-2 group"
            >
              View Full Project Archive
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}
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
    </div>
  );
};

export default Projects;