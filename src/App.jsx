import React from 'react';
import Navbar from './components/Navbar';
import HeroContent from './components/HeroContent';
import Terminal from './components/Terminal';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';
export default function App() {
  return (
    <div className="min-h-screen bg-[#070B14] text-white font-mono overflow-hidden selection:bg-[#00E5FF] selection:text-black">
      
      {/* Background ambient glows */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#00E5FF] opacity-5 blur-[150px] rounded-full pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#FF00AA] opacity-5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 py-6 md:px-12 flex flex-col min-h-screen relative z-10">
        
        {/* Navigation */}
        <Navbar />

        {/* Main Hero Content */}
        <main id="home" className="flex-1 flex flex-col lg:flex-row items-center justify-between py-12 gap-12 lg:gap-0 mt-8 mb-24">
          <HeroContent />
          <Terminal />
        </main>

        {/* New Sections */}
        <About />
        <Experience />
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}