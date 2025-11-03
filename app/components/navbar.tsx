'use client';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { Github, Linkedin, ExternalLink } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import type { Icon } from 'lucide-react';

// --- Type Definitions ---
interface NavLink {
  id: string;
  name: string;
  href: string;
}

interface SocialLink {
  name: string;
  href: string;
  Icon: Icon;
  isExternal: boolean;
}

// Water Bubbles Animation Component with enhanced visibility
const WaterBubbles = ({ isActive = false, isHovered = false }) => {
  const [bubbles, setBubbles] = useState<Array<{ id: number, x: number, y: number, size: number, delay: number, duration: number }>>([]);
  
  // Generate random bubbles when active or hovered
  useEffect(() => {
    if (isActive || isHovered) {
      // Clear any existing bubbles first
      setBubbles([]);
      
      // Create more bubbles with larger sizes for better visibility
      const newBubbles = Array.from({ length: isActive ? 20 : 15 }, (_, i) => ({
        id: i,
        x: Math.random() * 100, // random x position in %
        y: 80 + Math.random() * 20, // start from bottom
        size: Math.random() * 8 + 6, // random size between 6-14px (increased)
        delay: Math.random() * 2, // random start delay
        duration: Math.random() * 2 + 2 // random animation duration
      }));
      
      setBubbles(newBubbles);
    } else {
      setBubbles([]);
    }
  }, [isActive, isHovered]);
  
  if (!isActive && !isHovered) return null;
  
  return (
    <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
      {/* Water gradient background - more vibrant */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-300/70 to-cyan-200/90"></div>
      
      {/* Animated bubbles - more visible */}
      {bubbles.map(bubble => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full bg-white/90"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
            boxShadow: '0 0 5px rgba(255, 255, 255, 0.8), inset 1px 1px 1px rgba(255, 255, 255, 0.9)',
            border: '1px solid rgba(255, 255, 255, 0.6)'
          }}
          initial={{ y: 0, opacity: 0.3 }}
          animate={{ 
            y: [0, -bubble.y], 
            x: [0, (Math.random() - 0.5) * 20],
            opacity: [0.7, 0] 
          }}
          transition={{ 
            duration: bubble.duration,
            delay: bubble.delay,
            ease: 'easeOut',
            repeat: Infinity,
            repeatDelay: Math.random() * 1.5
          }}
        />
      ))}
      
      {/* Enhanced wave effect at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-blue-300/60 to-transparent"></div>
      
      {/* Additional water surface shimmer effect */}
      <div className="absolute inset-x-0 top-0 h-[30%] bg-gradient-to-b from-white/40 to-transparent"></div>
    </div>
  );
};

// Custom Bubble Hover Effect Component with Water Effect
interface BubbleProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  bubbleSize?: number;
  bubbleColor?: string;
  isActive?: boolean;
}

// --- Enhanced BubbleHover component with water effect ---
const BubbleHover: React.FC<BubbleProps> = ({
  children,
  className = "",
  onClick,
  bubbleSize = 80,
  bubbleColor = "rgba(59, 130, 246, 0.15)",
  isActive = false
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };
  
  const bubbleX = useTransform(mouseX, (val) => val - bubbleSize / 2);
  const bubbleY = useTransform(mouseY, (val) => val - bubbleSize / 2);

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      onClick={onClick}
    >
      {/* Water Bubble Effect on Hover - Same as active */}
      <AnimatePresence>
        {(isHovered || isActive) && (
          <motion.div
            className="absolute inset-0 z-0 rounded-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <WaterBubbles isActive={isActive} isHovered={isHovered} />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Original bubble hover effect */}
      <AnimatePresence>
        {isHovered && !isActive && (
          <motion.div
            className="absolute pointer-events-none rounded-full z-0"
            style={{
              backgroundColor: bubbleColor,
              boxShadow: "inset 0 0 10px rgba(255, 255, 255, 0.5)",
              width: bubbleSize,
              height: bubbleSize,
              x: bubbleX,
              y: bubbleY,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 25,
              mass: 0.5
            }}
          />
        )}
      </AnimatePresence>
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

// --- Customizable Constants ---
const NAV_LINKS: NavLink[] = [
  { id: 'about', name: 'About', href: '#about' },
  { id: 'skills', name: 'Skills', href: '#skills' },
  { id: 'projects', name: 'Projects', href: '#projects' },
  { id: 'contact', name: 'Contact', href: '#contact' },
];

const SOCIAL_LINKS: SocialLink[] = [
  { name: 'GitHub', href: 'https://github.com/Sriram1021', Icon: Github, isExternal: true },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/sriram1021/', Icon: Linkedin, isExternal: true },
  // Email icon removed as requested
];

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isHoveringNav, setIsHoveringNav] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  // Effect for shrinking navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Set initial state on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Effect for active section highlighting using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        // The section is considered "active" when it's in the middle 20% of the screen.
        rootMargin: '-40% 0px -40% 0px',
      }
    );

    const sections = NAV_LINKS.map((link) => document.getElementById(link.id));
    sections.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []); 

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node) && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  // Scroll to section function
  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
      
      const sectionId = href.replace('#', '');
      setActiveSection(sectionId);
    }
  };

  // Scroll to top function
  const handleHomeClick = () => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('home');
  };

  // Animation variants
  const navVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', damping: 20, stiffness: 100, duration: 0.5 }
    }
  };

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0, 
      height: 0,
      transition: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }
    },
    visible: { 
      opacity: 1, 
      height: 'auto',
      transition: { duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }
    }
  };

  const logoTextVariants = {
    initial: { y: 0, opacity: 1 },
    hover: { y: -20, opacity: 0 },
    exit: { y: 20, opacity: 0 }
  };
  
  const logoEmojiVariants = {
    initial: { y: 20, opacity: 0 },
    hover: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 px-4 transition-all duration-300 ${
        isScrolled ? 'pt-2' : 'pt-6'
      }`}
      variants={navVariants}
      initial="initial"
      animate="animate"
      ref={headerRef}
    >
      <div className="mx-auto max-w-7xl">
        <motion.div 
          className="rounded-2xl border border-white/20 transition-all duration-500"
          style={{
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)', // for Safari support
            boxShadow: isScrolled 
              ? '0 10px 30px -10px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)'
              : '0 4px 15px -8px rgba(0, 0, 0, 0.05)',
          }}
          animate={{
            borderRadius: isScrolled ? 16 : 20,
            backgroundColor: `rgba(255, 255, 255, ${isScrolled || isHoveringNav || mobileMenuOpen ? '0.7' : '0.6'})`,
          }}
          onHoverStart={() => setIsHoveringNav(true)}
          onHoverEnd={() => setIsHoveringNav(false)}
        >
          <nav className="relative">
            <div className={`flex justify-between items-center px-5 py-3 ${mobileMenuOpen ? 'border-b border-white/20' : ''}`}>
              {/* Logo */}
              <BubbleHover 
                bubbleSize={100} 
                onClick={handleHomeClick}
                bubbleColor="rgba(59, 130, 246, 0.15)"
              >
                <motion.div
                  className="flex items-center space-x-3 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20 focus-visible:ring-offset-2 rounded-full"
                  aria-label="Scroll to top"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onHoverStart={() => setIsLogoHovered(true)}
                  onHoverEnd={() => setIsLogoHovered(false)}
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl text-white shadow-md bg-black relative overflow-hidden">
                    <motion.span 
                      className="absolute" 
                      animate={isLogoHovered ? "hover" : "initial"}
                      variants={logoTextVariants}
                    >
                      S
                    </motion.span>
                    <motion.span 
                      className="absolute" 
                      variants={logoEmojiVariants}
                      animate={isLogoHovered ? "hover" : "initial"}
                    >
                      🚀
                    </motion.span>
                  </div>
                  <motion.span 
                    className="font-semibold text-black hidden sm:block"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: isScrolled ? 0.7 : 1 }}
                  >
                    Portfolio
                  </motion.span>
                </motion.div>
              </BubbleHover>

              {/* Desktop Navigation */}
              <div className="hidden md:flex flex-grow justify-center">
                <div 
                  className="flex items-center space-x-1 py-1.5 px-1.5 rounded-full border border-white/30 relative"
                  style={{
                    backgroundColor: 'rgba(248, 250, 252, 0.4)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)', 
                  }}
                >
                  {NAV_LINKS.map((item) => (
                    <div key={item.name} className="relative px-0.5">
                      {/* Active Background with Water Effect - NO LONGER NEEDED */}
                      <BubbleHover
                        onClick={() => handleLinkClick(item.href)}
                        className={`px-5 py-2.5 rounded-full capitalize cursor-pointer text-sm font-medium transition-all duration-300 ${
                          activeSection === item.id
                            ? 'text-blue-900 font-semibold z-10'
                            : 'text-black/70 hover:text-blue-900'
                        }`}
                        bubbleSize={90}
                        bubbleColor="rgba(59, 130, 246, 0.2)"
                        isActive={activeSection === item.id}
                      >
                        <span className="relative z-10">{item.name}</span>
                      </BubbleHover>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Icons & Mobile Menu Button */}
              <div className="flex-shrink-0 flex items-center space-x-3">
                <div className="hidden md:flex items-center gap-2">
                  {SOCIAL_LINKS.map((social) => (
                    <BubbleHover
                      key={social.name}
                      className="p-2 rounded-xl border border-white/30 bg-white/50 backdrop-blur-sm relative group"
                      bubbleSize={60}
                      bubbleColor="rgba(59, 130, 246, 0.15)"
                    >
                      <a
                        href={social.href}
                        target={social.isExternal ? "_blank" : "_self"}
                        rel={social.isExternal ? "noopener noreferrer" : ""}
                        aria-label={social.name}
                        className="block"
                      >
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <social.Icon className="w-4 h-4 text-black" />
                        </motion.div>
                        
                        {social.isExternal && (
                          <span className="absolute -top-1 -right-1 text-xs">
                            <ExternalLink className="w-3 h-3 text-black/40" />
                          </span>
                        )}
                        
                        <motion.span
                          className="absolute -bottom-9 left-1/2 -translate-x-1/2 px-2 py-1 bg-black text-white text-xs rounded-md whitespace-nowrap pointer-events-none"
                          initial={{ opacity: 0, y: -5 }}
                          whileHover={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {social.name}
                        </motion.span>
                      </a>
                    </BubbleHover>
                  ))}
                </div>

                <BubbleHover
                  className="md:hidden p-2 rounded-full"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  bubbleSize={60}
                  bubbleColor="rgba(59, 130, 246, 0.15)"
                >
                  <motion.button
                    className="focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
                    whileTap={{ scale: 0.95 }}
                    aria-label="Toggle menu"
                    aria-expanded={mobileMenuOpen}
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={mobileMenuOpen ? 'close' : 'open'}
                        initial={{ opacity: 0, rotate: mobileMenuOpen ? -90 : 90 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0, rotate: mobileMenuOpen ? 90 : -90 }}
                        transition={{ duration: 0.3 }}
                      >
                        {mobileMenuOpen ? (
                          <FiX size={24} className="text-black" />
                        ) : (
                          <FiMenu size={24} className="text-black" />
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </motion.button>
                </BubbleHover>
              </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {mobileMenuOpen && (
                <motion.div
                  variants={mobileMenuVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="md:hidden p-4 rounded-b-2xl"
                >
                  <motion.div 
                    className="flex flex-col items-center gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    {NAV_LINKS.map((item, index) => (
                      <div key={item.name} className="w-full relative">
                        <BubbleHover
                          onClick={() => handleLinkClick(item.href)}
                          className={`w-full px-6 py-3.5 rounded-xl capitalize font-medium transition-all duration-300 ${
                            activeSection === item.id ? 'text-blue-900 font-semibold' : 'text-black hover:text-blue-900'
                          } relative z-10`}
                          bubbleSize={150}
                          bubbleColor="rgba(59, 130, 246, 0.15)"
                          isActive={activeSection === item.id}
                        >
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ 
                              opacity: 1, 
                              y: 0,
                              transition: { delay: 0.1 + index * 0.05 }
                            }}
                            className="flex justify-center"
                          >
                            {item.name}
                          </motion.div>
                        </BubbleHover>
                      </div>
                    ))}
                    
                    <motion.div 
                      className="flex items-center justify-center gap-3 mt-5 pt-5 w-full border-t border-white/20"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0,
                        transition: { delay: 0.3 }
                      }}
                    >
                      {SOCIAL_LINKS.map((social, index) => (
                        <BubbleHover
                          key={social.name}
                          className="p-3 rounded-xl bg-white/60 shadow-sm border border-white/40 relative"
                          bubbleSize={70}
                          bubbleColor="rgba(59, 130, 246, 0.15)"
                        >
                          <motion.a
                            href={social.href}
                            target={social.isExternal ? "_blank" : "_self"}
                            rel={social.isExternal ? "noopener noreferrer" : ""}
                            aria-label={social.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ 
                              opacity: 1, 
                              scale: 1,
                              transition: { delay: 0.35 + index * 0.05 }
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <social.Icon className="w-5 h-5 text-black" />
                            
                            {social.isExternal && (
                              <span className="absolute -top-1 -right-1 text-xs">
                                <ExternalLink className="w-3 h-3 text-black/40" />
                              </span>
                            )}
                          </motion.a>
                        </BubbleHover>
                      ))}
                    </motion.div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </nav>
        </motion.div>
      </div>
    </motion.header>
  );
}

export default Navbar;
