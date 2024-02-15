import {Hero} from "@/app/(marketing)/_components/hero";
import {ServicesSection} from "@/app/(marketing)/_components/services-section";
import {HeadingContactClean} from "@/app/(marketing)/_components/heading-contact-clean";
import Team from "@/app/(marketing)/team";


const MarketingPage = () => {
    return (
        <>
            <Hero/>
            <ServicesSection/>
            <Team/>
            <HeadingContactClean/>
        </>
    );
}

export default MarketingPage;
