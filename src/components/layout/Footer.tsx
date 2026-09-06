import React from 'react';
import { Github, Twitter, MessageCircle, Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B1220]/50 backdrop-blur-md border-t border-cyan-400/20 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-cyan-400" />
            <span className="text-sm text-slate-400">
              © 2024 ScrimForge. All rights reserved.
            </span>
          </div>
          
          <div className="flex items-center gap-3">
            <a href="#" className="p-2 rounded-md hover:bg-cyan-400/10 transition-colors">
              <Twitter className="w-4 h-4 text-cyan-400" />
            </a>
            <a href="#" className="p-2 rounded-md hover:bg-cyan-400/10 transition-colors">
              <MessageCircle className="w-4 h-4 text-cyan-400" />
            </a>
            <a href="#" className="p-2 rounded-md hover:bg-cyan-400/10 transition-colors">
              <Github className="w-4 h-4 text-cyan-400" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};