import React, { useEffect, useState } from 'react';

interface Petal {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  rotation: number;
  symbol: string;
  color?: string;
  horizontalDrift: number;
}

interface FlowerPetalsShowerProps {
  onComplete?: () => void;
}

export const FlowerPetalsShower: React.FC<FlowerPetalsShowerProps> = ({ onComplete }) => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const flowerSymbols = ['🌸', '🌺', '💮', '🌼', '🏵️', '🌸', '🌺'];
    const generatedPetals: Petal[] = Array.from({ length: 42 }).map((_, idx) => ({
      id: idx,
      left: Math.random() * 96 + 2, // 2% to 98%
      delay: Math.random() * 1.6, // 0 to 1.6s delay for natural cascading shower
      duration: 3.2 + Math.random() * 2.0, // 3.2s to 5.2s fall time
      size: 20 + Math.random() * 18, // 20px to 38px
      rotation: Math.random() * 360,
      symbol: flowerSymbols[Math.floor(Math.random() * flowerSymbols.length)],
      horizontalDrift: (Math.random() - 0.5) * 120, // drift left or right
    }));

    setPetals(generatedPetals);

    const timer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 5200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-50 overflow-hidden"
      aria-hidden="true"
    >
      <style>{`
        @keyframes flowerFall {
          0% {
            transform: translateY(-40px) translateX(0) rotate(0deg) scale(0.7);
            opacity: 0;
          }
          10% {
            opacity: 1;
            transform: translateY(40px) translateX(15px) rotate(45deg) scale(1);
          }
          75% {
            opacity: 0.95;
          }
          100% {
            transform: translateY(105vh) translateX(var(--drift)) rotate(720deg) scale(0.9);
            opacity: 0;
          }
        }
      `}</style>
      {petals.map((petal) => (
        <span
          key={petal.id}
          className="absolute select-none filter drop-shadow-sm will-change-transform"
          style={{
            left: `${petal.left}%`,
            top: `-30px`,
            fontSize: `${petal.size}px`,
            animation: `flowerFall ${petal.duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${petal.delay}s forwards`,
            ['--drift' as any]: `${petal.horizontalDrift}px`,
          }}
        >
          {petal.symbol}
        </span>
      ))}
    </div>
  );
};
