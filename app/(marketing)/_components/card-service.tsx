import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {ReactNode} from "react";
import Link from "next/link";
import {Locale} from "@/i18n-config";

interface CardServiceProps {
    locale: Locale
    title: string
    description: string
    headerContent: ReactNode,
    cardClassName?: string,
    link?: string
}

const CardService = ({
                         locale,
                         title,
                         description,
                         headerContent,
                         cardClassName,
                         link
                     }: CardServiceProps) => {
    return (
        <Card className={cardClassName}>
            <CardHeader>
                {headerContent}
            </CardHeader>
            <CardContent className="space-y-3">
                <CardTitle>{title}</CardTitle>
                <CardDescription className={"text-lg"}>
                    {description}
                </CardDescription>
            </CardContent>
            <CardFooter>
                {
                    link && (
                        <Button asChild variant="secondary" size="sm" className="rounded-3xl">
                            <Link href={link}
                                  aria-label={locale === "en" ? `Learn more ${title}` : `Saber más ${title}`}
                            >
                                {locale === "en" ? "Learn more" : "Saber más"} &rarr;
                            </Link>
                        </Button>
                    )
                }
            </CardFooter>
        </Card>
    )
}

export default CardService