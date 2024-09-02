import { Section } from "./section";

export default function About() {
    return (
        <Section title="About">
            <p className="text-sm font-light tracking-wide leading-6 text-neutral-600 dark:text-neutral-400">
                Hi! I&apos;m <span className="font-medium tracking-wide text-neutral-700 dark:text-neutral-200">Kane</span>. I&apos;m a software developer based in the US. My work is focused on building engaging & memorable experiences
                for the web while advocating for <em>accessibility</em>, <em>affordability</em>, & <em>equity</em>. 
                <br />
            </p>
        </Section>
    )
}