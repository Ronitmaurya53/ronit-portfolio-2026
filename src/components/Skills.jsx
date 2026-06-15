import React from 'react';
import { Terminal, Fingerprint } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Skills() {
  const centerNode = { id: 'center', label: 'RONIT MAURYA', x: 50, y: 45, color: '#FFFFFF' };

  const catNodes = [
    { id: 'dev', label: 'Development', x: 50, y: 20, color: '#00E5FF' }, 
    { id: 'ai', label: 'AI & ML', x: 20, y: 65, color: '#A855F7' },     
    { id: 'cs', label: 'CS', x: 80, y: 65, color: '#00FF88' },        
  ];

  const skillNodes = [
    { id: 'cpp', label: 'C++', parent: 'dev', x: 10, y: 15, color: '#00E5FF' },
    { id: 'mongo', label: 'MongoDB', parent: 'dev', x: 22, y: 10, color: '#00E5FF' },
    { id: 'bash', label: 'Bash', parent: 'dev', x: 35, y: 6, color: '#00E5FF' },
    { id: 'js', label: 'JavaScript', parent: 'dev', x: 50, y: 3, color: '#00E5FF' },
    { id: 'react', label: 'React', parent: 'dev', x: 65, y: 6, color: '#00E5FF' },
    { id: 'node', label: 'Node.js', parent: 'dev', x: 78, y: 10, color: '#00E5FF' },
    { id: 'sql', label: 'SQL', parent: 'dev', x: 90, y: 15, color: '#00E5FF' },
    { id: 'sklearn', label: 'Sklearn', parent: 'ai', x: 5, y: 55, color: '#A855F7' },
    { id: 'rag', label: 'RAG', parent: 'ai', x: 5, y: 75, color: '#A855F7' },
    { id: 'tf', label: 'TensorFlow', parent: 'ai', x: 15, y: 88, color: '#A855F7' },
    { id: 'py', label: 'Python', parent: 'ai', x: 32, y: 92, color: '#A855F7' },
    { id: 'oops', label: 'OOPS', parent: 'cs', x: 68, y: 92, color: '#00FF88' },
    { id: 'dsa', label: 'DSA', parent: 'cs', x: 85, y: 88, color: '#00FF88' },
    { id: 'operating system', label: 'Operating System', parent: 'cs', x: 95, y: 75, color: '#00FF88' },
    { id: 'computer network', label: 'Computer Network', parent: 'cs', x: 95, y: 55, color: '#00FF88' },
    //{ id: 'compiler', label: 'Compiler', parent: 'cs', x: 125, y: 70, color: '#00FF88' },
  ];

  return (
    <section id="skills" className="py-24 relative z-10 w-full overflow-hidden flex flex-col items-center">
      
      <style>
        {`
          @keyframes flow-line {
            from { stroke-dashoffset: 100; }
            to { stroke-dashoffset: 0; }
          }
          .animated-flow {
            stroke-dasharray: 5 15;
            animation: flow-line 1s linear infinite;
          }
        `}
      </style>

      {/* Header Info */}
      <div className="flex flex-col items-center mb-8 md:mb-16 text-center relative z-20 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-50px" }} // removed once: true
          className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00FF88]/30 bg-[#00FF88]/5 text-xs text-[#00FF88] shadow-[0_0_15px_rgba(0,255,136,0.2)] mb-4"
        >
          <Terminal className="w-4 h-4" />
          <span className="tracking-widest uppercase font-bold">TECHNICAL ARSENAL</span>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-50px" }} // removed once: true
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-2"
        >
          Skill Matrix
        </motion.h2>
      </div>

      {/* Network Graph Container */}
      <div className="relative w-full max-w-[1200px] aspect-[4/5] sm:aspect-square md:aspect-[21/10] mx-auto">
        
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          
          {/* Center to Categories */}
          {catNodes.map((cat, index) => (
            <g key={`cat-group-${cat.id}`}>
              <motion.line 
                x1={`${centerNode.x}%`} y1={`${centerNode.y}%`} 
                x2={`${cat.x}%`} y2={`${cat.y}%`} 
                stroke={cat.color} 
                strokeWidth="2" 
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.3 }}
                viewport={{ margin: "-50px" }} // Trigger every time
                transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }} // Sped up
              />
              <motion.line 
                x1={`${centerNode.x}%`} y1={`${centerNode.y}%`} 
                x2={`${cat.x}%`} y2={`${cat.y}%`} 
                stroke={cat.color} 
                strokeWidth="3" 
                className="animated-flow"
                style={{ filter: `drop-shadow(0 0 6px ${cat.color})` }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.8 }}
                viewport={{ margin: "-50px" }}
                transition={{ duration: 0.3, delay: 0.8 }} // Appears quicker
              />
            </g>
          ))}
          
          {/* Categories to Skills */}
          {skillNodes.map((skill, index) => {
            const cat = catNodes.find(c => c.id === skill.parent);
            return (
              <g key={`skill-group-${skill.id}`}>
                <motion.line 
                  x1={`${cat.x}%`} y1={`${cat.y}%`} 
                  x2={`${skill.x}%`} y2={`${skill.y}%`} 
                  stroke={skill.color} 
                  strokeWidth="1.5" 
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.15 }}
                  viewport={{ margin: "-50px" }}
                  transition={{ duration: 0.2, delay: 0.5 + (index * 0.03) }} // Sped up
                />
                <motion.line 
                  x1={`${cat.x}%`} y1={`${cat.y}%`} 
                  x2={`${skill.x}%`} y2={`${skill.y}%`} 
                  stroke={skill.color} 
                  strokeWidth="2" 
                  className="animated-flow"
                  style={{ filter: `drop-shadow(0 0 3px ${skill.color})` }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.5 }}
                  viewport={{ margin: "-50px" }}
                  transition={{ duration: 0.3, delay: 1.2 }} // Appears quicker
                />
              </g>
            );
          })}
        </svg>

        {/* Center Node */}
        <motion.div 
          initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
          whileInView={{ scale: 1, opacity: 1, x: '-50%', y: '-50%' }}
          viewport={{ margin: "-50px" }}
          transition={{ type: 'spring', damping: 15, delay: 0.1 }}
          className="absolute z-20 flex flex-col items-center justify-center gap-1 md:gap-2 group cursor-pointer"
          style={{ left: `${centerNode.x}%`, top: `${centerNode.y}%` }}
        >
          <div className="w-8 h-8 md:w-12 md:h-12 rounded-full border-2 border-white/50 bg-[#050A10] flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.4)] group-hover:scale-110 group-hover:border-white group-hover:shadow-[0_0_40px_rgba(255,255,255,0.8)] transition-all duration-300">
            <Fingerprint className="w-4 h-4 md:w-6 md:h-6 text-white group-hover:animate-pulse" />
          </div>
          <span className="px-2 py-1 md:px-4 md:py-1.5 rounded-full border border-white/30 bg-[#050A10] text-white font-mono text-[8px] md:text-sm shadow-xl group-hover:bg-white group-hover:text-black transition-colors duration-300 whitespace-nowrap">
            {centerNode.label}
          </span>
        </motion.div>

        {/* Category Nodes */}
        {catNodes.map((cat, index) => (
          <motion.div 
            key={cat.id}
            initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
            whileInView={{ scale: 1, opacity: 1, x: '-50%', y: '-50%' }}
            viewport={{ margin: "-50px" }}
            transition={{ type: 'spring', damping: 12, delay: 0.4 + (index * 0.1) }} // Sped up
            className="absolute z-20 cursor-pointer transition-all duration-300 hover:scale-110"
            style={{ left: `${cat.x}%`, top: `${cat.y}%` }}
            onMouseEnter={(e) => {
              e.currentTarget.querySelector('span').style.boxShadow = `0 0 30px ${cat.color}, inset 0 0 20px ${cat.color}80`;
              e.currentTarget.querySelector('span').style.backgroundColor = `${cat.color}20`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.querySelector('span').style.boxShadow = `0 0 15px ${cat.color}40, inset 0 0 10px ${cat.color}20`;
              e.currentTarget.querySelector('span').style.backgroundColor = '#050A10';
            }}
          >
            <span 
              className="px-3 py-1.5 md:px-6 md:py-2.5 rounded-full bg-[#050A10] text-white font-bold tracking-wider text-[10px] md:text-sm whitespace-nowrap transition-all duration-300"
              style={{ 
                border: `2px solid ${cat.color}`,
                boxShadow: `0 0 15px ${cat.color}40, inset 0 0 10px ${cat.color}20` 
              }}
            >
              {cat.label}
            </span>
          </motion.div>
        ))}

        {/* Skill Nodes */}
        {skillNodes.map((skill, index) => (
          <motion.div 
            key={skill.id}
            initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
            whileInView={{ scale: 1, opacity: 1, x: '-50%', y: '-50%' }}
            viewport={{ margin: "-50px" }}
            transition={{ type: 'spring', damping: 15, delay: 0.8 + (index * 0.03) }} // Sped up
            className="absolute z-10 cursor-pointer transition-all duration-300 hover:scale-125 hover:z-30"
            style={{ left: `${skill.x}%`, top: `${skill.y}%` }}
            onMouseEnter={(e) => {
              const span = e.currentTarget.querySelector('span');
              span.style.borderColor = skill.color;
              span.style.backgroundColor = skill.color;
              span.style.color = '#000'; 
              span.style.boxShadow = `0 0 20px ${skill.color}`;
              span.style.fontWeight = 'bold';
            }}
            onMouseLeave={(e) => {
              const span = e.currentTarget.querySelector('span');
              span.style.borderColor = `${skill.color}50`;
              span.style.backgroundColor = '#050A10';
              span.style.color = '#e5e7eb';
              span.style.boxShadow = 'none';
              span.style.fontWeight = 'normal';
            }}
          >
            <span 
              className="px-2 py-1 md:px-4 md:py-1.5 rounded-full bg-[#050A10] text-gray-200 font-mono text-[7px] md:text-xs whitespace-nowrap transition-all duration-300"
              style={{ border: `1px solid ${skill.color}50` }}
            >
              {skill.label}
            </span>
          </motion.div>
        ))}

      </div>
    </section>
  );
}