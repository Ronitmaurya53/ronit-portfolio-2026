import React from 'react';

export default function Navbar() {
  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <nav className="flex justify-between items-center py-4 border-b border-white/5">
      <div className="text-xl font-bold tracking-wider">
        <span className="text-[#00E5FF]">{"<"}</span>
        <span className="text-[#00E5FF]">Ronit</span>
        <span className="text-[#00FF88]">.Maurya</span>
        <span className="text-[#00FF88]">{" />"}</span>
      </div>
      
      <div className="hidden lg:flex items-center gap-4 text-sm">
        {navItems.map((item, index) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`}
            className="px-4 py-1.5 rounded-md border border-[#00FF88]/30 text-[#e2e8f0] hover:border-[#00FF88] hover:text-[#00FF88] hover:shadow-[0_0_10px_rgba(0,255,136,0.3)] transition-all duration-300"
          >
            <span className="text-[#00FF88] text-xs mr-1">0{index + 1}.</span> {item}
          </a>
        ))}
      </div>

      <a 
  href="#contact" 
  className="hidden md:block px-6 py-2 rounded-md border border-[#00FF88] text-[#00FF88] hover:bg-[#00FF88]/10 hover:shadow-[0_0_15px_rgba(0,255,136,0.4)] transition-all duration-300 tracking-wider text-sm font-bold text-center"
>
  HIRE ME
</a>
    </nav>
  );
}