# Portfolio

Présentation personnelle et site portfolio construit avec Next.js, TypeScript et Tailwind CSS.

## Aperçu

Site statique/SSR pour présenter des projets, compétences et formulaire de contact.

## Technologies

- Next.js (app router)
- TypeScript
- Tailwind CSS

## Installation

Prérequis: Node.js 18+ et un gestionnaire de paquets (npm, pnpm ou yarn).

1. Installer les dépendances:

```bash
npm install
# ou
pnpm install
```

# Portfolio

Persönliche Präsentation und Portfolio-Website, erstellt mit Next.js, TypeScript und Tailwind CSS.

## Überblick

Statische/SSR-Website zur Präsentation von Projekten, Fähigkeiten und einem Kontaktformular.

## Technologien

- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Installation

Voraussetzungen: Node.js 18+ und ein Paketmanager (npm, pnpm oder yarn).

1. Abhängigkeiten installieren:

```bash
npm install
# oder
pnpm install
```

2. Entwicklungsserver starten:

```bash
npm run dev
# oder
pnpm dev
```

Die Website ist unter http://localhost:3000 erreichbar.

## Nützliche Skripte

- `dev` : Startet den Server im Entwicklungsmodus
- `build` : Erstellt die Anwendung für die Produktion
- `start` : Startet die produktive Version
- `lint` : Führt Linter/Formatter aus (sofern konfiguriert)

## Wichtige Dateien

- Hauptseite: [app/page.tsx](app/page.tsx)
- Kontakt-API: [app/api/contact.ts](app/api/contact.ts)
- Komponenten: [components](components)

## Umgebungsvariablen

Wenn du das Kontaktformular oder externe Integrationen nutzt, erstelle eine `.env.local`-Datei im Stammverzeichnis und füge die erforderlichen Schlüssel hinzu (z. B. API-Key für einen E-Mail-Dienst). Siehe [app/api/contact.ts](app/api/contact.ts) für die erwarteten Variablen.

## Deployment

Bereitstellung auf Vercel, Netlify oder jedem anderen Next.js-kompatiblen Dienst. Für einen lokalen Produktionstest:

```bash
npm run build
npm start
```

## Mitwirken

Reiche Issues oder Pull Requests ein, um Inhalte zu korrigieren oder zu erweitern. Bitte halte dich an die Formatierungsregeln sowie die TypeScript-/Tailwind-Konventionen des Projekts.

## Lizenz

Noch festzulegen (standardmäßig MIT, falls gewünscht).

## Erste Schritte

Entwicklungsserver starten:

```bash
npm run dev
```

Öffne http://localhost:3000 in deinem Browser, um das Ergebnis zu sehen. Du kannst die Seite bearbeiten, indem du `app/page.tsx` änderst — die Seite aktualisiert sich automatisch.

## Weiterführende Ressourcen

- [Next.js Dokumentation](https://nextjs.org/docs)
- [Next.js Learn](https://nextjs.org/learn)

## Deployment auf Vercel

Der einfachste Weg, deine Next.js-App zu deployen, ist die Nutzung von Vercel: https://vercel.com/new

Mehr Details findest du in der Next.js-Dokumentation zum Deployment: https://nextjs.org/docs/app/building-your-application/deploying
