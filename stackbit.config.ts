import { defineStackbitConfig } from '@stackbit/types';

export default defineStackbitConfig({
    "stackbitVersion": "~0.6.0",
    "nodeVersion": "18",
    "ssgName": "custom",
    "contentSources": [
        {
            name: "pages",
            model: {
                type: "list",
                name: "pages",
                fields: [
                    {
                        name: "title",
                        type: "string",
                        required: true
                    },
                    {
                        name: "slug",
                        type: "string",
                        required: true
                    },
                    {
                        name: "image",
                        type: "image",
                        required: false
                    },
                    {
                        name: "content",
                        type: "text",
                        required: true
                    }
                ]
            },
            data: [
                {
                    title: "Accueil",
                    slug: "/",
                    image: "assets/fondhome.jpg",
                    content: "Page d'accueil avec du contenu personnalisé."
                },
                {
                    title: "À propos",
                    slug: "/about",
                    image: "assets/fondindex.gif",
                    content: "Information sur l'association Débrouillez-vous."
                },
                {
                    title: "Contact",
                    slug: "/contact",
                    image: "assets/fondindex.gif",
                    content: "Formulaire de contact."
                },
                {
                    title: "Jeu",
                    slug: "/game",
                    image: "assets/fondindex.gif",
                    content: "Jeu interactif de type arcade."
                },
                {
                    title: "Agenda",
                    slug: "/shop",
                    image: "assets/fondhome.jpg",
                    content: "Page de l'agenda avec les dates importantes."
                }
            ]
        }
    ],
    "postInstallCommand": "npm i --no-save @stackbit/types"
});
