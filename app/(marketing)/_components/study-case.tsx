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
        type: "Website",
        date: "2023-01-01"
    },
    {
        id: "taxi",
        title: "TaxiPremium24hours",
        description: "TaxiPremium24hours showcases a 24-hour taxi service via a user-friendly website built with WordPress CMS, featuring responsive design and SEO optimization for enhanced visibility and performance.",
        image: "/static/images/marketing/study-case-taxipremium24hours.png",
        url: "https://taxipremium24hours.com",
        type: "Website",
        date: "2023-12-31"
    },
    {
        id: "dacostaupholstery",
        title: "D'Acosta Upholstery",
        description: "D'Acosta Upholstery is a furniture restoration company that offers a range of services. The website was built using WordPress, featuring a user-friendly design and SEO optimization.",
        image: "/static/images/study-case/dacostaupholstery-600x600.webp",
        url: "https://dacostaupholstery.com",
        type: "Website",
        date: "2024-04-14"
    },
    {
        id: "luzsalonbelleza",
        title: "Luz Salón Belleza",
        description: "Luz Salón  is a beauty salon that offers a range of services. The website was built using WordPress, featuring a user-friendly design and SEO optimization.",
        image: "/static/images/study-case/luz-salon-1800x1800.webp",
        url: "https://salondebellezaluz.com",
        type: "Website",
        date: "2024-05-01"
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

    const orderedCaseStudies = caseStudies.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
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
                    orderedCaseStudies.map((caseStudy, index) => {

                        // @ts-ignore
                        const caseStudyData = studyCaseDictData[caseStudy.id] || caseStudy
                        return (
                            <li key={index}
                                className="rounded-3xl max-w-full md:max-w-lg shadow-md hover:shadow-2xl transition duration-300 min-h-[300px]">
                                <article className="flex flex-col min-h-[300px]">
                                    <Card className="rounded-3xl border-0 shadow-none hover:bg-zinc-100">
                                        <figure className="p-0">
                                            <Image src={caseStudy.image}
                                                   alt="Principal View of DevLach Blog" height={600} width={600}
                                                   loading="lazy"
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