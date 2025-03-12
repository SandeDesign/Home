import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, ExternalLink, Zap } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language];
  const { openModal } = useModal();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: 'chatbot',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError('');
    
    try {
      // Old-school form submission approach
      const formElement = e.target as HTMLFormElement;
      formElement.submit();
      
      // As a backup, also try to send via EmailJS
      try {
        const templateParams = {
          to_email: 'support@sandedesign.nl',
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message
        };
        
        await emailjs.send(
          'service_sandedesign',
          'template_contact_form',
          templateParams,
          'YOUR_PUBLIC_KEY'
        );
      } catch (error) {
        console.log('EmailJS fallback failed, but form was submitted');
      }
      
      // Reset form after submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: 'chatbot',
        message: ''
      });
      
      setSubmitSuccess(true);
    } catch (error) {
      setSubmitError(t.contactForm.errorMessage);
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Function to handle phone call
  const handlePhoneCall = () => {
    window.location.href = 'tel:+31452092102';
  };

  // Function to open WhatsApp
  const handleWhatsApp = () => {
    window.open('https://wa.me/31452092102', '_blank');
  };

  // Function to open Google Maps
  const handleOpenMap = () => {
    window.open('https://maps.google.com/?q=Provincialeweg-Zuid+70,+Oirsbeek,+6438+BG', '_blank');
  };

  // Get localized labels
  const getLocalizedLabels = () => {
    if (language === 'en') {
      return {
        phone: 'Phone',
        email: 'Email',
        location: 'Location',
        whatsapp: 'WhatsApp',
        moreInfo: 'More Information',
        contactSupport: 'Contact Support'
      };
    } else if (language === 'de') {
      return {
        phone: 'Telefon',
        email: 'E-Mail',
        location: 'Standort',
        whatsapp: 'WhatsApp',
        moreInfo: 'Mehr Informationen',
        contactSupport: 'Kontakt mit Support'
      };
    } else {
      // Default to Dutch
      return {
        phone: 'Telefoon',
        email: 'E-mail',
        location: 'Locatie',
        whatsapp: 'WhatsApp',
        moreInfo: 'Meer Informatie',
        contactSupport: 'Contact opnemen met support'
      };
    }
  };

  const labels = getLocalizedLabels();

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
            {t.contactForm.title.get} <span className="gradient-text">{t.contactForm.title.touch}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            {t.contactForm.subtitle}
          </p>
          
          {/* Contact Support Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={openModal}
            className="px-8 py-4 bg-gradient-to-r from-[var(--accent-red)] to-[var(--accent-purple)] 
                     text-white rounded-lg font-semibold flex items-center justify-center gap-2 
                     red-box-glow hover:brightness-110 transition-all duration-300 mx-auto"
          >
            {labels.contactSupport}
            <Zap className="w-5 h-5" />
          </motion.button>
        </motion.div>

        {/* Contact Information Layout - Matching the screenshot */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-5xl mx-auto md:order-none">
          {/* Left Column - Phone & Email */}
          <div className="flex flex-col space-y-6">
            <a 
              href="tel:+31452092102" 
              className="flex items-center space-x-4 hover:bg-black/20 p-4 rounded-lg transition-colors"
              onClick={(e) => {
                e.preventDefault();
                handlePhoneCall();
              }}
            >
              <div 
                className="w-12 h-12 rounded-lg bg-gradient-to-r from-[var(--accent-red)] to-[var(--accent-purple)] flex items-center justify-center red-box-glow hover:brightness-110 transition-all cursor-pointer"
              >
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{labels.phone}</h3>
                <p className="text-gray-300 hover:text-white transition-colors">+31 45 209 2102</p>
              </div>
            </a>
            
            <a 
              href="mailto:support@sandedesign.nl"
              className="flex items-center space-x-4 hover:bg-black/20 p-4 rounded-lg transition-colors"
            >
              <div 
                className="w-12 h-12 rounded-lg bg-gradient-to-r from-[var(--accent-red)] to-[var(--accent-purple)] flex items-center justify-center red-box-glow hover:brightness-110 transition-all"
              >
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{labels.email}</h3>
                <p className="text-gray-300 hover:text-white transition-colors">support@sandedesign.nl</p>
              </div>
            </a>
          </div>
          
          {/* Middle Column - More Information */}
          <div className="p-6 rounded-lg border border-[var(--accent-purple)] bg-black/20 flex flex-col justify-center order-last md:order-none">
            <h3 className="text-xl font-semibold mb-4 text-center">{labels.moreInfo}</h3>
            <div className="grid grid-cols-2 gap-4">
              <Link 
                to="/web-design-services" 
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group p-2 hover:bg-black/20 rounded-lg"
              >
                <span>Web Design Services</span>
                <ExternalLink className="w-4 h-4 text-[var(--accent-red)] group-hover:text-[var(--accent-purple)] transition-colors ml-auto" />
              </Link>
              <Link 
                to="/privacy-policy" 
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group p-2 hover:bg-black/20 rounded-lg"
              >
                <span>Privacy Policy</span>
                <ExternalLink className="w-4 h-4 text-[var(--accent-red)] group-hover:text-[var(--accent-purple)] transition-colors ml-auto" />
              </Link>
              <Link 
                to="/terms-conditions" 
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group p-2 hover:bg-black/20 rounded-lg"
              >
                <span>Terms & Conditions</span>
                <ExternalLink className="w-4 h-4 text-[var(--accent-red)] group-hover:text-[var(--accent-purple)] transition-colors ml-auto" />
              </Link>
              <Link 
                to="/cookie-policy" 
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group p-2 hover:bg-black/20 rounded-lg"
              >
                <span>Cookie Policy</span>
                <ExternalLink className="w-4 h-4 text-[var(--accent-red)] group-hover:text-[var(--accent-purple)] transition-colors ml-auto" />
              </Link>
            </div>
          </div>
          
          {/* Right Column - WhatsApp & Location */}
          <div className="flex flex-col space-y-6">
            <a 
              href="https://wa.me/31452092102" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-4 hover:bg-black/20 p-4 rounded-lg transition-colors"
              onClick={(e) => {
                e.preventDefault();
                handleWhatsApp();
              }}
            >
              <div 
                className="w-12 h-12 rounded-lg bg-gradient-to-r from-[var(--accent-red)] to-[var(--accent-purple)] flex items-center justify-center red-box-glow hover:brightness-110 transition-all cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"/><path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"/><path d="M9.5 13.5c.5 1 1.5 1.5 2.5 1.5s2-.5 2.5-1.5"/></svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold">{labels.whatsapp}</h3>
                <p className="text-gray-300 hover:text-white transition-colors">+31 45 209 2102</p>
              </div>
            </a>
            
            <a 
              href="https://maps.google.com/?q=Provincialeweg-Zuid+70,+Oirsbeek,+6438+BG" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-4 hover:bg-black/20 p-4 rounded-lg transition-colors"
              onClick={(e) => {
                e.preventDefault();
                handleOpenMap();
              }}
            >
              <div 
                className="w-12 h-12 rounded-lg bg-gradient-to-r from-[var(--accent-red)] to-[var(--accent-purple)] flex items-center justify-center red-box-glow hover:brightness-110 transition-all cursor-pointer"
              >
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{labels.location}</h3>
                <p className="text-gray-300 hover:text-white transition-colors">
                  Provincialeweg-Zuid 70,<br />Oirsbeek, 6438 BG
                </p>
              </div>
            </a>
          </div>
        </div>
        
        {/* Mobile Layout */}
        <div className="md:hidden mt-8">
          {/* More Information for mobile is already included in the main layout */}
        </div>
      </div>
    </section>
  );
}