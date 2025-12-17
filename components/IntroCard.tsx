import React from 'react';
import { motion } from 'framer-motion';
import { INTRO_TEXT } from '../constants';
import { Sparkles, ArrowRight, Code } from 'lucide-react';

interface IntroCardProps {
  className?: string;
}

const IntroCard: React.FC<IntroCardProps> = ({ className }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`bg-zinc-900/40 backdrop-blur-md border border-white/5 rounded-3xl p-8 md:px-12 md:py-10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden ${className}`}
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="relative z-10 flex-1 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 text-indigo-300 text-xs font-semibold mb-6 border border-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.15)]">
          <Sparkles size={12} />
          <span>The Future is Here</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
          <span className="block mb-2">{INTRO_TEXT.greeting}</span>
          <span className="block text-zinc-500 font-normal">{INTRO_TEXT.role}</span>
        </h1>
        <p className="text-zinc-400 text-base md:text-lg max-w-2xl leading-relaxed mb-8">
          {INTRO_TEXT.bio}
        </p>

        <div className="flex flex-row gap-3 justify-center md:justify-start">
          <button 
            onClick={() => scrollToSection('projects')}
            className="flex items-center gap-2 px-4 py-2 bg-zinc-800/80 text-zinc-300 text-xs font-medium rounded-full border border-zinc-700 hover:bg-zinc-700 hover:text-white transition-all active:scale-95"
          >
            <span>Projects</span>
          </button>
          
          <button 
            onClick={() => scrollToSection('skills')}
            className="flex items-center gap-2 px-4 py-2 bg-zinc-800/80 text-zinc-300 text-xs font-medium rounded-full border border-zinc-700 hover:bg-zinc-700 hover:text-white transition-all active:scale-95"
          >
            <span>Skills</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default IntroCard;