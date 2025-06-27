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
        <h1 className="text-4xl font-bold mb-4">Contacts</h1>
        <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          Contact us for support or suggestions
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className={`p-8 rounded-lg border ${isDark ? 'border-white/20 bg-white/5' : 'border-black/20 bg-black/5'
          }`}>
          <div className="flex items-center space-x-3 mb-6">
            <Mail size={24} />
            <h2 className="text-2xl font-bold">Write to us</h2>
          </div>

          {isSubmitted ? (
            <div className="text-center py-8">
              <Send className="mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold mb-2">Message sent!</h3>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                We have received your message and will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-medium mb-2">
                  <User className="inline mr-2" size={16} />
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 ${isDark
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
                  className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 ${isDark
                    ? 'bg-black/50 border-white/20 text-white placeholder-gray-400'
                    : 'bg-white border-black/20 text-black placeholder-gray-600'
                    }`}
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-medium mb-2">
                  <MessageCircle className="inline mr-2" size={16} />
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 resize-none ${isDark
                    ? 'bg-black/50 border-white/20 text-white placeholder-gray-400'
                    : 'bg-white border-black/20 text-black placeholder-gray-600'
                    }`}
                  placeholder="Ваше сообщение..."
                />
              </div>

              <button
                type="submit"
                className={`w-full px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${isDark
                  ? 'bg-white text-black hover:bg-gray-200'
                  : 'bg-black text-white hover:bg-gray-800'
                  }`}
              >
                <Send className="inline mr-2" size={20} />
                Send message
              </button>
            </form>
          )}
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <div className={`p-6 rounded-lg border ${isDark ? 'border-white/20 bg-white/5' : 'border-black/20 bg-black/5'
            }`}>
            <div className="flex items-center space-x-3 mb-4">
              <Mail size={24} />
              <h3 className="text-xl font-bold">Email</h3>
            </div>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              support@mindgame.com
            </p>
            <p className={`text-sm mt-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              We respond within 24 hours
            </p>
          </div>

          <div className={`p-6 rounded-lg border ${isDark ? 'border-white/20 bg-white/5' : 'border-black/20 bg-black/5'
            }`}>
            <div className="flex items-center space-x-3 mb-4">
              <Phone size={24} />
              <h3 className="text-xl font-bold">Phone</h3>
            </div>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              +7 (999) 123-45-67
            </p>
            <p className={`text-sm mt-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Monday - Friday, 9:00 AM - 6:00 PM
            </p>
          </div>

          <div className={`p-6 rounded-lg border ${isDark ? 'border-white/20 bg-white/5' : 'border-black/20 bg-black/5'
            }`}>
            <div className="flex items-center space-x-3 mb-4">
              <MapPin size={24} />
              <h3 className="text-xl font-bold">Address</h3>
            </div>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Moscow, Primera St., 123
            </p>
            <p className={`text-sm mt-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Development Office
            </p>
          </div>

          <div className={`p-6 rounded-lg border ${isDark ? 'border-white/20 bg-white/5' : 'border-black/20 bg-black/5'
            }`}>
            <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-medium mb-1">How to reset statistics?</h4>
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Go to the "Settings" section and click the "Reset Statistics" button.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-1">Can I play without the internet?</h4>
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Yes, the game works completely offline after the first download.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-1">How to change difficulty?</h4>
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  In the "Settings" section, select the desired difficulty level.
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