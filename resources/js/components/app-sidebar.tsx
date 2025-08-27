import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
// import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { BriefcaseBusiness, CodeXml, Folder, GalleryThumbnails, House, Rss, UserRound } from 'lucide-react';
import AppLogo from './app-logo';
import { LuLinkedin } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineSchool } from "react-icons/md";

const mainNavItems: NavItem[] = [
    {
        title: 'About Me',
        href: '/',
        icon: UserRound
    },
    {
        title: 'Education',
        href: 'education',
        icon: MdOutlineSchool
    },
    {
        title: 'Skills',
        href: 'skills',
        icon: CodeXml
    },
    {
        title: 'Portfolio',
        href: 'https://github.com/laravel/react-starter-kit',
        icon: GalleryThumbnails
    },
    {
        title: 'Blog',
        href: 'blog',
        icon: Rss
    }
];

const footerNavItems: NavItem[] = [
    {
        title: 'GitHub',
        href: 'https://github.com/jmrec',
        icon: FaGithub,
    },
    {
        title: 'LinkedIn',
        href: 'https://www.linkedin.com/in/jmrecondo/',
        icon: LuLinkedin
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                {/*<NavUser />*/}
            </SidebarFooter>
        </Sidebar>
    );
}
