import React from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
  isDark: boolean;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, content, isDark }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className={`absolute inset-0 transition-opacity duration-300 ${
          isDark ? 'bg-black/80' : 'bg-white/80'
        } backdrop-blur-sm`}
        onClick={onClose}
      />
      <div className={`relative w-full max-w-md mx-4 p-6 rounded-lg border transition-all duration-300 ${
        isDark 
          ? 'bg-black border-white/20' 
          : 'bg-white border-black/20'
      }`}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <button
            onClick={onClose}
            className={`p-2 rounded-lg transition-colors duration-200 ${
              isDark
                ? 'hover:bg-white/10'
                : 'hover:bg-black/10'
            }`}
          >
            <X size={20} />
          </button>
        </div>
        <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          {content}
        </p>
      </div>
    </div>
  );
};

export default Modal;