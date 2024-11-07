import ProjectCard from "./projectCard"
import { Section, Subsection } from "./section"

export default function Projects() {
    return (
        <Section title="Select Projects">
            <div className="space-y-8 mb-16">
                <Subsection title="2024 ~">
                    <ProjectCard
                        url='fenili'
                        title='Fenili Apparel'
                        description='An ecommerce storefront for the Fenili apparel & lifestyle brand.'
                    />
                </Subsection>
                <Subsection title="2024 ~">
                    <ProjectCard
                        url='studico'
                        title='Studico'
                        description='A web-based music production assistance suite that empowers small to medium teams to create, collaborate, and share their music.'
                    />
                </Subsection>
                <Subsection title="2023">
                    <ProjectCard
                        url='theskyisfake'
                        title='The Sky Is Fake'
                        description='An image sharing platform dedicated to pictures of the sky that just don&apos;t seem real.'
                    />
                </Subsection>
                <Subsection title="2023">
                    <ProjectCard
                        url='templateportfolio'
                        title='Portfolio Template'
                        description='An HTML + CSS portfolio template inspired by Bartosz Jarocki&apos;s Next.js/shadcn CV.'
                    />
                </Subsection>
            </div>
        </Section>
    )
}