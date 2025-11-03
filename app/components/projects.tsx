'use client';

import React, { memo, useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { fadeUpVariants, containerVariants, staggerItemVariants } from './motion-variants';
import { FiGithub, FiExternalLink, FiArrowRight, FiPlus, FiMinus } from 'react-icons/fi';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github: string;
  live: string;
  aiHint?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Screendocx',
    description:
      'A smart document platform for creating, editing, and managing files efficiently online. Features include real-time collaboration, intelligent templates, and secure storage.',
    technologies: ['Next.js', 'Tailwind CSS',  'Framer Motion'],
    image: '/Screenshot 2025-11-01 102931.png',
    github: '#',
    live: 'https://www.screendocx.com/',
    aiHint: 'document platform',
  },
  {
    id: 2,
     title: 'Moments by Mithul',
    description:
      'A professional photography portfolio website showcasing stunning photography work with an elegant gallery system, booking functionality, and responsive design for all devices.',
    technologies: ['Next js', 'GSAP', ],
    image: '/momentsbymithul.jpg',
    github: '#',
    live: '#',
    aiHint: 'photography portfolio',
  },
  
 
];

const ProjectSection: React.FC = () => {
  const [showAll, setShowAll] = useState<boolean>(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  // Only show the first 2 projects initially
  const visibleProjects = showAll ? projects : projects.slice(0, 2);

  // Using shared motion variants from ./motion-variants.ts

  return (
    <section id="projects" className="py-16 sm:py-24 bg-white" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Animated Underline */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block">
            <h2 className="text-4xl lg:text-5xl font-black text-slate-800 mb-3">
              My{' '}
              <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <motion.div
              className="h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full"
              initial={{ width: "0%" }}
              animate={isInView ? { width: "100%" } : { width: "0%" }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            />
          </div>
          <motion.p
            className="mt-6 text-slate-600 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            A showcase of my recent work, demonstrating my skills in development and design.
          </motion.p>
        </motion.div>

        {/* Project Cards */}
        <div className="space-y-24 md:space-y-32">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              variants={fadeUpVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="relative"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Decorative Elements for Desktop */}
              <div className="hidden lg:block">
                <motion.div
                  className="absolute -right-8 -top-8 w-16 h-16 bg-purple-100 rounded-full"
                  animate={hoveredProject === project.id ? { scale: 1.2 } : { scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute -left-5 -bottom-5 w-10 h-10 bg-cyan-100 rounded-full"
                  animate={hoveredProject === project.id ? { scale: 1.2 } : { scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                />
              </div>

              {/* Project Card */}
              <motion.div
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl shadow-xl p-4 sm:p-6 lg:p-8"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Project Image */}
                <div 
                  className={`group relative lg:col-span-6 ${
                    index % 2 === 1 ? 'lg:order-2' : ''
                  }`}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl blur-lg opacity-25 group-hover:opacity-60 transition duration-700"></div>
                  <div className="relative rounded-2xl overflow-hidden shadow-lg border bg-white border-slate-200 aspect-video">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      loading="lazy"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      data-ai-hint={project.aiHint}
                      style={{ objectPosition: 'center' }}
                    />
                    
                    {/* Hover Overlay with Technologies */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center transition-opacity duration-300">
                      <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg mb-3 text-white font-medium">
                        Tech Stack
                      </div>
                      <div className="flex flex-wrap justify-center gap-2 max-w-[80%]">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className={`space-y-5 lg:space-y-6 lg:col-span-6 text-center lg:text-left ${
                  index % 2 === 1 ? 'lg:order-1' : ''
                }`}>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-2">
                      {project.title}
                    </h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto lg:mx-0 rounded-full"></div>
                  </div>

                  <p className="text-lg text-slate-600 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 rounded-md text-sm font-medium bg-slate-100 text-purple-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 bg-slate-200 text-slate-800 hover:bg-slate-300 flex items-center justify-center gap-2 group"
                    >
                      <FiGithub className="text-slate-700" />
                      <span>View Code</span>
                      <FiArrowRight className="opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 rounded-lg font-semibold text-white transition-all duration-300 shadow-lg shadow-purple-500/20 flex items-center justify-center gap-2 group"
                    >
                      <FiExternalLink />
                      <span>Live Link</span>
                      <FiArrowRight className="opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                    </a>
                  </div>
                </div>
              </motion.div>
              
              {/* Project Number */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 lg:left-auto lg:right-8 lg:translate-x-0">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-bold text-lg shadow-lg">
                  {index + 1}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More/Less Button */}
        <motion.div 
          className="flex justify-center mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="group px-8 py-4 rounded-xl font-bold text-lg bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center gap-2"
          >
            {showAll ? (
              <>
                <FiMinus className="transition-all duration-300 group-hover:rotate-90" />
                <span>Show Less</span>
              </>
            ) : (
              <>
                <FiPlus className="transition-all duration-300 group-hover:rotate-90" />
                <span>Show More Projects</span>
              </>
            )}
          </button>
        </motion.div>
        
        {/* Bottom Decoration */}
        <div className="mt-24 flex justify-center">
          <motion.div
            className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full"
            initial={{ width: "0%" }}
            animate={isInView ? { width: "10%", opacity: 1 } : { width: "0%", opacity: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>
      </div>
    </section>
  );
};

export default memo(ProjectSection);
