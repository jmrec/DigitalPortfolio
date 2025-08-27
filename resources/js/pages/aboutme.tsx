// import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import 'react-vertical-timeline-component/style.min.css';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'About Me',
        href: '/',
    },
];

const about: Record<string, string> = {
    name: "Juan Miguel Recondo",
    nickname: "JM",
    description: "I'm a programmer from the Philippines. I primarily do software development with a bit of data analysis and system administration. I write a lot of Python, Kotlin, and Bash."
}

export default function AboutMe() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="About Me" />
            <h1 className="text-2xl p-6">{about.name}</h1>
            <div className="flex flex-col lg:flex-row-reverse w-full">
                <img className="rounded-full p-6 w-5/12 min-w-fit max-w-lg" src="https://picsum.photos/200" alt="My profile"/>
                <div className="w-full">
                    <h2 className="p-6 font-extrabold text-6xl"><span className="text-red-500">Hi,</span> I'm {about.nickname}</h2>
                    <p className="p-6 w-full md:w-1/2 text-xl">{about.description}</p>
                </div>
            </div>
        </AppLayout>
    );
}
