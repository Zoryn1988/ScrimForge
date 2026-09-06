import React from 'react';
import { Swords, Shield, Flame, Zap } from 'lucide-react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ size = 'md', showText = true, className = '' }) => {
  const sizes = {
    sm: { icon: 'w-6 h-6', text: 'text-lg' },
    md: { icon: 'w-8 h-8', text: 'text-xl' },
    lg: { icon: 'w-10 h-10', text: 'text-2xl' },
    xl: { icon: 'w-14 h-14', text: 'text-4xl' },
  }[size];

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="relative">
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-400/30 to-blue-600/20 blur-md" />
        <div className="relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-[#00F0FF]/20 to-[#0070F3]/10 border border-cyan-400/40">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-cyan-400/5 to-transparent" />
          <Swords className="w-6 h-6 md:w-7 md:h-7 text-cyan-400 drop-shadow-[0_0_8px_rgba(0,240,255,0.6)]" />
          <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-cyan-300 blur-[2px] animate-pulse" />
        </div>
      </div>
      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`font-orbitron font-black tracking-tight text-white ${size === 'sm' ? 'text-lg' : size === 'md' ? 'text-2xl' : size === 'lg' ? 'text-3xl' : 'text-4xl'}`}>
            Scrim<span className="text-cyan-400">Forge</span>
          </span>
          <span className="text-[9px] md:text-[10px] font-mono tracking-[0.3em] text-slate-500 uppercase mt-0.5">
            Competitive Platform
          </span>
        </div>
      )}
    </div>
  );
};