'use client';
import dynamic from 'next/dynamic'
import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './components/about'
import Projects from './components/projects'
import Contact from './components/contact'
import Footer from './components/footer'
import { LazyMotion, domAnimation } from "framer-motion";
// Lightweight placeholder while the Skills component loads
const LoadingSkills = () => (
  <div className="w-full h-[360px] flex items-center justify-center bg-gradient-to-br from-white to-slate-50 rounded-2xl border border-white/60 shadow-sm">
    <div className="text-sm text-slate-500 animate-pulse">Loading skills…</div>
  </div>
)

const Skills = dynamic(() => import('./components/skills'), { ssr: false, loading: () => <LoadingSkills /> })



function HomePage() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    // Implement CV download logic here
    console.log('Download CV clicked');
  };

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <LazyMotion features={domAnimation}>
      <Hero scrollToSection={scrollToSection} handleDownloadCV={handleDownloadCV} />
</LazyMotion>

     
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default HomePage
