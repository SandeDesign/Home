import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import UseCases from './components/UseCases';
import WebDesignSummary from './components/WebDesignSummary';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ModalProvider } from './context/ModalContext';
import { LanguageProvider } from './context/LanguageContext';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import WebDesignServices from './pages/WebDesignServices';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import CookiePolicy from './pages/CookiePolicy';
import CookieBanner from './components/CookieBanner';
import NewsletterPopup from './components/NewsletterPopup';
import { Card } from './components/ui/card';
import { Spotlight } from './components/ui/spotlight';

// ScrollToTop component to reset scroll position on page navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <LanguageProvider>
      <ModalProvider>
        <Router>
          <div className="relative">
            <Card className="w-full min-h-screen bg-black/[0.96] relative overflow-hidden border-0">
              <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="var(--accent-red)"
              />
              <ScrollToTop />
              <CookieBanner />
              <NewsletterPopup />
              <Routes>
                <Route path="/" element={
                  <main className="bg-transparent">
                    <Header />
                    <Hero />
                    <UseCases />
                    <Features />
                    <WebDesignSummary />
                    <Contact />
                    <Footer />
                  </main>
                } />
                <Route path="/web-design-services" element={<WebDesignServices />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-conditions" element={<TermsConditions />} />
                <Route path="/cookie-policy" element={<CookiePolicy />} />
              </Routes>
            </Card>
          </div>
        </Router>
      </ModalProvider>
    </LanguageProvider>
  );
}

export default App;