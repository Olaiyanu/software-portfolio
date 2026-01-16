import React from 'react';
import { motion } from 'framer-motion';
import { ExperienceItem } from '../types';
import { Briefcase } from 'lucide-react';

const experiences: ExperienceItem[] = [
  {
    id: '1',
    role: 'Software Developer',
    company: 'Jophivon',
    period: '2025 - Present',
    description: [
      'Designed and developed Jophivons website with responsive, interactive, brand-aligned user interfaces.',
      'Created interactive UI components using clean, reusable frontend architecture.',
      'Built scalable SaaS frontend with modern technologies and cross-device responsiveness.'
    ]
  },
  {
    id: '2',
    role: 'Embedded Systems Enginer Intern',
    company: 'Temosan Technologies',
    period: 'October 2025',
    description: [
      'Built temperature and humidity monitoring system using embedded sensors for real-time environmental data.',
      'Developed web dashboard displaying live sensor readings with reliable data updates.',
      'Created mobile application fetching real-time data from web backend for remote monitoring.'
    ]
  },
  {
    id: '3',
    role: 'Frontend Developer',
    company: 'Shopora',
    period: '2025',
    description: [
      'Developed responsive e-commerce interface with product listings and cart functionality.',
      'Built intuitive UI emphasizing usability, performance, and smooth user interactions.',
      'Optimized frontend for cross-device compatibility and fast load times.'
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <div className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Professional Journey</h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto"></div>
        </motion.div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary"></div>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-primary font-medium mt-1">
                    <Briefcase className="w-4 h-4" />
                    <span>{exp.company}</span>
                  </div>
                </div>
                <span className="text-sm text-muted bg-surface px-3 py-1 rounded-full mt-2 sm:mt-0 w-fit border border-white/5">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-muted text-base leading-relaxed flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-white/20 rounded-full mt-2 shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;