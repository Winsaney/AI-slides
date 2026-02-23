import React from 'react';
import { Logo } from './Logo';

interface HeaderProps {
  centerText?: string;
  rightText?: string;
}

export const Header: React.FC<HeaderProps> = ({ centerText, rightText }) => {
  return (
    <div className="absolute top-[4%] left-[5.2%] right-[5.2%] flex justify-between items-center z-20">
      <Logo className="w-[129px] h-[40px]" />
      {centerText && (
        <div className="absolute left-1/2 -translate-x-1/2 text-[clamp(12px,1.05vw,20px)] text-white/80 font-medium tracking-wide">
          {centerText}
        </div>
      )}
      {rightText && (
        <div className="text-[clamp(12px,1.05vw,20px)] text-white/80 font-medium tracking-wide">
          {rightText}
        </div>
      )}
    </div>
  );
};
