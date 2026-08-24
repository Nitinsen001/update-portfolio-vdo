import React, { useState } from 'react';

/* Real favicons pulled live from each platform — swap the domains/handles below with your own */
const favicon = (domain) => `https://www.google.com/s2/favicons?sz=64&domain=${domain}`;

const SOCIALS = [
  { name: 'GitHub', handle: '@nitinsen', href: 'https://github.com/', domain: 'github.com' },
  { name: 'LinkedIn', handle: 'nitin-sen', href: 'https://linkedin.com/', domain: 'linkedin.com' },
  { name: 'Instagram', handle: '@nitin.sen', href: 'https://instagram.com/', domain: 'instagram.com' },
];

const CODING_PROFILES = [
  { name: 'LeetCode', handle: '200+ solved', href: '#', domain: 'leetcode.com' },
  { name: 'GeeksforGeeks', handle: '150+ solved', href: '#', domain: 'geeksforgeeks.org' },
  { name: 'CodeChef', handle: '3★ rated', href: '#', domain: 'codechef.com' },
  { name: 'HackerRank', handle: '5★ Python', href: '#', domain: 'hackerrank.com' },
];

const SITEMAP = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Resume', href: '#resume' },
];

/* ----- IconLink with 3D tilt & glow animation ----- */
const IconLink = ({ name, handle, href, domain }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * 12, y: x * 12 });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <a
      key={name}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative flex items-center gap-2 px-3 py-1.5 rounded-xl transition-all duration-300 ease-out hover:text-white"
      style={{
        transform: `perspective(600px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.02, 1.02, 1.02)`,
        background: 'rgba(255,255,255,0.02)',
        backdropFilter: 'blur(4px)',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
      }}
    >
      {/* animated glow ring */}
      <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(255,42,42,0.15), transparent 70%)',
          boxShadow: '0 0 30px rgba(255,42,42,0.05)',
        }}
      />
      <img
        src={favicon(domain)}
        alt=""
        className="w-4 h-4 opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
        style={{ filter: 'drop-shadow(0 0 6px rgba(255,42,42,0.1))' }}
      />
      <span className="font-medium tracking-wider text-[10px] md:text-xs">{name}</span>
      <span className="text-white/30 normal-case group-hover:text-white/60 transition-colors duration-300 text-[9px] md:text-[10px]">
        {handle}
      </span>
      {/* animated underline */}
      <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-gradient-to-r from-[#ff2a2a] to-[#ff6b6b] group-hover:w-4/5 group-hover:left-[10%] transition-all duration-500 rounded-full" />
    </a>
  );
};

/* ----- Main Footer ----- */
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0c0c0c] text-[#d4d4d4] py-12 px-6 md:px-12 w-full font-mono text-[10px] md:text-xs tracking-widest overflow-hidden">

      {/* animated gradient background orbs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#ff2a2a]/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute -bottom-60 -right-40 w-[500px] h-[500px] bg-[#ff6b6b]/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />

      <div className="relative z-10 flex flex-col min-h-[40vh] justify-between gap-12">

        {/* ---- TOP ROW ---- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 w-full">
          <div className="flex flex-col gap-1 border-l-2 border-[#ff2a2a]/30 pl-4">
            <p className="text-[11px] md:text-xs font-light tracking-widest text-white/70">AI &amp; Web Development</p>
            <p className="text-[10px] md:text-[11px] font-light text-white/50">Python, Django, Data Analytics</p>
            <p className="text-[10px] md:text-[11px] font-light text-white/50">Machine Learning, Streamlit</p>
          </div>

          <div className="flex flex-col gap-2 md:items-center">
            {SOCIALS.map((s) => <IconLink key={s.name} {...s} />)}
          </div>

          <div className="flex flex-col gap-2 md:items-end">
            {CODING_PROFILES.map((c) => <IconLink key={c.name} {...c} />)}
          </div>
        </div>

        {/* ---- MIDDLE HUGE TEXT with 3D floating effect ---- */}
        <div className="w-full flex justify-center items-center py-10 md:py-12 relative">
          <h2 className="text-[15vw] md:text-[12vw] leading-none font-sans font-black tracking-tighter lowercase select-none text-transparent bg-clip-text bg-gradient-to-r from-white via-[#ff2a2a] to-white 
            animate-float-3d"
            style={{ textShadow: '0 20px 40px rgba(0,0,0,0.6), 0 0 80px rgba(255,42,42,0.15)' }}>
            NITIN
          </h2>
          {/* floating status badge */}
          <span className="absolute -bottom-2 md:bottom-2 flex items-center gap-3 text-white/60 normal-case bg-black/40 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/10 shadow-xl">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff2a2a] opacity-70"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff2a2a]"></span>
            </span>
            <span className="text-[9px] md:text-[10px] tracking-wider">Available for internships &amp; projects</span>
          </span>
        </div>

        {/* ---- BOTTOM ROW ---- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 w-full items-end border-t border-white/5 pt-8">
          <div className="flex flex-col gap-3">
            <a href="#contact" className="text-[11px] md:text-xs font-bold hover:text-[#ff2a2a] transition-colors duration-300 relative group inline-block w-fit">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#ff2a2a] group-hover:w-full transition-all duration-500" />
            </a>
            <p className="text-white/40 font-mono text-[8px] md:text-[9px] tracking-widest">
              &copy; {year} Nitin Sen Studio · Built with React
            </p>
          </div>

          <div className="flex flex-col gap-3 md:items-center">
            <a href="mailto:nitinsen91650@gmail.com" className="text-[11px] md:text-xs hover:text-[#ff2a2a] transition-colors duration-300 relative group inline-block w-fit lowercase">
              nitinsen91650@gmail.com
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#ff2a2a] group-hover:w-full transition-all duration-500" />
            </a>
            <div className="flex flex-wrap gap-x-4 gap-y-1 md:justify-center normal-case text-white/30 text-[9px] md:text-[10px]">
              {SITEMAP.map((s) => (
                <a key={s.name} href={s.href} className="hover:text-white transition-colors duration-300 relative group">
                  {s.name}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-[#ff2a2a]/60 group-hover:w-full transition-all duration-500" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2 md:items-end">
            <a href="#" className="text-[11px] md:text-xs hover:text-[#ff2a2a] transition-colors duration-300 relative group inline-block w-fit">
              Privacy Policy
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#ff2a2a] group-hover:w-full transition-all duration-500" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;