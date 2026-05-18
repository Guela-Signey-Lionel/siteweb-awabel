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
  { icon: 'ri-map-pin-line', text: 'Bangui-Fleuve - 6e Arrondissement, Quartier Linguissa I, RCA', key: 'address' },
  { icon: 'ri-heart-line', text: 'Solidarité - Justice - Égalité', key: 'motto' },
  { icon: 'ri-earth-line', text: 'République Centrafricaine', key: 'country' },
  { icon: 'ri-shield-user-line', text: 'NIF 30001-0694-2007' },
  { icon: 'ri-shield-user-line', text: 'NIU N°2362026M89457L' },
  { icon: 'ri-shield-user-line', text: 'AGRÉMENT N°429/MADDL/DIRCAB/DGAT/DAPSE/SASE' },
  { icon: 'ri-phone-line', text: '+236 74 71 99 99' },
  { icon: 'ri-whatsapp-line', text: '+236 72 12 56 63 (WhatsApp)' },
  { icon: 'ri-mail-line', text: 'awabel26@gmail.com' },
  { icon: 'ri-map-pin-line', text: 'Bangui-Fleuve - 6e Arrondissement, Quartier Linguissa I, RCA', key: 'address' },
  { icon: 'ri-heart-line', text: 'Solidarité - Justice - Égalité', key: 'motto' },
  { icon: 'ri-earth-line', text: 'République Centrafricaine', key: 'country' },
  { icon: 'ri-shield-user-line', text: 'NIF 30001-0694-2007' },
  { icon: 'ri-shield-user-line', text: 'NIU N°2362026M89457L' },
  { icon: 'ri-shield-user-line', text: 'AGRÉMENT N°429/MADDL/DIRCAB/DGAT/DAPSE/SASE' },
];

export const statsData = [
  { value: 500, label: 'Bénéficiaires', suffix: '+' },
  { value: 6, label: 'Projets actifs', suffix: '' },
  { value: 18, label: 'Villages/Quartiers couverts', suffix: '' },
  { value: 4, label: 'Partenaires', suffix: '+' },
];

export const programsData = [
  {
    id: 'droits-femmes',
    title: 'Droits des femmes',
    description: 'Promotion, protection et défense des droits fondamentaux des femmes et des filles.',
    fullDescription: "AWABEL mène des actions de sensibilisation, de plaidoyer et d'accompagnement communautaire pour promouvoir les droits des femmes, prévenir les violences basées sur le genre et renforcer l'accès des femmes à l'information, à la justice sociale et aux espaces de décision.",
    image: '/images/image7.jpeg',
    bgColor: 'bg-awabel-primary/10',
  },
  {
    id: 'autonomisation',
    title: 'Autonomisation économique des femmes',
    description: 'Renforcement des capacités économiques, professionnelles et entrepreneuriales des femmes.',
    fullDescription: "Ce programme accompagne les femmes vers l'autonomie financière à travers les formations pratiques, l'appui aux activités génératrices de revenus, l'organisation en groupements solidaires et le développement de petites initiatives économiques adaptées aux réalités locales.",
    image: '/images/agriculture.jpeg',
    bgColor: 'bg-emerald-50',
  },
  {
    id: 'education',
    title: 'Éducation & scolarisation',
    description: "Appui à l'éducation, à la scolarisation des enfants et à l'encadrement des jeunes.",
    fullDescription: "AWABEL promeut l'accès équitable à l'éducation en soutenant la scolarisation des enfants et des jeunes, particulièrement les plus vulnérables. Le programme inclut la sensibilisation des familles, l'appui scolaire, l'alphabétisation et l'accompagnement des communautés pour réduire les risques d'abandon scolaire.",
    image: '/images/education.jpg',
    bgColor: 'bg-orange-50',
  },
  {
    id: 'sante',
    title: 'Santé communautaire & bien-être familial',
    description: 'Promotion de la santé communautaire, de la prévention et du bien-être des familles.',
    fullDescription: "AWABEL agit pour rapprocher l'information sanitaire des communautés, renforcer la prévention, encourager les bonnes pratiques de santé familiale et soutenir les relais communautaires. Le programme met un accent particulier sur la santé maternelle, infantile, la sensibilisation et l'orientation vers les services de base.",
    image: '/images/sante.jpg',
    bgColor: 'bg-teal-50',
  },
  {
    id: 'environnement',
    title: 'Environnement, agropastoral & agroalimentaire',
    description: "Protection de l'environnement, développement agropastoral et valorisation agroalimentaire.",
    fullDescription: "Ce domaine combine la protection de l'environnement, la promotion des pratiques agropastorales durables et la valorisation des produits agroalimentaires locaux. AWABEL encourage le reboisement, la gestion responsable des ressources naturelles, l'appui aux producteurs et la transformation locale pour renforcer la résilience des communautés.",
    image: '/images/environnement.jpeg',
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
    title: 'Formation au développement agropastoral et la valorisation agroalimentaire.',
    excerpt: 'Session intensive de 3 jours sur les techniques agricoles durables et la gestion des coopératives agricoles féminines.',
    category: 'Agriculture',
    date: '5 Décembre 2025',
    image: '/images/agriculture.jpeg',
    author: 'AWABEL Agriculture',
  },
  /*{
    id: 6,
    title: 'Eau, Hygiène et Assainissement',
    excerpt: "AWABEL soutient l'accès à l'eau potable, garantit l'hygiène et l'assainissement en milieu communautaire.",
    category: 'Eau, Hygiène et Assainissement',
    date: '18 Novembre 2025',
    image: '/images/eha.jpeg',
    author: 'AWABEL Eau',
  },*/
  {
    id: 7,
    title: 'Journée internationale des droits de la femme : célébration avec les bénéficiaires',
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
  { name: 'MOUNDJOUTENDE Jolie Judas', role: 'Coordonnatrice', image: '/images/Coordo.png' },
  { name: 'DALI-KPANA NAYO Larissa', role: 'Responsable Programmes et Projets', image: '/images/logo.jpeg' },
  { name: 'CAMEGO Née NGOY P.', role: 'Responsable Mobilisation des Ressources', image: '/images/logo.jpeg' },
  { name: 'NGARO Gisèle', role: 'Responsable Ressources Humaines', image: '/images/logo.jpeg' },
  { name: 'GRENGONDA Lisa Sandrine', role: 'Comptable', image: '/images/logo.jpeg' },
  { name: 'POUNOUBADA Doris', role: 'Responsable Suivi-Évaluation', image: '/images/logo.jpeg' },
  { name: 'NINGADAMA Milca', role: 'Chargée de Mobilisation Communautaire', image: '/images/CMC.png' },
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
  address: 'Bangui - 6e Arrondissement, Quartier Linguissa I, République Centrafricaine',
  phone1: '+236 74 71 99 99',
  phone2: '+236 70 05 05 87',
  email: 'awabel26@gmail.com',
  whatsapp: '+236 72 12 56 63',
};

export const aboutContent = {
  history: "Fondée en 2023, AWABEL est née de la volonté de citoyens centrafricains engagés à transformer leur pays. Partant du constat que la pauvreté, l'analphabétisme et l'exclusion des femmes freinent le développement de la RCA, nos fondateurs ont décidé d'agir. Depuis, l'ONG nationale n'a cessé de croître, passant de 3 bénévoles à une équipe de 9 salariés permanents et des centaines de volontaires.",
  mission: "Contribuer à la réduction de la pauvreté, de l'analphabétisme et de la famine en République Centrafricaine à travers des programmes intégrés de développement durable, tout en promouvant les droits des femmes et la protection de l'environnement.",
  vision: "Une République Centrafricaine où chaque citoyen, et particulièrement chaque femme et chaque enfant, vit dans la dignité, l'autonomie et la sécurité, grâce à un accès équitable à l'éducation, à la santé, à l'eau et à la sécurité alimentaire.",
  values: [
    { title: 'Solidarité', desc: 'Nous croyons que la transformation durable ne peut se faire qu\'ensemble. La solidarité, c\'est se soutenir les uns les autres, unir nos forces face aux défis et bâtir un avenir commun fondé sur l\'entraide. C\'est aussi valoriser la richesse du vivre-ensemble, respecter les différences et travailler collectivement pour l\'émancipation des plus vulnérables.« Être solidaire, c\'est faire du bien commun une priorité. »' },
    { title: 'Justice', desc: 'La justice est le fondement de toute société équitable. AWABEL œuvre pour une justice sociale et inclusive, qui garantit à chaque individu le respect de ses droits, la protection contre toute forme d\'injustice et un traitement équitable, quelles que soient ses origines ou ses conditions de vie. Nous défendons l\'accès équitable aux ressources, à l\'éducation, à la santé et à la parole. « Il n\'y a pas de paix sans justice, et pas de justice sans équité. »' },
    { title: 'Égalité', desc: 'L\'égalité est au cœur de notre mission. Nous luttons activement contre toutes les formes de discrimination, notamment liées au genre, à l\'âge, à l\'ethnie ou au statut social. Chez AWABEL, chaque personne a la même valeur, les mêmes droits et les mêmes opportunités de s\'épanouir et de contribuer au développement de sa communauté. « L\'égalité est une base, pas une option. »' },
    { title: 'Transparence', desc: 'Nous assurons une gouvernance ouverte et un usage responsable des ressources.' },
    { title: 'Innovation', desc: 'Nous recherchons constamment des solutions créatives aux défis locaux.' },
    { title: 'Persévérance', desc: 'Nous restons engagés malgré les obstacles, avec détermination et courage.' },
  ],
};
