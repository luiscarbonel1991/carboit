import Link from "next/link";
import {Button} from "@/components/ui/button";
import SvgBackground from "@/components/svg-background";
import Image from "next/image";

import { Poppins}  from 'next/font/google';

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600"]
});

export const Hero = () => {

    return (

        <>
            <main className={`isolate container grid lg:grid-cols-2 place-items-center pt-32 md:pb-24 px-4 md:px-10 ${poppins.className}`}>
                <SvgBackground/>


                <div className="py-6 md:order-1 hidden md:block">


                    <Image
                        src="/static/images/marketing/light_hero_building_websites_v1.svg"
                        alt="Pleople working on a website"
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
                            Interested in collaborating?{' '}
                            <Link href="/contact" className="font-semibold text-indigo-600">
                                <span className="absolute inset-0" aria-hidden="true"/>
                                Contact us <span aria-hidden="true">&rarr;</span>
                            </Link>
                        </div>
                    </div>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
                        Let’s make your product a {` `} <span
                        className="tracking-tight inline from-[#FF1CF7] to-[#b249f8] bg-clip-text text-transparent bg-gradient-to-b">success</span>
                    </h1>
                    <p className="mt-6 text-xl text-gray-600 dark:text-gray-400">
                        We are a software development studio that helps startups and enterprises build
                        quality software to achieve growth and scale.
                    </p>
                    <div className="mt-6 flex flex-col sm:flex-row gap-3">
                        <Button asChild variant="default"
                                className="rounded-3xl transition ease-in-out delay-150 hover:-translate-y-1 scale-105 font-bold"
                                size="lg">
                            <Link
                                href="/contact"
                                aria-label="Let's Talk"
                            >
                                Let's Talk
                            </Link>
                        </Button>
                    </div>
                </aside>
            </main>
        </>
    );
}