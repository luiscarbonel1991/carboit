import SocialIcon from "@/components/social-icons";
import {Button} from "@/components/ui/button";
import {whatsappURL} from "@/lib/utils";

const WhatsappButton = () => {
    const url = whatsappURL()
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