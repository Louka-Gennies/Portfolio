# 🌐 Portfolio de Louka Gennies

Bienvenue sur le dépôt de mon portfolio personnel ! Ce projet met en avant mes compétences, projets et expériences, et il est conçu pour refléter mon parcours en informatique, en particulier dans le domaine de l'intelligence artificielle et de la data.

## 🎯 Objectifs

- **Présenter mes compétences et projets** : Mettre en valeur mes travaux académiques et personnels.
- **Faciliter la prise de contact** : Offrir une manière simple de me contacter via des formulaires ou des liens vers mes profils professionnels.
- **Créer une interface moderne et intuitive** : Utiliser HTML, CSS et JavaScript pour offrir une expérience utilisateur fluide et esthétique.

---

## 🛠️ Technologies utilisées

- **HTML5** : Pour la structure et le contenu de la page.
- **CSS3** : Pour le design, les animations et la mise en page responsive.
- **JavaScript** : Pour ajouter de l'interactivité et des fonctionnalités dynamiques.

---

## 📂 Contenu

- **Accueil** : Une introduction à mon parcours.
- **À propos** : Une présentation détaillée de mes compétences, expériences et centres d'intérêt.
- **Projets** : Une galerie ou une liste de mes projets avec des descriptions, des liens vers les dépôts GitHub.
- **Contact** : Un formulaire de contact fonctionnel ou des liens directs vers mes profils LinkedIn, GitHub, et autres réseaux.

---

## 💻 Développement local

La page d'accueil (`home.html`) charge **Three.js en modules ES** (`import` / `type="module"`). Les navigateurs **refusent** ces imports quand le fichier est ouvert en `file://` (double-clic sur le HTML) — d'où l'erreur CORS *"request not http"*.

**Ne pas ouvrir `home.html` directement.** Servir le dossier `Portfolio` en HTTP :

```bash
cd Portfolio
npm run dev
```

Puis ouvrir [http://localhost:5500/home.html](http://localhost:5500/home.html).

Sans npm : `npx --yes serve -l 5500` depuis le dossier `Portfolio`, ou l'extension **Live Server** de VS Code sur ce dossier.

Sur **GitHub Pages** (`https://…`), le site est déjà servi en HTTPS : les modules fonctionnent normalement.

### Books photo protégés par mot de passe

La page `projets.html` peut être verrouillée pour limiter l’accès aux séries de rue (respect des personnes photographiées).

1. Le fichier `src/js/book-access.config.js` est versionné pour que la protection fonctionne sur **GitHub Pages** (il doit être poussé sur le dépôt).
2. Pour changer le mot de passe : ouvrez `projets.html`, console (F12), puis :
   ```js
   await portfolioBookAccess.hashPassword('votre-mot-de-passe')
   ```
3. Collez le hash dans `book-access.config.js` : `window.BOOK_ACCESS_SHA256 = '…';`, puis committez et poussez.

**Dépôt public :** le hash SHA-256 n’est pas le mot de passe en clair, mais évitez un mot de passe que vous réutilisez ailleurs.

**Important :** sur un site statique, c’est une **protection d’accès** (dissuasion), pas un coffre-fort. Les images ne se chargent qu’après connexion, mais une personne très motivée pourrait encore retrouver les fichiers. Pour un contrôle plus strict : hébergement privé, album cloud protégé, ou authentification serveur.

---

## 🚀 Fonctionnalités

- Animations CSS subtiles pour rendre la navigation agréable.
- Interactivité grâce à JavaScript (menus déroulants, sliders, etc.).

---

## 🌟 Améliorations futures

- Ajouter un mode sombre.

---

## ✉️ Contact

Si vous souhaitez en savoir plus sur mon travail ou collaborer avec moi, n'hésitez pas à me contacter :
- Email : louka.gen@gmail.com
- LinkedIn : [LinkedIn](https://www.linkedin.com/in/louka-gennies/)
- GitHub : [GitHub](https://github.com/Louka-Gennies)

---

### Merci d'avoir visité mon portfolio ! 😊