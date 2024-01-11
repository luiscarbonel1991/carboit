import { MainNavItem, SidebarNavItem } from "@/types/nav"

interface NavConfig{
    main: MainNavItem[]
    sidebar: SidebarNavItem[]
}

export const navConfig: NavConfig = {
    main: [
        {
            title: 'Home',
            href: '/',
        },
        {
            title: 'Services',
            href: '/services',
        },
        {
            title: 'Testimonials',
            href: '/testimonials',
            disabled: true,
        },
        {
            title: 'Team',
            href: '/team',
            disabled: true,
        },
        {
            title: 'Contact us',
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
            title: 'Services',
            href: '/services',
            items:[],
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