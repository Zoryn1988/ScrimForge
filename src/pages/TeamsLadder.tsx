import React, { useMemo } from 'react'; // test
import { 
  Trophy, 
  Search,
  Award,
  Crown
} from 'lucide-react';
import { Team, TOP_100_TEAMS } from '@/data/mockData';


// Helper to add more data for other tiers if needed for testing
// In a real app, this would come from an API.

interface TeamRankEntry {
  rank: number;
  team: Team;
}

export const TeamsLadder: React.FC = () => {

  const currentTeams: TeamRankEntry[] = useMemo(() => {
    const sortedTeams = [...TOP_100_TEAMS].sort((a, b) => b.scrimElo - a.scrimElo);
    return sortedTeams.map((team, index) => ({
      rank: index + 1,
      team,
    }));
  }, []);

  const getWinRate = (wins: number, losses: number) => {
    const total = wins + losses;
    return total === 0 ? 0 : Math.round((wins / total) * 100);
  };

  return (
    <div className="min-h-screen bg-[#060A10] text-slate-200 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="relative mb-12 overflow-hidden rounded-3xl border border-white/5 bg-[#0A0F16]/40 backdrop-blur-md">
          {/* Background Glows */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-red-900/10 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="relative p-8 md:p-12">
            <div className="flex flex-col items-start gap-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-red-600/10 border border-red-600/20">
                  <Trophy className="w-8 h-8 text-red-600" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.3em] text-red-500 mb-1">Competitive Rankings</div>
                  <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-white tracking-tighter">
                    SCRIMFORGE <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">LADDER</span>
                  </h1>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between w-full gap-6">
                <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
                  The definitive global ranking of the top 100 ScrimForge teams. 
                  <span className="text-slate-200"> Forge your legacy, climb the tiers, and dominate the competitive landscape.</span>
                </p>
                
                <div className="flex items-center gap-4 px-6 py-3 rounded-xl bg-white/5 border border-white/10 shrink-0">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Powered by</span>
                    <span className="text-sm font-bold text-red-500 font-mono">SFR RATING SYSTEM</span>
                  </div>
                  <div className="w-px h-8 bg-white/10" />
                  <div className="flex items-center gap-2 text-red-500/80">
                    <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-tighter">Live Data</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />
        </div>


        {/* Main Content */}
        {/* Leaderboard Section */}
        <div className="relative bg-[#0D1117] border border-white/5 rounded-2xl overflow-hidden shadow-2xl shadow-red-950/20">
          {/* Subtle Top Accent */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-900/50 to-transparent" />
          {/* Table Header */}
          <div className="hidden md:grid grid-cols-12 gap-4 px-8 py-4 bg-gradient-to-b from-white/[0.03] to-transparent border-b border-white/5 text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500">
            <div className="col-span-1 text-center">Rank</div>
            <div className="col-span-4">Team</div>
            <div className="col-span-2 text-center">SFR</div>
            <div className="col-span-1 text-center">W/L</div>
            <div className="col-span-2 text-center">Win Rate</div>
            <div className="col-span-2 text-right">Avg Rank</div>
          </div>

          {/* List */}
          <div className="divide-y divide-white/5">
            {currentTeams.length > 0 ? (
              currentTeams.map((entry) => (
                <div 
                  key={entry.team.id}
                  className={`grid grid-cols-1 md:grid-cols-12 gap-4 px-6 py-4 items-center transition-colors group ${
  entry.rank === 1 ? 'bg-amber-400/[0.05] hover:bg-amber-400/[0.08]' :
  entry.rank === 2 ? 'bg-slate-300/[0.05] hover:bg-slate-300/[0.08]' :
  entry.rank === 3 ? 'bg-orange-400/[0.05] hover:bg-orange-400/[0.08]' :
  'hover:bg-red-600/[0.03]'
}`}
                >
                  {/* Rank */}
                  <div className="col-span-1 flex items-center justify-center">
                    <span className={`text-lg font-orbitron font-bold transition-colors ${
                      entry.rank === 1 ? 'text-amber-500' :
                      entry.rank === 2 ? 'text-slate-400' :
                      entry.rank === 3 ? 'text-orange-600' :
                      'text-slate-500 group-hover:text-red-500'
                    }`}>
                      #{entry.rank}
                    </span>
                      

                    </div>
                  </div>

                  {/* Team Info */}
                  <div className="col-span-4 flex items-center gap-4">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-xl overflow-hidden border border-white/10 shadow-xl bg-white/5">
                        <img 
                          src={entry.team.logo} 
                          alt={entry.team.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className={`text-lg font-extrabold tracking-tight transition-colors cursor-pointer group-hover:text-red-500 ${
                          entry.rank === 1 ? 'text-amber-50' :
                          entry.rank === 2 ? 'text-slate-50' :
                          entry.rank === 3 ? 'text-orange-50' :
                          'text-white'
                        }`}>
                          {entry.team.name}
                        </h3>
                        <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400 bg-white/5 px-1.5 py-0.5 rounded border border-white/10">
                          {entry.team.tag}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Elo */}
                  <div className="col-span-2 hidden md:flex items-center justify-center">
                    <span className="font-mono font-bold text-red-600">
                      {entry.team.scrimElo}
                    </span>
                  </div>

                  {/* W/L */}
                  <div className="col-span-1 hidden md:flex items-center justify-center text-xs font-medium text-slate-400">
                    {entry.team.scrimRecord.wins} - {entry.team.scrimRecord.losses}
                  </div>

                  {/* Win Rate */}
                  <div className="col-span-2 hidden md:flex items-center justify-center">
                    <div className="flex flex-col items-center">
                      <span className="text-xs font-bold text-slate-300">
                        {getWinRate(entry.team.scrimRecord.wins, entry.team.scrimRecord.losses)}%
                      </span>
                    </div>
                  </div>

                  {/* Avg Rank */}
                  <div className="col-span-2 flex md:justify-end items-center">
                    <span className="text-sm font-medium text-slate-300">
                      {entry.team.avgRank.split(' ')[0]}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="py-20 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 mb-4">
                  <Search className="w-8 h-8 text-slate-600" />
                </div>
                <h3 className="text-xl font-semibold text-white">No teams found</h3>
                <p className="text-slate-500 mt-2">There are currently no teams in the global ladder.</p>
              </div>
            )}
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/5 flex items-start gap-4">
            <div className="p-3 rounded-xl bg-red-600/10 text-red-600">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white mb-1">Live Rankings</h4>
              <p className="text-sm text-slate-400">Elo is updated after every completed scrim match.</p>
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/5 flex items-start gap-4">
            <div className="p-3 rounded-xl bg-purple-400/10 text-purple-400">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white mb-1">Seasonal Rewards</h4>
              <p className="text-sm text-slate-400">Top 100 teams compete on the global ScrimForge Ladder.</p>
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/5 flex items-start gap-4">
            <div className="p-3 rounded-xl bg-amber-400/10 text-amber-400">
              <Crown className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white mb-1">Build your reputation, climb the ladder, and find stronger opponents.</h4>
              <p className="text-sm text-slate-400">Showcase your team by climbing the global ladder.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
