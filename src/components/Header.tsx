import React, { useState, useRef, useEffect } from 'react';
import { Palette, Play, Pause, Volume2 } from 'lucide-react';

const Header: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch(() => {
        // Autoplay was prevented by the browser
        setIsPlaying(false);
      });
      setIsPlaying(true);
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-opacity-80 backdrop-blur-md transition-all duration-300 ease-in-out">
      <audio
        ref={audioRef}
        src="https://github.com/funuttt/sounbd/raw/refs/heads/main/onimai%20diss%20track.mp3"
      />
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex flex-col">
          <div className="flex items-center">
            <Palette className="w-6 h-6 text-white" />
            <span className="ml-2 font-bold tracking-tight text-white">
              made by funut
            </span>
          </div>
          <span className="text-sm text-gray-400 ml-8">
            hosted by wxstbound
          </span>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={togglePlay}
            className="relative group p-3 rounded-full bg-purple-500/20 hover:bg-purple-500/30 transition-all duration-300"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 text-white" />
            ) : (
              <Play className="w-6 h-6 text-white" />
            )}
            <div className="absolute inset-0 rounded-full border border-purple-500/50 group-hover:scale-110 transition-transform duration-300" />
          </button>

          <div className="flex items-center gap-2">
            <Volume2 className="w-5 h-5 text-white/70" />
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="w-24 h-1 bg-purple-500/20 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-purple-500 hover:[&::-webkit-slider-thumb]:bg-purple-400 transition-colors"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
