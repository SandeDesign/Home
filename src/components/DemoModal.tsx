import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    demoType: 'chatbot',
    acceptNewsletter: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({ ...prev, [name]: val }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          company: '',
          website: '',
          demoType: 'chatbot',
          acceptNewsletter: false
        });
        onClose();
        setIsSuccess(false);
      }, 3000);
    }, 1500);
  };

  const getLocalizedText = () => {
    if (language === 'en') {
      return {
        title: 'Request a Demo',
        subtitle: 'Fill in the form below to receive a personalized demo',
        name: 'Your Name',
        email: 'Email Address',
        company: 'Company Name (optional)',
        website: 'Website (optional)',
        demoType: 'Demo Type',
        chatbot: 'Chat Bot',
        voicebot: 'Voice Bot',
        acceptNewsletter: 'I agree to receive the newsletter and accept the processing of my information',
        submit: 'Request Demo',
        submitting: 'Submitting...',
        success: 'Thank you for your request!',
        successMessage: 'We will contact you shortly with your personalized demo.'
      };
    } else if (language === 'de') {
      return {
        title: 'Demo anfordern',
        subtitle: 'Füllen Sie das Formular aus, um eine personalisierte Demo zu erhalten',
        name: 'Ihr Name',
        email: 'E-Mail-Adresse',
        company: 'Firmenname (optional)',
        website: 'Website (optional)',
        demoType: 'Demo-Typ',
        chatbot: 'Chat-Bot',
        voicebot: 'Sprach-Bot',
        acceptNewsletter: 'Ich stimme dem Erhalt des Newsletters zu und akzeptiere die Verarbeitung meiner Daten',
        submit: 'Demo anfordern',
        submitting: 'Wird gesendet...',
        success: 'Vielen Dank für Ihre Anfrage!',
        successMessage: 'Wir werden uns in Kürze mit Ihrer personalisierten Demo bei Ihnen melden.'
      };
    } else {
      // Default to Dutch
      return {
        title: 'Demo aanvragen',
        subtitle: 'Vul het formulier in om een gepersonaliseerde demo te ontvangen',
        name: 'Uw Naam',
        email: 'E-mailadres',
        company: 'Bedrijfsnaam (optioneel)',
        website: 'Website (optioneel)',
        demoType: 'Demo Type',
        chatbot: 'Chat Bot',
        voicebot: 'Voice Bot',
        acceptNewsletter: 'Ik ga akkoord met het ontvangen van de nieuwsbrief en accepteer de verwerking van mijn gegevens',
        submit: 'Demo aanvragen',
        submitting: 'Versturen...',
        success: 'Bedankt voor uw aanvraag!',
        successMessage: 'We nemen binnenkort contact met u op met uw gepersonaliseerde demo.'
      };
    }
  };

  const text = getLocalizedText();

  if (!isOpen) return null;

  return (
    <div 
      id="demo-modal-overlay"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 999999,
        padding: '1rem'
      }}
      onClick={onClose}
    >
      <div 
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '32rem',
          backgroundColor: '#0a0a0a',
          borderRadius: '0.5rem',
          border: '1px solid #9333ea',
          overflow: 'hidden'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            zIndex: 10,
            padding: '0.5rem',
            borderRadius: '9999px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            color: 'white',
            cursor: 'pointer',
            border: 'none'
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>

        {isSuccess ? (
          <div style={{ textAlign: 'center', padding: '2rem 1.5rem' }}>
            <div style={{ 
              width: '4rem', 
              height: '4rem', 
              margin: '0 auto 1rem auto', 
              borderRadius: '9999px', 
              background: 'linear-gradient(to right, #ff0044, #9333ea)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 5px #ff0044, 0 0 10px #ff0044'
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'white' }}>{text.success}</h3>
            <p style={{ color: 'rgb(209, 213, 219)', marginBottom: '1.5rem' }}>{text.successMessage}</p>
          </div>
        ) : (
          <div style={{ padding: '1.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: 'white' }}>{text.title}</h2>
            <p style={{ color: 'rgb(209, 213, 219)', marginBottom: '1.5rem' }}>{text.subtitle}</p>
            
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem', color: 'white' }}>{text.name}</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.5rem 1rem',
                    borderRadius: '0.5rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid #9333ea',
                    color: 'white',
                    outline: 'none'
                  }}
                  required
                />
              </div>
              
              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem', color: 'white' }}>{text.email}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.5rem 1rem',
                    borderRadius: '0.5rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid #9333ea',
                    color: 'white',
                    outline: 'none'
                  }}
                  required
                />
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem', color: 'white' }}>{text.company}</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.5rem 1rem',
                      borderRadius: '0.5rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid #9333ea',
                      color: 'white',
                      outline: 'none'
                    }}
                  />
                </div>
                
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem', color: 'white' }}>{text.website}</label>
                  <input
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.5rem 1rem',
                      borderRadius: '0.5rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid #9333ea',
                      color: 'white',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>
              
              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem', color: 'white' }}>{text.demoType}</label>
                <select
                  name="demoType"
                  value={formData.demoType}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.5rem 1rem',
                    borderRadius: '0.5rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid #9333ea',
                    color: 'white',
                    outline: 'none'
                  }}
                >
                  <option value="chatbot">{text.chatbot}</option>
                  <option value="voicebot">{text.voicebot}</option>
                </select>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <input
                  type="checkbox"
                  id="acceptNewsletter"
                  name="acceptNewsletter"
                  checked={formData.acceptNewsletter}
                  onChange={handleChange}
                  style={{ marginTop: '0.25rem', marginRight: '0.5rem' }}
                  required
                />
                <label htmlFor="acceptNewsletter" style={{ fontSize: '0.875rem', color: 'rgb(209, 213, 219)' }}>
                  {text.acceptNewsletter}
                </label>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  padding: '0.75rem 1.5rem',
                  background: 'linear-gradient(to right, #ff0044, #9333ea)',
                  color: 'white',
                  borderRadius: '0.5rem',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 0 5px #ff0044, 0 0 10px #ff0044',
                  border: 'none',
                  cursor: 'pointer',
                  opacity: isSubmitting ? '0.7' : '1'
                }}
              >
                {isSubmitting ? (
                  <>
                    <div style={{ 
                      width: '1.25rem', 
                      height: '1.25rem', 
                      border: '2px solid white', 
                      borderTopColor: 'transparent', 
                      borderRadius: '50%',
                      animation: 'spin 1s linear infinite'
                    }}></div>
                    <span>{text.submitting}</span>
                  </>
                ) : (
                  text.submit
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}