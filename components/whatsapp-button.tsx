import SocialIcon from "@/components/social-icons";
import {Button} from "@/components/ui/button";
import Link from "next/link";

const baseUrl = "https://wa.me/15126320948"
const message = "Hello, I would interested in your services!"
const WhatsappButton = () => {
    const url = `${baseUrl}?text=${encodeURIComponent(message)}`
    return (

            <Button
                variant="outline"
                className="rounded-full hover:bg-green-500"
                size="icon"
                aria-label="Whatsapp"
            >
                <SocialIcon kind="whatsapp" size={6}
                            href={url}
                />
            </Button>

    );
}

export default WhatsappButton;