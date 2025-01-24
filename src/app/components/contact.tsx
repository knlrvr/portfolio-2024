import { Reveal } from "../utils/reveal"

import Link from 'next/link'
import { Section, Subsection } from "./section"
import { RxArrowTopRight } from "react-icons/rx"
import { LuGithub, LuLinkedin, LuMail, LuTwitter } from "react-icons/lu"

export default function Contact() {
    return (
        <Section title="Links">
            <div className="space-y-6 text-sm">
                <Subsection>
                    <Link className="group hover:underline underline-offset-4 font-medium tracking-wide flex justify-between items-center" 
                        href='https://github.com/knlrvr' target="_blank">
                            <p>@knlrvr</p>
                            <LuGithub />
                    </Link>
                </Subsection>
                <Subsection>
                    <Link className="group hover:underline underline-offset-4 font-medium tracking-wide flex justify-between items-center" 
                        href='https://twitter.com/knlrvr' target="_blank">
                            <p>@knlrvr</p>
                            <LuTwitter />
                    </Link>
                </Subsection>
                <Subsection>
                    <Link className="group hover:underline underline-offset-4 font-medium tracking-wide flex justify-between items-center" 
                        href='https://linkedin.com/in/kane-lariviere' target="_blank">
                            <p>kane-lariviere</p>
                            <LuLinkedin />
                    </Link>
                </Subsection>
                <Subsection>
                    <Link className="group hover:underline underline-offset-4 font-medium tracking-wide flex justify-between items-center" 
                        href='mailto:hello@knlrvr.com' target="_blank">
                            <p>hello@knlrvr.com</p>
                            <LuMail />
                    </Link>
                </Subsection>
            </div>
        </Section>
    )
}