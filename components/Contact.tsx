import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="py-24 bg-surface relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-primary/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Let's Build Something Amazing</h2>
            <p className="text-muted text-lg mb-10 leading-relaxed">
              I'm currently available for freelance projects and full-time opportunities. If you have a project that needs some creative engineering, or if you just want to chat about IoT and design, feel free to reach out.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-background border border-white/10 rounded-lg flex items-center justify-center text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted">Email Me</p>
                  <a href="olaleyejohnson05@gmail.com" className="text-white font-medium hover:text-primary transition-colors">
                    johnsonolaleye91@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-background border border-white/10 rounded-lg flex items-center justify-center text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted">Location</p>
                  <p className="text-white font-medium">Akure, Nigeria (Remote Worldwide)</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-white/5 p-8 rounded-2xl shadow-xl space-y-6"
            action="https://formsubmit.co/johnsonolaiyanu@gmail.com"
            method="POST"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm text-muted font-medium">Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-muted font-medium">Email</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm text-muted font-medium">Subject</label>
              <input 
                type="text" 
                name="subject"
                required
                className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                placeholder="Project Inquiry"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm text-muted font-medium">Message</label>
              <textarea 
                rows={4} 
                name="message"
                required
                className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button type="submit" className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:bg-orange-600 transition-all flex items-center justify-center gap-2">
              Send Message
              <Send className="w-4 h-4" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;