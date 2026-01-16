import React from 'react';
import { motion } from 'framer-motion';
import { SkillCategory } from '../types';

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Development',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'Framer Motion', 'Vue.js', 'Web Assembly']
  },
  {
    title: 'Backend & Cloud',
    skills: ['Node.js', 'Python', 'Go', 'PostgreSQL', 'Redis', 'Docker', 'AWS (Lambda, EC2)', 'GraphQL']
  },
  {
    title: 'Embedded Systems',
    skills: ['C/C++', 'RTOS', 'Arduino', 'ESP32', 'PCB Design', 'I2C/SPI/UART', 'IoT Protocols (MQTT)']
  },
  {
    title: 'Design & Tools',
    skills: ['Figma', 'Adobe XD', 'Git', 'CI/CD', 'Jest/Testing Library', 'Agile/Scrum', 'Linux']
  }
];

const Skills: React.FC = () => {
  return (
    <div className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Technical Arsenal</h2>
          <p className="text-muted max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I utilize to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx }}
              className="bg-surface p-8 rounded-2xl border border-white/5 hover:border-primary/50 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-6 border-l-4 border-primary pl-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-white/5 text-sm text-muted rounded-full border border-white/5 hover:bg-primary/20 hover:text-white hover:border-primary/30 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;