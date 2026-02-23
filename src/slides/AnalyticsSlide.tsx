import React from 'react';
import { VideoBackground } from '../components/VideoBackground';
import { Header } from '../components/Header';
import { Monitor, Brain, Briefcase, Lightbulb, Shield } from 'lucide-react';

export const AnalyticsSlide: React.FC = () => {
  return (
    <div className="relative w-full h-full">
      <VideoBackground src="https://stream.mux.com/fHfa8VIbBdqZelLGg5thjsypZ101M01dbyIMLNDWQwlLA.m3u8" />
      
      <Header centerText="Pitch Deck" rightText="Page 002" />

      <div className="relative z-10 pt-[12%] px-[5.2%] h-full flex flex-col pb-[8%]">
        <div className="flex flex-col items-center text-center mb-[4%]">
          <p className="text-[clamp(14px,1.25vw,24px)] text-white/90 font-medium mb-1">
            Transforming Data into Intelligence with
          </p>
          <h2 className="text-[clamp(28px,3.3vw,64px)] font-bold tracking-[-0.02em] leading-[1.05]">
            AI-Powered Analytics
          </h2>
        </div>

        <div className="flex-1 flex flex-col gap-[clamp(10px,1.5vw,27px)]">
          {/* Top Row */}
          <div className="flex-1 flex gap-[clamp(10px,1.5vw,27px)]">
            <div className="flex-1 liquid-glass rounded-2xl flex flex-col justify-end p-[clamp(20px,2.5vw,48px)]">
              <Monitor className="text-white mb-4 w-[clamp(32px,2.5vw,48px)] h-[clamp(32px,2.5vw,48px)]" strokeWidth={1.5} />
              <h3 className="text-[clamp(18px,1.8vw,36px)] font-bold tracking-tight mb-2 leading-tight">
                Advanced Capabilities
              </h3>
              <p className="text-[clamp(12px,1.05vw,20px)] text-white/80 leading-snug">
                Real-time processing, predictive analytics, and machine learning.
              </p>
            </div>
            
            <div className="flex-1 liquid-glass rounded-2xl flex flex-col justify-end p-[clamp(20px,2.5vw,48px)]">
              <Brain className="text-white mb-4 w-[clamp(32px,2.5vw,48px)] h-[clamp(32px,2.5vw,48px)]" strokeWidth={1.5} />
              <h3 className="text-[clamp(18px,1.8vw,36px)] font-bold tracking-tight mb-2 leading-tight">
                Smarter Decision-Making
              </h3>
              <p className="text-[clamp(12px,1.05vw,20px)] text-white/80 leading-snug">
                Helping businesses unlock insights and optimize efficiency.
              </p>
            </div>

            <div className="flex-1 liquid-glass rounded-2xl flex flex-col justify-end p-[clamp(20px,2.5vw,48px)]">
              <Briefcase className="text-white mb-4 w-[clamp(32px,2.5vw,48px)] h-[clamp(32px,2.5vw,48px)]" strokeWidth={1.5} />
              <h3 className="text-[clamp(18px,1.8vw,36px)] font-bold tracking-tight mb-2 leading-tight">
                Industry Leader
              </h3>
              <p className="text-[clamp(12px,1.05vw,20px)] text-white/80 leading-snug">
                Driving AI-driven data analytics innovation.
              </p>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="flex-1 flex gap-[clamp(10px,1.5vw,25px)]">
            <div className="flex-1 liquid-glass rounded-2xl flex flex-col justify-end p-[clamp(20px,2.5vw,48px)]">
              <Lightbulb className="text-white mb-4 w-[clamp(32px,2.5vw,48px)] h-[clamp(32px,2.5vw,48px)]" strokeWidth={1.5} />
              <h3 className="text-[clamp(18px,1.8vw,36px)] font-bold tracking-tight mb-2 leading-tight">
                Future-Ready Solutions
              </h3>
              <p className="text-[clamp(12px,1.05vw,20px)] text-white/80 leading-snug">
                Empowering organizations to stay competitive in a data-driven world.
              </p>
            </div>

            <div className="flex-1 liquid-glass rounded-2xl flex flex-col justify-end p-[clamp(20px,2.5vw,48px)]">
              <Shield className="text-white mb-4 w-[clamp(32px,2.5vw,48px)] h-[clamp(32px,2.5vw,48px)]" strokeWidth={1.5} />
              <h3 className="text-[clamp(18px,1.8vw,36px)] font-bold tracking-tight mb-2 leading-tight">
                Scalable & Secure
              </h3>
              <p className="text-[clamp(12px,1.05vw,20px)] text-white/80 leading-snug">
                Ensuring seamless AI integration with robust data protection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
