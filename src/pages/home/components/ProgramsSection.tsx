import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { programsData } from '@/mocks/homeData';
import FadeInSection from '@/components/base/FadeInSection';

export default function ProgramsSection() {
  const { t } = useTranslation('home');

  return (
    <FadeInSection delay={100}>
      <section className="bg-awabel-cream py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="mb-12 md:mb-16">
            <span className="text-awabel-primary text-sm font-semibold tracking-wide uppercase mb-3 block">
              {t('programs.section_title')}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-awabel-dark font-nunito leading-tight">
              Cinq (5) domaines pour<br />
              <em className="text-awabel-primary font-serif">transformer les vies</em>
            </h2>
            <p className="text-gray-600 mt-4 max-w-xl text-sm md:text-base">
              {t('programs.section_subtitle')}
            </p>
          </div>

          {/* Programs grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {programsData.map((program, index) => (
              <Link
                key={program.id}
                to={`/programs#${program.id}`}
                className={`group relative overflow-hidden rounded-xl aspect-[3/4] cursor-pointer ${index === 0 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
              >
                <img
                  src={program.image}
                  alt={program.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/10"></div>
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                  <h3 className="text-white text-lg md:text-xl font-bold font-nunito mb-1">
                    {program.title}
                  </h3>
                  <p className="text-white/95 text-xs md:text-sm leading-relaxed opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 transform md:translate-y-2 md:group-hover:translate-y-0">
                    {program.description}
                  </p>
                  <div className="flex items-center gap-1.5 mt-3 text-white/90 text-xs opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <span>Découvrir</span>
                    <span className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-arrow-right-line"></i>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}
