import { Reveal } from "../utils/reveal";


export default function About() {
    return (
        <Reveal>
            {/* <span></span> */}
            <p className="text-neutral-300 text-sm font-light tracking-wide leading-6 mt-2">
                Hi! I&apos;m <span className="text-blue-200">Kane</span>. I&apos;m a software developer based in the US. My work is focused on building engaging & memorable experiences
                for the web while advocating for <em>accessibility</em>, <em>affordability</em>, & <em>equity</em>. 
                <br />
            </p>
        </Reveal>
    )
}