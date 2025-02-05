import { defineStackbitConfig } from '@stackbit/types';

export default defineStackbitConfig({
    stackbitVersion: "~0.6.0",
    nodeVersion: "18",
    ssgName: "custom",
    contentSources: [
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
                        name: "imageBefore",
                        type: "image",
                        required: false
                    },
                    {
                        name: "imageAfter",
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
                    imageBefore: "/assets/fondindex.gif",  // Assurez-vous que ces images sont au bon endroit
                    imageAfter: "/assets/fondhome.jpg",    // Assurez-vous que ces images sont au bon endroit
                    content: "Page d'accueil avec du contenu personnalisé. Vous serez redirigé après avoir entré le mot de passe."
                },
                {
                    title: "À propos",
                    slug: "/about",
                    imageBefore: "/assets/fondindex.gif",
                    imageAfter: "/assets/fondindex.gif",  // Fond identique avant et après
                    content: "Information sur l'association Débrouillez-vous."
                },
                {
                    title: "Contact",
                    slug: "/contact",
                    imageBefore: "/assets/fondindex.gif",
                    imageAfter: "/assets/fondindex.gif",
                    content: "Formulaire de contact."
                },
                {
                    title: "Jeu",
                    slug: "/game",
                    imageBefore: "/assets/fondindex.gif",
                    imageAfter: "/assets/fondindex.gif",
                    content: "Jeu interactif de type arcade."
                },
                {
                    title: "Agenda",
                    slug: "/shop",
                    imageBefore: "/assets/fondhome.jpg",  // Assurez-vous que ces images sont au bon endroit
                    imageAfter: "/assets/fondhome.jpg",    // Assurez-vous que ces images sont au bon endroit
                    content: "Page de l'agenda avec les dates importantes."
                }
            ]
        }
    ],
    postInstallCommand: "npm i --no-save @stackbit/types"
});
