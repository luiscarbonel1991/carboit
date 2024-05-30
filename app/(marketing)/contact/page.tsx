import { HeadingForm } from "@/components/heading-form"
import SvgBackground from "@/components/svg-background"
import { i18n, Locale } from "@/i18n-config"
import { getDictionary } from "@/lib/dictionary"
import { getSiteMetadata } from "@/lib/utils"
import { Metadata } from "next"
import { contactPageKeywords } from "@/config/site-keywork"
import { ContactForm } from "@/app/(marketing)/contact/contact-form"

export async function generateMetadata() {
  const lang = i18n.defaultLocale
  const dictionary = await getDictionary(lang)
  const { contact } = dictionary

  return {
    ...getSiteMetadata({
      title: contact.seo.title,
      description: contact.seo.description,
      keywords: [...contactPageKeywords]
    })
  } as Metadata
}

interface ContactPageProps {
  params: { lang: Locale }
}

const ContactPage = async ({ params: { lang } }: ContactPageProps) => {
  const dictionary = await getDictionary(lang)
  return (
    <div className="isolate container grid lg:grid-cols-2 place-items-center pt-8 md:pt-12 md:pb-24">
      <SvgBackground className="md:-rotate-180" />
      <HeadingForm dictionary={dictionary.contact} />
      <ContactForm dictionary={dictionary.contact} />
    </div>
  )
}

export default ContactPage
