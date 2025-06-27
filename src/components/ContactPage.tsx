import React, { useState } from 'react';
import { Mail, MessageCircle, Send, User, Phone, MapPin } from 'lucide-react';
import { PageProps } from '../types/game';

const ContactPage: React.FC<PageProps> = ({ isDark }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Контакты</h1>
        <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          Свяжитесь с нами для получения поддержки или предложений
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className={`p-8 rounded-lg border ${
          isDark ? 'border-white/20 bg-white/5' : 'border-black/20 bg-black/5'
        }`}>
          <div className="flex items-center space-x-3 mb-6">
            <Mail size={24} />
            <h2 className="text-2xl font-bold">Напишите нам</h2>
          </div>

          {isSubmitted ? (
            <div className="text-center py-8">
              <Send className="mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold mb-2">Сообщение отправлено!</h3>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Мы получили ваше сообщение и свяжемся с вами в ближайшее время.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-medium mb-2">
                  <User className="inline mr-2" size={16} />
                  Имя
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 ${
                    isDark
                      ? 'bg-black/50 border-white/20 text-white placeholder-gray-400'
                      : 'bg-white border-black/20 text-black placeholder-gray-600'
                  }`}
                  placeholder="Ваше имя"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-medium mb-2">
                  <Mail className="inline mr-2" size={16} />
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 ${
                    isDark
                      ? 'bg-black/50 border-white/20 text-white placeholder-gray-400'
                      : 'bg-white border-black/20 text-black placeholder-gray-600'
                  }`}
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-medium mb-2">
                  <MessageCircle className="inline mr-2" size={16} />
                  Сообщение
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 resize-none ${
                    isDark
                      ? 'bg-black/50 border-white/20 text-white placeholder-gray-400'
                      : 'bg-white border-black/20 text-black placeholder-gray-600'
                  }`}
                  placeholder="Ваше сообщение..."
                />
              </div>

              <button
                type="submit"
                className={`w-full px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                  isDark
                    ? 'bg-white text-black hover:bg-gray-200'
                    : 'bg-black text-white hover:bg-gray-800'
                }`}
              >
                <Send className="inline mr-2" size={20} />
                Отправить сообщение
              </button>
            </form>
          )}
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <div className={`p-6 rounded-lg border ${
            isDark ? 'border-white/20 bg-white/5' : 'border-black/20 bg-black/5'
          }`}>
            <div className="flex items-center space-x-3 mb-4">
              <Mail size={24} />
              <h3 className="text-xl font-bold">Email</h3>
            </div>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              support@mindgame.com
            </p>
            <p className={`text-sm mt-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Мы отвечаем в течение 24 часов
            </p>
          </div>

          <div className={`p-6 rounded-lg border ${
            isDark ? 'border-white/20 bg-white/5' : 'border-black/20 bg-black/5'
          }`}>
            <div className="flex items-center space-x-3 mb-4">
              <Phone size={24} />
              <h3 className="text-xl font-bold">Телефон</h3>
            </div>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              +7 (999) 123-45-67
            </p>
            <p className={`text-sm mt-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Понедельник - Пятница, 9:00 - 18:00
            </p>
          </div>

          <div className={`p-6 rounded-lg border ${
            isDark ? 'border-white/20 bg-white/5' : 'border-black/20 bg-black/5'
          }`}>
            <div className="flex items-center space-x-3 mb-4">
              <MapPin size={24} />
              <h3 className="text-xl font-bold">Адрес</h3>
            </div>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              г. Москва, ул. Примерная, д. 123
            </p>
            <p className={`text-sm mt-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Офис разработки
            </p>
          </div>

          <div className={`p-6 rounded-lg border ${
            isDark ? 'border-white/20 bg-white/5' : 'border-black/20 bg-black/5'
          }`}>
            <h3 className="text-xl font-bold mb-4">Часто задаваемые вопросы</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-medium mb-1">Как сбросить статистику?</h4>
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Перейдите в раздел "Настройки" и нажмите кнопку "Сбросить статистику".
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-1">Можно ли играть без интернета?</h4>
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Да, игра работает полностью офлайн после первой загрузки.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-1">Как изменить сложность?</h4>
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  В разделе "Настройки" выберите нужный уровень сложности.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;