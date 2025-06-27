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
      title: 'Gameplay',
      description: 'Intuitive interface for guessing numbers',
      icon: Zap,
      color: isDark ? 'bg-white/10' : 'bg-black/10'
    },
    {
      id: 2,
      title: 'Achievements',
      description: 'Reward and achievement system',
      icon: Trophy,
      color: isDark ? 'bg-white/10' : 'bg-black/10'
    },
    {
      id: 3,
      title: 'Statistics',
      description: 'Detailed analytics of your results',
      icon: Target,
      color: isDark ? 'bg-white/10' : 'bg-black/10'
    },
    {
      id: 4,
      title: 'Intuition',
      description: 'Development of intuitive thinking',
      icon: Brain,
      color: isDark ? 'bg-white/10' : 'bg-black/10'
    },
    {
      id: 5,
      title: 'For Everyone',
      description: 'Suitable for players of all ages',
      icon: Users,
      color: isDark ? 'bg-white/10' : 'bg-black/10'
    },
    {
      id: 6,
      title: 'Quality',
      description: 'High quality and attention to detail',
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
      title: 'Minimalist Design',
      description: 'Clean and elegant interface'
    },
    {
      url: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Dark Mode',
      description: 'Comfortable gameplay at night'
    },
    {
      url: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Statistics',
      description: 'Track your progress and achievements'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Gallery</h1>
        <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          Explore the features and capabilities of the game
        </p>
      </div>

      {/* Screenshots */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Screenshots</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {screenshots.map((screenshot, index) => (
            <div
              key={index}
              className={`group cursor-pointer rounded-lg overflow-hidden border transition-all duration-300 ${isDark
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
                <div className={`absolute inset-0 transition-opacity duration-300 ${isDark
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
        <h2 className="text-2xl font-bold mb-8 text-center">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`group p-6 rounded-lg border transition-all duration-300 cursor-pointer ${isDark
                  ? 'border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40'
                  : 'border-black/20 bg-black/5 hover:bg-black/10 hover:border-black/40'
                  }`}
                onClick={() => openImageModal(item.title)}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300 ${item.color
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
        <h2 className="text-2xl font-bold mb-8 text-center">Design Principles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className={`p-6 rounded-lg border ${isDark ? 'border-white/20 bg-white/5' : 'border-black/20 bg-black/5'}`}>
            <h3 className="text-xl font-bold mb-4">Minimalism</h3>
            <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Every UI element is purposeful and functional. No unnecessary clutter—only what truly matters for gameplay.
            </p>
            <ul className={`space-y-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <li>• Clean lines and shapes</li>
              <li>• Ample white space</li>
              <li>• Focus on content</li>
            </ul>
          </div>

          <div className={`p-6 rounded-lg border ${isDark ? 'border-white/20 bg-white/5' : 'border-black/20 bg-black/5'}`}>
            <h3 className="text-xl font-bold mb-4">Contrast</h3>
            <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              A black-and-white color scheme maximizes contrast, improving readability and creating a striking visual impact.
            </p>
            <ul className={`space-y-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <li>• High text contrast</li>
              <li>• Clear element boundaries</li>
              <li>• Highlighted key information</li>
            </ul>
          </div>

          <div className={`p-6 rounded-lg border ${isDark ? 'border-white/20 bg-white/5' : 'border-black/20 bg-black/5'}`}>
            <h3 className="text-xl font-bold mb-4">Interactivity</h3>
            <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Every interaction includes smooth animations and visual feedback, providing a pleasant user experience.
            </p>
            <ul className={`space-y-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <li>• Hover effects</li>
              <li>• Smooth transitions</li>
              <li>• Loading animations</li>
            </ul>
          </div>

          <div className={`p-6 rounded-lg border ${isDark ? 'border-white/20 bg-white/5' : 'border-black/20 bg-black/5'}`}>
            <h3 className="text-xl font-bold mb-4">Responsiveness</h3>
            <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              The design adapts to all devices and screen sizes, ensuring comfortable gameplay anywhere and anytime.
            </p>
            <ul className={`space-y-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <li>• Mobile optimization</li>
              <li>• Flexible grid</li>
              <li>• Touch-friendly interface</li>
            </ul>
          </div>
        </div>
      </section>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={selectedImage || ''}
        content={`Detailed information about ${selectedImage || 'the selected item'}. Additional details about features, design elements, or technical specs can be placed here.`}
        isDark={isDark}
      />
    </div>
  );
};

export default GalleryPage;
