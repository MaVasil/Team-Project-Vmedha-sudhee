
import React, { useState, useEffect } from 'react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Events', href: '#events' },
    { name: 'About Us', href: '#about' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Register', href: '#register' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-2 glass-panel shadow-lg' : 'py-6 bg-transparent'
      }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* <div className={`transition-all duration-300 overflow-hidden ${isScrolled ? 'w-10 h-10' : 'w-12 h-12'}`}>
             <svg viewBox="0 0 100 100" className="w-full h-full text-cyan-500 drop-shadow-[0_0_8px_rgba(8,145,178,0.8)]">
                <path fill="currentColor" d="M50 10L15 30V70L50 90L85 70V30L50 10ZM50 20L75 35V65L50 80L25 65V35L50 20Z" />
                <circle cx="50" cy="50" r="10" fill="currentColor" />
             </svg>
          </div> */}
          <div
            className={`transition-all duration-300 overflow-hidden ${isScrolled ? 'w-10 h-10' : 'w-12 h-12'
              }`}
          >
            <img
              src="/VMedha.png"
              alt="VMEDHA Logo"
              className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(8,145,178,0.8)]"
            />
          </div>

          <div className="flex flex-col">
            <span className={`font-orbitron font-bold tracking-tighter text-cyan-400 leading-none transition-all duration-300 ${isScrolled ? 'text-lg' : 'text-2xl'}`}>
              VMEDHA
            </span>
            <span className={`font-orbitron text-[10px] tracking-[0.2em] text-cyan-600 uppercase ${isScrolled ? 'hidden' : 'block'}`}>
              SUDHEE 2026
            </span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-outfit text-sm font-medium tracking-wide text-gray-300 hover:text-cyan-400 hover:glow-cyan transition-all"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#register"
            className="px-6 py-2 bg-cyan-900/30 border border-cyan-500/50 text-cyan-400 font-orbitron text-xs tracking-widest hover:bg-cyan-500 hover:text-black transition-all rounded"
          >
            INITIALIZE
          </a>
        </nav>

        {/* Mobile menu button could go here */}
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
    </header>
  );
};
