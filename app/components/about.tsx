// 'use client';

// import React, { memo } from 'react';
// import { FaCode, FaLaptopCode } from 'react-icons/fa';
// import { motion } from 'framer-motion';
// import { RiUserHeartLine, RiRocketLine } from 'react-icons/ri';

// const AboutPage = memo(() => {
//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { 
//       opacity: 1,
//       transition: { 
//         staggerChildren: 0.15,
//         delayChildren: 0.2
//       } 
//     }
//   };
  
//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: { 
//       y: 0, 
//       opacity: 1,
//       transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
//     }
//   };
  
//   return (
//     <section id="about" className="py-24 bg-gradient-to-b from-white to-blue-50">
//       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div 
//           className="text-center mb-16 relative"
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           {/* Background decorative elements */}
//           <div className="absolute -top-10 left-1/4 w-16 h-16 rounded-full bg-purple-100 filter blur-xl opacity-70"></div>
//           <div className="absolute -top-5 right-1/3 w-24 h-24 rounded-full bg-cyan-100 filter blur-xl opacity-70"></div>
          
//           <div className="inline-block">
//             <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-800 text-xs font-semibold tracking-wider uppercase mb-4 border border-cyan-200/50 shadow-sm">
//               About Me
//             </span>
//           </div>
          
//           <h2 className="text-4xl lg:text-5xl font-black mb-6 text-slate-800 relative">
//             The <span className="relative">
//               <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">Developer</span>
//               <span className="absolute -bottom-1.5 left-0 right-0 h-3 bg-cyan-100 rounded-lg -z-0 transform -rotate-1"></span>
//             </span> Behind the Code
//           </h2>
          
//           <div className="w-32 h-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-8 rounded-full shadow-sm"></div>
          
//           <p className="text-lg max-w-3xl mx-auto mt-6 leading-relaxed text-slate-700">
//             A self-taught{' '}
//             <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-500">
//               Frontend Developer
//             </span>{' '}
//             with a love for creating{' '}
//             <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-500">
//               intuitive
//             </span>
//             ,{' '}
//             <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-500">
//               dynamic
//             </span>
//             , and{' '}
//             <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-500">
//               user-friendly
//             </span>{' '}
//             web experiences using React and Next.js.
//           </p>
//         </motion.div>

//         <motion.div 
//           className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           {/* Card 1 - Profile */}
//           <motion.div 
//             className="p-8 rounded-2xl bg-white border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-500 relative overflow-hidden group"
//             variants={itemVariants}
//           >
//             <div className="absolute -right-16 -top-16 w-40 h-40 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full opacity-60 group-hover:scale-150 transition-transform duration-700"></div>
            
//             <div className="flex items-start gap-5 mb-5 relative z-10">
//               <div className="flex-shrink-0 p-3.5 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-md">
//                 <RiUserHeartLine className="w-6 h-6" />
//               </div>
//               <div>
//                 <h3 className="text-2xl font-bold text-slate-800 mb-2">
//                   My Passion
//                 </h3>
//                 <div className="h-1 w-16 bg-gradient-to-r from-purple-300 to-purple-400 rounded-full"></div>
//               </div>
//             </div>
            
//             <p className="leading-relaxed text-slate-600 relative z-10">
//               As a fresher in web development, I've taught myself modern frontend technologies through 
//               practice and dedication. I'm passionate about creating clean, efficient code and designing 
//               interfaces that users love to interact with.
//             </p>
            
//             <div className="mt-8 flex items-center text-purple-600 font-medium relative z-10 group">
//               <FaCode className="mr-2 group-hover:animate-pulse" />
//               <span>Self-taught developer</span>
//             </div>
//           </motion.div>
          
//           {/* Card 2 - Projects */}
//           <motion.div 
//             className="p-8 rounded-2xl bg-white border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-500 relative overflow-hidden group"
//             variants={itemVariants}
//           >
//             <div className="absolute -right-16 -top-16 w-40 h-40 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full opacity-60 group-hover:scale-150 transition-transform duration-700"></div>
            
//             <div className="flex items-start gap-5 mb-5 relative z-10">
//               <div className="flex-shrink-0 p-3.5 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 text-white shadow-md">
//                 <RiRocketLine className="w-6 h-6" />
//               </div>
//               <div>
//                 <h3 className="text-2xl font-bold text-slate-800 mb-2">
//                   My Projects
//                 </h3>
//                 <div className="h-1 w-16 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-full"></div>
//               </div>
//             </div>
            
//             <p className="leading-relaxed text-slate-600 relative z-10">
//               I've completed two projects that showcase my abilities with modern web technologies. 
//               These projects have helped me develop practical skills in responsive design, component 
//               architecture, and creating seamless user experiences.
//             </p>
            
//             <div className="flex gap-3 mt-8 relative z-10">
//               <span className="inline-block px-3 py-1 bg-gradient-to-r from-cyan-50 to-blue-50 border border-blue-100 rounded-lg text-xs font-medium text-blue-700">
//                 E-commerce Website
//               </span>
//               <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100 rounded-lg text-xs font-medium text-purple-700">
//                 Portfolio Site
//               </span>
//             </div>
//           </motion.div>
          
//           {/* Additional Summary */}
          
//         </motion.div>
//       </div>
//     </section>
//   );
// });

// AboutPage.displayName = 'AboutPage';
// export default AboutPage;




// without waves



// 'use client';

// import React, { memo } from 'react';
// import { FaCode, FaLaptopCode } from 'react-icons/fa';
// import { motion } from 'framer-motion';
// import { RiUserHeartLine, RiRocketLine } from 'react-icons/ri';

// const AboutPage = memo(() => {
//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { 
//       opacity: 1,
//       transition: { 
//         staggerChildren: 0.12,
//         delayChildren: 0.15
//       } 
//     }
//   };
  
//   const itemVariants = {
//     hidden: { y: 15, opacity: 0 },
//     visible: { 
//       y: 0, 
//       opacity: 1,
//       transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
//     }
//   };
  
//   return (
//     <section id="about" className="py-16 bg-gradient-to-b from-white to-blue-50">
      
//       <div className="max-w-4xl mx-auto px-4 sm:px-5">
//         <motion.div 
//           className="text-center mb-10 relative"
//           initial={{ opacity: 0, y: -15 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           {/* Background decorative elements - smaller size */}
//           <div className="absolute -top-8 left-1/4 w-12 h-12 rounded-full bg-purple-100 filter blur-lg opacity-60"></div>
//           <div className="absolute -top-4 right-1/3 w-16 h-16 rounded-full bg-cyan-100 filter blur-lg opacity-60"></div>
          
//           <div className="inline-block">
//             <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-800 text-xs font-semibold tracking-wider uppercase mb-3 border border-cyan-200/50 shadow-sm">
//               About Me
//             </span>
//           </div>
          
//           <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-800 relative">
//             The <span className="relative">
//               <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">Developer</span>
//               <span className="absolute -bottom-1 left-0 right-0 h-2.5 bg-cyan-100 rounded-lg -z-0 transform -rotate-1"></span>
//             </span> Behind the Code
//           </h2>
          
//           <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-5 rounded-full"></div>
          
//           <p className="text-base max-w-2xl mx-auto mt-4 leading-relaxed text-slate-700">
//             A self-taught{' '}
//             <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-500">
//               Frontend Developer
//             </span>{' '}
//             with a love for creating{' '}
//             <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-500">
//               intuitive
//             </span>
//             ,{' '}
//             <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-500">
//               dynamic
//             </span>
//             , and{' '}
//             <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-500">
//               user-friendly
//             </span>{' '}
//             web experiences using React and Next.js.
//           </p>
//         </motion.div>

//         <motion.div 
//           className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           {/* Card 1 - Profile */}
//           <motion.div 
//             className="p-6 rounded-xl bg-white border border-slate-200 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
//             variants={itemVariants}
//           >
//             <div className="absolute -right-12 -top-12 w-28 h-28 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full opacity-60 group-hover:scale-125 transition-transform duration-500"></div>
            
//             <div className="flex items-start gap-4 mb-4 relative z-10">
//               <div className="flex-shrink-0 p-2.5 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-sm">
//                 <RiUserHeartLine className="w-5 h-5" />
//               </div>
//               <div>
//                 <h3 className="text-xl font-bold text-slate-800 mb-1.5">
//                   My Passion
//                 </h3>
//                 <div className="h-0.5 w-12 bg-gradient-to-r from-purple-300 to-purple-400 rounded-full"></div>
//               </div>
//             </div>
            
//             <p className="text-sm leading-relaxed text-slate-600 relative z-10">
//               As a fresher in web development, I've taught myself modern frontend technologies through 
//               practice and dedication. I'm passionate about creating clean, efficient code and designing 
//               interfaces that users love to interact with.
//             </p>
            
//             <div className="mt-5 flex items-center text-purple-600 font-medium text-sm relative z-10 group">
//               <FaCode className="mr-2 group-hover:animate-pulse" />
//               <span>Self-taught developer</span>
//             </div>
//           </motion.div>
          
//           {/* Card 2 - Projects */}
//           <motion.div 
//             className="p-6 rounded-xl bg-white border border-slate-200 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
//             variants={itemVariants}
//           >
//             <div className="absolute -right-12 -top-12 w-28 h-28 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full opacity-60 group-hover:scale-125 transition-transform duration-500"></div>
            
//             <div className="flex items-start gap-4 mb-4 relative z-10">
//               <div className="flex-shrink-0 p-2.5 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 text-white shadow-sm">
//                 <RiRocketLine className="w-5 h-5" />
//               </div>
//               <div>
//                 <h3 className="text-xl font-bold text-slate-800 mb-1.5">
//                   My Projects
//                 </h3>
//                 <div className="h-0.5 w-12 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-full"></div>
//               </div>
//             </div>
            
//             <p className="text-sm leading-relaxed text-slate-600 relative z-10">
//               I've completed two projects that showcase my abilities with modern web technologies. 
//               These projects have helped me develop practical skills in responsive design, component 
//               architecture, and creating seamless user experiences.
//             </p>
            
//             <div className="flex gap-2 mt-5 relative z-10">
//               <span className="inline-block px-2 py-0.5 bg-gradient-to-r from-cyan-50 to-blue-50 border border-blue-100 rounded-md text-xs font-medium text-blue-700">
//                 E-commerce Website
//               </span>
//               <span className="inline-block px-2 py-0.5 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100 rounded-md text-xs font-medium text-purple-700">
//                 Portfolio Site
//               </span>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// });

// AboutPage.displayName = 'AboutPage';
// export default AboutPage;







'use client';

import React, { memo } from 'react';
import { FaCode, FaLaptopCode } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { RiUserHeartLine, RiRocketLine } from 'react-icons/ri';

const AboutPage = memo(() => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.12,
        delayChildren: 0.15
      } 
    }
  };
  
  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
    }
  };
  
  return (
    <section id="about" className="relative py-16 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      {/* Top Wave */}
      <div className="absolute inset-x-0 top-0 h-16 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            fill="url(#waveGradient1)"
            opacity="0.5"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="url(#waveGradient2)"
          />
          <defs>
            <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#e0f2fe', stopOpacity: 0.4 }} />
              <stop offset="100%" style={{ stopColor: '#ddd6fe', stopOpacity: 0.4 }} />
            </linearGradient>
            <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#bae6fd', stopOpacity: 0.6 }} />
              <stop offset="100%" style={{ stopColor: '#c4b5fd', stopOpacity: 0.6 }} />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-5 relative z-10">
        <motion.div 
          className="text-center mb-10 relative"
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Background decorative elements - smaller size */}
          <div className="absolute -top-8 left-1/4 w-12 h-12 rounded-full bg-purple-100 filter blur-lg opacity-60"></div>
          <div className="absolute -top-4 right-1/3 w-16 h-16 rounded-full bg-cyan-100 filter blur-lg opacity-60"></div>
          
          <div className="inline-block">
            <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-800 text-xs font-semibold tracking-wider uppercase mb-3 border border-cyan-200/50 shadow-sm">
              About Me
            </span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-800 relative">
            The <span className="relative">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">Developer</span>
              <span className="absolute -bottom-1 left-0 right-0 h-2.5 bg-cyan-100 rounded-lg -z-0 transform -rotate-1"></span>
            </span> Behind the Code
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-5 rounded-full"></div>
          
          <p className="text-base max-w-2xl mx-auto mt-4 leading-relaxed text-slate-700">
            A self-taught{' '}
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-500">
              Frontend Developer
            </span>{' '}
            with a love for creating{' '}
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
            web experiences using React and Next.js.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Card 1 - Profile */}
          <motion.div 
            className="p-6 rounded-xl bg-white border border-slate-200 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
            variants={itemVariants}
          >
            <div className="absolute -right-12 -top-12 w-28 h-28 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full opacity-60 group-hover:scale-125 transition-transform duration-500"></div>
            
            <div className="flex items-start gap-4 mb-4 relative z-10">
              <div className="flex-shrink-0 p-2.5 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-sm">
                <RiUserHeartLine className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-1.5">
                  My Passion
                </h3>
                <div className="h-0.5 w-12 bg-gradient-to-r from-purple-300 to-purple-400 rounded-full"></div>
              </div>
            </div>
            
            <p className="text-sm leading-relaxed text-slate-600 relative z-10">
              As a fresher in web development, I've taught myself modern frontend technologies through 
              practice and dedication. I'm passionate about creating clean, efficient code and designing 
              interfaces that users love to interact with.
            </p>
            
            {/* <div className="mt-5 flex items-center text-purple-600 font-medium text-sm relative z-10 group">
              <FaCode className="mr-2 group-hover:animate-pulse" />
              <span>Self-taught developer</span>
            </div> */}
          </motion.div>
          
          {/* Card 2 - Projects */}
          <motion.div 
            className="p-6 rounded-xl bg-white border border-slate-200 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
            variants={itemVariants}
          >
            <div className="absolute -right-12 -top-12 w-28 h-28 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full opacity-60 group-hover:scale-125 transition-transform duration-500"></div>
            
            <div className="flex items-start gap-4 mb-4 relative z-10">
              <div className="flex-shrink-0 p-2.5 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 text-white shadow-sm">
                <RiRocketLine className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-1.5">
                  My Projects
                </h3>
                <div className="h-0.5 w-12 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-full"></div>
              </div>
            </div>
            
            <p className="text-sm leading-relaxed text-slate-600 relative z-10">
              I've completed two projects that showcase my abilities with modern web technologies. 
              These projects have helped me develop practical skills in responsive design, component 
              architecture, and creating seamless user experiences.
            </p>
            
            <div className="flex gap-2 mt-5 relative z-10">
              <span className="inline-block px-2 py-0.5 bg-gradient-to-r from-cyan-50 to-blue-50 border border-blue-100 rounded-md text-xs font-medium text-blue-700">
                Screen Docx
              </span>
              <span className="inline-block px-2 py-0.5 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100 rounded-md text-xs font-medium text-purple-700">
                Portfolio Site
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Wave */}
      {/* <div className="absolute inset-x-0 bottom-0 h-16 overflow-hidden">
        <svg
          className="absolute top-0 w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="url(#waveGradient3)"
            opacity="0.5"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            fill="url(#waveGradient4)"
          />
          <defs>
            <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#e0f2fe', stopOpacity: 0.4 }} />
              <stop offset="100%" style={{ stopColor: '#ddd6fe', stopOpacity: 0.4 }} />
            </linearGradient>
            <linearGradient id="waveGradient4" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#bae6fd', stopOpacity: 0.6 }} />
              <stop offset="100%" style={{ stopColor: '#c4b5fd', stopOpacity: 0.6 }} />
            </linearGradient>
          </defs>
        </svg>
      </div> */}
    </section>
  );
});

AboutPage.displayName = 'AboutPage';
export default AboutPage;
