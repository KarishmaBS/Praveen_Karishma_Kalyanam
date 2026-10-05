import React, { useEffect, useState } from 'react';

export const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isCelebration: false,
  });

  useEffect(() => {
    // Wedding Muhurtham: Nov 20, 2026 at 06:00 AM IST (UTC+05:30)
    const weddingDate = new Date('2026-11-20T06:00:00+05:30').getTime();

    const calculate = () => {
      const now = new Date().getTime();
      const diff = weddingDate - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isCelebration: true });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isCelebration: false });
    };

    calculate();
    const interval = setInterval(calculate, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full mt-5 pt-4 bg-[#f7f3ed]/90 rounded-xl p-4 flex flex-col items-center border border-[#775a00]/20 shadow-sm">
      <span className="text-[#775a00] text-xs uppercase tracking-wider mb-2.5 flex items-center gap-1.5 font-semibold">
        <span className="material-symbols-outlined text-sm">schedule</span>
        {timeLeft.isCelebration ? "Today's The Auspicious Day!" : 'Counting Down to the Big Day'}
      </span>

      <div className="grid grid-cols-4 gap-2 w-full max-w-xs text-center">
        <div className="bg-white p-2.5 rounded-lg shadow-sm border border-[#775a00]/15 flex flex-col justify-center">
          <span className="text-xl sm:text-2xl text-[#410f18] block leading-none font-bold font-serif">
            {String(timeLeft.days).padStart(2, '0')}
          </span>
          <span className="text-[10px] text-[#857374] uppercase tracking-wider font-semibold mt-1">
            Days
          </span>
        </div>

        <div className="bg-white p-2.5 rounded-lg shadow-sm border border-[#775a00]/15 flex flex-col justify-center">
          <span className="text-xl sm:text-2xl text-[#410f18] block leading-none font-bold font-serif">
            {String(timeLeft.hours).padStart(2, '0')}
          </span>
          <span className="text-[10px] text-[#857374] uppercase tracking-wider font-semibold mt-1">
            Hours
          </span>
        </div>

        <div className="bg-white p-2.5 rounded-lg shadow-sm border border-[#775a00]/15 flex flex-col justify-center">
          <span className="text-xl sm:text-2xl text-[#410f18] block leading-none font-bold font-serif">
            {String(timeLeft.minutes).padStart(2, '0')}
          </span>
          <span className="text-[10px] text-[#857374] uppercase tracking-wider font-semibold mt-1">
            Mins
          </span>
        </div>

        <div className="bg-white p-2.5 rounded-lg shadow-sm border border-[#775a00]/15 flex flex-col justify-center">
          <span className="text-xl sm:text-2xl text-[#410f18] block leading-none font-bold font-serif">
            {String(timeLeft.seconds).padStart(2, '0')}
          </span>
          <span className="text-[10px] text-[#857374] uppercase tracking-wider font-semibold mt-1">
            Secs
          </span>
        </div>
      </div>
    </div>
  );
};
