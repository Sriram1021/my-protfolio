'use client';
import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './components/about'
import Skills from './components/skills'
import Projects from './components/projects'
import Contact from './components/contact'
import Footer from './components/footer'



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
      <Hero scrollToSection={scrollToSection} handleDownloadCV={handleDownloadCV} />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default HomePage
