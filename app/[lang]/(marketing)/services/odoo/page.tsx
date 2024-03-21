import {Locale} from "@/i18n-config";
import {getDictionary} from "@/lib/dictionary";
import {Hero} from "@/app/[lang]/(marketing)/services/odoo/_components/hero";
import OdooModules from "@/app/[lang]/(marketing)/services/odoo/_components/service-sections";
import {Metadata} from "next";
import {getSiteMetadata} from "@/lib/utils";
import {odooKeywords} from "@/config/site-keywork";


interface ServicesPageProps {
    params: {
        lang: Locale
    }
}

const ServicesPage = async ({
                                params: {
                                    lang
                                },

                            }: ServicesPageProps) => {
    const dictionary = await getDictionary(lang)

    return (
        <>
            <Hero dictionary={dictionary.odoo}/>
            <OdooModules lang={lang} dictionary={dictionary.odoo}/>
        </>

    )
}

export default ServicesPage;


export async function generateMetadata({params}: { params: { lang: Locale } }) {

    const dictionary = await getDictionary(params.lang)
    const { odoo } = dictionary
    return {
        ...getSiteMetadata({
            title: odoo.seo.title,
            description: odoo.seo.description,
            keywords: odooKeywords
        }),
        alternates: {
            canonical: '/services/odoo',
            languages: {
                en: '/en/services/odoo',
                es: '/es/services/odoo'
            }
        }
    } as Metadata
}
