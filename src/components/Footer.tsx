import React from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/LanguageProvider';
import { translations } from '../i18n/translations';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';
import logoImg from '../assets/logo.jpg';

const Footer: React.FC = () => {
  const { t, language } = useI18n();
  const showAddressInFooter = false;
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img src={logoImg} alt="Logo" className="h-10 w-auto" />
            </div>
            <p className="text-blue-200 mb-4">
              {t('footer.tagline')}
            </p>

          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-blue-200 hover:text-orange-400 transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-blue-200 hover:text-orange-400 transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-blue-200 hover:text-orange-400 transition-colors">
                  {t('nav.blog')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-blue-200 hover:text-orange-400 transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.services')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/service/ai-education" className="text-blue-200 hover:text-orange-400 transition-colors">
                  {t('services.aiEducation')}
                </Link>
              </li>
              <li>
                <Link to="/service/intelligent-automation" className="text-blue-200 hover:text-orange-400 transition-colors">
                  {t('services.intelligentAutomation')}
                </Link>
              </li>
              <li>
                <Link to="/service/data-analysis" className="text-blue-200 hover:text-orange-400 transition-colors">
                  {t('services.dataAnalysis')}
                </Link>
              </li>
              <li>
                <Link to="/service/ai-consulting" className="text-blue-200 hover:text-orange-400 transition-colors">
                  {t('services.aiConsulting')}
                </Link>
              </li>
              <li>
                <Link to="/service/custom-development" className="text-blue-200 hover:text-orange-400 transition-colors">
                  {t('services.customDevelopment')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.contact')}</h3>
            <div className="space-y-3">
              {showAddressInFooter && (
                <div className="flex items-center space-x-3">
                  <MapPin size={16} className="text-orange-400" />
                  <span className="text-blue-200 text-sm">
                    {translations[language].pages.contact.info.items[0].content}
                  </span>
                </div>
              )}
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-orange-400" />
                <span className="text-blue-200 text-sm">
                  info@xrexp.io
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-200 text-sm">
            &copy; Copyright 2025 XR Experience Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;