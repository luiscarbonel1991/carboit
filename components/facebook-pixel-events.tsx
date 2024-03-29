"use client";
import {usePathname, useSearchParams} from "next/navigation";
import {useEffect} from "react";

const FacebookPixelEvents = () => {

    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        import('react-facebook-pixel')
            .then((x) => x.default)
            .then((ReactFacebookPixel) => {
                console.log('Facebook Pixel loaded');
                ReactFacebookPixel.init(process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID!);
                ReactFacebookPixel.pageView();
            });
    }, [pathname, searchParams]);

    return null;
}

export default FacebookPixelEvents;