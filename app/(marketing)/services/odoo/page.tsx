import { i18n } from "@/i18n-config"
import { getDictionary } from "@/lib/dictionary"
import { Metadata } from "next"
import { getSiteMetadata } from "@/lib/utils"
import { odooKeywords } from "@/config/site-keywork"
import { Hero } from "@/app/(marketing)/services/odoo/_components/hero"
import OdooModules from "@/app/(marketing)/services/odoo/_components/service-sections"
import MaxWithWrapper from "@/components/max-with-wrapper"

const ServicesPage = async () => {
  const lang = i18n.defaultLocale
  const dictionary = await getDictionary(lang)

  return (
    <MaxWithWrapper className="flex flex-col space-y-28">
      <Hero dictionary={dictionary.odoo} />
      <OdooModules lang={lang} dictionary={dictionary.odoo} />
    </MaxWithWrapper>
  )
}

export default ServicesPage

export async function generateMetadata() {
  const lang = i18n.defaultLocale
  const dictionary = await getDictionary(lang)
  const { odoo } = dictionary
  return {
    ...getSiteMetadata({
      title: odoo.seo.title,
      description: odoo.seo.description,
      keywords: odooKeywords
    })
  } as Metadata
}
