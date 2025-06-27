import React, { useState } from 'react';
import { Brain, Target, Zap, Users } from 'lucide-react';
import { PageProps } from '../types/game';
import Modal from './Modal';

const AboutPage: React.FC<PageProps> = ({ isDark }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', content: '' });

  const openModal = (title: string, content: string) => {
    setModalContent({ title, content });
    setIsModalOpen(true);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">О проекте</h1>
        <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          MindGame - это современная интерпретация классической игры угадывания чисел
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className={`p-8 rounded-lg border transition-colors duration-200 ${
          isDark 
            ? 'border-white/20 bg-white/5 hover:bg-white/10' 
            : 'border-black/20 bg-black/5 hover:bg-black/10'
        }`}>
          <Brain className="mb-4" size={32} />
          <h3 className="text-xl font-bold mb-2">Развитие интуиции</h3>
          <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Тренируйте свою интуицию и аналитические способности
          </p>
          <button
            onClick={() => openModal('Развитие интуиции', 'Игра помогает развивать интуитивное мышление, учит анализировать паттерны и принимать решения на основе ограниченной информации. Каждая попытка угадать число - это маленький эксперимент, который помогает понять, как работает ваше подсознание.')}
            className={`text-sm font-medium transition-colors duration-200 ${
              isDark
                ? 'text-white hover:text-gray-300'
                : 'text-black hover:text-gray-700'
            }`}
          >
            Узнать больше →
          </button>
        </div>

        <div className={`p-8 rounded-lg border transition-colors duration-200 ${
          isDark 
            ? 'border-white/20 bg-white/5 hover:bg-white/10' 
            : 'border-black/20 bg-black/5 hover:bg-black/10'
        }`}>
          <Target className="mb-4" size={32} />
          <h3 className="text-xl font-bold mb-2">Точность и скорость</h3>
          <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Улучшайте свою точность и скорость принятия решений
          </p>
          <button
            onClick={() => openModal('Точность и скорость', 'Игра тренирует способность быстро анализировать информацию и принимать точные решения. Различные уровни сложности позволяют постепенно увеличивать нагрузку и развивать навыки стратегического мышления.')}
            className={`text-sm font-medium transition-colors duration-200 ${
              isDark
                ? 'text-white hover:text-gray-300'
                : 'text-black hover:text-gray-700'
            }`}
          >
            Узнать больше →
          </button>
        </div>

        <div className={`p-8 rounded-lg border transition-colors duration-200 ${
          isDark 
            ? 'border-white/20 bg-white/5 hover:bg-white/10' 
            : 'border-black/20 bg-black/5 hover:bg-black/10'
        }`}>
          <Zap className="mb-4" size={32} />
          <h3 className="text-xl font-bold mb-2">Быстрая обратная связь</h3>
          <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Получайте мгновенную обратную связь о своих действиях
          </p>
          <button
            onClick={() => openModal('Быстрая обратная связь', 'Система мгновенно реагирует на ваши действия, предоставляя четкую обратную связь. Это помогает быстро корректировать стратегию и учиться на своих ошибках, что является ключевым элементом эффективного обучения.')}
            className={`text-sm font-medium transition-colors duration-200 ${
              isDark
                ? 'text-white hover:text-gray-300'
                : 'text-black hover:text-gray-700'
            }`}
          >
            Узнать больше →
          </button>
        </div>

        <div className={`p-8 rounded-lg border transition-colors duration-200 ${
          isDark 
            ? 'border-white/20 bg-white/5 hover:bg-white/10' 
            : 'border-black/20 bg-black/5 hover:bg-black/10'
        }`}>
          <Users className="mb-4" size={32} />
          <h3 className="text-xl font-bold mb-2">Для всех возрастов</h3>
          <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Подходит для игроков любого возраста и уровня подготовки
          </p>
          <button
            onClick={() => openModal('Для всех возрастов', 'Игра разработана с учетом потребностей разных возрастных групп. Простые правила делают её доступной для детей, а различные уровни сложности обеспечивают вызов и для взрослых. Это идеальный способ провести время с пользой для всей семьи.')}
            className={`text-sm font-medium transition-colors duration-200 ${
              isDark
                ? 'text-white hover:text-gray-300'
                : 'text-black hover:text-gray-700'
            }`}
          >
            Узнать больше →
          </button>
        </div>
      </div>

      <div className={`p-8 rounded-lg border ${
        isDark ? 'border-white/20 bg-white/5' : 'border-black/20 bg-black/5'
      }`}>
        <h2 className="text-2xl font-bold mb-4">Как это работает</h2>
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
              isDark ? 'bg-white text-black' : 'bg-black text-white'
            }`}>
              1
            </div>
            <div>
              <h4 className="font-medium mb-1">Выберите уровень сложности</h4>
              <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Легкий (1-50), Средний (1-100), Сложный (1-500)
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
              isDark ? 'bg-white text-black' : 'bg-black text-white'
            }`}>
              2
            </div>
            <div>
              <h4 className="font-medium mb-1">Угадывайте числа</h4>
              <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Система подскажет, больше или меньше загаданное число
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
              isDark ? 'bg-white text-black' : 'bg-black text-white'
            }`}>
              3
            </div>
            <div>
              <h4 className="font-medium mb-1">Отслеживайте прогресс</h4>
              <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Ваша статистика сохраняется и обновляется после каждой игры
              </p>
            </div>
          </div>
        </div>
      </div>

      <Modal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalContent.title}
        content={modalContent.content}
        isDark={isDark}
      />
    </div>
  );
};

export default AboutPage;