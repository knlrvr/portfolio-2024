import WorkCard from "./workCard"
import { Section, Subsection } from "./section"

export default function Work() {
    return (
        <Section title="Work">
            <div className="space-y-8">
                    <WorkCard
                        title='Software Developer'
                        org='Fenili Apparel'
                        dates='2024 - Present'
                        description='Lead the design & development of admin tools & e-commerce storefront. Collaborating closely with CEO & Product Team to track objectives & ship frequently. '
                    />
                    <WorkCard
                        title='Software Developer'
                        org='Freelance'
                        dates='2022 - 2024'
                        description='Worked with a range of small to medium businesses, agencies, start-ups, and individuals to build products, experiences, and improve technical direction.'
                    />
            </div>
        </Section>
    )
}
