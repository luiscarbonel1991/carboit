import Link from "next/link";
import {Button} from "@/components/ui/button";

import {Poppins} from 'next/font/google';
import {getDictionary} from "@/lib/dictionary";
import {Locale} from "@/i18n-config";
import {whatsappURL} from "@/lib/utils";
import {Send} from "lucide-react";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600"]
});

interface HeroProps {
    lang: Locale;
    dictionary: Awaited<ReturnType<typeof getDictionary>>["landing"];
}

export const Hero = ({
                         lang,
                         dictionary
                     }: HeroProps) => {

    const {
        announcement,
        h1,
        button_lets_talk,
        h1_remark_word,
        image_alt,
        video,
        p_description
    } = dictionary.hero

    return (

        <>
            <main
                className={`isolate container grid lg:grid-cols-2 place-items-center pt-20  px-4 md:px-10 ${poppins.className}`}>
                {/*<SvgBackground/>*/}
                <div className="py-6 md:order-1 md:block">
                    {/*<Image
                        src="/static/images/marketing/hero/hero_440x440.webp"
                        alt={image_alt}
                        height={440}
                        width={440}
                        priority={true}
                        className="rounded-2xl backdrop-sepia-0"
                    />*/}
                    <Link href={ '/contact'}
                          aria-label={announcement.question}
                    >
                        <video
                            autoPlay={true}
                            loop={true}
                            muted={true}
                            playsInline={true}
                            className="aspect-square rounded-2xl"
                            height={550}
                            width={550}
                            aria-label={video.alt}
                        >
                            <source src={video.source} type={video.type}/>
                        </video>
                    </Link>
                </div>

                <aside>
                    <div className="hidden sm:mb-8 sm:flex sm:justify-start">
                        <div
                            className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                            {announcement.question} {' '}
                            <Link href={'/contact'} className="font-semibold text-indigo-600">
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
                        {/*<Button asChild variant="default"
                                className="rounded-3xl transition ease-in-out delay-150 hover:-translate-y-1 scale-105 font-bold"
                                size="lg">
                            <Link
                                href={redirectPathURL(lang, '/contact')}
                                aria-label="Let's Talk"
                            >
                                {button_lets_talk}
                            </Link>
                        </Button>*/}

                        <Link
                            href={whatsappURL()}
                            target={"_blank"}
                            aria-label="Let's Talk on WhatsApp"
                        >
                            <Button variant="default"
                                    aria-label="Let's Talk on WhatsApp"
                                    className="rounded-3xl transition ease-in-out delay-150 hover:-translate-y-1 scale-105 font-bold bg-gradient-to-r from-blue-600 to-purple-600"
                                    size="lg">

                                {button_lets_talk} <Send className="ml-2 h-6 w-6 animate-pulse"/>

                            </Button>
                        </Link>
                    </div>
                </aside>
            </main>
        </>
    );
}