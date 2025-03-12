import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import { useModal } from '../context/ModalContext';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../context/LanguageContext';

export default function Header() {
  const { openModal } = useModal();
  const { t } = useLanguage();

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
          <img src="https://fl-group.org/wp-content/uploads/2025/02/Adobe-Express-file.png" alt="Logo" className="h-20" />
        </motion.div>
        
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={openModal}
            className="px-8 py-4 bg-gradient-to-r from-[var(--accent-red)] to-[var(--accent-purple)] 
                     text-white rounded-lg font-semibold flex items-center justify-center gap-2 
                     red-box-glow hover:brightness-110 transition-all duration-300"
          >
            <Zap className="w-5 h-5" />
            {t('getStarted')}
          </motion.button>
        </div>
      </div>
    </header>
  );
}