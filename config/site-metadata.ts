import {Metadata} from "next";
import {siteKeywords} from "@/config/site-keywork";

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
    siteUrl: string;
    ogImage: string;
    socialBanner: string;
    keywords: string[];
    authors: Author[];
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
    themes: [
        {
            name: 'light',
            theme: 'light'
        },
        {
            name: 'dark',
            theme: 'dark'
        }
    ]
} as SiteMetadata;