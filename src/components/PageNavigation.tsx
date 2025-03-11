import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useModal } from '../context/ModalContext';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../context/LanguageContext';

export default function PageNavigation() {
  const location = useLocation();
  const { openModal } = useModal();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language } = useLanguage();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const getLocalizedLabels = () => {
    if (language === 'en') {
      return {
        webDesign: 'Web Design',
        privacy: 'Privacy',
        terms: 'Terms',
        cookies: 'Cookies',
        home: 'Home',
        getStarted: 'Get Started'
      };
    } else if (language === 'de') {
      return {
        webDesign: 'Webdesign',
        privacy: 'Datenschutz',
        terms: 'AGB',
        cookies: 'Cookies',
        home: 'Startseite',
        getStarted: 'Loslegen'
      };
    } else {
      // Default to Dutch
      return {
        webDesign: 'Web Design',
        privacy: 'Privacy',
        terms: 'Voorwaarden',
        cookies: 'Cookies',
        home: 'Home',
        getStarted: 'Aan de slag'
      };
    }
  };
  
  const labels = getLocalizedLabels();
  
  const pages = [
    { path: '/web-design-services', label: labels.webDesign },
    { path: '/privacy-policy', label: labels.privacy },
    { path: '/terms-conditions', label: labels.terms },
    { path: '/cookie-policy', label: labels.cookies },
  ];
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
          whileHover={{ 
            scale: 1.05,
            rotate: [0, -2, 0, 2, 0],
            transition: { duration: 0.5 }
          }}
        >
          <Link to="/">
            <img src="https://fl-group.org/wp-content/uploads/2025/02/Adobe-Express-file.png" alt="Logo" className="h-20" />
          </Link>
        </motion.div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {pages.map(page => (
            <Link 
              key={page.path}
              to={page.path}
              className={`text-sm font-medium transition-colors ${
                location.pathname === page.path 
                  ? 'text-[var(--accent-red)]' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {page.label}
            </Link>
          ))}
          
          <Link 
            to="/"
            className={`text-sm font-medium transition-colors ${
              location.pathname === '/' 
                ? 'text-[var(--accent-red)]' 
                : 'text-gray-300 hover:text-white'
            }`}
          >
            {labels.home}
          </Link>
          
          <div className="ml-4">
            <LanguageSwitcher />
          </div>
          
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={openModal}
            className="px-6 py-3 bg-gradient-to-r from-[var(--accent-red)] to-[var(--accent-purple)] 
                     text-white rounded-lg font-semibold flex items-center justify-center gap-2 
                     red-box-glow hover:brightness-110 transition-all duration-300"
          >
            <Zap className="w-4 h-4" />
            {labels.getStarted}
          </motion.button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-4">
          <LanguageSwitcher />
          
          <button
            onClick={toggleMenu}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatedMobileMenu isOpen={isMenuOpen} pages={pages} onClose={toggleMenu} openModal={openModal} homeLabel={labels.home} getStartedLabel={labels.getStarted} />
    </header>
  );
}

interface AnimatedMobileMenuProps {
  isOpen: boolean;
  pages: { path: string; label: string }[];
  onClose: () => void;
  openModal: () => void;
  homeLabel: string;
  getStartedLabel: string;
}

function AnimatedMobileMenu({ isOpen, pages, onClose, openModal, homeLabel, getStartedLabel }: AnimatedMobileMenuProps) {
  const location = useLocation();
  
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ 
        height: isOpen ? 'auto' : 0,
        opacity: isOpen ? 1 : 0
      }}
      transition={{ duration: 0.3 }}
      className="md:hidden overflow-hidden bg-black/95"
    >
      <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
        {pages.map(page => (
          <Link 
            key={page.path}
            to={page.path}
            onClick={onClose}
            className={`py-2 text-lg font-medium transition-colors ${
              location.pathname === page.path 
                ? 'text-[var(--accent-red)]' 
                : 'text-gray-300 hover:text-white'
            }`}
          >
            {page.label}
          </Link>
        ))}
        
        <Link 
          to="/"
          onClick={onClose}
          className={`py-2 text-lg font-medium transition-colors ${
            location.pathname === '/' 
              ? 'text-[var(--accent-red)]' 
              : 'text-gray-300 hover:text-white'
          }`}
        >
          {homeLabel}
        </Link>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            openModal();
            onClose();
          }}
          className="mt-4 py-3 bg-gradient-to-r from-[var(--accent-red)] to-[var(--accent-purple)] 
                   text-white rounded-lg font-semibold flex items-center justify-center gap-2 
                   red-box-glow hover:brightness-110 transition-all duration-300"
        >
          <Zap className="w-5 h-5" />
          {getStartedLabel}
        </motion.button>
      </div>
    </motion.div>
  );
}