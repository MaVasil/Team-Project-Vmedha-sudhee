
import React from 'react';

const events = [
  {
    id: 'cipherville',
    title: 'CIPHERVILLE',
    tagline: 'Technical Mystery Hunt',
    description: 'A multi-round investigation involving scavenger hunts and SQL-based logic puzzles. Put your deduction skills to the ultimate test.',
    icon: (
      <svg className="w-12 h-12 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    )
  },
  {
    id: 'ethi-tech',
    title: 'ETHI TECH MANIA',
    tagline: 'Aptitude & Ethics',
    description: 'Explore the junction of high-level logical reasoning and ethical decision-making in computer science fundamentals.',
    icon: (
      <svg className="w-12 h-12 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    id: 'dsa-master',
    title: 'CBIT DSA MASTER',
    tagline: 'Competitive DSA',
    description: 'The ultimate battlefield for competitive programmers. Optimize your algorithms to solve complex digital ecosystem challenges.',
    icon: (
      <svg className="w-12 h-12 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  }
];

export const Events: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col items-center mb-16 text-center">
        <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-4">
          EXPLORE THE <span className="text-cyan-400 glow-cyan">EXPEDITIONS</span>
        </h2>
        <div className="w-24 h-1 bg-cyan-500/50 mb-4" />
        <p className="font-outfit text-gray-400 max-w-xl">
          Three unique technical domains designed to test your precision, logic, and mastery.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {events.map((event) => (
          <div 
            key={event.id}
            className="group relative h-full glass-panel p-8 rounded-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
          >
            {/* Hover glow background */}
            <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute -right-4 -top-4 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all duration-500" />
            
            <div className="relative z-10">
              <div className="mb-6 p-3 bg-cyan-950/40 rounded-lg inline-block group-hover:scale-110 transition-transform duration-500">
                {event.icon}
              </div>
              <h3 className="font-orbitron text-2xl font-bold text-white mb-2 tracking-wide group-hover:text-cyan-300 transition-colors">
                {event.title}
              </h3>
              <p className="font-orbitron text-[10px] tracking-[0.2em] text-cyan-600 uppercase mb-4">
                {event.tagline}
              </p>
              <p className="font-outfit text-gray-400 leading-relaxed">
                {event.description}
              </p>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          </div>
        ))}
      </div>
    </div>
  );
};
