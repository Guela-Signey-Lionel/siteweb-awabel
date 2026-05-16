import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import FadeInSection from '@/components/base/FadeInSection';

const VIDEO_THUMBNAIL = '/images/image6.jpeg';

export default function VideoSection() {
  const { t } = useTranslation('home');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FadeInSection delay={100}>
      <section className="bg-awabel-cream py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-10 md:mb-14">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-2.5 h-2.5 rounded-full bg-awabel-yellow"></div>
              <span className="text-awabel-yellow text-sm font-semibold tracking-wide uppercase">
                {t('video.tag')}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-awabel-dark font-nunito leading-tight mb-3">
              {t('video.title')}
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto">
              {t('video.subtitle')}
            </p>
          </div>

          {/* Video thumbnail / player */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 group cursor-pointer" onClick={() => setIsOpen(true)}>
            <img
              src={VIDEO_THUMBNAIL}
              alt="Vidéo de présentation AWABEL"
              className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-awabel-primary/55 group-hover:bg-awabel-primary/65 transition-colors"></div>

            {/* Play button */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-awabel-yellow flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-awabel-yellow/30">
                <span className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-awabel-dark ml-1">
                  <i className="ri-play-fill text-3xl md:text-4xl"></i>
                </span>
              </div>
              <p className="text-white text-sm md:text-base font-semibold mt-4 drop-shadow-lg">
                {t('video.play_button')}
              </p>
            </div>

            {/* Duration badge */}
            <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-white text-xs font-medium">
              <span className="flex items-center gap-1.5">
                <i className="ri-time-line text-xs"></i>
                {t('video.duration')}
              </span>
            </div>
          </div>
        </div>

        {/* Video Modal */}
        {isOpen && (
          <div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setIsOpen(false)}
          >
            <div
              className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Fermer la video"
              >
                <i className="ri-close-line text-lg"></i>
              </button>

              {/* Video iframe placeholder */}
              <div className="aspect-video bg-awabel-primary flex flex-col items-center justify-center text-center p-8">
                <div className="w-16 h-16 rounded-full bg-awabel-yellow/20 flex items-center justify-center mb-4">
                  <span className="w-8 h-8 flex items-center justify-center text-awabel-yellow">
                    <i className="ri-film-line text-2xl"></i>
                  </span>
                </div>
                <h3 className="text-white text-lg font-bold font-nunito mb-2">
                  {t('video.modal_title')}
                </h3>
                <p className="text-white/90 text-sm max-w-md">
                  {t('video.modal_desc')}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 bg-awabel-yellow text-awabel-dark px-5 py-2.5 rounded-full text-sm font-semibold">
                  <i className="ri-youtube-line"></i>
                  <span>{t('video.modal_cta')}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </FadeInSection>
  );
}
