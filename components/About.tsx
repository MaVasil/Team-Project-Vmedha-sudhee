
import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="glass-panel p-10 md:p-20 rounded-3xl relative overflow-hidden">
        {/* Background visual decor */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-cyan-500/5 -skew-x-12 transform translate-x-1/2" />
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="font-orbitron text-xs tracking-[0.5em] text-cyan-600 uppercase mb-4 block">
              Identity Matrix
            </span>
            <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-8">
              ABOUT <span className="text-cyan-400 glow-cyan">VMEDHA</span>
            </h2>
            <p className="font-outfit text-lg text-gray-300 mb-6 leading-relaxed">
              VMEDHA is a student-driven technical hub at CBIT focused on fostering the next generation of leadership and technical mastery.
            </p>
            <p className="font-outfit text-gray-400 mb-8 leading-relaxed">
              We operate on a no-cost knowledge sharing model, conducting workshops, hackathons, and challenges designed to bridge the gap between academic theory and industry reality.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="border-l-2 border-cyan-500/30 pl-4">
                <span className="font-orbitron text-xl font-bold text-white block">SOCIETAL</span>
                <span className="font-outfit text-xs text-gray-500 uppercase tracking-widest">Impact Goal</span>
              </div>
              <div className="border-l-2 border-cyan-500/30 pl-4">
                <span className="font-orbitron text-xl font-bold text-white block">ZERO COST</span>
                <span className="font-outfit text-xs text-gray-500 uppercase tracking-widest">Accessibility</span>
              </div>
            </div>
          </div>

          <div className="relative">
             <div className="absolute -inset-4 border border-cyan-500/20 rounded-2xl -z-10" />
             <div className="grid grid-cols-1 gap-4">
               {[
                 { title: "Technical Workshops", desc: "Deep dives into emerging tech." },
                 { title: "Hackathons", desc: "Build systems that solve real problems." },
                 { title: "School Outreach", desc: "Spreading technical literacy to students." }
               ].map((item, idx) => (
                 <div key={idx} className="bg-black/40 border border-white/5 p-6 rounded-xl hover:border-cyan-500/50 transition-all group">
                   <h4 className="font-orbitron text-sm font-bold text-cyan-400 mb-1">{item.title}</h4>
                   <p className="font-outfit text-xs text-gray-500">{item.desc}</p>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
