'use client';

import React, { memo, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// Water Bubble Effect Component (only for buttons)
interface WaterBubbleProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  bubbleSize?: number;
  bubbleColor?: string;
  intensity?: number;
}

const WaterBubbleHover: React.FC<WaterBubbleProps> = ({ 
  children, 
  className = "", 
  onClick,
  bubbleSize = 120,
  bubbleColor = "rgba(125, 211, 252, 0.4)", // Sky blue water color
  intensity = 1.2
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);
  const [bubbles, setBubbles] = useState<Array<{id: number, x: number, y: number, size: number}>>([]);
  
  // Generate small bubbles on hover
  React.useEffect(() => {
    if (isHovered) {
      const interval = setInterval(() => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const randomX = Math.random() * rect.width;
          const randomSize = Math.random() * 10 + 5; // Bubbles between 5-15px
          
          setBubbles(prev => [
            ...prev, 
            {
              id: Date.now(), 
              x: randomX, 
              y: rect.height, 
              size: randomSize
            }
          ]);
        }
      }, 300);
      
      return () => {
        clearInterval(interval);
        // Clear bubbles when not hovering
        setTimeout(() => {
          setBubbles([]);
        }, 1000);
      };
    }
  }, [isHovered]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      {/* Main water ripple effect */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute pointer-events-none z-0"
            initial={{ 
              width: 0, 
              height: 0,
              x: mousePosition.x,
              y: mousePosition.y,
              opacity: 0,
              borderRadius: '100%'
            }}
            animate={{ 
              width: bubbleSize * intensity, 
              height: bubbleSize,
              x: mousePosition.x - (bubbleSize * intensity) / 2,
              y: mousePosition.y - bubbleSize / 2,
              opacity: 0.9,
              borderRadius: '100%'
            }}
            exit={{ 
              width: 0, 
              height: 0,
              opacity: 0,
            }}
            style={{ 
              backgroundColor: bubbleColor,
              boxShadow: `
                inset 0 0 30px ${bubbleColor.replace('0.4', '0.6')}, 
                inset 0 0 20px rgba(255, 255, 255, 0.5),
                0 0 10px ${bubbleColor.replace('0.4', '0.3')}
              `,
              backdropFilter: 'blur(4px)',
            }}
            transition={{ 
              type: "spring",
              stiffness: 200,
              damping: 20,
              mass: 1
            }}
          />
        )}
      </AnimatePresence>
      
      {/* Small floating bubbles */}
      <AnimatePresence>
        {bubbles.map(bubble => (
          <motion.div
            key={bubble.id}
            className="absolute pointer-events-none rounded-full bg-white/80"
            initial={{ 
              width: bubble.size, 
              height: bubble.size,
              x: bubble.x,
              y: bubble.y,
              opacity: 0.6
            }}
            animate={{ 
              y: -20,
              x: bubble.x + (Math.random() * 20 - 10),
              opacity: 0
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 1 + Math.random(),
              ease: "easeOut"
            }}
            style={{
              boxShadow: 'inset 1px 1px 1px rgba(255, 255, 255, 0.8)',
              border: '0.5px solid rgba(255, 255, 255, 0.3)'
            }}
          />
        ))}
      </AnimatePresence>
      
      {/* Water surface effect (subtle waves) */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 pointer-events-none z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            background: `
              linear-gradient(
                to bottom,
                transparent,
                ${bubbleColor.replace('0.4', '0.1')} 30%,
                ${bubbleColor.replace('0.4', '0.2')} 70%,
                transparent
              )
            `
          }}
        />
      )}
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center">{children}</div>
    </motion.div>
  );
};

// Simple Tech Badge Component
const TechBadge = ({ label }: { label: string }) => (
  <motion.span
    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100"
    whileHover={{ y: -2 }}
    transition={{ duration: 0.2 }}
  >
    {label}
  </motion.span>
);

interface HomePageProps {
  scrollToSection: (section: string) => void;
  handleDownloadCV: () => void;
}

const HomePage: React.FC<HomePageProps> = memo(({ scrollToSection, handleDownloadCV }) => {
  return (
    <motion.section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-blue-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <motion.div
            className="text-center lg:text-left space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center px-3 py-1.5 bg-blue-100/50 text-blue-700 rounded-full text-sm font-medium mb-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Open to Work
            </motion.div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Hi, I'm <span className="text-blue-600">Sriram</span>
              <br />
              <span className="text-gray-700">Frontend Developer</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
              A passionate fresher frontend developer specializing in building 
              clean, responsive websites and applications with modern technologies.
            </p>
            
            <motion.div
              className="flex flex-wrap gap-2 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <TechBadge label="HTML5" />
              <TechBadge label="CSS3" />
              <TechBadge label="JavaScript" />
              <TechBadge label="React" />
              <TechBadge label="Next.js" />
              <TechBadge label="Tailwind CSS" />
            </motion.div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              {/* Explore My Work button with water bubble effect */}
              <WaterBubbleHover
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3 rounded-lg font-medium text-base bg-blue-600 text-white shadow-md"
                bubbleSize={150}
                bubbleColor="rgba(56, 189, 248, 0.4)"
                intensity={1.5}
              >
                <span className="flex items-center gap-2">
                  View My Projects
                  <ArrowRight className="h-4 w-4" />
                </span>
              </WaterBubbleHover>
              
              {/* View CV button */}
<motion.a
  href="/Sriram Resume 4.pdf" // make sure your PDF is inside /public folder
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-3 rounded-lg font-medium text-base bg-white text-gray-700 border border-gray-300 shadow-sm hover:bg-gray-50 transition-colors text-center inline-block"
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.97 }}
>
  View CV
</motion.a>

            </div>
          </motion.div>
          
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* Simplified image presentation without bubbles */}
            <div className="relative">
              {/* Simple gradient background */}
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 blur-sm opacity-20"></div>
              
              {/* Image container */}
              <motion.div 
                className="relative rounded-2xl overflow-hidden border-2 border-white bg-white shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src="/1762146670903.jpg"
                  alt="Sriram - Frontend Developer"
                  width={380}
                  height={380}
                  className="w-80 h-80 object-cover"
                  priority
                />
                
                {/* Simple overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent py-3 px-4">
                  <p className="text-white text-sm font-medium">
                    Frontend Developer
                  </p>
                </div>
              </motion.div>
              
              {/* Simple decorative elements */}
              <div className="absolute -z-10 -bottom-6 -right-6 w-24 h-24 rounded-full bg-blue-100 blur-xl opacity-70"></div>
              <div className="absolute -z-10 -top-6 -left-6 w-20 h-20 rounded-full bg-purple-100 blur-xl opacity-70"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
});

HomePage.displayName = 'HomePage';
export default HomePage;
