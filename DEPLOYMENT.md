# 🚀 Guide de Déploiement TROCS

## Déployer sur Vercel

### 1️⃣ Préparer le projet

```bash
npm install
```

### 2️⃣ Créer un compte Vercel

- Va sur [vercel.com](https://vercel.com)
- Connecte-toi avec GitHub

### 3️⃣ Importer le projet

1. Clique sur **"New Project"**
2. Importe ton repo GitHub
3. Vercel détectera automatiquement Vite

### 4️⃣ Configurer les variables d'environnement

**IMPORTANT** : Avant de déployer, ajoute la clé API Resend :

1. Dans le dashboard Vercel, va dans **"Settings"** → **"Environment Variables"**
2. Ajoute cette variable :
   - **Name:** `RESEND_API_KEY`
   - **Value:** `re_17ER38g5_4Hy8SuBEEEfJphVKNU62NAiL`
   - **Environments:** Cocher `Production`, `Preview`, et `Development`

3. Clique sur **"Save"**

### 5️⃣ Déployer

1. Clique sur **"Deploy"**
2. Attends 1-2 minutes
3. ✅ Ton site est en ligne !

---

## 📧 Configuration Email (Resend)

### Domaine personnalisé (recommandé)

Pour envoyer des emails depuis `noreply@trocetpuce.com`, tu dois :

1. Va sur [resend.com/domains](https://resend.com/domains)
2. Ajoute ton domaine `trocetpuce.com`
3. Configure les enregistrements DNS :
   - **SPF** (TXT)
   - **DKIM** (TXT)
   - **DMARC** (TXT)

4. Attends la validation (~10 minutes)

### Emails de test

Si tu n'as pas encore configuré le domaine, modifie dans `api/subscribe.js` :

```javascript
from: 'TROCS <onboarding@resend.dev>', // Email temporaire de Resend
```

---

## 🧪 Tester localement

1. Lance le serveur de développement :
```bash
npm run dev
```

2. Ouvre http://localhost:5173

3. Teste le formulaire d'inscription

**Note :** L'API `/api/subscribe` ne fonctionnera qu'après déploiement sur Vercel ou avec Vercel CLI localement.

### Test avec Vercel CLI (optionnel)

```bash
npm i -g vercel
vercel dev
```

Cela simule l'environnement Vercel localement avec les serverless functions.

---

## 📝 Checklist avant lancement

- [ ] Clé API Resend configurée dans Vercel
- [ ] Domaine `trocetpuce.com` vérifié sur Resend
- [ ] Email de confirmation testé
- [ ] Formulaire d'inscription testé sur mobile
- [ ] Pages légales complétées (adresse, SIRET, etc.)
- [ ] Instagram & TikTok créés et liens mis à jour

---

## 🔒 Sécurité

⚠️ **JAMAIS** commit le fichier `.env` sur GitHub !

Le fichier `.gitignore` est déjà configuré pour l'exclure, mais vérifie toujours :

```bash
git status
```

Si tu vois `.env` dans les fichiers à commit, **NE LE COMMIT PAS** !

---

## 🆘 Support

- [Documentation Vercel](https://vercel.com/docs)
- [Documentation Resend](https://resend.com/docs)
- Contact : contact@trocetpuce.com

---

**Fait avec ❤️ pour TROCS** 🎉
