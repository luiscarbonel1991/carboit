import {ContactForm} from "@/app/(marketing)/contact/contact-form";
import {HeadingForm} from "@/app/(marketing)/contact/heading-form";
import SvgBackground from "@/components/svg-background";

const ContactPage = () => {
    return (
        <div className="isolate container grid lg:grid-cols-2 place-items-center pt-8 md:pt-12 md:pb-24">
            <SvgBackground className="md:-rotate-180"/>
            <HeadingForm/>
            <ContactForm/>
        </div>
    );
}

export default ContactPage;