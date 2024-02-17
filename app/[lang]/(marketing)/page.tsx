import MaxWithWrapper from "@/components/max-with-wrapper";
import {Hero} from "@/app/[lang]/(marketing)/_components/hero";
import {ServicesSection} from "@/app/[lang]/(marketing)/_components/services-section";
import {StudyCase} from "@/app/[lang]/(marketing)/_components/study-case";
import {HeadingContactClean} from "@/app/[lang]/(marketing)/_components/heading-contact-clean";
import {Locale} from "@/i18n-config";
import {getDictionary} from "@/lib/dictionary";
import Team from "@/app/[lang]/(marketing)/_components/team";

interface MarketingPageProps {
    params: { lang: Locale }
}

const MarketingPage = async ({
                                 params
                             }: MarketingPageProps) => {

    const dictionary = await getDictionary(params.lang);

    return (
        <>

            <MaxWithWrapper className="grid grid-cols-1 space-y-32">
                <Hero dictionary={dictionary.landing}/>
                <ServicesSection dictionary={dictionary.landing}/>
                <StudyCase dictionary={dictionary.landing}/>
                <HeadingContactClean dictionary={dictionary.landing}/>
                <Team dictionary={dictionary.landing}/>
            </MaxWithWrapper>
        </>
    );
}

export default MarketingPage;
