import ProjectCard from "./projectCard"

export default function Projects() {
    return (
        <div className="text-sm">
            <span className="font-migra text-xl">Projects</span>
            <div className="grid grid-cols-2 md:grid-cols-3 mt-4 gap-x-12 gap-y-8">
                <ProjectCard
                    url='https://github.com/knlrvr/ttrpcompanion'
                    title='TTRPCompanion'
                    description='A gaming utility app that allows users to track full campaign stats in D&D & other TTRPGs.'
                />
                <ProjectCard
                    url='https://github.com/knlrvr/ttrpcompanion'
                    title='The Sky Is Fake'
                    description='An image sharing platform dedicated to pictures of the sky that just don&apos;t seem real.'
                />
                <ProjectCard
                    url='https://github.com/knlrvr/ttrpcompanion'
                    title='The View From Inside'
                    description='A blog built with Next.js & Sanity.io for content management. '
                />
                <ProjectCard
                    url='https://github.com/knlrvr/ttrpcompanion'
                    title='KeepUp'
                    description='A social media platform that wasn&apos;t supposed to be a twitter clone but is.'
                />
                <ProjectCard
                    url='https://github.com/knlrvr/ttrpcompanion'
                    title='Abstract'
                    description='An ecommerce store that offers conceptual products related to consumerism and materialism.'
                />
                <ProjectCard
                    url='https://github.com/knlrvr/ttrpcompanion'
                    title='knlrvr.dev'
                    description='My personal portfolio.'
                />
            </div>
        </div>
    )
}