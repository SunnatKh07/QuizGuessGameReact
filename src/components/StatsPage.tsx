import React from 'react';
import { Trophy, Target, TrendingUp, Play, RotateCcw } from 'lucide-react';
import { PageProps } from '../types/game';

const StatsPage: React.FC<PageProps> = ({ isDark, stats, resetStats }) => {
  const winRate = stats.gamesPlayed > 0 ? (stats.gamesWon / stats.gamesPlayed * 100).toFixed(1) : 0;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Статистика</h1>
        <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          Отслеживайте свой прогресс и достижения
        </p>
      </div>

      {/* Main Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className={`p-6 rounded-lg border text-center transition-colors duration-200 ${
          isDark 
            ? 'border-white/20 bg-white/5 hover:bg-white/10' 
            : 'border-black/20 bg-black/5 hover:bg-black/10'
        }`}>
          <Play className="mx-auto mb-3" size={32} />
          <div className="text-3xl font-bold mb-1">{stats.gamesPlayed}</div>
          <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Игр сыграно
          </div>
        </div>

        <div className={`p-6 rounded-lg border text-center transition-colors duration-200 ${
          isDark 
            ? 'border-white/20 bg-white/5 hover:bg-white/10' 
            : 'border-black/20 bg-black/5 hover:bg-black/10'
        }`}>
          <Trophy className="mx-auto mb-3" size={32} />
          <div className="text-3xl font-bold mb-1">{stats.gamesWon}</div>
          <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Побед
          </div>
        </div>

        <div className={`p-6 rounded-lg border text-center transition-colors duration-200 ${
          isDark 
            ? 'border-white/20 bg-white/5 hover:bg-white/10' 
            : 'border-black/20 bg-black/5 hover:bg-black/10'
        }`}>
          <Target className="mx-auto mb-3" size={32} />
          <div className="text-3xl font-bold mb-1">{stats.bestScore || 0}</div>
          <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Лучший результат
          </div>
        </div>

        <div className={`p-6 rounded-lg border text-center transition-colors duration-200 ${
          isDark 
            ? 'border-white/20 bg-white/5 hover:bg-white/10' 
            : 'border-black/20 bg-black/5 hover:bg-black/10'
        }`}>
          <TrendingUp className="mx-auto mb-3" size={32} />
          <div className="text-3xl font-bold mb-1">{winRate}%</div>
          <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Процент побед
          </div>
        </div>
      </div>

      {/* Detailed Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className={`p-6 rounded-lg border ${
          isDark ? 'border-white/20 bg-white/5' : 'border-black/20 bg-black/5'
        }`}>
          <h2 className="text-xl font-bold mb-4">Детализированная статистика</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Общее количество попыток:</span>
              <span className="font-medium">{stats.totalAttempts}</span>
            </div>
            <div className="flex justify-between">
              <span>Средний результат:</span>
              <span className="font-medium">
                {stats.gamesPlayed > 0 ? stats.averageAttempts.toFixed(1) : 0}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Игр проиграно:</span>
              <span className="font-medium">{stats.gamesPlayed - stats.gamesWon}</span>
            </div>
            <div className="flex justify-between">
              <span>Эффективность:</span>
              <span className="font-medium">
                {stats.bestScore > 0 ? (stats.bestScore / (stats.averageAttempts || 1) * 100).toFixed(1) : 0}%
              </span>
            </div>
          </div>
        </div>

        <div className={`p-6 rounded-lg border ${
          isDark ? 'border-white/20 bg-white/5' : 'border-black/20 bg-black/5'
        }`}>
          <h2 className="text-xl font-bold mb-4">Достижения</h2>
          <div className="space-y-3">
            <div className={`flex items-center space-x-3 p-3 rounded-lg ${
              stats.gamesPlayed >= 1 
                ? isDark ? 'bg-white/10' : 'bg-black/10'
                : isDark ? 'bg-white/5' : 'bg-black/5'
            }`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                stats.gamesPlayed >= 1 
                  ? isDark ? 'bg-white text-black' : 'bg-black text-white'
                  : isDark ? 'bg-gray-600 text-gray-400' : 'bg-gray-400 text-gray-600'
              }`}>
                🎯
              </div>
              <div>
                <div className="font-medium">Первая игра</div>
                <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Сыграть первую игру
                </div>
              </div>
            </div>

            <div className={`flex items-center space-x-3 p-3 rounded-lg ${
              stats.gamesWon >= 1 
                ? isDark ? 'bg-white/10' : 'bg-black/10'
                : isDark ? 'bg-white/5' : 'bg-black/5'
            }`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                stats.gamesWon >= 1 
                  ? isDark ? 'bg-white text-black' : 'bg-black text-white'
                  : isDark ? 'bg-gray-600 text-gray-400' : 'bg-gray-400 text-gray-600'
              }`}>
                🏆
              </div>
              <div>
                <div className="font-medium">Первая победа</div>
                <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Выиграть первую игру
                </div>
              </div>
            </div>

            <div className={`flex items-center space-x-3 p-3 rounded-lg ${
              stats.gamesWon >= 10 
                ? isDark ? 'bg-white/10' : 'bg-black/10'
                : isDark ? 'bg-white/5' : 'bg-black/5'
            }`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                stats.gamesWon >= 10 
                  ? isDark ? 'bg-white text-black' : 'bg-black text-white'
                  : isDark ? 'bg-gray-600 text-gray-400' : 'bg-gray-400 text-gray-600'
              }`}>
                💎
              </div>
              <div>
                <div className="font-medium">Десяток побед</div>
                <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Выиграть 10 игр
                </div>
              </div>
            </div>

            <div className={`flex items-center space-x-3 p-3 rounded-lg ${
              stats.bestScore > 0 && stats.bestScore <= 3 
                ? isDark ? 'bg-white/10' : 'bg-black/10'
                : isDark ? 'bg-white/5' : 'bg-black/5'
            }`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                stats.bestScore > 0 && stats.bestScore <= 3 
                  ? isDark ? 'bg-white text-black' : 'bg-black text-white'
                  : isDark ? 'bg-gray-600 text-gray-400' : 'bg-gray-400 text-gray-600'
              }`}>
                ⚡
              </div>
              <div>
                <div className="font-medium">Молния</div>
                <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Угадать с 3 попыток или меньше
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reset Stats */}
      <div className="text-center">
        <button
          onClick={resetStats}
          className={`px-6 py-3 rounded-lg font-medium border transition-colors duration-200 ${
            isDark
              ? 'border-white/20 text-white hover:bg-white/10'
              : 'border-black/20 text-black hover:bg-black/10'
          }`}
        >
          <RotateCcw className="inline mr-2" size={20} />
          Сбросить статистику
        </button>
      </div>
    </div>
  );
};

export default StatsPage;