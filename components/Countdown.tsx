
import React, { useState, useEffect } from 'react';

const TARGET_DATE = new Date('2026-02-16T12:00:00').getTime();

export const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = TARGET_DATE - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimerUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="relative group">
        <div className="absolute inset-0 bg-cyan-500/20 blur-xl group-hover:bg-cyan-500/40 transition-all rounded-full" />
        <div className="relative font-orbitron text-5xl md:text-7xl font-bold text-white mb-2 tabular-nums">
          {value.toString().padStart(2, '0')}
        </div>
      </div>
      <span className="font-orbitron text-[10px] md:text-xs tracking-[0.4em] text-cyan-600 uppercase">
        {label}
      </span>
    </div>
  );

  return (
    <div className="w-full flex justify-center py-20">
      <div className="grid grid-cols-4 gap-6 md:gap-16">
        <TimerUnit value={timeLeft.days} label="Days" />
        <TimerUnit value={timeLeft.hours} label="Hours" />
        <TimerUnit value={timeLeft.minutes} label="Mins" />
        <TimerUnit value={timeLeft.seconds} label="Secs" />
      </div>
    </div>
  );
};
