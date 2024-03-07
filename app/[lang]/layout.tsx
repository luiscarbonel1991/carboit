import type {Metadata, Viewport} from 'next'
import {Inter} from 'next/font/google'
import '../globals.css'
import {cn, getSiteMetadata} from '@/lib/utils'
import {Toaster} from "@/components/ui/toaster"
import {i18n, Locale} from "@/i18n-config";

import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'
import {thirdParties} from "@/config/site-metadata";

const {tagManager, analytics} = thirdParties.google

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


export default function RootLayout({
                                       children,
                                       params
                                   }: {
    children: React.ReactNode,
    params: { lang: Locale }
}) {
    return (
        <html lang={params.lang} suppressHydrationWarning>
        <body data-theme={"light"} className={
            cn(
                "min-h-screen bg-background font-sans antialiased",
                inter.className
            )
        }>
        <div vaul-drawer-wrapper="">
            {children}
        </div>
        <Toaster/>
        </body>
        <GoogleTagManager gtmId={tagManager.id}/>
        {/*<GoogleAnalytics  gaId={analytics.id} />*/}
        </html>
    )
}

export const metadata: Metadata = getSiteMetadata({})


