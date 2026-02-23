# CashMoov - Application Web

Application web officielle de CashMoov, solution de transfert d'argent et de paiement mobile pensée pour l'Afrique.

## À propos

CashMoov est une plateforme de mobile money qui tient compte des besoins et des réalités des populations guinéennes et africaines. Forte de plus de 12 ans d'expérience sur le marché africain, l'entreprise propose des services simples, rapides, sécurisés et économiques.

## Fonctionnalités

### Pour les particuliers
- Transfert d'argent national et international
- Paiement de factures
- Achat de crédit téléphonique
- Recharge de data via e-SIM
- Achat de cartes cadeaux (Gift cards)
- Réception de salaire

### Pour les entreprises
- Paiement de salaires
- Gestion de trésorerie
- Paiement de fournisseurs
- Transactions à volumes importants

### Espace administrateur
- Gestion des utilisateurs
- Suivi des conversations
- Analyse des feedbacks clients
- Tableau de bord statistiques

### Assistant virtuel
- Chat en temps réel avec les clients
- Gestion des conversations
- Interface dédiée pour les assistants

## Technologies utilisées

- React 19.1.0
- TypeScript 5.8.3
- Vite 6.3.5
- React Router DOM 7.6.1
- Tailwind CSS 4.1.7
- Framer Motion 12.31.0
- Axios 1.13.5
- React Hook Form 7.71.1
- Lucide React (icônes)
- React Icons
- Globe.gl (visualisation 3D)
- Leaflet & Mapbox (cartes)
- GSAP (animations)

## Prérequis

- Node.js (version 18 ou supérieure recommandée)
- npm ou yarn

## Installation

```bash
npm install
```

## Configuration

Créer un fichier `.env` à la racine du projet en se basant sur `.env.example`:

```bash
cp .env.example .env
```

Configurer les variables d'environnement nécessaires dans le fichier `.env`.

## Démarrage

### Mode développement

```bash
npm run dev
```

L'application sera accessible sur `http://localhost:5173`

### Build de production

```bash
npm run build
```

### Prévisualisation du build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## Structure du projet

```
src/
├── assets/          # Ressources statiques (images, fonts)
├── components/      # Composants React réutilisables
│   ├── cards/       # Composants de cartes
│   ├── common/      # Composants communs (Navbar, Footer, etc.)
│   ├── feedback/    # Composants de feedback
│   ├── forms/       # Formulaires
│   ├── modals/      # Modales
│   ├── sections/    # Sections de pages
│   └── sliders/     # Carrousels
├── constants/       # Constantes et données statiques
├── contexts/        # Contextes React (Auth, Notifications, etc.)
├── layouts/         # Layouts de pages
├── lib/             # Utilitaires et helpers
├── pages/           # Pages de l'application
│   ├── admin/       # Pages administrateur
│   ├── assistant/   # Pages assistant
│   └── auth/        # Pages d'authentification
├── types/           # Types TypeScript
├── utils/           # Fonctions utilitaires
├── App.tsx          # Composant principal
└── main.tsx         # Point d'entrée
```

## Pages principales

- `/` - Page d'accueil
- `/about` - À propos de CashMoov
- `/services-particuliers` - Services pour particuliers
- `/services-entreprises` - Services pour entreprises
- `/notre-reseau` - Réseau et couverture géographique
- `/contact` - Formulaire de contact
- `/download` - Téléchargement de l'application mobile
- `/admin/login` - Connexion
- `/admin/*` - Espace administrateur
- `/assistant/*` - Espace assistant

## Déploiement

Le projet est configuré pour être déployé sur Vercel via le fichier `vercel.json`.

## Licence

Propriétaire - CashMoov

## Contact

Pour toute question ou demande de partenariat, visitez notre page de contact sur le site web.
