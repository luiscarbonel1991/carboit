import {ContactForm} from "@/app/(marketing)/contact/contact-form";
import {HeadingForm} from "@/app/(marketing)/contact/heading-form";

const ContactPage = () => {
    return (
        <div className="isolate container grid lg:grid-cols-2 place-items-center pt-8 md:pt-12 md:pb-24">
            <div
                className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                aria-hidden="true"
            >
                <div
                    className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw))',
                    }}
                ></div>
            </div>
            <HeadingForm/>
            <ContactForm/>
        </div>
    );
}

export default ContactPage;