import { useTranslation } from 'react-i18next';
import FadeInSection from '@/components/base/FadeInSection';

const valuesData = [
  {
    title: 'Solidarité',
    desc: 'Nous croyons au pouvoir de l\'action collective et de l\'entraide pour transformer les communautés.',
    icon: 'ri-heart-3-line',
    color: 'bg-awabel-yellow text-awabel-dark',
    bgHover: 'group-hover:bg-awabel-yellow',
    textHover: 'group-hover:text-awabel-dark',
  },
  {
    title: 'Justice',
    desc: 'Nous défendons l\'équite, les droits fondamentaux et l\'accès équitable aux ressources pour tous.',
    icon: 'ri-scales-3-line',
    color: 'bg-awabel-yellow text-awabel-dark',
    bgHover: 'group-hover:bg-awabel-yellow',
    textHover: 'group-hover:text-awabel-dark',
  },
  {
    title: 'Égalité',
    desc: 'Nous promouvons l\'égalité des chances, en particulier pour les femmes et les filles en RCA.',
    icon: 'ri-equalizer-line',
    color: 'bg-awabel-yellow text-awabel-dark',
    bgHover: 'group-hover:bg-awabel-yellow',
    textHover: 'group-hover:text-awabel-dark',
  },
];

export default function ValuesSection() {
  const { t } = useTranslation('home');

  return (
    <FadeInSection delay={100}>
      <section className="bg-white py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-2.5 h-2.5 rounded-full bg-awabel-yellow"></div>
              <span className="text-awabel-yellow text-sm font-semibold tracking-wide uppercase">
                Nos Fondements
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-awabel-dark font-nunito leading-tight mb-4">
              Nos Valeurs Fondamentales
            </h2>
            <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto">
              Trois piliers qui guident chacune de nos actions sur le terrain en République Centrafricaine.
            </p>
          </div>

          {/* Values grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {valuesData.map((val, index) => (
              <div
                key={val.title}
                className="group relative bg-white rounded-2xl p-8 md:p-10 border border-gray-100 hover:border-awabel-yellow/40 transition-all duration-500 hover:shadow-xl"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-awabel-yellow rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl ${val.color} flex items-center justify-center mb-6 transition-all duration-500 shadow-md`}>
                  <span className="w-8 h-8 flex items-center justify-center">
                    <i className={`${val.icon} text-2xl`}></i>
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-awabel-dark font-nunito mb-3 group-hover:text-awabel-primary transition-colors duration-300">
                  {val.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                  {val.desc}
                </p>

                {/* Bottom accent number */}
                <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-4xl font-bold text-awabel-yellow/20 font-nunito group-hover:text-awabel-yellow/40 transition-colors duration-500">
                    0{index + 1}
                  </span>
                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-400 group-hover:bg-awabel-yellow group-hover:text-awabel-dark transition-all duration-300">
                    <i className="ri-arrow-right-line text-sm"></i>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}