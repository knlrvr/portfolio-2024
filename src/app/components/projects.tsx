import ProjectCard from "./projectCard"
import { Section, Subsection } from "./section"

export default function Projects() {
    return (
        <Section title="Projects">
            <div className="space-y-8">
                <Subsection title="2024 ~">
                    <ProjectCard
                        url='studico'
                        title='Studico'
                        description='A web-based music production assistance suite that empowers small to medium teams to create, collaborate, and share their music.'
                        tech={['TypeScript', ' • ', 'React',' • ',  'Next.js', ' • ', 'Tailwind', ' • ', 'shadcn', ' • ', 'Convex', ' • ', 'Clerk']}
                    />
                </Subsection>
                <Subsection title="2023">
                    <ProjectCard
                        url='theskyisfake'
                        title='The Sky Is Fake'
                        description='An image sharing platform dedicated to pictures of the sky that just don&apos;t seem real.'
                        tech={['TypeScript', ' • ', 'React',' • ',  'Next.js', ' • ', 'Tailwind', ' • ', 'shadcn', ' • ', 'Convex', ' • ', 'Clerk']}
                    />
                </Subsection>
                <Subsection title="2023">
                    <ProjectCard
                        url='templateportfolio'
                        title='Portfolio Template'
                        description='An HTML + CSS portfolio template inspired by Bartosz Jarocki&apos;s Next.js/shadcn CV.'
                        tech={['HTML', ' • ', 'CSS', ' • ', 'JavaScript']}
                    />
                </Subsection>
            </div>
        </Section>
    )
}