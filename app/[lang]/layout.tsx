import type {Metadata, Viewport} from 'next'
import {Inter} from 'next/font/google'
import '../globals.css'
import {cn, getSiteMetadata} from '@/lib/utils'
import {Toaster} from "@/components/ui/toaster"
import {i18n, Locale} from "@/i18n-config";

import {GoogleTagManager} from '@next/third-parties/google'
import {thirdParties} from "@/config/site-metadata";
import {getDictionary} from "@/lib/dictionary";
import dynamic from "next/dynamic";
import FloatingButtons from "@/components/floating-buttons";


const CookieBanner = dynamic(() => import('@/components/cookie-banner'), {ssr: false})

const {tagManager} = thirdParties.google

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({lang: locale}));
}


const inter = Inter({subsets: ['latin']})

export const viewport: Viewport = {
    themeColor: [
        {media: "(prefers-color-scheme: light)", color: "white"},
        {media: "(prefers-color-scheme: dark)", color: "black"},
    ],
}

interface RootLayoutProps {
    children: React.ReactNode
    params: { lang: Locale }
}

export default function RootLayout({
                                       children,
                                       params
                                   }: Readonly<RootLayoutProps>) {
    return (
        <html lang={params.lang} className={"scroll-smooth"} suppressHydrationWarning>
        <body data-theme={"light"} className={
            cn(
                "min-h-screen bg-background font-sans antialiased",
                inter.className
            )
        }>
        {children}
        <Toaster/>
        <CookieBanner/>
        <FloatingButtons/>
        </body>
        <GoogleTagManager  gtmId={tagManager.id}/>
        </html>
    )
}

export async function generateMetadata({params}: { params: { lang: Locale } }) {

    const {landing} = await getDictionary(params.lang)
    const {seo} = landing
    return {
        ...getSiteMetadata({
            title: seo.title,
            description: seo.description,
        }),
        alternates: {
            canonical: '/en',
            languages: {
                en: '/en',
                es: '/es',
            },
        }
    } as Metadata
}



