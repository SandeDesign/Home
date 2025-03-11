import { motion } from 'framer-motion';
import { MessageSquare, ShoppingBag, Phone, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useState } from 'react';
import { useModal } from '../context/ModalContext';

export default function UseCases() {
  const { t, language, content } = useLanguage();
  const { openModal } = useModal();

  const getLocalizedExamples = (lang: string) => {
    if (lang === 'nl') {
      return [
        {
          title: t('whatsappChatbot'),
          icon: <MessageSquare className="w-6 h-6" />,
          description: t('whatsappDesc'),
          examples: [
            'Kappers: Geautomatiseerde afspraakplanning',
            'Restaurants: Direct menu delen en bestellen',
            'Retail: 24/7 klantenondersteuning en vragen'
          ],
          integrations: 'Integratie met Google Agenda, Google Documenten en andere tools voor volledige automatisering.'
        },
        {
          title: 'Shop Agent',
          icon: <ShoppingBag className="w-6 h-6" />,
          description: 'Geïntegreerde ondersteuning voor online winkels met productzoekfunctie en klantenservice.',
          examples: [
            'Webshops: Automatische productaanbevelingen',
            'Klantenservice: Vragen over bestellingen en leveringen',
            'Voorraadcontrole: Real-time voorraadstatus'
          ],
          integrations: 'Naadloze integratie met e-commerce platforms en orderbeheer systemen.'
        },
        {
          title: t('callAgent'),
          icon: <Phone className="w-6 h-6" />,
          description: t('callAgentDesc'),
          examples: [
            'Restaurants: Geautomatiseerd reserveringssysteem',
            'Medische praktijken: Afspraakherinneringen',
            'Servicecentra: Initiële gespreksroutering'
          ],
          integrations: 'Verbinding met Google Agenda en CRM-systemen voor volledige automatisering van afspraken.'
        }
      ];
    } else if (lang === 'de') {
      return [
        {
          title: t('whatsappChatbot'),
          icon: <MessageSquare className="w-6 h-6" />,
          description: t('whatsappDesc'),
          examples: [
            'Friseursalons: Automatisierte Terminplanung',
            'Restaurants: Sofortiges Menüteilen und Bestellen',
            'Einzelhandel: 24/7 Kundensupport und Anfragen'
          ],
          integrations: 'Integration mit Google Kalender, Google Docs und anderen Tools für vollständige Automatisierung.'
        },
        {
          title: 'Shop Agent',
          icon: <ShoppingBag className="w-6 h-6" />,
          description: 'Integrierte Unterstützung für Online-Shops mit Produktsuche und Kundenservice.',
          examples: [
            'Webshops: Automatische Produktempfehlungen',
            'Kundenservice: Fragen zu Bestellungen und Lieferungen',
            'Bestandskontrolle: Echtzeit-Bestandsstatus'
          ],
          integrations: 'Nahtlose Integration mit E-Commerce-Plattformen und Auftragsverwaltungssystemen.'
        },
        {
          title: t('callAgent'),
          icon: <Phone className="w-6 h-6" />,
          description: t('callAgentDesc'),
          examples: [
            'Restaurants: Automatisiertes Reservierungssystem',
            'Arztpraxen: Terminerinnerungen',
            'Servicezentren: Anfängliche Anrufweiterleitung'
          ],
          integrations: 'Verbindung mit Google Kalender und CRM-Systemen für vollständige Terminautomatisierung.'
        }
      ];
    } else {
      return [
        {
          title: t('whatsappChatbot'),
          icon: <MessageSquare className="w-6 h-6" />,
          description: t('whatsappDesc'),
          examples: [
            'Barbershops: Automated appointment scheduling',
            'Restaurants: Instant menu sharing and ordering',
            'Retail: 24/7 customer support and inquiries'
          ],
          integrations: 'Integration with Google Calendar, Google Docs, and other tools for complete automation.'
        },
        {
          title: 'Shop Agent',
          icon: <ShoppingBag className="w-6 h-6" />,
          description: 'Integrated support for online stores with product search and customer service.',
          examples: [
            'Webshops: Automatic product recommendations',
            'Customer service: Order and delivery inquiries',
            'Inventory control: Real-time stock status'
          ],
          integrations: 'Seamless integration with e-commerce platforms and order management systems.'
        },
        {
          title: t('callAgent'),
          icon: <Phone className="w-6 h-6" />,
          description: t('callAgentDesc'),
          examples: [
            'Restaurants: Automated reservation system',
            'Medical Practices: Appointment reminders',
            'Service Centers: Initial call routing'
          ],
          integrations: 'Connection with Google Calendar and CRM systems for complete appointment automation.'
        }
      ];
    }
  };

  const useCases = getLocalizedExamples(language);

  // Get localized section title
  const getSectionTitle = () => {
    if (language === 'nl') {
      return (
        <>
          <span className="text-white"></span>Automatisering
        </>
      );
    } else if (language === 'de') {
      return (
        <>
          <span className="text-white"></span>Automatisierungs
        </>
      );
    } else {
      return (
        <>
          <span className="text-white">Automation</span> Possibilities
        </>
      );
    }
  };

  // Get localized button text
  const getButtonText = () => {
    if (language === 'nl') {
      return 'Vraag een Demo';
    } else if (language === 'de') {
      return 'Demo Anfragen';
    } else {
      return 'Ask for a Demo';
    }
  };

  return (
    <section id="usecases-section" className="py-20 relative">
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
            <span className="gradient-text">{getSectionTitle()}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t('useCasesDescription')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-lg border border-[var(--accent-purple)] hover:border-[var(--accent-red)] 
                       transition-all duration-300 bg-black/20"
            >
              <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-r from-[var(--accent-red)] to-[var(--accent-purple)] 
                           flex items-center justify-center red-box-glow">
                {useCase.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{useCase.title}</h3>
              <p className="text-gray-300 mb-6">{useCase.description}</p>
              <ul className="space-y-3 mb-4">
                {useCase.examples.map((example, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-gradient-to-r from-[var(--accent-red)] to-[var(--accent-purple)]" />
                    {example}
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-700">
                <p className="text-sm text-[var(--accent-purple)]">{useCase.integrations}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Demo Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button
            onClick={openModal}
            className="px-8 py-4 bg-gradient-to-r from-[var(--accent-red)] to-[var(--accent-purple)] 
                     text-white rounded-lg font-semibold flex items-center justify-center gap-2 
                     red-box-glow hover:brightness-110 transition-all duration-300 mx-auto"
          >
            <Zap className="w-5 h-5" />
            {getButtonText()}
          </button>
        </motion.div>
      </div>
      
      {/* Gradient connector to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
    </section>
  );
}