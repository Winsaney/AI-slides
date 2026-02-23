import React from 'react';
import { VideoBackground } from '../components/VideoBackground';
import { Header } from '../components/Header';
import { Phone, Mail, MapPin } from 'lucide-react';

export const OutroSlide: React.FC = () => {
  return (
    <div className="relative w-full h-full">
      <VideoBackground src="https://stream.mux.com/00qQnfNo7sSpn3pB1hYKkyeSDvxs01NxiQ3sr29uL3e028.m3u8" />

      <Header centerText="Pitch Deck" rightText="Page 020" />

      <div className="relative z-10 px-[5.2%] h-full flex flex-col justify-center">
        <h2 className="text-[clamp(28px,3.3vw,64px)] font-bold tracking-[-0.02em] leading-[1.05]">
          Contact Information & <br /> Final Call to Action
        </h2>

        <p className="text-[clamp(13px,1.05vw,20px)] text-white/90 leading-[1.5] max-w-[38%] mt-[3%]">
          Ready to transform your business with AI-powered analytics? Reach out to our team to schedule a demo and discover how our solutions can unlock your data's full potential.
        </p>

        <div className="flex flex-col gap-[clamp(12px,1.5vw,19px)] mt-[3%]">
          <div className="flex items-center gap-4">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white w-[clamp(24px,2vw,32px)] h-[clamp(24px,2vw,32px)]">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <span className="text-[clamp(13px,1.05vw,20px)] font-medium">http://Instagram.com/Nick</span>
          </div>

          <div className="flex items-center gap-4">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white w-[clamp(24px,2vw,32px)] h-[clamp(24px,2vw,32px)]">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
            <span className="text-[clamp(13px,1.05vw,20px)] font-medium">http://Facebook.com/Nick</span>
          </div>

          <div className="flex items-center gap-4">
            <Phone className="text-white w-[clamp(24px,2vw,32px)] h-[clamp(24px,2vw,32px)]" strokeWidth={2} />
            <span className="text-[clamp(13px,1.05vw,20px)] font-medium">+86 13066668888</span>
          </div>

          <div className="flex items-center gap-4">
            <Mail className="text-white w-[clamp(24px,2vw,32px)] h-[clamp(24px,2vw,32px)]" strokeWidth={2} />
            <span className="text-[clamp(13px,1.05vw,20px)] font-medium">contact@Nick.com</span>
          </div>

          <div className="flex items-center gap-4">
            <MapPin className="text-white w-[clamp(24px,2vw,32px)] h-[clamp(24px,2vw,32px)]" strokeWidth={2} />
            <span className="text-[clamp(13px,1.05vw,20px)] font-medium">Headquarters: Shanghai, CN</span>
          </div>
        </div>
      </div>
    </div>
  );
};
