import Link from "next/link";
import {Icons} from "./icons";
import {siteMetadata} from "@/config/site-metadata";


export const Logo = () => {
    return (
        <Link href="/" className="mr-6 flex items-center space-x-2 w-full">
            <Icons.logo className="h-6 w-6"/>
            <span className="text-lg font-bold sm:inline-block">
                {siteMetadata.applicationName}
            </span>
        </Link>
    );
};