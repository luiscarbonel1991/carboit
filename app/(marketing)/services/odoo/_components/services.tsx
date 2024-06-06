import { getDictionary } from "@/lib/dictionary"
import { Locale } from "@/i18n-config"
import CardService from "@/app/(marketing)/_components/card-service"
import { AreaChart } from "lucide-react"
import Image from "next/image"

// Images
import webDevelopment from "@/public/static/images/marketing/services/web-development.webp"
import odoo from "@/public/static/images/marketing/services/odoo.webp"
import applicationDevelopment from "@/public/static/images/marketing/services/application-develop.webp"

const services = [
  {
    id: "website",
    image: (
      <Image src={webDevelopment} alt={"Web Development"} width={100} height={100} className="rounded-3xl shadow-md" />
    ),
    icon: <AreaChart size={48} className="text-pink-500" />,
    link: undefined
  },
  {
    id: "development",
    image: (
      <Image
        src={applicationDevelopment}
        alt={"Application Development"}
        width={100}
        height={100}
        className="rounded-3xl shadow-md"
      />
    ),
    icon: "",
    link: undefined
  },
  {
    id: "training",
    image: <Image src={odoo} alt={"Training and Support"} width={100} height={100} className="rounded-3xl shadow-md" />,
    icon: "",
    link: undefined
  }
]

interface OdooModulesProps {
  lang: Locale
  dictionary: Awaited<ReturnType<typeof getDictionary>>["odoo"]
}

const OdooServices = ({ dictionary, lang }: OdooModulesProps) => {
  return (
    <section className="grid grid-cols-1 px-4 md:px-10 py-10">
      <div className="grid lg:grid-cols-3 gap-8 place-items-top">
        {services.map((service, index) => {
          //@ts-ignore
          const serviceDic = dictionary.services[service.id]
          return (
            <CardService
              locale={lang}
              key={index}
              cardClassName="shadow-md hover:shadow-lg hover:bg-zinc-100 transition duration-300 ease-in-out min-h-[300px] md:min-h-[490px] hover:scale-105"
              title={serviceDic.title}
              description={serviceDic.description}
              headerContent={service.image ? service.image : service.icon}
              link={service.link}
            />
          )
        })}
      </div>
    </section>
  )
}

export default OdooServices
