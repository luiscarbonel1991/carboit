import type {Metadata, Viewport} from 'next'
import {Inter} from 'next/font/google'
import '../globals.css'
import {cn, getSiteMetadata} from '@/lib/utils'
import {Toaster} from "@/components/ui/toaster"
import {i18n, Locale} from "@/i18n-config";
import {thirdParties} from "@/config/site-metadata";
import {getDictionary} from "@/lib/dictionary";
import dynamic from "next/dynamic";
import FloatingButtons from "@/components/floating-buttons";
import {GoogleTagManager} from "@next/third-parties/google";
import Script from "next/script";
import FacebookPixelEvents from "@/components/facebook-pixel-events";
import {Suspense} from "react";


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


       {/* <Script id="google-tag-manager" strategy="afterInteractive">
            {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${tagManager.id}');
        `}
        </Script>*/}
       <GoogleTagManager gtmId={tagManager.id}/>

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
        <Suspense fallback={null}>
            <FacebookPixelEvents/>
        </Suspense>
        </body>
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
            canonical: '/',
            languages: {
                en: '/en',
                es: '/es',
            },
        },

    } as Metadata
}



