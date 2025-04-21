import React, { useEffect, useRef } from 'react';
import Fireworks from '@/components/effects/Fireworks';
import { ChevronLeft } from 'lucide-react';

interface CelebrationProps {
  name: string;
  onBack: () => void;
}

const BirthdayCelebration = ({ name, onBack }: CelebrationProps) => {
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
    <div className="min-h-screen flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9')] bg-cover bg-center relative overflow-hidden">
      <audio ref={audioRef} src="src/assets/happy-birthday-314197.mp3" loop />
      <button 
      onClick={onBack} 
      className="absolute top-6 left-6 bg-white/30 hover:bg-white/50 p-3 rounded-full transition-colors backdrop-blur-sm z-20"
      aria-label="Back to home"
      >
      <ChevronLeft color="white" size={28} />
      </button>
      <div className="absolute inset-0 bg-black/50" />
      <Fireworks />
      <div className="relative z-10 text-center space-y-6 animate-fade-in">
      <h1 className="text-6xl font-bold text-white">
        Happy Birthday!
      </h1>
      <p className="text-4xl text-white">
        {name}
      </p>
      <div className="text-2xl text-white opacity-90">
        Wishing you a fantastic day filled with joy and laughter! 🎉
      </div>
      </div>
    </div>
  );
};

export default BirthdayCelebration;
