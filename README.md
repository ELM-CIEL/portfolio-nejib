# 📰 Portfolio Néjib Khalfi - Journaliste E-sport

Portfolio professionnel pour journaliste e-sport, développé avec React et Tailwind CSS.

## 🚀 Installation locale

### Prérequis

- **Node.js** (version 18 ou supérieure) : https://nodejs.org/

### Étapes

1. Clone ce repository :

```bash
git clone https://github.com/ELM-CIEL/portfolio-nejib.git
cd portfolio-nejib
```

2. Installe les dépendances :

```bash
npm install
```

3. Lance le serveur de développement :

```bash
npm run dev
```

4. Ouvre ton navigateur sur : **http://localhost:5173**

---

## 📸 Comment ajouter tes images

### Étape 1 : Prépare tes images

- **Renomme-les** avec des noms simples sans espaces : `valorant-interview.jpg`, `lan-lyon.jpg`, etc.
- **Optimise-les** : max 1 Mo par image (utilise https://tinypng.com si besoin)
- **Formats acceptés** : `.jpg`, `.jpeg`, `.png`, `.webp`

### Étape 2 : Place tes images dans le dossier `public/`

```
portfolio-nejib/
├── public/
│   ├── valorant-interview.jpg    ← Mets tes photos ici
│   ├── lan-lyon.jpg
│   ├── casting-esport.jpg
│   └── ...
├── src/
└── ...
```

**⚠️ Important** : Toutes les images doivent être dans le dossier **`public/`** à la racine du projet.

### Étape 3 : Modifie les chemins dans le code

Ouvre **`src/App.jsx`** et cherche la section `projects` (vers la ligne 59).

**Change les chemins d'images** :

```jsx
const projects = [
  {
    id: 1,
    title: "Interviews Joueurs Pro VALORANT",
    image: "/valorant-interview.jpg", // ← Change ici (avec / au début)
    // ...
  },
  {
    id: 2,
    title: "LAN Lyon E-sport",
    image: "/lan-lyon.jpg", // ← Change ici
    // ...
  },
];
```

**⚠️ Important** : Le chemin doit **toujours commencer par `/`** → `/ton-image.jpg`

### Étape 4 : Vérifie que ça marche

1. Sauvegarde le fichier `App.jsx` (`Ctrl + S`)
2. Le navigateur se met à jour automatiquement
3. Si l'image ne s'affiche pas :
   - Vérifie que le nom du fichier correspond exactement (majuscules/minuscules)
   - Vérifie qu'elle est bien dans `public/`
   - Recharge la page avec `Ctrl + F5`

---

## 📝 Personnaliser ton portfolio

### Modifier tes informations personnelles

Ouvre `src/App.jsx` et modifie la section `profile` (ligne ~30) :

```jsx
const profile = {
  name: "Néjib Khalfi",
  title: "Journaliste Étudiant Spécialisé E-sport",
  email: "ton-email@gmail.com", // ← Change ici
  phone: "07 61 50 60 13", // ← Change ici
  linkedin: "linkedin.com/in/...", // ← Change ici
  twitter: "https://x.com/...", // ← Change ici
};
```

### Ajouter un nouveau projet

Dans `src/App.jsx`, ajoute un objet dans le tableau `projects` :

```jsx
{
  id: 7,
  title: "Titre du projet",
  category: "Reportage",  // ou "Photographie" ou "Community Management"
  description: "Description du projet...",
  link: "https://lien-externe.com",  // ou "#" si pas de lien
  image: "/ton-image.jpg",
  date: "2026",
  tags: ["Tag1", "Tag2", "Tag3"],
  featured: false  // true pour badge ⭐ Featured
}
```

---

## 🌐 Déployer en ligne (GRATUIT)

### Option 1 : Vercel (recommandé - le plus simple)

1. Crée un compte sur **https://vercel.com** (gratuit)
2. Connecte ton compte GitHub
3. Clique sur **"New Project"**
4. Importe ton fork de `portfolio-nejib`
5. Vercel déploie automatiquement
6. Tu obtiens une URL personnalisée : `ton-nom.vercel.app`

**Avantage** : Mise à jour automatique à chaque modification sur GitHub

### Option 2 : GitHub Pages

**Étape 1 : Fork ce projet sur ton compte GitHub**

1. Clique sur **"Fork"** en haut à droite de ce repo
2. Le projet sera copié sur ton compte GitHub

**Étape 2 : Clone ton fork**

```bash
git clone https://github.com/TON-USERNAME/portfolio-nejib.git
cd portfolio-nejib
```

**Étape 3 : Installe gh-pages**

```bash
npm install --save-dev gh-pages
```

**Étape 4 : Configure package.json**

Ajoute dans `package.json` (remplace `TON-USERNAME` par ton nom d'utilisateur GitHub) :

```json
"homepage": "https://TON-USERNAME.github.io/portfolio-nejib",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

**Étape 5 : Configure vite.config.js**

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/portfolio-nejib/",
  plugins: [react()],
});
```

**Étape 6 : Déploie**

```bash
npm run deploy
```

Ton site sera sur : **https://TON-USERNAME.github.io/portfolio-nejib**

(Remplace `TON-USERNAME` par ton vrai nom d'utilisateur GitHub)

---

## 🛠️ Technologies utilisées

- **React 18** - Framework JavaScript
- **Vite** - Build tool moderne et rapide
- **Tailwind CSS** - Framework CSS utility-first
- **Lucide React** - Bibliothèque d'icônes
- **GitHub Pages / Vercel** - Hébergement gratuit

---

## 📦 Structure du projet

```
portfolio-nejib/
├── public/              ← Images et assets statiques (mets tes photos ici)
├── src/
│   ├── App.jsx         ← Code principal du portfolio (modifie ici)
│   ├── index.css       ← Styles Tailwind
│   └── main.jsx        ← Point d'entrée React
├── package.json        ← Dépendances npm
├── vite.config.js      ← Configuration Vite
├── tailwind.config.js  ← Configuration Tailwind
└── README.md           ← Ce fichier
```

---

## ❓ Problèmes courants

### ❌ `npm: command not found`

→ Installe Node.js : https://nodejs.org/

### ❌ Les images ne s'affichent pas

→ Vérifie qu'elles sont dans `public/`  
→ Vérifie les chemins : `/image.jpg` (avec `/` au début)  
→ Vérifie le nom exact (majuscules/minuscules)

### ❌ Le mode sombre ne fonctionne pas

→ Vérifie que `darkMode: 'class'` est dans `tailwind.config.js`

### ❌ Erreur lors de `npm install`

→ Supprime `node_modules` et `package-lock.json`  
→ Relance `npm install`

### ❌ Le site ne se met pas à jour

→ Recharge avec `Ctrl + F5`  
→ Arrête le serveur (`Ctrl + C`) et relance `npm run dev`

---

## 📞 Besoin d'aide ?

Si tu rencontres un problème :

1. Vérifie que Node.js est bien installé : `node -v`
2. Vérifie que les dépendances sont installées : `npm install`
3. Consulte les "Problèmes courants" ci-dessus

---

## 📄 Licence

© 2026 Néjib Khalfi. Tous droits réservés.
