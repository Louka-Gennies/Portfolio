const translations = {
  fr: {
    'nav.home': 'Accueil',
    'nav.projects': 'Projets',
    'nav.about': 'À propos',
    'nav.contact': 'Contact',
    'hero.word1': 'Créatif',
    'hero.word2': 'Innovant',
    'hero.word3': 'Passionné',
    'hero.scroll': 'Défiler',
    'bio.p1':
      'Passionné par l\'audiovisuel et la production d\'images, je crée des contenus visuels captivants. Mon expérience m\'a permis de développer des compétences en montage vidéo, tournage et photographie, avec un regard créatif pour raconter des histoires par l\'image.',
    'bio.p2':
      'Curieux et en quête d\'innovation, je me tiens au courant des dernières technologies audiovisuelles. J\'apprécie la collaboration tout en sachant travailler en autonomie pour mener des projets créatifs avec rigueur.',
    'bio.p3':
      'Basé en France, je développe un regard de photographe autour du street, du reportage et du portrait. Ouvert aux stages, collaborations et commandes photo — écrivez-moi pour en discuter.',
    'skills.title': 'COMPÉTENCES',
    'skills.av.title': 'Audiovisuel & image',
    'skills.av.desc':
      'Autodidacte en tournage et photographie, je capture vidéos et photos dans divers contextes, puis assure la post-production avec DaVinci Resolve (montage et étalonnage).',
    'skills.web.title': 'Web design (temps libre)',
    'skills.web.desc':
      'En temps libre, j\'explore le web design (HTML, CSS, JavaScript) pour créer des interfaces modernes et responsives, en transposant mon sens visuel photo/vidéo sur le web.',
    'projects.title': 'BOOKS',
    'projects.titleAccent': 'PHOTO',
    'projects.subtitle': 'Séries éditoriales & carnets visuels',
    'projects.viewAll': 'Voir tous les books',
    'projects.videoTeaser': 'Section audiovisuel sur la page Projets — bientôt un premier film.',
    'social.instagram.lead': 'D\'autres séries et archives sont publiées sur Instagram.',
    'social.instagram.handle': '@louka.cr3',
    'projects.openBook': 'Ouvrir le book',
    'projects.learnMore': 'Découvrir',
    'projets.status.raw': 'Fichiers RAW, sans retouche — sélection en cours d\'édition.',
    'projets.status.editing': 'Série en cours d\'édition — photos non publiées sur le site.',
    'projets.tag.raw': 'RAW',
    'projets.tag.editing': 'En édition',
    'projets.tag.instagram': 'Instagram',
    'projets.lightboxRawNotice': 'Ces images sont affichées en RAW, sans retouche. Une version éditée sera publiée prochainement.',
    'projets.lightbox.close': 'Fermer',
    'projets.lightbox.prev': 'Photo précédente',
    'projets.lightbox.next': 'Photo suivante',
    'projets.lightbox.hint': 'Flèches du clavier · clic sur les côtés · glisser',
    'projets.lightbox.counter': '{current} / {total}',
    'projets.lightbox.continue': 'Voir les photos',
    'projets.book4.desc': 'Street photo à Angers : rues, passants et instants saisis. Fichiers RAW non retouchés, version finale en cours d\'édition.',
    'projets.book5.desc': 'Journée au Bioparc de Doué-la-Fontaine. La série est en cours de retouche et n\'est pas encore disponible en ligne.',
    'contact.title': 'Contact',
    'contact.intro':
      'Merci de visiter mon portfolio ! Si mon travail vous intéresse, pour discuter d\'un projet ou en savoir plus sur mes compétences, n\'hésitez pas à me contacter.',
    'projets.hero1': 'BOOKS',
    'projets.hero2': 'PHOTO',
    'projets.subtitle': 'Séries éditoriales & carnets visuels',
    'projets.filter.all': 'Tout',
    'projets.filter.portrait': 'Portrait',
    'projets.filter.street': 'Urbain',
    'projets.filter.event': 'Événement',
    'projets.filter.nature': 'Nature',
    'projets.filter.video': 'Vidéo',
    'projets.video.hero1': 'FILMS',
    'projets.video.hero2': '& MONTAGE',
    'projets.video.subtitle': 'Courts métrages, essais et montage DaVinci Resolve',
    'projets.video.empty': 'Aucun film publié pour le moment.',
    'projets.video.emptyHint': 'Cet espace accueillera prochainement mes projets vidéo lorsque je choisirai de les partager.',
    'projets.social.instagram': 'Suivez mes publications photo sur Instagram',
    'projets.pages': 'pages',
    'projets.viewBook': 'Ouvrir le book',
    'projets.viewInstagram': 'Voir sur Instagram',
    'projets.coverPlaceholder': 'Couverture à venir',
    'projets.emptyBook': 'Les photos de ce book seront ajoutées prochainement.',
    'projets.emptyBookHint': 'Placez vos images dans src/assets/images/books/ (voir README).',
    'projets.book1.title': 'Street — Nantes',
    'projets.book1.desc': 'Carnet de street photo à Nantes, lumière urbaine et scènes du quotidien.',
    'projets.book1.camera': 'Fujifilm FinePix S100FS',
    'projets.book1.tag1': 'Street',
    'projets.book1.tag2': 'Nantes',
    'projets.book2.title': 'Fête médiévale — Stralsund',
    'projets.book2.desc': 'Reportage pendant une fête médiévale à Stralsund, Allemagne — costumes, foule et ambiance historique.',
    'projets.book2.camera': 'Fujifilm FinePix S100FS',
    'projets.book2.tag1': 'Événement',
    'projets.book2.tag2': 'Allemagne',
    'projets.book3.title': 'Autoportraits',
    'projets.book3.desc': 'Série d\'autoportraits — exploration du cadre, de la lumière et de la présence face à l\'objectif.',
    'projets.book3.camera': 'Canon EOS R50',
    'projets.book3.tag1': 'Autoportrait',
    'projets.book3.tag2': 'Portrait',
    'projets.book4.title': 'Street — Angers',
    'projets.book4.camera': 'Canon EOS R50',
    'projets.book4.tag1': 'Street',
    'projets.book4.tag2': 'Angers',
    'projets.book5.title': 'Zoo — Doué-la-Fontaine',
    'projets.book5.camera': 'Canon EOS R50',
    'projets.book5.tag1': 'Nature',
    'projets.book5.tag2': 'Zoo',
    'projets.book6.title': 'Manifestations — Angers',
    'projets.book6.desc': 'Reportage du 10 septembre 2025 à Angers. Les fichiers originaux ne sont plus disponibles ; il reste une publication sur mon compte Instagram.',
    'projets.book6.camera': 'Canon EOS R50',
    'projets.book6.tag1': 'Reportage',
    'projets.book6.tag2': '10 sept. 2025',
    'projets.book6.archive': 'Archive Instagram uniquement',
    'page.homeTitle': 'Accueil — Louka Gennies',
    'page.homeDescription': 'Portfolio photo de Louka Gennies — street, reportage, portrait et books éditoriaux.',
    'page.projetsTitle': 'Projets — Louka Gennies',
    'page.legalTitle': 'Mentions légales — Louka Gennies',
    'footer.copyright': '© 2026 Louka Gennies',
    'footer.legal': 'Mentions légales',
    'legal.title': 'Mentions légales',
    'legal.updated': 'Dernière mise à jour : juin 2026',
    'legal.editor.title': 'Éditeur du site',
    'legal.editor.body': 'Le site est édité par Louka Gennies, portfolio personnel. Contact : louka.gen@gmail.com — 07 68 12 00 06.',
    'legal.hosting.title': 'Hébergement',
    'legal.hosting.body': 'Ce site est publié en ligne via un service d\'hébergement web statique (par ex. GitHub Pages ou équivalent). L\'hébergeur traite les données techniques nécessaires à la consultation des pages (adresse IP, logs serveur) conformément à sa propre politique de confidentialité.',
    'legal.data.title': 'Données personnelles',
    'legal.data.body1': 'Aucun formulaire de contact n\'est intégré au site : les coordonnées affichées le sont volontairement pour permettre de me joindre. Aucune donnée n\'est vendue ni cédée à des tiers à des fins commerciales.',
    'legal.data.body2': 'Conformément au RGPD, vous pouvez demander l\'accès, la rectification ou la suppression de données vous concernant en écrivant à louka.gen@gmail.com.',
    'legal.cookies.title': 'Cookies & stockage local',
    'legal.cookies.body': 'Le site enregistre votre préférence de langue dans le stockage local du navigateur (localStorage). Des ressources tierces peuvent être chargées (polices Google Fonts, animation Lottie via unpkg.com). Aucun outil de mesure d\'audience (type Google Analytics) n\'est utilisé à ce jour.',
    'legal.ip.title': 'Propriété intellectuelle',
    'legal.ip.body': 'Les photographies, textes et éléments graphiques de ce portfolio sont la propriété de Louka Gennies, sauf mention contraire. Toute reproduction ou diffusion des images des books protégés sans autorisation est interdite.',
    'legal.credits.title': 'Crédits',
    'legal.credits.body': 'Conception et développement du site : Louka Gennies. Icônes : Font Awesome (licence libre).',
    'legal.back': '← Retour à l\'accueil',
    'books.gate.title': 'Accès restreint',
    'books.gate.notice':
      'Ces books contiennent de la photographie de rue. L\'accès est réservé aux personnes autorisées, dans le respect des personnes photographiées. Merci de ne pas partager les images sans autorisation.',
    'books.gate.label': 'Mot de passe',
    'books.gate.submit': 'Accéder aux books',
    'books.gate.lock': 'Verrouiller',
    'books.gate.wrongPassword': 'Mot de passe incorrect.',
    'books.gate.notConfigured':
      'Protection non configurée. Copiez book-access.config.example.js en book-access.config.js et définissez un mot de passe.',
    'books.gate.hint': 'Besoin d\'un accès ? Contactez-moi via la page d\'accueil.',
  },
  en: {
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'hero.word1': 'Creative',
    'hero.word2': 'Innovative',
    'hero.word3': 'Passionate',
    'hero.scroll': 'Scroll',
    'bio.p1':
      'Passionate about audiovisual and image production, I create captivating visual content. My experience has helped me develop skills in video editing, filming, and photography, with a creative eye for storytelling through imagery.',
    'bio.p2':
      'Curious and always seeking innovation, I stay up to date with the latest audiovisual technologies. I enjoy collaboration while being able to work autonomously to deliver creative projects with rigor.',
    'bio.p3':
      'Based in France, I\'m building a photographer\'s eye around street work, reportage, and portrait. Open to internships, collaborations, and photo commissions — feel free to get in touch.',
    'skills.title': 'SKILLS',
    'skills.av.title': 'Audiovisual & image',
    'skills.av.desc':
      'Self-taught in filming and photography, I capture videos and photos in various contexts, then handle post-production with DaVinci Resolve, including editing and color grading.',
    'skills.web.title': 'Web design (free time)',
    'skills.web.desc':
      'In my free time, I explore web design with HTML, CSS, and JavaScript to build modern, responsive interfaces, applying the visual sense I\'ve built through photo and video work.',
    'projects.title': 'PHOTO',
    'projects.titleAccent': 'BOOKS',
    'projects.subtitle': 'Editorial series & visual diaries',
    'projects.viewAll': 'View all books',
    'projects.videoTeaser': 'Audiovisual section on the Projects page — a first film coming soon.',
    'social.instagram.lead': 'More series and archives are shared on Instagram.',
    'social.instagram.handle': '@louka.cr3',
    'projects.openBook': 'Open book',
    'projects.learnMore': 'Discover',
    'projets.status.raw': 'RAW files, unedited — selection currently being edited.',
    'projets.status.editing': 'Series being edited — photos not published on the site yet.',
    'projets.tag.raw': 'RAW',
    'projets.tag.editing': 'Editing',
    'projets.tag.instagram': 'Instagram',
    'projets.lightboxRawNotice': 'These images are shown as unedited RAW files. An edited version will be published soon.',
    'projets.lightbox.close': 'Close',
    'projets.lightbox.prev': 'Previous photo',
    'projets.lightbox.next': 'Next photo',
    'projets.lightbox.hint': 'Arrow keys · click sides · swipe',
    'projets.lightbox.counter': '{current} / {total}',
    'projets.lightbox.continue': 'View photos',
    'projets.book4.desc': 'Street photography in Angers — streets, passers-by, and fleeting moments. Unedited RAW files; final edited version coming soon.',
    'projets.book5.desc': 'A day at the Doué-la-Fontaine Bioparc. This series is being edited and is not available online yet.',
    'contact.title': 'Contact',
    'contact.intro':
      'Thank you for visiting my portfolio! If you\'re interested in my work, want to discuss a project, or learn more about my skills, I\'d be happy to hear from you.',
    'projets.hero1': 'PHOTO',
    'projets.hero2': 'BOOKS',
    'projets.subtitle': 'Editorial series & visual diaries',
    'projets.filter.all': 'All',
    'projets.filter.portrait': 'Portrait',
    'projets.filter.street': 'Street',
    'projets.filter.event': 'Event',
    'projets.filter.nature': 'Nature',
    'projets.filter.video': 'Video',
    'projets.video.hero1': 'FILM',
    'projets.video.hero2': '& EDIT',
    'projets.video.subtitle': 'Short films, experiments, and DaVinci Resolve editing',
    'projets.video.empty': 'No films published yet.',
    'projets.video.emptyHint': 'This space will host my video projects when I choose to share them.',
    'projets.social.instagram': 'Follow my photo work on Instagram',
    'projets.pages': 'pages',
    'projets.viewBook': 'Open book',
    'projets.viewInstagram': 'View on Instagram',
    'projets.coverPlaceholder': 'Cover coming soon',
    'projets.emptyBook': 'Photos for this book will be added soon.',
    'projets.emptyBookHint': 'Add your images under src/assets/images/books/ (see README).',
    'projets.book1.title': 'Street — Nantes',
    'projets.book1.desc': 'Street photography diary in Nantes — urban light and everyday scenes.',
    'projets.book1.camera': 'Fujifilm FinePix S100FS',
    'projets.book1.tag1': 'Street',
    'projets.book1.tag2': 'Nantes',
    'projets.book2.title': 'Medieval festival — Stralsund',
    'projets.book2.desc': 'Coverage of a medieval festival in Stralsund, Germany — costumes, crowds, and historic atmosphere.',
    'projets.book2.camera': 'Fujifilm FinePix S100FS',
    'projets.book2.tag1': 'Event',
    'projets.book2.tag2': 'Germany',
    'projets.book3.title': 'Self-portraits',
    'projets.book3.desc': 'Self-portrait series — exploring framing, light, and presence in front of the lens.',
    'projets.book3.camera': 'Canon EOS R50',
    'projets.book3.tag1': 'Self-portrait',
    'projets.book3.tag2': 'Portrait',
    'projets.book4.title': 'Street — Angers',
    'projets.book4.camera': 'Canon EOS R50',
    'projets.book4.tag1': 'Street',
    'projets.book4.tag2': 'Angers',
    'projets.book5.title': 'Zoo — Doué-la-Fontaine',
    'projets.book5.camera': 'Canon EOS R50',
    'projets.book5.tag1': 'Nature',
    'projets.book5.tag2': 'Zoo',
    'projets.book6.title': 'Protests — Angers',
    'projets.book6.desc': 'Coverage of 10 September 2025 in Angers. Original files are no longer available; a post remains on my Instagram account.',
    'projets.book6.camera': 'Canon EOS R50',
    'projets.book6.tag1': 'Reportage',
    'projets.book6.tag2': '10 Sept. 2025',
    'projets.book6.archive': 'Instagram archive only',
    'page.homeTitle': 'Home — Louka Gennies',
    'page.homeDescription': 'Photo portfolio by Louka Gennies — street, reportage, portrait, and editorial books.',
    'page.projetsTitle': 'Projects — Louka Gennies',
    'page.legalTitle': 'Legal notice — Louka Gennies',
    'footer.copyright': '© 2026 Louka Gennies',
    'footer.legal': 'Legal notice',
    'legal.title': 'Legal notice',
    'legal.updated': 'Last updated: June 2026',
    'legal.editor.title': 'Site publisher',
    'legal.editor.body': 'This site is published by Louka Gennies as a personal portfolio. Contact: louka.gen@gmail.com — +33 7 68 12 00 06.',
    'legal.hosting.title': 'Hosting',
    'legal.hosting.body': 'This site is served through a static web hosting service (e.g. GitHub Pages or similar). The host processes technical data required to deliver pages (IP address, server logs) under its own privacy policy.',
    'legal.data.title': 'Personal data',
    'legal.data.body1': 'There is no contact form on this site: contact details are displayed voluntarily so visitors can reach me. No data is sold or shared with third parties for commercial purposes.',
    'legal.data.body2': 'Under the GDPR, you may request access, correction, or deletion of your personal data by emailing louka.gen@gmail.com.',
    'legal.cookies.title': 'Cookies & local storage',
    'legal.cookies.body': 'The site stores your language preference in the browser\'s local storage. Third-party resources may load (Google Fonts, Lottie animation via unpkg.com). No analytics tool (such as Google Analytics) is used at this time.',
    'legal.ip.title': 'Intellectual property',
    'legal.ip.body': 'Photographs, text, and graphic elements on this portfolio belong to Louka Gennies unless stated otherwise. Reproduction or sharing of protected book images without permission is prohibited.',
    'legal.credits.title': 'Credits',
    'legal.credits.body': 'Site design and development: Louka Gennies. Icons: Font Awesome (free license).',
    'legal.back': '← Back to home',
    'books.gate.title': 'Restricted access',
    'books.gate.notice':
      'These books contain street photography. Access is limited to authorized viewers, out of respect for the people photographed. Please do not share images without permission.',
    'books.gate.label': 'Password',
    'books.gate.submit': 'View books',
    'books.gate.lock': 'Lock',
    'books.gate.wrongPassword': 'Incorrect password.',
    'books.gate.notConfigured':
      'Protection not configured. Copy book-access.config.example.js to book-access.config.js and set a password.',
    'books.gate.hint': 'Need access? Contact me from the home page.',
  },
};

const LANG_KEY = 'portfolio-lang';

function getLang() {
  return localStorage.getItem(LANG_KEY) || 'fr';
}

function setLang(lang) {
  localStorage.setItem(LANG_KEY, lang);
  document.documentElement.lang = lang;
  applyTranslations(lang);
  updateLangToggle(lang);
  if (typeof window.onLangChange === 'function') {
    window.onLangChange(lang);
  }
}

function t(key, lang) {
  const l = lang || getLang();
  return translations[l]?.[key] ?? translations.fr[key] ?? key;
}

function applyTranslations(lang) {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const value = t(key, lang);
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = value;
    } else {
      el.textContent = value;
    }
  });

  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    el.innerHTML = t(el.getAttribute('data-i18n-html'), lang);
  });

  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria'), lang));
  });

  const titleKey = document.body.dataset.pageTitle;
  if (titleKey) {
    document.title = t(titleKey, lang);
  }

  const descKey = document.body.dataset.pageDescription;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (descKey && metaDesc) {
    metaDesc.setAttribute('content', t(descKey, lang));
  }
}

function updateLangToggle(lang) {
  document.querySelectorAll('.lang-toggle').forEach((btn) => {
    btn.setAttribute('aria-label', lang === 'fr' ? 'Switch to English' : 'Passer en français');
    const frBtn = btn.querySelector('[data-lang="fr"]');
    const enBtn = btn.querySelector('[data-lang="en"]');
    if (frBtn && enBtn) {
      frBtn.classList.toggle('active', lang === 'fr');
      enBtn.classList.toggle('active', lang === 'en');
    } else {
      btn.textContent = lang === 'fr' ? 'EN' : 'FR';
    }
  });
}

function initI18n() {
  const lang = getLang();
  document.documentElement.lang = lang;
  applyTranslations(lang);
  updateLangToggle(lang);

  document.querySelectorAll('.lang-toggle').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const target = e.target.closest('[data-lang]');
      const next = target?.dataset.lang || (getLang() === 'fr' ? 'en' : 'fr');
      setLang(next);
    });
  });
}

document.addEventListener('DOMContentLoaded', initI18n);

window.portfolioI18n = { getLang, setLang, t, applyTranslations };
