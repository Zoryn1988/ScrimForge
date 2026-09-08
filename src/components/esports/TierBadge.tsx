import React from 'react';
import { LeagueTier } from '@/data/mockData';
import { Shield, Sparkles } from 'lucide-react';

interface TierBadgeProps {
  tier: LeagueTier;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  className?: string;
}

const tierConfig: Record<LeagueTier, {
  label: string;
  badgeBg: string;
  textColor: string;
  borderColor: string;
  glowColor: string;
  subLabel: string;
}> = {
  Challenger: {
    label: 'Challenger',
    badgeBg: 'bg-gradient-to-r from-amber-500/20 via-cyan-500/20 to-sky-400/20',
    textColor: 'text-amber-300',
    borderColor: 'border-amber-400/50 shadow-[0_0_15px_rgba(245,158,11,0.3)]',
    glowColor: '#F59E0B',
    subLabel: 'Rank 1 Tier',
  },
  Grandmaster: {
    label: 'Grandmaster',
    badgeBg: 'bg-gradient-to-r from-red-600/20 via-rose-500/20 to-amber-500/15',
    textColor: 'text-rose-400',
    borderColor: 'border-rose-500/50 shadow-[0_0_15px_rgba(244,63,94,0.3)]',
    glowColor: '#F43F5E',
    subLabel: 'Top 0.05%',
  },
  Master: {
    label: 'Master',
    badgeBg: 'bg-gradient-to-r from-purple-600/20 via-violet-500/20 to-indigo-500/15',
    textColor: 'text-purple-300',
    borderColor: 'border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.3)]',
    glowColor: '#A855F7',
    subLabel: 'Elite Tier',
  },
  Diamond: {
    label: 'Diamond',
    badgeBg: 'bg-gradient-to-r from-cyan-600/20 via-blue-500/20 to-sky-500/15',
    textColor: 'text-cyan-300',
    borderColor: 'border-cyan-400/50 shadow-[0_0_15px_rgba(6,182,212,0.3)]',
    glowColor: '#06B6D4',
    subLabel: 'High Tier',
  },
  Emerald: {
    label: 'Emerald',
    badgeBg: 'bg-gradient-to-r from-emerald-600/20 via-green-500/20 to-teal-500/15',
    textColor: 'text-emerald-300',
    borderColor: 'border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.3)]',
    glowColor: '#10B981',
    subLabel: 'Mid-High Tier',
  },
  Platinum: {
    label: 'Platinum',
    badgeBg: 'bg-gradient-to-r from-slate-600/20 via-gray-500/20 to-zinc-500/15',
    textColor: 'text-slate-300',
    borderColor: 'border-slate-400/50 shadow-[0_0_15px_rgba(148,163,184,0.3)]',
    glowColor: '#94A3B8',
    subLabel: 'Mid Tier',
  },
  Gold: {
    label: 'Gold',
    badgeBg: 'bg-gradient-to-r from-yellow-600/20 via-yellow-500/20 to-amber-500/15',
    textColor: 'text-yellow-300',
    borderColor: 'border-yellow-500/50 shadow-[0_0_15px_rgba(234,179,8,0.3)]',
    glowColor: '#EAB308',
    subLabel: 'Above Average',
  },
  Silver: {
    label: 'Silver',
    badgeBg: 'bg-gradient-to-r from-gray-600/20 via-slate-500/20 to-zinc-500/15',
    textColor: 'text-slate-300',
    borderColor: 'border-slate-400/50 shadow-[0_0_15px_rgba(148,163,184,0.3)]',
    glowColor: '#94A3B8',
    subLabel: 'Average',
  },
  Bronze: {
    label: 'Bronze',
    badgeBg: 'bg-gradient-to-r from-orange-800/20 via-orange-700/20 to-amber-900/15',
    textColor: 'text-orange-400',
    borderColor: 'border-orange-700/50 shadow-[0_0_15px_rgba(194,65,12,0.3)]',
    glowColor: '#C2410C',
    subLabel: 'Below Average',
  },
  Iron: {
    label: 'Iron',
    badgeBg: 'bg-gradient-to-r from-zinc-800/20 via-zinc-700/20 to-zinc-900/15',
    textColor: 'text-zinc-500',
    borderColor: 'border-zinc-600/50 shadow-[0_0_15px_rgba(39,39,42,0.3)]',
    glowColor: '#3F3F46',
    subLabel: 'Entry Tier',
  },
};

export const TierBadge: React.FC<TierBadgeProps> = ({
  tier,
  size = 'md',
  showLabel = true,
  className = '',
}) => {
  const config = tierConfig[tier] || tierConfig.Diamond;

  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs font-mono tracking-wider',
    md: 'px-2.5 py-1 text-xs font-mono tracking-wider',
    lg: 'px-3.5 py-1.5 text-sm font-mono tracking-widest',
  }[size];

  const iconSizes = {
    sm: 'w-3 h-3',
    md: 'w-3.5 h-3.5',
    lg: 'w-4 h-4',
  }[size];

  return (
    <div
      className={`inline-flex items-center gap-1.5 rounded border ${config.borderColor} ${config.badgeBg} ${sizeClasses} backdrop-blur-md ${className}`}
    >
      <Shield className={`${iconSizes} ${config.textColor} fill-current/30 shrink-0`} />
      {showLabel && (
        <span className={`font-bold uppercase tracking-wider ${config.textColor}`}>
          {config.label}
        </span>
      )}
      {size === 'lg' && (
        <Sparkles className="w-3 h-3 text-cyan-400 animate-pulse ml-0.5" />
      )}
    </div>
  );
};
