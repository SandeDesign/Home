import { motion } from 'framer-motion';
import { useSpring, animated } from '@react-spring/web';
import { Zap, ArrowRight } from 'lucide-react';
import { useModal } from '../context/ModalContext';
import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Card } from './ui/card';
import { Spotlight } from './ui/spotlight';
import { SplineScene } from './ui/splite';

export default function Hero() {
  const { openModal } = useModal();
  const { t } = useLanguage();

  const float = useSpring({
    from: { transform: 'translateY(0px)' },
    to: async (next) => {
      while (true) {
        await next({ transform: 'translateY(-20px)' });
        await next({ transform: 'translateY(0px)' });
      }
    },
    config: { duration: 2000 },
  });

  const backgroundAnimation = useSpring({
    from: { backgroundPosition: '0% 0%' },
    to: async (next) => {
      while (true) {
        await next({ backgroundPosition: '100% 100%' });
        await next({ backgroundPosition: '0% 0%' });
      }
    },
    config: { duration: 20000 },
  });

  const scrollToUseCases = () => {
    const useCasesSection = document.getElementById('usecases-section');
    if (useCasesSection) {
      useCasesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="h-screen relative overflow-hidden flex items-center justify-center overscroll-none">
      <div className="w-full h-full relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center overscroll-none relative z-20 pt-48"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-normal">
              {t('heroTitle1')}
              <span className="gradient-text block mt-2">
                {t('heroTitle2')}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
              {t('heroDescription')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
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
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToUseCases}
                className="px-8 py-4 border border-[var(--accent-purple)] text-white rounded-lg 
                         font-semibold flex items-center justify-center gap-2 purple-box-glow 
                         hover:border-[var(--accent-red)] transition-all duration-300"
              >
                {t('learnMore')}
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>

          <div className="absolute inset-0 h-screen overscroll-none z-10">
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full touch-none scale-150 translate-y-32 opacity-50"
            />
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ 
          y: [0, 10, 0],
          opacity: [0.4, 1, 0.4]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      >
        <ArrowRight className="w-8 h-8 transform rotate-90 text-[var(--accent-purple)]" />
      </motion.div>
    </div>
  );
}