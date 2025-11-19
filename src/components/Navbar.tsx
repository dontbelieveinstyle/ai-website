import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/logo.jpg';
import { useI18n } from '../i18n/LanguageProvider';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const { t, toggleLanguage } = useI18n();
  const showTopContactCTA = false;
  const navItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.blog'), path: '/blog' },
    { name: t('nav.contact'), path: '/contact' }
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logoImg} alt="Logo" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-orange-500 ${
                  isActive(item.path)
                    ? 'text-orange-500 border-b-2 border-orange-500 pb-1'
                    : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
            {showTopContactCTA && (
              <Link to="/contact" className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium">
                {t('cta.contactUs')}
              </Link>
            )}
            <button
              onClick={toggleLanguage}
              className="ml-2 px-3 py-2 rounded-lg border border-blue-200 text-blue-900 hover:bg-blue-50 text-sm"
              aria-label="toggle language"
            >
              {t('nav.toggle')}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 text-base font-medium transition-colors hover:text-orange-500 hover:bg-gray-50 rounded-md ${
                    isActive(item.path)
                      ? 'text-orange-500 bg-orange-50'
                      : 'text-gray-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2 space-y-2">
                {showTopContactCTA && (
                  <Link to="/contact" className="block w-full text-center bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium">
                    {t('cta.contactUs')}
                  </Link>
                )}
                <button
                  onClick={() => { toggleLanguage(); setIsMenuOpen(false); }}
                  className="w-full px-3 py-2 rounded-lg border border-blue-200 text-blue-900 hover:bg-blue-50 text-sm"
                  aria-label="toggle language"
                >
                  {t('nav.toggle')}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;