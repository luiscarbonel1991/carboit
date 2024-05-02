import {getDictionary} from "@/lib/dictionary";
import {i18n} from "@/i18n-config";
import {Hero} from "@/app/(marketing)/_components/hero";
import {ServicesSection} from "@/app/(marketing)/_components/services-section";
import Technologies from "@/app/(marketing)/_components/technologies";
import {StudyCase} from "@/app/(marketing)/_components/study-case";
import Testimonial from "@/app/(marketing)/_components/testimonials";
import Team from "@/app/(marketing)/_components/team";
import MaxWithWrapper from "@/components/max-with-wrapper";
import {HeadingContactClean} from "@/app/(marketing)/_components/heading-contact-clean";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {whatsappURL} from "@/lib/utils";
import {CornerDownRight, Dot, Send} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ScheduleCall from "@/app/(marketing)/_components/schedule-call";


const MarketingPage = async () => {

    const lang = i18n.defaultLocale
    const dictionary = await getDictionary(lang);

    return (
        <MaxWithWrapper className="grid grid-cols-1 space-y-28">
            <Hero lang={lang} dictionary={dictionary.landing}/>
            <ServicesSection lang={lang} dictionary={dictionary.landing}/>
            <Technologies dictionary={dictionary.landing}/>
            <StudyCase dictionary={dictionary.landing}/>
            <ScheduleCall/>
            <Testimonial dictionary={dictionary.landing}/>
            <Team dictionary={dictionary.landing}/>
            <HeadingContactClean lang={lang} dictionary={dictionary.landing}/>
        </MaxWithWrapper>
    );
}

export default MarketingPage;
