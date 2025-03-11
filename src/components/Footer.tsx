import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';
import { Link, useLocation } from 'react-router-dom';

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];
  const location = useLocation();
  
  const isHomePage = location.pathname === '/';
  
  return (
    <footer className="py-8 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          {!isHomePage && (
            <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm text-gray-400">
              <Link to="/web-design-services" className="hover:text-white hover:underline transition-colors">
                Web Design Services
              </Link>
              <Link to="/privacy-policy" className="hover:text-white hover:underline transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-conditions" className="hover:text-white hover:underline transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/cookie-policy" className="hover:text-white hover:underline transition-colors">
                Cookie Policy
              </Link>
              <Link to="/" className="hover:text-white hover:underline transition-colors">
                Home
              </Link>
            </div>
          )}
          
          <div className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} {t.footer.rights} <a href="https://sandedesign.nl" className="text-[#d61216] hover:underline" rel="noopener noreferrer">SandeDesign</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}