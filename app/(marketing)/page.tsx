import {Hero} from "@/app/(marketing)/_components/hero";
import {ServicesSection} from "@/app/(marketing)/_components/services-section";
import {HeadingContactClean} from "@/app/(marketing)/_components/heading-contact-clean";
import Team from "@/app/(marketing)/team";
import {StudyCase} from "@/app/(marketing)/_components/study-case";
import MaxWithWrapper from "@/components/max-with-wrapper";


const MarketingPage = () => {
    return (
        <>

            <MaxWithWrapper className="grid grid-cols-1 space-y-32">
                <Hero/>
                <ServicesSection/>
                <StudyCase/>
                <HeadingContactClean/>
                <Team/>
            </MaxWithWrapper>
        </>
    );
}

export default MarketingPage;
