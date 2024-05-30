import Link from "next/link"
import { Locale } from "@/i18n-config"
import { redirectPathURL } from "@/lib/utils"
import Image from "next/image"

interface LogoProps {
  width?: number
  height?: number
}

export const Logo = ({ width = 125, height = 50 }: LogoProps) => {
  return (
    <Link href={"/"} className="flex w-full">
      {/* <Icons.logo className="h-6 w-6"/>
            <span className="text-lg font-bold sm:inline-block">
                {siteMetadata.applicationName}
            </span>*/}

      <Image
        src={"/static/images/logos/logo-banner-light.webp"}
        alt={"Carboit logo"}
        width={width}
        height={height}
        priority={true}
        quality={100}
        loading={"eager"}
      />
    </Link>
  )
}
