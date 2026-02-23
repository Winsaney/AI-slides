import React from 'react';
import { VideoBackground } from '../components/VideoBackground';
import { Header } from '../components/Header';

export const CoverSlide: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      <VideoBackground src="https://stream.mux.com/JNJEOYI6B3EffB9f5ZhpGbuxzc6gSyJcXaCBbCgZKRg.m3u8" />
      
      <Header rightText="Pitch Deck" />

      <div className="relative z-10 flex flex-col items-center text-center -mt-[3%]">
        <h1 className="text-[clamp(32px,5vw,96px)] font-bold tracking-[-0.02em] leading-[1.05]">
          AI-Powered Data Analytics
        </h1>
        <p className="text-[clamp(20px,2.5vw,48px)] text-white/90 mt-[1.5%] font-medium">
          Unlocking Business Potential
        </p>
        <p className="text-[clamp(14px,1.25vw,24px)] text-white/75 mt-[2%]">
          By Nick Wang
        </p>
      </div>

      <div className="absolute bottom-[4%] left-1/2 -translate-x-1/2 z-20 text-[clamp(12px,1.05vw,20px)] text-white/60 font-medium tracking-widest">
        2026
      </div>
    </div>
  );
};
