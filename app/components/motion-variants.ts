import { Variants } from 'framer-motion';

export const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.8,
      ease: [0.21, 1, 0.36, 1]
    }
  }
};

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ 
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.21, 1, 0.36, 1]
    }
  })
};

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.12,
      delayChildren: 0.15
    } 
  }
};

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.21, 1, 0.36, 1]
    }
  }
};