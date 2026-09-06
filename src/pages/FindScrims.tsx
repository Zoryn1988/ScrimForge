import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, Filter, Search, ChevronRight, Plus, X, CheckCircle, AlertCircle, XCircle, Ban, Users as UsersIcon } from 'lucide-react';
import { TierBadge } from '@/components/esports/TierBadge';
import { SAMPLE_OPPONENT_TEAMS, SAMPLE_SCRIM_LOBBIES, ScrimLobby, ServerRegion, LeagueTier } from '@/data/mockData';

type RequestStatus = 'Open' | 'Pending' | 'Confirmed' | 'Completed' | 'Cancelled';

const statusColors: Record<RequestStatus, string> = {
  Open: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  Pending: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  Confirmed: 'bg-green-500/20 text-green-400 border-green-500/30',
  Completed: 'bg-slate-500/20 text-slate-400 border-slate-500/30',
  Cancelled: 'bg-red-500/20 text-red-400 border-red-500/30',
};

const statusIcons: Record<RequestStatus, React.ReactNode> = {
  Open: <CheckCircle className="w-4 h-4 text-blue-400" />,
  Pending: <AlertCircle className="w-4 h-4 text-yellow-400" />,
  Confirmed: <CheckCircle className="w-4 h-4 text-green-400" />,
  Completed: <CheckCircle className="w-4 h-4 text-slate-400" />,
  Cancelled: <Ban className="w-4 h-4 text-red-400" />,
};

const formatOptions = ['BO1 (3 Games)', 'BO3', 'BO5'];
const regionOptions: ServerRegion[] = ['NA', 'EUW', 'EUNE', 'KR'];
const tierOptions: LeagueTier[] = ['Challenger', 'Grandmaster', 'Master', 'Diamond'];
const availabilityOptions = ['Looking for Scrim', 'In Lobby', 'Offline', 'Booked'];

export const FindScrims: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [filters, setFilters] = useState({
    server: '',
    rank: '',
    date: '',
    time: '',
    format: '',
    availability: '',
  });

  const [newListing, setNewListing] = useState({
    title: '',
    serverRegion: 'NA' as ServerRegion,
    format: 'BO3' as 'BO3' | 'BO5' | 'BO1 (3 Games)',
    scheduledTime: '',
    notes: '',
  });

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleNewListingChange = (key: string, value: string) => {
    setNewListing(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmitListing = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder - no backend yet
    setShowForm(false);
    setNewListing({
      title: '',
      serverRegion: 'NA',
      format: 'BO3',
      scheduledTime: '',
      notes: '',
    });
  };

  // Filter lobbies based on filters
  const filteredLobbies = SAMPLE_SCRIM_LOBBIES.filter(lobby => {
    if (filters.server && lobby.serverRegion !== filters.server) return false;
    if (filters.rank && lobby.hostTeam.tier !== filters.rank) return false;
    if (filters.format && lobby.format !== filters.format) return false;
    return true;
  });

  // Filter opponent teams based on filters
  const filteredTeams = SAMPLE_OPPONENT_TEAMS.filter(team => {
    if (filters.server && team.region !== filters.server) return false;
    if (filters.rank && team.tier !== filters.rank) return false;
    if (filters.availability && team.availability !== filters.availability) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-[#060A10]">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-orbitron font-bold text-white mb-2">
              Find <span className="text-cyan-400">Scrims</span>
            </h1>
            <p className="text-slate-400">Post listings and find opponents for competitive scrims</p>
          </div>
          
          <button
            onClick={() => setShowForm(!showForm)}
            className="btn-primary px-6 py-3 font-bold flex items-center gap-2 self-start"
          >
            <Plus className="w-5 h-5" />
            Post Listing
          </button>
        </div>

        {/* New Listing Form */}
        {showForm && (
          <div className="hextech-card rounded-xl p-6 mb-8 border-cyan-400/40">
            <h2 className="text-xl font-orbitron font-bold text-white mb-4">Create Scrim Listing</h2>
            <form onSubmit={handleSubmitListing} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Listing Title</label>
                  <input
                    type="text"
                    value={newListing.title}
                    onChange={(e) => handleNewListingChange('title', e.target.value)}
                    className="w-full px-4 py-3 bg-[#0B1220]/50 border border-cyan-400/20 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 transition-colors"
                    placeholder="e.g., Challenger Bo3 Scrim"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Server Region</label>
                  <select
                    value={newListing.serverRegion}
                    onChange={(e) => handleNewListingChange('serverRegion', e.target.value)}
                    className="w-full px-4 py-3 bg-[#0B1220]/50 border border-cyan-400/20 rounded-lg text-white focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 transition-colors"
                  >
                    {regionOptions.map(region => (
                      <option key={region} value={region}>{region}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">BO Format</label>
                  <select
                    value={newListing.format}
                    onChange={(e) => handleNewListingChange('format', e.target.value)}
                    className="w-full px-4 py-3 bg-[#0B1220]/50 border border-cyan-400/20 rounded-lg text-white focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 transition-colors"
                  >
                    {formatOptions.map(fmt => (
                      <option key={fmt} value={fmt}>{fmt}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Date & Time</label>
                  <input
                    type="datetime-local"
                    value={newListing.scheduledTime}
                    onChange={(e) => handleNewListingChange('scheduledTime', e.target.value)}
                    className="w-full px-4 py-3 bg-[#0B1220]/50 border border-cyan-400/20 rounded-lg text-white focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 transition-colors"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Notes</label>
                <textarea
                  value={newListing.notes}
                  onChange={(e) => handleNewListingChange('notes', e.target.value)}
                  className="w-full px-4 py-3 bg-[#0B1220]/50 border border-cyan-400/20 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 transition-colors"
                  rows={3}
                  placeholder="Additional details about your scrim preferences..."
                />
              </div>
              <div className="flex gap-3">
                <button type="submit" className="btn-primary px-6 py-3 font-bold">
                  Post Listing
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="btn-secondary px-6 py-3 font-bold border border-cyan-400/30 hover:bg-cyan-400/10"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Filters */}
        <div className="hextech-card rounded-xl p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-cyan-400" />
            <h2 className="text-lg font-orbitron font-bold text-white">Filters</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider">Server</label>
              <select
                value={filters.server}
                onChange={(e) => handleFilterChange('server', e.target.value)}
                className="w-full px-3 py-2 bg-[#0B1220]/50 border border-cyan-400/20 rounded-lg text-white text-sm focus:outline-none focus:border-cyan-400/50"
              >
                <option value="">All Regions</option>
                {regionOptions.map(region => (
                  <option key={region} value={region}>{region}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider">Rank</label>
              <select
                value={filters.rank}
                onChange={(e) => handleFilterChange('rank', e.target.value)}
                className="w-full px-3 py-2 bg-[#0B1220]/50 border border-cyan-400/20 rounded-lg text-white text-sm focus:outline-none focus:border-cyan-400/50"
              >
                <option value="">All Tiers</option>
                {tierOptions.map(tier => (
                  <option key={tier} value={tier}>{tier}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider">Date</label>
              <input
                type="date"
                value={filters.date}
                onChange={(e) => handleFilterChange('date', e.target.value)}
                className="w-full px-3 py-2 bg-[#0B1220]/50 border border-cyan-400/20 rounded-lg text-white text-sm focus:outline-none focus:border-cyan-400/50"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider">Time</label>
              <input
                type="time"
                value={filters.time}
                onChange={(e) => handleFilterChange('time', e.target.value)}
                className="w-full px-3 py-2 bg-[#0B1220]/50 border border-cyan-400/20 rounded-lg text-white text-sm focus:outline-none focus:border-cyan-400/50"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider">BO Format</label>
              <select
                value={filters.format}
                onChange={(e) => handleFilterChange('format', e.target.value)}
                className="w-full px-3 py-2 bg-[#0B1220]/50 border border-cyan-400/20 rounded-lg text-white text-sm focus:outline-none focus:border-cyan-400/50"
              >
                <option value="">All Formats</option>
                {formatOptions.map(fmt => (
                  <option key={fmt} value={fmt}>{fmt}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider">Availability</label>
              <select
                value={filters.availability}
                onChange={(e) => handleFilterChange('availability', e.target.value)}
                className="w-full px-3 py-2 bg-[#0B1220]/50 border border-cyan-400/20 rounded-lg text-white text-sm focus:outline-none focus:border-cyan-400/50"
              >
                <option value="">All Status</option>
                {availabilityOptions.map(avail => (
                  <option key={avail} value={avail}>{avail}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Scrim Listings */}
        <div className="mb-8">
          <h2 className="text-xl font-orbitron font-bold text-white mb-4 flex items-center gap-2">
            <Search className="w-5 h-5 text-cyan-400" />
            Scrim Listings
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {filteredLobbies.map((lobby) => (
              <div key={lobby.id} className="hextech-card rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1">{lobby.title}</h3>
                    <div className="flex items-center gap-3 text-sm text-slate-400">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {lobby.scheduledTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {lobby.serverRegion}
                      </span>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium border flex items-center gap-1.5 ${statusColors[lobby.status as RequestStatus]}`}>
                    {statusIcons[lobby.status as RequestStatus]}
                    {lobby.status}
                  </div>
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
                          <Search className="w-3 h-3 text-slate-500" />
                        </div>
                        <span className="text-sm text-slate-400">Looking for opponent</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4 text-slate-400">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {lobby.serverRegion}
                      </span>
                      <span className="text-cyan-400 font-medium">{lobby.format}</span>
                    </div>
                    <span className="text-xs text-slate-500">Patch {lobby.gamePatch}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500">Lobby: {lobby.lobbyCode}</span>
                  <div className="flex gap-2">
                    <button className="btn-secondary px-4 py-2 text-sm font-medium border border-cyan-400/30 hover:bg-cyan-400/10">
                      View Details
                    </button>
                    <button className="btn-primary px-4 py-2 text-sm font-medium">
                      Join
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Opponent Teams */}
        <div>
          <h2 className="text-xl font-orbitron font-bold text-white mb-4 flex items-center gap-2">
            <UsersIcon className="w-5 h-5 text-cyan-400" />
            Available Teams
          </h2>
          
          <div className="space-y-3">
            {filteredTeams.map((team) => (
              <div key={team.id} className="hextech-card rounded-xl p-5">
                <div className="flex items-center justify-between">
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
                        View Team
                      </button>
                    </Link>
                    <button className="btn-primary px-4 py-2 text-sm font-medium">
                      Invite
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};