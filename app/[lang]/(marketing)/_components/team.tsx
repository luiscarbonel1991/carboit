"use client";

import React from "react"
import Link from "next/link";
import {FacebookIcon, GithubIcon, InstagramIcon, LinkedinIcon, TwitterIcon} from "lucide-react";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import {Card} from "@/components/ui/card";
import {getDictionary} from "@/lib/dictionary";

const team = [
    {
        name: "Luis Carbonel",
        profile:
            "/static/images/authors/luis.png",
        // "https://avatars.githubusercontent.com/u/95326684?v=4",    
        position: "Founder & Full Stack S. Engineer",
        socialMediaLinks: {
            facebook: "",
            twitter: "",
            github: "https://github.com/luiscarbonel1991",
            instagram: "",
            linkedin: "https://www.linkedin.com/in/luiscarbonel91/"
        }
    },
    {
        name: "Ernesto Mato",
        profile:
            "https://avatars.githubusercontent.com/u/52477910?v=4",
        position: "Software Engineer & Odoo Engineer",
        socialMediaLinks: {
            facebook: "",
            twitter: "",
            github: "https://github.com/devodoo",
            instagram: "",
            linkedin: "https://www.linkedin.com/in/ernesto-mato/"
        }
    },
]

const TeamMember = ({name, role, imageUrl, socialMediaLinks}:
                        {
                            name: string;
                            role: string;
                            imageUrl: string;
                            socialMediaLinks: {
                                facebook: string;
                                twitter: string;
                                github: string;
                                instagram: string;
                                linkedin: string;
                            };

                        }) => {
    return (
        <Card className="text-center text-gray-500 dark:text-gray-400 p-4 hover:shadow-lg">
            <Image
                src={imageUrl}
                alt={`${name} Avatar`}
                width={250} height={250}
                className="mx-auto mb-4 rounded-md object-cover object-center"
                loading={"lazy"}
            />
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {name}
            </h3>
            <p>{role}</p>
            <ul className="flex justify-center mt-4 space-x-4">
                {
                    Object.entries(socialMediaLinks).map(([key, value]) => {
                            if (value) {
                                return (
                                    <li key={key}>
                                        <Link href={value}
                                              className="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                                            <Button variant="ghost" size="icon" aria-label={key}>
                                                {
                                                    key === "facebook" ? <FacebookIcon className="w-6 h-6 text-blue-500"/> :
                                                        key === "twitter" ?
                                                            <TwitterIcon className="w-6 h-6 text-blue-400"/> :
                                                            key === "github" ?
                                                                <GithubIcon className="w-6 h-6 text-gray-800"/> :
                                                                key === "instagram" ?
                                                                    <InstagramIcon className="w-6 h-6 text-pink-500"/> :
                                                                    key === "linkedin" ? <LinkedinIcon
                                                                        className="w-6 h-6 text-blue-500"/> : null
                                                }
                                            </Button>
                                        </Link>
                                    </li>
                                )
                            }
                        }
                    )
                }
            </ul>
        </Card>
    );
};

interface TeamProps {
    dictionary: Awaited<ReturnType<typeof getDictionary>>["landing"]
}

const Team = ({
                  dictionary
              }: TeamProps) => {

    const teamDic = dictionary.team;
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:px-6">
                <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
                    <h2 className="mb-4 text-5xl tracking-tight font-bold text-gray-900 dark:text-white">
                        {teamDic.title}</h2>
                    <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                        {teamDic.description}
                    </p>
                </div>
                {/*<div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-start items-center">*/}
                <div className="flex flex-col md:flex-row gap-8 justify-center flex-wrap">

                    {team.map((member, index) => (
                        <TeamMember
                            key={index}
                            name={member.name}
                            role={member.position}
                            imageUrl={member.profile}
                            socialMediaLinks={member.socialMediaLinks}
                        />
                    ))}

                </div>
            </div>
        </section>
    )
}

export default Team
