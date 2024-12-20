import WorkCard from "./workCard"
import { Section, Subsection } from "./section"
import Link from "next/link"
import { RxArrowRight } from "react-icons/rx"
import { Sparkles } from "lucide-react"

export default function Work() {
    return (
        <Section title="Work">
            <div className="space-y-8">
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
                <Subsection title="">
                    <Link href="/LariviereKane-2024.pdf" target="_blank" className="flex items-center gap-1 text-sm text-neutral-600 dark:text-neutral-400 group w-fit mb-16">
                        <span className="group-hover:underline underline-offset-4 ">View My Full Resumé</span>
                        <span className="group-hover:translate-x-1.5 transition duration-100">
                            <RxArrowRight />
                        </span>
                    </Link>
                </Subsection>
            </div>
        </Section>
    )
}
