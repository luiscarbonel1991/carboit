import SocialIcon from "@/components/social-icons";
import {Button} from "@/components/ui/button";
import Link from "next/link";

const baseUrl = "https://www.instagram.com/carbo.it"
const InstagramButton = () => {
    const url = `${baseUrl}`
    return (

            <Button
                variant="outline"
                className="rounded-full hover:bg-gradient-to-r hover:from-red-500 hover:to-fuchsia-500"
                size="icon"
                aria-label="Instagram"
            >
                <SocialIcon kind="instagram" size={6}
                            href={url}
                />
            </Button>

    );
}

export default InstagramButton;