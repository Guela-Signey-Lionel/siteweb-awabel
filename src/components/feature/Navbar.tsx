import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { navLinks, marqueeItems } from '@/mocks/homeData';

export default function Navbar() {
  const { i18n, t } = useTranslation('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [marqueePaused, setMarqueePaused] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const currentLang = i18n.language || 'fr';

  return (
    <>
      {/* Scrolling Marquee Info Bar - Fixed at top */}
      <div
        className="fixed top-0 left-0 right-0 z-[60] bg-awabel-primary text-white text-xs py-2 overflow-hidden cursor-default"
        onMouseEnter={() => setMarqueePaused(true)}
        onMouseLeave={() => setMarqueePaused(false)}
      >
        <div
          className="flex whitespace-nowrap"
          style={{
            animation: marqueePaused ? 'none' : 'marquee-scroll 20s linear infinite',
          }}
        >
          {marqueeItems.map((item, idx) => (
            <span key={idx} className="flex items-center gap-2 mx-6">
              <span className="w-4 h-4 flex items-center justify-center text-awabel-yellow">
                <i className={item.icon}></i>
              </span>
              <span className="whitespace-nowrap">
                {item.key === 'motto' ? t('marquee.motto')
                  : item.key === 'country' ? t('marquee.country')
                  : item.key === 'address' ? t('marquee.address')
                  : item.text}
              </span>
              <span className="text-white/30 mx-2">|</span>
            </span>
          ))}
        </div>
      </div>

      {/* Spacer for fixed marquee */}
      <div className="h-8" />

      {/* Main navbar */}
      <nav
        className={`sticky top-8 z-50 border-b-2 border-awabel-primary transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo with real image */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg overflow-hidden flex-shrink-0 border border-gray-100 bg-white">
                <img
                  src="/images/logo.jpeg"
                  alt="AWABEL Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="hidden sm:flex flex-col items-start">
                <span className="block text-base md:text-lg font-bold text-awabel-primary font-nunito tracking-tight leading-none">
                  AWABEL
                </span>
                <span className="block text-[9px] md:text-[10px] text-awabel-yellow leading-tight -mt-0.5 font-opensans whitespace-nowrap">
                  A Wali ti Béafrica E Londo
                </span>
              </div>
            </Link>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm font-medium transition-colors whitespace-nowrap ${
                    link.href === '/contact'
                      ? 'bg-awabel-primary text-white px-4 py-1.5 rounded-full hover:bg-awabel-dark'
                      : location.pathname === link.href
                      ? 'text-awabel-primary'
                      : 'text-gray-600 hover:text-awabel-primary'
                  }`}
                >
                  {t(`nav.${link.key}`)}
                </Link>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-3">
              <Link
                to="/donate"
                className="hidden md:inline-flex items-center gap-2 bg-awabel-yellow text-awabel-dark px-4 py-2.5 rounded-full text-sm font-bold hover:bg-awabel-yellow/90 transition-colors whitespace-nowrap"
              >
                <span className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-heart-3-line text-sm"></i>
                </span>
                <span>{t('nav.donate')}</span>
              </Link>

              <div className="hidden md:flex items-center gap-1 ml-2 border-l border-gray-200 pl-3">
                <button
                  onClick={() => changeLang('fr')}
                  className={`w-7 h-7 flex items-center justify-center rounded-full text-base transition-all ${
                    currentLang === 'fr' ? 'ring-2 ring-awabel-blue ring-offset-1' : 'opacity-60 hover:opacity-100'
                  }`}
                  aria-label="Français"
                >
                  🇫🇷
                </button>
                <button
                  onClick={() => changeLang('en')}
                  className={`w-7 h-7 flex items-center justify-center rounded-full text-base transition-all ${
                    currentLang === 'en' ? 'ring-2 ring-awabel-blue ring-offset-1' : 'opacity-60 hover:opacity-100'
                  }`}
                  aria-label="English"
                >
                  🇬🇧
                </button>
              </div>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden w-10 h-10 flex items-center justify-center text-gray-700 hover:text-awabel-primary transition-colors"
              >
                <span className="w-6 h-6 flex items-center justify-center">
                  <i className={`ri-${mobileOpen ? 'close' : 'menu'}-line text-xl`}></i>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                    link.href === '/contact'
                      ? 'bg-awabel-primary text-white hover:bg-awabel-dark'
                      : location.pathname === link.href
                      ? 'text-awabel-primary bg-awabel-light'
                      : 'text-gray-700 hover:text-awabel-primary hover:bg-gray-50'
                  }`}
                >
                  {t(`nav.${link.key}`)}
                </Link>
              ))}
              <div className="flex items-center gap-3 mt-3 px-4">
                <button
                  onClick={() => changeLang('fr')}
                  className={`w-9 h-9 flex items-center justify-center rounded-full text-lg transition-all ${
                    currentLang === 'fr' ? 'ring-2 ring-awabel-blue ring-offset-1' : 'opacity-60 hover:opacity-100'
                  }`}
                  aria-label="Français"
                >
                  🇫🇷
                </button>
                <button
                  onClick={() => changeLang('en')}
                  className={`w-9 h-9 flex items-center justify-center rounded-full text-lg transition-all ${
                    currentLang === 'en' ? 'ring-2 ring-awabel-blue ring-offset-1' : 'opacity-60 hover:opacity-100'
                  }`}
                  aria-label="English"
                >
                  🇬🇧
                </button>
              </div>
              <Link
                to="/donate"
                className="mt-2 flex items-center justify-center gap-2 bg-awabel-blue text-awabel-dark px-5 py-3 rounded-full text-sm font-bold"
              >
                <span className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-heart-3-line text-sm"></i>
                </span>
                <span>{t('nav.donate')}</span>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
