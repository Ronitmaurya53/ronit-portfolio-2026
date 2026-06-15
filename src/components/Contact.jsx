// import React from 'react';
// import { MessageSquare, Mail, Download, Send } from 'lucide-react';
// import { FiGithub, FiLinkedin, FiYoutube, FiInstagram, FiMessageCircle } from 'react-icons/fi';

// export default function Contact() {
//   // UPDATE: Added 'url' to each social link
//   const socialLinks = [
//     { name: 'GitHub', icon: FiGithub, url: 'https://github.com/Ronitmaurya53' }, // Yahan apna link daalo
//     { name: 'LinkedIn', icon: FiLinkedin, url: 'https://linkedin.com/in/ronit-maurya-12b75727b' }, // Yahan apna link daalo
//     { name: 'Email', icon: Mail, url: 'mailto:ronitmaurya993020@gmail.com' },
//     { name: 'Reddit', icon: FiMessageCircle, url: 'https://reddit.com/user/yourusername' }, 
//     { name: 'YouTube', icon: FiYoutube, url: 'https://www.youtube.com/@cinemax-RP' },
//     { name: 'Instagram', icon: FiInstagram, url: 'https://instagram.com/ronit_maurya_' },
//   ];

//   return (
//     <section id="contact" className="py-24 relative z-10 border-t border-white/5 mt-12">
//       <div className="flex flex-col lg:flex-row gap-16 justify-between items-start">
        
//         {/* LEFT COLUMN: Info & Socials */}
//         <div className="w-full lg:w-1/2 flex flex-col gap-8">
          
//           <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00FF88]/30 bg-[#00FF88]/5 text-xs text-[#00FF88] shadow-[0_0_10px_rgba(0,255,136,0.1)] w-max">
//             <MessageSquare className="w-4 h-4" />
//             <span className="tracking-widest uppercase font-bold">GET IN TOUCH</span>
//           </div>

//           <h2 className="text-5xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#00FF88] to-[#8B5CF6]">
//             CONTACT US
//           </h2>

//           <p className="text-[#8B92A5] leading-relaxed text-sm md:text-base max-w-md">
//             I'm currently available for internships, freelance work, and full-time opportunities. 
//             Whether you need an Full Stack developer, 
//             want to collaborate on a project, or just want to connect - feel free to reach out!
//           </p>

//           <div className="flex flex-col gap-4 mt-2">
//             <a href="mailto:ronitmaurya993020@gmail.com" className="flex items-center gap-3 text-[#8B92A5] hover:text-[#00FF88] transition-colors w-max group">
//               <Mail className="w-5 h-5 text-[#00FF88]" />
//               <span className="font-mono text-sm group-hover:underline decoration-[#00FF88]/50 underline-offset-4">ronitmaurya993020@gmail.com</span>
//             </a>
           
//             <a href="/resume.pdf" download="RONIT_Resume.pdf" className="flex items-center gap-3 text-[#8B92A5] hover:text-[#00E5FF] transition-colors w-max group mt-2">
//               <Download className="w-5 h-5 text-[#00E5FF]" />
//               <span className="font-mono text-sm group-hover:underline decoration-[#00E5FF]/50 underline-offset-4">Download Resume</span>
//             </a>
//           </div>

//           {/* Social Links Grid */}
//           <div className="grid grid-cols-2 gap-4 mt-4 max-w-md">
//             {socialLinks.map((link) => (
//               <a 
//                 key={link.name}
//                 href={link.url}
//                 target="_blank" 
//                 rel="noopener noreferrer" // Security best practice for external links
//                 className="flex items-center gap-3 p-3 rounded-lg bg-[#09111E] border border-white/5 hover:border-[#00FF88]/50 hover:shadow-[0_0_15px_rgba(0,255,136,0.1)] transition-all duration-300 group"
//               >
//                 <link.icon className="w-5 h-5 text-gray-400 group-hover:text-[#00FF88] transition-colors" />
//                 <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{link.name}</span>
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* RIGHT COLUMN: Terminal Form */}
//         <div className="w-full lg:w-1/2 flex justify-end">
//           <div className="w-full max-w-lg bg-[#050A10] rounded-xl border border-white/10 shadow-2xl flex flex-col font-mono overflow-hidden">
            
//             <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-[#09111E]">
//               <div className="flex gap-2">
//                 <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
//                 <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
//                 <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
//               </div>
//               <div className="text-[10px] text-gray-500 tracking-widest">~/contact-form</div>
//               <div className="w-12"></div>
//             </div>

//             <form className="flex flex-col gap-6 p-6 md:p-8">
//               <div className="flex flex-col gap-2">
//                 <label className="text-xs flex gap-2 items-center">
//                   <span className="text-[#00FF88]">$</span><span className="text-gray-400">name</span>
//                 </label>
//                 <input type="text" placeholder="John Doe" className="bg-[#09111E] border border-transparent focus:border-[#00FF88]/30 rounded-md p-3 text-sm text-white placeholder-gray-600 outline-none transition-all focus:shadow-[0_0_10px_rgba(0,255,136,0.1)]" />
//               </div>

//               <div className="flex flex-col gap-2">
//                 <label className="text-xs flex gap-2 items-center">
//                   <span className="text-[#00FF88]">$</span><span className="text-gray-400">email</span>
//                 </label>
//                 <input type="email" placeholder="john@example.com" className="bg-[#09111E] border border-transparent focus:border-[#00FF88]/30 rounded-md p-3 text-sm text-white placeholder-gray-600 outline-none transition-all focus:shadow-[0_0_10px_rgba(0,255,136,0.1)]" />
//               </div>

//               <div className="flex flex-col gap-2">
//                 <label className="text-xs flex gap-2 items-center">
//                   <span className="text-[#00FF88]">$</span><span className="text-gray-400">message</span>
//                 </label>
//                 <textarea rows="4" placeholder="Tell me about your project..." className="bg-[#09111E] border border-transparent focus:border-[#00FF88]/30 rounded-md p-3 text-sm text-white placeholder-gray-600 outline-none transition-all focus:shadow-[0_0_10px_rgba(0,255,136,0.1)] resize-none"></textarea>
//               </div>

//               <div className="flex justify-start mt-2">
//                 <button type="button" className="flex items-center gap-2 px-6 py-3 rounded-md border border-[#00FF88] text-[#00FF88] hover:bg-[#00FF88]/10 hover:shadow-[0_0_15px_rgba(0,255,136,0.3)] transition-all duration-300 font-bold tracking-wider text-sm uppercase">
//                   SEND MESSAGE <Send className="w-4 h-4 ml-1" />
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import React, { useState } from 'react';
import { MessageSquare, Mail, Download, Send, CheckCircle, XCircle, Loader2 } from 'lucide-react';
import { FiGithub, FiLinkedin, FiYoutube, FiInstagram, FiMessageCircle } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'

  const socialLinks = [
    { name: 'GitHub', icon: FiGithub, url: 'https://github.com/Ronitmaurya53' },
    { name: 'LinkedIn', icon: FiLinkedin, url: 'https://linkedin.com/in/ronit-maurya-12b75727b' },
    { name: 'Email', icon: Mail, url: 'mailto:ronitmaurya993020@gmail.com' },
    { name: 'Reddit', icon: FiMessageCircle, url: 'https://reddit.com/user/yourusername' }, 
    { name: 'YouTube', icon: FiYoutube, url: 'https://www.youtube.com/@cinemax-RP' },
    { name: 'Instagram', icon: FiInstagram, url: 'https://instagram.com/ronit_maurya_' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    const WEB3FORMS_ACCESS_KEY = "99c4b814-67c0-4d46-b98d-fc3ecb1d334e"; 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ access_key: WEB3FORMS_ACCESS_KEY, ...formData }),
      });
      
      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10 border-t border-white/5 mt-12">
      <div className="flex flex-col lg:flex-row gap-16 justify-between items-start">
        
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00FF88]/30 bg-[#00FF88]/5 text-xs text-[#00FF88] shadow-[0_0_10px_rgba(0,255,136,0.1)] w-max">
            <MessageSquare className="w-4 h-4" />
            <span className="tracking-widest uppercase font-bold">GET IN TOUCH</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#00FF88] to-[#8B5CF6]">
            CONTACT US
          </h2>

          <p className="text-[#8B92A5] leading-relaxed text-sm md:text-base max-w-md">
            I'm currently available for internships, freelance work, and full-time opportunities. 
            Whether you need a Full Stack developer, want to collaborate on a project, or just want to connect - feel free to reach out!
          </p>

          <div className="flex flex-col gap-4 mt-2">
            <a href="mailto:ronitmaurya993020@gmail.com" className="flex items-center gap-3 text-[#8B92A5] hover:text-[#00FF88] transition-colors w-max group">
              <Mail className="w-5 h-5 text-[#00FF88]" />
              <span className="font-mono text-sm group-hover:underline decoration-[#00FF88]/50 underline-offset-4">ronitmaurya993020@gmail.com</span>
            </a>
            <a href="/resume.pdf" download="RONIT_Resume.pdf" className="flex items-center gap-3 text-[#8B92A5] hover:text-[#00E5FF] transition-colors w-max group mt-2">
              <Download className="w-5 h-5 text-[#00E5FF]" />
              <span className="font-mono text-sm group-hover:underline decoration-[#00E5FF]/50 underline-offset-4">Download Resume</span>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4 max-w-md">
            {socialLinks.map((link) => (
              <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg bg-[#09111E] border border-white/5 hover:border-[#00FF88]/50 hover:shadow-[0_0_15px_rgba(0,255,136,0.1)] transition-all duration-300 group">
                <link.icon className="w-5 h-5 text-gray-400 group-hover:text-[#00FF88] transition-colors" />
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{link.name}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-end">
          <div className="w-full max-w-lg bg-[#050A10] rounded-xl border border-white/10 shadow-2xl flex flex-col font-mono overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-[#09111E]">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
              </div>
              <div className="text-[10px] text-gray-500 tracking-widest">~/contact-form</div>
              <div className="w-12"></div>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-6 md:p-8">
              <div className="flex flex-col gap-2">
                <label className="text-xs flex gap-2 items-center"><span className="text-[#00FF88]">$</span><span className="text-gray-400">name</span></label>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} required placeholder="John Doe" className="bg-[#09111E] border border-transparent focus:border-[#00FF88]/30 rounded-md p-3 text-sm text-white placeholder-gray-600 outline-none transition-all focus:shadow-[0_0_10px_rgba(0,255,136,0.1)]" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs flex gap-2 items-center"><span className="text-[#00FF88]">$</span><span className="text-gray-400">email</span></label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} required placeholder="john@example.com" className="bg-[#09111E] border border-transparent focus:border-[#00FF88]/30 rounded-md p-3 text-sm text-white placeholder-gray-600 outline-none transition-all focus:shadow-[0_0_10px_rgba(0,255,136,0.1)]" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs flex gap-2 items-center"><span className="text-[#00FF88]">$</span><span className="text-gray-400">message</span></label>
                <textarea name="message" value={formData.message} onChange={handleInputChange} required rows="4" placeholder="Tell me about your project..." className="bg-[#09111E] border border-transparent focus:border-[#00FF88]/30 rounded-md p-3 text-sm text-white placeholder-gray-600 outline-none transition-all focus:shadow-[0_0_10px_rgba(0,255,136,0.1)] resize-none"></textarea>
              </div>

              <div className="flex justify-start mt-2">
                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className={`flex items-center gap-2 px-6 py-3 rounded-md border transition-all duration-300 font-bold tracking-wider text-sm uppercase
                    ${status === 'idle' ? 'border-[#00FF88] text-[#00FF88] hover:bg-[#00FF88]/10 hover:shadow-[0_0_15px_rgba(0,255,136,0.3)]' : ''}
                    ${status === 'submitting' ? 'border-[#00E5FF] text-[#00E5FF] opacity-80 cursor-not-allowed' : ''}
                    ${status === 'success' ? 'border-[#27C93F] text-[#27C93F] bg-[#27C93F]/10' : ''}
                    ${status === 'error' ? 'border-[#FF5F56] text-[#FF5F56] bg-[#FF5F56]/10' : ''}
                  `}
                >
                  {status === 'idle' && <>SEND MESSAGE <Send className="w-4 h-4 ml-1" /></>}
                  {status === 'submitting' && <>SENDING... <Loader2 className="w-4 h-4 ml-1 animate-spin" /></>}
                  {status === 'success' && <>MESSAGE SENT <CheckCircle className="w-4 h-4 ml-1" /></>}
                  {status === 'error' && <>FAILED! TRY AGAIN <XCircle className="w-4 h-4 ml-1" /></>}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}