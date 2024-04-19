import {i18n} from "@/i18n-config";
import {getDictionary} from "@/lib/dictionary";
import MaxWithWrapper from "@/components/max-with-wrapper";
import {HeadingContactClean} from "@/app/(marketing)/_components/heading-contact-clean";


const ServiceLayout = async (
    {
        children,
    }: {
        children: React.ReactNode,
    }) => {

    const lang = i18n.defaultLocale;
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