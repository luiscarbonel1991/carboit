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
    id: "inventory",
    title: "Inventory",
    description:
      "Odoo's Inventory module offers real-time stock management with smart replenishment strategies, streamlined receipt, quality control, and storage processes. Enjoy offline functionality, optimize warehouse activities, integrate with carriers, and ensure robust inventory valuation methods, maximizing productivity and efficiency.",
    button: "Let's Talk Inventory",
    image: "/static/images/marketing/odoo/inventory.webp" // Image URL
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    description:
      "Odoo's Manufacturing module streamlines production processes with efficiency and control. Plan, schedule, and track production seamlessly. Utilize bill of materials, work orders, and routing to optimize workflows. Integrate inventory management for real-time tracking. Enjoy cost analysis, quality control, and automated reporting. With Odoo, achieve operational excellence and enhance manufacturing productivity.",
    button: "Let's Talk Manufacturing",
    image: "/static/images/marketing/odoo/manufacturing.webp" // Image URL
  },
  {
    id: "emailMarketing",
    title: "Marketing",
    description:
      "Odoo's Social Marketing module empowers businesses to enhance their online presence and engage with their audience effectively. Seamlessly manage social media accounts, schedule posts, and track performance metrics. Utilize advanced analytics to understand audience behavior and optimize marketing strategies. With Odoo, unlock the full potential of social media marketing to drive brand awareness and engagement.",
    button: "Let's Talk Marketing",
    image: "/static/images/marketing/odoo/social.gif" // Image URL
  },
  {
    id: "pointOfSale",
    title: "Point of Sale",
    description:
      "Odoo's Point of Sale (POS) module revolutionizes retail operations with intuitive and feature-rich functionality. Seamlessly manage sales, inventory, and customer data in real-time. Utilize customizable product catalogs, integrated payment solutions, and loyalty programs to enhance customer experience. Enjoy offline capabilities for uninterrupted service and robust reporting for informed decision-making. With Odoo POS, streamline transactions and elevate the retail experience for both customers and businesses.",
    button: "Let's Talk Point of Sale",
    image: "/static/images/marketing/odoo/point_of_sales.webp" // Image URL
  },
  {
    id: "project",
    title: "Project",
    description:
      "Odoo's Project module offers a comprehensive solution for efficient project management. Plan, organize, and track projects seamlessly with intuitive tools. Utilize Gantt charts, task lists, and milestone tracking for clear project visualization. Collaborate effectively with team members through shared documents and communication channels. Monitor progress, allocate resources, and manage budgets with ease. With Odoo Project, streamline project workflows and achieve successful outcomes.",
    button: "Let's Talk Project",
    image: "/static/images/marketing/odoo/project.webp" // Image URL
  },
  {
    id: "purchase",
    title: "Purchase",
    description:
      "Odoo's Project module offers a comprehensive solution for efficient project management. Plan, organize, and track projects seamlessly with intuitive tools. Utilize Gantt charts, task lists, and milestone tracking for clear project visualization. Collaborate effectively with team members through shared documents and communication channels. Monitor progress, allocate resources, and manage budgets with ease. With Odoo Project, streamline project workflows and achieve successful outcomes.",
    button: "Let's Talk Purchase",
    image: "/static/images/marketing/odoo/purchase.webp" // Image URL
  },
  {
    id: "sales",
    title: "Sales",
    description:
      "Odoo's Sales module revolutionizes the sales process, empowering businesses to drive revenue growth effectively. Track leads, manage opportunities, and forecast sales accurately with intuitive tools. Utilize customizable pipelines, automated communication, and integrated quotations for streamlined operations. Foster customer relationships with seamless communication channels and personalized interactions. Analyze sales metrics, monitor team performance, and make data-driven decisions for success. With Odoo Sales, optimize sales workflows and achieve business objectives efficiently.",
    button: "Let's Talk Sales",
    image: "/static/images/marketing/odoo/sales.webp" // Image URL
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
