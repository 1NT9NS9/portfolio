import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Background: React.FC = () => {
  const [stars, setStars] = useState<Array<{id: number, top: number, left: number, size: number, duration: number, delay: number}>>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Generate random stars on client-side
    const newStars = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2
    }));
    setStars(newStars);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let waves: Array<{ x: number, y: number, radius: number, alpha: number }> = [];
    
    // Configuration
    const GRID_SPACING = 30;
    const DOT_BASE_SIZE = 1;
    const DOT_ACTIVE_SIZE = 3;
    const WAVE_SPEED = 6;
    const WAVE_WIDTH = 80; // The width of the "ring" of activation

    const resize = () => {
      // Handle high DPI displays
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };

    const draw = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width / (window.devicePixelRatio || 1), canvas.height / (window.devicePixelRatio || 1));
      
      // Update waves
      // Filter out faded waves
      waves = waves.filter(w => w.alpha > 0.01);
      
      waves.forEach(w => {
        w.radius += WAVE_SPEED;
        w.alpha *= 0.98; // Decay
      });

      // Draw Grid
      const width = window.innerWidth;
      const height = window.innerHeight;
      const cols = Math.ceil(width / GRID_SPACING);
      const rows = Math.ceil(height / GRID_SPACING);

      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const x = i * GRID_SPACING;
          const y = j * GRID_SPACING;
          
          let alpha = 0.15; // Base opacity
          let size = DOT_BASE_SIZE;
          let active = false;

          // Check distance to all waves
          waves.forEach(wave => {
             const dist = Math.hypot(x - wave.x, y - wave.y);
             const distFromWaveEdge = Math.abs(dist - wave.radius);
             
             // If the dot is within the wave's "band"
             if (distFromWaveEdge < WAVE_WIDTH) {
                const intensity = 1 - (distFromWaveEdge / WAVE_WIDTH); // 0 to 1 based on center of wave ring
                
                // Boost alpha and size based on intensity and wave's current alpha
                const boost = intensity * wave.alpha;
                alpha = Math.max(alpha, 0.15 + (boost * 0.85)); // Up to 1.0
                size = Math.max(size, DOT_BASE_SIZE + (boost * (DOT_ACTIVE_SIZE - DOT_BASE_SIZE)));
                
                if (boost > 0.1) active = true;
             }
          });

          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          
          if (active) {
            ctx.fillStyle = `rgba(165, 180, 252, ${alpha})`; // Indigo-300 tint when active
          } else {
            ctx.fillStyle = `rgba(161, 161, 170, ${alpha})`; // Zinc-400
          }
          
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    const handleMouseDown = (e: MouseEvent) => {
      waves.push({
        x: e.clientX,
        y: e.clientY,
        radius: 0,
        alpha: 1.0
      });
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousedown', handleMouseDown);
    
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousedown', handleMouseDown);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#050508]">
      {/* 1. Deep Space Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/20 via-zinc-950/80 to-black" />

      {/* 2. Animated Vibrant Orbs */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 60, 0],
            y: [0, 40, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-indigo-600/20 blur-[120px] mix-blend-screen"
        />
        
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 60, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-[5%] right-[-15%] w-[50vw] h-[50vw] rounded-full bg-rose-500/10 blur-[120px] mix-blend-screen"
        />

        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            x: [0, 50, 0],
            y: [0, -50, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-[-20%] left-[10%] w-[50vw] h-[50vw] rounded-full bg-teal-600/10 blur-[100px] mix-blend-screen"
        />

        <motion.div
           animate={{
            scale: [1, 1.2, 1],
            x: [0, -30, 0],
            y: [0, -40, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[60vw] rounded-full bg-violet-600/10 blur-[120px] mix-blend-screen"
        />
      </div>

      {/* 3. Star Field */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            initial={{ opacity: 0.1, scale: 0.5 }}
            animate={{ 
              opacity: [0.1, 0.8, 0.1], 
              scale: [0.5, 1.2, 0.5] 
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut"
            }}
            className="absolute rounded-full bg-white shadow-[0_0_2px_rgba(255,255,255,0.8)]"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
          />
        ))}
      </div>

      {/* 4. Canvas Dot Grid Layer - Replaces the static radial-gradient */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 z-10 opacity-80 mix-blend-screen"
      />
      
      {/* 5. Vignette Mask for the grid */}
      <div 
         className="absolute inset-0 pointer-events-none z-20"
         style={{
           background: 'radial-gradient(circle at 50% 50%, transparent 40%, #050508 100%)'
         }}
      />
      
      {/* 6. Subtle Grain Texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none z-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default Background;