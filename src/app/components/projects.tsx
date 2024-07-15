import { Reveal } from "../utils/reveal"
import ProjectCard from "./projectCard"

export default function Projects() {
    return (
        <div className="text-sm">
            <Reveal>
                <span className="font-medium text-base tracking-wider">Recent Projects</span>
            </Reveal>
            
            <div className="grid grid-cols-1 md:grid-cols-2 mt-4 gap-x-12 gap-y-8">
                <ProjectCard
                    url='studico'
                    title='Studico'
                    description='A web-based music production assistance suite that empowers small to medium teams to create, collaborate, and share their music.'
                />
                {/* <ProjectCard
                    url='ttrpc'
                    title='TTRPCompanion'
                    description='A gaming utility app that allows users to track full campaign stats in D&D & other TTRPGs.'
                /> */}
                <ProjectCard
                    url='theskyisfake'
                    title='The Sky Is Fake'
                    description='An image sharing platform dedicated to pictures of the sky that just don&apos;t seem real.'
                />
                {/* <ProjectCard
                    url='abstract'
                    title='ABSTRACT Store'
                    description='An ecommerce platform that offers a unique focus on concepts related to consumerism and materialism. This is satire.'
                /> */}
                <ProjectCard
                    url='templateportfolio'
                    title='Portfolio Template'
                    description='An HTML + CSS portfolio template inspired by Bartosz Jarocki&apos;s Next.js/shadcn CV.'
                />
            </div>
        </div>
    )
}