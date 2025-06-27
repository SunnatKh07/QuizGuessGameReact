import React from 'react';
import { Play, Trophy, Settings, TrendingUp } from 'lucide-react';
import { PageProps } from '../types/game';

const HomePage: React.FC<PageProps> = ({ isDark, stats, setCurrentPage }) => {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Mind<span className={isDark ? 'text-white' : 'text-black'}>Game</span>
        </h1>
        <p className={`text-lg md:text-xl mb-8 ${isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
          Test your intuition and logic in the exciting number guessing game
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => setCurrentPage?.('game')}
            className={`px-8 py-3 rounded-lg font-medium transition-colors duration-200 ${isDark
              ? 'bg-white text-black hover:bg-gray-200'
              : 'bg-black text-white hover:bg-gray-800'
              }`}
          >
            <Play className="inline mr-2" size={20} />
            Start playing
          </button>
          <button className={`px-8 py-3 rounded-lg font-medium border transition-colors duration-200 ${isDark
            ? 'border-white text-white hover:bg-white/10'
            : 'border-black text-black hover:bg-black/10'
            }`}>
            Learn More
          </button>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <div className={`p-6 rounded-lg border transition-colors duration-200 ${isDark
          ? 'border-white/20 bg-white/5 hover:bg-white/10'
          : 'border-black/20 bg-black/5 hover:bg-black/10'
          }`}>
          <div className="flex items-center justify-between mb-2">
            <Trophy className={isDark ? 'text-white' : 'text-black'} size={24} />
            <span className="text-2xl font-bold">{stats.gamesWon}</span>
          </div>
          <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Wins
          </p>
        </div>

        <div className={`p-6 rounded-lg border transition-colors duration-200 ${isDark
          ? 'border-white/20 bg-white/5 hover:bg-white/10'
          : 'border-black/20 bg-black/5 hover:bg-black/10'
          }`}>
          <div className="flex items-center justify-between mb-2">
            <Play className={isDark ? 'text-white' : 'text-black'} size={24} />
            <span className="text-2xl font-bold">{stats.gamesPlayed}</span>
          </div>
          <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Games Played
          </p>
        </div>

        <div className={`p-6 rounded-lg border transition-colors duration-200 ${isDark
          ? 'border-white/20 bg-white/5 hover:bg-white/10'
          : 'border-black/20 bg-black/5 hover:bg-black/10'
          }`}>
          <div className="flex items-center justify-between mb-2">
            <TrendingUp className={isDark ? 'text-white' : 'text-black'} size={24} />
            <span className="text-2xl font-bold">{stats.bestScore || 0}</span>
          </div>
          <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Best Score
          </p>
        </div>

        <div className={`p-6 rounded-lg border transition-colors duration-200 ${isDark
          ? 'border-white/20 bg-white/5 hover:bg-white/10'
          : 'border-black/20 bg-black/5 hover:bg-black/10'
          }`}>
          <div className="flex items-center justify-between mb-2">
            <Settings className={isDark ? 'text-white' : 'text-black'} size={24} />
            <span className="text-2xl font-bold">
              {stats.gamesPlayed > 0 ? Math.round(stats.averageAttempts) : 0}
            </span>
          </div>
          <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Medium Score
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className={`w-16 h-16 mx-auto mb-4 rounded-full border-2 flex items-center justify-center ${isDark ? 'border-white' : 'border-black'
            }`}>
            <Play size={24} />
          </div>
          <h3 className="text-xl font-bold mb-2">Simple game</h3>
          <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Guess the numbers and develop your intuition
          </p>
        </div>

        <div className="text-center">
          <div className={`w-16 h-16 mx-auto mb-4 rounded-full border-2 flex items-center justify-center ${isDark ? 'border-white' : 'border-black'
            }`}>
            <TrendingUp size={24} />
          </div>
          <h3 className="text-xl font-bold mb-2">Tracking Progress</h3>
          <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Keep track of your achievements and improvements
          </p>
        </div>

        <div className="text-center">
          <div className={`w-16 h-16 mx-auto mb-4 rounded-full border-2 flex items-center justify-center ${isDark ? 'border-white' : 'border-black'
            }`}>
            <Settings size={24} />
          </div>
          <h3 className="text-xl font-bold mb-2">Settings</h3>
          <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Choose your difficulty level to suit your taste
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;