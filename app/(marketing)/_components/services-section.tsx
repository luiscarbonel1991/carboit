import CardService from "@/app/(marketing)/_components/card-service";
import {AreaChart, Braces, Terminal} from "lucide-react";
import {Button} from "@/components/ui/button";


const services = [
    {
        title: "Web Development",
        description: "We elevate web development by creating exquisite and functional marketing pages that capture the essence of your brand. Every site is meticulously designed to deliver an immersive experience, beyond the first impression.",
        icon: <Terminal size={48} className="text-pink-500"/>,
        link: undefined
    },
    {
        title: "Application Development",
        description: "Our team is at the forefront of application development innovation, utilizing frameworks like Next.js and Spring Boot to build solutions that make a difference in usability and performance.",
        icon: <Braces size={48} className="text-pink-500"/>,
        link: undefined
    },
    {
        title: "Custom Content Management",
        description: "We understand the importance of a robust and personalized CMS. We step away from generic solutions to provide our clients with a unique system that powers efficient content management tailored to their needs.",
        icon: <AreaChart size={48} className="text-pink-500"/>,
        link: undefined
    }
];


export const ServicesSection = () => {
    return (
        <section className="container grid grid-cols-1 pt-16 px-4 md:px-10 py-10">

            {/*<div className="flex flex-wrap w-ful justify-center mb-8">
                <div className="lg:w-1/2 w-full mb-6 lg:mb-0 text-center">
                    <h2 className="sm:text-5xl text-4xl font-bold mb-4">We help you {` `}
                        <span
                            className="tracking-tight inline from-[#FF1CF7] to-[#b249f8] bg-clip-text text-transparent bg-gradient-to-b">identity</span>,
                        {` `} explore
                        and respond to new
                        opportunities.</h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">We are a software development studio
                        that helps startups and enterprises build quality software to achieve growth and scale.</p>
                </div>
            </div>*/}

            <div className="flex flex-wrap w-full justify-center mb-8">
                <div className="lg:w-1/2 w-full mb-6 lg:mb-0 text-center">
                    <h2 className="sm:text-5xl text-4xl font-bold mb-4">
                        Transform Your Vision into
                        <span
                            className="tracking-tight inline bg-clip-text text-transparent bg-gradient-to-b from-[#FF1CF7] to-[#b249f8]">
        {` `} Reality
      </span>.
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
                        Partner with us to navigate the digital landscape with ease. Our bespoke software services are
                        tailored to spark innovation and operational excellence.
                    </p>
                    <Button className={"rounded-2xl"} variant={"default"} size={"lg"}>
                        Let's Build Together &rarr;
                    </Button>
                </div>
            </div>


            <div className="grid lg:grid-cols-3 gap-4 place-items-center">
                {
                    services.map((service, index) => (
                        <CardService
                            key={index}
                            cardClassName="shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out min-h-[300px]"
                            title={service.title}
                            description={service.description}
                            headerContent={service.icon}
                            link={service.link}
                        />
                    ))
                }
            </div>
        </section>
    )
}