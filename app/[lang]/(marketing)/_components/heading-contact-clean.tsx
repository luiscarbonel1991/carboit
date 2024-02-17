'use client';
import Link from "next/link";
import useOnScreen from "@/hooks/use-on-screen";
import SocialIcon from "@/components/social-icons";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import {getDictionary} from "@/lib/dictionary";

interface HeadingContactCleanProps {
    dictionary: Awaited<ReturnType<typeof getDictionary>>["landing"];
}

export const HeadingContactClean = ({
                                        dictionary
                                    }: HeadingContactCleanProps) => {

    const [ref, visible] = useOnScreen({threshold: 0.1});
    const headingContactDic = dictionary.headingContact
    return (
        <div className="max-w-7xl px-6 lg:px-8" ref={ref}>
            <div
                className={`mx-auto max-w-2xl lg:max-w-none transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
                <div
                    className="-mx-6 bg-gradient-to-r from-slate-800 to-slate-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12 rounded-3xl"
                    style={{opacity: 1, transform: 'none'}}>
                    <div className="mx-auto max-w-4xl flex flex-col md:flex-row justify-between items-center">
                        <div className="max-w-xl">
                            <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
                                {headingContactDic.title}
                            </h2>
                            <div className="mt-6 flex">
                                <Link
                                    className="inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition bg-white text-neutral-950 hover:bg-neutral-200"
                                    href="/contact">
                                    <span className="relative top-px">{headingContactDic.button_to_contact}</span>
                                </Link>
                            </div>
                            <div className="mt-10 border-t border-white/10 pt-10"><h3
                                className="font-display text-base font-semibold text-white">{headingContactDic.follow_us}</h3>
                                <ul role="list" className="mt-6 flex sm:flex-row gap-2">
                                    <li>
                                        <Button variant="outline" className="rounded-full hover:bg-green-500"
                                                size="icon">
                                            <SocialIcon kind="whatsapp" size={6} href={"/"}/>
                                        </Button>
                                    </li>
                                    <li>
                                        <Button variant="outline" className="rounded-full hover:bg-sky-500" size="icon">
                                            <SocialIcon kind="telegram" size={6} href={"/"}/>
                                        </Button>
                                    </li>
                                    <li>
                                        <Button variant="outline" className="rounded-full hover:bg-sky-500" size="icon">
                                            <SocialIcon kind="facebook" size={6} href={"/"}/>
                                        </Button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <Image
                            src={"/static/images/marketing/light_mobile_development.svg"}
                            alt="Mobile Development"
                            width={400}
                            height={400}
                            className="mt-10 hidden md:block"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}