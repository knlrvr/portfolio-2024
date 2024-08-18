import WorkCard from "./workCard"
import { Section, Subsection } from "./section"

export default function Work() {
    return (
        <Section title="Work Experience">
            <div className="space-y-8">
                <Subsection title="2022 - Present">
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