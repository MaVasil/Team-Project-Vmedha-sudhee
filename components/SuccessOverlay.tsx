
import React, { useEffect } from 'react';

interface SuccessProps {
  details: { event: string; timestamp: string };
  onClose: () => void;
}

export const SuccessOverlay: React.FC<SuccessProps> = ({ details, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'auto'; };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-xl animate-fade-in" />
      
      <div className="relative glass-panel max-w-lg w-full p-10 rounded-2xl border-2 border-cyan-500 shadow-[0_0_50px_rgba(8,145,178,0.3)] text-center animate-scale-up">
        <div className="w-20 h-20 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
          <svg className="w-10 h-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h2 className="font-orbitron text-3xl font-black text-white mb-4 tracking-wider">
          INITIALIZATION <span className="text-cyan-400">SUCCESSFUL</span>
        </h2>
        <p className="font-outfit text-gray-400 mb-8 leading-relaxed">
          Welcome to <span className="text-white font-bold">VMEDHA – SUDHEE 2026</span>. Your authorization has been confirmed.
        </p>

        <div className="bg-cyan-950/30 border border-cyan-900/50 p-6 rounded-xl mb-10 text-left space-y-3 font-orbitron">
           <div className="flex justify-between text-[10px] text-cyan-700">
             <span>FIELD</span>
             <span>VALUE</span>
           </div>
           <div className="h-[1px] bg-cyan-900/30" />
           <div className="flex justify-between">
             <span className="text-cyan-600">EXPEDITION</span>
             <span className="text-white text-xs">{details.event}</span>
           </div>
           <div className="flex justify-between">
             <span className="text-cyan-600">TIMESTAMP</span>
             <span className="text-white text-xs">{details.timestamp}</span>
           </div>
           <div className="flex justify-between">
             <span className="text-cyan-600">STATUS</span>
             <span className="text-green-400 text-xs tracking-widest">AUTHORIZED</span>
           </div>
        </div>

        <button 
          onClick={onClose}
          className="w-full py-4 bg-transparent border border-cyan-500 text-cyan-400 font-orbitron font-bold tracking-widest hover:bg-cyan-500 hover:text-black transition-all rounded"
        >
          CLOSE PORTAL
        </button>
      </div>

      <style>{`
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scale-up { from { opacity: 0; transform: scale(0.9) translateY(20px); } to { opacity: 1; transform: scale(1) translateY(0); } }
        .animate-fade-in { animation: fade-in 0.3s ease-out; }
        .animate-scale-up { animation: scale-up 0.5s cubic-bezier(0.16, 1, 0.3, 1); }
      `}</style>
    </div>
  );
};
