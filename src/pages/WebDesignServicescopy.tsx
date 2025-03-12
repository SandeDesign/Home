import { motion } from 'framer-motion';
import { Globe, Zap, Shield, BarChart, Palette, Code } from 'lucide-react';
import PageNavigation from '../components/PageNavigation';
import Footer from '../components/Footer';
import { useModal } from '../context/ModalContext';
import { useLanguage } from '../context/LanguageContext';

export default function WebDesignServices() {
  const { openModal } = useModal();
  const { language } = useLanguage();
  
  const getLocalizedContent = () => {
    if (language === 'en') {
      return {
        title: "Web Design Services",
        subtitle: "Professional Websites for Your Business",
        description: "At SandeDesign, we create websites that are not only visually appealing, but also functional and results-oriented. Our websites are designed to strengthen your online presence, attract customers, and support your business goals.",
        services: [
          {
            icon: <Globe className="w-6 h-6" />,
            title: "Managed Websites",
            description: "Fully managed websites with regular updates, security, and maintenance so you can focus on your business."
          },
          {
            icon: <Palette className="w-6 h-6" />,
            title: "Custom Design",
            description: "Unique designs that perfectly match your brand and business identity, designed to appeal to your target audience."
          },
          {
            icon: <Zap className="w-6 h-6" />,
            title: "Fast Hosting",
            description: "Ultra-fast hosting with optimized loading times for a better user experience and higher conversions."
          },
          {
            icon: <Shield className="w-6 h-6" />,
            title: "Security",
            description: "Advanced security measures to protect your website and customer data from threats."
          },
          {
            icon: <BarChart className="w-6 h-6" />,
            title: "Analytics & Reporting",
            description: "Detailed insights into website traffic and user behavior to optimize your online strategy."
          },
          {
            icon: <Code className="w-6 h-6" />,
            title: "Technical Support",
            description: "Expert technical support when you need it, with quick response times and effective solutions."
          }
        ],
        pricing: {
          title: "Our Pricing",
          description: "Transparent pricing with no hidden costs. Choose the package that best suits your needs.",
          mostChosen: "Most popular",
          contactButton: "Get in touch",
          plans: [
            {
              name: "Basic",
              price: "€49",
              period: "per month",
              features: [
                "Responsive website (5 pages)",
                "Basic SEO optimization",
                "Contact form",
                "Google Maps integration",
                "Monthly maintenance",
                "Email support"
              ],
              highlighted: false
            },
            {
              name: "Business",
              price: "€99",
              period: "per month",
              features: [
                "Responsive website (10 pages)",
                "Advanced SEO optimization",
                "Contact form with file upload",
                "Google Analytics integration",
                "Weekly maintenance",
                "Priority email & phone support",
                "Social media integration",
                "Monthly performance reporting"
              ],
              highlighted: true
            },
            {
              name: "Enterprise",
              price: "Custom",
              period: "",
              features: [
                "Unlimited pages",
                "Fully custom design",
                "E-commerce functionality",
                "Advanced integrations",
                "Daily maintenance",
                "24/7 support",
                "Dedicated account manager",
                "Weekly performance reporting"
              ],
              highlighted: false
            }
          ]
        },
        customSolutions: {
          title: "Custom Solutions",
          description1: "Do you have specific wishes or needs that don't fit within our standard packages? No problem! We offer fully customized solutions that perfectly match your unique situation.",
          description2: "Our experts work closely with you to develop a website that exactly meets your requirements, whether it's complex functionalities, specific integrations, or special design elements.",
          examplesTitle: "Some examples of custom work:",
          examples: [
            "E-commerce platforms with advanced product catalogs",
            "Member pages with personalized content",
            "Integration with CRM systems and other business software",
            "Multilingual websites with advanced translation functionality",
            "Custom booking systems and reservation tools"
          ],
          quoteButton: "Request a quote"
        },
        hosting: {
          title: "Hosting and Speed",
          description: "A fast website is essential for a good user experience and better search engine findability. That's why we offer premium hosting with the following benefits:",
          hostingTitle: "Our Hosting Includes:",
          hostingFeatures: [
            "SSD storage for faster loading times",
            "CDN (Content Delivery Network) for global speed",
            "Automatic backups and recovery option",
            "99.9% uptime guarantee",
            "SSL certificate included"
          ],
          speedTitle: "Speed Optimization:",
          speedFeatures: [
            "Optimized code and database",
            "Image compression without quality loss",
            "Browser caching for returning visitors",
            "Minification of CSS, JavaScript, and HTML",
            "Regular performance audits and optimizations"
          ],
          callToAction: "Ready to take your online presence to the next level?",
          contactButton: "Get in touch"
        }
      };
    } else if (language === 'de') {
      return {
        title: "Webdesign-Dienstleistungen",
        subtitle: "Professionelle Websites für Ihr Unternehmen",
        description: "Bei SandeDesign erstellen wir Websites, die nicht nur visuell ansprechend, sondern auch funktional und ergebnisorientiert sind. Unsere Websites sind darauf ausgelegt, Ihre Online-Präsenz zu stärken, Kunden anzuziehen und Ihre Geschäftsziele zu unterstützen.",
        services: [
          {
            icon: <Globe className="w-6 h-6" />,
            title: "Verwaltete Websites",
            description: "Vollständig verwaltete Websites mit regelmäßigen Updates, Sicherheit und Wartung, damit Sie sich auf Ihr Geschäft konzentrieren können."
          },
          {
            icon: <Palette className="w-6 h-6" />,
            title: "Individuelles Design",
            description: "Einzigartige Designs, die perfekt zu Ihrer Marke und Unternehmensidentität passen und darauf ausgelegt sind, Ihre Zielgruppe anzusprechen."
          },
          {
            icon: <Zap className="w-6 h-6" />,
            title: "Schnelles Hosting",
            description: "Ultraschnelles Hosting mit optimierten Ladezeiten für eine bessere Benutzererfahrung und höhere Konversionen."
          },
          {
            icon: <Shield className="w-6 h-6" />,
            title: "Sicherheit",
            description: "Fortschrittliche Sicherheitsmaßnahmen zum Schutz Ihrer Website und Kundendaten vor Bedrohungen."
          },
          {
            icon: <BarChart className="w-6 h-6" />,
            title: "Analytik & Berichterstattung",
            description: "Detaillierte Einblicke in Website-Traffic und Benutzerverhalten zur Optimierung Ihrer Online-Strategie."
          },
          {
            icon: <Code className="w-6 h-6" />,
            title: "Technischer Support",
            description: "Fachkundiger technischer Support, wenn Sie ihn brauchen, mit schnellen Reaktionszeiten und effektiven Lösungen."
          }
        ],
        pricing: {
          title: "Unsere Preise",
          description: "Transparente Preise ohne versteckte Kosten. Wählen Sie das Paket, das am besten zu Ihren Bedürfnissen passt.",
          mostChosen: "Am beliebtesten",
          contactButton: "Kontakt aufnehmen",
          plans: [
            {
              name: "Basis",
              price: "€49",
              period: "pro Monat",
              features: [
                "Responsive Website (5 Seiten)",
                "Basis-SEO-Optimierung",
                "Kontaktformular",
                "Google Maps Integration",
                "Monatliche Wartung",
                "E-Mail-Support"
              ],
              highlighted: false
            },
            {
              name: "Business",
              price: "€99",
              period: "pro Monat",
              features: [
                "Responsive Website (10 Seiten)",
                "Erweiterte SEO-Optimierung",
                "Kontaktformular mit Datei-Upload",
                "Google Analytics Integration",
                "Wöchentliche Wartung",
                "Prioritäts-E-Mail & Telefon-Support",
                "Social Media Integration",
                "Monatliche Leistungsberichte"
              ],
              highlighted: true
            },
            {
              name: "Enterprise",
              price: "Individuell",
              period: "",
              features: [
                "Unbegrenzte Seitenanzahl",
                "Vollständig individuelles Design",
                "E-Commerce-Funktionalität",
                "Erweiterte Integrationen",
                "Tägliche Wartung",
                "24/7 Support",
                "Dedizierter Account Manager",
                "Wöchentliche Leistungsberichte"
              ],
              highlighted: false
            }
          ]
        },
        customSolutions: {
          title: "Individuelle Lösungen",
          description1: "Haben Sie spezifische Wünsche oder Bedürfnisse, die nicht in unsere Standardpakete passen? Kein Problem! Wir bieten vollständig maßgeschneiderte Lösungen, die perfekt zu Ihrer einzigartigen Situation passen.",
          description2: "Unsere Experten arbeiten eng mit Ihnen zusammen, um eine Website zu entwickeln, die genau Ihren Anforderungen entspricht, sei es komplexe Funktionalitäten, spezifische Integrationen oder besondere Designelemente.",
          examplesTitle: "Einige Beispiele für individuelle Arbeiten:",
          examples: [
            "E-Commerce-Plattformen mit erweiterten Produktkatalogen",
            "Mitgliederseiten mit personalisierten Inhalten",
            "Integration mit CRM-Systemen und anderer Unternehmenssoftware",
            "Mehrsprachige Websites mit erweiterter Übersetzungsfunktionalität",
            "Individuelle Buchungssysteme und Reservierungstools"
          ],
          quoteButton: "Angebot anfordern"
        },
        hosting: {
          title: "Hosting und Geschwindigkeit",
          description: "Eine schnelle Website ist essentiell für eine gute Benutzererfahrung und bessere Suchmaschinen-Auffindbarkeit. Deshalb bieten wir Premium-Hosting mit folgenden Vorteilen:",
          hostingTitle: "Unser Hosting beinhaltet:",
          hostingFeatures: [
            "SSD-Speicher für schnellere Ladezeiten",
            "CDN (Content Delivery Network) für globale Geschwindigkeit",
            "Automatische Backups und Wiederherstellungsoption",
            "99,9% Uptime-Garantie",
            "SSL-Zertifikat inklusive"
          ],
          speedTitle: "Geschwindigkeitsoptimierung:",
          speedFeatures: [
            "Optimierter Code und Datenbank",
            "Bildkompression ohne Qualitätsverlust",
            "Browser-Caching für wiederkehrende Besucher",
            "Minifizierung von CSS, JavaScript und HTML",
            "Regelmäßige Leistungsaudits und Optimierungen"
          ],
          callToAction: "Bereit, Ihre Online-Präsenz auf die nächste Stufe zu heben?",
          contactButton: "Kontakt aufnehmen"
        }
      };
    } else {
      // Default to Dutch
      return {
        title: "Web Design Services",
        subtitle: "Professionele Websites voor Uw Bedrijf",
        description: "Bij SandeDesign creëren we websites die niet alleen visueel aantrekkelijk zijn, maar ook functioneel en resultaatgericht. Onze websites zijn ontworpen om uw online aanwezigheid te versterken, klanten aan te trekken en uw bedrijfsdoelen te ondersteunen.",
        services: [
          {
            icon: <Globe className="w-6 h-6" />,
            title: "Managed Websites",
            description: "Volledig beheerde websites met regelmatige updates, beveiliging en onderhoud zodat u zich kunt concentreren op uw bedrijf."
          },
          {
            icon: <Palette className="w-6 h-6" />,
            title: "Maatwerk Design",
            description: "Unieke ontwerpen die perfect aansluiten bij uw merk en bedrijfsidentiteit, ontworpen om uw doelgroep aan te spreken."
          },
          {
            icon: <Zap className="w-6 h-6" />,
            title: "Snelle Hosting",
            description: "Ultrasnelle hosting met geoptimaliseerde laadtijden voor een betere gebruikerservaring en hogere conversies."
          },
          {
            icon: <Shield className="w-6 h-6" />,
            title: "Beveiliging",
            description: "Geavanceerde beveiligingsmaatregelen om uw website en klantgegevens te beschermen tegen bedreigingen."
          },
          {
            icon: <BarChart className="w-6 h-6" />,
            title: "Analytics & Rapportage",
            description: "Gedetailleerde inzichten in websiteverkeer en gebruikersgedrag om uw online strategie te optimaliseren."
          },
          {
            icon: <Code className="w-6 h-6" />,
            title: "Technische Ondersteuning",
            description: "Deskundige technische ondersteuning wanneer u die nodig heeft, met snelle responstijden en effectieve oplossingen."
          }
        ],
        pricing: {
          title: "Onze Prijzen",
          description: "Transparante prijzen zonder verborgen kosten. Kies het pakket dat het beste bij uw behoeften past.",
          mostChosen: "Meest gekozen",
          contactButton: "Neem contact op",
          plans: [
            {
              name: "Basis",
              price: "€49",
              period: "per maand",
              features: [
                "Responsive website (5 pagina's)",
                "Basis SEO-optimalisatie",
                "Contactformulier",
                "Google Maps integratie",
                "Maandelijks onderhoud",
                "E-mail ondersteuning"
              ],
              highlighted: false
            },
            {
              name: "Zakelijk",
              price: "€99",
              period: "per maand",
              features: [
                "Responsive website (10 pagina's)",
                "Geavanceerde SEO-optimalisatie",
                "Contactformulier met bestandsupload",
                "Google Analytics integratie",
                "Wekelijks onderhoud",
                "Prioriteit e-mail & telefoon ondersteuning",
                "Social media integratie",
                "Maandelijkse prestatierapportage"
              ],
              highlighted: true
            },
            {
              name: "Enterprise",
              price: "Op maat",
              period: "",
              features: [
                "Onbeperkt aantal pagina's",
                "Volledig maatwerk design",
                "E-commerce functionaliteit",
                "Geavanceerde integraties",
                "Dagelijks onderhoud",
                "24/7 ondersteuning",
                "Dedicated accountmanager",
                "Wekelijkse prestatierapportage"
              ],
              highlighted: false
            }
          ]
        },
        customSolutions: {
          title: "Maatwerk Oplossingen",
          description1: "Heeft u specifieke wensen of behoeften die niet binnen onze standaardpakketten vallen? Geen probleem! We bieden volledig op maat gemaakte oplossingen die perfect aansluiten bij uw unieke situatie.",
          description2: "Onze experts werken nauw met u samen om een website te ontwikkelen die precies voldoet aan uw vereisten, of het nu gaat om complexe functionaliteiten, specifieke integraties of bijzondere designelementen.",
          examplesTitle: "Enkele voorbeelden van maatwerk:",
          examples: [
            "E-commerce platforms met geavanceerde productcatalogi",
            "Ledenpagina's met gepersonaliseerde content",
            "Integratie met CRM-systemen en andere bedrijfssoftware",
            "Meertalige websites met geavanceerde vertaalfunctionaliteit",
            "Aangepaste boekingssystemen en reserveringstools"
          ],
          quoteButton: "Vraag een offerte aan"
        },
        hosting: {
          title: "Hosting en Snelheid",
          description: "Een snelle website is essentieel voor een goede gebruikerservaring en betere zoekmachinevindbaar. Daarom bieden we premium hosting met de volgende voordelen:",
          hostingTitle: "Onze Hosting Omvat:",
          hostingFeatures: [
            "SSD-opslag voor snellere laadtijden",
            "CDN (Content Delivery Network) voor wereldwijde snelheid",
            "Automatische backups en hersteloptie",
            "99.9% uptime garantie",
            "SSL-certificaat inbegrepen"
          ],
          speedTitle: "Snelheidsoptimalisatie:",
          speedFeatures: [
            "Geoptimaliseerde code en database",
            "Afbeeldingscompressie zonder kwaliteitsverlies",
            "Browser caching voor terugkerende bezoekers",
            "Minificatie van CSS, JavaScript en HTML",
            "Regelmatige prestatie-audits en optimalisaties"
          ],
          callToAction: "Klaar om uw online aanwezigheid naar een hoger niveau te tillen?",
          contactButton: "Neem contact op"
        }
      };
    }
  };

  const content = getLocalizedContent();
  
  return (
    <div className="bg-[var(--primary)] min-h-screen">
      <PageNavigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl font-bold mb-8">
              <span className="gradient-text">{content.title}</span>
            </h1>
            
            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-6">{content.subtitle}</h2>
              <p className="text-gray-300 mb-8">
                {content.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {content.services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-6 rounded-lg border border-[var(--accent-purple)] hover:border-[var(--accent-red)] 
                             transition-all duration-300 bg-black/20"
                  >
                    <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-r from-[var(--accent-red)] to-[var(--accent-purple)] 
                                 flex items-center justify-center red-box-glow">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-gray-300">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </section>
            
            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-6">{content.pricing.title}</h2>
              <p className="text-gray-300 mb-8">
                {content.pricing.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {content.pricing.plans.map((plan, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`p-6 rounded-lg border ${
                      plan.highlighted 
                        ? 'border-[var(--accent-red)] scale-105 red-box-glow' 
                        : 'border-[var(--accent-purple)]'
                    } transition-all duration-300 bg-black/20 relative`}
                  >
                    {plan.highlighted && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[var(--accent-red)] to-[var(--accent-purple)] 
                                    text-white text-sm font-semibold py-1 px-4 rounded-full">
                        {content.pricing.mostChosen}
                      </div>
                    )}
                    
                    <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      {plan.period && <span className="text-gray-400 ml-1">{plan.period}</span>}
                    </div>
                    
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                          <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-gradient-to-r from-[var(--accent-red)] to-[var(--accent-purple)]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <button
                      onClick={openModal}
                      className={`w-full py-2 rounded-lg font-medium transition-all duration-300 ${
                        plan.highlighted
                          ? 'bg-gradient-to-r from-[var(--accent-red)] to-[var(--accent-purple)] text-white hover:brightness-110'
                          : 'border border-[var(--accent-purple)] text-white hover:border-[var(--accent-red)]'
                      }`}
                    >
                      {content.pricing.contactButton}
                    </button>
                  </motion.div>
                ))}
              </div>
            </section>
            
            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-6">{content.customSolutions.title}</h2>
              <p className="text-gray-300 mb-4">
                {content.customSolutions.description1}
              </p>
              <p className="text-gray-300 mb-8">
                {content.customSolutions.description2}
              </p>
              
              <div className="bg-black/20 border border-[var(--accent-purple)] rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">{content.customSolutions.examplesTitle}</h3>
                <ul className="space-y-3">
                  {content.customSolutions.examples.map((example, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-300">
                      <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-gradient-to-r from-[var(--accent-red)] to-[var(--accent-purple)]" />
                      {example}
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={openModal}
                  className="mt-6 px-6 py-3 bg-gradient-to-r from-[var(--accent-red)] to-[var(--accent-purple)] 
                           text-white rounded-lg font-semibold hover:brightness-110 transition-all duration-300"
                >
                  {content.customSolutions.quoteButton}
                </button>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-6">{content.hosting.title}</h2>
              <p className="text-gray-300 mb-4">
                {content.hosting.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-lg border border-[var(--accent-purple)] bg-black/20">
                  <h3 className="text-xl font-semibold mb-4">{content.hosting.hostingTitle}</h3>
                  <ul className="space-y-3">
                    {content.hosting.hostingFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-300">
                        <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-gradient-to-r from-[var(--accent-red)] to-[var(--accent-purple)]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-6 rounded-lg border border-[var(--accent-purple)] bg-black/20">
                  <h3 className="text-xl font-semibold mb-4">{content.hosting.speedTitle}</h3>
                  <ul className="space-y-3">
                    {content.hosting.speedFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-300">
                        <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-gradient-to-r from-[var(--accent-red)] to-[var(--accent-purple)]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <h3 className="text-xl font-semibold mb-4">{content.hosting.callToAction}</h3>
                <button
                  onClick={openModal}
                  className="px-8 py-4 bg-gradient-to-r from-[var(--accent-red)] to-[var(--accent-purple)] 
                           text-white rounded-lg font-semibold flex items-center justify-center gap-2 mx-auto
                           red-box-glow hover:brightness-110 transition-all duration-300"
                >
                  <Zap className="w-5 h-5" />
                  {content.hosting.contactButton}
                </button>
              </div>
            </section>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
