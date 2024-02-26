
import MaxWithWrapper from "@/components/max-with-wrapper";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import {
    SiAmazonaws,
    SiJavascript,
    SiNextdotjs,
    SiPython,
    SiReact,
    SiSpring,
    SiTailwindcss,
    SiWordpress,
} from "react-icons/si"

import { FaJava } from "react-icons/fa6";
import { getDictionary } from "@/lib/dictionary";

const technologies = [
    { name: "Next.js", icon: SiNextdotjs },
    { name: "React", icon: SiReact },
    { name: "TailwindCSS", icon: SiTailwindcss },
    { name: "Spring Boot", icon: SiSpring },
    { name: "AWS", icon: SiAmazonaws },
    { name: "WordPress", icon: SiWordpress },
    { name: "Python", icon: SiPython },
    { name: "JavaScript", icon: SiJavascript },
    { name: "Java", icon: FaJava },

]

interface TechnologiesProps {
    dictionary: Awaited<ReturnType<typeof getDictionary>>["landing"]
}

const Technologies = ({ dictionary }: TechnologiesProps) => {

    const { title } = dictionary.technologies

    return (
        <MaxWithWrapper className="flex flex-col justify-center gap-8">
            <header>
                <h2 className="text-2xl font-extralight text-center">{ title }</h2>
            </header>
            <main className="flex flex-wrap justify-center w-full">
                <TooltipProvider>
                    <div className="grid md:grid-cols-9 grid-cols-3 gap-4 w-full">
                        {technologies.map((tech, index) => {
                            const Icon = tech.icon;
                            return (
                                <Tooltip key={index} >
                                    <article className="flex flex-col items-center">
                                        <TooltipTrigger>
                                            <div  >
                                                <Icon size={64} className="hover:scale-105 transition hover:duration-300" />
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent side="bottom">
                                            <span>{tech.name}</span>
                                        </TooltipContent>
                                    </article>
                                </Tooltip>
                            );
                        })}
                    </div>
                </TooltipProvider>
            </main>
        </MaxWithWrapper>
    );
}

export default Technologies;