import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: 'FRONTEND DEVELOPER INTERN',
      org: 'CODE ALPHA',
      date: 'AUG 2025 - SEP 2025',
      desc: 'Completed a virtual internship at CodeAlpha, where I worked on real-world software development projects, enhanced my problem-solving skills, and gained hands-on experience in programming, web development, and project implementation.',
      tags: ['WebDevelopment', 'SoftwareDevelopment', 'Science with CS'],
      color: '#00E5FF' // Cyan
    },
    {
      id: 2,
      title: 'PYTHON DEVELOPER',
      org: 'Eduskills Academy',
      date: 'April 2026',
      desc: 'Gained hands-on experience in Python programming, problem-solving, data structures, debugging, and software development. Worked on practical projects to strengthen coding skills and understand real-world application development.',
      tags: ['eduskills', 'PythonDeveloper', 'coding', 'PythonProjects'],
      color: '#FF00AA' // Magenta
    },
    {
      id: 3,
      title: 'FULL STACK DEVELOPER',
      org: 'CodeWebX',
      date: 'july 2026 - present',
      desc: 'Completed a Full Stack Developer Internship at CodeWebX, gaining hands-on experience in frontend and backend development, database management, and building real-world web applications.',
      tags: ['CodeWebX', 'FullStackDeveloper', 'mernstack'],
      color: '#00FF88' // Green
    },
    {
      id: 4,
      title: 'NIT PATNA Intern',
      org: 'NIT PTNA',
      date: 'MAR 2026',
      desc: 'Completed tour of manufacturing facilities and gained insights into production processes. Understood the concept of ai & ml and...',
      tags: ['AI & ML', 'transportation', 'C++', 'DSA'],
      color: '#FFD700' // Yellow
    }
  ];

  return (
    <section id="experience" className="py-24 relative z-10">
      {/* Section Header */}
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00E5FF] to-[#8B5CF6] mb-2 tracking-tight">
          Professional Experience
        </h2>
        <p className="text-[#8B92A5] tracking-widest text-sm uppercase">
          Education · Internships · Community Outreach
        </p>
      </div>

      {/* Grid container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {experiences.map((exp) => (
          <div 
            key={exp.id} 
            className="flex flex-col bg-[#050A10] border border-white/10 rounded-xl p-6 hover:-translate-y-2 transition-transform duration-300 group"
            style={{ '--glow-color': exp.color }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = exp.color;
              e.currentTarget.style.boxShadow = `0 0 20px ${exp.color}33`; // 33 is hex for 20% opacity
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {/* Header info */}
            <div className="flex justify-between items-start text-[10px] text-gray-400 mb-4 font-mono">
              <span className="truncate mr-2 max-w-[60%]">~/{exp.org.toLowerCase().replace(/\s+/g, '-')}</span>
              <span className="shrink-0">{exp.date}</span>
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[var(--glow-color)] transition-colors">
              {exp.title}
            </h3>
            <p className="text-sm text-[var(--glow-color)] mb-4">{exp.org}</p>

            {/* Description */}
            <p className="text-[#8B92A5] text-xs leading-relaxed mb-6 flex-grow">
              {exp.desc}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {exp.tags.map(tag => (
                <span key={tag} className="text-[10px] px-2 py-1 rounded-sm bg-white/5 border border-white/10 text-gray-300">
                  {tag}
                </span>
              ))}
            </div>

            {/* Bottom Action Area */}
            <div className="mt-auto pt-4 border-t border-white/10 flex justify-between items-center group-hover:border-[var(--glow-color)] transition-colors">
              <span className="text-[10px] uppercase tracking-widest text-[var(--glow-color)]">
                {exp.id === 1 ? 'INTERNSHIP' : 'INTERNSHIP'}
              </span>
              <button className="flex items-center gap-1 text-[10px] text-white hover:text-[var(--glow-color)] uppercase tracking-wider transition-colors">
                GO TO POST <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}