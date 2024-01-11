"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {getNavConfig} from "@/config/nav-config";

const MainNav = () => {

    const pathname = usePathname();
    const {main: mainNav} = getNavConfig()

    return (
        <nav className="md:ml-auto justify-end  w-full flex items-center gap-x-2">
            {
                mainNav
                    .filter(item => item.href != '/contact')
                    .map((item, index) => {
                            return (
                                <Button asChild variant="ghost" size="sm"
                                        className={cn(
                                            "hidden md:flex rounded-3xl transition-transform hover:text-foreground/80 hover:translate-y-[-1px] hover:scale-[1.01] hover:border-b-2 hover:border-primary",
                                            pathname === item.href ? "text-foreground" : "text-foreground/60"
                                        )}
                                        key={index}
                                >
                                    <Link href={item.href ?? '/'}>{item.title}</Link>
                                </Button>
                            )
                        }
                    )
            }

            <Button asChild variant="default" size="sm"
                    className="rounded-3xl shadow-2xl transition-transform hover:translate-y-[-1px] hover:scale-[1.01] hover:border-b-2 hover:border-primary">
                <Link href={"/contact"}>Contact us</Link>
            </Button>

        </nav>


    );
};

export default MainNav;