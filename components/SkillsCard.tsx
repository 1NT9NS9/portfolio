import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SKILLS_CATEGORIES } from '../constants';
import { 
  Palette, 
  Terminal, 
  Rocket, 
  BookOpen, 
  BrainCircuit, 
  Wrench, 
  Bot, 
  Zap, 
  MonitorPlay, 
  Box,
  Code2
} from 'lucide-react';

interface SkillsCardProps {
  className?: string;
}

const icons = {
  frontend: Palette,
  backend: Terminal,
  production: Rocket,
  knowledge: BookOpen,
  ai_models: BrainCircuit,
  tools_ai: Wrench,
  agentic: Bot,
  automation: Zap,
  ai_soft: MonitorPlay,
  dev_env: Box,
};

const SkillsCard: React.FC<SkillsCardProps> = ({ className }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={`flex flex-col gap-6 ${className}`}>
      {SKILLS_CATEGORIES.map((category, index) => {
        const isHovered = hoveredIndex === index;
        const Icon = icons[category.id as keyof typeof icons] || Code2;

        return (
          <motion.div
            key={category.id}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            initial={{ backgroundColor: 'rgba(24, 24, 27, 0.4)' }}
            animate={{
              backgroundColor: isHovered ? 'rgba(9, 9, 11, 0.8)' : 'rgba(24, 24, 27, 0.4)',
              scale: isHovered ? 1.02 : 1,
            }}
            transition={{ duration: 0.3 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/5 group"
          >
             {/* Gradient Glow Effect */}
             <div className={`absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/5 to-transparent opacity-0 transition-opacity duration-500 ${isHovered ? 'opacity-100' : ''}`} />
             
             {/* Border Gradient */}
             <div className={`absolute inset-0 border border-white/10 rounded-[2rem] transition-colors duration-300 ${isHovered ? 'border-indigo-500/20' : ''}`} />

            <div className="relative z-10 p-6 sm:p-8">
              <div className="flex items-start gap-6 sm:gap-8">
                {/* Icon Container - Modeled after the reference chip icon style */}
                <div className={`
                  relative shrink-0 flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl 
                  bg-zinc-950 border border-white/10 shadow-[0_0_30px_-10px_rgba(0,0,0,0.5)]
                  transition-all duration-500 group-hover:border-indigo-500/30 group-hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.2)]
                `}>
                   <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-50" />
                   <Icon 
                      size={32} 
                      className={`text-zinc-500 transition-colors duration-300 group-hover:text-indigo-400`}
                      strokeWidth={1.5}
                   />
                </div>

                <div className="flex-1 pt-1 min-w-0">
                  <h3 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-indigo-100 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-zinc-500 text-sm sm:text-base leading-relaxed group-hover:text-zinc-400 transition-colors">
                    {category.description}
                  </p>

                  {/* Skills List */}
                  <motion.div
                    initial={false}
                    animate={{ 
                      height: isHovered ? 'auto' : 0,
                      opacity: isHovered ? 1 : 0,
                      marginTop: isHovered ? '1.5rem' : 0
                    }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    className="overflow-hidden"
                  >
                     <div className="flex flex-wrap gap-2.5">
                       {category.skills.map((skill, idx) => (
                         <motion.span
                            key={skill}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
                            transition={{ 
                              duration: 0.3,
                              delay: isHovered ? 0.1 + (idx * 0.03) : 0 
                            }}
                            className="
                              px-3.5 py-1.5 rounded-lg text-sm font-medium tracking-wide
                              bg-zinc-800/80 border border-white/5 text-zinc-300
                              hover:bg-zinc-700/80 hover:text-white hover:border-white/10
                              transition-colors cursor-none
                            "
                         >
                           {skill}
                         </motion.span>
                       ))}
                     </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default SkillsCard;