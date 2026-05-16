export type NewsItem = {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  author: string;
  gallery?: string[];
};

export const navLinks = [
  { label: 'Accueil', href: '/', key: 'home' },
  { label: 'À Propos', href: '/about', key: 'about' },
  { label: 'Programmes', href: '/programs', key: 'programs' },
  { label: 'Actualités', href: '/news', key: 'news' },
  { label: 'Partenaires', href: '/partners', key: 'partners' },
  { label: 'Rapport annuel', href: '/report', key: 'report' },
  { label: 'Contact', href: '/contact', key: 'contact' },
];

export const marqueeItems = [
  { icon: 'ri-phone-line', text: '+236 74 71 99 99' },
  { icon: 'ri-whatsapp-line', text: '+236 72 12 56 63 (WhatsApp)' },
  { icon: 'ri-mail-line', text: 'awabel26@gmail.com' },
  { icon: 'ri-map-pin-line', text: 'Bangui - 6e arrondissement, quartier MODOUA, RCA', key: 'address' },
  { icon: 'ri-heart-line', text: 'Solidarité - Justice - Égalité', key: 'motto' },
  { icon: 'ri-earth-line', text: 'République Centrafricaine', key: 'country' },
  { icon: 'ri-shield-user-line', text: 'NIF 30001-0694-2007' },
  { icon: 'ri-phone-line', text: '+236 74 71 99 99' },
  { icon: 'ri-whatsapp-line', text: '+236 72 12 56 63 (WhatsApp)' },
  { icon: 'ri-mail-line', text: 'awabel26@gmail.com' },
  { icon: 'ri-map-pin-line', text: 'Bangui - 6e arrondissement, quartier MODOUA, RCA', key: 'address' },
  { icon: 'ri-heart-line', text: 'Solidarité - Justice - Égalité', key: 'motto' },
  { icon: 'ri-earth-line', text: 'République Centrafricaine', key: 'country' },
  { icon: 'ri-shield-user-line', text: 'NIF 30001-0694-2007' },
];

export const statsData = [
  { value: 500, label: 'Bénéficiaires', suffix: '+' },
  { value: 6, label: 'Projets actifs', suffix: '' },
  { value: 18, label: 'Villages/Quartiers couverts', suffix: '' },
  { value: 4, label: 'Partenaires', suffix: '+' },
];

export const programsData = [
  {
    id: 'education',
    title: 'Éducation & Alphabétisation',
    description: "Lutte contre l'analphabétisme et promotion de l'accès à l'éducation pour tous en RCA.",
    fullDescription: "Ce programme vise à éradiquer l'analphabétisme en RCA à travers la mise en place de centres d'alphabétisation pour adultes, le soutien scolaire pour les enfants en difficulté et la formation professionnelle. En 2026, 3 centres sont actifs avec 450 apprenants réguliers.",
    image: '/images/education.jpg',
    bgColor: 'bg-awabel-primary/10',
  },
  {
    id: 'eau',
    title: 'Eau, Hygiène & Assainissement',
    description: "Accès à l'eau potable et amélioration des conditions d'hygiène dans les communautés rurales.",
    fullDescription: "L'accès à l'eau potable reste un défi majeur en RCA. AWABEL construit des puits, des forages et des bornes-fontaines dans les villages. Le programme inclut aussi des sessions de sensibilisation à l'hygiène et la distribution de kits d'hygiène. 12 points d'eau ont été créés, bénéficiant à 3 200 personnes.",
    image: '/images/eha.jpeg',
    bgColor: 'bg-emerald-50',
  },
  {
    id: 'alimentation',
    title: 'Sécurité Alimentaire',
    description: "Lutte contre la famine par l'agriculture durable et la formation polytechnique.",
    fullDescription: "Face à l'insécurité alimentaire chronique, AWABEL forme les paysans aux techniques agricoles modernes, distribue des semences améliorées et soutient les coopératives agricoles féminines. Le programme a permis d'augmenter les rendements de 40% dans les zones d'intervention.",
    image: '/images/alimentaire.jpeg',
    bgColor: 'bg-orange-50',
  },
  {
    id: 'environnement',
    title: 'Environnement & Femmes',
    description: "Protection de l'environnement et autonomisation des femmes pour un avenir durable.",
    fullDescription: "La protection de l'environnement est au cœur de notre mission. AWABEL organise des campagnes de reboisement, forme les femmes à la gestion durable des ressources naturelles et promeut les énergies renouvelables. 15 000 arbres ont été plantés en 2025.",
    image: '/images/environnement.jpeg',
    bgColor: 'bg-teal-50',
  },
  {
    id: 'sante',
    title: 'Santé Communautaire',
    description: 'Santé maternelle et infantile, soins communautaires dans les zones reculées.',
    fullDescription: "La santé maternelle et infantile est une priorité absolue. AWABEL appuie les centres de santé communautaires, forme des relais communautaires et organise des campagnes de vaccination et de dépistage. Plus de 2 500 femmes ont bénéficié de soins prénatals en 2025.",
    image: '/images/sante.jpg',
    bgColor: 'bg-red-50',
  },
];

export const newsData: NewsItem[] = [
  {
    id: 10,
    title: "Mission d'évaluation participative auprès de la communauté Aka de Ndjigba",
    excerpt: "AWABEL a réalisé une mission d'écoute et d'évaluation participative dans la communauté Aka du village Ndjigba, localité de Yombo, Sous-Préfecture de Bimbo, Préfecture de l'Ombella M'poko.",
    category: 'Évaluation',
    date: 'Mai 2026',
    image: '/images/image2.jpeg',
    author: 'AWABEL Terrain',
  },
  {
    id: 1,
    title: "Soutenir et promouvoir l'éducation",
    excerpt: "AWABEL accompagne les communautés dans la création des écoles de proximité pour éradiquer la déscolarisation des enfants.",
    category: 'Éducation',
    date: '15 Avril 2026',
    image: '/images/education.jpg',
    author: 'AWABEL Communication',
  },
  {
    id: 2,
    title: "Partenariat avec les institutions nationales et internationales",
    excerpt: "AWABEL travaille en partenariat avec les Agences des Nations Unies, les ONG Nationaux et Internationaux ainsi que les Ambassades et les Institutions de l’Etat Centrafricaine.",
    category: 'Partenariat',
    date: '3 Mars 2026',
    image: '/images/partenariat.jpg',
    author: 'AWABEL Presse',
  },
  {
    id: 3,
    title: "Distribution de kits d'hygiène dans 5 villages",
    excerpt: 'Plus de 500 familles ont reçu des kits et quelques produits de première nécessité.',
    category: 'Action',
    date: '20 Février 2026',
    image: '/images/image6.jpeg',
    author: 'AWABEL Terrain',
  },
  {
    id: 4,
    title: 'Campagne de reforestation : plus de 2 000 arbres plantés en un jour',
    excerpt: 'Plus de 200 volontaires ont participé à la campagne nationale de reboisement dans certaines régions de la RCA.',
    category: 'Environnement',
    date: '10 Janvier 2026',
    image: '/images/environnement.jpeg',
    author: 'AWABEL Environnement',
  },
  {
    id: 5,
    title: 'Formation agricole pour 80 femmes de la coopérative Uvira',
    excerpt: 'Session intensive de 3 jours sur les techniques agricoles durables et la gestion des coopératives agricoles féminines.',
    category: 'Agriculture',
    date: '5 Décembre 2025',
    image: '/images/agriculture.jpeg',
    author: 'AWABEL Agriculture',
  },
  {
    id: 6,
    title: 'Eau, Hygiène et Assainissement',
    excerpt: "AWABEL soutient l'accès à l'eau potable, garantit l'hygiène et l'assainissement en milieu communautaire.",
    category: 'Eau, Hygiène et Assainissement',
    date: '18 Novembre 2025',
    image: '/images/eha.jpeg',
    author: 'AWABEL Eau',
  },
  {
    id: 7,
    title: 'Journée mondiale de la femme : célébration avec les bénéficiaires',
    excerpt: "AWABEL a organisé une grande journée de célébration pour honorer les femmes issues de différentes communautés.",
    category: 'Femmes',
    date: '8 Mars 2026',
    image: '/images/image4.jpeg',
    author: 'AWABEL Genre',
  },
  {
    id: 8,
    title: 'Rapport annuel 2025 : plus de 800 personnes touchées par nos actions',
    excerpt: "Le rapport annuel révèle des résultats exceptionnels sur les 5 axes stratégiques de l'ONG nationale.",
    category: 'Rapport',
    date: '1 Février 2026',
    image: '/images/rapport.jpg',
    author: 'AWABEL Direction',
  },
  {
    id: 9,
    title: 'Appui aux Centres de Santé Communautaires dans le cadre de la stratégie nationale de santé',
    excerpt: "L'ONG AWABEL appui les Centres de Santé Communautaires dans le cadre de la stratégie nationale de santé pour la qualité des soins communautaires dispensés dans le centre soutenu par l'ONG.",
    category: 'Santé',
    date: '25 Mars 2026',
    image: '/images/sante.jpg',
    author: 'AWABEL Santé',
  },
];

export const newsCategories = ['Tout', 'Évaluation', 'Éducation', 'Partenariat', 'Action', 'Environnement', 'Agriculture', 'Eau, Hygiène et Assainissement', 'Femmes', 'Rapport', 'Santé', 'Eau, Hygiène et Assainissement'];  

export const teamData = [
  { name: 'MOUNDJOUTENDE Jolie Judas', role: 'Coordonnatrice Nationale', image: '/images/Coordo.png' },
  { name: 'DALI-KPANA NAYO Larissa', role: 'Responsable Programmes et Projets', image: '/images/logo.jpeg' },
  { name: 'CAMEGO Née NGOY P.', role: 'Responsable Mobilisation des Ressources', image: '/images/logo.jpeg' },
  { name: 'NGARO Gisèle', role: 'Responsable Ressources Humaines', image: '/images/logo.jpeg' },
  { name: 'GRENGONDA Lisa Sandrine', role: 'Comptable', image: '/images/logo.jpeg' },
  { name: 'POUNOUBADA Doris', role: 'Responsable Suivi-évaluation', image: '/images/logo.jpeg' },
  { name: 'NINGADAMA Milca', role: 'Chargée de Mobilisation Communautaire', image: '/images/CMC.png' },
  { name: 'MBAMBA Flora', role: 'Assistante Mobilisatrice', image: '/images/AM.jpeg' },
  { name: 'ZOZOKOPA Jordan Stéphane', role: 'Responsable Logistique', image: '/images/logo.jpeg' },
  { name: 'KAZIMO Cédric', role: 'Conseiller Juridique', image: '/images/logo.jpeg' },
];

export const partnersData = [
  { name: 'Les Nations Unies', type: 'Agences internationales', logo: '', description: 'Partenariat stratégique pour la mise en œuvre des Objectifs de Développement Durable en RCA.' },
  { name: 'Les ONGs', type: 'Nationales et Internationales', logo: '', description: 'Collaboration  et la réponse aux urgences humanitaires.' },
  { name: 'Les Ambassades', type: 'Diplomatique', logo: '', description: 'Soutien diplomatique et financier pour les projets de développement en RCA.' },
  { name: 'Gouvernement Centrafricain', type: 'Institutions de l\'État', logo: '', description: "Cadre de coopération avec les ministères pour l'alignement sur les priorités nationales." },
];

export const contactInfo = {
  address: 'Bangui - 6e arrondissement, quartier MODOUA, République Centrafricaine',
  phone1: '+236 74 71 99 99',
  phone2: '+236 70 05 05 87',
  email: 'awabel26@gmail.com',
  whatsapp: '+236 72 12 56 63',
};

export const aboutContent = {
  history: "Fondée en 2022, AWABEL est née de la volonté de citoyens centrafricains engagés à transformer leur pays. Partant du constat que la pauvreté, l'analphabétisme et l'exclusion des femmes freinent le développement de la RCA, nos fondateurs ont décidé d'agir. Depuis, l'ONG nationale n'a cessé de croître, passant de 3 bénévoles à une équipe de 9 salariés permanents et des centaines de volontaires.",
  mission: "Contribuer à la réduction de la pauvreté, de l'analphabétisme et de la famine en République Centrafricaine à travers des programmes intégrés de développement durable, tout en promouvant les droits des femmes et la protection de l'environnement.",
  vision: "Une République Centrafricaine où chaque citoyen, et particulièrement chaque femme et chaque enfant, vit dans la dignité, l'autonomie et la sécurité, grâce à un accès équitable à l'éducation, à la santé, à l'eau et à la sécurité alimentaire.",
  values: [
    { title: 'Solidarité', desc: 'Nous croyons au pouvoir de l\'action collective et de l\'entraide.' },
    { title: 'Justice', desc: 'Nous défendons l\'équité et les droits fondamentaux de tous.' },
    { title: 'Égalité', desc: 'Nous promouvons l\'égalité des chances, en particulier pour les femmes.' },
    { title: 'Transparence', desc: 'Nous assurons une gouvernance ouverte et un usage responsable des ressources.' },
    { title: 'Innovation', desc: 'Nous recherchons constamment des solutions créatives aux défis locaux.' },
    { title: 'Persévérance', desc: 'Nous restons engagés malgré les obstacles, avec détermination et courage.' },
  ],
};
