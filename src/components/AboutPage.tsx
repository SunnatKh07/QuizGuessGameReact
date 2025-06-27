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
        <h1 className="text-4xl font-bold mb-4">About Project</h1>
        <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          MindGame is a modern interpretation of the classic number guessing game.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className={`p-8 rounded-lg border transition-colors duration-200 ${isDark
          ? 'border-white/20 bg-white/5 hover:bg-white/10'
          : 'border-black/20 bg-black/5 hover:bg-black/10'
          }`}>
          <Brain className="mb-4" size={32} />
          <h3 className="text-xl font-bold mb-2">Developing intuition</h3>
          <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Train your intuition and analytical skills.</p>
          <button
            onClick={() => openModal('Developing intuition', 'The game helps develop intuitive thinking, teaches you to analyze patterns and make decisions based on limited information. Each attempt to guess the number is a small experiment that helps you understand how your subconscious works.')}
            className={`text-sm font-medium transition-colors duration-200 ${isDark
              ? 'text-white hover:text-gray-300'
              : 'text-black hover:text-gray-700'
              }`}
          >
            Learn more →
          </button>
        </div>

        <div className={`p-8 rounded-lg border transition-colors duration-200 ${isDark
          ? 'border-white/20 bg-white/5 hover:bg-white/10'
          : 'border-black/20 bg-black/5 hover:bg-black/10'
          }`}>
          <Target className="mb-4" size={32} />
          <h3 className="text-xl font-bold mb-2">Accuracy and speed</h3>
          <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Improve your accuracy and speed of decision making
          </p>
          <button
            onClick={() => openModal('Accuracy and speed', 'The game trains the ability to quickly analyze information and make accurate decisions. Different levels of difficulty allow you to gradually increase the load and develop strategic thinking skills.')}
            className={`text-sm font-medium transition-colors duration-200 ${isDark
              ? 'text-white hover:text-gray-300'
              : 'text-black hover:text-gray-700'
              }`}
          >
            Learn more →
          </button>
        </div>

        <div className={`p-8 rounded-lg border transition-colors duration-200 ${isDark
          ? 'border-white/20 bg-white/5 hover:bg-white/10'
          : 'border-black/20 bg-black/5 hover:bg-black/10'
          }`}>
          <Zap className="mb-4" size={32} />
          <h3 className="text-xl font-bold mb-2">Fast feedback</h3>
          <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Get instant feedback on your actions
          </p>
          <button
            onClick={() => openModal('Fast feedback', 'The system responds instantly to your actions, providing clear feedback. This helps quickly adjust strategies and learn from mistakes, which is a key element of effective learning.')}
            className={`text-sm font-medium transition-colors duration-200 ${isDark
              ? 'text-white hover:text-gray-300'
              : 'text-black hover:text-gray-700'
              }`}
          >
            Learn more →
          </button>
        </div>

        <div className={`p-8 rounded-lg border transition-colors duration-200 ${isDark
          ? 'border-white/20 bg-white/5 hover:bg-white/10'
          : 'border-black/20 bg-black/5 hover:bg-black/10'
          }`}>
          <Users className="mb-4" size={32} />
          <h3 className="text-xl font-bold mb-2">For all ages</h3>
          <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Suitable for players of all ages and skill levels
          </p>
          <button
            onClick={() => openModal('For all ages', 'The game is designed with the needs of different age groups in mind. Simple rules make it accessible to children, while various difficulty levels provide a challenge for adults. It\'s a great way to spend time productively with the whole family.')}
            className={`text-sm font-medium transition-colors duration-200 ${isDark
              ? 'text-white hover:text-gray-300'
              : 'text-black hover:text-gray-700'
              }`}
          >
            Learn more →
          </button>
        </div>
      </div>

      <div className={`p-8 rounded-lg border ${isDark ? 'border-white/20 bg-white/5' : 'border-black/20 bg-black/5'
        }`}>
        <h2 className="text-2xl font-bold mb-4">How does this work</h2>
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${isDark ? 'bg-white text-black' : 'bg-black text-white'
              }`}>
              1
            </div>
            <div>
              <h4 className="font-medium mb-1">Choose difficulty level</h4>
              <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Easy (1-50), Medium (1-100), Hard (1-500)
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${isDark ? 'bg-white text-black' : 'bg-black text-white'
              }`}>
              2
            </div>
            <div>
              <h4 className="font-medium mb-1">Guess the numbers</h4>
              <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                The system will hint whether the guessed number is higher or lower
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${isDark ? 'bg-white text-black' : 'bg-black text-white'
              }`}>
              3
            </div>
            <div>
              <h4 className="font-medium mb-1">Track your progress</h4>
              <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Your statistics are saved and updated after each game
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