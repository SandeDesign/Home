import { motion } from 'framer-motion';
import { Palette, Zap, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function WebDesignSummary() {
  const { language } = useLanguage();
  
  const getLocalizedContent = () => {
    if (language === 'en') {
      return {
        title: "Web Design",
        subtitle: "Elevate your online presence with our expert web design services",
        description: "We create stunning, functional websites that not only look great but also drive results for your business.",
        features: [
          {
            icon: <Palette className="w-6 h-6" />,
            title: "Custom Design",
            description: "Unique designs tailored to your brand identity and business goals."
          },
          {
            icon: <Zap className="w-6 h-6" />,
            title: "Fast & Responsive",
            description: "Lightning-fast websites that work perfectly on all devices."
          },
          {
            icon: <Shield className="w-6 h-6" />,
            title: "Secure & Reliable",
            description: "Built with security in mind to protect your business and customers."
          }
        ],
        cta: "Learn More"
      };
    } else if (language === 'de') {
      return {
        title: "Webdesign",
        subtitle: "Verbessern Sie Ihre Online-Präsenz mit unseren Webdesign-Dienstleistungen",
        description: "Wir erstellen beeindruckende, funktionale Websites, die nicht nur gut aussehen, sondern auch Ergebnisse für Ihr Unternehmen liefern.",
        features: [
          {
            icon: <Palette className="w-6 h-6" />,
            title: "Individuelles Design",
            description: "Einzigartige Designs, die auf Ihre Markenidentität und Geschäftsziele zugeschnitten sind."
          },
          {
            icon: <Zap className="w-6 h-6" />,
            title: "Schnell & Responsiv",
            description: "Blitzschnelle Websites, die auf allen Geräten perfekt funktionieren."
          },
          {
            icon: <Shield className="w-6 h-6" />,
            title: "Sicher & Zuverlässig",
            description: "Mit Sicherheit im Fokus entwickelt, um Ihr Unternehmen und Ihre Kunden zu schützen."
          }
        ],
        cta: "Mehr Erfahren"
      };
    } else {
      // Default to Dutch
      return {
        title: "Webdesign",
        subtitle: "Verbeter uw online aanwezigheid met onze webdesign diensten",
        description: "Wij creëren prachtige, functionele websites die niet alleen goed eruitzien, maar ook resultaten opleveren voor uw bedrijf.",
        features: [
          {
            icon: <Palette className="w-6 h-6" />,
            title: "Op Maat Gemaakt Design",
            description: "Unieke ontwerpen afgestemd op uw merkidentiteit en bedrijfsdoelen."
          },
          {
            icon: <Zap className="w-6 h-6" />,
            title: "Snel & Responsief",
            description: "Razendsnelle websites die perfect werken op alle apparaten."
          },
          {
            icon: <Shield className="w-6 h-6" />,
            title: "Veilig & Betrouwbaar",
            description: "Gebouwd met veiligheid in gedachten om uw bedrijf en klanten te beschermen."
          }
        ],
        cta: "Meer Informatie"
      };
    }
  };

  const content = getLocalizedContent();

  // Function to format the title with the first word in white
  const formatTitle = (title: string) => {
    const words = title.split(' ');
    if (words.length > 1) {
      return (
        <>
          <span className="text-white">{words[0]}</span> {words.slice(1).join(' ')}
        </>
      );
    }
    return title;
  };

  return (
    <section className="py-20 relative">
      {/* Gradient connector from previous section */}
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
            <span className="gradient-text">{formatTitle(content.title)}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {content.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <p className="text-lg text-gray-300 mb-8">
              {content.description}
            </p>
            
            <div className="space-y-6 mb-8">
              {content.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[var(--accent-red)] to-[var(--accent-purple)] flex items-center justify-center red-box-glow flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex items-center">
              <Link
                to="/web-design-services"
                className="px-8 py-4 bg-gradient-to-r from-[var(--accent-red)] to-[var(--accent-purple)] 
                         text-white rounded-lg font-semibold flex items-center justify-center gap-2 
                         red-box-glow hover:brightness-110 transition-all duration-300"
              >
                {content.cta}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-video rounded-lg overflow-hidden border border-[var(--accent-purple)] shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
                alt="Web Design Example" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating elements for visual interest */}
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-r from-[var(--accent-red)] to-[var(--accent-purple)] rounded-lg opacity-20 blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-r from-[var(--accent-purple)] to-[var(--accent-red)] rounded-lg opacity-20 blur-xl"></div>
            
            {/* Sample website mockup */}
            <div className="absolute bottom-8 right-8 w-40 h-40 bg-white rounded-lg shadow-xl overflow-hidden border-4 border-white transform rotate-6">
              <img 
                src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                alt="Mobile Design Example" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Gradient connector to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
    </section>
  );
}