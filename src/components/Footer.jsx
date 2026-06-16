import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-[#050A10] pt-16 pb-8 mt-24 relative z-10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        
        {/* Top Section: 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Column 1: Brand Info */}
          <div className="flex flex-col gap-4">
            <div className="text-2xl font-bold tracking-wider mb-2">
              <span className="text-[#00E5FF]">{"<"}</span>
              <span className="text-[#00E5FF]">RONIT</span>
              <span className="text-[#00FF88]">.MAURYA</span>
              <span className="text-[#00FF88]">{" />"}</span>
            </div>
            <p className="text-[#8B92A5] text-sm leading-relaxed max-w-xs font-mono">
              Software Developer / Computer Science Engineer
              <br className="mb-2" />
              BUDDHA INSTITUTE OF TECHNOLOGY
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold tracking-widest text-lg mb-2">Quick Links</h3>
            <div className="flex flex-col gap-3">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <a 
                  key={link} 
                  href={`#${link.toLowerCase()}`} 
                  className="text-[#8B92A5] hover:text-[#00FF88] transition-colors text-sm w-max font-mono flex items-center gap-2 group"
                >
                  <span className="text-[#00E5FF] opacity-0 group-hover:opacity-100 transition-opacity">{">"}</span>
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Connect */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold tracking-widest text-lg mb-2">Connect</h3>
            <div className="flex gap-4">
              <a href="https://github.com/Ronitmaurya53" className="p-3 rounded-md bg-[#09111E] border border-white/5 text-gray-400 hover:text-[#00FF88] hover:border-[#00FF88]/50 hover:shadow-[0_0_15px_rgba(0,255,136,0.2)] transition-all duration-300">
                <FiGithub className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/ronit-maurya-12b75727b
" className="p-3 rounded-md bg-[#09111E] border border-white/5 text-gray-400 hover:text-[#00E5FF] hover:border-[#00E5FF]/50 hover:shadow-[0_0_15px_rgba(0,229,255,0.2)] transition-all duration-300">
                <FiLinkedin className="w-5 h-5" />
              </a>
              <a href="mailto:ronitmaurya993020@gmail.com" className="p-3 rounded-md bg-[#09111E] border border-white/5 text-gray-400 hover:text-[#FF00AA] hover:border-[#FF00AA]/50 hover:shadow-[0_0_15px_rgba(255,0,170,0.2)] transition-all duration-300">
                <FiMail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright & Tagline */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-6">
          
          {/* Glowing Copyright Badge */}
          <div className="px-4 py-2 border border-[#00FF88] bg-[#00FF88]/10 text-[#00FF88] text-[10px] md:text-xs tracking-widest font-bold shadow-[0_0_15px_rgba(0,255,136,0.1)] rounded-sm">
            © 2027 RONIT MAURYA. ALL RIGHTS RESERVED.
          </div>
          
          <div className="text-[#8B92A5] text-[10px] md:text-xs tracking-widest font-mono uppercase">
            Crafted with passion & purpose
          </div>
        </div>
        
      </div>
    </footer>
  );
}