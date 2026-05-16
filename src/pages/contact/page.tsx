import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { contactInfo } from '@/mocks/homeData';
import FadeInSection from '@/components/base/FadeInSection';

const FORM_SUBMIT_URL = 'https://readdy.ai/api/form/d7u7hjirpqtlggq0d900';

const ADHESION_FORM_URL = 'https://readdy.ai/api/form/d7u7hjirpqtlggq0d900';

function AdhesionForm() {
  const { t } = useTranslation('home');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (data: Record<string, string>) => {
    const e: Record<string, string> = {};
    if (!data.full_name || data.full_name.trim().length < 2) e.full_name = t('contact_page.required_field');
    if (!data.birth_date) e.birth_date = t('contact_page.required_field');
    if (!data.nationality || data.nationality.trim().length < 2) e.nationality = t('contact_page.required_field');
    if (!data.adh_email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.adh_email)) e.adh_email = t('contact_page.invalid_email_field');
    if (!data.adh_phone || data.adh_phone.trim().length < 6) e.adh_phone = t('contact_page.invalid_phone');
    if (!data.member_type) e.member_type = t('contact_page.select_category');
    if (!data.motivation || data.motivation.trim().length < 10) e.motivation = t('contact_page.min_chars');
    if (!data.accept_conditions) e.accept_conditions = t('contact_page.accept_required');
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    fd.forEach((v, k) => { data[k] = v as string; });

    if (!validate(data)) return;
    setStatus('idle');

    try {
      const params = new URLSearchParams(data);
      const res = await fetch(ADHESION_FORM_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      });
      setStatus(res.ok ? 'success' : 'error');
      if (res.ok) (e.target as HTMLFormElement).reset();
    } catch {
      setStatus('error');
    }
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-lg border ${errors[field] ? 'border-red-300 bg-red-50' : 'border-gray-200'} bg-white text-sm focus:outline-none focus:ring-2 focus:ring-awabel-primary/20 focus:border-awabel-primary transition-colors`;

  const memberTypes = [
    { value: 'actif', labelKey: 'member_actif_label', icon: 'ri-user-star-line', descKey: 'member_actif_card_desc' },
    { value: 'bienfaiteur', labelKey: 'member_bien_label', icon: 'ri-heart-3-line', descKey: 'member_bien_card_desc' },
    { value: 'partenaire', labelKey: 'member_part_label', icon: 'ri-global-line', descKey: 'member_part_card_desc' },
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status === 'success' && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-xl flex items-start gap-3">
          <i className="ri-checkbox-circle-line text-green-600 text-lg mt-0.5"></i>
          <p className="text-green-700 text-sm font-medium">{t('contact_page.adhesion_success')}</p>
        </div>
      )}
      {status === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
          <i className="ri-error-warning-line text-red-600 text-lg mt-0.5"></i>
          <p className="text-red-700 text-sm">{t('contact_page.form_error')}</p>
        </div>
      )}

      {/* Informations personnelles */}
      <div>
        <h4 className="text-sm font-bold text-awabel-primary uppercase tracking-wide mb-4 flex items-center gap-2">
          <i className="ri-user-line"></i> {t('contact_page.section_personal')}
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('contact_page.field_full_name')} <span className="text-red-500">*</span></label>
            <input type="text" name="full_name" className={inputClass('full_name')} placeholder={t('contact_page.field_name_ph')} />
            {errors.full_name && <p className="text-red-500 text-xs mt-1">{errors.full_name}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('contact_page.field_birth_date')} <span className="text-red-500">*</span></label>
            <input type="date" name="birth_date" className={inputClass('birth_date')} />
            {errors.birth_date && <p className="text-red-500 text-xs mt-1">{errors.birth_date}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('contact_page.field_gender')}</label>
            <select name="gender" className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-awabel-primary/20 focus:border-awabel-primary transition-colors">
              <option value="">{t('contact_page.field_gender_select')}</option>
              <option value="homme">{t('contact_page.field_gender_m')}</option>
              <option value="femme">{t('contact_page.field_gender_f')}</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('contact_page.field_nationality')} <span className="text-red-500">*</span></label>
            <input type="text" name="nationality" className={inputClass('nationality')} placeholder={t('contact_page.field_nationality_ph')} />
            {errors.nationality && <p className="text-red-500 text-xs mt-1">{errors.nationality}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('contact_page.field_profession')}</label>
            <input type="text" name="profession" className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-awabel-primary/20 focus:border-awabel-primary transition-colors" placeholder={t('contact_page.field_profession_ph')} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('contact_page.field_address')}</label>
            <input type="text" name="address" className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-awabel-primary/20 focus:border-awabel-primary transition-colors" placeholder={t('contact_page.field_address_ph')} />
          </div>
        </div>
      </div>

      {/* Coordonnées */}
      <div>
        <h4 className="text-sm font-bold text-awabel-primary uppercase tracking-wide mb-4 flex items-center gap-2">
          <i className="ri-contacts-line"></i> {t('contact_page.section_contact')}
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('contact_page.email')} <span className="text-red-500">*</span></label>
            <input type="email" name="adh_email" className={inputClass('adh_email')} placeholder={t('contact_page.field_email_ph')} />
            {errors.adh_email && <p className="text-red-500 text-xs mt-1">{errors.adh_email}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('contact_page.field_phone')} <span className="text-red-500">*</span></label>
            <input type="tel" name="adh_phone" className={inputClass('adh_phone')} placeholder={t('contact_page.field_phone_ph')} />
            {errors.adh_phone && <p className="text-red-500 text-xs mt-1">{errors.adh_phone}</p>}
          </div>
        </div>
      </div>

      {/* Catégorie de membre */}
      <div>
        <h4 className="text-sm font-bold text-awabel-primary uppercase tracking-wide mb-4 flex items-center gap-2">
          <i className="ri-group-line"></i> {t('contact_page.section_category')}
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {memberTypes.map(({ value, labelKey, icon, descKey }) => (
            <label key={value} className="cursor-pointer">
              <input type="radio" name="member_type" value={value} className="sr-only peer" />
              <div className="h-full p-4 rounded-xl border-2 border-gray-200 peer-checked:border-awabel-primary peer-checked:bg-awabel-light transition-all text-center">
                <i className={`${icon} text-2xl text-awabel-primary mb-2 block`}></i>
                <p className="text-sm font-semibold text-awabel-dark">{t(`contact_page.${labelKey}`)}</p>
                <p className="text-xs text-gray-500 mt-1">{t(`contact_page.${descKey}`)}</p>
              </div>
            </label>
          ))}
        </div>
        {errors.member_type && <p className="text-red-500 text-xs mt-2">{errors.member_type}</p>}
      </div>

      {/* Motivation */}
      <div>
        <h4 className="text-sm font-bold text-awabel-primary uppercase tracking-wide mb-4 flex items-center gap-2">
          <i className="ri-message-2-line"></i> {t('contact_page.section_motivation')}
        </h4>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('contact_page.motivation_label')} <span className="text-red-500">*</span></label>
          <textarea name="motivation" rows={4} maxLength={600}
            className={`w-full px-4 py-3 rounded-lg border ${errors.motivation ? 'border-red-300 bg-red-50' : 'border-gray-200'} bg-white text-sm focus:outline-none focus:ring-2 focus:ring-awabel-primary/20 focus:border-awabel-primary transition-colors resize-none`}
            placeholder={t('contact_page.motivation_ph')}
          />
          {errors.motivation && <p className="text-red-500 text-xs mt-1">{errors.motivation}</p>}
        </div>
      </div>

      {/* Conditions */}
      <div className="bg-awabel-light rounded-xl p-5 border border-awabel-primary/20">
        <label className="flex items-start gap-3 cursor-pointer">
          <input type="checkbox" name="accept_conditions" value="oui" className="mt-1 w-4 h-4 accent-awabel-primary flex-shrink-0" />
          <span className="text-sm text-gray-700 leading-relaxed">{t('contact_page.accept_label')}</span>
        </label>
        {errors.accept_conditions && <p className="text-red-500 text-xs mt-2">{errors.accept_conditions}</p>}
      </div>

      <button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-awabel-primary text-white px-6 py-4 rounded-full font-bold text-sm hover:bg-awabel-dark transition-colors shadow-md">
        <i className="ri-send-plane-line"></i>
        <span>{t('contact_page.submit_adhesion')}</span>
      </button>
    </form>
  );
}

export default function ContactPage() {
  const { t } = useTranslation('home');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const formRef = useRef<HTMLFormElement>(null);

  const validate = (formData: FormData) => {
    const newErrors: Record<string, string> = {};
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    if (!name || name.trim().length < 2) {
      newErrors.name = t('contact_page.required');
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = t('contact_page.invalid_email');
    }
    if (!subject || subject.trim().length < 2) {
      newErrors.subject = t('contact_page.required');
    }
    if (!message || message.trim().length < 10) {
      newErrors.message = t('contact_page.required');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    if (!validate(formData)) return;

    setStatus('idle');

    try {
      const params = new URLSearchParams();
      formData.forEach((value, key) => {
        params.append(key, value as string);
      });

      const response = await fetch(FORM_SUBMIT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <main>
      {/* Hero Banner */}
      <FadeInSection>
      <section className="relative h-[280px] md:h-[350px] overflow-hidden">
        <img
          src="src/images/image4.jpeg"
          alt="Contact AWABEL"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-awabel-primary/80 via-awabel-primary/60 to-awabel-primary/80"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-nunito mb-3">
            {t('contact_page.title')}
          </h1>
          <p className="text-white/90 text-sm md:text-base max-w-xl">
            {t('contact_page.subtitle')}
          </p>
        </div>
      </section>
      </FadeInSection>

      {/* Contact Section */}
      <FadeInSection delay={100}>
      <section className="bg-white py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left - Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-xl font-bold text-awabel-dark font-nunito mb-6">{t('contact_page.title')}</h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                  {t('contact_page.subtitle')}
                </p>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-awabel-yellow/20 flex items-center justify-center shrink-0">
                    <span className="w-6 h-6 flex items-center justify-center text-awabel-yellow">
                      <i className="ri-map-pin-line text-lg"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-awabel-dark font-semibold text-sm mb-1">{t('contact_page.address')}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{contactInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-awabel-yellow/20 flex items-center justify-center shrink-0">
                    <span className="w-6 h-6 flex items-center justify-center text-awabel-yellow">
                      <i className="ri-phone-line text-lg"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-awabel-dark font-semibold text-sm mb-1">{t('contact_page.phone')}</h4>
                    <a href={`tel:${contactInfo.phone1}`} className="text-gray-500 text-sm hover:text-awabel-primary transition-colors block">{contactInfo.phone1}</a>
                    <a href={`tel:${contactInfo.phone2}`} className="text-gray-500 text-sm hover:text-awabel-primary transition-colors block">{contactInfo.phone2}</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-awabel-yellow/20 flex items-center justify-center shrink-0">
                    <span className="w-6 h-6 flex items-center justify-center text-awabel-yellow">
                      <i className="ri-mail-line text-lg"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-awabel-dark font-semibold text-sm mb-1">{t('contact_page.email')}</h4>
                    <a href={`mailto:${contactInfo.email}`} className="text-gray-500 text-sm hover:text-awabel-primary transition-colors">{contactInfo.email}</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-awabel-yellow/20 flex items-center justify-center shrink-0">
                    <span className="w-6 h-6 flex items-center justify-center text-awabel-yellow">
                      <i className="ri-whatsapp-line text-lg"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-awabel-dark font-semibold text-sm mb-1">WhatsApp</h4>
                    <a href="https://wa.me/23672125663" target="_blank" rel="noopener noreferrer" className="text-gray-500 text-sm hover:text-awabel-primary transition-colors block">{contactInfo.whatsapp}</a>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div>
                <h4 className="text-awabel-dark font-semibold text-sm mb-4">Réseaux sociaux</h4>
                <div className="flex items-center gap-3">
                  <a href="https://www.facebook.com/share/1Tfo58ytWu/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:text-[#1877F2] hover:border-[#1877F2] transition-colors" aria-label="Facebook">
                    <i className="ri-facebook-fill text-sm"></i>
                  </a>
                  <a href="https://wa.me/23672125663" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:text-[#25D366] hover:border-[#25D366] transition-colors" aria-label="WhatsApp">
                    <i className="ri-whatsapp-line text-sm"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="lg:col-span-3">
              <div className="bg-awabel-cream rounded-2xl p-6 md:p-8 border border-gray-100">
                <h3 className="text-lg font-bold text-awabel-dark font-nunito mb-6">Envoyez-nous un message</h3>

                {status === 'success' && (
                  <div className="mb-6 p-4 bg-awabel-light border border-awabel-primary/20 rounded-xl flex items-start gap-3">
                    <span className="w-5 h-5 flex items-center justify-center text-awabel-yellow mt-0.5">
                      <i className="ri-checkbox-circle-line text-lg"></i>
                    </span>
                    <p className="text-awabel-primary text-sm">{t('contact_page.form_success')}</p>
                  </div>
                )}
                {status === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
                    <span className="w-5 h-5 flex items-center justify-center text-red-600 mt-0.5">
                      <i className="ri-error-warning-line text-lg"></i>
                    </span>
                    <p className="text-red-700 text-sm">{t('contact_page.form_error')}</p>
                  </div>
                )}

                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  data-readdy-form
                  className="space-y-5"
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">{t('contact_page.form_name')}</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-300 bg-red-50' : 'border-gray-200'} bg-white text-sm focus:outline-none focus:ring-2 focus:ring-awabel-primary/20 focus:border-awabel-primary transition-colors`}
                      placeholder="Votre nom complet"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">{t('contact_page.form_email')}</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-300 bg-red-50' : 'border-gray-200'} bg-white text-sm focus:outline-none focus:ring-2 focus:ring-awabel-primary/20 focus:border-awabel-primary transition-colors`}
                      placeholder="votre@email.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1.5">{t('contact_page.form_subject')}</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className={`w-full px-4 py-3 rounded-lg border ${errors.subject ? 'border-red-300 bg-red-50' : 'border-gray-200'} bg-white text-sm focus:outline-none focus:ring-2 focus:ring-awabel-primary/20 focus:border-awabel-primary transition-colors`}
                      placeholder={t('contact_page.form_subject')}
                    />
                    {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">{t('contact_page.form_message')}</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      maxLength={500}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-300 bg-red-50' : 'border-gray-200'} bg-white text-sm focus:outline-none focus:ring-2 focus:ring-awabel-primary/20 focus:border-awabel-primary transition-colors resize-none`}
                      placeholder={t('contact_page.form_message')}
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                    <p className="text-gray-400 text-xs mt-1 text-right">Max 500</p>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-awabel-yellow text-awabel-dark px-6 py-3.5 rounded-full font-bold text-sm hover:bg-awabel-yellow/90 transition-colors"
                  >
                    <span>{t('contact_page.form_submit')}</span>
                    <span className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-send-plane-line"></i>
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      </FadeInSection>

      {/* Adhésion Section */}
      <FadeInSection delay={100}>
      <section className="bg-white py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block bg-awabel-light text-awabel-primary text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              {t('contact_page.adhesion_tag')}
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-awabel-dark font-nunito mb-4">
              {t('contact_page.adhesion_title')}
            </h2>
            <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              {t('contact_page.adhesion_subtitle')}
            </p>
          </div>

          {/* Categories de membres */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {/* Membres Actifs */}
            <div className="bg-awabel-light rounded-2xl p-6 border-2 border-awabel-primary/20 hover:border-awabel-primary transition-colors">
              <div className="w-12 h-12 rounded-xl bg-awabel-primary flex items-center justify-center mb-4">
                <i className="ri-user-star-line text-white text-xl"></i>
              </div>
              <h3 className="text-base font-bold text-awabel-dark font-nunito mb-3">{t('contact_page.member_actif_label')}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{t('contact_page.member_actif_desc')}</p>
            </div>
            {/* Membres Bienfaiteurs */}
            <div className="bg-awabel-yellow/10 rounded-2xl p-6 border-2 border-awabel-yellow/30 hover:border-awabel-yellow transition-colors">
              <div className="w-12 h-12 rounded-xl bg-awabel-yellow flex items-center justify-center mb-4">
                <i className="ri-heart-3-line text-white text-xl"></i>
              </div>
              <h3 className="text-base font-bold text-awabel-dark font-nunito mb-3">{t('contact_page.member_bien_label')}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{t('contact_page.member_bien_desc')}</p>
            </div>
            {/* Partenaires Stratégiques */}
            <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200 hover:border-awabel-dark transition-colors">
              <div className="w-12 h-12 rounded-xl bg-awabel-dark flex items-center justify-center mb-4">
                <i className="ri-global-line text-white text-xl"></i>
              </div>
              <h3 className="text-base font-bold text-awabel-dark font-nunito mb-3">{t('contact_page.member_part_label')}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{t('contact_page.member_part_desc')}</p>
            </div>
          </div>

          {/* Formulaire d'adhésion */}
          <div className="bg-awabel-cream rounded-2xl p-6 md:p-10 border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold text-awabel-dark font-nunito mb-2">{t('contact_page.adhesion_form_title')}</h3>
            <p className="text-gray-500 text-sm mb-8">{t('contact_page.adhesion_form_subtitle')}</p>

            <AdhesionForm />
          </div>
        </div>
      </section>
      </FadeInSection>

      {/* Map Section */}
      <FadeInSection delay={100}>
      <section className="bg-awabel-cream py-16 md:py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-awabel-dark font-nunito mb-2">
              {t('contact_page.map_title')}
            </h2>
            <p className="text-gray-500 text-sm">{t('marquee.address')}</p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255297.3134437453!2d18.39766725!3d4.37858895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10bf42a4b8506c4d%3A0x6e82a0d6c0e5a9d8!2sBangui%2C%20Central%20African%20Republic!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Carte AWABEL Bangui RCA"
              className="w-full"
            />
          </div>
        </div>
      </section>
      </FadeInSection>
    </main>
  );
}
