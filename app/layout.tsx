import type {Metadata, Viewport} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import {cn, getSiteMetadata} from '@/lib/utils'
import {Toaster} from "@/components/ui/toaster"
import {siteMetadata, thirdParties} from "@/config/site-metadata";
import dynamic from "next/dynamic";
import FloatingButtons from "@/components/floating-buttons";
import {GoogleTagManager} from "@next/third-parties/google";
import Script from "next/script";
import Footer from "@/app/(marketing)/_components/footer";


const CookieBanner = dynamic(() => import('@/components/cookie-banner'), {ssr: false})

const {tagManager} = thirdParties.google


const inter = Inter({subsets: ['latin']})

export const viewport: Viewport = {
    themeColor: [
        {media: "(prefers-color-scheme: light)", color: "white"},
        {media: "(prefers-color-scheme: dark)", color: "black"},
    ],
}

interface RootLayoutProps {
    children: React.ReactNode
}

export default function RootLayout({
                                       children
                                   }: Readonly<RootLayoutProps>) {
    return (
        <html lang={siteMetadata.language} className={"scroll-smooth"} suppressHydrationWarning>

        <Script
            id="facebook-pixel"
            async={true}
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}');
            fbq('track', 'PageView');
          `,
            }}
        />

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
        <Footer/>
        </body>
        <GoogleTagManager gtmId={tagManager.id}/>
        </html>
    )
}

export const metadata: Metadata = {
    ...getSiteMetadata(),
}


