import WorkCard from "./workCard"
import { Section, Subsection } from "./section"

export default function Work() {
    return (
        <Section title="Work">
            <div className="space-y-8 mb-16">
                <Subsection title="2024 - Present">
                    <WorkCard
                        title='Software Developer'
                        org='Fenili Apparel'
                        description='Led the design & development of admin tools & e-commerce app. Collaborated closely with CEO & Product Team to track objectives & ship frequently. '
                    />
                </Subsection>
                <Subsection title="2022 - 2024">
                    <WorkCard
                        title='Software Developer'
                        org='Freelance'
                        description='Worked with a range of small to medium businesses, agencies, start-ups, and individuals to build products, experiences, and improve technical direction.'
                    />
                </Subsection>
            </div>
        </Section>
    )
}
