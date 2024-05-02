'use client';

import {useState} from "react";
import {Sheet, SheetContent, SheetTrigger} from "./ui/sheet";
import {Button} from "./ui/button";
import {MobileLink} from "./mobile-link";
import {getNavConfig} from "@/config/nav-config";
import {ScrollArea} from "./ui/scroll-area";
import {siteMetadata} from "@/config/site-metadata";
import { Icons } from "./icons";
import {Logo} from "@/app/(marketing)/_components/logo";
import {cn} from "@/lib/utils";

export const MobileNav = () => {

    const [isOpen, setIsOpen] = useState(false);
    const {sidebar: sideBarNav} = getNavConfig();

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <Button
                    variant="ghost"
                    className="mr-4 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                >
                    <svg
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 transform rotate-180"
                    >
                        <path
                            d="M3 5H11"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            d="M3 12H16"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            d="M3 19H21"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                    </svg>
                    <span className="sr-only">Toggle Menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className={
                cn(
                    "bg-background/85",
                    "w-full max-w-[90vw] md:max-w-[400px]",
                    "transition-transform duration-300 ease-in-out",
                )
            }>
                <MobileLink
                    href="/"
                    className="flex items-center"
                    onOpenChange={setIsOpen}
                >
                    <Logo width={100} height={100}/>
                </MobileLink>


                <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
                    <div className="flex flex-col space-y-3">
                        {sideBarNav.map(
                            (item) =>
                                item.href && (
                                    <MobileLink
                                        key={item.href}
                                        href={item.href}
                                        onOpenChange={setIsOpen}
                                        className="hover:bg-accent hover:text-accent-foreground p-2 rounded-3xl transition-colors w-6/12">


                                        {item.title}
                                    </MobileLink>
                                )
                        )}
                    </div>
                </ScrollArea>
            </SheetContent>
        </Sheet>
    );

};

