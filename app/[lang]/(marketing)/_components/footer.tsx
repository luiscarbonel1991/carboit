import {Button} from "@/components/ui/button";
import {Icons} from "@/components/icons";

import Link from "next/link";
import {siteMetadata} from "@/config/site-metadata";
import {Locale} from "@/i18n-config";
import {redirectPathURL} from "@/lib/utils";

interface FooterProps {
    lang: Locale
}

const Footer = ({lang}: FooterProps) => {
    return (
        <footer className="container flex items-center w-full p-6 bg-background z-50 dark:bg-[#1F1F1F]">
            <div className="mr-4 hidden md:flex w-full">
                <Link href={redirectPathURL(lang, '/')} className="mr-6 flex items-center space-x-2">
                    <Icons.logo className="h-6 w-6"/>
                    <span className="hidden font-bold sm:inline-block">
                    {siteMetadata.applicationName}
                </span>
                </Link>
            </div>
            <div
                className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
                <Link href="/privacy-policy">
                    <Button variant="ghost" size="sm">
                        Privacy Policy
                    </Button>
                </Link>
                {/* <Button variant="ghost" size="sm">
                    Terms & Conditions
                </Button>*/}
            </div>
        </footer>
    )
}

export default Footer;