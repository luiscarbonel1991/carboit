import Image from "next/image";
import {Card, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {getDictionary} from "@/lib/dictionary";


const caseStudies = [
    {
        id: "devlach",
        title: "DevLach Blog",
        description: "DevLach is a blog designed to be a showcase of the latest technologies and trends in the world of web development. It is built using the latest technologies such as Next.js, TailwindCSS.",
        image: "/static/images/marketing/study-case-devlach.png",
        url: "https://devlach.com",
        type: "Website"
    },
    {
        id: "taxi",
        title: "TaxiPremium24hours",
        description: "TaxiPremium24hours showcases a 24-hour taxi service via a user-friendly website built with WordPress CMS, featuring responsive design and SEO optimization for enhanced visibility and performance.",
        image: "/static/images/marketing/study-case-taxipremium24hours.png",
        url: "https://taxipremium24hours.com",
        type: "Website"
    }
]

interface StudyCaseProps {
    dictionary: Awaited<ReturnType<typeof getDictionary>>["landing"]
}

export const StudyCase = ({
                              dictionary
                          }: StudyCaseProps) => {

    const studyCaseDict = dictionary.studyCases
    const studyCaseDictData = studyCaseDict.data
    return (

        <section className="flex flex-col items-center space-y-8 md:space-y-12">
            <div className="flex flex-col justify-center text-center">
                <h2>
                    <span
                        className="block font-display tracking-tight [text-wrap:balance] text-4xl font-medium sm:text-5xl text-neutral-950">{studyCaseDict.h1}</span>
                </h2>
                <div className="mt-6 text-xl text-neutral-600"><p>
                    {studyCaseDict.p_description}
                </p>
                </div>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

                {
                    caseStudies.map((caseStudy, index) => {

                        // @ts-ignore
                        const caseStudyData = studyCaseDictData[caseStudy.id] || caseStudy
                        return (
                            <li key={index}
                                className="rounded-3xl max-w-full md:max-w-lg shadow-md hover:shadow-2xl transition duration-300">
                                <article className="flex flex-col ">
                                    <Card className="rounded-3xl border-0 shadow-none">
                                        <figure className="p-0">
                                            <Image src={caseStudy.image}
                                                   alt="Principal View of DevLach Blog" height={600} width={600}
                                                   priority={true}
                                                   className="rounded-3xl shadow-md"/>
                                        </figure>
                                        <CardHeader>
                                            <CardTitle className="text-2xl">{caseStudyData.title}</CardTitle>
                                            <CardDescription className="text-lg text-justify">
                                                {caseStudyData.description}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardFooter>
                                            <Link href={caseStudy.url}
                                                  aria-label={`Visit ${caseStudyData.title} website`}
                                                  target="_blank"
                                            >
                                                <Button className={"rounded-3xl"}
                                                        variant={"secondary"}>{caseStudyData.category}</Button>
                                            </Link>
                                        </CardFooter>
                                    </Card>
                                </article>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}