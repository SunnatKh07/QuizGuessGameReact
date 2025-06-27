import React, { useState, useEffect } from 'react';
import { RefreshCw, Trophy, Target, Clock } from 'lucide-react';
import { PageProps } from '../types/game';

const GamePage: React.FC<PageProps> = ({ isDark, stats, updateStats, difficulty }) => {
  const [targetNumber, setTargetNumber] = useState(0);
  const [guess, setGuess] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [gameState, setGameState] = useState<'playing' | 'won' | 'idle'>('idle');
  const [history, setHistory] = useState<string[]>([]);
  const [startTime, setStartTime] = useState<number>(0);
  const [gameTime, setGameTime] = useState(0);

  const difficultyRanges = {
    easy: { min: 1, max: 50, name: 'easy (1-50)' },
    medium: { min: 1, max: 100, name: 'medium (1-100)' },
    hard: { min: 1, max: 500, name: 'hard (1-500)' }
  };

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (gameState === 'playing') {
      interval = setInterval(() => {
        setGameTime(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [gameState, startTime]);

  const startNewGame = () => {
    const range = difficultyRanges[difficulty];
    const newTarget = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
    setTargetNumber(newTarget);
    setGuess('');
    setAttempts(0);
    setFeedback('The game has begun! Try to guess the number.');
    setGameState('playing');
    setHistory([]);
    setStartTime(Date.now());
    setGameTime(0);
  };

  const makeGuess = () => {
    if (!guess || gameState !== 'playing') return;

    const guessNum = parseInt(guess);
    const newAttempts = attempts + 1;
    setAttempts(newAttempts);

    const guessText = `Attempt ${newAttempts}: ${guessNum}`;

    if (guessNum === targetNumber) {
      setFeedback(`Congratulations! You've guessed the number ${targetNumber} in ${newAttempts} attempts!`);
      setGameState('won');
      setHistory(prev => [...prev, `${guessText} - Correct! 🎉`]);

      // Update stats
      const newStats = {
        gamesPlayed: stats.gamesPlayed + 1,
        gamesWon: stats.gamesWon + 1,
        totalAttempts: stats.totalAttempts + newAttempts,
        bestScore: stats.bestScore === 0 ? newAttempts : Math.min(stats.bestScore, newAttempts),
        averageAttempts: (stats.totalAttempts + newAttempts) / (stats.gamesPlayed + 1)
      };
      updateStats(newStats);
    } else if (guessNum < targetNumber) {
      setFeedback("The guessed number is higher! Try again.");
      setHistory(prev => [...prev, `${guessText} - Higher ↑`]);
    } else {
      setFeedback("The guessed number is lower! Try again.");
      setHistory(prev => [...prev, `${guessText} - Lower ↓`]);
    }

    setGuess('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      makeGuess();
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Game "Guess the Number"</h1>
        <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          Current level: {difficultyRanges[difficulty].name}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Game Area */}
        <div className="lg:col-span-2">
          <div className={`p-8 rounded-lg border ${isDark ? 'border-white/20 bg-white/5' : 'border-black/20 bg-black/5'
            }`}>
            {gameState === 'idle' && (
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Ready to start?</h2>
                <p className={`mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Click the button below to start a new game
                </p>
                <button
                  onClick={startNewGame}
                  className={`px-8 py-3 rounded-lg font-medium transition-colors duration-200 ${isDark
                    ? 'bg-white text-black hover:bg-gray-200'
                    : 'bg-black text-white hover:bg-gray-800'
                    }`}
                >
                  Start Game
                </button>
              </div>
            )}

            {gameState === 'playing' && (
              <div>
                <div className="text-center mb-6">
                  <p className={`text-lg mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {feedback}
                  </p>
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <div className="flex items-center space-x-2">
                      <Target size={20} />
                      <span>Attempts: {attempts}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock size={20} />
                      <span>Time: {formatTime(gameTime)}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <input
                    type="number"
                    value={guess}
                    onChange={(e) => setGuess(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Enter a number"
                    className={`flex-1 px-4 py-3 rounded-lg border transition-colors duration-200 ${isDark
                      ? 'bg-black/50 border-white/20 text-white placeholder-gray-400'
                      : 'bg-white border-black/20 text-black placeholder-gray-600'
                      }`}
                  />
                  <button
                    onClick={makeGuess}
                    disabled={!guess}
                    className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${isDark
                      ? 'bg-white text-black hover:bg-gray-200 disabled:bg-gray-600 disabled:text-gray-400'
                      : 'bg-black text-white hover:bg-gray-800 disabled:bg-gray-400 disabled:text-gray-600'
                      }`}
                  >
                    Guess
                  </button>
                </div>
              </div>
            )}

            {gameState === 'won' && (
              <div className="text-center">
                <Trophy className="mx-auto mb-4" size={48} />
                <h2 className="text-2xl font-bold mb-4">Congratulations!</h2>
                <p className={`text-lg mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {feedback}
                </p>
                <p className={`mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Game Time: {formatTime(gameTime)}
                </p>
                <button
                  onClick={startNewGame}
                  className={`px-8 py-3 rounded-lg font-medium transition-colors duration-200 ${isDark
                    ? 'bg-white text-black hover:bg-gray-200'
                    : 'bg-black text-white hover:bg-gray-800'
                    }`}
                >
                  <RefreshCw className="inline mr-2" size={20} />
                  Play Again
                </button>
              </div>
            )}
          </div>
        </div>

        {/* History and Stats */}
        <div className="space-y-6">
          {/* Current Game Stats */}
          <div className={`p-6 rounded-lg border ${isDark ? 'border-white/20 bg-white/5' : 'border-black/20 bg-black/5'
            }`}>
            <h3 className="text-lg font-bold mb-4">Current Game</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Attempts:</span>
                <span className="font-medium">{attempts}</span>
              </div>
              <div className="flex justify-between">
                <span>Time:</span>
                <span className="font-medium">{formatTime(gameTime)}</span>
              </div>
              <div className="flex justify-between">
                <span>Range:</span>
                <span className="font-medium">
                  {difficultyRanges[difficulty].min}-{difficultyRanges[difficulty].max}
                </span>
              </div>
            </div>
          </div>

          {/* History */}
          {history.length > 0 && (
            <div className={`p-6 rounded-lg border ${isDark ? 'border-white/20 bg-white/5' : 'border-black/20 bg-black/5'
              }`}>
              <h3 className="text-lg font-bold mb-4">History of Attempts</h3>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {history.map((entry, index) => (
                  <div
                    key={index}
                    className={`text-sm p-2 rounded ${isDark ? 'bg-black/30' : 'bg-white/50'
                      }`}
                  >
                    {entry}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GamePage;