import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ReactNode } from 'react';

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

export const itemVariants: Variants = {
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

export const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.1,
      duration: 0.5,
      ease: [0.21, 1, 0.36, 1]
    }
  })
};

type AnimatedWrapperProps = {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  custom?: number;
  animate?: boolean;
};

export const AnimatedContainer = ({ children, className = '', animate = true }: AnimatedWrapperProps) => (
  <motion.div
    className={className}
    variants={containerVariants}
    initial="hidden"
    animate={animate ? "visible" : "hidden"}
  >
    {children}
  </motion.div>
);

export const AnimatedItem = ({ children, className = '', custom }: AnimatedWrapperProps) => (
  <motion.div
    className={className}
    variants={itemVariants}
    custom={custom}
  >
    {children}
  </motion.div>
);

export const FadeInItem = ({ children, className = '', custom }: AnimatedWrapperProps) => (
  <motion.div
    className={className}
    variants={fadeInVariants}
    custom={custom}
  >
    {children}
  </motion.div>
);