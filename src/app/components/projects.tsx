import ProjectCard from "./projectCard"
import { Section, Subsection } from "./section"

export default function Projects() {
    return (
        <Section title="Projects">
            <div className="space-y-8 text-sm">
                    <ProjectCard
                        url='fenili'
                        title='Fenili Apparel'
                        description='An ecommerce storefront for the Fenili apparel & lifestyle brand.'
                    />
                    <ProjectCard
                        url='studico'
                        title='Studico'
                        description='A web-based music production assistance suite that empowers small to medium teams to create, collaborate, and share their music.'
                    />
                    <ProjectCard
                        url='theskyisfake'
                        title='The Sky Is Fake'
                        description='An image sharing platform dedicated to pictures of the sky that just don&apos;t seem real.'
                    />
                    <ProjectCard
                        url='templateportfolio'
                        title='Portfolio Template'
                        description='An HTML + CSS portfolio template inspired by Bartosz Jarocki&apos;s Next.js/shadcn CV.'
                    />
            </div>
        </Section>
    )
}