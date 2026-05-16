import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { newsData } from '@/mocks/homeData';
import FadeInSection from '@/components/base/FadeInSection';

export default function NewsSection() {
  const { t } = useTranslation('home');

  return (
    <FadeInSection delay={100}>
      <section className="bg-white py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-awabel-yellow"></div>
                <span className="text-awabel-yellow text-sm font-semibold tracking-wide uppercase">
                  {t('news.section_title')}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-awabel-dark font-nunito leading-tight">
                Nos actions sur le terrain
              </h2>
            </div>
            <Link
              to="/news"
              className="group inline-flex items-center gap-2 text-awabel-primary font-semibold text-sm hover:text-awabel-dark transition-colors whitespace-nowrap"
            >
              <span>{t('news.read_more')}</span>
              <span className="w-5 h-5 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <i className="ri-arrow-right-line"></i>
              </span>
            </Link>
          </div>

          {/* News grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsData.map((news) => {
              const galleryPreview = news.gallery?.slice(0, 3) ?? [];

              return (
                <article
                  key={news.id}
                  className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-gray-200 transition-all duration-300"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 bg-awabel-yellow text-awabel-dark text-xs font-semibold rounded-full">
                      {news.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-awabel-dark font-bold text-base mb-2 leading-snug group-hover:text-awabel-primary transition-colors line-clamp-2">
                      {news.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
                      {news.excerpt}
                    </p>
                    {galleryPreview.length > 0 && (
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        {galleryPreview.map((image, index) => (
                          <div key={image} className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
                            <img
                              src={image}
                              alt={`${news.title} - image ${index + 2}`}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-awabel-yellow/20 flex items-center justify-center">
                          <span className="w-4 h-4 flex items-center justify-center text-awabel-yellow">
                            <i className="ri-user-fill text-xs"></i>
                          </span>
                        </div>
                        <span className="text-gray-500 text-xs">{news.author}</span>
                      </div>
                      <span className="text-gray-400 text-xs">{news.date}</span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}
