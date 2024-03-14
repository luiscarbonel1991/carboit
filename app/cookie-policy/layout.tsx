import {cn, getSiteMetadata} from "@/lib/utils";
import {Inter} from "next/font/google";
import type {Metadata, Viewport} from "next";
import '../globals.css'
import Header from "@/app/[lang]/(marketing)/_components/header";
import Footer from "@/app/[lang]/(marketing)/_components/footer";
import dynamic from "next/dynamic";


const CookieBanner = dynamic(() => import('@/components/cookie-banner'), {ssr: false})


const inter = Inter({subsets: ['latin']})
export const viewport: Viewport = {
    themeColor: [
        {media: "(prefers-color-scheme: light)", color: "white"},
        {media: "(prefers-color-scheme: dark)", color: "black"},
    ],
}


export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body data-theme={"light"} className={
            cn(
                "min-h-screen bg-background font-sans antialiased",
                inter.className
            )
        }>
        <Header lang={"en"}/>
        <div vaul-drawer-wrapper="">
            {children}
        </div>
        <Footer lang={"en"}/>
        <CookieBanner />
        </body>
        </html>
    )
}

export const metadata: Metadata = getSiteMetadata({})
