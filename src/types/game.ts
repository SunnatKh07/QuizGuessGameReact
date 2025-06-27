export interface GameStats {
  gamesPlayed: number;
  gamesWon: number;
  totalAttempts: number;
  bestScore: number;
  averageAttempts: number;
}

export interface PageProps {
  isDark: boolean;
  stats: GameStats;
  updateStats: (newStats: Partial<GameStats>) => void;
  difficulty: 'easy' | 'medium' | 'hard';
  setDifficulty: (difficulty: 'easy' | 'medium' | 'hard') => void;
  resetStats: () => void;
  setCurrentPage?: (page: string) => void;
}