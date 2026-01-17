import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Palette, Terminal, Globe } from 'lucide-react';

const highlights = [
  {
    icon: <Terminal className="w-6 h-6 text-primary" />,
    title: 'Full Stack Engineering',
    desc: 'Building robust, scalable web applications using modern architectures like Microservices and Serverless.'
  },
  {
    icon: <Palette className="w-6 h-6 text-primary" />,
    title: 'UI/UX Design',
    desc: 'Crafting intuitive, accessible, and pixel-perfect user interfaces that delight users and drive engagement.'
  },
  {
    icon: <Cpu className="w-6 h-6 text-primary" />,
    title: 'Embedded Systems',
    desc: 'Designing efficient firmware and hardware solutions for IoT devices and real-time control systems.'
  },
  {
    icon: <Globe className="w-6 h-6 text-primary" />,
    title: 'System Architecture',
    desc: 'Planning and implementing high-availability systems with a focus on security and performance.'
  }
];

const About: React.FC = () => {
  return (
    <div className="py-24 bg-surface relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6 text-muted text-lg leading-relaxed"
          >
            <p>
              I am Johnson Olaleye, a multidisciplinary engineer bridging software, hardware, and design. Driven by curiosity, I build systems that solve real-world problems.
            </p>
            <p>
              My focus is on high performance web applications and embedded solutions. I believe effective engineering requires understanding users, business goals, and long-term maintainability not just writing code.
            </p>
            <p>
              Beyond development, I actively engage in prototyping IoT solutions, exploring interface design, and contributing to the open-source community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx }}
                className="bg-card p-6 rounded-xl border border-white/5 hover:border-primary/30 transition-colors group"
              >
                <div className="mb-4 bg-background w-12 h-12 flex items-center justify-center rounded-lg group-hover:bg-primary/10 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;