# 🔄 TROCS - L'app qui réinvente l'échange

**Landing page pré-lancement pour TROCS**

Échange tes objets avec tes voisins. Sans argent. Juste du bon sens.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Montaeie/trocs-landing-page)

---

## 📖 À propos

TROCS est une application mobile (iOS & Android) qui permet d'échanger des objets avec ses voisins sans utiliser d'argent. Cette landing page permet de :

- ✅ Présenter le concept TROCS
- ✅ Collecter les emails des early adopters
- ✅ Envoyer des confirmations automatiques via Resend
- ✅ Informer sur le lancement à venir

**Lancement prévu :** Hauts-de-France puis toute la France 🇫🇷

---

## 🚀 Démarrage rapide

### Prérequis

- Node.js 18+
- npm ou yarn
- Compte Vercel (gratuit)
- Compte Resend (gratuit)

### Installation

```bash
# Clone le projet
git clone https://github.com/Montaeie/trocs-landing-page.git
cd trocs-landing-page

# Installe les dépendances
npm install

# Lance le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:5173`

---

## 🛠️ Technologies

- **Frontend :** HTML, CSS, JavaScript
- **Build :** Vite
- **Animations :** GSAP + Lenis Scroll
- **Backend :** Vercel Serverless Functions
- **Emails :** Resend API
- **Déploiement :** Vercel

---

## 📧 Configuration Email (Resend)

### 1. Créer un compte Resend

1. Va sur [resend.com](https://resend.com)
2. Crée un compte gratuit
3. Génère une clé API

### 2. Configurer les variables d'environnement

**Pour Vercel :**

1. Va dans ton projet Vercel → Settings → Environment Variables
2. Ajoute :
   - **Name:** `RESEND_API_KEY`
   - **Value:** `ta_clé_api_resend`
   - Coche `Production`, `Preview`, `Development`

**Pour le développement local :**

```bash
# Copie le fichier exemple
cp .env.example .env

# Édite .env et ajoute ta clé API
RESEND_API_KEY=re_your_api_key_here
```

### 3. Vérifier ton domaine (optionnel mais recommandé)

Pour envoyer des emails depuis `noreply@trocetpuce.com` :

1. Va sur [resend.com/domains](https://resend.com/domains)
2. Ajoute ton domaine `trocetpuce.com`
3. Configure les enregistrements DNS (SPF, DKIM, DMARC)
4. Attends la validation

---

## 🌐 Déploiement

### Déployer sur Vercel (recommandé)

1. **Via GitHub :**
   - Connecte ton repo à Vercel
   - Ajoute la variable `RESEND_API_KEY`
   - Clique sur Deploy

2. **Via CLI :**
   ```bash
   npm i -g vercel
   vercel
   ```

3. **One-click deploy :**

   [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Montaeie/trocs-landing-page)

**Guide complet :** Voir [DEPLOYMENT.md](./DEPLOYMENT.md)

---

## 📁 Structure du projet

```
trocs-landing-page/
├── api/
│   └── subscribe.js          # Endpoint Resend pour emails
├── css/
│   ├── footer.css
│   ├── home.css
│   ├── menu.css
│   └── transition.css
├── public/
│   ├── trocs/                # Images TROCS
│   └── global/               # Assets globaux
├── script/
│   ├── email-form.js         # Gestion du formulaire
│   ├── home.js               # Animations homepage
│   ├── lenis-scroll.js       # Smooth scroll
│   ├── menu.js               # Menu hamburger
│   └── transition.js         # Transitions de page
├── index.html                # Page principale
├── mentions-legales.html     # Mentions légales
├── politique-confidentialite.html
├── package.json
├── vercel.json               # Config Vercel
└── DEPLOYMENT.md             # Guide de déploiement
```

---

## 🎨 Personnalisation

### Modifier les textes

Édite directement `index.html` pour changer :
- Le titre et le slogan
- Les sections Problème / Solution / Bénéfices
- Les témoignages
- Le footer

### Changer les images

Remplace les images dans `public/trocs/` et mets à jour les références dans `css/home.css` :

```css
.home-about-card.card-bg-1 {
  background-image: url('/trocs/ton-image.jpg');
}
```

### Modifier les couleurs

Les variables CSS sont dans `globals.css` :

```css
:root {
  --base-100: #ffffff;
  --base-200: #f5f5f5;
  --base-300: #000000;
  /* ... */
}
```

---

## 📝 Fonctionnalités

### ✅ Formulaire d'inscription

- Validation email côté client
- Envoi via API Resend
- Email de confirmation automatique à l'utilisateur
- Notification à l'équipe TROCS

### ✅ Pages légales

- Mentions légales (RGPD compliant)
- Politique de confidentialité (CNIL compliant)

### ✅ Design responsive

- Mobile-first
- Animations GSAP optimisées
- Smooth scroll avec Lenis

### ✅ SEO optimisé

- Meta tags
- Titre et description
- URLs propres

---

## 🔒 Sécurité

⚠️ **Important :** Ne jamais committer le fichier `.env` !

Le fichier `.gitignore` exclut déjà :
- `.env`
- `node_modules/`
- `dist/`

Vérifie toujours avant de commit :
```bash
git status
```

---

## 📞 Contact

**Projet TROCS :**
- Email : contact@trocetpuce.com
- Instagram : [@trocs.app](https://instagram.com/trocs.app)
- TikTok : [@trocs.app](https://tiktok.com/@trocs.app)

**Porteurs du projet :**
Yhan Bangala & Kerry

---

## 📄 Licence

© 2025 TROCS. Tous droits réservés.

---

**Fait avec ❤️ à Roubaix** 🎉
