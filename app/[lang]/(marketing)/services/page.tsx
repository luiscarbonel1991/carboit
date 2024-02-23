import {HeadingContactClean} from "@/app/[lang]/(marketing)/_components/heading-contact-clean";
import {Locale} from "@/i18n-config";
import {getDictionary} from "@/lib/dictionary";

interface ServicesPageProps {
    params: {
        lang: Locale
    }
}

const ServicesPage = async ({
                                params: {lang}
                            }: ServicesPageProps) => {
    const dictionary = await getDictionary(lang)
    return (
        <HeadingContactClean lang={lang} dictionary={dictionary.landing}/>
    )
}

export default ServicesPage;