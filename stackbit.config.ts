import { defineStackbitConfig } from '@stackbit/types';

export default defineStackbitConfig({
    "stackbitVersion": "~0.6.0",        // Cette version est correcte
    "nodeVersion": "18",                // Vérifie si c'est bien la version compatible
    "ssgName": "custom",                // Assure-toi que tu utilises bien la bonne configuration pour ton générateur de site statique (SSG)
    "contentSources": [
        {
            "name": "github",
            "url": "https://github.com/ton-utilisateur/ton-depot", // Remplace par l'URL de ton dépôt GitHub
            "branch": "main"  // Vérifie que tu travailles sur la bonne branche, ici "main"
        }
    ],
    "postInstallCommand": "npm i --no-save @stackbit/types"
});
