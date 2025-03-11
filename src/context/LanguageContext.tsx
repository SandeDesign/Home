import React, { createContext, useContext, useState } from 'react';
import { ContentLanguage, getContent, SiteContent } from '../utils/siteContent';

interface LanguageContextType {
  language: ContentLanguage;
  setLanguage: (language: ContentLanguage) => void;
  t: (key: string) => string;
  content: SiteContent;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<ContentLanguage>('nl');
  const content = getContent(language);

  // Legacy translation function for backward compatibility
  const t = (key: string): string => {
    // This function is kept for backward compatibility with existing components
    // It will be gradually phased out as components are updated to use the new content structure
    const translations: Record<string, Record<ContentLanguage, string>> = {
      // Header
      getStarted: {
        nl: 'Begin Nu',
        en: 'Get Started',
        de: 'Jetzt Starten'
      },
      
      // Hero
      heroTitle1: {
        nl: 'Transformeer Uw Workflow met',
        en: 'Transform Your Workflow with',
        de: 'Transformieren Sie Ihren Workflow mit'
      },
      heroTitle2: {
        nl: 'Krachtige Automatisering',
        en: 'Powerful Automation',
        de: 'Leistungsstarker Automatisierung'
      },
      heroDescription: {
        nl: 'Stroomlijn taken en elimineer die vervelende stapel niet factuureerbare uren werk met intelligente werkstroom automatisering.',
        en: 'Streamline operations and eliminate repetitive tasks with intelligent workflow automation.',
        de: 'Optimieren Sie Abläufe und eliminieren Sie repetitive Aufgaben mit intelligenter Workflow-Automatisierung.'
      },
      learnMore: {
        nl: 'Meer Informatie',
        en: 'Learn More',
        de: 'Mehr Erfahren'
      },
      
      // Features
      whyChoose: {
        nl: 'Waarom Kiezen voor',
        en: 'Why Choose',
        de: 'Warum Wählen Sie'
      },
      automation: {
        nl: 'Automatisering',
        en: 'Automation',
        de: 'Automatisierung'
      },
      featuresDescription: {
        nl: 'Transformeer uw bedrijfsprocessen met krachtige automatiseringstools ontworpen voor moderne ondernemingen.',
        en: 'Transform your business operations with powerful automation tools designed for modern enterprises.',
        de: 'Transformieren Sie Ihre Geschäftsprozesse mit leistungsstarken Automatisierungstools für moderne Unternehmen.'
      },
      saveTime: {
        nl: 'Bespaar Tijd',
        en: 'Save Time',
        de: 'Zeit Sparen'
      },
      saveTimeDesc: {
        nl: 'Automatiseer repetitieve taken en focus op wat echt belangrijk is voor uw bedrijfsgroei.',
        en: 'Automate repetitive tasks and focus on what truly matters for your business growth.',
        de: 'Automatisieren Sie wiederkehrende Aufgaben und konzentrieren Sie sich auf das, was für Ihr Unternehmenswachstum wirklich wichtig ist.'
      },
      preventCosts: {
        nl: 'Voorkom Verborgen Kosten',
        en: 'Prevent Hidden Costs',
        de: 'Versteckte Kosten Vermeiden'
      },
      preventCostsDesc: {
        nl: 'Slimme automatisering helpt inefficiënties te identificeren en te elimineren voordat ze uw resultaat beïnvloeden.',
        en: 'Smart automation helps identify and eliminate inefficiencies before they impact your bottom line.',
        de: 'Intelligente Automatisierung hilft, Ineffizienzen zu identifizieren und zu beseitigen, bevor sie sich auf Ihr Endergebnis auswirken.'
      },
      boostEfficiency: {
        nl: 'Verhoog Efficiëntie',
        en: 'Boost Efficiency',
        de: 'Effizienz Steigern'
      },
      boostEfficiencyDesc: {
        nl: 'Stroomlijn uw operaties zonder personeel toe te voegen of kwaliteit in te leveren.',
        en: 'Streamline your operations without adding personnel or compromising quality.',
        de: 'Optimieren Sie Ihre Abläufe, ohne Personal hinzuzufügen oder Qualität zu beeinträchtigen.'
      },
      instantResults: {
        nl: 'Directe Resultaten',
        en: 'Instant Results',
        de: 'Sofortige Ergebnisse'
      },
      instantResultsDesc: {
        nl: 'Zie onmiddellijke verbeteringen in uw workflow met onze automatiseringsoplossingen.',
        en: 'See immediate improvements in your workflow with our automation solutions.',
        de: 'Sehen Sie sofortige Verbesserungen in Ihrem Workflow mit unseren Automatisierungslösungen.'
      },
      
      // Use Cases
      useCases: {
        nl: 'Automatisering',
        en: 'Automation',
        de: 'Automatisierung'
      },
      useCasesTitle: {
        nl: '',
        en: '',
        de: ''
      },
      useCasesDescription: {
        nl: 'Ontdek hoe bedrijven hun activiteiten transformeren met krachtige automatiseringsoplossingen.',
        en: 'Discover how businesses are transforming their operations with powerful automation solutions.',
        de: 'Entdecken Sie, wie Unternehmen ihre Abläufe mit leistungsstarken Automatisierungslösungen transformieren.'
      },
      whatsappChatbot: {
        nl: 'WhatsApp Chatbot',
        en: 'WhatsApp Chatbot',
        de: 'WhatsApp Chatbot'
      },
      whatsappDesc: {
        nl: 'Directe klantinteractie via geautomatiseerde WhatsApp-reacties.',
        en: 'Direct customer interaction through automated WhatsApp responses.',
        de: 'Direkte Kundeninteraktion durch automatisierte WhatsApp-Antworten.'
      },
      webDeployment: {
        nl: 'Web Implementatie',
        en: 'Web Deployment',
        de: 'Web-Implementierung'
      },
      webDesc: {
        nl: 'Geïntegreerde automatiseringsoplossingen voor uw website.',
        en: 'Integrated automation solutions for your website.',
        de: 'Integrierte Automatisierungslösungen für Ihre Website.'
      },
      callAgent: {
        nl: 'Gespreksagent',
        en: 'Call Agent',
        de: 'Anrufagent'
      },
      callAgentDesc: {
        nl: 'Geautomatiseerde spraakondersteuning voor uw bedrijf.',
        en: 'Automated voice assistance for your business.',
        de: 'Automatisierte Sprachunterstützung für Ihr Unternehmen.'
      }
    };

    if (!translations[key]) {
      console.warn(`Translation key "${key}" not found.`);
      return key;
    }
    return translations[key][language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, content }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
