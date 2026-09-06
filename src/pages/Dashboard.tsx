import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, Trophy, TrendingUp, Users as UsersIcon, ChevronRight, Play, CheckCircle, XCircle, Search, Filter } from 'lucide-react';
import { TierBadge } from '@/components/esports/TierBadge';
import { SAMPLE_MY_TEAM, SAMPLE_SCRIM_LOBBIES, SAMPLE_RECENT_RESULTS, SAMPLE_OPPONENT_TEAMS } from '@/data/mockData';

export const Dashboard: React.FC = () => {
  const myTeam = SAMPLE_MY_TEAM;
  
  const formatRecord = (wins: number, losses: number) => {
    const total = wins + losses;
    const winRate = total > 0 ? Math.round((wins / total) * 100) : 0;
    return { winRate, total };
  };

  const myRecord = formatRecord(myTeam.scrimRecord.wins, myTeam.scrimRecord.losses);

  return (
    <div className="min-h-screen bg-[#060A10]">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Dashboard Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
          <div>
            <h1 className="text-3xl font-orbitron font-bold text-white mb-1">
              Team <span className="text-cyan-400">Dashboard</span>
            </h1>
            <p className="text-slate-400">Manage your scrims and find opponents</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 hextech-card rounded-lg px-4 py-3">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${myTeam.availability === 'Looking for Scrim' ? 'bg-green-400 animate-pulse' : myTeam.availability === 'In Lobby' ? 'bg-yellow-400 animate-pulse' : 'bg-slate-500'}`} />
                <span className="text-sm text-white font-medium">{myTeam.availability}</span>
              </div>
            </div>
            
            <button className="btn-primary px-6 py-3 font-bold">
              Find Scrims
            </button>
          </div>
        </div>

        {/* My Team Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="hextech-card rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg overflow-hidden border border-cyan-400/30">
                <img src={myTeam.logo} alt={myTeam.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{myTeam.name}</h3>
                <p className="text-sm text-slate-400">[{myTeam.tag}]</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <TierBadge tier={myTeam.tier} size="lg" />
              <div className="text-right">
                <div className="text-2xl font-bold text-cyan-400">{myTeam.scrimElo}</div>
                <div className="text-xs text-slate-400">Scrim ELO</div>
              </div>
            </div>
          </div>

          <div className="hextech-card rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Trophy className="w-5 h-5 text-cyan-400" />
              <h3 className="text-lg font-bold text-white">Scrim Record</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-white">
                  {myTeam.scrimRecord.wins} - {myTeam.scrimRecord.losses}
                </div>
                <div className="text-sm text-slate-400">{myRecord.total} total scrims</div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-green-400">{myRecord.winRate}%</div>
                <div className="text-sm text-slate-400">Win Rate</div>
              </div>
            </div>
          </div>

          <div className="hextech-card rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-cyan-400" />
              <h3 className="text-lg font-bold text-white">This Week</h3>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">3</div>
                <div className="text-xs text-slate-400">Wins</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400">1</div>
                <div className="text-xs text-slate-400">Losses</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">+15</div>
                <div className="text-xs text-slate-400">ELO</div>
              </div>
            </div>
          </div>
        </div>

        {/* Active Lobbies */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-orbitron font-bold text-white flex items-center gap-2">
              <Play className="w-5 h-5 text-cyan-400" />
              Active Lobbies
            </h2>
            <button className="text-sm text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
              Create Lobby <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {SAMPLE_SCRIM_LOBBIES.slice(0, 2).map((lobby) => (
              <div key={lobby.id} className="hextech-card rounded-xl p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-white font-bold mb-1">{lobby.title}</h3>
                    <div className="flex items-center gap-3 text-sm text-slate-400">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {lobby.scheduledTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {lobby.serverRegion}
                      </span>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${lobby.status === 'Ready to Launch' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'}`}>
                    {lobby.status}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <img src={lobby.hostTeam.logo} alt="" className="w-8 h-8 rounded" />
                      <div>
                        <div className="text-sm text-white font-medium">{lobby.hostTeam.name}</div>
                        <TierBadge tier={lobby.hostTeam.tier} size="sm" showLabel={false} />
                      </div>
                    </div>
                    <span className="text-slate-500">vs</span>
                    {lobby.opponentTeam ? (
                      <div className="flex items-center gap-2">
                        <img src={lobby.opponentTeam.logo} alt="" className="w-8 h-8 rounded" />
                        <div>
                          <div className="text-sm text-white font-medium">{lobby.opponentTeam.name}</div>
                          <TierBadge tier={lobby.opponentTeam.tier} size="sm" showLabel={false} />
                        </div>
                      </div>
                    ) : (
                      <span className="text-sm text-slate-400">Waiting for opponent...</span>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400 font-medium">{lobby.format}</span>
                    <button className="btn-primary px-4 py-2 text-sm font-medium">
                      Join
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scrim Finder */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Scrim Search */}
          <div className="lg:col-span-2">
            <div className="hextech-card rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-orbitron font-bold text-white flex items-center gap-2">
                  <Search className="w-5 h-5 text-cyan-400" />
                  Find Scrims
                </h2>
                <button className="text-sm text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
                  <Filter className="w-4 h-4" /> Filters
                </button>
              </div>
              
              <div className="space-y-3">
                {SAMPLE_OPPONENT_TEAMS.map((team) => (
                  <div key={team.id} className="flex items-center justify-between p-4 bg-[#0B1220]/50 rounded-lg border border-cyan-400/10 hover:border-cyan-400/30 transition-colors">
                    <div className="flex items-center gap-4">
                      <img src={team.logo} alt={team.name} className="w-12 h-12 rounded-lg border border-cyan-400/30" />
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-white font-bold">{team.name}</span>
                          <span className="text-slate-400">[{team.tag}]</span>
                          <TierBadge tier={team.tier} size="sm" />
                        </div>
                        <div className="flex items-center gap-4 text-sm text-slate-400">
                          <span>{team.scrimElo} ELO</span>
                          <span>{team.scrimRecord.wins}-{team.scrimRecord.losses}</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" /> {team.region}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="text-right mr-4">
                        <div className={`text-sm font-medium ${team.availability === 'Looking for Scrim' ? 'text-green-400' : 'text-yellow-400'}`}>
                          {team.availability}
                        </div>
                      </div>
                      <Link to={`/team/${team.id}`}>
                        <button className="btn-secondary px-4 py-2 text-sm font-medium border border-cyan-400/30 hover:bg-cyan-400/10">
                          View
                        </button>
                      </Link>
                      <button className="btn-primary px-4 py-2 text-sm font-medium">
                        Invite
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Results */}
          <div>
            <div className="hextech-card rounded-xl p-6">
              <h2 className="text-xl font-orbitron font-bold text-white mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-cyan-400" />
                Recent Results
              </h2>
              
              <div className="space-y-3">
                {SAMPLE_RECENT_RESULTS.map((result) => (
                  <div key={result.id} className="p-3 bg-[#0B1220]/50 rounded-lg border border-cyan-400/10">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {result.teamA.won ? (
                          <CheckCircle className="w-4 h-4 text-green-400" />
                        ) : (
                          <XCircle className="w-4 h-4 text-red-400" />
                        )}
                        <span className="text-sm text-white font-medium">
                          vs {result.teamB.name}
                        </span>
                      </div>
                      <span className="text-xs text-slate-400">{result.matchDate}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-300">
                        {result.teamA.score} - {result.teamB.score} {result.format}
                      </span>
                      <span className="text-cyan-400">{result.mvp}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};