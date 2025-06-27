import React from 'react';
import { Settings, Volume2, Monitor, Gamepad2 } from 'lucide-react';
import { PageProps } from '../types/game';

const SettingsPage: React.FC<PageProps> = ({ isDark, difficulty, setDifficulty, resetStats }) => {
  const difficultyOptions = [
    { value: 'easy', label: 'Легкий', range: '1-50', description: 'Идеально для начинающих' },
    { value: 'medium', label: 'Средний', range: '1-100', description: 'Сбалансированный вызов' },
    { value: 'hard', label: 'Сложный', range: '1-500', description: 'For экспертов' }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Настройки</h1>
        <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          Настройте игру под свои предпочтения
        </p>
      </div>

      <div className="space-y-6">
        {/* Game Settings */}
        <div className={`p-6 rounded-lg border ${
          isDark ? 'border-white/20 bg-white/5' : 'border-black/20 bg-black/5'
        }`}>
          <div className="flex items-center space-x-3 mb-4">
            <Gamepad2 size={24} />
            <h2 className="text-xl font-bold">Игровые настройки</h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-3">Уровень сложности</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {difficultyOptions.map(option => (
                  <button
                    key={option.value}
                    onClick={() => setDifficulty(option.value as 'easy' | 'medium' | 'hard')}
                    className={`p-4 rounded-lg border text-left transition-colors duration-200 ${
                      difficulty === option.value
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
                      Диапазон: {option.range}
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
        <div className={`p-6 rounded-lg border ${
          isDark ? 'border-white/20 bg-white/5' : 'border-black/20 bg-black/5'
        }`}>
          <div className="flex items-center space-x-3 mb-4">
            <Monitor size={24} />
            <h2 className="text-xl font-bold">Настройки отображения</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Тема оформления</div>
                <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Текущая тема: {isDark ? 'Темная' : 'Светлая'}
                </div>
              </div>
              <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Используйте кнопку в шапке для переключения
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Анимации</div>
                <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Плавные переходы и эффекты
                </div>
              </div>
              <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Всегда включены
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Отзывчивый дизайн</div>
                <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Адаптация под размер экрана
                </div>
              </div>
              <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Автоматически
              </div>
            </div>
          </div>
        </div>

        {/* Sound Settings */}
        <div className={`p-6 rounded-lg border ${
          isDark ? 'border-white/20 bg-white/5' : 'border-black/20 bg-black/5'
        }`}>
          <div className="flex items-center space-x-3 mb-4">
            <Volume2 size={24} />
            <h2 className="text-xl font-bold">Настройки звука</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Звуковые эффекты</div>
                <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Звуки при выигрыше и действиях
                </div>
              </div>
              <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                В разработке
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Фоновая музыка</div>
                <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Приятная музыка во время игры
                </div>
              </div>
              <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                В разработке
              </div>
            </div>
          </div>
        </div>

        {/* Data Settings */}
        <div className={`p-6 rounded-lg border ${
          isDark ? 'border-white/20 bg-white/5' : 'border-black/20 bg-black/5'
        }`}>
          <div className="flex items-center space-x-3 mb-4">
            <Settings size={24} />
            <h2 className="text-xl font-bold">Данные</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Автосохранение</div>
                <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Статистика сохраняется автоматически
                </div>
              </div>
              <div className={`text-sm text-green-500`}>
                Активно
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Сброс данных</div>
                <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Удалить всю сохраненную статистику
                </div>
              </div>
              <button
                onClick={resetStats}
                className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors duration-200 ${
                  isDark
                    ? 'border-white/20 text-white hover:bg-white/10'
                    : 'border-black/20 text-black hover:bg-black/10'
                }`}
              >
                Сбросить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;