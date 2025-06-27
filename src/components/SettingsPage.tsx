import React from 'react';
import { Settings, Volume2, Monitor, Gamepad2 } from 'lucide-react';
import { PageProps } from '../types/game';

const SettingsPage: React.FC<PageProps> = ({ isDark, difficulty, setDifficulty, resetStats }) => {
  const difficultyOptions = [
    { value: 'easy', label: 'Easy', range: '1-50', description: 'Ideal for beginners' },
    { value: 'medium', label: 'Medium', range: '1-100', description: 'Balanced challenge' },
    { value: 'hard', label: 'Hard', range: '1-500', description: 'For experts' }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Settings</h1>
        <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          Customize the game to your preferences
        </p>
      </div>

      <div className="space-y-6">
        {/* Game Settings */}
        <div className={`p-6 rounded-lg border ${isDark ? 'border-white/20 bg-white/5' : 'border-black/20 bg-black/5'
          }`}>
          <div className="flex items-center space-x-3 mb-4">
            <Gamepad2 size={24} />
            <h2 className="text-xl font-bold">Game Settings</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-3">Difficulty Level</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {difficultyOptions.map(option => (
                  <button
                    key={option.value}
                    onClick={() => setDifficulty(option.value as 'easy' | 'medium' | 'hard')}
                    className={`p-4 rounded-lg border text-left transition-colors duration-200 ${difficulty === option.value
                      ? isDark
                        ? 'border-white bg-white/10'
                        : 'border-black bg-black/10'
                      : isDark
                        ? 'border-white/20 hover:bg-white/5'
                        : 'border-black/20 hover:bg-black/5'
                      }`}
                  >
                    <div className="font-medium mb-1">{option.label}</div>
                    <div className={`text-sm mb-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Range: {option.range}
                    </div>
                    <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {option.description}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Display Settings */}
        <div className={`p-6 rounded-lg border ${isDark ? 'border-white/20 bg-white/5' : 'border-black/20 bg-black/5'
          }`}>
          <div className="flex items-center space-x-3 mb-4">
            <Monitor size={24} />
            <h2 className="text-xl font-bold">Display Settings</h2>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Theme</div>
                <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Current theme: {isDark ? 'Dark' : 'Light'}
                </div>
              </div>
              <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Use the button in the header to switch
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Animations</div>
                <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Smooth transitions and effects
                </div>
              </div>
              <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Always enabled
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Responsive Design</div>
                <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Adapts to screen size
                </div>
              </div>
              <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Automatically
              </div>
            </div>
          </div>
        </div>

        {/* Sound Settings */}
        <div className={`p-6 rounded-lg border ${isDark ? 'border-white/20 bg-white/5' : 'border-black/20 bg-black/5'
          }`}>
          <div className="flex items-center space-x-3 mb-4">
            <Volume2 size={24} />
            <h2 className="text-xl font-bold">Sound Settings</h2>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Sound Effects</div>
                <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Sounds on win and actions
                </div>
              </div>
              <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                In development
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Background Music</div>
                <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Pleasant music during the game
                </div>
              </div>
              <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                In development
              </div>
            </div>
          </div>
        </div>

        {/* Data Settings */}
        <div className={`p-6 rounded-lg border ${isDark ? 'border-white/20 bg-white/5' : 'border-black/20 bg-black/5'
          }`}>
          <div className="flex items-center space-x-3 mb-4">
            <Settings size={24} />
            <h2 className="text-xl font-bold">Data</h2>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Autosave</div>
                <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Statistics are saved automatically
                </div>
              </div>
              <div className={`text-sm text-green-500`}>
                Active
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Reset Data</div>
                <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Delete all saved statistics
                </div>
              </div>
              <button
                onClick={resetStats}
                className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors duration-200 ${isDark
                  ? 'border-white/20 text-white hover:bg-white/10'
                  : 'border-black/20 text-black hover:bg-black/10'
                  }`}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;