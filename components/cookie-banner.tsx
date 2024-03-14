"use client";
import Link from "next/link";
import {useEffect, useState} from "react";
import {hasCookie, setCookie} from "cookies-next";
import {Button} from "@/components/ui/button";
import {Card, CardFooter, CardHeader} from "@/components/ui/card";

export default function CookieBanner() {
    const [showConsent, setShowConsent] = useState(true);

    useEffect(() => {
        setShowConsent(hasCookie("localConsent"));
    }, []);

    const acceptCookie = () => {
        setShowConsent(true);
        setCookie("localConsent", "true", {});
    };

    if (showConsent) {
        return null;
    }

    return (
        <Card
            className="fixed inset-x-0 bottom-0 z-20 max-w-60 bg-secondary backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <CardHeader>
                <p className="text-sm leading-6 text-gray-900">
                    We use cookies {" "}
                    <Link className="font-semibold text-[#8A2BE2]"
                          aria-label="Learn more about cookies"
                          href="/cookie-policy">
                        Learn more
                    </Link>
                </p>
            </CardHeader>
            <CardFooter>
                <Button
                    onClick={acceptCookie}
                    type="button"
                    className="rounded-full bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                >
                    Accept 🍪
                </Button>
            </CardFooter>
        </Card>
    );
}
