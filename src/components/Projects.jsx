import React from 'react';
import { Folder, Calendar, ExternalLink } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'GAMING WEBSITE',
      year: '2024',
      desc: 'Developed a responsive Gaming Website featuring game collections, modern UI/UX, interactive navigation, and optimized performance using modern web technologies.',
      tags: ['Multilingual AI', 'JavaScript', 'HTML', 'CSS'],
      color: '#00FF88', // Green glow
      github: 'https://github.com/Ronitmaurya53/RPS-Gaming.com',
      live: 'https://rpsgamimng.netlify.app/'
    },
    {
      id: 2,
      title: 'PHARMASHARE',
      year: '2025',
      desc: 'Developed PharmaShare, a platform designed to connect medicine donors and recipients, helping reduce medicine waste and improve access to essential healthcare resources.',
      tags: ['FULLSTACK', 'REACT.JS', 'Machine Learning', 'AI','MONGODB','EXPRESS.JS','NODE.JS'],
      color: '#00E5FF', // Cyan glow
      github: 'https://github.com/Ronitmaurya53/PharmaShare',
      live: 'https://pharma-share-pumq.vercel.app/'
    },
    {
      id: 3,
      title: 'YARNIVERSE',
      year: '2026',
      desc: 'Developed a full-stack fashion e-commerce website with authentication, product management, wishlist, and shopping cart features using the MERN stack.',
      tags: ['React', 'Tailwind CSS', 'Vite', 'Framer Motion','Firebase','Cloudnary','resend'],
      color: '#FF00AA', // Magenta glow
      github: '#',
      live: 'https://yarniverse-clean-4g9c.vercel.app/'
    }
  ];

  return (
    <section id="projects" className="py-24 relative z-10 mt-12">
      {/* Section Header */}
      <div className="flex flex-col items-center mb-16">
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00E5FF]/30 bg-[#00E5FF]/5 text-xs text-[#00E5FF] shadow-[0_0_10px_rgba(0,229,255,0.1)] mb-6">
          <Folder className="w-4 h-4" />
          <span className="tracking-widest uppercase font-bold">My Work</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00FF88] to-[#00E5FF] tracking-tight">
          Featured Projects
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div 
            key={project.id}
            className="flex flex-col bg-[#050A10] border border-white/10 rounded-xl p-8 hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden"
            style={{ '--glow-color': project.color }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = project.color;
              e.currentTarget.style.boxShadow = `0 0 25px ${project.color}33`; // 20% opacity hex
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {/* Top Icons */}
            <div className="flex justify-between items-center mb-6">
              <Folder className="w-10 h-10 text-[var(--glow-color)] opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-center gap-1.5 text-xs text-gray-400 font-mono bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                <Calendar className="w-3 h-3" />
                {project.year}
              </div>
            </div>

            {/* Project Info */}
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[var(--glow-color)] transition-colors">
              {project.title}
            </h3>
            
            <p className="text-[#8B92A5] text-sm leading-relaxed mb-8 flex-grow">
              {project.desc}
            </p>

            {/* Tags Grid */}
            <div className="flex flex-wrap gap-2 mb-8 mt-auto">
              {project.tags.map(tag => (
                <span 
                  key={tag} 
                  className="text-xs px-3 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300 font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Bottom Links */}
            <div className="flex items-center gap-4 pt-4 border-t border-white/10 group-hover:border-[var(--glow-color)]/50 transition-colors">
              <a 
                href={project.github}
                className="text-gray-400 hover:text-[var(--glow-color)] transition-colors flex items-center gap-2 text-sm font-bold uppercase tracking-wider"
              >
                <FiGithub className="w-5 h-5" /> Code
              </a>
              <a 
                href={project.live}
                className="text-gray-400 hover:text-[var(--glow-color)] transition-colors flex items-center gap-2 text-sm font-bold uppercase tracking-wider ml-auto"
              >
                Live <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}