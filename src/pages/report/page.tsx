import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import FadeInSection from '@/components/base/FadeInSection';

const reportStatsKeys = [
  { number: '50+', key: 'beneficiaries', icon: 'ri-team-line' },
  { number: '6', key: 'projects', icon: 'ri-folder-chart-line' },
  { number: '18', key: 'villages', icon: 'ri-map-pin-2-line' },
  { number: '5000+', key: 'people_2026', icon: 'ri-user-heart-line' },
  { number: '150', key: 'literacy', icon: 'ri-book-open-line' },
  { number: '12', key: 'water', icon: 'ri-drop-line' },
  { number: '60+', key: 'women_health', icon: 'ri-women-line' },
  { number: '1500+', key: 'trees', icon: 'ri-plant-line' },
] as const;

const timelineKeys = ['t1', 't2', 't3', 't4', 't5', 't6'] as const;
const timelineYears = ['2023', '2024', '2025', '2026', '2026', '2026'];

const financeKeys = [
  { key: 'field', value: 72, color: 'bg-awabel-primary' },
  { key: 'health_edu', value: 15, color: 'bg-awabel-yellow' },
  { key: 'admin', value: 8, color: 'bg-teal-500' },
  { key: 'comm', value: 5, color: 'bg-amber-500' },
] as const;

export default function ReportPage() {
  const { t } = useTranslation('home');

  return (
    <main>
      {/* Hero Banner */}
      <FadeInSection>
        <section className="relative h-[300px] md:h-[400px] overflow-hidden">
          <img src="/images/rapport.jpg" alt="Rapport annuel AWABEL" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-awabel-dark/70 via-awabel-primary/50 to-awabel-dark/70"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-awabel-yellow"></span>
              <span className="text-awabel-yellow text-sm font-semibold tracking-wide uppercase">{t('report.hero_tag')}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-nunito mb-3">{t('report.title')}</h1>
            <p className="text-white/80 text-sm md:text-base max-w-2xl">{t('report.subtitle')}</p>
          </div>
        </section>
      </FadeInSection>

      {/* Key Stats */}
      <FadeInSection delay={100}>
        <section className="bg-white py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-awabel-yellow"></div>
                <span className="text-awabel-yellow text-sm font-semibold tracking-wide uppercase">{t('report.stats_tag')}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-awabel-dark font-nunito mb-3">{t('report.stats_title')}</h2>
              <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto">{t('report.stats_subtitle')}</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {reportStatsKeys.map((stat) => (
                <div key={stat.key} className="bg-awabel-cream rounded-xl p-6 border border-gray-100 text-center hover:border-awabel-yellow/40 transition-all">
                  <div className="w-12 h-12 mx-auto rounded-xl bg-awabel-yellow/20 flex items-center justify-center mb-4">
                    <span className="w-6 h-6 flex items-center justify-center text-awabel-yellow">
                      <i className={`${stat.icon} text-lg`}></i>
                    </span>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-awabel-dark font-nunito mb-1">{stat.number}</div>
                  <div className="text-gray-500 text-xs md:text-sm leading-tight">{t(`report.stats_items.${stat.key}`)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Timeline */}
      <FadeInSection delay={100}>
        <section className="bg-awabel-primary py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-awabel-yellow"></div>
                <span className="text-awabel-yellow text-sm font-semibold tracking-wide uppercase">{t('report.timeline_tag')}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white font-nunito mb-3">{t('report.timeline_title')}</h2>
              <p className="text-white/90 text-sm md:text-base max-w-xl mx-auto">{t('report.timeline_subtitle')}</p>
            </div>
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-px"></div>
              <div className="space-y-10 md:space-y-12">
                {timelineKeys.map((key, index) => (
                  <div key={key} className={`relative flex items-start gap-6 md:gap-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="absolute left-4 md:left-1/2 top-0 w-3 h-3 rounded-full bg-awabel-yellow md:-translate-x-1.5 z-10 shadow-lg shadow-awabel-yellow/30"></div>
                    <div className={`pl-10 md:pl-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                      <span className="inline-block px-3 py-1 bg-awabel-yellow text-awabel-dark text-xs font-bold rounded-full mb-2">{timelineYears[index]}</span>
                      <h3 className="text-white font-bold text-lg md:text-xl font-nunito mb-2">{t(`report.timeline_items.${key}.title`)}</h3>
                      <p className="text-white/90 text-sm leading-relaxed">{t(`report.timeline_items.${key}.desc`)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Finance / Transparency */}
      <FadeInSection delay={100}>
        <section className="bg-white py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-awabel-yellow"></div>
                  <span className="text-awabel-yellow text-sm font-semibold tracking-wide uppercase">{t('report.finance_tag')}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-awabel-dark font-nunito mb-4">{t('report.finance_title')}</h2>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">{t('report.finance_desc')}</p>
                <div className="space-y-4">
                  {financeKeys.map((item) => (
                    <div key={item.key}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-gray-700 text-sm font-medium">{t(`report.finance_labels.${item.key}`)}</span>
                        <span className="text-awabel-dark text-sm font-bold">{item.value}%</span>
                      </div>
                      <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                        <div className={`h-full ${item.color} rounded-full transition-all duration-1000`} style={{ width: `${item.value}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-4 bg-awabel-light/50 rounded-xl border-l-4 border-awabel-primary">
                  <p className="text-awabel-primary text-sm leading-relaxed">{t('report.finance_note')}</p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-awabel-primary/5 rounded-3xl blur-2xl"></div>
                <img src="/images/image6.jpeg" alt="Transparence financière AWABEL" className="relative rounded-2xl w-full h-[400px] md:h-[480px] object-cover border border-gray-100 shadow-lg" />
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* CTA */}
      <FadeInSection delay={100}>
        <section className="relative overflow-hidden py-16 md:py-20 px-4 md:px-6">
          <img src="/images/image3.jpeg" alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-awabel-primary/80"></div>
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-awabel-yellow/20 flex items-center justify-center mb-6">
              <span className="w-8 h-8 flex items-center justify-center text-awabel-yellow">
                <i className="ri-file-download-line text-2xl"></i>
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white font-nunito mb-4">{t('report.cta_title')}</h2>
            <p className="text-white/80 text-sm md:text-base max-w-xl mx-auto mb-8">{t('report.cta_desc')}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-awabel-yellow text-awabel-dark px-8 py-3.5 rounded-full font-bold text-sm hover:bg-awabel-yellow/90 transition-all">
                <span className="whitespace-nowrap">{t('report.cta_button')}</span>
                <span className="w-4 h-4 flex items-center justify-center"><i className="ri-arrow-right-up-line"></i></span>
              </Link>
              <Link to="/donate" className="inline-flex items-center gap-2 border border-white/40 text-white px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-white/10 transition-all">
                <span className="whitespace-nowrap">{t('nav.donate')}</span>
                <span className="w-4 h-4 flex items-center justify-center"><i className="ri-arrow-right-up-line"></i></span>
              </Link>
            </div>
          </div>
        </section>
      </FadeInSection>
    </main>
  );
}
