import {Locale} from "@/i18n-config";
import {getDictionary} from "@/lib/dictionary";
import {Hero} from "@/app/[lang]/(marketing)/services/odoo/_components/hero";
import OdooModules from "@/app/[lang]/(marketing)/services/odoo/_components/service-sections";

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
            <OdooModules dictionary={dictionary.odoo}/>
        </>

    )
}

export default ServicesPage;