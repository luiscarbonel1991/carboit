import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { getDictionary } from "@/lib/dictionary"
import { Locale } from "@/i18n-config"

const sections = [
  {
    id: "sales",
    image: "/static/images/marketing/odoo/undraw_savings_re_eq4w.svg" // Image URL
  },
  {
    id: "inventory",
    image: "/static/images/marketing/odoo/undraw_web_shopping_re_owap.svg" // Image URL
  },
  {
    id: "purchase",
    image: "/static/images/marketing/odoo/undraw_business_shop_re_ruf4.svg" // Image URL
  }
]

interface OdooModulesProps {
  lang: Locale
  dictionary: Awaited<ReturnType<typeof getDictionary>>["odoo"]
}

const OdooModules = ({ dictionary, lang }: OdooModulesProps) => {
  return (
    <section className="grid grid-cols-1 gap-16">
      {sections.map((section, index) => {
        // @ts-ignore
        const odooModule = dictionary.modules[section.id]
        return (
          <div
            id={`${section.id}`}
            key={`odoo-module-${section.id}`}
            className={cn(
              "py-8 px-4 mx-auto max-w-screen-xl md:grid md:grid-cols-2",
              "rounded-3xl shadow-lg dark:bg-gray-800 dark:shadow-none scroll-mt-20"
            )}
            dir={index % 2 == 0 ? "ltr" : "rtl"}
          >
            <figure className="md:col-span-1">
              <Image
                src={section.image}
                alt={odooModule.title}
                width={500}
                height={500}
                className="rounded-3xl"
                priority={index === 0}
                style={{ width: "auto", height: "auto" }}
              />
            </figure>
            <article className="md:col-span-1 mt-4" dir={"ltr"}>
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                {odooModule.title}
              </h2>
              <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">{odooModule.description}</p>
              <Link href={"/contact"} aria-label={`Let's Talk About ${odooModule.title}`}>
                <Button
                  variant="default"
                  aria-label={`Let's Talk About ${odooModule.title}`}
                  className="rounded-3xl transition ease-in-out delay-150 hover:-translate-y-1 scale-105 font-bold"
                >
                  Let's Talk About {odooModule.title}
                </Button>
              </Link>
            </article>
          </div>
        )
      })}
    </section>
  )
}

export default OdooModules
