'use client';

import React, { memo, useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import {
  Code2, Palette, Atom, Smartphone, Box,
  FileCode, Layers, Star, ArrowRight
} from 'lucide-react';

// Floating Dots Component
const FloatingDots: React.FC<{ count: number }> = ({ count }) => {
  const [dots, setDots] = useState<Array<{ id: number; top: number; left: number; duration: number; delay: number }>>([]);

  useEffect(() => {
    const newDots = [...Array(count)].map((_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2
    }));
    setDots(newDots);
  }, [count]);

  return (
    <>
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
          style={{ top: `${dot.top}%`, left: `${dot.left}%` }}
          animate={{ y: [0, -20, 0], opacity: [0, 1, 0] }}
          transition={{
            duration: dot.duration,
            repeat: Infinity,
            delay: dot.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </>
  );
};

// Custom SVG Icons (unchanged)
const NextJsIcon = () => (
  <svg viewBox="0 0 180 180" fill="currentColor" className="w-6 h-6">
    <mask id="mask0_408_134" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180"><circle cx="90" cy="90" r="90" fill="black"/></mask><g mask="url(#mask0_408_134)"><circle cx="90" cy="90" r="90" fill="black"/><path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#paint0_linear_408_134)"/><rect x="115" y="54" width="12" height="72" fill="url(#paint1_linear_408_134)"/></g><defs><linearGradient id="paint0_linear_408_134" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse"><stop stopColor="white"/><stop offset="1" stopColor="white" stopOpacity="0"/></linearGradient><linearGradient id="paint1_linear_408_134" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse"><stop stopColor="white"/><stop offset="1" stopColor="white" stopOpacity="0"/></linearGradient></defs>
  </svg>
);
const TailwindIcon = () => (
  <svg viewBox="0 0 54 33" fill="currentColor" className="w-6 h-6">
    <g clipPath="url(#prefix__clip0)"><path fillRule="evenodd" clipRule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" fill="#06B6D4"/></g>
  </svg>
);

// Skill Data (unchanged)
const SKILLS = [
  { id: 'react', name: 'React', category: 'Web', description: 'Building dynamic, component-based user interfaces for scalable web applications.', icon: <Atom className="w-6 h-6" />, position: { top: '50%', left: '50%' }, color: '#61DAFB', bgGradient: 'from-cyan-400/20 to-blue-400/20' },
  { id: 'nextjs', name: 'Next.js', category: 'Web', description: 'Developing performant, server-rendered React applications with advanced features.', icon: <NextJsIcon />, position: { top: '25%', left: '70%' }, color: '#000000', bgGradient: 'from-gray-600/20 to-gray-800/20' },
  { id: 'js', name: 'JavaScript', category: 'Web', description: 'Utilizing modern JavaScript to create interactive and complex client-side logic.', icon: <FileCode className="w-6 h-6" />, position: { top: '75%', left: '30%' }, color: '#F7DF1E', bgGradient: 'from-yellow-400/20 to-amber-400/20' },
  { id: 'html', name: 'HTML5', category: 'Web', description: 'Writing clean, semantic, and accessible markup as the foundation of every project.', icon: <Code2 className="w-6 h-6" />, position: { top: '25%', left: '30%' }, color: '#E34C26', bgGradient: 'from-orange-400/20 to-red-400/20' },
  { id: 'css', name: 'CSS3', category: 'Web', description: 'Crafting detailed styles and complex layouts to bring designs to life.', icon: <Palette className="w-6 h-6" />, position: { top: '75%', left: '70%' }, color: '#1572B6', bgGradient: 'from-blue-400/20 to-indigo-400/20' },
  { id: 'tailwind', name: 'Tailwind CSS', category: 'Styling', description: 'Rapidly building modern, custom designs with a utility-first CSS framework.', icon: <TailwindIcon />, position: { top: '50%', left: '15%' }, color: '#06B6D4', bgGradient: 'from-cyan-400/20 to-teal-400/20' },
  { id: 'bootstrap', name: 'Bootstrap', category: 'Styling', description: 'Leveraging a robust component library for rapid and responsive web development.', icon: <Layers className="w-6 h-6" />, position: { top: '50%', left: '85%' }, color: '#7952B3', bgGradient: 'from-purple-400/20 to-pink-400/20' },
  { id: 'reactnative', name: 'React Native', category: 'Mobile', description: 'Building cross-platform mobile applications from a single codebase.', icon: <Smartphone className="w-6 h-6" />, position: { top: '10%', left: '50%' }, color: '#61DAFB', bgGradient: 'from-cyan-400/20 to-blue-400/20' },
  { id: 'expo', name: 'Expo', category: 'Mobile', description: 'Utilizing the Expo ecosystem for efficient mobile app development.', icon: <Box className="w-6 h-6" />, position: { top: '90%', left: '50%' }, color: '#000020', bgGradient: 'from-slate-600/20 to-slate-800/20' },
];

const SkillsPage = memo(() => {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const transformedMouseX = useTransform(mouseX, (val) => val - 250);
  const transformedMouseY = useTransform(mouseY, (val) => val - 250);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    // SIZE: Reduced vertical padding
    <section id="skills" className="py-16 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 overflow-hidden relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(99, 102, 241, 0.08), transparent 70%)',
              filter: 'blur(60px)',
              x: transformedMouseX,
              y: transformedMouseY,
            }}
          />
          <div className="absolute top-20 -left-20 w-80 h-80 rounded-full bg-gradient-to-br from-blue-200/30 to-cyan-200/30 blur-3xl" />
          <div className="absolute bottom-20 -right-20 w-80 h-80 rounded-full bg-gradient-to-br from-purple-200/30 to-pink-200/30 blur-3xl" />
        </div>

        <motion.div
          // SIZE: Reduced bottom margin
          className="text-center mb-10 relative z-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200/50 shadow-md mb-4"
            whileHover={{ scale: 1.05 }}
          ><Star className="w-3.5 h-3.5 text-purple-600" /><span className="text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-700 uppercase tracking-wide">Technical Skills</span></motion.div>
          {/* SIZE: Reduced heading font size */}
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-slate-800 leading-tight">
            My Skill
            <span className="relative inline-block mx-2">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">Galaxy</span>
              <motion.svg className="absolute -inset-x-4 -inset-y-1 w-[calc(100%+2rem)] h-[calc(100%+0.5rem)]" viewBox="0 0 200 60" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, ease: "easeOut" }}><motion.path d="M 10,30 Q 50,5 100,30 T 190,30" fill="none" stroke="url(#gradient-heading)" strokeWidth="2" strokeLinecap="round"/><defs><linearGradient id="gradient-heading" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#3B82F6" /><stop offset="50%" stopColor="#8B5CF6" /><stop offset="100%" stopColor="#EC4899" /></linearGradient></defs></motion.svg>
            </span>
          </h2>
          {/* SIZE: Reduced paragraph font size */}
          <p className="text-base max-w-2xl mx-auto text-slate-600 leading-relaxed">
            Explore my constellation of skills. Click on any technology to discover more.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          <motion.div
            // SIZE: Reduced height for a more compact galaxy
            className="lg:col-span-2 relative h-[450px] group"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-lg rounded-2xl border border-white/60 shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 via-transparent to-purple-100/20" />
              <FloatingDots count={10} />
            </div>
            
            <div className="relative w-full h-full flex items-center justify-center p-4">
              <svg className="absolute inset-0 w-full h-full">
                {/* SIZE: Reduced orbit radii to bring skills closer */}
                <circle cx="50%" cy="50%" r="110" fill="none" stroke="url(#orbit1)" strokeWidth="1" strokeDasharray="4 8" className="animate-[spin_60s_linear_infinite]" />
                <circle cx="50%" cy="50%" r="180" fill="none" stroke="url(#orbit2)" strokeWidth="1" strokeDasharray="8 8" className="animate-[spin_90s_linear_infinite_reverse]" />
                <defs><linearGradient id="orbit1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" /><stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.2" /></linearGradient><linearGradient id="orbit2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.1" /><stop offset="100%" stopColor="#EC4899" stopOpacity="0.1" /></linearGradient></defs>
              </svg>

              <div className="relative w-full h-full animate-[spin_200s_linear_infinite] will-change-transform">
                {SKILLS.map((skill) => (
                  <div key={skill.id} className="absolute" style={{ top: skill.position.top, left: skill.position.left, transform: 'translate(-50%, -50%)' }}>
                    <div className="animate-[spin_200s_linear_infinite_reverse] will-change-transform">
                      <motion.button
                        // SIZE: Reduced skill button sizes
                        className={`relative group/skill flex flex-col items-center justify-center rounded-xl cursor-pointer ${
                          skill.id === 'react' ? 'w-16 h-16 p-2.5' : 'w-14 h-14 p-2'
                        }`}
                        style={{ background: hoveredSkill === skill.id || selectedSkill.id === skill.id ? `linear-gradient(135deg, ${skill.color}15 0%, ${skill.color}05 100%)` : 'rgba(255,255,255,0.7)', backdropFilter: 'blur(10px)', boxShadow: hoveredSkill === skill.id || selectedSkill.id === skill.id ? `0 6px 20px ${skill.color}30, inset 0 0 0 1.5px ${skill.color}50` : 'inset 0 0 0 1px rgba(255,255,255,0.5)' }}
                        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
                        onHoverStart={() => setHoveredSkill(skill.id)} onHoverEnd={() => setHoveredSkill(null)}
                        onClick={() => setSelectedSkill(skill)}
                      >
                        <div className="relative z-10" style={{ color: skill.color }}>{skill.icon}</div>
                        <span className="text-[10px] font-medium mt-1 text-slate-700">{skill.name}</span>
                        {(hoveredSkill === skill.id || selectedSkill.id === skill.id) && (<motion.div className="absolute inset-0 rounded-xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ background: `radial-gradient(circle at center, ${skill.color}20, transparent 70%)`, filter: 'blur(15px)' }}/>)}
                        {selectedSkill.id === skill.id && (<motion.div className="absolute inset-0 rounded-xl pointer-events-none" style={{ border: `2px solid ${skill.color}` }} animate={{ scale: [1, 1.3], opacity: [0.5, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}/>)}
                      </motion.button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              <motion.div key={selectedSkill.id}
                // SIZE: Reduced height to match galaxy container, reduced padding
                className="sticky top-6 p-5 rounded-2xl bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-xl border border-white/60 shadow-xl overflow-hidden h-[450px]"
                initial={{ opacity: 0, y: 20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -20, scale: 0.95 }} transition={{ duration: 0.4 }}>
                <div className={`absolute inset-0 bg-gradient-to-br ${selectedSkill.bgGradient} opacity-50`} />
                <div className="relative h-full flex flex-col">
                  <motion.div className="mb-4 flex justify-center" initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: "spring", stiffness: 200 }}>
                    {/* SIZE: Reduced icon container and icon size */}
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg" style={{ background: `linear-gradient(135deg, ${selectedSkill.color}20 0%, ${selectedSkill.color}10 100%)`, boxShadow: `0 10px 25px ${selectedSkill.color}20` }}>
                      <div style={{ color: selectedSkill.color }}>{React.cloneElement(selectedSkill.icon, { className: "w-8 h-8" })}</div>
                    </div>
                  </motion.div>
                  <motion.div className="text-center mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                    <motion.span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2 text-white shadow-md" style={{ backgroundColor: selectedSkill.color }} whileHover={{ scale: 1.05 }}>{selectedSkill.category}</motion.span>
                    {/* SIZE: Reduced heading font size */}
                    <h3 className="text-xl font-bold text-slate-800 mb-1.5">{selectedSkill.name}</h3>
                    <motion.div className="w-12 h-0.5 rounded-full mx-auto" style={{ backgroundColor: selectedSkill.color }} initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.3, duration: 0.6 }}/>
                  </motion.div>
                  {/* SIZE: Reduced font size and line height */}
                  <p className="text-slate-600 text-sm leading-relaxed text-center mb-auto">{selectedSkill.description}</p>
                  <div className="mt-4 mb-4">
                    <p className="text-xs font-medium text-slate-500 mb-2 text-center">RELATED TECHNOLOGIES</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {SKILLS.filter(s => s.id !== selectedSkill.id).slice(0, 3).map(skill => (<button key={skill.id} onClick={() => setSelectedSkill(skill)} className="px-3 py-1 rounded-full text-xs border bg-white/50 hover:bg-white transition-colors duration-200" style={{ color: skill.color, borderColor: `${skill.color}30` }}>{skill.name}</button>))}
                    </div>
                  </div>
                  <motion.button className="mt-auto w-full py-2 px-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium shadow-md flex items-center justify-center gap-1.5 group text-sm" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <span>Explore My Projects</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </motion.button>
                  <motion.div className="absolute -top-20 -right-20 w-40 h-40 rounded-full" style={{ background: `radial-gradient(circle, ${selectedSkill.color}15, transparent)`, filter: 'blur(40px)' }} animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }} transition={{ duration: 5, repeat: Infinity }}/>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

       
      </div>
    </section>
  );
});

SkillsPage.displayName = 'SkillsPage';
export default SkillsPage;
