import React from 'react';
import { SOCIAL_LINKS, LETS_TALK_URL } from '../constants';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="relative flex items-center justify-between p-2 pl-6 pr-2 bg-zinc-900/60 backdrop-blur-md border border-white/5 rounded-full shadow-lg ring-1 ring-black/5 overflow-hidden">

          {/* Smooth Liquid Light: Horizontal Streaks, Vertical Dots */}
          <style>{`
            @keyframes tracePerimeter {
              /* --- НИЗ (Движение вправо) --- */
              0% {
                left: 0;
                top: calc(100% - 2px);
                width: 2px;
                height: 0px;
              }
              12.5% {
                /* Середина низа: Растягиваемся в шлейф */
                width: 32px;
                height: 0px;
              }
              25% {
                left: calc(100% - 2px);
                top: calc(100% - 2px);
                width: 2px; /* Сжались в точку в углу */
                height: 0px;
              }

              /* --- ПРАВАЯ СТОРОНА (Движение вверх) --- */
              37.5% {
                /* Середина пути вверх: ОСТАЕМСЯ ТОЧКОЙ (только подсветка) */
                left: calc(100% - -1px);
                width: 1px;
                height: 1px;
              }
              50% {
                left: calc(100% - 2px);
                top: 0;
                width: 2px;
                height: 0px;
              }

              /* --- ВЕРХ (Движение влево) --- */
              62.5% {
                /* Середина верха: Растягиваемся в шлейф */
                width: 32px;
                height: 0px;
              }
              75% {
                left: 0;
                top: 0;
                width: 2px; /* Сжались в точку в углу */
                height: 0px;
              }

              /* --- ЛЕВАЯ СТОРОНА (Движение вниз) --- */
              87.5% {
                /* Середина пути вниз: ОСТАЕМСЯ ТОЧКОЙ (только подсветка) */
                left: calc(0% - 1px);
                width: 1px;
                height: 1px;
              }
              100% {
                left: 0;
                top: calc(100% - 2px);
                width: 2px;
                height: 0px;
              }
            }
          `}</style>

          <div
            className="absolute bg-white shadow-[0_0_15px_3px_rgba(255,255,255,0.9)] rounded-full z-0"
            style={{ animation: 'tracePerimeter 4s linear infinite' }}
          />

          <div className="flex items-center gap-2 relative z-10">
            {/* Animated Dots */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: "easeInOut",
                }}
                className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.5)]"
              />
            ))}

            <motion.span
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 1.2, // Delays after the 3rd dot (0.8s)
                ease: "easeInOut",
              }}
              className="ml-3 font-semibold text-white text-sm hidden sm:block tracking-tight"
            >
              Portfolio
            </motion.span>
          </div>

          <div className="flex items-center gap-1 relative z-10">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-zinc-400 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 ease-in-out group relative"
                aria-label={link.name}
              >
                <link.icon size={18} strokeWidth={2} />
              </a>
            ))}
            <a
              href={LETS_TALK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-5 py-2.5 bg-white text-zinc-950 text-sm font-semibold rounded-full hover:bg-zinc-200 transition-colors shadow-lg shadow-white/5"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;