export type LeagueTier = 'Challenger' | 'Grandmaster' | 'Master' | 'Diamond';
export type LaneRole = 'TOP' | 'JNG' | 'MID' | 'BOT' | 'SUP' | 'SUB' | 'COACH';
export type ServerRegion = 'NA' | 'EUW' | 'EUNE' | 'KR';

export interface Player {
  id: string;
  name: string;
  summonerName: string;
  role: LaneRole;
  rank: LeagueTier;
  lp: number;
  avatarUrl: string;
  mainChampions: string[];
  winRate: number;
  kda: string;
}

export interface Team {
  id: string;
  name: string;
  tag: string;
  logo: string;
  banner: string;
  region: ServerRegion;
  tier: LeagueTier;
  scrimElo: number;
  scrimRecord: {
    wins: number;
    losses: number;
  };
  totalScrimsPlayed: number;
  availability: 'Looking for Scrim' | 'In Lobby' | 'Offline' | 'Booked';
  avgRank: string;
  roster: Player[];
  description: string;
}

export interface ScrimLobby {
  id: string;
  title: string;
  hostTeam: {
    id: string;
    name: string;
    tag: string;
    logo: string;
    tier: LeagueTier;
    scrimElo: number;
  };
  opponentTeam?: {
    id: string;
    name: string;
    tag: string;
    logo: string;
    tier: LeagueTier;
    scrimElo: number;
  };
  scheduledTime: string; // e.g. "Today, 19:00 EST"
  serverRegion: ServerRegion;
  format: 'Bo3' | 'Bo5' | 'Bo1 (3 Games)';
  gamePatch: string;
  status: 'Open' | 'Ready to Launch' | 'In Progress' | 'Completed';
  sideSelection: 'Coin Flip' | 'Host Choice' | 'Standard Alternating';
  notes?: string;
  lobbyCode?: string;
}

export interface ScrimResult {
  id: string;
  matchDate: string;
  teamA: {
    name: string;
    tag: string;
    score: number;
    won: boolean;
    tier: LeagueTier;
  };
  teamB: {
    name: string;
    tag: string;
    score: number;
    won: boolean;
    tier: LeagueTier;
  };
  format: string;
  durationMinutes: number;
  mvp: string;
  patch: string;
}

export const SAMPLE_MY_TEAM: Team = {
  id: 'team-forge-1',
  name: 'Solstice Eclipse',
  tag: 'SLC',
  logo: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=160&auto=format&fit=crop&q=80',
  banner: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&auto=format&fit=crop&q=80',
  region: 'NA',
  tier: 'Grandmaster',
  scrimElo: 2145,
  scrimRecord: {
    wins: 42,
    losses: 18,
  },
  totalScrimsPlayed: 60,
  availability: 'Looking for Scrim',
  avgRank: 'Grandmaster 420 LP',
  description: 'Competitive semi-pro roster competing in NACL qualifiers and regional Premier leagues. Seeking high-tier GM/Challenger scrim partners.',
  roster: [
    {
      id: 'p-1',
      name: 'Marcus Vance',
      summonerName: 'Vance',
      role: 'TOP',
      rank: 'Grandmaster',
      lp: 540,
      avatarUrl: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=120&auto=format&fit=crop&q=80',
      mainChampions: ['Aatrox', 'Renekton', 'K\'Sante'],
      winRate: 64,
      kda: '3.4:1',
    },
    {
      id: 'p-2',
      name: 'Jun-Ho Kim',
      summonerName: 'PhantomJ',
      role: 'JNG',
      rank: 'Challenger',
      lp: 710,
      avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80',
      mainChampions: ['Lee Sin', 'Viego', 'Sejuani'],
      winRate: 68,
      kda: '4.2:1',
    },
    {
      id: 'p-3',
      name: 'Tyler Reed',
      summonerName: 'Arcane',
      role: 'MID',
      rank: 'Grandmaster',
      lp: 620,
      avatarUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=120&auto=format&fit=crop&q=80',
      mainChampions: ['Azir', 'Orianna', 'Ahri'],
      winRate: 61,
      kda: '3.8:1',
    },
    {
      id: 'p-4',
      name: 'Daniel Chen',
      summonerName: 'ViperX',
      role: 'BOT',
      rank: 'Grandmaster',
      lp: 580,
      avatarUrl: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=120&auto=format&fit=crop&q=80',
      mainChampions: ['Varus', 'Kai\'Sa', 'Lucian'],
      winRate: 65,
      kda: '4.5:1',
    },
    {
      id: 'p-5',
      name: 'Soren Lind',
      summonerName: 'AegisShield',
      role: 'SUP',
      rank: 'Master',
      lp: 390,
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
      mainChampions: ['Nautilus', 'Rell', 'Lulu'],
      winRate: 59,
      kda: '4.8:1',
    },
  ],
};

export const SAMPLE_OPPONENT_TEAMS: Team[] = [
  {
    id: 'team-2',
    name: 'Aegis Prime',
    tag: 'APG',
    logo: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=160&auto=format&fit=crop&q=80',
    banner: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&auto=format&fit=crop&q=80',
    region: 'NA',
    tier: 'Challenger',
    scrimElo: 2280,
    scrimRecord: { wins: 56, losses: 14 },
    totalScrimsPlayed: 70,
    availability: 'Looking for Scrim',
    avgRank: 'Challenger 780 LP',
    description: 'Tier-2 Academy squad focusing on macro execution and early game draft flexibility.',
    roster: [],
  },
  {
    id: 'team-3',
    name: 'Radiant Vanguard',
    tag: 'RVG',
    logo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=160&auto=format&fit=crop&q=80',
    banner: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&auto=format&fit=crop&q=80',
    region: 'NA',
    tier: 'Grandmaster',
    scrimElo: 2110,
    scrimRecord: { wins: 38, losses: 22 },
    totalScrimsPlayed: 60,
    availability: 'In Lobby',
    avgRank: 'Grandmaster 490 LP',
    description: 'Disciplined team with fast lane swap coordination. Looking for 3-game sets.',
    roster: [],
  },
  {
    id: 'team-4',
    name: 'Nexus Wolves',
    tag: 'NWL',
    logo: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=160&auto=format&fit=crop&q=80',
    banner: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&auto=format&fit=crop&q=80',
    region: 'NA',
    tier: 'Master',
    scrimElo: 1980,
    scrimRecord: { wins: 31, losses: 29 },
    totalScrimsPlayed: 60,
    availability: 'Looking for Scrim',
    avgRank: 'Master 240 LP',
    description: 'Competitive collegiate championship contender. Solid teamwork and objective setups.',
    roster: [],
  },
  {
    id: 'team-5',
    name: 'Mythic Pulse',
    tag: 'PLS',
    logo: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=160&auto=format&fit=crop&q=80',
    banner: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&auto=format&fit=crop&q=80',
    region: 'EUW',
    tier: 'Challenger',
    scrimElo: 2340,
    scrimRecord: { wins: 62, losses: 16 },
    totalScrimsPlayed: 78,
    availability: 'Booked',
    avgRank: 'Challenger 920 LP',
    description: 'European Premier roster prepping for EMEA Masters qualifiers.',
    roster: [],
  },
];

export const SAMPLE_SCRIM_LOBBIES: ScrimLobby[] = [
  {
    id: 'scrim-101',
    title: 'High GM / Challenger Bo3 Block',
    hostTeam: {
      id: 'team-forge-1',
      name: 'Solstice Eclipse',
      tag: 'SLC',
      logo: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=160&auto=format&fit=crop&q=80',
      tier: 'Grandmaster',
      scrimElo: 2145,
    },
    opponentTeam: {
      id: 'team-2',
      name: 'Aegis Prime',
      tag: 'APG',
      logo: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=160&auto=format&fit=crop&q=80',
      tier: 'Challenger',
      scrimElo: 2280,
    },
    scheduledTime: 'Today, 20:00 EST',
    serverRegion: 'NA',
    format: 'Bo3',
    gamePatch: '14.12',
    status: 'Ready to Launch',
    sideSelection: 'Standard Alternating',
    lobbyCode: 'SF-NA-8492',
    notes: 'Tournament draft rules, 5m break between games, coaching spectate allowed in lobby.',
  },
  {
    id: 'scrim-102',
    title: 'Master+ 3-Game Flex Scrim Block',
    hostTeam: {
      id: 'team-4',
      name: 'Nexus Wolves',
      tag: 'NWL',
      logo: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=160&auto=format&fit=crop&q=80',
      tier: 'Master',
      scrimElo: 1980,
    },
    scheduledTime: 'Today, 22:30 EST',
    serverRegion: 'NA',
    format: 'Bo1 (3 Games)',
    gamePatch: '14.12',
    status: 'Open',
    sideSelection: 'Coin Flip',
    notes: 'Looking for disciplined team. Testing lane swaps and draft depth.',
  },
  {
    id: 'scrim-103',
    title: 'Challenger Tier Bo5 Playoff Simulation',
    hostTeam: {
      id: 'team-3',
      name: 'Radiant Vanguard',
      tag: 'RVG',
      logo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=160&auto=format&fit=crop&q=80',
      tier: 'Grandmaster',
      scrimElo: 2110,
    },
    scheduledTime: 'Tomorrow, 18:00 EST',
    serverRegion: 'NA',
    format: 'Bo5',
    gamePatch: '14.12',
    status: 'Open',
    sideSelection: 'Host Choice',
    notes: 'Must have full 5-man comms and coach present. VOD review friendly.',
  },
];

export const SAMPLE_RECENT_RESULTS: ScrimResult[] = [
  {
    id: 'res-1',
    matchDate: 'Yesterday',
    teamA: {
      name: 'Solstice Eclipse',
      tag: 'SLC',
      score: 2,
      won: true,
      tier: 'Grandmaster',
    },
    teamB: {
      name: 'Nexus Wolves',
      tag: 'NWL',
      score: 1,
      won: false,
      tier: 'Master',
    },
    format: 'Bo3',
    durationMinutes: 94,
    mvp: 'PhantomJ (JNG)',
    patch: '14.12',
  },
  {
    id: 'res-2',
    matchDate: '3 days ago',
    teamA: {
      name: 'Solstice Eclipse',
      tag: 'SLC',
      score: 2,
      won: true,
      tier: 'Grandmaster',
    },
    teamB: {
      name: 'Radiant Vanguard',
      tag: 'RVG',
      score: 0,
      won: false,
      tier: 'Grandmaster',
    },
    format: 'Bo3',
    durationMinutes: 62,
    mvp: 'Vance (TOP)',
    patch: '14.12',
  },
  {
    id: 'res-3',
    matchDate: '5 days ago',
    teamA: {
      name: 'Aegis Prime',
      tag: 'APG',
      score: 2,
      won: true,
      tier: 'Challenger',
    },
    teamB: {
      name: 'Solstice Eclipse',
      tag: 'SLC',
      score: 1,
      won: false,
      tier: 'Grandmaster',
    },
    format: 'Bo3',
    durationMinutes: 104,
    mvp: 'Aegis Mid',
    patch: '14.11',
  },
];
