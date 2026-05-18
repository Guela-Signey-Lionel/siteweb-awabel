import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import FadeInSection from '@/components/base/FadeInSection';

export default function HeroSection() {
  const { t } = useTranslation('home');

  return (
    <FadeInSection threshold={0.05}>
      <section className="relative bg-awabel-primary overflow-hidden min-h-[600px] md:min-h-[700px] lg:min-h-[780px]">
        {/* Decorative circles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full border border-white/[0.06]"></div>
          <div className="absolute -top-20 -right-20 w-[350px] h-[350px] rounded-full border border-white/[0.04]"></div>
          <div className="absolute top-1/2 -left-60 w-[400px] h-[400px] rounded-full border border-white/[0.05]"></div>
          <div className="absolute bottom-20 right-1/3 w-[200px] h-[200px] rounded-full bg-awabel-primary/[0.04]"></div>
          <div className="absolute bottom-10 left-1/4 w-[80px] h-[80px] rounded-full border border-white/[0.06]"></div>
          <div className="absolute top-1/3 right-10 w-[60px] h-[60px] rounded-full border border-white/[0.08]"></div>
          <div className="absolute top-1/4 left-20 w-[180px] h-[180px] rounded-full bg-white/[0.02]"></div>
          <div className="absolute bottom-1/3 right-1/2 w-[100px] h-[100px] rounded-full border border-awabel-primary/[0.08]"></div>
          <div className="absolute bottom-1/4 left-1/2 w-[70px] h-[70px] rounded-full border border-white/[0.04]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-14 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[500px]">
            {/* Left - Institutional content */}
            <div className="order-1 lg:order-1">
              <h2 className="max-w-2xl text-lg sm:text-xl md:text-2xl font-extrabold text-white font-nunito leading-tight mb-5">
                Bienvenue sur le Site Officiel de l'ONG AWABEL
              </h2>

              {/* Tag badge */}
              <span className="inline-flex items-center gap-2 px-4 py-1.5 border border-white/30 rounded-full bg-white/[0.08] text-white/90 text-xs font-medium tracking-wide mb-5 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-awabel-yellow animate-pulse"></span>
                {t('hero.tag')} — République Centrafricaine
              </span>

              {/* Main title: AWABEL */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white font-nunito leading-none tracking-tight mb-3">
                AWABEL
              </h1>

              {/* Subtitle: Association Wali ti Beafrica Londo */}
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-awabel-yellow font-nunito leading-tight mb-4">
                {t('hero.title2')}
              </h2>

              {/* Motto: Solidarite - Justice - Egalite */}
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-awabel-yellow/50"></span>
                <p className="text-white/90 text-sm md:text-base font-medium tracking-wide uppercase">
                  {t('hero.motto')}
                </p>
                <span className="h-px w-8 bg-awabel-yellow/50"></span>
              </div>

              {/* Description */}
              <p className="text-white/90 text-sm md:text-base leading-relaxed mb-7 max-w-lg">
                {t('hero.subtitle')}
              </p>

              {/* Key info blocks */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                <div className="flex items-center gap-3 bg-white/[0.10] rounded-lg px-4 py-3 border border-white/20 backdrop-blur-sm">
                  <span className="w-9 h-9 flex items-center justify-center rounded-lg bg-awabel-yellow/20 text-awabel-yellow shrink-0">
                    <i className="ri-calendar-line text-sm"></i>
                  </span>
                  <div>
                    <div className="text-white text-sm font-semibold">2023</div>
                    <div className="text-white/80 text-xs">{t('hero.info_founded')}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/[0.10] rounded-lg px-4 py-3 border border-white/20 backdrop-blur-sm">
                  <span className="w-9 h-9 flex items-center justify-center rounded-lg bg-awabel-yellow/20 text-awabel-yellow shrink-0">
                    <i className="ri-shield-user-line text-sm"></i>
                  </span>
                  <div>
                    <div className="text-white text-sm font-semibold">NIF</div>
                    <div className="text-white/80 text-xs">30001-0694-2007</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/[0.10] rounded-lg px-4 py-3 border border-white/20 backdrop-blur-sm">
                  <span className="w-9 h-9 flex items-center justify-center rounded-lg bg-awabel-yellow/20 text-awabel-yellow shrink-0">
                    <i className="ri-map-pin-line text-sm"></i>
                  </span>
                  <div>
                    <div className="text-white text-sm font-semibold">Bangui</div>
                    <div className="text-white/80 text-xs">6ème arrdt, Quartier MODOUA</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/[0.10] rounded-lg px-4 py-3 border border-white/20 backdrop-blur-sm">
                  <span className="w-9 h-9 flex items-center justify-center rounded-lg bg-awabel-yellow/20 text-awabel-yellow shrink-0">
                    <i className="ri-earth-line text-sm"></i>
                  </span>
                  <div>
                    <div className="text-white text-sm font-semibold">RCA</div>
                    <div className="text-white/80 text-xs">République Centrafricaine</div>
                  </div>
                </div>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Link
                  to="/donate"
                  className="group inline-flex items-center gap-3 bg-awabel-yellow text-awabel-dark px-6 py-3.5 rounded-full font-bold text-sm hover:bg-awabel-yellow/90 transition-all"
                >
                  <span className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-full">
                    <i className="ri-heart-line text-white text-sm"></i>
                  </span>
                  <span className="whitespace-nowrap">{t('hero.cta_donate')}</span>
                  <span className="w-5 h-5 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                    <i className="ri-arrow-right-up-line"></i>
                  </span>
                </Link>
                <Link
                  to="/programs"
                  className="group inline-flex items-center gap-3 bg-white/[0.14] text-white px-6 py-3.5 rounded-full font-semibold text-sm border border-white/30 hover:bg-white/20 transition-all"
                >
                  <span className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full">
                    <i className="ri-heart-pulse-line text-white text-sm"></i>
                  </span>
                  <span className="whitespace-nowrap">{t('hero.cta_programs')}</span>
                  <span className="w-5 h-5 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                    <i className="ri-arrow-right-up-line"></i>
                  </span>
                </Link>
              </div>
            </div>

            {/* Right - Activity image */}
            <div className="order-2 lg:order-2 relative">
              <div className="relative">
                <div className="absolute -inset-4 bg-awabel-primary/10 rounded-3xl blur-2xl"></div>
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <img
                    src="/images/image2.jpeg"
                    alt="Activités AWABEL sur le terrain en République Centrafricaine"
                    className="w-full h-[400px] md:h-[500px] lg:h-[560px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3D]/80 via-[#0B1E3D]/20 to-transparent"></div>

                  {/* Floating badge */}
                  <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 bg-[#0B1E3D]/75 backdrop-blur-md rounded-xl px-4 py-3 border border-white/20">
                    <div className="w-10 h-10 rounded-full bg-awabel-yellow flex items-center justify-center shrink-0">
                      <span className="w-5 h-5 flex items-center justify-center text-awabel-dark">
                        <i className="ri-heart-3-line text-sm"></i>
                      </span>
                    </div>
                    <div>
                      <div className="text-white text-sm font-semibold">500+ Bénéficiaires</div>
                      <div className="text-white/90 text-xs">À travers la République Centrafricaine</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar at bottom */}
        <div className="relative z-10 border-t border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-0">
              {[
                { value: '500+', label: t('stats.beneficiaries') },
                { value: '36', label: t('stats.projects') },
                { value: '18', label: t('stats.villages') },
                { value: '12', label: t('stats.partners') },
              ].map((stat, index) => (
                <div key={stat.label} className={`text-center relative ${index < 3 ? 'lg:after:content-[""] lg:after:absolute lg:after:right-0 lg:after:top-1/2 lg:after:-translate-y-1/2 lg:after:w-px lg:after:h-10 lg:after:bg-white/10' : ''}`}>
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white font-nunito">
                    {stat.value}
                  </div>
                  <div className="text-white/80 text-xs md:text-sm mt-1 font-opensans">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}
