import Link from "next/link";
import {Icons} from "@/components/icons";
import {siteMetadata} from "@/config/site-metadata";
import {Locale} from "@/i18n-config";
import {redirectPathURL} from "@/lib/utils";


export const Logo = ({lang}: { lang: Locale }) => {
    return (
        <Link href={redirectPathURL(lang)} className="mr-6 flex items-center space-x-2 w-full">
            <Icons.logo className="h-6 w-6"/>
            <span className="text-lg font-bold sm:inline-block">
                {siteMetadata.applicationName}
            </span>
        </Link>
    );
};