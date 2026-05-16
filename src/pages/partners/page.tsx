import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import FadeInSection from '@/components/base/FadeInSection';

const partnerKeys = ['un', 'ngo', 'embassies', 'government'] as const;

const typeIcons: Record<string, string> = {
  un: 'ri-earth-line',
  ngo: 'ri-heart-3-line',
  embassies: 'ri-government-line',
  government: 'ri-building-line',
};

export default function PartnersPage() {
  const { t } = useTranslation('home');

  return (
    <main>
      {/* Hero Banner */}
      <FadeInSection>
      <section className="relative h-[300px] md:h-[380px] overflow-hidden">
        <img src="src/images/image3.jpeg" alt="Partenaires AWABEL" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-awabel-primary/80 via-awabel-primary/60 to-awabel-primary/80"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
          <span className="inline-block px-4 py-1.5 border border-white/40 rounded-full text-white/90 text-xs font-medium tracking-wide mb-4 backdrop-blur-sm">AWABEL</span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-nunito mb-3">{t('partners_page.title')}</h1>
          <p className="text-white/90 text-sm md:text-base max-w-2xl">{t('partners_page.subtitle')}</p>
        </div>
      </section>
      </FadeInSection>

      {/* Partners Grid */}
      <FadeInSection delay={100}>
      <section className="bg-white py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerKeys.map((key) => (
              <div key={key} className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg hover:border-awabel-primary/20 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-awabel-yellow flex items-center justify-center">
                    <span className="w-6 h-6 flex items-center justify-center text-white">
                      <i className={`${typeIcons[key]} text-lg`}></i>
                    </span>
                  </div>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-500 text-xs font-medium">
                    {t(`partners_page.partners.${key}.type`)}
                  </span>
                </div>
                <h3 className="text-awabel-dark font-bold text-base mb-2 group-hover:text-awabel-primary transition-colors">
                  {t(`partners_page.partners.${key}.name`)}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {t(`partners_page.partners.${key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </FadeInSection>

      {/* CTA Become Partner */}
      <FadeInSection delay={100}>
      <section className="bg-awabel-primary py-16 md:py-20 px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 mx-auto rounded-full bg-awabel-yellow/20 flex items-center justify-center mb-6">
            <span className="w-8 h-8 flex items-center justify-center text-awabel-yellow">
              <i className="ri-hand-heart-line text-2xl"></i>
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white font-nunito mb-4">{t('partners_page.cta')}</h2>
          <p className="text-white/90 text-sm md:text-base max-w-xl mx-auto mb-8">{t('partners_page.cta_desc')}</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-awabel-yellow text-awabel-dark px-8 py-3.5 rounded-full font-bold text-sm hover:bg-awabel-yellow/90 transition-all">
            <span className="whitespace-nowrap">{t('nav.contact')}</span>
            <span className="w-4 h-4 flex items-center justify-center"><i className="ri-arrow-right-up-line"></i></span>
          </Link>
        </div>
      </section>
      </FadeInSection>
    </main>
  );
}
