import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import FadeInSection from '@/components/base/FadeInSection';

const testimonialsData = [
  {
    id: 1,
    type: 'photo',
    thumbnail: '/images/image7.jpeg',
    name: 'Marie Claire K.',
    role: 'Bénéficiaire - Programme Humanitaire',
    location: 'Village de Besson',
    quote: "Grace à l'ONG AWABEL, j'ai reçu quelques produits de premières nécessité dans ma famille, j'ai également bénéficié des conseils sociaux.",
    duration: '',
  },
  {
    id: 2,
    type: 'photo',
    thumbnail: '/images/env.png',
    name: 'Jean-Baptiste N.',
    role: 'Bénéficiaire - Sécurite Alimentaire',
    location: 'Village de Besson',
    quote: "AWABEL nous a appris de nouvelles techniques agricoles. Ma récolte a doublé cette année. Je peux maintenant nourrir ma famille et vendre le surplus au marché.",
    duration: '',
  },
  {
    id: 3,
    type: 'photo',
    thumbnail: '/images/vaccination.jpeg',
    name: 'Esther M.',
    role: 'Partenaire - Santé Communautaire',
    location: 'Centre de santé MODOUA',
    quote: "La collaboration avec AWABEL a permis de vacciner plus de 500 enfants dans notre zone. Leur engagement communautaire fait toute la différence.",
    duration: '',
  },
  /*{
    id: 4,
    type: 'photo',
    thumbnail: 'https://readdy.ai/api/search-image?query=african%20young%20girl%20student%20holding%20books%20and%20smiling%20proudly%20in%20Central%20African%20Republic%2C%20schoolgirl%20in%20uniform%2C%20bright%20hopeful%20expression%2C%20education%20empowerment%20portrait%2C%20outdoor%20school%20setting%20with%20warm%20sunlight%2C%20documentary%20photography%20style&width=400&height=300&seq=awabel_testi_p2&orientation=landscape',
    name: 'Esther M.',
    role: 'Beneficiaire - Soutien Scolaire',
    location: '6eme arrondissement, Bangui',
    quote: "Le soutien scolaire AWABEL m'aide a reussir mes examens. Je reve de devenir medecin pour soigner les gens de mon village.",
    duration: '',
  },
  {
    id: 5,
    type: 'video',
    thumbnail: 'https://readdy.ai/api/search-image?query=african%20women%20cooperative%20group%20leader%20speaking%20in%20Central%20African%20Republic%20village%20community%20meeting%2C%20group%20of%20women%20listening%20attentively%2C%20women%20empowerment%20scene%2C%20warm%20natural%20light%2C%20documentary%20photography%20style%2C%20earth%20tones%20background&width=400&height=300&seq=awabel_testi_v3&orientation=landscape',
    name: 'Florence P.',
    role: 'Presidente - Cooperative Feminine',
    location: 'Cooperative Uvira',
    quote: "AWABEL nous a donne les outils pour gerer notre cooperative agricole. Nous sommes maintenant 80 femmes autonomes et fières.",
    duration: '3:12',
  },
  {
    id: 6,
    type: 'photo',
    thumbnail: 'https://readdy.ai/api/search-image?query=african%20community%20elder%20man%20with%20traditional%20clothing%20in%20Central%20African%20Republic%20village%2C%20wise%20respectful%20portrait%2C%20warm%20natural%20lighting%2C%20community%20leader%20testimonial%2C%20outdoor%20village%20setting%20with%20trees%2C%20documentary%20photography%2C%20earth%20tones&width=400&height=300&seq=awabel_testi_p3&orientation=landscape',
    name: 'Chef Pierre B.',
    role: 'Chef de village - Besson',
    location: 'Village de Besson',
    quote: "Le nouveau puits finance par AWABEL a changé la vie de tout notre village. Nous avons enfin de l'eau potable propre toute l'année.",
    duration: '',
  },*/
];

export default function TestimonialsSection() {
  const { t } = useTranslation('home');
  const [activeFilter, setActiveFilter] = useState<'all' | 'video' | 'photo'>('all');

  const filtered = activeFilter === 'all'
    ? testimonialsData
    : testimonialsData.filter((item) => item.type === activeFilter);

  return (
    <FadeInSection delay={100}>
      <section className="bg-white py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-awabel-yellow"></div>
                <span className="text-awabel-yellow text-sm font-semibold tracking-wide uppercase">
                  {t('testimonials.section_title')}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-awabel-dark font-nunito leading-tight">
                {t('testimonials.heading')}
              </h2>
            </div>

            {/* Filters */}
            <div className="flex items-center gap-2 bg-awabel-cream rounded-full p-1">
              {(['all', 'video', 'photo'] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all whitespace-nowrap ${
                    activeFilter === f
                      ? 'bg-awabel-yellow text-awabel-dark'
                      : 'text-gray-600 hover:text-awabel-primary'
                  }`}
                >
                  {f === 'all' ? t('testimonials.all') : f === 'video' ? t('testimonials.videos') : t('testimonials.photos')}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-gray-200 transition-all duration-300"
              >
                {/* Thumbnail */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={item.thumbnail}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"></div>

                  {/* Play button for videos */}
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-awabel-yellow flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer shadow-lg">
                        <span className="w-6 h-6 flex items-center justify-center text-awabel-dark">
                          <i className="ri-play-fill text-lg"></i>
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Type badge */}
                  <span className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full bg-awabel-yellow text-awabel-dark">
                    {item.type === 'video' ? (
                      <span className="flex items-center gap-1">
                        <i className="ri-video-line text-xs"></i>
                        {item.duration}
                      </span>
                    ) : (
                      <span className="flex items-center gap-1">
                        <i className="ri-image-line text-xs"></i>
                        Photo
                      </span>
                    )}
                  </span>

                  {/* Location */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 text-white text-xs drop-shadow-md">
                    <span className="w-3.5 h-3.5 flex items-center justify-center">
                      <i className="ri-map-pin-line text-xs"></i>
                    </span>
                    {item.location}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-awabel-dark font-bold text-base mb-0.5">{item.name}</h3>
                  <p className="text-awabel-primary text-xs font-medium mb-3">{item.role}</p>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                    "{item.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}
