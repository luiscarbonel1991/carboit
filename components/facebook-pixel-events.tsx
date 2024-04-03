"use client";

import {usePathname, useSearchParams} from "next/navigation";
import {useEffect} from "react";
import {hasCookie} from "cookies-next";

const options = {
    autoConfig: false, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
    debug: true, // enable logs
};



const advancedMatching = undefined;


const FacebookPixelEvents = () => {

    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        import('react-facebook-pixel')
            .then(module => module.default)
            .then(ReactPixel => {
               if(typeof window !== 'undefined') {
                   ReactPixel.init(process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID!, advancedMatching, options);
                   ReactPixel.pageView();
                   ReactPixel.fbq('track', 'PageView');
                   if (hasCookie("localConsent")) {
                       ReactPixel.grantConsent();
                   } else {
                       ReactPixel.revokeConsent();
                   }
               }
            });
    }, [pathname, searchParams]);

    return null;
}

export default FacebookPixelEvents;