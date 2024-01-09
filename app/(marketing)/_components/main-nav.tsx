"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const MainNav = () => {

    const pathname = usePathname();

    return (
        <nav className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
            <Button asChild variant="ghost" size="sm"
                className={cn(
                    "rounded-3xl transition-transform hover:text-foreground/80 hover:translate-y-[-1px] hover:scale-[1.01] hover:border-b-2 hover:border-primary",
                    pathname === "/services" ? "text-foreground" : "text-foreground/60"
                )}
            >
                <Link href={"/services"}>Services</Link>
            </Button>
            <Button asChild variant="ghost" size="sm"
                className={cn(
                    "rounded-3xl transition-transform hover:text-foreground/80 hover:translate-y-[-1px] hover:scale-[1.01] hover:border-b-2 hover:border-primary",
                    pathname === "/testimonials" ? "text-foreground" : "text-foreground/60"
                )}
            >
                <Link href={"/testimonials"}>Testimonial</Link>
            </Button>
            <Button asChild variant="ghost" size="sm" 
                className={cn(
                    "rounded-3xl transition-transform hover:text-foreground/80 hover:translate-y-[-1px] hover:scale-[1.01] hover:border-b-2 hover:border-primary",
                    pathname === "/team" ? "text-foreground" : "text-foreground/60"
                )}
            >
                <Link href={"/team"}>Team</Link>
            </Button>
            <Button asChild variant="default" size="sm" className="rounded-3xl shadow-2xl transition-transform hover:translate-y-[-1px] hover:scale-[1.01] hover:border-b-2 hover:border-primary">
                <Link href={"/contact"}>Contact us</Link>
            </Button>
            
        </nav>


    );
};

export default MainNav;