import {HeadingForm} from "@/components/heading-form";
import SvgBackground from "@/components/svg-background";
import {ContactForm} from "@/app/[lang]/(marketing)/contact/contact-form";
import {Locale} from "@/i18n-config";
import {getDictionary} from "@/lib/dictionary";
import {getSiteMetadata} from "@/lib/utils";
import {Metadata} from "next";
import {contactPageKeywords} from "@/config/site-keywork";

export async function generateMetadata({params}: { params: { lang: Locale } }) {

    const dictionary = await getDictionary(params.lang)
    const { contact } = dictionary

    return {
        ...getSiteMetadata({
            title: contact.seo.title,
            description: contact.seo.description,
            keywords: [...contactPageKeywords]
        }),
        alternates: {
            canonical: '/en/contact',
            languages: {
                en: '/en/contact',
                es: '/es/contact'
            }
        }
    } as Metadata
}

interface ContactPageProps {
    params: { lang: Locale }
}

const ContactPage = async ({
                               params: {lang}
                           }: ContactPageProps) => {

    const dictionary = await getDictionary(lang)
    return (
        <div className="isolate container grid lg:grid-cols-2 place-items-center pt-8 md:pt-12 md:pb-24">
            <SvgBackground className="md:-rotate-180"/>
            <HeadingForm dictionary={dictionary.contact}/>
            <ContactForm dictionary={dictionary.contact}/>
        </div>
    );
}

export default ContactPage;
