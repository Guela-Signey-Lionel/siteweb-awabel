import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import FadeInSection from '@/components/base/FadeInSection';

export default function CTASection() {
  const { t } = useTranslation('home');

  return (
    <FadeInSection>
      <section className="relative overflow-hidden">
        <div className="relative h-[400px] md:h-[500px]">
          <img
            src="src/images/image3.jpeg"
            alt="Communauté solidaire en RCA"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-awabel-primary/80"></div>

          <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 md:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white font-nunito tracking-wide uppercase mb-4">
              {t('cta.title')}
            </h2>
            <p className="text-white/95 text-sm md:text-base max-w-xl leading-relaxed mb-8">
              {t('cta.subtitle')}
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-awabel-yellow text-awabel-dark px-8 py-4 rounded-full font-bold text-sm md:text-base hover:bg-awabel-yellow/90 transition-all shadow-lg"
            >
              <span className="w-9 h-9 flex items-center justify-center bg-white/20 rounded-full">
                <i className="ri-heart-line text-white"></i>
              </span>
              <span className="whitespace-nowrap">{t('cta.button')}</span>
              <span className="w-5 h-5 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                <i className="ri-arrow-right-up-line"></i>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}
