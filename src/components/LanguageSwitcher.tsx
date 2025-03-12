import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const getLanguageLabel = (lang: string) => {
    switch (lang) {
      case 'nl': return 'NL';
      case 'en': return 'EN';
      case 'de': return 'DE';
      default: return 'NL';
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageSelect = (lang: 'nl' | 'en' | 'de') => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleDropdown}
        className="flex items-center gap-1 px-3 py-2 rounded-lg bg-white/10 text-gray-300 hover:bg-white/20 transition-colors"
      >
        {getLanguageLabel(language)}
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </motion.button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-24 bg-[var(--primary)] border border-[var(--accent-purple)] rounded-lg shadow-lg overflow-hidden z-50"
          >
            <div className="py-1">
              <button
                onClick={() => handleLanguageSelect('nl')}
                className={`w-full px-4 py-2 text-left text-sm transition-colors ${
                  language === 'nl' 
                    ? 'bg-gradient-to-r from-[var(--accent-red)] to-[var(--accent-purple)] text-white' 
                    : 'text-gray-300 hover:bg-white/10'
                }`}
              >
                Nederlands
              </button>
              <button
                onClick={() => handleLanguageSelect('en')}
                className={`w-full px-4 py-2 text-left text-sm transition-colors ${
                  language === 'en' 
                    ? 'bg-gradient-to-r from-[var(--accent-red)] to-[var(--accent-purple)] text-white' 
                    : 'text-gray-300 hover:bg-white/10'
                }`}
              >
                English
              </button>
              <button
                onClick={() => handleLanguageSelect('de')}
                className={`w-full px-4 py-2 text-left text-sm transition-colors ${
                  language === 'de' 
                    ? 'bg-gradient-to-r from-[var(--accent-red)] to-[var(--accent-purple)] text-white' 
                    : 'text-gray-300 hover:bg-white/10'
                }`}
              >
                Deutsch
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}