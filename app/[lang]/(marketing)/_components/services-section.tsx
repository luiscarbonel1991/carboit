import { AreaChart, Braces, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import CardService from "@/app/[lang]/(marketing)/_components/card-service";
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n-config";
import { redirectPathURL } from "@/lib/utils";
import Link from "next/link";


const services = [
    {
        id: "webDevelopment",
        title: "Web Development",
        description: "We elevate web development by creating exquisite and functional marketing pages that capture the essence of your brand. Every site is meticulously designed to deliver an immersive experience.",
        icon: <Terminal size={48} className="text-pink-500" />,
        link: undefined
    },
    {
        id: "appDevelopment",
        title: "Application Development",
        description: "Our team is at the forefront of application development innovation, utilizing frameworks like Next.js and Spring Boot to build solutions that make a difference in usability and performance.",
        icon: <Braces size={48} className="text-pink-500" />,
        link: undefined
    },
    {
        id: "customCms",
        title: "Custom Content Management",
        description: "We understand the importance of a robust and personalized CMS. We step away from generic solutions to provide our clients with a unique system that powers efficient content management tailored to their needs.",
        icon: <AreaChart size={48} className="text-pink-500" />,
        link: undefined
    }
];

interface ServicesSectionProps {
    lang: Locale
    dictionary: Awaited<ReturnType<typeof getDictionary>>["landing"]
}

export const ServicesSection = ({
    lang,
    dictionary
}: ServicesSectionProps) => {

    const servicesDic = dictionary.services

    // @ts-ignore
    return (
        <section className="grid grid-cols-1 px-4 md:px-10 py-10">

            <div className="flex flex-wrap w-full justify-center mb-8">
                <div className="lg:w-1/2 w-full mb-6 lg:mb-0 text-center">
                    <h2 className="sm:text-5xl text-4xl font-bold mb-4">
                        {servicesDic.h1}
                        <span
                            className="tracking-tight inline bg-clip-text text-transparent bg-gradient-to-b from-[#FF1CF7] to-[#b249f8]">
                            {` `} {servicesDic.h1_remark_word}
                        </span>.
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                        {servicesDic.p_description}
                    </p>
                    <Link href={redirectPathURL(lang, '/contact')}>
                    <Button
                        className={"rounded-3xl transition ease-in-out delay-150 hover:-translate-y-1 scale-105 font-bold"}
                        variant={"default"} size={"lg"}>
                        {servicesDic.button} &rarr;
                    </Button>
                    </Link>
                </div>
            </div>


            <div className="grid lg:grid-cols-3 gap-4 place-items-center">
                {
                    services.map((service, index) => {
                        // @ts-ignore
                        const serviceDic = servicesDic.data[service.id]
                        return (
                            (
                                <CardService
                                    key={index}
                                    cardClassName="shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out min-h-[300px]"
                                    title={serviceDic.title}
                                    description={serviceDic.description}
                                    headerContent={service.icon}
                                    link={service.link}
                                />
                            )
                        )
                    })
                }
            </div>
        </section>
    )
}