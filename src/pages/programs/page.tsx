import { useTranslation } from 'react-i18next';
import { programsData, statsData } from '@/mocks/homeData';
import FadeInSection from '@/components/base/FadeInSection';

const programIcons: Record<string, string> = {
  education: 'ri-book-open-line',
  eau: 'ri-drop-line',
  alimentation: 'ri-seedling-line',
  environnement: 'ri-plant-line',
  sante: 'ri-heart-pulse-line',
};

const impactKeys = [
  { number: '150+', key: 'literacy', icon: 'ri-book-open-line' },
  { number: '12', key: 'water_points', icon: 'ri-drop-line' },
  { number: '40%', key: 'agriculture', icon: 'ri-seedling-line' },
  { number: '1500+', key: 'trees', icon: 'ri-plant-line' },
  { number: '60+', key: 'prenatal', icon: 'ri-heart-pulse-line' },
  { number: '18', key: 'villages', icon: 'ri-community-line' },
] as const;

export default function ProgramsPage() {
  const { t } = useTranslation('home');

  return (
    <main>
      {/* Hero Banner */}
      <FadeInSection>
      <section className="relative h-[300px] md:h-[380px] overflow-hidden">
        <img src="src/images/programme.png" alt="Programmes AWABEL" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-awabel-primary/80 via-awabel-primary/60 to-awabel-primary/80"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
          <span className="inline-block px-4 py-1.5 border border-white/40 rounded-full text-white/90 text-xs font-medium tracking-wide mb-4 backdrop-blur-sm">AWABEL</span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-nunito mb-3">{t('programs_page.title')}</h1>
          <p className="text-white/90 text-sm md:text-base max-w-2xl">{t('programs_page.subtitle')}</p>
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

      {/* Programs Detail */}
      <FadeInSection delay={100}>
      <section className="bg-white py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16 md:space-y-24">
            {programsData.map((program, index) => (
              <div key={program.id} id={program.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center`}>
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden group">
                    <img src={program.image} alt={t(`programs.items.${program.id}.title`)} className="w-full h-[350px] md:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute top-4 left-4 px-4 py-2 rounded-full text-awabel-dark text-xs font-semibold bg-awabel-yellow">
                      {t(`programs.items.${program.id}.title`)}
                    </div>
                  </div>
                </div>
                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-awabel-yellow flex items-center justify-center">
                      <span className="w-6 h-6 flex items-center justify-center text-white">
                        <i className={`${programIcons[program.id]} text-lg`}></i>
                      </span>
                    </div>
                    <div className="w-12 h-px bg-gray-200"></div>
                    <span className="text-awabel-primary text-sm font-semibold">{t('programs.program_label')} {index + 1}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-awabel-dark font-nunito mb-4">{t(`programs.items.${program.id}.title`)}</h2>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">{t(`programs.items.${program.id}.fullDescription`)}</p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-awabel-light rounded-full text-awabel-primary text-xs font-medium">{t('programs.tag_beneficiaries')}</span>
                    <span className="px-4 py-2 bg-awabel-light rounded-full text-awabel-primary text-xs font-medium">{t('programs.tag_rural')}</span>
                    <span className="px-4 py-2 bg-awabel-light rounded-full text-awabel-primary text-xs font-medium">{t('programs.tag_monitoring')}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </FadeInSection>

      {/* Impact Section */}
      <FadeInSection delay={100}>
      <section className="bg-awabel-cream py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-2.5 h-2.5 rounded-full bg-awabel-yellow"></div>
              <span className="text-awabel-yellow text-sm font-semibold tracking-wide uppercase">{t('programs_page.impact_title')}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-awabel-dark font-nunito">{t('programs.results_title')}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {impactKeys.map((item) => (
              <div key={item.key} className="bg-white rounded-xl p-6 border border-gray-100 text-center hover:border-awabel-primary/20 transition-all">
                <div className="w-14 h-14 mx-auto rounded-full bg-awabel-yellow/20 flex items-center justify-center mb-4">
                  <span className="w-7 h-7 flex items-center justify-center text-awabel-yellow">
                    <i className={`${item.icon} text-xl`}></i>
                  </span>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-awabel-primary font-nunito mb-1">{item.number}</div>
                <div className="text-gray-500 text-sm">{t(`programs.impact.${item.key}`)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </FadeInSection>
    </main>
  );
}
