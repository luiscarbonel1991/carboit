import Image from "next/image";
import {Card, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import Link from "next/link";


export const StudyCase = () => {
    return (

        <section className="flex flex-col items-center">
            <div className="flex flex-col max-w-2xl justify-center text-center">
                <h2>
                    <span
                        className="block font-display tracking-tight [text-wrap:balance] text-4xl font-medium sm:text-5xl text-neutral-950">Selected Cases</span>
                </h2>
                <div className="mt-6 text-xl text-neutral-600"><p>
                    Full service
                    studio for both
                    startups and
                    established
                    businesses
                </p>
                </div>
            </div>

            <ul className="flex flex-col md:flex-row gap-6 rounded-3xl pl-4 pr-4 pt-6 hover:rounded-3xl dark:divide-gray-700">
                <li className="rounded-3xl">
                    <article className="flex flex-col rounded-md p-6 max-w-lg">
                        <Card className="rounded-3xl">
                            <Image src="/static/images/marketing/study-case-devlach.png"
                                   alt="Pleople working on a website" height={440} width={440} priority={true}
                                   className="rounded-3xl shadow-md w-full"/>
                            <CardHeader>
                                <CardTitle className="text-2xl">DevLach Blog</CardTitle>
                                <CardDescription className="text-lg text-justify">
                                    DevLach is a blog designed to be a showcase of the latest technologies and
                                    trends in the world of web development. It is built using the latest
                                    technologies such as Next.js, TailwindCSS.
                                </CardDescription>
                            </CardHeader>
                            <CardFooter>
                                <Link href="https://devlach.com"
                                      aria-label="Visit DevLach Blog"
                                      target="_blank"
                                >
                                    <Button className={"rounded-3xl"} variant={"secondary"}>Website</Button>
                                </Link>
                            </CardFooter>

                        </Card>
                    </article>
                </li>
            </ul>
        </section>
    )
}