import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offsetTop = contactSection.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const projectSection = document.getElementById('projects');
    if (projectSection) {
      const offsetTop = projectSection.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-primary font-medium mb-4 tracking-wide text-sm uppercase">
            Hello, I am
          </h2>
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white leading-tight mb-6">
            Johnson <br />
            <span className="text-muted/50">Olaleye</span>
          </h1>
          
          <div className="space-y-2 mb-8 text-lg md:text-xl text-muted font-light">
            <p className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              Software Developer
            </p>
            <p className="flex items-center gap-2">
              <span className="w-2 h-2 bg-gray-600 rounded-full"></span>
              UI/UX Designer
            </p>
            <p className="flex items-center gap-2">
              <span className="w-2 h-2 bg-gray-600 rounded-full"></span>
              Embedded Systems Engineer
            </p>
          </div>

          <p className="text-muted max-w-lg mb-10 leading-relaxed">
            I architect scalable digital solutions and embedded systems with a focus on human-centric design, performance optimization, and reliable engineering.
          </p>

          <div className="flex flex-wrap gap-4">
            <button 
              onClick={scrollToProjects}
              className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-orange-600 transition-all flex items-center gap-2 group"
            >
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={scrollToContact}
              className="px-8 py-4 bg-transparent border border-white/10 text-white font-semibold rounded-lg hover:bg-white/5 transition-all"
            >
              Contact Me
            </button>
          </div>

          <div className="mt-12 flex items-center gap-6 text-muted">
            <a href="https://github.com/Olaiyanu" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a
  href="https://www.linkedin.com/in/iyanu-olaleye-b82907394"
  target="_blank"
  rel="noreferrer"
  className="hover:text-primary transition-colors"
>
  <Linkedin className="w-6 h-6" />
</a>

            <a href="https://x.com/johnsonolaleye_?t=rYVY6K8MvlUX6r2bL6vmkQ&s=09" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block"
        >
            <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
                <div className="absolute inset-4 border border-white/5 rounded-full"></div>
                <img 
                    src="/profile.jpg" 
                    alt="Johnson Olaleye" 
                    className="absolute inset-8 w-[calc(100%-4rem)] h-[calc(100%-4rem)] object-cover rounded-full shadow-2xl filter brightness-90 contrast-125"
                    loading="lazy"
                />
                
                {/* Floating Badge */}
                <div className="absolute top-10 -right-4 bg-card border border-white/10 p-4 rounded-xl shadow-xl backdrop-blur-md">
                    <p className="text-xs text-muted mb-1">Experience</p>
                    <p className="text-xl font-bold text-white">3+ Years</p>
                </div>
            </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;