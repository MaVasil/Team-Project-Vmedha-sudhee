
import React, { useState } from 'react';

const faqs = [
  {
    q: "What activities does the VMEDHA club conduct?",
    a: "VMEDHA organizes technical workshops, hackathons, coding competitions, and awareness sessions. The club also focuses on giving back to society by sharing knowledge with school and college students in an engaging way."
  },
  {
    q: "Do participants receive certificates?",
    a: "Yes. Participants and active members receive official e-certificates for completion of selected events and activities during SUDHEE 2026."
  },
  {
    q: "What will I gain by joining VMEDHA?",
    a: "Members gain communication skills, leadership qualities, time management abilities, and practical exposure to various technical domains."
  },
  {
    q: "Is there any fee to be part of VMEDHA?",
    a: "No. VMEDHA is completely free of cost. Our core idea is to provide exposure and technical knowledge to society without any financial barrier."
  },
  {
    q: "Who can participate in SUDHEE 2026?",
    a: "All students with a passion for technology, logic, and problem-solving are welcome to register and participate."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="container mx-auto px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4">
            FREQUENTLY <span className="text-cyan-400">ASKED</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-500 mx-auto" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              className={`glass-panel rounded-lg overflow-hidden border transition-all duration-300 ${
                openIndex === idx ? 'border-cyan-500/50' : 'border-white/5'
              }`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-cyan-500/5 transition-colors"
              >
                <span className="font-orbitron text-sm md:text-base font-medium tracking-wide">
                  {faq.q}
                </span>
                <svg 
                  className={`w-5 h-5 text-cyan-500 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === idx ? 'max-h-48 opacity-100 p-6 pt-0' : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                <p className="font-outfit text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
