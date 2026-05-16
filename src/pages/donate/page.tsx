import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { contactInfo } from '@/mocks/homeData';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const donationAmounts = [
  { amount: 10000, key: 'a1' },
  { amount: 15000, key: 'a2' },
  { amount: 25000, key: 'a3' },
  { amount: 50000, key: 'a4' },
  { amount: 100000, key: 'a5' },
  { amount: 250000, key: 'a6' },
];

const impactItems = [
  { icon: 'ri-book-open-line', number: '50+', key: 'children' },
  { icon: 'ri-drop-line', number: '12', key: 'water' },
  { icon: 'ri-restaurant-line', number: '40%', key: 'agriculture' },
  { icon: 'ri-women-line', number: '100+', key: 'women' },
  { icon: 'ri-hospital-line', number: '60+', key: 'prenatal' },
  { icon: 'ri-plant-line', number: '1500+', key: 'trees' },
] as const;

const volSkills = [
  { icon: 'ri-book-open-line', titleKey: 'vol_skill_1', descKey: 'vol_skill_1_desc' },
  { icon: 'ri-hospital-line', titleKey: 'vol_skill_2', descKey: 'vol_skill_2_desc' },
  { icon: 'ri-seedling-line', titleKey: 'vol_skill_3', descKey: 'vol_skill_3_desc' },
  { icon: 'ri-computer-line', titleKey: 'vol_skill_4', descKey: 'vol_skill_4_desc' },
] as const;

function FadeInSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isVisible } = useScrollReveal(0.1);
  return (
    <div ref={ref} className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity 0.7s ease-out ${delay}ms, transform 0.7s ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function DonatePage() {
  const { t } = useTranslation('home');
  const [selectedAmount, setSelectedAmount] = useState<number | null>(25000);
  const [customAmount, setCustomAmount] = useState('');
  const [isCustomActive, setIsCustomActive] = useState(false);
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donorPhone, setDonorPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isRecurring, setIsRecurring] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSelectAmount = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
    setIsCustomActive(false);
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val === '') { setCustomAmount(''); setSelectedAmount(null); return; }
    const num = parseInt(val, 10);
    if (!Number.isNaN(num) && num >= 0) { setCustomAmount(val); setSelectedAmount(null); setIsCustomActive(true); }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    alert(t('donate.form_success'));
  };

  const finalAmount = selectedAmount !== null ? selectedAmount : Number(customAmount) || 0;

  return (
    <main>
      {/* Hero Banner */}
      <FadeInSection>
        <section className="relative bg-awabel-primary overflow-hidden py-16 md:py-24 px-4 md:px-6">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full border border-white/[0.05]"></div>
            <div className="absolute bottom-10 left-10 w-[150px] h-[150px] rounded-full border border-white/[0.06]"></div>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 border border-white/30 rounded-full bg-white/[0.08] text-white/90 text-xs font-medium tracking-wide mb-6">
              <span className="w-2 h-2 rounded-full bg-awabel-yellow animate-pulse"></span>
              {t('donate.hero_tag')}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-nunito leading-tight mb-4">{t('donate.title')}</h1>
            <p className="text-white/90 text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-8">{t('donate.subtitle')}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={`tel:${contactInfo.phone1}`} className="inline-flex items-center gap-2 bg-white/[0.08] text-white px-5 py-2.5 rounded-full text-sm border border-white/20 hover:bg-white/15 transition-all">
                <span className="w-5 h-5 flex items-center justify-center"><i className="ri-phone-line text-sm"></i></span>
                <span className="whitespace-nowrap">{contactInfo.phone1}</span>
              </a>
              <a href={`mailto:${contactInfo.email}`} className="inline-flex items-center gap-2 bg-white/[0.08] text-white px-5 py-2.5 rounded-full text-sm border border-white/20 hover:bg-white/15 transition-all">
                <span className="w-5 h-5 flex items-center justify-center"><i className="ri-mail-line text-sm"></i></span>
                <span className="whitespace-nowrap">{contactInfo.email}</span>
              </a>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Donation Form Section */}
      <FadeInSection delay={100}>
        <section className="bg-white py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
              {/* Left - Form */}
              <div className="lg:col-span-3">
                <div className="bg-awabel-cream rounded-2xl p-6 md:p-8 border border-gray-100">
                  <h2 className="text-xl md:text-2xl font-bold text-awabel-dark font-nunito mb-2">{t('donate.form_title')}</h2>
                  <p className="text-gray-500 text-sm mb-8">{t('donate.form_subtitle')}</p>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Amount selection */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">{t('donate.amount_label')}</label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {donationAmounts.map((item) => (
                          <button type="button" key={item.amount} onClick={() => handleSelectAmount(item.amount)}
                            className={`p-3 rounded-xl border-2 text-left transition-all ${selectedAmount === item.amount && !isCustomActive ? 'border-awabel-primary bg-awabel-light' : 'border-gray-200 hover:border-awabel-primary/40'}`}>
                            <div className="font-bold text-sm text-awabel-dark">{t(`donate.amounts.${item.key}.label`)}</div>
                            <div className="text-gray-500 text-xs mt-0.5 line-clamp-2">{t(`donate.amounts.${item.key}.impact`)}</div>
                          </button>
                        ))}
                      </div>
                      <div className="mt-3">
                        <input type="number" value={customAmount} onChange={handleCustomAmountChange} placeholder={t('donate.custom_placeholder')} min="0"
                          className={`w-full px-4 py-3 rounded-xl border-2 text-sm focus:outline-none transition-colors ${isCustomActive ? 'border-awabel-primary bg-awabel-light' : 'border-gray-200 focus:border-awabel-primary/40'}`} />
                      </div>
                    </div>

                    {/* Recurring */}
                    <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200">
                      <div>
                        <div className="text-sm font-medium text-awabel-dark">{t('donate.recurring_label')}</div>
                        <div className="text-xs text-gray-500">{t('donate.recurring_desc')}</div>
                      </div>
                      <button type="button" onClick={() => setIsRecurring(!isRecurring)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${isRecurring ? 'bg-awabel-primary' : 'bg-gray-200'}`}>
                        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isRecurring ? 'translate-x-6' : 'translate-x-1'}`}></span>
                      </button>
                    </div>

                    {/* Donor info */}
                    <div className="space-y-4">
                      <input type="text" value={donorName} onChange={(e) => setDonorName(e.target.value)} placeholder={t('donate.form_name')}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-awabel-primary transition-colors" />
                      <input type="email" value={donorEmail} onChange={(e) => setDonorEmail(e.target.value)} placeholder={t('donate.form_email')} required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-awabel-primary transition-colors" />
                      <input type="tel" value={donorPhone} onChange={(e) => setDonorPhone(e.target.value)} placeholder={t('donate.form_phone')}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-awabel-primary transition-colors" />
                      <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={3} placeholder={t('donate.form_message')}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-awabel-primary transition-colors resize-none" />
                    </div>

                    {/* Summary */}
                    <div className="bg-awabel-primary/5 rounded-xl p-4 border border-awabel-primary/10">
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-gray-600">{t('donate.summary_amount')}</span>
                        <span className="font-bold text-awabel-dark">{finalAmount.toLocaleString()} FCFA</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">{t('donate.summary_frequency')}</span>
                        <span className="font-bold text-awabel-dark">{isRecurring ? t('donate.monthly') : t('donate.onetime')}</span>
                      </div>
                    </div>

                    <button type="submit" disabled={isSubmitting || finalAmount === 0}
                      className="w-full inline-flex items-center justify-center gap-2 bg-awabel-yellow text-awabel-dark px-6 py-4 rounded-full font-bold text-sm hover:bg-awabel-yellow/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                      {isSubmitting ? (
                        <><span className="w-4 h-4 border-2 border-awabel-dark/30 border-t-awabel-dark rounded-full animate-spin"></span><span>{t('donate.submitting')}</span></>
                      ) : (
                        <><span className="w-5 h-5 flex items-center justify-center"><i className="ri-heart-3-line"></i></span><span className="whitespace-nowrap">{t('donate.submit_button')}</span></>
                      )}
                    </button>
                    <p className="text-gray-400 text-xs text-center">{t('donate.secure_note')}</p>
                  </form>
                </div>
              </div>

              {/* Right - Info cards */}
              <div className="lg:col-span-2 space-y-6">
                {/* Bank transfer */}
                <div className="bg-awabel-primary rounded-2xl p-6 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/10"><i className="ri-bank-line text-lg text-awabel-yellow"></i></span>
                    <h3 className="font-bold text-base">{t('donate.bank_title')}</h3>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between"><span className="text-white/90">{t('donate.bank_name')}</span><span className="font-medium">Ecobank RCA</span></div>
                    <div className="flex justify-between"><span className="text-white/90">{t('donate.bank_account')}</span><span className="font-medium">xxx xxx xxx xxx</span></div>
                    <div className="flex justify-between"><span className="text-white/90">IBAN</span><span className="font-medium">CFxx xxxx xxxx xxxx</span></div>
                    <div className="flex justify-between"><span className="text-white/90">{t('donate.bank_beneficiary')}</span><span className="font-medium">AWABEL</span></div>
                  </div>
                </div>
                {/* Mobile money */}
                <div className="bg-awabel-cream rounded-2xl p-6 border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-awabel-light"><i className="ri-smartphone-line text-lg text-awabel-yellow"></i></span>
                    <h3 className="font-bold text-base text-awabel-dark">{t('donate.mobile_title')}</h3>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between"><span className="text-gray-500">Orange Money</span><span className="font-medium text-awabel-dark">{contactInfo.phone1}</span></div>
                    <div className="flex items-center justify-between"><span className="text-gray-500">Moov Money</span><span className="font-medium text-awabel-dark">{contactInfo.phone2}</span></div>
                  </div>
                </div>
                {/* Tax info */}
                <div className="bg-awabel-light rounded-2xl p-6 border border-awabel-primary/20">
                  <div className="flex items-start gap-3">
                    <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-awabel-primary/10 shrink-0"><i className="ri-shield-check-line text-lg text-awabel-yellow"></i></span>
                    <div>
                      <h3 className="font-bold text-base text-awabel-dark mb-1">{t('donate.tax_title')}</h3>
                      <p className="text-awabel-primary text-sm leading-relaxed">{t('donate.tax_desc')}</p>
                    </div>
                  </div>
                </div>
                {/* Large donations */}
                <div className="bg-white rounded-2xl p-6 border border-gray-100">
                  <div className="flex items-start gap-3">
                    <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-awabel-light shrink-0"><i className="ri-hand-heart-line text-lg text-awabel-yellow"></i></span>
                    <div>
                      <h3 className="font-bold text-base text-awabel-dark mb-1">{t('donate.large_donation_title')}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-3">{t('donate.large_donation_desc')}</p>
                      <Link to="/contact" className="inline-flex items-center gap-1.5 text-awabel-primary text-sm font-semibold hover:text-awabel-dark transition-colors">
                        <span className="whitespace-nowrap">{t('donate.contact_us')}</span>
                        <span className="w-4 h-4 flex items-center justify-center"><i className="ri-arrow-right-line text-xs"></i></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Impact Section */}
      <FadeInSection delay={100}>
        <section className="bg-awabel-primary py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-awabel-yellow"></div>
                <span className="text-awabel-yellow text-sm font-semibold tracking-wide uppercase">{t('donate.impact_tag')}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white font-nunito mb-3">{t('donate.impact_title')}</h2>
              <p className="text-white/90 text-sm max-w-xl mx-auto">{t('donate.impact_subtitle')}</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {impactItems.map((item) => (
                <div key={item.key} className="bg-white/[0.10] rounded-xl p-6 border border-white/20 text-center hover:border-white/30 transition-colors">
                  <div className="w-14 h-14 mx-auto rounded-xl flex items-center justify-center mb-4 bg-awabel-yellow/20">
                    <span className="w-7 h-7 flex items-center justify-center text-awabel-yellow"><i className={`${item.icon} text-lg`}></i></span>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white font-nunito mb-1">{item.number}</div>
                  <div className="text-white/90 text-xs md:text-sm">{t(`donate.impact_items.${item.key}`)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Volunteer Section */}
      <FadeInSection delay={100}>
        <section className="bg-awabel-cream py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-awabel-yellow"></div>
                  <span className="text-awabel-yellow text-sm font-semibold tracking-wide uppercase">{t('donate.volunteer_tag')}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-awabel-dark font-nunito mb-4">{t('donate.volunteer_title')}</h2>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">{t('donate.volunteer_desc')}</p>
                <div className="space-y-4 mb-8">
                  {volSkills.map((skill) => (
                    <div key={skill.titleKey} className="flex items-start gap-4 bg-white rounded-xl p-4 border border-gray-100">
                      <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-awabel-light text-awabel-primary shrink-0"><i className={`${skill.icon} text-lg`}></i></span>
                      <div>
                        <h4 className="font-semibold text-sm text-awabel-dark mb-0.5">{t(`donate.${skill.titleKey}`)}</h4>
                        <p className="text-gray-500 text-xs">{t(`donate.${skill.descKey}`)}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="inline-flex items-center gap-3 bg-awabel-yellow text-awabel-dark px-6 py-3.5 rounded-full font-bold text-sm hover:bg-awabel-yellow/90 transition-all">
                  <span className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-full"><i className="ri-user-add-line text-white text-sm"></i></span>
                  <span className="whitespace-nowrap">{t('donate.volunteer_cta')}</span>
                  <span className="w-5 h-5 flex items-center justify-center"><i className="ri-arrow-right-up-line"></i></span>
                </Link>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-awabel-primary/5 rounded-3xl blur-2xl"></div>
                <img src="/images/image1.jpeg" alt="Bénévoles AWABEL" className="relative rounded-2xl w-full h-[400px] md:h-[500px] object-cover border border-gray-100 shadow-lg" />
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>
    </main>
  );
}
