import { siteKeywords } from "./site-keywork";

export const siteConfig = {
    name: 'My Site',
    description: 'My site description',
    siteUrl: process.env.WEB_SITE_URL!, // Add your own URL
    ogImage: `${process.env.WEB_SITE_URL}/og-image.png`, // Add your own image in the /public folder
    socialNetworks: { // Add your own social networks
        facebook: 'https://facebook.com/my-site',
        instagram: 'https://instagram.com/my-site',
        twitter: 'https://twitter.com/my-site',
        youtube: 'https://youtube.com/my-site',
    },
    keywords: siteKeywords, // Defined in config/site-keywords.ts
    authors: [ // Add your own authors
        {
            name: 'DevLach',
            url: 'https://devlach.com',
        }
    ]
};

export type SiteConfig = typeof siteConfig;