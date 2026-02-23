import React from 'react';
import { VideoBackground } from '../components/VideoBackground';

export const QuoteSlide: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      <VideoBackground src="https://stream.mux.com/4IMYGcL01xjs7ek5ANO17JC4VQVUTsojZlnw4fXzwSxc.m3u8" />
      
      <div className="relative z-10 flex flex-col items-center text-center max-w-[70%] gap-[12px]">
        <p className="text-[clamp(14px,1.25vw,20px)] text-white/90 font-medium uppercase tracking-widest">
          Andrew Ng
        </p>
        <h2 className="text-[clamp(28px,3.3vw,64px)] font-bold tracking-[-0.02em] leading-[1.15]">
          &ldquo;Artificial Intelligence is the new electricity.&rdquo;
        </h2>
      </div>
    </div>
  );
};
