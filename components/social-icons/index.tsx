import { cn } from '@/lib/utils'
import {
    Mail,
    Github,
    Facebook,
    Youtube,
    Linkedin,
    Twitter,
    Mastodon,
    Instagram,
    GoodReads,
    StackOverflow,
    StackExchange,
    Hostinger, WhatsApp, Telegram, Odoo,
} from './icons'

const components = {
    mail: Mail,
    github: Github,
    facebook: Facebook,
    youtube: Youtube,
    linkedin: Linkedin,
    twitter: Twitter,
    mastodon: Mastodon,
    instagram: Instagram,
    goodReads: GoodReads,
    stackOverflow: StackOverflow,
    stackExchange: StackExchange,
    whatsapp: WhatsApp,
    telegram: Telegram,
    hostinger: Hostinger,
    odoo: Odoo
}

type SocialIconProps = {
    kind: keyof typeof components
    href: string | undefined
    size?: number,
    svgClassName?: string,
    aClassName?: string
}

const SocialIcon = ({ kind, href, size = 8, svgClassName='', aClassName='' }: SocialIconProps) => {
    if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
        return null

    const SocialSvg = components[kind]

    return (
        <a
            className={
                cn(
                    "text-sm text-gray-500 transition hover:text-gray-600",
                    aClassName
                )
            }
            target="_blank"
            rel="noopener noreferrer"
            href={href}
        >
            <span className="sr-only">{kind}</span>
            <SocialSvg
                className={cn(
                    `fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-${size} w-${size}`,
                    svgClassName
                )}
            />
        </a>
    )
}

export default SocialIcon
