
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 py-16 border-t border-white/5 glass-panel">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
               {/* <svg viewBox="0 0 100 100" className="w-8 h-8 text-cyan-500">
                  <path fill="currentColor" d="M50 10L15 30V70L50 90L85 70V30L50 10ZM50 20L75 35V65L50 80L25 65V35L50 20Z" />
               </svg> */}
<img
  src="/VMedha.png"
  alt="VMEDHA Logo"
  className="h-10 w-auto object-contain"
/>


               <span className="font-orbitron font-bold text-xl text-white">VMEDHA</span>
            </div>
            <p className="font-outfit text-gray-400 max-w-sm leading-relaxed">
              Empowering the engineers of tomorrow through collaborative innovation and technical excellence. Join the cyber revolution at CBIT.
            </p>
          </div>

          <div>
            <h4 className="font-orbitron text-xs font-bold text-cyan-600 tracking-[0.3em] uppercase mb-6">Navigation</h4>
            <ul className="space-y-3 font-outfit text-sm text-gray-500">
              <li><a href="#home" className="hover:text-cyan-400 transition-colors">Home</a></li>
              <li><a href="#events" className="hover:text-cyan-400 transition-colors">Events</a></li>
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">About Us</a></li>
              <li><a href="#register" className="hover:text-cyan-400 transition-colors">Register</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-orbitron text-xs font-bold text-cyan-600 tracking-[0.3em] uppercase mb-6">Connect</h4>
            <ul className="space-y-3 font-outfit text-sm text-gray-500">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">GitHub</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5">
          <p className="font-outfit text-[10px] text-gray-600 tracking-widest uppercase">
            © 2026 VMEDHA – SUDHEE. CHAITANYA BHARATHI INSTITUTE OF TECHNOLOGY.
          </p>
          <p className="font-orbitron text-[10px] text-cyan-900 tracking-tighter mt-4 md:mt-0">
            SYSTEM_PROTOCOL_AUTHORIZED // BUILD_021626
          </p>
        </div>
      </div>
    </footer>
  );
};
