import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background py-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-white font-heading font-bold text-lg">Johnson Olaleye</p>
          <p className="text-muted text-sm mt-1">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        <button 
          onClick={scrollToTop}
          className="p-3 bg-surface border border-white/10 rounded-full hover:bg-primary hover:text-white hover:border-primary transition-all text-muted"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;