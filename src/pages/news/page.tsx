import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { newsData } from '@/mocks/homeData';
import FadeInSection from '@/components/base/FadeInSection';

const ITEMS_PER_PAGE = 6;

// Internal category keys (stable, language-independent)
const categoryKeys = [
  'Tout', 'Evaluation', 'Education', 'Partenariat', 'Action',
  'Environnement', 'Agriculture', 'EHA', 'Femmes', 'Rapport', 'Sante',
] as const;

// Map from data category value → translation key
const categoryToKey: Record<string, string> = {
  'Tout': 'Tout',
  'Évaluation': 'Evaluation',
  'Éducation': 'Education',
  'Education': 'Education',
  'Partenariat': 'Partenariat',
  'Action': 'Action',
  'Environnement': 'Environnement',
  'Agriculture': 'Agriculture',
  'Eau, Hygiène et Assainissement': 'EHA',
  'EHA': 'EHA',
  'Femmes': 'Femmes',
  'Rapport': 'Rapport',
  'Santé': 'Sante',
  'Sante': 'Sante',
};

export default function NewsPage() {
  const { t } = useTranslation('home');
  const [activeKey, setActiveKey] = useState('Tout');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredNews = useMemo(() => {
    if (activeKey === 'Tout') return newsData;
    return newsData.filter((item) => (categoryToKey[item.category] ?? item.category) === activeKey);
  }, [activeKey]);

  const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);
  const paginatedNews = filteredNews.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleCategoryChange = (key: string) => {
    setActiveKey(key);
    setCurrentPage(1);
  };

  return (
    <main>
      {/* Hero Banner */}
      <FadeInSection>
      <section className="relative h-[280px] md:h-[350px] overflow-hidden">
        <img src="/images/image4.jpeg" alt="Actualités AWABEL" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-awabel-primary/80 via-awabel-primary/60 to-awabel-primary/80"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-nunito mb-3">{t('news_page.title')}</h1>
          <p className="text-white/90 text-sm md:text-base max-w-xl">{t('news_page.subtitle')}</p>
        </div>
      </section>
      </FadeInSection>

      {/* Filter & Content */}
      <FadeInSection delay={100}>
      <section className="bg-white py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categoryKeys.map((key) => (
              <button
                key={key}
                onClick={() => handleCategoryChange(key)}
                className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all whitespace-nowrap ${
                  activeKey === key
                    ? 'bg-awabel-yellow text-awabel-dark shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-awabel-light hover:text-awabel-primary'
                }`}
              >
                {t(`news.categories.${key}`)}
              </button>
            ))}
          </div>

          {/* News Grid */}
          {paginatedNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedNews.map((news) => {
                const galleryPreview = news.gallery?.slice(0, 3) ?? [];
                const catKey = categoryToKey[news.category] ?? 'Action';
                return (
                  <article key={news.id} className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-gray-200 transition-all duration-300 group">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img src={news.image} alt={t(`news.items.${news.id}.title`)} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                      <span className="absolute top-3 left-3 px-3 py-1 bg-awabel-yellow text-awabel-dark text-xs font-semibold rounded-full">
                        {t(`news.categories.${catKey}`)}
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="text-awabel-dark font-bold text-base mb-2 leading-snug group-hover:text-awabel-primary transition-colors line-clamp-2">
                        {t(`news.items.${news.id}.title`)}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
                        {t(`news.items.${news.id}.excerpt`)}
                      </p>
                      {galleryPreview.length > 0 && (
                        <div className="grid grid-cols-3 gap-2 mb-4">
                          {galleryPreview.map((image, index) => (
                            <div key={image} className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
                              <img src={image} alt={`${news.id} - image ${index + 2}`} className="w-full h-full object-cover" loading="lazy" />
                            </div>
                          ))}
                        </div>
                      )}
                      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-awabel-yellow/20 flex items-center justify-center">
                            <span className="w-4 h-4 flex items-center justify-center text-awabel-yellow"><i className="ri-user-fill text-xs"></i></span>
                          </div>
                          <span className="text-gray-500 text-xs">{t(`news.items.${news.id}.author`)}</span>
                        </div>
                        <span className="text-gray-400 text-xs">{t(`news.dates.${news.id}`)}</span>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 mx-auto rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <span className="w-8 h-8 flex items-center justify-center text-gray-400"><i className="ri-article-line text-xl"></i></span>
              </div>
              <p className="text-gray-500 text-sm">{t('news_page.no_results')}</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-12">
              <button onClick={() => setCurrentPage((p) => Math.max(1, p - 1))} disabled={currentPage === 1}
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:border-awabel-primary hover:text-awabel-primary transition-colors disabled:opacity-40 disabled:cursor-not-allowed">
                <i className="ri-arrow-left-line"></i>
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button key={page} onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 flex items-center justify-center rounded-lg text-sm font-medium transition-colors ${currentPage === page ? 'bg-awabel-primary text-white' : 'border border-gray-200 text-gray-500 hover:border-awabel-primary hover:text-awabel-primary'}`}>
                  {page}
                </button>
              ))}
              <button onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages}
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:border-awabel-primary hover:text-awabel-primary transition-colors disabled:opacity-40 disabled:cursor-not-allowed">
                <i className="ri-arrow-right-line"></i>
              </button>
            </div>
          )}
          {totalPages > 0 && (
            <p className="text-center text-gray-400 text-xs mt-4">
              {t('news_page.page')} {currentPage} {t('news_page.of')} {totalPages}
            </p>
          )}
        </div>
      </section>
      </FadeInSection>
    </main>
  );
}
