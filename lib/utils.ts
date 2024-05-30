import { type ClassValue, clsx } from "clsx"
import { Metadata } from "next"
import { twMerge } from "tailwind-merge"
import { siteMetadata } from "@/config/site-metadata"
import { Locale } from "@/i18n-config"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface SEOProps {
  title?:
    | string
    | {
        default: string
        template: string
      }
  description?: string
  keywords?: string[]
  image?: string
  [key: string]: any
}

const defaultSEO: SEOProps = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  image: siteMetadata.socialBanner
}

export const getSiteMetadata = ({
  title = siteMetadata.title,
  description = siteMetadata.description,
  keywords = siteMetadata.keywords,
  image = siteMetadata.socialBanner,
  ...rest
}: SEOProps = defaultSEO) => {
  const metadata = {
    ...siteMetadata,
    title,
    description,
    keywords,
    metadataBase: siteMetadata.siteUrl ? new URL(siteMetadata.siteUrl) : undefined,
    creator: siteMetadata.authors[0].name,
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "./",
      site_name: siteMetadata.applicationName,
      images: [image],
      siteName: siteMetadata.applicationName,
      title: title,
      videos: siteMetadata.videos ? siteMetadata.videos.map((video) => ({ url: video })) : undefined
    },
    twitter: {
      title: title,
      card: "summary_large_image",
      images: [image]
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon-16x16.png",
      apple: "/apple-touch-icon.png",
      other: [
        {
          url: "/favicon-32x32.png",
          rel: "icon",
          type: "image/png",
          sizes: "32x32"
        },
        {
          url: "/favicon-512x512.png",
          rel: "icon",
          type: "image/png",
          sizes: "512x512"
        }
      ]
    },
    alternates: {
      canonical: "./",
      types: {
        "application/rss+xml": `${siteMetadata.siteUrl}/feed.xml`
      }
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1
      }
    },
    manifest: `${siteMetadata.siteUrl}/site.webmanifest`,
    ...rest
  } as Metadata

  return metadata
}

export const redirectPathURL = (locale: Locale, pathname: string = "") => {
  if (!pathname || pathname === "/") return `/${locale}`
  const segments = pathname.split("/")
  if (segments.length > 1 && segments[1] !== locale) {
    segments.splice(1, 0, locale)
  }
  return segments.join("/")
}

export const whatsappURL = (
  phone: string = "15126320948",
  message: string = "Hello, I would interested in your services!"
) => {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}

export const instagramURL = (username: string = "carbo.it") => {
  return `https://instagram.com/${username}`
}

export function getLocalStorage(key: string, defaultValue: any) {
  const stickyValue = localStorage.getItem(key)

  return stickyValue !== null && stickyValue !== "undefined" ? JSON.parse(stickyValue) : defaultValue
}

export function setLocalStorage(key: string, value: any) {
  localStorage.setItem(key, JSON.stringify(value))
}
