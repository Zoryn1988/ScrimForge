import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Users as UsersIcon, MapPin, TrendingUp, Calendar, Clock, ChevronRight, Shield, Star, Award, Target } from 'lucide-react';
import { TierBadge } from '@/components/esports/TierBadge';
import { SAMPLE_MY_TEAM, SAMPLE_RECENT_RESULTS } from '@/data/mockData';
import { LaneRole } from '@/data/mockData';

const roleColors: Record<LaneRole, string> = {
  TOP: 'bg-red-500/20 text-red-400 border-red-500/30',
  JNG: 'bg-green-500/20 text-green-400 border-green-500/30',
  MID: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  BOT: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  SUP: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  SUB: 'bg-slate-500/20 text-slate-400 border-slate-500/30',
  COACH: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
};

export const Team: React.FC = () => {
  const team = SAMPLE_MY_TEAM;

  const formatRecord = (wins: number, losses: number) => {
    const total = wins + losses;
    const winRate = total > 0 ? Math.round((wins / total) * 100) : 0;
    return { winRate, total };
  };

  const record = formatRecord(team.scrimRecord.wins, team.scrimRecord.losses);

  return (
    <div className="min-h-screen bg-[#060A10]">
      {/* Team Header */}
      <div className="relative">
        <div className="h-48 md:h-64 bg-cover bg-center" style={{ backgroundImage: `url(${team.banner})` }}>
          <div className="absolute inset-0 bg-gradient-to-t from-[#060A10] via-[#060A10]/60 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative -mt-20 md:-mt-24">
            <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-6">
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-xl overflow-hidden border-4 border-cyan-400/40 shadow-[0_0_30px_rgba(0,240,255,0.3)]">
                <img src={team.logo} alt={team.name} className="w-full h-full object-cover" />
              </div>
              
              <div className="flex-1 pb-2">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h1 className="text-3xl md:text-4xl font-orbitron font-bold text-white">
                    {team.name}
                  </h1>
                  <span className="text-xl text-slate-400">[{team.tag}]</span>
                  <TierBadge tier={team.tier} size="lg" />
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" /> {team.region} Server
                  </span>
                  <span className="flex items-center gap-1">
                    <UsersIcon className="w-4 h-4" /> {team.roster.length} Players
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" /> {team.totalScrimsPlayed} Scrims Played
                  </span>
                </div>
              </div>
              
              <div className="flex gap-3 pb-2">
                <button className="btn-secondary px-4 py-2 text-sm font-medium border border-cyan-400/30 hover:bg-cyan-400/10">
                  Edit Team
                </button>
                <button className="btn-primary px-4 py-2 text-sm font-medium">
                  Invite Player
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Stats */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="hextech-card rounded-xl p-5 text-center">
            <div className="w-10 h-10 rounded-full bg-cyan-400/20 flex items-center justify-center mx-auto mb-3">
              <Trophy className="w-5 h-5 text-cyan-400" />
            </div>
            <div className="text-2xl font-bold text-white mb-1">{team.scrimElo}</div>
            <div className="text-sm text-slate-400">Scrim ELO</div>
          </div>
          
          <div className="hextech-card rounded-xl p-5 text-center">
            <div className="w-10 h-10 rounded-full bg-green-400/20 flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="w-5 h-5 text-green-400" />
            </div>
            <div className="text-2xl font-bold text-white mb-1">{record.winRate}%</div>
            <div className="text-sm text-slate-400">Win Rate</div>
          </div>
          
          <div className="hextech-card rounded-xl p-5 text-center">
            <div className="w-10 h-10 rounded-full bg-yellow-400/20 flex items-center justify-center mx-auto mb-3">
              <Award className="w-5 h-5 text-yellow-400" />
            </div>
            <div className="text-2xl font-bold text-white mb-1">{team.scrimRecord.wins}-{team.scrimRecord.losses}</div>
            <div className="text-sm text-slate-400">Record (W-L)</div>
          </div>
          
          <div className="hextech-card rounded-xl p-5 text-center">
            <div className="w-10 h-10 rounded-full bg-purple-400/20 flex items-center justify-center mx-auto mb-3">
              <Target className="w-5 h-5 text-purple-400" />
            </div>
            <div className="text-2xl font-bold text-white mb-1">{team.avgRank}</div>
            <div className="text-sm text-slate-400">Avg Rank</div>
          </div>
        </div>

        {/* Roster */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-orbitron font-bold text-white flex items-center gap-2">
              <UsersIcon className="w-5 h-5 text-cyan-400" />
              Roster
            </h2>
          </div>
          
          <div className="hextech-card rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-cyan-400/20">
                    <th className="text-left p-4 text-sm font-medium text-slate-400">Player</th>
                    <th className="text-left p-4 text-sm font-medium text-slate-400">Role</th>
                    <th className="text-left p-4 text-sm font-medium text-slate-400">Rank</th>
                    <th className="text-left p-4 text-sm font-medium text-slate-400">Main Champs</th>
                    <th className="text-left p-4 text-sm font-medium text-slate-400">Win Rate</th>
                    <th className="text-left p-4 text-sm font-medium text-slate-400">KDA</th>
                    <th className="text-right p-4 text-sm font-medium text-slate-400">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {team.roster.map((player) => (
                    <tr key={player.id} className="border-b border-cyan-400/10 hover:bg-cyan-400/5 transition-colors">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full overflow-hidden border border-cyan-400/30">
                            <img src={player.avatarUrl} alt={player.name} className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <div className="text-white font-medium">{player.summonerName}</div>
                            <div className="text-xs text-slate-400">{player.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium border ${roleColors[player.role]}`}>
                          {player.role}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <TierBadge tier={player.rank} size="sm" showLabel={false} />
                          <span className="text-sm text-white">{player.lp} LP</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex gap-1">
                          {player.mainChampions.slice(0, 3).map((champ) => (
                            <span key={champ} className="px-2 py-0.5 bg-[#0B1220] rounded text-xs text-slate-300">
                              {champ}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                            <div className="h-full bg-green-400 rounded-full" style={{ width: `${player.winRate}%` }} />
                          </div>
                          <span className="text-sm text-green-400">{player.winRate}%</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="text-sm text-white">{player.kda}</span>
                      </td>
                      <td className="p-4 text-right">
                        <button className="text-slate-400 hover:text-cyan-400 text-sm">
                          View Profile
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Match History */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-orbitron font-bold text-white flex items-center gap-2">
              <Clock className="w-5 h-5 text-cyan-400" />
              Match History
            </h2>
            <button className="text-sm text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
              View All <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="hextech-card rounded-xl p-6">
            <div className="space-y-4">
              {SAMPLE_RECENT_RESULTS.map((result) => (
                <div key={result.id} className="flex items-center justify-between p-4 bg-[#0B1220]/50 rounded-lg border border-cyan-400/10">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${result.teamA.won ? 'bg-green-500/20' : 'bg-red-500/20'}`}>
                      {result.teamA.won ? (
                        <Trophy className="w-6 h-6 text-green-400" />
                      ) : (
                        <Shield className="w-6 h-6 text-red-400" />
                      )}
                    </div>
                    <div>
                      <div className="text-white font-medium mb-1">
                        vs {result.teamB.name} <span className="text-slate-400">[{result.teamB.tag}]</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-slate-400">
                        <span>{result.format}</span>
                        <span>Patch {result.patch}</span>
                        <span>{result.durationMinutes} min</span>
                        <span>{result.matchDate}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">
                        {result.teamA.score} - {result.teamB.score}
                      </div>
                      <div className="text-xs text-slate-400">
                        {result.teamA.won ? 'Victory' : 'Defeat'}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-cyan-400">MVP</div>
                      <div className="text-sm text-white">{result.mvp}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};