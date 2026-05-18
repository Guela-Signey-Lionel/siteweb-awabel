import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { contactInfo, navLinks } from '@/mocks/homeData';
import FadeInSection from '@/components/base/FadeInSection';

export default function Footer() {
  const { t } = useTranslation('home');

  return (
    <footer className="bg-awabel-primary text-white">
      <FadeInSection>
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Column 1 - About with logo */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-white">
                  <img
                    src="/images/logo.jpeg"
                    alt="AWABEL Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <span className="text-base font-bold font-nunito text-awabel-yellow">ONG AWABEL</span>
                  <span className="block text-[9px] text-white leading-tight">Association Wali ti Béafrica É Londo</span>
                </div>
              </div>
              <p className="text-white/90 text-sm leading-relaxed mb-4">
                {t('hero.subtitle')}
              </p>
              <p className="text-awabel-yellow font-semibold text-sm">
                {t('footer.slogan')}
              </p>
            </div>

            {/* Column 2 - Quick links */}
            <div>
              <h4 className="font-semibold text-sm mb-4 uppercase tracking-wider text-white/90">
                {t('footer.quick_links')}
              </h4>
              <ul className="space-y-2.5">
                {navLinks.map((link) => {
                  const key = link.href === '/' ? 'home' : link.href.replace('/', '');
                  return (
                    <li key={link.href}>
                      <Link
                        to={link.href}
                        className="text-white/80 text-sm hover:text-white transition-colors"
                      >
                        {t(`nav.${key}`)}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Column 3 - Programs */}
            <div>
              <h4 className="font-semibold text-sm mb-4 uppercase tracking-wider text-white/90">
                {t('footer.programs')}
              </h4>
              <ul className="space-y-2.5">
                <li><span className="text-white/80 text-sm">Droits des femmes</span></li>
                <li><span className="text-white/80 text-sm">Autonomisation économique des femmes</span></li>
                <li><span className="text-white/80 text-sm">Éducation & scolarisation</span></li>
                <li><span className="text-white/80 text-sm">Santé communautaire & bien-être familial</span></li>
                <li><span className="text-white/80 text-sm">Environnement, agropastoral & agroalimentaire</span></li>
              </ul>
            </div>

            {/* Column 4 - Contact */}
            <div>
              <h4 className="font-semibold text-sm mb-4 uppercase tracking-wider text-white/90">
                {t('footer.contact')}
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 flex items-center justify-center text-awabel-yellow mt-0.5 shrink-0">
                    <i className="ri-map-pin-line text-sm"></i>
                  </span>
                  <span className="text-white/80 text-sm leading-relaxed">{contactInfo.address}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-5 h-5 flex items-center justify-center text-awabel-yellow shrink-0">
                    <i className="ri-phone-line text-sm"></i>
                  </span>
                  <a href={`tel:${contactInfo.phone1}`} className="text-white/80 text-sm hover:text-white transition-colors">
                    {contactInfo.phone1}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-5 h-5 flex items-center justify-center text-awabel-yellow shrink-0">
                    <i className="ri-whatsapp-line text-sm"></i>
                  </span>
                  <a href="https://wa.me/23672125663" target="_blank" rel="noopener noreferrer" className="text-white/80 text-sm hover:text-white transition-colors">
                    {contactInfo.whatsapp}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-5 h-5 flex items-center justify-center text-awabel-yellow shrink-0">
                    <i className="ri-mail-line text-sm"></i>
                  </span>
                  <a href={`mailto:${contactInfo.email}`} className="text-white/80 text-sm hover:text-white transition-colors">
                    {contactInfo.email}
                  </a>
                </li>
              </ul>

              {/* Social links */}
              <div className="flex items-center gap-3 mt-6">
                <a href="https://www.facebook.com/share/1Tfo58ytWu/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/20 text-white/90 hover:text-[#1877F2] hover:border-[#1877F2] transition-colors" aria-label="Facebook">
                  <i className="ri-facebook-fill text-sm"></i>
                </a>
                <a href="https://wa.me/23672125663" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/20 text-white/90 hover:text-[#25D366] hover:border-[#25D366] transition-colors" aria-label="WhatsApp">
                  <i className="ri-whatsapp-line text-sm"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* Copyright bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white/80 text-xs text-center sm:text-left">
              {t('footer.copyright')}
            </p>
            <div className="flex items-center gap-4">
              <span className="text-white/80 text-xs hover:text-white transition-colors cursor-pointer">
                {t('footer.legal')}
              </span>
              <span className="text-white/70">|</span>
              <span className="text-white/80 text-xs hover:text-white transition-colors cursor-pointer">
                {t('footer.privacy')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
