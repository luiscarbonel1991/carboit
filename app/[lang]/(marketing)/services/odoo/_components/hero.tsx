import Link from 'next/link'
import {whatsappURL} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {getDictionary} from "@/lib/dictionary";
import {Send} from "lucide-react";

interface HeroProps {
    dictionary: Awaited<ReturnType<typeof getDictionary>>["odoo"]
}

export const Hero = ({dictionary}: HeroProps) => {

    const {hero, modules} = dictionary
    return (
        <section className="mx-auto max-w-2xl py-14 sm:py-24 lg:py-32">
            <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-6xl">
                    {hero.h1} <span className="text-primary-500">
                    <span
                        className="tracking-tight inline from-[#FF1CF7] to-[#b249f8] bg-clip-text text-transparent bg-gradient-to-b">
                        {hero.h1_remark_word}
                    </span>
                    {' '}
                    {hero.h1_rest}
                </span>
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
                    {hero.p_description}
                </p>

                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link
                        href={whatsappURL()}
                        aria-label="Let's Talk on WhatsApp"
                    >
                        <Button variant="default"
                                aria-label="Let's Talk on WhatsApp"
                                className="rounded-3xl transition ease-in-out delay-150 hover:-translate-y-1 scale-105 font-bold bg-gradient-to-r from-blue-600 to-purple-600"
                                size="lg">

                            {hero.button_lets_talk} <Send className="ml-2 h-6 w-6 animate-pulse"/>

                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}