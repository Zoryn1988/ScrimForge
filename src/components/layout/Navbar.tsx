import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '@/components/esports/Logo';
import { Search, Bell, User, Menu, ChevronDown } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-[#060A10]/80 backdrop-blur-md border-b border-cyan-400/20 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2">
            <Logo size="md" showText={false} />
            <div className="hidden md:flex flex-col">
              <span className="font-orbitron font-bold text-white text-lg">
                Scrim<span className="text-cyan-400">Forge</span>
              </span>
              <span className="text-xs text-slate-400 tracking-wider">
                League of Legends Esports Platform
              </span>
            </div>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <Link to="/dashboard" className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-cyan-400/10 transition-colors">
            <Search className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-slate-200 hover:text-white transition-colors">
              Find Scrims
            </span>
          </Link>
          
          <Link to="/teams" className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-cyan-400/10 transition-colors">
                      <User className="w-4 h-4 text-cyan-400" />
                      <span className="text-sm font-medium text-slate-200 hover:text-white transition-colors">
                        My Team
                      </span>
                    </Link>
          
          <div className="relative">
            <button className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-cyan-400/10 transition-colors">
              <Bell className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-slate-200 hover:text-white transition-colors">
                Notifications
              </span>
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            </button>
          </div>
        </div>
        
        <div className="flex items-center gap-3 md:gap-4">
          <div className="relative">
            <button className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-cyan-400/10 transition-colors">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-cyan-400/30">
                <img src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=120&auto=format&fit=crop&q=80" 
                     alt="User avatar" className="w-full h-full object-cover" />
              </div>
              <span className="hidden md:inline text-sm font-medium text-slate-200 hover:text-white transition-colors">
                Marcus Vance
              </span>
              <ChevronDown className="w-3 h-3 text-cyan-400/70" />
            </button>
          </div>
          
          <Link to="/login" className="btn-primary px-4 py-2 text-sm font-medium">
            Login
          </Link>
          
          <Link to="/signup" className="btn-secondary px-4 py-2 text-sm font-medium border border-cyan-400/30 hover:bg-cyan-400/10">
            Sign Up
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <button className="md:hidden p-2 rounded-md hover:bg-cyan-400/10">
          <Menu className="w-5 h-5 text-cyan-400" />
        </button>
      </div>
    </nav>
  );
};