import { motion } from 'framer-motion';
import { Globe, Zap, Shield, BarChart, Palette, Code, Star, Clock, ArrowRight } from 'lucide-react';
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
          title: "Your Online Success Starts Here – Choose Smart & Stay Ahead",
          description: "Being visible online is no longer optional – it's essential! Whether you're just starting out or already established, your website defines your success. Don't wait too long because every day without a professional website means missed customers!",
          packages: [
            {
              name: "The Smart Start",
              price: "€300",
              subtitle: "One-time investment!",
              description: "For entrepreneurs, coaches, and small businesses who want a professional website without recurring fees.",
              features: [
                "5 premium pages – About us, services, contact, etc.",
                "Modern and sleek design – Tailored to your brand",
                "SEO-optimized – Helps your site rank better on Google",
                "Contact form & Google Maps integration",
                "1 year of hosting, email & maintenance included (€50 value)",
                "Fully responsive design – Perfect on all devices"
              ],
              highlight: "After the first year, renewal available for just €25 per month",
              benefits: [
                "One-time investment, lifelong impact",
                "Professional online presence without monthly fees",
                "First 10 clients get a free optimization check after 6 months"
              ],
              buttonText: "Claim Your Website Now",
              isPopular: false
            },
            {
              name: "Full-Service Web Design",
              price: "€49,99*",
              subtitle: "per month",
              description: "For businesses that want a professionally managed website with zero hassle.",
              features: [
                "10+ pages – Complete online presence",
                "Fully custom design – Your brand, your style",
                "Advanced SEO optimization",
                "Fast and secure hosting included",
                "Monthly updates & maintenance",
                "Priority email & technical support",
                "Social media integration",
                "Monthly performance reports"
              ],
              highlight: "Free design upgrade after 12 months with ongoing subscription",
              benefits: [
                "Never worry about maintenance or updates",
                "No large upfront costs",
                "Includes all future updates and improvements"
              ],
              buttonText: "Let Us Manage Your Website",
              isPopular: true
            }
          ],
          custom: {
            title: "Custom Web Design",
            subtitle: "Your Website, Your Rules",
            description: "For businesses that need more than a standard website. We create custom websites tailored to your exact needs.",
            examples: [
              "E-commerce platforms – From small shops to large online stores",
              "Membership pages & portals – Exclusive content and client accounts",
              "Multilingual websites – Expand your reach",
              "Advanced animations & interactive elements",
              "Custom booking & reservation systems"
            ],
            benefits: [
              "Custom website increases conversions and builds trust",
              "Everything built specifically for your business",
              "Start with a free strategy call"
            ],
            buttonText: "Request a Custom Quote"
          }
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
            description: "Vollständig verwaltete Websites mit regelmäßigen Updates, Sicherheit und Wartung."
          },
          {
            icon: <Palette className="w-6 h-6" />,
            title: "Individuelles Design",
            description: "Einzigartige Designs, die perfekt zu Ihrer Marke und Unternehmensidentität passen."
          },
          {
            icon: <Zap className="w-6 h-6" />,
            title: "Schnelles Hosting",
            description: "Ultraschnelles Hosting mit optimierten Ladezeiten für bessere Benutzererfahrung."
          },
          {
            icon: <Shield className="w-6 h-6" />,
            title: "Sicherheit",
            description: "Fortschrittliche Sicherheitsmaßnahmen zum Schutz Ihrer Website und Kundendaten."
          },
          {
            icon: <BarChart className="w-6 h-6" />,
            title: "Analytik & Berichte",
            description: "Detaillierte Einblicke in Website-Traffic und Benutzerverhalten."
          },
          {
            icon: <Code className="w-6 h-6" />,
            title: "Technischer Support",
            description: "Fachkundiger technischer Support mit schnellen Reaktionszeiten."
          }
        ],
        pricing: {
          title: "Ihr Online-Erfolg beginnt hier – Wählen Sie klug & bleiben Sie vorne",
          description: "Online sichtbar zu sein ist keine Option mehr – es ist essentiell! Ob Sie gerade erst anfangen oder bereits etabliert sind, Ihre Website definiert Ihren Erfolg. Warten Sie nicht zu lange, denn jeder Tag ohne professionelle Website bedeutet verpasste Kunden!",
          packages: [
            {
              name: "Der smarte Start",
              price: "€300",
              subtitle: "Einmalige Investition!",
              description: "Für Unternehmer, Coaches und kleine Unternehmen, die eine professionelle Website ohne wiederkehrende Gebühren wünschen.",
              features: [
                "5 Premium-Seiten – Über uns, Leistungen, Kontakt, etc.",
                "Modernes und elegantes Design – Auf Ihre Marke zugeschnitten",
                "SEO-optimiert – Besseres Ranking bei Google",
                "Kontaktformular & Google Maps Integration",
                "1 Jahr Hosting, E-Mail & Wartung inklusive (Wert €50)",
                "Vollständig responsive Design – Perfekt auf allen Geräten"
              ],
              highlight: "Nach dem ersten Jahr Verlängerung für nur €25 pro Monat möglich",
              benefits: [
                "Einmalige Investition, lebenslanger Einfluss",
                "Professionelle Online-Präsenz ohne monatliche Gebühren",
                "Die ersten 10 Kunden erhalten nach 6 Monaten einen kostenlosen Optimierungs-Check"
              ],
              buttonText: "Sichern Sie sich Ihre Website",
              isPopular: false
            },
            {
              name: "Full-Service Webdesign",
              price: "€49,99+",
              subtitle: "pro Monat",
              description: "Für Unternehmen, die eine professionell verwaltete Website ohne Aufwand wünschen.",
              features: [
                "10+ Seiten – Umfassende Online-Präsenz",
                "Vollständig individuelles Design",
                "Erweiterte SEO-Optimierung",
                "Schnelles und sicheres Hosting inklusive",
                "Monatliche Updates & Wartung",
                "Prioritäts-E-Mail & technischer Support",
                "Social Media Integration",
                "Monatliche Leistungsberichte"
              ],
              highlight: "Kostenloses Design-Upgrade nach 12 Monaten bei laufendem Abonnement",
              benefits: [
                "Keine Sorgen um Wartung oder Updates",
                "Keine hohen Vorabkosten",
                "Alle zukünftigen Updates und Verbesserungen inklusive"
              ],
              buttonText: "Lassen Sie uns Ihre Website verwalten",
              isPopular: true
            }
          ],
          custom: {
            title: "Individuelles Webdesign",
            subtitle: "Ihre Website, Ihre Regeln",
            description: "Für Unternehmen, die mehr als eine Standard-Website benötigen. Wir erstellen maßgeschneiderte Websites nach Ihren genauen Anforderungen.",
            examples: [
              "E-Commerce-Plattformen – Vom kleinen Shop bis zum großen Online-Store",
              "Mitgliederseiten & Portale – Exklusive Inhalte und Kundenkonten",
              "Mehrsprachige Websites – Erweitern Sie Ihre Reichweite",
              "Fortgeschrittene Animationen & interaktive Elemente",
              "Individuelle Buchungs- & Reservierungssysteme"
            ],
            benefits: [
              "Individuelle Website steigert Conversions und schafft Vertrauen",
              "Alles speziell für Ihr Unternehmen entwickelt",
              "Beginnen Sie mit einem kostenlosen Strategiegespräch"
            ],
            buttonText: "Individuelles Angebot anfordern"
          }
        },
        hosting: {
          title: "Hosting und Geschwindigkeit",
          description: "Eine schnelle Website ist essentiell für eine gute Benutzererfahrung und bessere Auffindbarkeit in Suchmaschinen. Deshalb bieten wir Premium-Hosting mit folgenden Vorteilen:",
          hostingTitle: "Unser Hosting beinhaltet:",
          hostingFeatures: [
            "SSD-Speicher für schnellere Ladezeiten",
            "CDN für globale Geschwindigkeit",
            "Automatische Backups und Wiederherstellungsoption",
            "99,9% Verfügbarkeitsgarantie",
            "SSL-Zertifikat inklusive"
          ],
          speedTitle: "Geschwindigkeitsoptimierung:",
          speedFeatures: [
            "Optimierter Code und Datenbank",
            "Bildkomprimierung ohne Qualitätsverlust",
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
            title: "Beheerde Websites",
            description: "Volledig beheerde websites met regelmatige updates, beveiliging en onderhoud."
          },
          {
            icon: <Palette className="w-6 h-6" />,
            title: "Maatwerk Design",
            description: "Unieke ontwerpen die perfect aansluiten bij uw merk en bedrijfsidentiteit."
          },
          {
            icon: <Zap className="w-6 h-6" />,
            title: "Snelle Hosting",
            description: "Ultrasnelle hosting met geoptimaliseerde laadtijden voor betere gebruikerservaring."
          },
          {
            icon: <Shield className="w-6 h-6" />,
            title: "Beveiliging",
            description: "Geavanceerde beveiligingsmaatregelen om uw website en klantgegevens te beschermen."
          },
          {
            icon: <BarChart className="w-6 h-6" />,
            title: "Analytics & Rapportage",
            description: "Gedetailleerde inzichten in websiteverkeer en gebruikersgedrag."
          },
          {
            icon: <Code className="w-6 h-6" />,
            title: "Technische Ondersteuning",
            description: "Deskundige technische ondersteuning met snelle responstijden."
          }
        ],
        pricing: {
          title: "Uw Online Succes Begint Hier – Kies Slim & Blijf Voorop",
          description: "Online zichtbaar zijn is geen optie meer – het is essentieel! Of u nu net begint of al gevestigd bent, uw website bepaalt uw succes. Wacht niet te lang, want elke dag zonder professionele website betekent gemiste klanten!",
          packages: [
            {
              name: "De Slimme Start",
              price: "€300",
              subtitle: "Eenmalige investering!",
              description: "Voor ondernemers, coaches en kleine bedrijven die een professionele website willen zonder terugkerende kosten.",
              features: [
                "5 premium pagina's – Over ons, diensten, contact, etc.",
                "Modern en strak design – Op maat voor uw merk",
                "SEO-geoptimaliseerd – Beter vindbaar in Google",
                "Contactformulier & Google Maps integratie",
                "1 jaar hosting, e-mail & onderhoud inbegrepen (€50 waarde)",
                "Volledig responsive design – Perfect op alle apparaten"
              ],
              highlight: "Na het eerste jaar verlenging mogelijk voor slechts €25 per maand",
              benefits: [
                "Eenmalige investering, levenslange impact",
                "Professionele online aanwezigheid zonder maandelijkse kosten",
                "Eerste 10 klanten krijgen gratis optimalisatie-check na 6 maanden"
              ],
              buttonText: "Claim Uw Website Nu",
              isPopular: false
            },
            {
              name: "Full-Service Webdesign",
              price: "€49,99",
              subtitle: "V/A per maand",
              description: "Voor bedrijven die een professioneel beheerde website willen zonder zorgen.",
              features: [
                "10+ pagina's – Complete online aanwezigheid",
                "Volledig maatwerk design",
                "Geavanceerde SEO-optimalisatie",
                "Snelle en veilige hosting inbegrepen",
                "Maandelijkse updates & onderhoud",
                "Prioriteit e-mail & technische support",
                "Social media integratie",
                "Maandelijkse prestatierapportages"
              ],
              highlight: "Gratis design-upgrade na 12 maanden bij doorlopend abonnement",
              benefits: [
                "Nooit zorgen over onderhoud of updates",
                "Geen hoge opstartkosten",
                "Inclusief alle toekomstige updates en verbeteringen"
              ],
              buttonText: "Laat Ons Uw Website Beheren",
              isPopular: true
            }
          ],
          custom: {
            title: "Maatwerk Webdesign",
            subtitle: "Uw Website, Uw Regels",
            description: "Voor bedrijven die meer nodig hebben dan een standaard website. Wij creëren websites op maat volgens uw exacte wensen.",
            examples: [
              "E-commerce platforms – Van kleine shops tot grote online stores",
              "Ledenpagina's & portalen – Exclusieve content en klantaccounts",
              "Meertalige websites – Vergroot uw bereik",
              "Geavanceerde animaties & interactieve elementen",
              "Aangepaste boekings- & reserveringssystemen"
            ],
            benefits: [
              "Maatwerk website verhoogt conversies en bouwt vertrouwen",
              "Alles specifiek gebouwd voor uw bedrijf",
              "Begin met een gratis strategiegesprek"
            ],
            buttonText: "Vraag een Offerte Aan"
          }
        },
        hosting: {
          title: "Hosting en Snelheid",
          description: "Een snelle website is essentieel voor een goede gebruikerservaring en betere vindbaarheid in zoekmachines. Daarom bieden we premium hosting met de volgende voordelen:",
          hostingTitle: "Onze Hosting Omvat:",
          hostingFeatures: [
            "SSD-opslag voor snellere laadtijden",
            "CDN voor wereldwijde snelheid",
            "Automatische backups en hersteloptie",
            "99,9% uptime garantie",
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
            className="max-w-7xl mx-auto"
          >
            {/* Services Section */}
            <section className="mb-16">
              <h1 className="text-4xl font-bold mb-8">
                <span className="gradient-text">{content.title}</span>
              </h1>
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
            
            {/* Pricing Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-center">
                <span className="gradient-text">{content.pricing.title}</span>
              </h2>
              <p className="text-gray-300 mb-12 text-center max-w-4xl mx-auto text-lg">
                {content.pricing.description}
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {content.pricing.packages.map((pkg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative p-8 rounded-xl border ${
                      pkg.isPopular 
                        ? 'border-[var(--accent-red)] scale-105 red-box-glow' 
                        : 'border-[var(--accent-purple)]'
                    } transition-all duration-300 bg-black/20`}
                  >
                    {pkg.isPopular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[var(--accent-red)] to-[var(--accent-purple)] 
                                    text-white text-sm font-semibold py-1 px-4 rounded-full flex items-center gap-2">
                        <Star className="w-4 h-4" />
                        Most Popular
                      </div>
                    )}
                    
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold">{pkg.price}</span>
                        <span className="text-gray-400">{pkg.subtitle}</span>
                      </div>
                      <p className="text-gray-300 mt-4">{pkg.description}</p>
                    </div>
                    
                    <ul className="space-y-4 mb-6">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-300">
                          <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[var(--accent-red)] to-[var(--accent-purple)] 
                                      flex items-center justify-center flex-shrink-0 mt-1">
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    {pkg.highlight && (
                      <div className="mb-6 p-4 rounded-lg bg-gradient-to-r from-[var(--accent-red)]/10 to-[var(--accent-purple)]/10 
                                    border border-[var(--accent-purple)] text-gray-300">
                        <Clock className="w-5 h-5 mb-2" />
                        {pkg.highlight}
                      </div>
                    )}
                    
                    <div className="space-y-4 mb-6">
                      <h4 className="font-semibold text-lg">Why choose NOW?</h4>
                      <ul className="space-y-2">
                        {pkg.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-center gap-2 text-gray-300">
                            <ArrowRight className="w-4 h-4 text-[var(--accent-red)]" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <button
                      onClick={openModal}
                      className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 ${
                        pkg.isPopular
                          ? 'bg-gradient-to-r from-[var(--accent-red)] to-[var(--accent-purple)] text-white hover:brightness-110'
                          : 'border border-[var(--accent-purple)] text-white hover:border-[var(--accent-red)]'
                      }`}
                    >
                      {pkg.buttonText}
                    </button>
                  </motion.div>
                ))}
              </div>
              
              {/* Custom Solution Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="p-8 rounded-xl border border-[var(--accent-purple)] bg-black/20"
              >
                <h3 className="text-2xl font-bold mb-2">{content.pricing.custom.title}</h3>
                <p className="text-xl text-[var(--accent-purple)] mb-6">{content.pricing.custom.subtitle}</p>
                <p className="text-gray-300 mb-6">{content.pricing.custom.description}</p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-lg mb-4">Examples of custom solutions:</h4>
                    <ul className="space-y-3">
                      {content.pricing.custom.examples.map((example, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-300">
                          <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[var(--accent-red)] to-[var(--accent-purple)] 
                                      flex items-center justify-center flex-shrink-0 mt-1">
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-4">Why choose NOW?</h4>
                    <ul className="space-y-3 mb-6">
                      {content.pricing.custom.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-300">
                          <ArrowRight className="w-4 h-4 text-[var(--accent-red)]" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    
                    <button
                      onClick={openModal}
                      className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-[var(--accent-red)] to-[var(--accent-purple)] 
                               text-white rounded-lg font-semibold hover:brightness-110 transition-all duration-300"
                    >
                      {content.pricing.custom.buttonText}
                    </button>
                  </div>
                </div>
              </motion.div>
            </section>
            
            {/* Hosting Section */}
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
