import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const NEWSLETTER_SUBMIT_URL = 'https://readdy.ai/api/form/d81g2dtimqud1mmjgf20';

export default function Newsletter() {
  const { t } = useTranslation('home');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const validateEmail = (val: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('idle');
    setErrorMsg('');

    if (!email.trim() || !validateEmail(email)) {
      setErrorMsg(t('newsletter.invalid_email'));
      setStatus('error');
      return;
    }

    try {
      const params = new URLSearchParams();
      params.append('email', email.trim());

      const response = await fetch(NEWSLETTER_SUBMIT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
        setErrorMsg(t('newsletter.error'));
      }
    } catch {
      setStatus('error');
      setErrorMsg(t('newsletter.error'));
    }
  };

  return (
    <section className="bg-awabel-cream py-12 md:py-16 px-4 md:px-6 border-t border-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <div className="w-14 h-14 mx-auto rounded-full bg-awabel-yellow/20 flex items-center justify-center mb-5">
          <span className="w-7 h-7 flex items-center justify-center text-awabel-yellow">
            <i className="ri-mail-send-line text-xl"></i>
          </span>
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-awabel-dark font-nunito mb-2">
          {t('newsletter.title')}
        </h3>
        <p className="text-gray-500 text-sm md:text-base max-w-lg mx-auto mb-6">
          {t('newsletter.subtitle')}
        </p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          data-readdy-form
          className="flex flex-col sm:flex-row items-center gap-3 max-w-lg mx-auto"
        >
          <div className="relative w-full">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <i className="ri-mail-line"></i>
            </span>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === 'error') {
                  setStatus('idle');
                  setErrorMsg('');
                }
              }}
              placeholder={t('newsletter.placeholder')}
              className={`w-full pl-11 pr-4 py-3.5 rounded-full border text-sm focus:outline-none focus:ring-2 focus:ring-awabel-primary/20 focus:border-awabel-primary transition-colors bg-white ${
                status === 'error' ? 'border-red-300 bg-red-50' : 'border-gray-200'
              }`}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-awabel-yellow text-awabel-dark px-6 py-3.5 rounded-full font-bold text-sm hover:bg-awabel-yellow/90 transition-colors whitespace-nowrap shrink-0"
          >
            <span>{t('newsletter.button')}</span>
            <span className="w-4 h-4 flex items-center justify-center">
              <i className="ri-arrow-right-line"></i>
            </span>
          </button>
        </form>

        {status === 'success' && (
          <div className="mt-4 p-3 bg-awabel-light border border-awabel-primary/20 rounded-xl inline-flex items-center gap-2">
            <span className="w-5 h-5 flex items-center justify-center text-awabel-yellow">
              <i className="ri-checkbox-circle-line text-lg"></i>
            </span>
            <p className="text-awabel-primary text-sm">{t('newsletter.success')}</p>
          </div>
        )}

        {status === 'error' && errorMsg && (
          <p className="mt-3 text-red-500 text-xs">{errorMsg}</p>
        )}

        <p className="text-gray-400 text-xs mt-4">
          {t('newsletter.privacy')}
        </p>
      </div>
    </section>
  );
}