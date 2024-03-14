import {Button} from "@/components/ui/button";
import {Instagram} from "lucide-react";
import Link from "next/link";
import {instagramURL, whatsappURL} from "@/lib/utils";
import {AiOutlineWhatsApp} from "react-icons/ai";


const FloatingButtons = () => {
    return (
        <div className="fixed bottom-4 right-0 p-4 space-x-4">

            <div className="flex flex-col space-y-4">

                <Link
                    href={whatsappURL()}
                    target={"_blank"}
                    aria-label="Let's Talk on WhatsApp"
                >
                    <Button variant="default"
                            aria-label="Let's Talk on WhatsApp"
                            className="rounded-3xl transition ease-in-out delay-150 hover:-translate-y-1 scale-105 font-bold bg-gradient-to-r from-blue-600 to-purple-600"
                            size="icon">

                        <AiOutlineWhatsApp className="h-6 w-6"/>

                    </Button>
                </Link>

                <Link
                    href={instagramURL()}
                    target={"_blank"}
                    aria-label="Let's Talk on WhatsApp"
                >
                    <Button variant="default"
                            aria-label="Let's Talk on Instagram"
                            className="rounded-3xl transition ease-in-out delay-150 hover:-translate-y-1 scale-105 font-bold bg-gradient-to-r from-blue-600 to-purple-600"
                            size="icon">

                        <Instagram className="h-6 w-6"/>

                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default FloatingButtons