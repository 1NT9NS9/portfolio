import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const SpotlightCursor: React.FC = () => {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const [isHoveringLink, setIsHoveringLink] = useState(false);

  // 1. The main "Dot" cursor - No spring, follows 1:1 for precision
  const dotX = mouseX;
  const dotY = mouseY;

  // 2. The "Aura" spotlight - Very tight spring for responsive feel
  const springConfig = { damping: 20, stiffness: 400, mass: 0.5 };
  const auraX = useSpring(mouseX, springConfig);
  const auraY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      const target = e.target as HTMLElement;
      // Check if hovering over clickable elements to scale the dot
      const isClickable = target.matches('a, button, [role="button"]') || target.closest('a, button, [role="button"]');
      setIsHoveringLink(!!isClickable);
    };

    window.addEventListener('mousemove', moveCursor);
    
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Primary Dot Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          scale: isHoveringLink ? 1.5 : 1,
        }}
        transition={{ scale: { duration: 0.2 } }}
      />

      {/* Organic Aura Spotlight - Smaller Size (300px) */}
      <motion.div
        className="fixed top-0 left-0 w-[300px] h-[300px] pointer-events-none z-0 mix-blend-screen opacity-50"
        style={{
          x: auraX,
          y: auraY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div 
          animate={{
            rotate: 360,
            scale: [1, 1.1, 0.9, 1],
            borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "60% 40% 30% 70% / 60% 30% 70% 40%", "30% 70% 70% 30% / 30% 30% 70% 70%"]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
          className="w-full h-full bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-blue-500/20 blur-[60px]"
        />
      </motion.div>
    </>
  );
};

export default SpotlightCursor;