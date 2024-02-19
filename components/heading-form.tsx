import {Mail, Phone} from "lucide-react";
import {Button} from "@/components/ui/button";
import SocialIcon from "@/components/social-icons";
import Link from "next/link";
import FacebookButton from "@/components/facebook-button";
import {getDictionary} from "@/lib/dictionary";
import WhatsappButton from "@/components/whatsapp-button";
import InstagramButton from "@/components/instagram-button";

interface HeadingFormProps {
    dictionary: Awaited<ReturnType<typeof getDictionary>>["contact"];
}
export const HeadingForm = ({
                                 dictionary
                            }: HeadingFormProps) => {
    const { heading} = dictionary;

    return (
        <div className="mx-auto w-4/5 text-start">
            <h1 className="text-xl font-bold tracking-tight leading-10">
                {
                    heading.question
                }
            </h1>
            <h2 className="text-3xl font-bold tracking-tight sm:text-6xl">{heading.title}</h2>

            <p className="mt-2 text-lg leading-8">
                <Mail className="inline-block h-6 w-6 mr-2"/> devlachweb@gmail.com
            </p>

            <p className="mt-2 text-lg leading-8">
                <Link href="tel:+15126320748"
                aria-label="Call us"
                >
                    <Phone className="inline-block h-6 w-6 mr-2"/> +1 512 632 0748
                </Link>
            </p>

            <div className="mt-6 flex sm:flex-row gap-1">

                <WhatsappButton />
                <InstagramButton/>
                <FacebookButton/>
            </div>

        </div>
    );
}