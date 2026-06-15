import React from 'react';

export default function Terminal() {
  return (
    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative h-[500px] mt-12 lg:mt-0">
      
      {/* CSS for Scanner Animation */}
      <style>
        {`
          @keyframes scan {
            0% { top: 0%; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { top: 100%; opacity: 0; }
          }
          .animate-scan {
            animation: scan 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          }
        `}
      </style>
      <div className="absolute top-[-20px] lg:top-0 right-[10%] px-4 py-2 rounded-md border border-[#FFD700] text-[#FFD700] bg-[#FFD700]/5 text-sm shadow-[0_0_15px_rgba(255,215,0,0.3)] animate-[bounce_4s_infinite] z-20">
        $ python train.py
      </div>

      <div className="absolute left-0 md:left-[10%] top-[25%] px-3 py-1.5 rounded-md border border-[#00E5FF] text-[#00E5FF] bg-[#00E5FF]/5 text-xs flex items-center gap-2 shadow-[0_0_15px_rgba(0,229,255,0.3)] z-20">
        COM 3 <span className="px-1.5 py-0.5 bg-[#00E5FF]/20 text-white rounded text-[10px]">ACTIVE</span>
      </div>
      <div className="absolute left-[-10px] md:left-[-5%] bottom-[15%] md:bottom-[25%] px-4 py-2 rounded-md border border-[#FF00AA] text-[#FF00AA] bg-[#FF00AA]/5 text-sm shadow-[0_0_15px_rgba(255,0,170,0.3)] z-20 animate-pulse">
        B.TECH CS
      </div>

      <div className="absolute bottom-[-20px] md:bottom-[5%] right-[20%] px-4 py-2 rounded-md border border-[#FF6600] text-[#FF6600] bg-[#FF6600]/5 text-sm shadow-[0_0_15px_rgba(255,102,0,0.3)] animate-[bounce_5s_infinite] z-20">
        $ flash_firmware
      </div>

      <div className="w-full max-w-[480px] bg-[#050A10] rounded-xl border border-[#00E5FF]/50 shadow-[0_0_30px_rgba(0,229,255,0.2)] flex flex-col z-10 relative overflow-hidden backdrop-blur-sm">
        
        <div className="flex justify-between items-center px-4 py-3 border-b border-[#00E5FF]/30 bg-[#00E5FF]/10 text-[10px] md:text-xs text-[#00E5FF]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></span>
            <span className="ml-2 font-bold tracking-wider">SYSTEM TERMINAL</span>
          </div>
          <div className="flex gap-4">
            <span>v2.0.26</span>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-4 md:p-6 flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-6 h-full">
          
          {/* Left Side: Terminal Text */}
          <div className="flex-1 w-full text-[10px] md:text-xs leading-loose overflow-x-auto hide-scrollbar font-mono">
            <div className="flex text-[#8B92A5] whitespace-nowrap"><span className="w-6">01</span><span className="text-[#00E5FF]">{"> "}</span><span className="text-white ml-2">Initializing environment...</span></div>
            <div className="flex text-[#8B92A5] whitespace-nowrap"><span className="w-6">02</span><span className="text-[#00E5FF]">{"> "}</span><span className="text-white ml-2">Target: <span className="text-[#00E5FF]">Ronit.dev</span></span></div>
            <div className="flex text-[#8B92A5] whitespace-nowrap"><span className="w-6">03</span></div>
            <div className="flex text-[#8B92A5] whitespace-nowrap"><span className="w-6">04</span><span className="text-[#FF00AA] ml-2">class</span> <span className="text-white ml-2">Developer:</span></div>
            <div className="flex text-[#8B92A5] whitespace-nowrap"><span className="w-6">05</span><span className="text-[#FF00AA] ml-6">def</span> <span className="text-[#00E5FF] ml-2">__init__</span>(self):</div>
            <div className="flex text-[#8B92A5] whitespace-nowrap"><span className="w-6">06</span><span className="text-white ml-10">self.name = </span><span className="text-[#FFD700]">"RONIT MAURYA"</span></div>
            <div className="flex text-[#8B92A5] whitespace-nowrap"><span className="w-6">07</span><span className="text-white ml-10">self.role = </span><span className="text-[#FFD700]">"FULL STACK DEVELOPER"</span></div>
            <div className="flex text-[#8B92A5] whitespace-nowrap"><span className="w-6">08</span><span className="text-white ml-10">self.status = </span><span className="text-[#00FF88]">"ACTIVE"</span></div>
            <div className="flex text-[#8B92A5] whitespace-nowrap"><span className="w-6">09</span></div>
            <div className="flex text-[#8B92A5] whitespace-nowrap"><span className="w-6">10</span><span className="text-[#00E5FF]">{"> "}</span><span className="text-[#00FF88] ml-2">Fetching Profile ID...</span></div>
            <div className="flex text-[#8B92A5] whitespace-nowrap"><span className="w-6">11</span><span className="text-[#00E5FF]">{"> "}</span><span className="text-[#00FF88] ml-2">System ready ✓</span></div>
          </div>

          <div className="shrink-0 flex flex-col items-center group cursor-pointer mt-2 md:mt-0">
            <div className="relative w-24 h-28 md:w-28 md:h-36 bg-[#02050A] border border-[#00E5FF]/20 rounded-md p-1 shadow-[0_0_20px_rgba(0,229,255,0.1)] overflow-hidden">
              
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#00FF88] z-20 transition-all duration-300 group-hover:w-full group-hover:h-full group-hover:border-[#00FF88]/30"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#00FF88] z-20"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#00FF88] z-20"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#00FF88] z-20"></div>

              {/* Scanning Laser Line */}
              <div className="absolute left-0 w-full h-[2px] bg-[#00FF88] shadow-[0_0_15px_#00FF88] animate-scan z-30 pointer-events-none"></div>

              {/* Image Matrix Overlay Effect */}
              <div className="absolute inset-0 bg-[#00E5FF]/10 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>

             
              <img 
                src="/photo.jpeg" 
                alt="Profile" 
                onError={(e) => { e.target.onerror = null; e.target.src = "https://avatars.githubusercontent.com/u/9919?s=280&v=4"; }}
                className="w-full h-full object-cover rounded-sm grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 relative z-0"
              />
            </div>
            <div className="mt-3 flex flex-col items-center font-mono text-[8px] md:text-[10px]">
              <span className="text-[#00E5FF] tracking-[0.2em] uppercase">Auth: Verified</span>
              <span className="text-[#FF00AA] tracking-widest opacity-70">ID: 2023-2027</span>
            </div>
          </div>

        </div>
        <div className="flex justify-between items-center px-4 py-2 border-t border-[#00E5FF]/30 bg-[#00E5FF]/5 text-[8px] md:text-[10px] text-[#00E5FF] mt-auto">
          <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#00FF88] animate-pulse"></span> SECURE CONNECTION</div>
          <div className="tracking-widest hidden md:block">BAUD: 115200</div>
          <div className="tracking-widest">SYSTEM: ONLINE</div>
        </div>
      </div>
    </div>
  );
}