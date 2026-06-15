import React from 'react';
import { Download, ArrowRight } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';

export default function HeroContent() {
  return (
    <div className="w-full lg:w-1/2 flex flex-col items-start gap-6">
      
      <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-[#00FF88]/30 bg-[#00FF88]/5 text-xs text-[#00FF88] shadow-[0_0_10px_rgba(0,255,136,0.1)]">
        <span className="w-2 h-2 rounded-full bg-[#00FF88] animate-pulse shadow-[0_0_8px_#00FF88]"></span>
        Available for Work
      </div>

      <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#00E5FF] via-[#00E5FF] to-[#8B5CF6]">
       RONIT MAURYA
      </h1>

      <h2 className="text-xl md:text-2xl text-[#00E5FF] font-semibold tracking-wide flex items-center h-8">
        <span className="mr-2">{">"}</span>
        <Typewriter
          words={['Full Stack Developer', 'AI & ML Enthusiast', 'Problem Solver']}
          loop={true}
          cursor
          cursorStyle='_'
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </h2>

      <div className="relative p-6 rounded-xl bg-[#09111E] border border-transparent [background:linear-gradient(#09111E,#09111E)_padding-box,linear-gradient(45deg,#8B5CF6,#00E5FF)_border-box] shadow-[0_0_20px_rgba(139,92,246,0.2)] mt-4 max-w-xl">
        <p className="text-[#00FF88]/90 leading-relaxed text-sm md:text-base">
          Building modern web applications with React, Node.js, Express, and MongoDB. Continuously learning new technologies and turning ideas into scalable digital solutions. Focused on creating clean, user-friendly, and impactful products.
        </p>
      </div>

      {/* UPDATE: Changed buttons to anchor tags with hrefs */}
      <div className="flex flex-wrap items-center gap-6 mt-8">
        <a href="#projects" className="px-6 py-3 rounded-md border border-[#00FF88] text-[#00FF88] flex items-center gap-2 hover:bg-[#00FF88]/10 hover:shadow-[0_0_20px_rgba(0,255,136,0.4)] transition-all duration-300">
          {">_"} VIEW PROJECTS
        </a>
        
        {/* Make sure to put your actual resume PDF in the 'public' folder */}
        <a href="/resume.pdf" download="RONIT_Resume.pdf" className="flex items-center gap-2 text-white hover:text-[#00E5FF] transition-colors duration-300 uppercase tracking-wider text-sm font-semibold">
          <Download className="w-4 h-4" /> RESUME
        </a>
        
        <a href="#contact" className="flex items-center gap-2 text-white hover:text-[#00E5FF] transition-colors duration-300 uppercase tracking-wider text-sm font-semibold group">
          GET IN TOUCH <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
}