import {Mail} from "lucide-react";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {Icons} from "@/components/icons";


export const HeadingForm = () => {
    return (
        <div className="mx-auto w-4/5 text-start">
            <h1 className="text-xl font-bold tracking-tight leading-10">
                Have an idea?
            </h1>
            <h2 className="text-3xl font-bold tracking-tight sm:text-6xl">Drop us a line!</h2>

            <p className="mt-2 text-lg leading-8">
                <Mail className="inline-block h-6 w-6 mr-2"/> contact@studio.com
            </p>

            <div className="mt-6 flex sm:flex-row gap-1">

                <Button asChild variant="default" className="rounded-full hover:bg-green-600" size="icon">
                    <Link href="/" className="flex items-center">
                        <Icons.whatsapp className="h-14 w-14"/>
                    </Link>
                </Button>
                <Button asChild variant="default" className="rounded-full hover:bg-sky-500" size="icon">
                    <Link href="/" className="flex items-center">
                        <Icons.telegram className="h-8 w-8"/>
                    </Link>
                </Button>
            </div>

        </div>
    );
}