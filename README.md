# TD TypeScript — Car

Petit projet **TypeScript**:
- une **classe** `Car` (propriétés, constructeur, `start`, `stop`, `accelerate`, `describe`)
- un **module** qui l’utilise (`Main.ts`)
- une **course** en plusieurs tours avec des **aléas** 

## Fichiers
- `Car.ts` : classe `Car`
- `types.ts` : types simples (`EventName`, `RaceConfig`)
- `utils.ts` : fonctions utilitaires (aléatoire, libellé, temps au tour)
- `events.ts` : tirage et application des aléas
- `race.ts` : logique d’un tour + classement
- `Main.ts` : point d’entrée (crée 3 voitures, lance la course)
- `.gitignore` : ignore `*.js` 

## Prérequis
- **Node.js** installé

## Installer TypeScript 

- npm install -g typescript
- tsc -v


## Lancer
- se placer dans le dossier du projet
- tsc --target ES2020 --module commonjs Car.ts types.ts utils.ts events.ts race.ts Main.ts
- node Main.js
