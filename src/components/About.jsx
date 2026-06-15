import React from 'react';
import { Download } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-16 justify-center">
        <div className="h-[1px] w-12 bg-[#00FF88]/50"></div>
        <h2 className="text-xl md:text-2xl text-[#00FF88] font-mono tracking-widest uppercase">
          <span className="text-[#00E5FF] mr-2">02.</span> ~/about-me
        </h2>
        <div className="h-[1px] w-12 bg-[#00FF88]/50"></div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
        
        
        <div className="w-full lg:w-1/2 bg-[#050A10] border border-[#00E5FF]/30 rounded-xl p-6 shadow-[0_0_20px_rgba(0,229,255,0.1)]">
          <div className="mb-6">
            <p className="text-[#00FF88] mb-2">$ cat profile.txt</p>
            <div className="text-sm md:text-base leading-loose ml-4 border-l-2 border-[#00E5FF]/20 pl-4">
              <p><span className="text-[#00E5FF]">Name:</span>      <span className="text-white">Ronit Maurya</span></p>
              <p><span className="text-[#00E5FF]">Role:</span>      <span className="text-[#FF00AA]">MERN Stack Developer</span></p>
              <p><span className="text-[#00E5FF]">Education:</span> <span className="text-white">B.Tech Computer Science</span></p>
              <p><span className="text-[#00E5FF]">College:</span>   <span className="text-[#FFD700]">BUDDHA INSTITUTE OF TECHNOLOGY</span></p>
              <p><span className="text-[#00E5FF]">CGPA:</span>      <span className="text-[#00FF88]">8.3 / 10</span></p>
              <p><span className="text-[#00E5FF]">Batch:</span>     <span className="text-white">2023 - 2027</span></p>
            </div>
          </div>

          <div>
            <p className="text-[#00FF88] mb-2">$ cat quote.txt</p>
            <p className="text-[#8B92A5] italic text-sm ml-4 border-l-2 border-[#00E5FF]/20 pl-4">
              "Science can amuse and fascinate us all, but it is engineering that changes the world."
              <br/>
              <span className="text-[#00E5FF] not-italic mt-2 inline-block">— Isaac Asimov</span>
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <h3 className="text-3xl md:text-5xl font-bold text-[#00E5FF] mb-6 text-center leading-tight">
            Software Developer & <br/>
            Full stack developer<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#00FF88]">AI & ML Enthusiast</span>
            
          </h3>

          <div className="bg-[#09111E]/80 border border-[#00FF88]/30 rounded-xl p-6 text-sm text-[#8B92A5] leading-relaxed max-w-lg shadow-[0_0_15px_rgba(0,255,136,0.1)]">
            Passionate B.Tech student specializing in computer science, Machine Learning, and AI. Proficient in AI prompting, with hands on experience leveraging it in web development to build high-level, impactful, and scalable data centric applications related to Computer Science. Skilled in leading projects, delivering engineering solutions to real-world challenges, and communicating effectively in multilingual teams.
          </div>

          <a 
  href="/resume.pdf" 
  download="Ronit_maurya_Resume.pdf"
  className="mt-8 px-6 py-3 rounded-md border border-[#00E5FF] text-[#00E5FF] flex items-center gap-2 hover:bg-[#00E5FF]/10 hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all duration-300 w-full max-w-md justify-center uppercase tracking-widest text-sm font-bold"
>
  <Download className="w-4 h-4" /> Download Resume
</a>
        </div>

      </div>
    </section>
  );
}