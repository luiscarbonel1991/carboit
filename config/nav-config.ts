import { MainNavItem, SidebarNavItem } from "@/types/nav"

interface NavConfig{
    main: MainNavItem[]
    sidebar: SidebarNavItem[]
}

export const navConfig: NavConfig = {
    main: [
        {
            title: 'Services',
            href: '/services',
        },
        {
            title: 'Testimonials',
            href: '/testimonials',
        },
        {
            title: 'Contact us',
            href: '/contact',
        },
    ],
    sidebar: [
        {
            title: 'Home',
            href: '/',
            items:[],
        },
        {
            title: 'Services',
            href: '/services',
            items:[],
        },
        {
            title: 'Testimonials',
            href: '/testimonials',
            items:[],
        },
        {
            title: 'Contact us',
            href: '/contact',
            items:[],
        },
    ],
};