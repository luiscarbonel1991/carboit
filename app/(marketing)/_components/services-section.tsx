import {AreaChart, Braces, Terminal} from "lucide-react";
import {Button} from "@/components/ui/button";
import CardService from "@/app/(marketing)/_components/card-service";
import {getDictionary} from "@/lib/dictionary";
import {Locale} from "@/i18n-config";
import Image from "next/image";
import Link from "next/link";

// Images
import webDevelopment from "@/public/static/images/marketing/services/web-development.webp";
import odoo from "@/public/static/images/marketing/services/odoo.webp";
import applicationDevelopment from "@/public/static/images/marketing/services/application-develop.webp";
import customManagement from "@/public/static/images/marketing/services/custom-management.webp";
import testing from "@/public/static/images/marketing/services/testing.webp";
import seoMarketing from "@/public/static/images/marketing/services/seo-marketing.webp";


const services = [
    {
        id: "webDevelopment",
        title: "Web Development",
        description: "We elevate web development by creating exquisite and functional marketing pages that capture the essence of your brand. Every site is meticulously designed to deliver an immersive experience.",
        icon: <Terminal size={48} className="text-pink-500"/>,
        link: undefined,
        image:
    <Image src={webDevelopment}
           alt={"Web Development"}
           width={100}
           height={100}
           className="rounded-3xl shadow-md" />
    },
    {
        id: "appDevelopment",
        title: "Application Development",
        description: "Our team is at the forefront of application development innovation, utilizing frameworks like Next.js and Spring Boot to build solutions that make a difference in usability and performance.",
        icon: <Braces size={48} className="text-pink-500"/>,
        link: undefined,
        image: <Image src={applicationDevelopment}
                      alt={"Application Development"}
                      width={100} height={100}
                      className="rounded-3xl shadow-md" />
    },
    {
        id: "odoo",
        title: "Odoo ERP",
        description: "We specialize in Odoo ERP, an all-in-one management software that offers a range of business applications that form a complete suite of enterprise management applications.",
        icon: <AreaChart size={48} className="text-pink-500"/>,
        link: "/services/odoo",
        image: <Image src={odoo}
                      alt={"Odoo ERP"}
                      width={100} height={100}
                      className="rounded-3xl shadow-md" />

    },
    {
        id: "testing",
        title: "Testing",
        description: "We ensure that every project is delivered with the highest quality standards. Our testing services guarantee that your product is free of bugs and performs optimally.",
        icon: <Terminal size={48} className="text-pink-500"/>,
        link: undefined,
        image: <Image src={testing}
                      alt={"Testing"}
                      width={100} height={100}
                      className="rounded-3xl shadow-md" />
    },
    {
        id: "customCms",
        title: "Custom Content Management",
        description: "We understand the importance of a robust and personalized CMS. We step away from generic solutions to provide our clients with a unique system that powers efficient content management tailored to their needs.",
        icon: <AreaChart size={48} className="text-pink-500"/>,
        link: undefined,
        image: <Image src={customManagement}
                      alt={"Custom Content Management"}
                      width={100}
                      height={100}
                      className="rounded-3xl shadow-md" />
    },
    {
        id: "seoMarketing",
        title: "SEO & Digital Marketing",
        description: "We help businesses improve their online presence through effective SEO and digital marketing strategies. From search engine optimization to social media marketing campaigns, our goal is to increase visibility and attract the right audience.",
        icon: <AreaChart size={48} className="text-pink-500"/>,
        link: undefined,
        image: <Image src={seoMarketing}
                      alt={"SEO & Digital Marketing"}
                      width={100}
                      height={100}
                      className="rounded-3xl shadow-md" />
    },
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

            <div className="flex flex-wrap w-full justify-center mb-12">
                <div className="lg:w-1/2 w-full mb-6 lg:mb-0 text-center">
                    <h2 className="mb-4 flex flex-col sm:text-5xl text-4xl font-semibold gap-2">

                        <span className="font-light text-md">{servicesDic.title}</span>
                        <span>{servicesDic.h1}</span>
                        <span
                            className="tracking-tight inline bg-clip-text text-transparent bg-gradient-to-b from-[#FF1CF7] to-[#b249f8]">
                            {` `} {servicesDic.h1_remark_word}
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                        {servicesDic.p_description}
                    </p>
                    <Link href={'/contact'}>
                        <Button
                            className={"rounded-3xl transition ease-in-out delay-150 hover:-translate-y-1 scale-105 font-bold bg-gradient-to-r from-blue-600 to-purple-600"}
                            variant={"default"} size={"lg"}>
                            {servicesDic.button}
                        </Button>
                    </Link>
                </div>
            </div>


            <div className="grid lg:grid-cols-3 gap-8 place-items-center">
                {
                    services.map((service, index) => {
                        // @ts-ignore
                        const serviceDic = servicesDic.data[service.id]
                        return (
                            (
                                <CardService
                                    locale={lang}
                                    key={index}
                                    cardClassName="shadow-md hover:shadow-lg hover:bg-zinc-100 transition duration-300 ease-in-out min-h-[490px] hover:scale-105"
                                    title={serviceDic.title}
                                    description={serviceDic.description}
                                    headerContent={service.image ? service.image : service.icon}
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