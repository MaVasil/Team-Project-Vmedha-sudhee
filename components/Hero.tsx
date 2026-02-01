
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
      {/* Decorative blurred blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-900/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-900/10 rounded-full blur-[120px] -z-10" />

      <div className="text-center px-4">
        <div className="inline-block px-4 py-1 mb-6 border border-cyan-500/30 bg-cyan-950/20 rounded-full">
          <span className="font-orbitron text-[10px] tracking-[0.3em] text-cyan-400 uppercase">
            CBIT's Premier Technical Fest
          </span>
        </div>
        
        <h1 className="font-orbitron text-5xl md:text-8xl font-black mb-6 tracking-tight">
          <span className="text-white">VMEDHA</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-cyan-300 to-cyan-600 glow-cyan">
            SUDHEE 2026
          </span>
        </h1>

        <p className="font-outfit text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed tracking-wide">
          Enter the next dimension of innovation. Where technology meets creativity to build the systems of tomorrow.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a 
            href="#register" 
            className="group relative px-10 py-4 bg-cyan-600 text-black font-orbitron font-bold tracking-widest overflow-hidden rounded transition-all hover:bg-cyan-400"
          >
            <div className="absolute inset-0 w-full h-full bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-[-20deg]" />
            INITIALIZE REGISTRATION
          </a>
          <a 
            href="#events" 
            className="px-10 py-4 border border-cyan-500/50 text-cyan-400 font-orbitron font-bold tracking-widest hover:bg-cyan-500/10 transition-all rounded"
          >
            VIEW EXPEDITIONS
          </a>
        </div>
      </div>
    </div>
  );
};
