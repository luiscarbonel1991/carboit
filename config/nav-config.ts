import { MainNavItem, SidebarNavItem } from "@/types/nav"

interface NavConfig{
    main: MainNavItem[]
    sidebar: SidebarNavItem[]
}

export const navConfig: NavConfig = {
    main: [
        {
            title: 'home',
            href: '/',
        },
        {
            title: 'Odoo',
            href: '/services/odoo',
        },
        {
            title: 'services',
            href: '/services',
            disabled: true,
        },
        {
            title: 'testimonials',
            href: '/testimonials',
            disabled: true,
        },
        {
            title: 'team',
            href: '/team',
            disabled: true,
        },
        {
            title: 'contactus',
            href: '/contact',
        },
    ] as MainNavItem[],
    sidebar: [
        {
            title: 'Home',
            href: '/',
            items:[],
        },
        {
            title: 'Odoo',
            href: '/services/odoo',
            items:[],
        },
        {
            title: 'Services',
            href: '/services',
            items:[],
            disabled: true,
        },
        {
            title: 'Testimonials',
            href: '/testimonials',
            items:[],
            disabled: true,
        },
        {
            title: 'Contact us',
            href: '/contact',
            items:[],
        },
    ] as SidebarNavItem[],
};

export const getNavConfig = () => {
    return {
        main: navConfig.main.filter((item) => !item.disabled),
        sidebar: navConfig.sidebar.filter((item) => !item.disabled),
    };
}