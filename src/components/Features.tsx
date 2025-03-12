import { motion } from 'framer-motion';
import { Zap, Clock, TrendingUp, Shield } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Features() {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: t('saveTime'),
      description: t('saveTimeDesc')
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: t('preventCosts'),
      description: t('preventCostsDesc')
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: t('boostEfficiency'),
      description: t('boostEfficiencyDesc')
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: t('instantResults'),
      description: t('instantResultsDesc')
    }
  ];

  return (
    <section id="features-section" className="py-20 relative overflow-hidden">
      {/* Gradient connector from hero to features section */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-10"></div>
      
      <div className="container mx-auto px-4 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('whyChoose')} <span className="gradient-text">{t('automation')}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t('featuresDescription')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-lg border border-[var(--accent-purple)] hover:border-[var(--accent-red)] transition-all duration-300"
            >
              <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-r from-[var(--accent-red)] to-[var(--accent-purple)] flex items-center justify-center red-box-glow">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Gradient connector to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
    </section>
  );
}