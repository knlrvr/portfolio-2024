import { Section, Subsection } from "./section";

export default function About() {
    return (
        <Section title="Kane Lariviere">
            <Subsection title="About">
                <p className="text-sm tracking-wide mb-16 text-neutral-600 dark:text-neutral-400">
                    <span className="text-[#111] dark:text-white">Software Developer based in the US.</span> Crafting engaging and memorable experiences. Exploring sustainability & advocating for a greener web. <em className="text-[#111] dark:text-white">Always shipping</em>.
                </p>
            </Subsection>
        </Section>
    )
}