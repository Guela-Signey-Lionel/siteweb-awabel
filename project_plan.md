# Site Web Officiel AWABEL

## 1. Description du Projet
Site vitrine professionnel pour AWABEL (Association Wali ti Beafrica Londo), une ONG nationale d'action humanitaire en Republique Centrafricaine. L'objectif est de renforcer la visibilite internationale de l'ONG, presenter les programmes, activites et l'equipe dirigeante, et permettre aux visiteurs de contacter l'ONG directement par e-mail.

## 2. Structure des Pages
- `/` - Accueil : Hero + mission + chiffres cles + programmes + actualites + CTA contact
- `/about` - A propos : Histoire, valeurs, organigramme Bureau Executif
- `/programs` - Programmes : 5 domaines d'intervention
- `/news` - Actualites : Articles et rapports d'activites
- `/partners` - Partenaires : ONG, Nations Unies, Ambassades
- `/join` - Rejoindre : Formulaire adhesion/benevolat
- `/contact` - Contact : Formulaire, carte, coordonnees
- `/legal` - Mentions legales

## 3. Fonctionnalites Principales
- [ ] Page d'accueil avec hero video/image, stats animees, programmes, actualites
- [ ] Barre de navigation fixe avec informations cles de l'ONG
- [ ] Multilingue FR/EN/Sango (i18n)
- [ ] Formulaire de contact via service de formulaire (sans backend)
- [ ] Carte interactive des zones d'intervention
- [ ] Sections programmes avec 5 domaines d'action
- [ ] Page partenaires avec logos et descriptions
- [ ] Page a propos avec histoire et equipe dirigeante (8 membres)
- [ ] Footer avec coordonnees et reseaux sociaux
- [ ] Mentions legales conformes Loi 61/233 du 27 mai 1961

## 4. Model de Donnees
Le site est statique sans base de donnees. Les contenus (actualites, programmes, equipe) sont stockes en JSON dans le code source, modifiables sans deploiement en editant les fichiers mock.

## 5. Plan d'Integration Backend/Tiers
- Pas de backend necessaire (site vitrine statique)
- Pas de Shopify requis
- Pas de Stripe requis
- Les formulaires utilisent des endpoints de service tiers via email

## 6. Plan de Developpement par Phases

### Phase 1 : Page d'accueil + Navigation + Footer
- But : Creer une page d'accueil impactante avec toutes les sections cles
- Livrable : Hero, Stats animees, Programmes, Actualites, Navbar, Footer
- Statut : En cours

### Phase 2 : Pages About + Programmes + Partenaires
- But : Completer les pages institutionnelles
- Livrable : Histoire, equipe, detail programmes, liste partenaires

### Phase 3 : Actualites + Contact + Rejoindre
- But : Formulaires et page actualites
- Livrable : Liste actualites filtrable, formulaire contact, formulaire adhesion

### Phase 4 : Mentions Legales + i18n + SEO
- But : Finaliser le site multilingue et le referencement
- Livrable : Mentions legales, internationalisation complete, meta tags SEO

### Phase 5 : Optimisation Performance + Accessibilite
- But : Validation des criteres d'acceptation
- Livrable : WebP, lazy loading, accessibilite WCAG 2.1 AA