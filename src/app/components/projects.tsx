import { Reveal } from "../utils/reveal"
import ProjectCard from "./projectCard"

export default function Projects() {
    return (
        <div className="text-sm">
            <Reveal>
                <span className="font-migra text-xl tracking-widest">Projects</span>
            </Reveal>
            
            <div className="grid grid-cols-2 md:grid-cols-3 mt-8 gap-8">
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
                    url='https://github.com/knlrvr/theviewfrominside'
                    title='The View From Inside'
                    description='A blog built with Next.js & Sanity.io for content management. '
                />
                <ProjectCard
                    url='https://github.com/knlrvr/ttrpcompanion'
                    title='Abstract'
                    description='An ecommerce store that offers conceptual products related to consumerism and materialism. Built with Next.kjs & MongoDB.'
                />
                <ProjectCard
                    url='https://github.com/knlrvr/ttrpcompanion'
                    title='knlrvr.dev'
                    description='My personal portfolio (where you are now)! Built with Next.js & Convex.'
                />
            </div>
        </div>
    )
}