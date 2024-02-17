import Link from "next/link";
import {Button} from "@/components/ui/button";
import SvgBackground from "@/components/svg-background";
import Image from "next/image";

import {Poppins} from 'next/font/google';
import {getDictionary} from "@/lib/dictionary";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600"]
});

interface HeroProps {
    dictionary: Awaited<ReturnType<typeof getDictionary>>["landing"]
}

export const Hero = ({
                         dictionary
                     }: HeroProps) => {

    const {
        announcement,
        h1,
        button_lets_talk,
        h1_remark_word,
        image_alt,
        p_description
    } = dictionary.hero

    return (

        <>
            <main
                className={`isolate container grid lg:grid-cols-2 place-items-center pt-32 md:pb-24 px-4 md:px-10 ${poppins.className}`}>
                <SvgBackground/>
                <div className="py-6 md:order-1 hidden md:block">
                    <Image
                        src="/static/images/marketing/light_hero_building_websites_v1.svg"
                        alt={image_alt}
                        height={440}
                        width={440}
                        priority={true}
                        className="rounded-3xl shadow-md"
                    />
                </div>

                <aside>
                    <div className="hidden sm:mb-8 sm:flex sm:justify-start">
                        <div
                            className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                            {announcement.question} {' '}
                            <Link href="/contact" className="font-semibold text-indigo-600">
                                <span className="absolute inset-0" aria-hidden="true"/>
                                {announcement.contactus} <span aria-hidden="true">&rarr;</span>
                            </Link>
                        </div>
                    </div>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
                        {h1} {` `} <span
                        className="tracking-tight inline from-[#FF1CF7] to-[#b249f8] bg-clip-text text-transparent bg-gradient-to-b">{h1_remark_word}</span>
                    </h1>
                    <p className="mt-6 text-xl text-gray-600 dark:text-gray-400">
                        {p_description}
                    </p>
                    <div className="mt-6 flex flex-col sm:flex-row gap-3">
                        <Button asChild variant="default"
                                className="rounded-3xl transition ease-in-out delay-150 hover:-translate-y-1 scale-105 font-bold"
                                size="lg">
                            <Link
                                href="/contact"
                                aria-label="Let's Talk"
                            >
                                {button_lets_talk}
                            </Link>
                        </Button>
                    </div>
                </aside>
            </main>
        </>
    );
}