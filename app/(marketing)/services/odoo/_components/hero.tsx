import Link from "next/link"
import { whatsappURL } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { getDictionary } from "@/lib/dictionary"
import { Dot, Send } from "lucide-react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

import sales from "@/public/static/images/odoo/sales.svg"
import crm from "@/public/static/images/odoo/crm.svg"
import accounting from "@/public/static/images/odoo/accounting.svg"
import inventory from "@/public/static/images/odoo/inventory.svg"
import manufacturing from "@/public/static/images/odoo/manufacturing.svg"
import project from "@/public/static/images/odoo/project.svg"
import purchase from "@/public/static/images/odoo/purchase.svg"
import pointOfSale from "@/public/static/images/odoo/point-of-sales.svg"
import emailMarketing from "@/public/static/images/odoo/email-marketing.svg"
import hr from "@/public/static/images/odoo/hr.svg"

const odooResources = [
  {
    title: "CRM",
    alt: "Odoo CRM",
    description: "Manage your leads and customers, track sales, and automate your sales processes.",
    image: crm,
    link: "#crm"
  },
  {
    title: "Sales",
    alt: "Odoo Sales",
    description: "Automate your sales processes, manage your sales team, and track your sales performance.",
    image: sales,
    link: "#sales"
  },
  {
    title: "Accounting",
    alt: "Odoo Accounting",
    description: "Manage your accounting, invoicing, and expenses with ease.",
    image: accounting,
    link: "#accounting"
  },
  {
    title: "Inventory",
    alt: "Odoo Inventory",
    description: "Manage your inventory, track stock levels, and automate your supply chain.",
    image: inventory,
    link: "#inventory"
  },
  {
    title: "Manufacturing",
    alt: "Odoo Manufacturing",
    description: "Manage your manufacturing processes, track production orders, and optimize your production.",
    image: manufacturing
  },
  {
    title: "Project",
    alt: "Odoo Project",
    description: "Manage your projects, track tasks, and collaborate with your team.",
    image: project
  },
  {
    title: "Purchase",
    alt: "Odoo Purchase",
    description: "Manage your purchases, track your suppliers, and optimize your procurement.",
    image: purchase,
    link: "#purchase"
  },
  {
    title: "Point of Sale",
    alt: "Odoo Point of Sale",
    description: "Manage your sales, track your customers, and optimize your point of sale.",
    image: pointOfSale
  },
  {
    title: "Marketing",
    alt: "Odoo Email Marketing",
    description: "Manage your email campaigns, track your leads, and optimize your marketing.",
    image: emailMarketing
  },
  {
    title: "HR",
    alt: "Odoo HR",
    description: "Manage your employees, track your attendance, and optimize your human resources.",
    image: hr
  }
].sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()))

interface HeroProps {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["odoo"]
}

export const Hero = ({ dictionary }: HeroProps) => {
  const { hero, modules } = dictionary
  return (
    <section className="isolate container grid lg:grid-cols-2 place-items-center pt-20  px-4 md:px-10">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-6xl">
          {hero.h1}{" "}
          <span className="text-primary-500">
            <span className="tracking-tight inline from-[#FF1CF7] to-[#b249f8] bg-clip-text text-transparent bg-gradient-to-b">
              {hero.h1_remark_word}
            </span>{" "}
            {hero.h1_rest}
          </span>
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">{hero.p_description}</p>

        <div className="mt-6 flex flex-row gap-3">
          <Link href={whatsappURL()} target={"_blank"} aria-label="Let's Talk on WhatsApp">
            <Button
              variant="default"
              aria-label="Let's Talk on WhatsApp"
              className="rounded-3xl transition ease-in-out delay-150 hover:-translate-y-1 scale-105 font-bold bg-gradient-to-r from-blue-600 to-purple-600"
              size="lg"
            >
              {hero.button_lets_talk} <Send className="ml-2 h-6 w-6 animate-pulse" />
            </Button>
          </Link>

          <Link href={whatsappURL()} target={"_blank"} aria-label="Let's Talk on WhatsApp">
            <Button variant="link" aria-label="Available Now on WhatsApp" size="lg">
              <div className="flex flex-row gap-4">
                <div className="relative flex flex-col items-center justify-center">
                  <Dot className="absolute h-16 w-16 animate-magnetic-pulse text-green-500" />
                  <Dot className="absolute h-16 w-16 animate-magnetic-wave text-green-600" />
                </div>

                <span className="text-sm text-gray-600">Available now</span>
              </div>
            </Button>
          </Link>
        </div>
      </div>

      <div className="py-6 md:block">
        <Card className="bg-oooscillate-pattern bg-cover bg-center shadow-2xl">
          <CardContent className="p-4">
            <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
              {odooResources.map((resource) => (
                <div className={"flex flex-col justify-center items-center"} key={resource.title}>
                  <Card className="w-20 hover:shadow-2xl hover:scale-105 transition duration-300">
                    <CardContent className="p-2">
                      <Link href={resource.link ? resource.link : ""}>
                        <Image quality={100} src={resource.image} alt={resource.alt} height={60} width={60} />
                      </Link>
                    </CardContent>
                  </Card>
                  <p className="text-center font-semibold">{resource.title}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
