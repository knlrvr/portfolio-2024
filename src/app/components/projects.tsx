import { Reveal } from "../utils/reveal"
import ProjectCard from "./projectCard"

export default function Projects() {
    return (
        <div className="text-sm">
            <Reveal>
                <span className="font-migra text-xl tracking-widest">Projects</span>
            </Reveal>
            
            <div className="grid grid-cols-2 md:grid-cols-2 mt-8 gap-8">
                <ProjectCard
                    url='https://github.com/knlrvr/create-exwind-app'
                    title='create-exwind-app'
                    description='A CLI tool for generating React projects with Next.js, Tailwind, Convex, & Jest.'
                />
                <ProjectCard
                    url='https://github.com/knlrvr/ttrpcompanion'
                    title='TTRPCompanion'
                    description='A gaming utility app that allows users to track full campaign stats in D&D & other TTRPGs. Built with T3.'
                />
                <ProjectCard
                    url='https://theskyisfake.org'
                    title='The Sky Is Fake'
                    description='An image sharing platform dedicated to pictures of the sky that just don&apos;t seem real. Built with Next.js & Convex.'
                />
                <ProjectCard
                    url='https://portfolio-template-knlrvr.vercel.app/'
                    title='Portfolio Template'
                    description='A portfolio template inspired by Bartosz Jarocki&apos;s shadcn/ui CV. Built with HTML, CSS, & JS.'
                />
                <ProjectCard
                    url='https://knlrvr.com'
                    title='knlrvr.com'
                    description='My previous portfolio. Design heavy. Dark mode optional.'
                />
            </div>
        </div>
    )
}