import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function NewsletterPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const { language } = useLanguage();

  useEffect(() => {
    // Check if the popup has been dismissed within the last day
    const lastDismissed = localStorage.getItem('newsletterPopupDismissed');
    const shouldShow = !lastDismissed || (Date.now() - parseInt(lastDismissed)) > 24 * 60 * 60 * 1000;
    
    if (shouldShow) {
      // Show popup after 20 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 20000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    // Store the current timestamp when dismissed
    localStorage.setItem('newsletterPopupDismissed', Date.now().toString());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError(getLocalizedText('invalidEmail'));
      setIsSubmitting(false);
      return;
    }
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Store that user has subscribed
      localStorage.setItem('newsletterSubscribed', 'true');
      // Still store dismissal time to prevent showing again for a day
      localStorage.setItem('newsletterPopupDismissed', Date.now().toString());
      
      // Reset form after 3 seconds and close
      setTimeout(() => {
        setEmail('');
        setIsVisible(false);
      }, 3000);
    }, 1500);
  };

  const getLocalizedText = (key: string) => {
    const texts: Record<string, Record<string, string>> = {
      title: {
        en: 'Subscribe to Our Newsletter',
        de: 'Abonnieren Sie unseren Newsletter',
        nl: 'Abonneer op onze nieuwsbrief'
      },
      subtitle: {
        en: 'Get the latest updates, news and special offers directly to your inbox.',
        de: 'Erhalten Sie die neuesten Updates, Nachrichten und Sonderangebote direkt in Ihren Posteingang.',
        nl: 'Ontvang de laatste updates, nieuws en speciale aanbiedingen direct in uw inbox.'
      },
      placeholder: {
        en: 'Your email address',
        de: 'Ihre E-Mail-Adresse',
        nl: 'Uw e-mailadres'
      },
      button: {
        en: 'Subscribe',
        de: 'Abonnieren',
        nl: 'Abonneren'
      },
      submitting: {
        en: 'Subscribing...',
        de: 'Wird abonniert...',
        nl: 'Bezig met abonneren...'
      },
      success: {
        en: 'Thank you for subscribing!',
        de: 'Vielen Dank für Ihr Abonnement!',
        nl: 'Bedankt voor uw aanmelding!'
      },
      invalidEmail: {
        en: 'Please enter a valid email address',
        de: 'Bitte geben Sie eine gültige E-Mail-Adresse ein',
        nl: 'Voer een geldig e-mailadres in'
      }
    };
    
    return texts[key][language] || texts[key]['en'];
  };

  if (!isVisible) return null;

  return (
    <div
      id="newsletter-popup-overlay"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 999999,
        padding: '1rem'
      }}
      onClick={handleClose}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '26rem',
          backgroundColor: '#0a0a0a',
          borderRadius: '0.5rem',
          border: '1px solid #9333ea',
          padding: '2rem',
          overflow: 'hidden'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
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
        
        {/* Background decoration */}
        <div style={{
          position: 'absolute',
          top: '-5rem',
          right: '-5rem',
          width: '10rem',
          height: '10rem',
          background: 'linear-gradient(to right, #ff0044, #9333ea)',
          borderRadius: '50%',
          opacity: '0.2',
          filter: 'blur(3rem)'
        }}></div>
        
        <div style={{
          position: 'absolute',
          bottom: '-5rem',
          left: '-5rem',
          width: '10rem',
          height: '10rem',
          background: 'linear-gradient(to right, #9333ea, #ff0044)',
          borderRadius: '50%',
          opacity: '0.2',
          filter: 'blur(3rem)'
        }}></div>
        
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            width: '4rem',
            height: '4rem',
            margin: '0 auto 1.5rem',
            borderRadius: '50%',
            background: 'linear-gradient(to right, #ff0044, #9333ea)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 5px #ff0044, 0 0 10px #ff0044'
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </div>
          
          {isSuccess ? (
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'white' }}>
                {getLocalizedText('success')}
              </h3>
              <p style={{ color: 'rgb(209, 213, 219)', marginBottom: '1.5rem' }}>✓</p>
            </div>
          ) : (
            <>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem', textAlign: 'center', color: 'white' }}>
                {getLocalizedText('title')}
              </h3>
              <p style={{ color: 'rgb(209, 213, 219)', marginBottom: '1.5rem', textAlign: 'center' }}>
                {getLocalizedText('subtitle')}
              </p>
              
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1rem' }}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={getLocalizedText('placeholder')}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '0.5rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid #9333ea',
                      color: 'white',
                      outline: 'none'
                    }}
                    required
                  />
                  {error && (
                    <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#f87171' }}>
                      {error}
                    </p>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
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
                        width: '1rem',
                        height: '1rem',
                        border: '2px solid white',
                        borderTopColor: 'transparent',
                        borderRadius: '50%',
                        animation: 'spin 1s linear infinite'
                      }}></div>
                      <span>{getLocalizedText('submitting')}</span>
                    </>
                  ) : (
                    getLocalizedText('button')
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}