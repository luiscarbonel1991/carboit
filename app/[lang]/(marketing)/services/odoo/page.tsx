import {Locale} from "@/i18n-config";
import {getDictionary} from "@/lib/dictionary";
import {Hero} from "@/app/[lang]/(marketing)/services/odoo/_components/hero";
import OdooModules from "@/app/[lang]/(marketing)/services/odoo/_components/service-sections";
import {Metadata} from "next";
import {getMetadata} from "next/dist/server/lib/squoosh/main";
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

export const metadata: Metadata = getSiteMetadata({
    title: "Odoo Services",
    description: "Transform your business with Odoo, the comprehensive business management software that covers all your needs. From CRM to accounting, inventory, online marketing, sales, purchases, manufacturing, human resources, and more. Discover how Odoo can drive your company's growth and efficiency.",
    keywords: odooKeywords
})