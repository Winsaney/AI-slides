import React from 'react';
import { VideoBackground } from '../components/VideoBackground';
import { Header } from '../components/Header';

export const IntroSlide: React.FC = () => {
  return (
    <div className="relative w-full h-full">
      <VideoBackground src="https://stream.mux.com/Kec29dVyJgiPdtWaQtPuEiiGHkJIYQAVUJcNiIHUYeo.m3u8" />
      
      <Header centerText="Pitch Deck" rightText="Page 001" />

      <div className="relative z-10 pt-[15%] px-[5.2%] h-full flex flex-col">
        <h2 className="text-[clamp(28px,3.3vw,64px)] font-bold tracking-[-0.02em] leading-[1.05]">
          The Rise of AI <br /> in Data Analytics
        </h2>

        <div className="flex mt-[3.5%] gap-[4%] items-start">
          {/* Column 1 */}
          <div className="flex-[0_0_22%] flex flex-col">
            <p className="text-[clamp(13px,1.05vw,20px)] text-white/90 leading-[1.5] mb-[10%]">
              The AI analytics market is experiencing unprecedented growth, expanding from $150B to $300B as organizations recognize the transformative power of intelligent data processing.
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-[clamp(28px,3.3vw,64px)] font-bold tracking-tight">$300B</span>
              <span className="text-[clamp(13px,1.05vw,20px)] text-white/80 font-medium">2027</span>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex-[0_0_38%]">
            <p className="text-[clamp(13px,1.05vw,20px)] text-white/90 leading-[1.5]">
              Businesses across all sectors are rapidly adopting AI-driven analysis to gain a competitive edge. Traditional data processing methods are no longer sufficient to handle the volume, velocity, and variety of modern data streams. By leveraging machine learning algorithms and predictive models, companies can uncover hidden patterns, automate complex decision-making processes, and forecast future trends with remarkable accuracy. This shift from descriptive to prescriptive analytics is fundamentally changing how organizations operate, allowing them to anticipate market shifts and customer needs before they happen.
            </p>
          </div>

          {/* Column 3 */}
          <div className="flex-[0_0_20%] flex flex-col h-full">
            <div className="text-[clamp(28px,3.3vw,64px)] font-bold tracking-tight">25–40%</div>
            <p className="text-[clamp(13px,1.05vw,20px)] text-white/90 leading-[1.5] mt-2 mb-8">
              Increase in operational efficiency reported by early adopters of AI analytics platforms.
            </p>
            
            {/* Mini SVG Line Graph */}
            <div className="mt-auto w-full aspect-[2/1] relative">
              <svg viewBox="0 0 200 100" className="w-full h-full overflow-visible">
                <defs>
                  <linearGradient id="graphGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#D2FF55" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#D2FF55" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,80 C40,80 60,40 100,50 C140,60 160,20 200,10 L200,100 L0,100 Z"
                  fill="url(#graphGradient)"
                />
                <path
                  d="M0,80 C40,80 60,40 100,50 C140,60 160,20 200,10"
                  fill="none"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <circle cx="0" cy="80" r="4" fill="#B750B2" stroke="white" strokeWidth="2" />
                <circle cx="200" cy="10" r="4" fill="#B750B2" stroke="white" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[4%] right-[5.2%] z-20 text-[clamp(12px,1.05vw,20px)] text-white/60 font-medium tracking-widest">
        The Rise of AI
      </div>
    </div>
  );
};
