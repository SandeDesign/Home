// This file contains all the text content for the site in one place
// Making it easier to update and maintain translations

export type ContentLanguage = 'nl' | 'en' | 'de';

export interface SiteContent {
  header: {
    getStarted: string;
  };
  hero: {
    title: {
      transform: string;
      automation: string;
    };
    subtitle: string;
    getStarted: string;
    learnMore: string;
  };
  features: {
    title: {
      why: string;
      automation: string;
    };
    subtitle: string;
    items: {
      time: {
        title: string;
        description: string;
      };
      costs: {
        title: string;
        description: string;
      };
      efficiency: {
        title: string;
        description: string;
      };
      results: {
        title: string;
        description: string;
      };
    };
  };
  useCases: {
    title: {
      automation: string;
      useCases: string;
    };
    subtitle: string;
    description: string;
    whatsapp: {
      title: string;
      description: string;
    };
    web: {
      title: string;
      description: string;
    };
    call: {
      title: string;
      description: string;
    };
    demo: string;
  };
  contactForm: {
    title: {
      get: string;
      touch: string;
    };
    subtitle: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    location: string;
    subject: string;
    message: string;
    sendMessage: string;
    sending: string;
    successTitle: string;
    successMessage: string;
    sendAnother: string;
    errorMessage: string;
    subjects: {
      general: string;
      whatsapp: string;
      web: string;
      call: string;
      other: string;
    };
  };
  footer: {
    rights: string;
    links: {
      webDesign: string;
      privacy: string;
      terms: string;
      cookies: string;
      home: string;
    };
  };
  cookieBanner: {
    title: string;
    description: string;
    accept: string;
    reject: string;
    settings: string;
    save: string;
    necessary: {
      title: string;
      description: string;
    };
    analytics: {
      title: string;
      description: string;
    };
    marketing: {
      title: string;
      description: string;
    };
    preferences: {
      title: string;
      description: string;
    };
  };
}

export const siteContent: Record<ContentLanguage, SiteContent> = {
  nl: {
    header: {
      getStarted: 'Aan de slag'
    },
    hero: {
      title: {
        transform: 'Transformeer uw werkstroom met',
        automation: 'Krachtige Automatisering'
      },
      subtitle: 'Stroomlijn taken en elimineer Niet factuureerbare uren werk met intelligente werkstroom automatisering.',
      getStarted: 'Aan de slag',
      learnMore: 'Meer informatie'
    },
    features: {
      title: {
        why: 'Waarom kiezen voor',
        automation: 'Automatisering'
      },
      subtitle: 'Transformeer uw bedrijfsprocessen met krachtige automatiseringstools ontworpen voor moderne ondernemingen.',
      items: {
        time: {
          title: 'Bespaar tijd',
          description: 'Automatiseer repetitieve taken en focus op wat echt belangrijk is voor uw bedrijfsgroei.'
        },
        costs: {
          title: 'Voorkom verborgen kosten',
          description: 'Slimme automatisering helpt inefficiënties te identificeren en te elimineren voordat ze uw resultaat beïnvloeden.'
        },
        efficiency: {
          title: 'Verhoog efficiëntie',
          description: 'Stroomlijn uw operaties zonder personeel toe te voegen of kwaliteit in te leveren.'
        },
        results: {
          title: 'Directe resultaten',
          description: 'Zie onmiddellijke verbeteringen in uw werkstroom met onze automatiseringsoplossingen.'
        }
      }
    },
    useCases: {
      title: {
        automation: 'Automatisering',
        useCases: 'Toepassingen'
      },
      subtitle: 'Ontdek hoe bedrijven hun operaties transformeren met krachtige automatiseringsoplossingen.',
      description: 'Ontdek hoe bedrijven hun activiteiten transformeren met krachtige automatiseringsoplossingen.',
      whatsapp: {
        title: 'WhatsApp Chatbot',
        description: 'Directe klantinteractie via geautomatiseerde WhatsApp-reacties.'
      },
      web: {
        title: 'Web Implementatie',
        description: 'Geïntegreerde automatiseringsoplossingen voor uw website.'
      },
      call: {
        title: 'Gespreksagent',
        description: 'Geautomatiseerde spraakondersteuning voor uw bedrijf.'
      },
      demo: 'Bekijk demo'
    },
    contactForm: {
      title: {
        get: 'Neem',
        touch: 'Contact Op'
      },
      subtitle: 'Klaar om uw bedrijf te transformeren? Laten we bespreken hoe automatisering voor u kan werken.',
      firstName: 'Voornaam',
      lastName: 'Achternaam',
      email: 'E-mail',
      phone: 'Telefoon',
      location: 'Locatie',
      subject: 'Onderwerp',
      message: 'Bericht',
      sendMessage: 'Verstuur bericht',
      sending: 'Versturen...',
      successTitle: 'Bericht verzonden!',
      successMessage: 'Bedankt voor uw bericht. We nemen zo snel mogelijk contact met u op.',
      sendAnother: 'Verstuur nog een bericht',
      errorMessage: 'Er is iets misgegaan. Probeer het later opnieuw.',
      subjects: {
        general: 'Algemene vraag',
        whatsapp: 'WhatsApp Chatbot',
        web: 'Web Implementatie',
        call: 'Call Agent',
        other: 'Anders'
      }
    },
    footer: {
      rights: 'Alle rechten voorbehouden.',
      links: {
        webDesign: 'Web Design Services',
        privacy: 'Privacy Policy',
        terms: 'Algemene Voorwaarden',
        cookies: 'Cookie Policy',
        home: 'Home'
      }
    },
    cookieBanner: {
      title: 'Cookie Voorkeuren',
      description: 'We gebruiken cookies om je ervaring te verbeteren. Je kunt je voorkeuren aanpassen of alle cookies accepteren.',
      accept: 'Alles Accepteren',
      reject: 'Weigeren',
      settings: 'Instellingen',
      save: 'Voorkeuren Opslaan',
      necessary: {
        title: 'Noodzakelijke Cookies',
        description: 'Essentieel voor de basisfunctionaliteit van de website.'
      },
      analytics: {
        title: 'Analytische Cookies',
        description: 'Helpen ons te begrijpen hoe bezoekers onze website gebruiken.'
      },
      marketing: {
        title: 'Marketing Cookies',
        description: 'Worden gebruikt om advertenties relevanter te maken.'
      },
      preferences: {
        title: 'Voorkeurscookies',
        description: 'Onthouden uw voorkeuren en instellingen.'
      }
    }
  },
  en: {
    header: {
      getStarted: 'Get Started'
    },
    hero: {
      title: {
        transform: 'Transform Your Workflow with',
        automation: 'Powerful Automation'
      },
      subtitle: 'Streamline operations and eliminate repetitive tasks with intelligent workflow automation.',
      getStarted: 'Get Started',
      learnMore: 'Learn More'
    },
    features: {
      title: {
        why: 'Why Choose',
        automation: 'Automation'
      },
      subtitle: 'Transform your business operations with powerful automation tools designed for modern enterprises.',
      items: {
        time: {
          title: 'Save Time',
          description: 'Automate repetitive tasks and focus on what truly matters for your business growth.'
        },
        costs: {
          title: 'Prevent Hidden Costs',
          description: 'Smart automation helps identify and eliminate inefficiencies before they impact your bottom line.'
        },
        efficiency: {
          title: 'Boost Efficiency',
          description: 'Streamline your operations without adding personnel or compromising quality.'
        },
        results: {
          title: 'Instant Results',
          description: 'See immediate improvements in your workflow with our automation solutions.'
        }
      }
    },
    useCases: {
      title: {
        automation: 'Automation',
        useCases: 'Use Cases'
      },
      subtitle: 'Discover how businesses are transforming their operations with powerful automation solutions.',
      description: 'Discover how businesses are transforming their operations with powerful automation solutions.',
      whatsapp: {
        title: 'WhatsApp Chatbot',
        description: 'Direct customer interaction through automated WhatsApp responses.'
      },
      web: {
        title: 'Web Deployment',
        description: 'Integrated automation solutions for your website.'
      },
      call: {
        title: 'Call Agent',
        description: 'Automated voice assistance for your business.'
      },
      demo: 'Watch demo'
    },
    contactForm: {
      title: {
        get: 'Get in',
        touch: 'Touch'
      },
      subtitle: 'Ready to transform your business? Let\'s discuss how automation can work for you.',
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
      subject: 'Subject',
      message: 'Message',
      sendMessage: 'Send Message',
      sending: 'Sending...',
      successTitle: 'Message Sent!',
      successMessage: 'Thank you for your message. We will get back to you as soon as possible.',
      sendAnother: 'Send Another Message',
      errorMessage: 'Something went wrong. Please try again later.',
      subjects: {
        general: 'General Inquiry',
        whatsapp: 'WhatsApp Chatbot',
        web: 'Web Deployment',
        call: 'Call Agent',
        other: 'Other'
      }
    },
    footer: {
      rights: 'All rights reserved.',
      links: {
        webDesign: 'Web Design Services',
        privacy: 'Privacy Policy',
        terms: 'Terms & Conditions',
        cookies: 'Cookie Policy',
        home: 'Home'
      }
    },
    cookieBanner: {
      title: 'Cookie Preferences',
      description: 'We use cookies to enhance your experience. You can adjust your preferences or accept all cookies.',
      accept: 'Accept All',
      reject: 'Reject',
      settings: 'Settings',
      save: 'Save Preferences',
      necessary: {
        title: 'Necessary Cookies',
        description: 'Essential for the basic functionality of the website.'
      },
      analytics: {
        title: 'Analytical Cookies',
        description: 'Help us understand how visitors use our website.'
      },
      marketing: {
        title: 'Marketing Cookies',
        description: 'Used to make advertisements more relevant to you.'
      },
      preferences: {
        title: 'Preference Cookies',
        description: 'Remember your preferences and settings.'
      }
    }
  },
  de: {
    header: {
      getStarted: 'Loslegen'
    },
    hero: {
      title: {
        transform: 'Transformieren Sie Ihren Arbeitsablauf mit',
        automation: 'Leistungsstarker Automatisierung'
      },
      subtitle: 'Optimieren Sie Abläufe und eliminieren Sie repetitive Aufgaben mit intelligenter Workflow-Automatisierung.',
      getStarted: 'Loslegen',
      learnMore: 'Mehr erfahren'
    },
    features: {
      title: {
        why: 'Warum',
        automation: 'Automatisierung wählen'
      },
      subtitle: 'Transformieren Sie Ihre Geschäftsabläufe mit leistungsstarken Automatisierungstools für moderne Unternehmen.',
      items: {
        time: {
          title: 'Zeit sparen',
          description: 'Automatisieren Sie wiederkehrende Aufgaben und konzentrieren Sie sich auf das, was für Ihr Unternehmenswachstum wirklich wichtig ist.'
        },
        costs: {
          title: 'Versteckte Kosten vermeiden',
          description: 'Intelligente Automatisierung hilft, Ineffizienzen zu identifizieren und zu beseitigen, bevor sie sich auf Ihr Ergebnis auswirken.'
        },
        efficiency: {
          title: 'Effizienz steigern',
          description: 'Optimieren Sie Ihre Abläufe, ohne Personal hinzuzufügen oder die Qualität zu beeinträchtigen.'
        },
        results: {
          title: 'Sofortige Ergebnisse',
          description: 'Sehen Sie sofortige Verbesserungen in Ihrem Arbeitsablauf mit unseren Automatisierungslösungen.'
        }
      }
    },
    useCases: {
      title: {
        automation: 'Automatisierung',
        useCases: 'Anwendungsfälle'
      },
      subtitle: 'Entdecken Sie, wie Unternehmen ihre Abläufe mit leistungsstarken Automatisierungslösungen transformieren.',
      description: 'Entdecken Sie, wie Unternehmen ihre Abläufe mit leistungsstarken Automatisierungslösungen transformieren.',
      whatsapp: {
        title: 'WhatsApp Chatbot',
        description: 'Direkte Kundeninteraktion durch automatisierte WhatsApp-Antworten.'
      },
      web: {
        title: 'Web-Implementierung',
        description: 'Integrierte Automatisierungslösungen für Ihre Website.'
      },
      call: {
        title: 'Call Agent',
        description: 'Automatisierte Sprachunterstützung für Ihr Unternehmen.'
      },
      demo: 'Demo ansehen'
    },
    contactForm: {
      title: {
        get: 'Nehmen Sie',
        touch: 'Kontakt auf'
      },
      subtitle: 'Bereit, Ihr Unternehmen zu transformieren? Lassen Sie uns besprechen, wie Automatisierung für Sie funktionieren kann.',
      firstName: 'Vorname',
      lastName: 'Nachname',
      email: 'E-Mail',
      phone: 'Telefon',
      location: 'Standort',
      subject: 'Betreff',
      message: 'Nachricht',
      sendMessage: 'Nachricht senden',
      sending: 'Wird gesendet...',
      successTitle: 'Nachricht gesendet!',
      successMessage: 'Vielen Dank für Ihre Nachricht. Wir werden uns so schnell wie möglich bei Ihnen melden.',
      sendAnother: 'Weitere Nachricht senden',
      errorMessage: 'Etwas ist schiefgelaufen. Bitte versuchen Sie es später erneut.',
      subjects: {
        general: 'Allgemeine Anfrage',
        whatsapp: 'WhatsApp Chatbot',
        web: 'Web-Implementierung',
        call: 'Call Agent',
        other: 'Sonstiges'
      }
    },
    footer: {
      rights: 'Alle Rechte vorbehalten.',
      links: {
        webDesign: 'Webdesign-Dienstleistungen',
        privacy: 'Datenschutzrichtlinie',
        terms: 'AGB',
        cookies: 'Cookie-Richtlinie',
        home: 'Startseite'
      }
    },
    cookieBanner: {
      title: 'Cookie-Einstellungen',
      description: 'Wir verwenden Cookies, um Ihre Erfahrung zu verbessern. Sie können Ihre Einstellungen anpassen oder alle Cookies akzeptieren.',
      accept: 'Alle Akzeptieren',
      reject: 'Ablehnen',
      settings: 'Einstellungen',
      save: 'Einstellungen Speichern',
      necessary: {
        title: 'Notwendige Cookies',
        description: 'Wesentlich für die grundlegende Funktionalität der Website.'
      },
      analytics: {
        title: 'Analytische Cookies',
        description: 'Helfen uns zu verstehen, wie Besucher unsere Website nutzen.'
      },
      marketing: {
        title: 'Marketing-Cookies',
        description: 'Werden verwendet, um Werbung für Sie relevanter zu gestalten.'
      },
      preferences: {
        title: 'Präferenz-Cookies',
        description: 'Speichern Ihre Präferenzen und Einstellungen.'
      }
    }
  }
};

// Helper function to get content based on current language
export const getContent = (language: ContentLanguage): SiteContent => {
  return siteContent[language];
};