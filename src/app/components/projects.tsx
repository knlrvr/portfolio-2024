import ProjectCard from "./projectCard"
import { Section, Subsection } from "./section"

export default function Projects() {
    return (
        <Section title="Projects">
            <div className="space-y-8 text-sm">
                <Subsection>
                    <ProjectCard
                        url='fenili'
                        title='Fenili Apparel'
                        description='An ecommerce storefront for the Fenili apparel & lifestyle brand.'
                    />
                </Subsection>
                <Subsection>
                    <ProjectCard
                        url='studico'
                        title='Studico'
                        description='A web-based music production assistance suite that empowers small to medium teams to create, collaborate, and share their music.'
                    />
                </Subsection>
                <Subsection>
                    <ProjectCard
                        url='theskyisfake'
                        title='The Sky Is Fake'
                        description='An image sharing platform dedicated to pictures of the sky that just don&apos;t seem real.'
                    />
                </Subsection>
                <Subsection>
                    <ProjectCard
                        url='personalportfolio'
                        title='Personal Portfolio'
                        description='My personal portfolio (where you are now!)'
                    />
                </Subsection>
            </div>
        </Section>
    )
}