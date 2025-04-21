
import React, { useEffect, useRef } from 'react';
import { ChevronLeft } from 'lucide-react';

interface CelebrationProps {
  name: string;
  onBack: () => void;
}

const FarewellCelebration = ({ name, onBack }: CelebrationProps) => {
  const quotes = [
    "Thank you for being an amazing colleague and friend.",
    "Your contribution will always be remembered.",
    "Wishing you success in your new journey!",
    "You will be missed, but never forgotten.",
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  const audioRef = useRef<HTMLAudioElement | null>(null);
  
    useEffect(() => {
      const audio = audioRef.current;
      if (audio) {
        audio.play().catch((err) => console.error('Failed to play audio:', err));
      }
      return () => {
        if (audio) {
          audio.pause();
          audio.currentTime = 0;
        }
      };
    }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07')] bg-cover bg-center relative overflow-hidden">
      <audio ref={audioRef} src="src/assets/motivate-corporate-116698.mp3" loop />
      <button 
        onClick={onBack} 
        className="absolute top-6 left-6 bg-white/30 hover:bg-white/50 p-3 rounded-full transition-colors backdrop-blur-sm z-20"
        aria-label="Back to home"
      >
        <ChevronLeft color="white" size={28} />
      </button>
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 text-center space-y-8 max-w-3xl mx-auto p-6 animate-fade-in">
        <h1 className="text-6xl font-bold text-white">
          Farewell, {name}
        </h1>
        <p className="text-2xl text-white italic">
          "{randomQuote}"
        </p>
        <div className="text-xl text-white opacity-90">
          We wish you the very best in your future endeavors! 🌟
        </div>
      </div>
    </div>
  );
};

export default FarewellCelebration;
