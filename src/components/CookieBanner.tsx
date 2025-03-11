import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true, // Always true and can't be changed
    analytics: false,
    marketing: false,
    preferences: false
  });
  const { content, language } = useLanguage();

  useEffect(() => {
    // Check if user has already set cookie preferences
    const preferences = localStorage.getItem('cookiePreferences');
    if (!preferences) {
      // If no preferences are set, show the banner after a short delay
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1000);
      return () => clearTimeout(timer);
    }

    // Listen for custom event to show the cookie banner
    const handleShowCookieBanner = () => {
      setShowBanner(true);
      setShowSettings(true);
    };

    window.addEventListener('showCookieBanner', handleShowCookieBanner);

    return () => {
      window.removeEventListener('showCookieBanner', handleShowCookieBanner);
    };
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true
    };
    
    setCookiePreferences(allAccepted);
    localStorage.setItem('cookiePreferences', JSON.stringify(allAccepted));
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    const allRejected = {
      necessary: true, // Necessary cookies are always accepted
      analytics: false,
      marketing: false,
      preferences: false
    };
    
    setCookiePreferences(allRejected);
    localStorage.setItem('cookiePreferences', JSON.stringify(allRejected));
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookiePreferences', JSON.stringify(cookiePreferences));
    setShowBanner(false);
    setShowSettings(false);
  };

  const togglePreference = (key: keyof typeof cookiePreferences) => {
    if (key === 'necessary') return; // Can't toggle necessary cookies
    
    setCookiePreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (!showBanner) return null;

  return (
    <div
      id="cookie-banner"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 99990,
        padding: '1rem'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{
          backgroundColor: '#0a0a0a',
          border: '1px solid #9333ea',
          borderRadius: '0.5rem',
          padding: showSettings ? '1.5rem' : '1rem',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
        }}>
          {!showSettings ? (
            <div style={{ 
              display: 'flex', 
              flexDirection: window.innerWidth < 768 ? 'column' : 'row',
              alignItems: window.innerWidth < 768 ? 'flex-start' : 'center',
              justifyContent: 'space-between',
              gap: '1rem'
            }}>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem', color: 'white' }}>
                  {content.cookieBanner.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'rgb(209, 213, 219)' }}>
                  {content.cookieBanner.description}
                  <Link to="/cookie-policy" style={{ color: '#ff0044', marginLeft: '0.25rem', textDecoration: 'none' }}>
                    Cookie Policy
                  </Link>
                </p>
              </div>
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '0.5rem', 
                marginTop: window.innerWidth < 768 ? '0.5rem' : 0 
              }}>
                <button
                  onClick={handleRejectAll}
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    borderRadius: '0.5rem',
                    fontSize: '0.875rem',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  {content.cookieBanner.reject}
                </button>
                <button
                  onClick={() => setShowSettings(true)}
                  style={{
                    padding: '0.5rem 1rem',
                    border: '1px solid #9333ea',
                    color: 'white',
                    borderRadius: '0.5rem',
                    fontSize: '0.875rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    background: 'transparent',
                    cursor: 'pointer'
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
                  {content.cookieBanner.settings}
                </button>
                <button
                  onClick={handleAcceptAll}
                  style={{
                    padding: '0.5rem 1rem',
                    background: 'linear-gradient(to right, #ff0044, #9333ea)',
                    color: 'white',
                    borderRadius: '0.5rem',
                    fontSize: '0.875rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  {content.cookieBanner.accept}
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between', 
                marginBottom: '1rem' 
              }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'white' }}>
                  {content.cookieBanner.settings}
                </h3>
                <button
                  onClick={() => setShowSettings(false)}
                  style={{
                    padding: '0.25rem',
                    borderRadius: '9999px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>
              </div>
              
              <div style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {/* Necessary cookies */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <h4 style={{ fontWeight: '500', color: 'white' }}>
                      {content.cookieBanner.necessary.title}
                    </h4>
                    <p style={{ fontSize: '0.875rem', color: 'rgb(156, 163, 175)' }}>
                      {content.cookieBanner.necessary.description}
                    </p>
                  </div>
                  <div style={{ 
                    width: '3rem', 
                    height: '1.5rem', 
                    background: 'linear-gradient(to right, #ff0044, #9333ea)',
                    borderRadius: '9999px', 
                    position: 'relative', 
                    opacity: '0.8',
                    cursor: 'not-allowed'
                  }}>
                    <div style={{ 
                      position: 'absolute', 
                      right: '0.25rem', 
                      top: '0.25rem', 
                      width: '1rem', 
                      height: '1rem', 
                      backgroundColor: 'white', 
                      borderRadius: '9999px' 
                    }}></div>
                  </div>
                </div>
                
                {/* Analytics cookies */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <h4 style={{ fontWeight: '500', color: 'white' }}>
                      {content.cookieBanner.analytics.title}
                    </h4>
                    <p style={{ fontSize: '0.875rem', color: 'rgb(156, 163, 175)' }}>
                      {content.cookieBanner.analytics.description}
                    </p>
                  </div>
                  <button
                    onClick={() => togglePreference('analytics')}
                    style={{ 
                      width: '3rem', 
                      height: '1.5rem', 
                      background: cookiePreferences.analytics 
                        ? 'linear-gradient(to right, #ff0044, #9333ea)'
                        : 'rgb(55, 65, 81)', 
                      borderRadius: '9999px', 
                      position: 'relative',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    <div style={{ 
                      position: 'absolute', 
                      left: cookiePreferences.analytics ? 'auto' : '0.25rem',
                      right: cookiePreferences.analytics ? '0.25rem' : 'auto',
                      top: '0.25rem', 
                      width: '1rem', 
                      height: '1rem', 
                      backgroundColor: 'white', 
                      borderRadius: '9999px',
                      transition: 'all 0.2s'
                    }}></div>
                  </button>
                </div>
                
                {/* Marketing cookies */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <h4 style={{ fontWeight: '500', color: 'white' }}>
                      {content.cookieBanner.marketing.title}
                    </h4>
                    <p style={{ fontSize: '0.875rem', color: 'rgb(156, 163, 175)' }}>
                      {content.cookieBanner.marketing.description}
                    </p>
                  </div>
                  <button
                    onClick={() => togglePreference('marketing')}
                    style={{ 
                      width: '3rem', 
                      height: '1.5rem', 
                      background: cookiePreferences.marketing 
                        ? 'linear-gradient(to right, #ff0044, #9333ea)'
                        : 'rgb(55, 65, 81)', 
                      borderRadius: '9999px', 
                      position: 'relative',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    <div style={{ 
                      position: 'absolute', 
                      left: cookiePreferences.marketing ? 'auto' : '0.25rem',
                      right: cookiePreferences.marketing ? '0.25rem' : 'auto',
                      top: '0.25rem', 
                      width: '1rem', 
                      height: '1rem', 
                      backgroundColor: 'white', 
                      borderRadius: '9999px',
                      transition: 'all 0.2s'
                    }}></div>
                  </button>
                </div>
                
                {/* Preferences cookies */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <h4 style={{ fontWeight: '500', color: 'white' }}>
                      {content.cookieBanner.preferences.title}
                    </h4>
                    <p style={{ fontSize: '0.875rem', color: 'rgb(156, 163, 175)' }}>
                      {content.cookieBanner.preferences.description}
                    </p>
                  </div>
                  <button
                    onClick={() => togglePreference('preferences')}
                    style={{ 
                      width: '3rem', 
                      height: '1.5rem', 
                      background: cookiePreferences.preferences 
                        ? 'linear-gradient(to right, #ff0044, #9333ea)'
                        : 'rgb(55, 65, 81)', 
                      borderRadius: '9999px', 
                      position: 'relative',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    <div style={{ 
                      position: 'absolute', 
                      left: cookiePreferences.preferences ? 'auto' : '0.25rem',
                      right: cookiePreferences.preferences ? '0.25rem' : 'auto',
                      top: '0.25rem', 
                      width: '1rem', 
                      height: '1rem', 
                      backgroundColor: 'white', 
                      borderRadius: '9999px',
                      transition: 'all 0.2s'
                    }}></div>
                  </button>
                </div>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
                <button
                  onClick={() => setShowSettings(false)}
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    borderRadius: '0.5rem',
                    fontSize: '0.875rem',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  {language === 'nl' ? 'Annuleren' : language === 'de' ? 'Abbrechen' : 'Cancel'}
                </button>
                <button
                  onClick={handleSavePreferences}
                  style={{
                    padding: '0.5rem 1rem',
                    background: 'linear-gradient(to right, #ff0044, #9333ea)',
                    color: 'white',
                    borderRadius: '0.5rem',
                    fontSize: '0.875rem',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  {content.cookieBanner.save}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}