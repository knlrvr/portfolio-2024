import { Section, Subsection } from "./section";

export default function About() {
    return (
            <Section title="About">
                <p className="text-sm tracking-wide text-neutral-600 dark:text-neutral-400">
                    Hi, I'm Kane! I'm a <span className="font-medium text-[#111] dark:text-white">software developer based in Charlotte, North Carolina.</span> Crafting engaging and memorable experiences. Exploring sustainability & advocating for a greener web. <em className="font-medium text-[#111] dark:text-white">Always shipping</em>.
                </p>
            </Section>
    )
}