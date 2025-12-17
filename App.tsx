import React from 'react';
import { motion, Variants } from 'framer-motion';
import Header from './components/Header';
import IntroCard from './components/IntroCard';
import ProjectCard from './components/ProjectCard';
import SkillsCard from './components/SkillsCard';
import Background from './components/Background';
import SpotlightCursor from './components/SpotlightCursor';
import { PROJECTS, CONTACT_URL } from './constants';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 70,
      damping: 20,
      duration: 0.8
    },
  },
};

function App() {
  return (
    <div className="relative min-h-screen pb-20 selection:bg-indigo-500/30 selection:text-indigo-200 overflow-x-hidden">
      <Background />
      <SpotlightCursor />
      <Header />

      <main className="max-w-4xl mx-auto px-4 md:px-8 pt-28 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-8"
        >
          {/* Intro Section - Full Width Banner */}
          <motion.div variants={itemVariants} className="w-full">
            <IntroCard className="w-full shadow-2xl shadow-black/20" />
          </motion.div>
          
          <motion.div variants={itemVariants} id="projects" className="scroll-mt-32 py-2">
             <div className="flex items-center gap-3 mb-6 pl-2">
                <div className="h-8 w-1 bg-indigo-500 rounded-full"></div>
                <h2 className="text-2xl font-bold text-white tracking-tight">Projects</h2>
             </div>
             
             <div className="flex flex-col gap-8">
                {PROJECTS.map((project) => (
                  <motion.div key={project.id} variants={itemVariants}>
                     <ProjectCard project={project} className="w-full min-h-[240px]" />
                  </motion.div>
                ))}
             </div>
          </motion.div>

          {/* Skills Section - Below Projects */}
          <motion.div variants={itemVariants} id="skills" className="scroll-mt-32 w-full">
             <div className="flex items-center gap-3 mb-6 pl-2">
                <div className="h-8 w-1 bg-indigo-500 rounded-full"></div>
                <h2 className="text-2xl font-bold text-white tracking-tight">Skills</h2>
             </div>
            <SkillsCard className="w-full" />
          </motion.div>

          {/* Contact Section */}
          <motion.div variants={itemVariants} id="contact" className="w-full mt-8 bg-zinc-900/80 backdrop-blur-md rounded-3xl p-10 md:p-14 border border-white/5 text-center relative overflow-hidden group shadow-2xl">
             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 pointer-events-none"></div>
             
             {/* Hover Glow Effect */}
             <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-700"></div>

             <div className="relative z-10 flex flex-col items-center">
                <span className="w-16 h-16 rounded-2xl bg-white text-black flex items-center justify-center text-3xl font-bold mb-6 shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                  @
                </span>
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                  Let's work together
                </h3>
                <p className="text-zinc-400 max-w-lg mx-auto mb-10 text-lg leading-relaxed">
                  Have a project in mind? I'm always looking for new challenges and interesting collaborations.
                </p>
                <a href={CONTACT_URL} target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 rounded-full bg-white text-zinc-950 font-bold text-lg hover:bg-zinc-200 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                   Get in touch
                </a>
             </div>
          </motion.div>
          
          <footer className="mt-16 text-center text-zinc-600 pb-10 text-sm font-medium">
            <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          </footer>
        </motion.div>
      </main>
    </div>
  );
}

export default App;