import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { teamData, statsData } from '@/mocks/homeData';
import FadeInSection from '@/components/base/FadeInSection';

const valueKeys = ['solidarity', 'justice', 'equality', 'transparency', 'innovation', 'perseverance'] as const;
const teamRoleKeys = ['coordo', 'prog', 'ressources', 'rh', 'compta', 'suivi', 'mobilisation', 'assistante', 'logistique', 'juridique'] as const;
const valueIcons = ['ri-heart-3-line', 'ri-scales-3-line', 'ri-equalizer-line', 'ri-eye-line', 'ri-lightbulb-flash-line', 'ri-anchor-line'];

function ValueCard({ valKey, index }: { valKey: string; index: number }) {
  const { t } = useTranslation('home');
  const isMainValue = index < 3;
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-100 hover:border-awabel-yellow/40 transition-all duration-300 group">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${isMainValue ? 'bg-awabel-yellow text-awabel-dark' : 'bg-awabel-light text-awabel-primary'}`}>
        <span className="w-6 h-6 flex items-center justify-center">
          <i className={`${valueIcons[index]} text-lg`}></i>
        </span>
      </div>
      <h3 className="text-awabel-dark font-bold text-base mb-2">{t(`about.values.${valKey}.title`)}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{t(`about.values.${valKey}.desc`)}</p>
    </div>
  );
}

export default function AboutPage() {
  const { t } = useTranslation('home');

  return (
    <main>
      {/* Hero Banner */}
      <FadeInSection>
      <section className="relative h-[350px] md:h-[450px] overflow-hidden">
        <img src="src/images/image1.jpeg" alt="AWABEL communaute" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-awabel-primary/80 via-awabel-primary/60 to-awabel-primary/80"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
          <span className="inline-block px-4 py-1.5 border border-white/40 rounded-full text-white/90 text-xs font-medium tracking-wide mb-4 backdrop-blur-sm">AWABEL</span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-nunito mb-3">{t('about.title')}</h1>
          <p className="text-white/90 text-sm md:text-base max-w-xl">{t('about.subtitle')}</p>
        </div>
      </section>
      </FadeInSection>

      {/* Stats Banner */}
      <FadeInSection delay={100}>
      <section className="bg-awabel-primary py-10 px-4 md:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '500+', key: 'beneficiaries' },
            { value: '6', key: 'projects' },
            { value: '18', key: 'villages' },
            { value: '4+', key: 'partners' },
          ].map((stat) => (
            <div key={stat.key} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white font-nunito">{stat.value}</div>
              <div className="text-white/90 text-sm mt-1">{t(`stats.${stat.key}`)}</div>
            </div>
          ))}
        </div>
      </section>
      </FadeInSection>

      {/* History & Mission */}
      <FadeInSection delay={100}>
      <section className="bg-white py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <div className="mb-10">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-awabel-yellow"></div>
                  <span className="text-awabel-yellow text-sm font-semibold tracking-wide uppercase">{t('about.history_title')}</span>
                </div>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">{t('about.history')}</p>
              </div>
              <div className="mb-10">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-awabel-yellow"></div>
                  <span className="text-awabel-yellow text-sm font-semibold tracking-wide uppercase">{t('about.mission_title')}</span>
                </div>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed bg-awabel-light/50 p-6 rounded-xl border-l-4 border-awabel-primary">{t('about.mission')}</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-awabel-yellow"></div>
                  <span className="text-awabel-yellow text-sm font-semibold tracking-wide uppercase">{t('about.vision_title')}</span>
                </div>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed bg-awabel-light p-6 rounded-xl border-l-4 border-awabel-primary">{t('about.vision')}</p>
              </div>
            </div>
            <div className="relative">
              <img src="src/images/image3.jpeg" alt="Equipe AWABEL au travail" className="w-full h-[500px] md:h-[600px] object-cover rounded-2xl" />
              <div className="absolute -bottom-6 -left-6 bg-awabel-yellow text-awabel-dark p-5 rounded-xl shadow-lg">
                <div className="text-3xl font-bold font-nunito">2022</div>
                <div className="text-awabel-dark/80 text-sm">{t('about.founded_label')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </FadeInSection>

      {/* Values */}
      <FadeInSection delay={100}>
      <section className="bg-awabel-cream py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-2.5 h-2.5 rounded-full bg-awabel-yellow"></div>
              <span className="text-awabel-yellow text-sm font-semibold tracking-wide uppercase">{t('about.values_title')}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-awabel-dark font-nunito">{t('about.values_heading')}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {valueKeys.map((key, idx) => (
              <ValueCard key={key} valKey={key} index={idx} />
            ))}
          </div>
        </div>
      </section>
      </FadeInSection>

      {/* Team */}
      <FadeInSection delay={100}>
      <section className="bg-white py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-2.5 h-2.5 rounded-full bg-awabel-yellow"></div>
              <span className="text-awabel-yellow text-sm font-semibold tracking-wide uppercase">{t('about.team_title')}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-awabel-dark font-nunito mb-3">{t('about.team_title')}</h2>
            <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto">{t('about.team_subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamData.map((member, idx) => (
              <div key={member.name} className="group bg-white rounded-2xl p-6 text-center border border-gray-100 hover:border-awabel-primary/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="relative w-28 h-28 mx-auto mb-5">
                  <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-awabel-light group-hover:border-awabel-primary transition-colors duration-300">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-awabel-primary rounded-full flex items-center justify-center border-2 border-white">
                    <span className="w-4 h-4 flex items-center justify-center text-white"><i className="ri-user-star-fill text-xs"></i></span>
                  </div>
                </div>
                <h3 className="text-awabel-dark font-bold text-base mb-1.5">{member.name}</h3>
                <span className="inline-block bg-awabel-light text-awabel-primary text-xs font-semibold px-3 py-1 rounded-full">
                  {t(`about.team.${teamRoleKeys[idx] ?? 'coordo'}`)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      </FadeInSection>

      {/* CTA */}
      <FadeInSection delay={100}>
      <section className="bg-awabel-primary py-16 md:py-20 px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white font-nunito mb-4">{t('about.cta')}</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-awabel-yellow text-awabel-dark px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-awabel-yellow/90 transition-all">
              <span className="whitespace-nowrap">{t('nav.contact')}</span>
              <span className="w-4 h-4 flex items-center justify-center"><i className="ri-arrow-right-up-line"></i></span>
            </Link>
            <Link to="/programs" className="inline-flex items-center gap-2 border border-white/40 text-white px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-white/10 transition-all">
              <span className="whitespace-nowrap">{t('nav.programs')}</span>
              <span className="w-4 h-4 flex items-center justify-center"><i className="ri-arrow-right-up-line"></i></span>
            </Link>
          </div>
        </div>
      </section>
      </FadeInSection>
    </main>
  );
}
