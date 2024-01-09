import Link from "next/link";
import { Icons } from "./icons";
import { siteConfig } from "@/config/site";


export const Logo = () => {
    return (
        <Link href="/" className="hidden mr-6 md:flex items-center space-x-2 w-full">
            <Icons.logo className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">
                {siteConfig.name}
            </span>
        </Link>
    );
};