import { Section } from "./section";

export default function About() {
    return (
        <Section title="About">
            <p className="text-sm font-light tracking-wide leading-6">
                Hi! I&apos;m <span className="font-medium tracking-wide">Kane</span>. I&apos;m a software developer based in the US. My work is focused on building engaging & memorable experiences
                for the web while advocating for <em>accessibility</em>, <em>affordability</em>, & <em>equity</em>. 
                <br />
            </p>
        </Section>
    )
}