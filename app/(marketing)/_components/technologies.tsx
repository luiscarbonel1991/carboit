import MaxWithWrapper from "@/components/max-with-wrapper"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

import {
  SiAmazonaws,
  SiJavascript,
  SiNextdotjs,
  SiPython,
  SiReact,
  SiSpring,
  SiTailwindcss,
  SiWordpress
} from "react-icons/si"

import { FaJava } from "react-icons/fa6"
import { getDictionary } from "@/lib/dictionary"
import { cn } from "@/lib/utils"

const technologies = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: SiReact },
  { name: "TailwindCSS", icon: SiTailwindcss },
  { name: "Spring Boot", icon: SiSpring },
  { name: "AWS", icon: SiAmazonaws },
  { name: "WordPress", icon: SiWordpress },
  { name: "Python", icon: SiPython },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Java", icon: FaJava }
]

interface TechnologiesProps {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["landing"]
}

const Technologies = ({ dictionary }: TechnologiesProps) => {
  const { title } = dictionary.technologies

  return (
    <MaxWithWrapper className="flex flex-col justify-center gap-8">
      <header>
        <h2 className="text-3xl font-extralight text-center">{title}</h2>
      </header>
      <main
        className={cn(
          "relative flex space-x-8 items-center overflow-x-hidden",
          "rounded-full shadow-2xl",
          "border-4 border-zinc-600 border-b-0",
          "bg-gradient-to-b from-black to-zinc-800"
        )}
      >
        <div className="py-4 animate-marquee whitespace-nowrap bg-gradient-to-b from-black to-zinc-800">
          <TooltipProvider>
            <div className="flex gap-8 w-full">
              {technologies.map((tech, index) => {
                const Icon = tech.icon
                return (
                  <Tooltip key={`${index}-${tech.name}`}>
                    <article className="flex flex-col items-center">
                      <TooltipTrigger aria-label={tech.name}>
                        <Icon size={64} fill="white" aria-label={`${tech.name} icon`} />
                      </TooltipTrigger>
                      <TooltipContent aria-label={`${tech.name} tooltip`} side="right">
                        <span aria-label={tech.name}>{tech.name}</span>
                      </TooltipContent>
                    </article>
                  </Tooltip>
                )
              })}
            </div>
          </TooltipProvider>
        </div>
        <div className="absolute top-0 py-4 animate-marquee2 whitespace-nowrap">
          <TooltipProvider>
            <div className="flex gap-8 w-full ">
              {technologies.map((tech, index) => {
                const Icon = tech.icon
                return (
                  <Tooltip key={`${index}-${tech.name}`}>
                    <article className="flex flex-col items-center">
                      <TooltipTrigger aria-label={tech.name}>
                        <Icon size={64} fill="white" aria-label={`${tech.name} icon`} />
                      </TooltipTrigger>
                      <TooltipContent aria-label={`${tech.name} tooltip`} side="right">
                        <span aria-label={tech.name}>{tech.name}</span>
                      </TooltipContent>
                    </article>
                  </Tooltip>
                )
              })}
            </div>
          </TooltipProvider>
        </div>
      </main>
    </MaxWithWrapper>
  )
}

export default Technologies
