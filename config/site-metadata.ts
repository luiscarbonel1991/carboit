import {Metadata} from "next";
import {siteKeywords} from "@/config/site-keywork";

export const thirdParties = {
    google: {
        tagManager: {
            id: 'GTM-MB2DJVS3'
        },
        analytics: {
            id: 'G-43NCH6MD9S'
        }
    }

}


interface Author {
    name: string;
    url: string;
    github: string;
}

export interface SiteMetadata extends Metadata {
    applicationName: string;
    title: string | {
        default: string;
        template: string;
    };
    description: string;
    language: string;
    siteUrl: string;
    ogImage: string;
    socialBanner: string;
    keywords: string[];
    authors: Author[];
    videos?: string[];
}

const siteUrl = 'https://carboit.com';

const keywords: string[] = [
    ...siteKeywords
];

const siteAuthors: Author[] = [
    {
        name: 'Carboit',
        url: siteUrl,
        github: ''
    },
    {
        name: 'DevLach',
        url: 'https://devlach.com',
        github: ''
    }
]


export const siteMetadata = {
    applicationName: 'Carboit',
    title: {
        default: 'Carboit',
        template: '%s | Carboit'
    },
    description: 'Carboit: Where technology meets ambition. Custom software solutions designed to accelerate growth and operational efficiency for your business.',
    siteUrl: siteUrl,
    ogImage: `${siteUrl}/og-image.webp`,
    socialBanner: `${siteUrl}/social-banner.webp`,
    keywords: keywords,
    authors: siteAuthors,
    theme: 'light',
    language: "en-us",
    themes: [
        {
            name: 'light',
            theme: 'light'
        },
        {
            name: 'dark',
            theme: 'dark'
        }
    ],
    videos: [`${siteUrl}/static/videos/marketing/hero/have_an_idea-en.mp4`]
} as SiteMetadata;