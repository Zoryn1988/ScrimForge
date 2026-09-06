import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Calendar, Trophy, Shield, ChevronRight, Star, Clock, MapPin, TrendingUp, Users as UsersIcon } from 'lucide-react';
import { Logo } from '@/components/esports/Logo';
import { TierBadge } from '@/components/esports/TierBadge';
import { SAMPLE_OPPONENT_TEAMS, SAMPLE_SCRIM_LOBBIES } from '@/data/mockData';

export const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#060A10]">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#060A10] via-[#0B1220] to-[#060A10] z-0" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920&auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30 z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060A10] via-transparent to-[#060A10]/50 z-0" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <Logo size="xl" />
            </div>
            <h1 className="text-5xl md:text-7xl font-orbitron font-black mb-6">
              <span className="text-white">Forge Your</span>
              <br />
              <span className="text-cyan-400">Competitive Path</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-8 font-light">
              The premier League of Legends esports platform for serious teams seeking high-level competitive scrims and growth.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
              <Link to="/signup" className="btn-primary px-8 py-4 text-lg font-bold flex items-center justify-center gap-2">
                Start Your Team
                <ChevronRight className="w-5 h-5" />
              </Link>
              <Link to="/dashboard" className="btn-secondary px-8 py-4 text-lg font-bold border border-cyan-400/30 hover:bg-cyan-400/10">
                Find Scrims
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#0B1220]/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="hextech-card rounded-xl p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-cyan-400/20 flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">500</div>
              <div className="text-sm text-slate-400">Active Teams</div>
            </div>
            
            <div className="hextech-card rounded-xl p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-cyan-400/20 flex items-center justify-center mx-auto mb-3">
                <Calendar className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">1,200</div>
              <div className="text-sm text-slate-400">Scrims This Month</div>
            </div>
            
            <div className="hextech-card rounded-xl p-6 text-center">
                          <div className="w-12 h-12 rounded-full bg-cyan-400/20 flex items-center justify-center mx-auto mb-3">
                            <Trophy className="w-6 h-6 text-cyan-400" />
                          </div>
                          <div className="text-lg font-bold text-white mb-1">
                            Challenger: 50<br />
                            Grandmaster: 120<br />
                            Master: 200<br />
                            Diamond: 300
                          </div>
                          <div className="text-sm text-slate-400">Tier Distribution</div>
                        </div>
            
            <div className="hextech-card rounded-xl p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-cyan-400/20 flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">Challenger</div>
              <div className="text-sm text-slate-400">Top Tier Teams</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Scrims Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-2">
                Live <span className="text-cyan-400">Scrim</span> Lobbies
              </h2>
              <p className="text-slate-400">Find your next competitive match</p>
            </div>
            <Link to="/dashboard" className="hidden md:flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium">
              View All Scrims
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SAMPLE_SCRIM_LOBBIES.map((lobby) => (
              <div key={lobby.id} className="hextech-card rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1">{lobby.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <Clock className="w-3 h-3" />
                      <span>{lobby.scheduledTime}</span>
                    </div>
                  </div>
                  <div className={`px-2 py-1 rounded text-xs font-medium ${lobby.status === 'Ready to Launch' ? 'bg-green-500/20 text-green-400' : lobby.status === 'Open' ? 'bg-blue-500/20 text-blue-400' : 'bg-slate-500/20 text-slate-400'}`}>{lobby.status}</div>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img src={lobby.hostTeam.logo} alt={lobby.hostTeam.name} className="w-6 h-6 rounded" />
                      <span className="text-sm font-medium text-white">{lobby.hostTeam.name}</span>
                      <TierBadge tier={lobby.hostTeam.tier} size="sm" showLabel={false} />
                    </div>
                    <span className="text-xs text-slate-500">vs</span>
                    {lobby.opponentTeam ? (
                      <div className="flex items-center gap-2">
                        <img src={lobby.opponentTeam.logo} alt={lobby.opponentTeam.name} className="w-6 h-6 rounded" />
                        <span className="text-sm font-medium text-white">{lobby.opponentTeam.name}</span>
                        <TierBadge tier={lobby.opponentTeam.tier} size="sm" showLabel={false} />
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-slate-700 flex items-center justify-center">
                          <UsersIcon className="w-3 h-3 text-slate-500" />
                        </div>
                        <span className="text-sm text-slate-400">Looking for opponent</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-slate-400">
                      <MapPin className="w-3 h-3" />
                      <span>{lobby.serverRegion}</span>
                    </div>
                    <div className="text-cyan-400 font-medium">
                      {lobby.format}
                    </div>
                  </div>
                </div>
                
                <button className="w-full py-2 bg-cyan-400/10 hover:bg-cyan-400/20 border border-cyan-400/30 rounded-md text-cyan-400 font-medium transition-colors">
                  Join Lobby
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#0B1220]/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-4">
              Platform <span className="text-cyan-400">Features</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Everything you need to run a professional competitive League of Legends team
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-400/30 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Team Management</h3>
              <p className="text-sm text-slate-400">Create and manage your roster with detailed player profiles and role assignments.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-400/30 flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Scrim Scheduling</h3>
              <p className="text-sm text-slate-400">Find and schedule competitive matches with teams at your skill level.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-400/30 flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Match Results</h3>
              <p className="text-sm text-slate-400">Track performance statistics and analyze your gameplay with detailed match data.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-400/30 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Rankings</h3>
              <p className="text-sm text-slate-400">Compete in ranked tiers and climb the ladder with our competitive system.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="hextech-card rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-4">
              Ready to <span className="text-cyan-400">Forge</span> Your Legacy?
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Join thousands of competitive teams already using ScrimForge to elevate their gameplay and find their perfect scrim partners.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link to="/signup" className="btn-primary px-8 py-4 text-lg font-bold">
                Create Your Team
              </Link>
              <Link to="/login" className="btn-secondary px-8 py-4 text-lg font-bold border border-cyan-400/30 hover:bg-cyan-400/10">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};