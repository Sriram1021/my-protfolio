'use client';

import React, { useRef, useMemo } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  cubicBezier,
  Variants,
} from 'framer-motion';
import { RiUserHeartLine, RiRocketLine } from 'react-icons/ri';
import { AnimatedContainer, AnimatedItem } from './animation';

const AboutPage: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: '-100px 0px' });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -50]);

  const bgCircle1Y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const bgCircle2Y = useTransform(scrollYProgress, [0, 1], [0, -80]);

  // ✅ Corrected fadeInUp variant (using cubicBezier easing)
  const fadeInUp: Variants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 20 },
      visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: i * 0.08,
          duration: 0.45,
          ease: cubicBezier(0.25, 0.1, 0.25, 1),
        },
      }),
    }),
    []
  );

  const gridVariants: Variants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.2 },
      },
    }),
    []
  );

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-b from-white to-blue-50 overflow-hidden font-[Poppins]"
    >
      {/* Background Circles */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ opacity }}>
        <motion.div
          className="absolute top-20 left-1/4 w-40 h-40 rounded-full bg-cyan-100 opacity-20 blur-xl"
          style={{ y: bgCircle1Y }}
        />
        <motion.div
          className="absolute bottom-20 right-1/3 w-64 h-64 rounded-full bg-purple-100 opacity-20 blur-xl"
          style={{ y: bgCircle2Y }}
        />
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="max-w-4xl mx-auto px-4 sm:px-5 relative z-10"
        style={{ opacity, y, scale }}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-14 relative"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div className="inline-block" custom={0} variants={fadeInUp}>
            <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-800 text-xs font-semibold tracking-wider uppercase mb-3 border border-cyan-200/50 shadow-sm">
              About Me
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl lg:text-4xl font-bold mb-4 text-slate-800 relative"
            custom={1}
            variants={fadeInUp}
          >
            The{' '}
            <span className="relative">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
                Developer
              </span>
              <motion.span
                className="absolute -bottom-1 left-0 right-0 h-2.5 bg-cyan-100 rounded-lg z-0 transform -rotate-1"
                initial={{ width: 0 }}
                animate={isInView ? { width: '100%' } : { width: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
              />
            </span>{' '}
            Behind the Code
          </motion.h2>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-5 rounded-full"
            initial={{ width: 0, opacity: 0 }}
            animate={
              isInView
                ? { width: '6rem', opacity: 1 }
                : { width: 0, opacity: 0 }
            }
            transition={{ delay: 0.6, duration: 0.5 }}
          />

          <motion.p
            className="text-base max-w-2xl mx-auto mt-4 leading-relaxed text-slate-700"
            custom={2}
            variants={fadeInUp}
          >
            A self-taught{' '}
            <motion.span
              className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-500"
              animate={
                isInView
                  ? {
                      color: ['#9333ea', '#0891b2', '#9333ea'],
                      transition: { duration: 3, repeat: Infinity },
                    }
                  : {}
              }
            >
              Frontend Developer
            </motion.span>{' '}
            passionate about creating{' '}
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-500">
              intuitive
            </span>
            ,{' '}
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-500">
              dynamic
            </span>
            , and{' '}
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-500">
              user-friendly
            </span>{' '}
            experiences using React and Next.js.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <AnimatedContainer
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto"
          variants={gridVariants}
          animate={isInView}
        >
          {/* Passion Card */}
          <AnimatedItem
            className="p-6 rounded-xl bg-white border border-slate-200 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
            variants={{
              hidden: { y: 50, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: { duration: 0.5 },
              },
            }}
          >
            <motion.div
              className="absolute -right-12 -top-12 w-28 h-28 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full opacity-60"
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ duration: 0.5 }}
            />
            <div className="flex items-start gap-4 mb-4 relative z-10">
              <motion.div
                className="shrink-0 p-2.5 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-sm"
                whileHover={{ scale: 1.05 }}
              >
                <RiUserHeartLine className="w-5 h-5" />
              </motion.div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-1.5">
                  My Passion
                </h3>
                <motion.div
                  className="h-0.5 w-12 bg-gradient-to-r from-purple-300 to-purple-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: '3rem' } : { width: 0 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                />
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-600 relative z-10">
              I'm passionate about blending design and technology to create smooth,
              engaging web experiences. I love exploring React and Next.js to bring
              creative ideas to life — one pixel-perfect component at a time.
            </p>
          </AnimatedItem>

          {/* Projects Card */}
          <AnimatedItem
            className="p-6 rounded-xl bg-white border border-slate-200 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
            variants={{
              hidden: { y: 50, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: { duration: 0.5 },
              },
            }}
          >
            <motion.div
              className="absolute -right-12 -top-12 w-28 h-28 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full opacity-60"
              whileHover={{ scale: 1.2, rotate: 10 }}
            />
            <div className="flex items-start gap-4 mb-4 relative z-10">
              <motion.div
                className="shrink-0 p-2.5 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 text-white shadow-sm"
                whileHover={{ scale: 1.05 }}
              >
                <RiRocketLine className="w-5 h-5" />
              </motion.div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-1.5">
                  My Projects
                </h3>
                <motion.div
                  className="h-0.5 w-12 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-full"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: '3rem' } : { width: 0 }}
                  transition={{ delay: 0.7, duration: 0.4 }}
                />
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-600 relative z-10">
              Each project I build is a new opportunity to learn and improve. My projects
              reflect my growth as a developer — from simple UI experiments to full, dynamic
              web applications.
            </p>
            <motion.div
              className="flex gap-2 mt-5 relative z-10"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ delay: 0.9, duration: 0.4 }}
            >
              <motion.span
                className="inline-block px-2 py-0.5 bg-gradient-to-r from-cyan-50 to-blue-50 border border-blue-100 rounded-md text-xs font-medium text-blue-700"
                whileHover={{ scale: 1.05 }}
              >
                Screen Docx
              </motion.span>
              <motion.span
                className="inline-block px-2 py-0.5 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100 rounded-md text-xs font-medium text-purple-700"
                whileHover={{ scale: 1.05 }}
              >
                Portfolio Site
              </motion.span>
            </motion.div>
          </AnimatedItem>
        </AnimatedContainer>
      </motion.div>
    </section>
  );
};

export default AboutPage;
