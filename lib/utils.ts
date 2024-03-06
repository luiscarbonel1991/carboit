
import { type ClassValue, clsx } from "clsx"
import { Metadata } from "next"
import { twMerge } from "tailwind-merge"
import {siteMetadata} from "@/config/site-metadata";
import { Locale } from "@/i18n-config";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getSiteMetadata = () => {
  return {
    ...siteMetadata,
    metadataBase: siteMetadata.siteUrl ? new URL(siteMetadata.siteUrl) : undefined,
    creator: siteMetadata.authors[0].name,
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: siteMetadata.siteUrl,
      site_name: siteMetadata.title,
      images: [
        {
          url: siteMetadata.ogImage,
          width: 1200,
          height: 630,
          alt: siteMetadata.title,
        },
      ],
    },
    alternates: {
      canonical: './',
      types: {
        'application/rss+xml': `${siteMetadata.siteUrl}/feed.xml`,
      },
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon-16x16.png",
      apple: "/apple-touch-icon.png",
    },
    manifest: `${siteMetadata.siteUrl}/site.webmanifest`,
  } as Metadata
}


export const redirectPathURL = (locale: Locale, pathname: string = "") => {
  if(!pathname || pathname === "/") return `/${locale}`;
  const segments = pathname.split("/");
  if (segments.length > 1 && segments[1] !== locale) {
    segments.splice(1, 0, locale); 
  }
  return segments.join("/");
}
