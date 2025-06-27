import React, { useState } from 'react';
import { Image, Zap, Trophy, Target, Brain, Users, Star } from 'lucide-react';
import { PageProps } from '../types/game';
import Modal from './Modal';

const GalleryPage: React.FC<PageProps> = ({ isDark }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const galleryItems = [
    {
      id: 1,
      title: 'Игровой процесс',
      description: 'Интуитивный интерфейс для угадывания чисел',
      icon: Zap,
      color: isDark ? 'bg-white/10' : 'bg-black/10'
    },
    {
      id: 2,
      title: 'Достижения',
      description: 'Система наград и достижений',
      icon: Trophy,
      color: isDark ? 'bg-white/10' : 'bg-black/10'
    },
    {
      id: 3,
      title: 'Статистика',
      description: 'Детальная аналитика ваших результатов',
      icon: Target,
      color: isDark ? 'bg-white/10' : 'bg-black/10'
    },
    {
      id: 4,
      title: 'Интуиция',
      description: 'Развитие интуитивного мышления',
      icon: Brain,
      color: isDark ? 'bg-white/10' : 'bg-black/10'
    },
    {
      id: 5,
      title: 'Для всех',
      description: 'Подходит для игроков любого возраста',
      icon: Users,
      color: isDark ? 'bg-white/10' : 'bg-black/10'
    },
    {
      id: 6,
      title: 'Качество',
      description: 'Высокое качество и внимание к деталям',
      icon: Star,
      color: isDark ? 'bg-white/10' : 'bg-black/10'
    }
  ];

  const openImageModal = (title: string) => {
    setSelectedImage(title);
    setIsModalOpen(true);
  };

  const screenshots = [
    {
      url: 'https://images.pexels.com/photos/159832/art-graffiti-mural-painting-159832.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Минималистичный дизайн',
      description: 'Чистый и элегантный интерфейс'
    },
    {
      url: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Темная тема',
      description: 'Комфортная игра в темное время суток'
    },
    {
      url: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Статистика',
      description: 'Отслеживание прогресса и достижений'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Галерея</h1>
        <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          Познакомьтесь с особенностями и возможностями игры
        </p>
      </div>

      {/* Screenshots */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Скриншоты</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {screenshots.map((screenshot, index) => (
            <div
              key={index}
              className={`group cursor-pointer rounded-lg overflow-hidden border transition-all duration-300 ${
                isDark 
                  ? 'border-white/20 hover:border-white/40' 
                  : 'border-black/20 hover:border-black/40'
              }`}
              onClick={() => openImageModal(screenshot.title)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={screenshot.url}
                  alt={screenshot.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className={`absolute inset-0 transition-opacity duration-300 ${
                  isDark 
                    ? 'bg-black/20 group-hover:bg-black/40' 
                    : 'bg-white/20 group-hover:bg-white/40'
                }`}>
                  <div className="flex items-center justify-center h-full">
                    <Image className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
                  </div>
                </div>
              </div>
              <div className={`p-4 ${isDark ? 'bg-white/5' : 'bg-black/5'}`}>
                <h3 className="font-bold mb-2">{screenshot.title}</h3>
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {screenshot.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Особенности</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`group p-6 rounded-lg border transition-all duration-300 cursor-pointer ${
                  isDark 
                    ? 'border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40' 
                    : 'border-black/20 bg-black/5 hover:bg-black/10 hover:border-black/40'
                }`}
                onClick={() => openImageModal(item.title)}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300 ${
                  item.color
                } group-hover:${isDark ? 'bg-white/20' : 'bg-black/20'}`}>
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Design Principles */}
      <section>
        <h2 className="text-2xl font-bold mb-8 text-center">Принципы дизайна</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className={`p-6 rounded-lg border ${
            isDark ? 'border-white/20 bg-white/5' : 'border-black/20 bg-black/5'
          }`}>
            <h3 className="text-xl font-bold mb-4">Минимализм</h3>
            <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Каждый элемент интерфейса продуман и имеет свою функцию. Никаких лишних деталей - только то, что действительно важно для игрового процесса.
            </p>
            <ul className={`space-y-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <li>• Чистые линии и формы</li>
              <li>• Достаточно белого пространства</li>
              <li>• Фокус на содержании</li>
            </ul>
          </div>

          <div className={`p-6 rounded-lg border ${
            isDark ? 'border-white/20 bg-white/5' : 'border-black/20 bg-black/5'
          }`}>
            <h3 className="text-xl font-bold mb-4">Контраст</h3>
            <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Черно-белая цветовая схема создает максимальный контраст, что улучшает читаемость и создает выразительный визуальный образ.
            </p>
            <ul className={`space-y-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <li>• Высокий контраст текста</li>
              <li>• Четкие границы элементов</li>
              <li>• Выделение важной информации</li>
            </ul>
          </div>

          <div className={`p-6 rounded-lg border ${
            isDark ? 'border-white/20 bg-white/5' : 'border-black/20 bg-black/5'
          }`}>
            <h3 className="text-xl font-bold mb-4">Интерактивность</h3>
            <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Каждое взаимодействие сопровождается плавными анимациями и визуальной обратной связью, создавая приятный пользовательский опыт.
            </p>
            <ul className={`space-y-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <li>• Hover эффекты</li>
              <li>• Плавные переходы</li>
              <li>• Анимации загрузки</li>
            </ul>
          </div>

          <div className={`p-6 rounded-lg border ${
            isDark ? 'border-white/20 bg-white/5' : 'border-black/20 bg-black/5'
          }`}>
            <h3 className="text-xl font-bold mb-4">Адаптивность</h3>
            <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Дизайн адаптируется под любые устройства и размеры экранов, обеспечивая комфортную игру везде и всегда.
            </p>
            <ul className={`space-y-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <li>• Мобильная оптимизация</li>
              <li>• Гибкая сетка</li>
              <li>• Touch-friendly интерфейс</li>
            </ul>
          </div>
        </div>
      </section>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={selectedImage || ''}
        content={`Подробная информация о ${selectedImage || 'выбранном элементе'}. Здесь может быть размещена дополнительная информация о функциях, особенностях дизайна или технических деталях.`}
        isDark={isDark}
      />
    </div>
  );
};

export default GalleryPage;