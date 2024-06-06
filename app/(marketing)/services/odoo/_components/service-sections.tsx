import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { getDictionary } from "@/lib/dictionary"
import { Locale } from "@/i18n-config"

const sections = [
  {
    id: "accounting",
    title: "Accounting",
    description: `Odoo Accounting is a modern solution designed to simplify financial management. Its fast interface processes operations in under 90 milliseconds, and AI-powered invoice capture (98% accuracy) eliminates manual data entry. Automatic bank reconciliation with 28,000 banks and global compatibility make it versatile. It’s mobile-friendly, offers real-time reporting, and provides automated follow-ups for overdue payments via email, mail, or SMS.`,
    button: "Let's Talk Accounting",
    image: "/static/images/marketing/odoo/accounting.png" // Image URL
  },
  {
    id: "crm",
    title: "CRM",
    description: `Odoo CRM streamlines sales with a customer-focused approach. Manage leads efficiently, automate tasks, and track opportunities seamlessly. Stay organized with Kanban view, schedule follow-ups effortlessly, and communicate seamlessly via email, chat, SMS, and VoIP. Generate professional quotations in just a few clicks and make data-driven decisions with robust analytics. With AI lead scoring and automation, prioritize tasks effectively and maximize productivity. Odoo CRM is the ultimate tool for boosting sales performance and driving business growth.`,
    button: "Let's Talk CRM",
    image: "/static/images/marketing/odoo/crm.webp" // Image URL
  },
  {
    id: "hr",
    title: "HR",
    description: `Odoo's HR module centralizes employee management, offering a suite of features beyond a mere directory. Organize your workforce efficiently, categorizing by hours, job titles, and contract statuses. Safeguard private data with restricted access settings. Identify skillsets easily for tailored task assignments. Manage PTO seamlessly with integrated tracking and streamline document management securely. Conduct performance appraisals, oversee recruitment, facilitate onboarding, and monitor attendance effortlessly. With Odoo, empower your HR operations for optimal workforce management and growth.`,
    button: "Let's Talk HR",
    image: "/static/images/marketing/odoo/hr.webp" // Image URL
  },
  {
    id: "sales",
    title: "Sales",
    description:
      "Create clean, professional, and interactive quotes instantly with the incredible quote builder from Odoo. You can manage your sales orders and online store all in one platform.",
    button: "Let's Talk Sales",
    image: "/static/images/marketing/odoo/undraw_savings_re_eq4w.svg" // Image URL
  },
  {
    id: "inventory",
    title: "Inventory",
    description:
      "Manage your inventory in real-time with various features such as serial numbers, lots, packaging, storage strategies, and manage incoming and outgoing shipments.",
    button: "Let's Talk Inventory",
    image: "/static/images/marketing/odoo/undraw_web_shopping_re_owap.svg" // Image URL
  },
  {
    id: "purchase",
    title: "Purchase",
    description:
      "From quotation requests to receipts, from product variants to supplier invoices, let Odoo do all the work for you. Simplify your quotation requests and purchase orders, as well as create custom rules and replenishment methods.",
    button: "Let's Talk Purchase",
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
        return (
          <div
            id={`${section.id}`}
            key={`odoo-module-${section.id}`}
            className={cn(
              "py-8 px-4 mx-auto max-w-screen-xl md:grid md:grid-cols-2 gap-16",
              "rounded-3xl shadow-lg dark:bg-gray-800 dark:shadow-none scroll-mt-20"
            )}
            dir={index % 2 == 0 ? "ltr" : "rtl"}
          >
            <figure className="md:col-span-1">
              <Image
                src={section.image}
                alt={section.title}
                width={500}
                height={500}
                className="rounded-3xl"
                priority={index === 0}
                style={{ width: "auto", height: "auto" }}
              />
            </figure>
            <article className="md:col-span-1 mt-4" dir={"ltr"}>
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                {section.title}
              </h2>
              <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">{section.description}</p>
              <Link href={"/contact"} aria-label={`Let's Talk About ${section.title}`}>
                <Button
                  variant="default"
                  aria-label={`Let's Talk About ${section.title}`}
                  className="rounded-3xl transition ease-in-out delay-150 hover:-translate-y-1 scale-105 font-bold"
                >
                  Let's Talk About {section.title}
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
