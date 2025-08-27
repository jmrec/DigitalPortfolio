import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineSchool } from "react-icons/md";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Education',
        href: '/education',
    },
];

interface Education {
    date: string
    school: string
    location: string
    program: string
    description: string
}

const education: Education[] = [
    {
        date: "2009 - 2015",
        school: "Legarda Elementary School",
        program: "",
        location: "Manila, PH",
        description: ""
    },
    {
        date: "2015 - 2019",
        school: "Ramon Magsaysay High School",
        program: "Special Science",
        location: "Manila, PH",
        description: "Robotics Builder and Programmer; Chess Varsity"
    },
    {
        date: "2019 - 2021",
        school: "University of Santo Tomas",
        program: "Science, Technology, Engineering, and Mathematics (STEM)",
        location: "Manila, PH",
        description: ""
    },
    {
        date: "2021",
        school: "FEU Institute of Technology",
        program: "BS Computer Science, with Specialization in Software Engineering",
        location: "Manila, PH",
        description: ""
    },
    {
        date: "2023 - Present",
        school: "University of the Cordilleras",
        program: "BS Information Technology, Major in Network and Security",
        location: "Baguio, PH",
        description: "Consistent Academic Awardee"
    }
]

export default function Education() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Aboutme" />
            <VerticalTimeline
                lineColor='var(--primary)'
            >
                {education.map(educ => (
                    <VerticalTimelineElement
                        contentStyle={{
                            background: 'var(--card)',
                            color: 'var(--card-foreground)',
                        }}
                        className="vertical-timeline-element--work"
                        date={educ.date}
                        iconStyle={{ background: educ.date.endsWith("Present") ? 'rgb(33, 150, 243)' : 'var(--icon-background)', color: '#fff' }}
                        icon={<MdOutlineSchool />}
                    >
                        <h3 className="vertical-timeline-element-title">{educ.school}</h3>
                        <h4 className="vertical-timeline-element-subtitle">{educ.location}</h4>
                        {educ.program ? <br/> : null}
                        <h4 className="vertical-timeline-element-subtitle">{educ.program}</h4>
                        <p>{educ.description}</p>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </AppLayout>
    );
}

// 'rgb(33, 150, 243)'
