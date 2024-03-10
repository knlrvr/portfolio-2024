import { Reveal } from "../utils/reveal"
import ProjectCard from "./projectCard"

export default function Projects() {
    return (
        <div className="text-sm">
            <Reveal>
                <span className="font-migra text-xl tracking-widest">Projects</span>
            </Reveal>
            
            <div className="grid grid-cols-2 md:grid-cols-3 mt-8 gap-8">
                {/* <ProjectCard
                    url='https://github.com/knlrvr/create-exwind-app'
                    title='create-exwind-app'
                    description='A CLI tool for generating React projects with Next.js, Tailwind, Convex, & Jest.'
                /> */}
                <ProjectCard
                    url='https://github.com/knlrvr/ttrpcompanion'
                    title='TTRPCompanion'
                    description='A gaming utility app that allows users to track full campaign stats in D&D & other TTRPGs.'
                    // tech={['TypeScript', 'Next.js', 'Tailwind', 'tRPC', 'Prisma', 'Supabase', 'NextAuth', 'Playwright']}
                />
                <ProjectCard
                    url='https://theskyisfake.org'
                    title='The Sky Is Fake'
                    description='An image sharing platform dedicated to pictures of the sky that just don&apos;t seem real.'
                    // tech={['TypeScript', 'Next.js', 'Tailwind', 'Convex', 'Clerk']}
                />
                <ProjectCard
                    url='https://github.com/knlrvr/abstract'
                    title='ABSTRACT Store'
                    description='Abstract is an ecommerce platform that offers a unique focus on concepts related to consumerism and materialism. This is satire.'
                    // tech={['JavaScript', 'Next.js', 'Tailwind', 'MongoDB']}
                />
                <ProjectCard
                    url='https://portfolio-template-knlrvr.vercel.app/'
                    title='Portfolio Template'
                    description='A portfolio template inspired by Bartosz Jarocki&apos;s Next.js/shadcn CV.'
                    // tech={['HTML', 'CSS', 'JavaScript']}
                />
                <ProjectCard
                    url='https://knlrvr.com'
                    title='knlrvr.com'
                    description='My previous portfolio. Design heavy. Dark mode optional.'
                    // tech={['TypeScript', 'Next.js', 'Tailwind', 'Framer Motion', 'Convex']}
                />
            </div>
        </div>
    )
}