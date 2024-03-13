import {Locale} from "@/i18n-config";
import {HeadingContactClean} from "@/app/[lang]/(marketing)/_components/heading-contact-clean";
import {getDictionary} from "@/lib/dictionary";
import MaxWithWrapper from "@/components/max-with-wrapper";


const ServiceLayout = async (
    {
        children,
        params: {lang}
    }: {
        children: React.ReactNode,
        params: { lang: Locale }
    }) => {

    const dictionary = await getDictionary(lang)

    return (
        <main className="grid grid-cols-1 gap-12">
            {children}
            <MaxWithWrapper className="grid grid-cols-1 space-y-32">
                <HeadingContactClean lang={lang} dictionary={dictionary.landing}/>
            </MaxWithWrapper>
        </main>
    )
}

export default ServiceLayout