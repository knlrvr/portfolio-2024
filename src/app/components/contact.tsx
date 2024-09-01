import { Reveal } from "../utils/reveal"

import Link from 'next/link'
import { Section, Subsection } from "./section"
import { RxArrowTopRight } from "react-icons/rx"

export default function Contact() {
    return (
        <Section title="Links">
            <div className="space-y-4">
                <Subsection title="GitHub">
                    <Link className="group hover:underline underline-offset-4 font-medium tracking-wide flex justify-between items-center" 
                        href='https://github.com/knlrvr' target="_blank">
                            <p>@knlrvr</p>
                            <RxArrowTopRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-100" />
                    </Link>
                </Subsection>
                <Subsection title="Twitter">
                    <Link className="group hover:underline underline-offset-4 font-medium tracking-wide flex justify-between items-center" 
                        href='https://twitter.com/knlrvr' target="_blank">
                            <p>@knlrvr</p>
                            <RxArrowTopRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-100" />
                        </Link>
                </Subsection>
                <Subsection title="LinkedIn">
                    <Link className="group hover:underline underline-offset-4 font-medium tracking-wide flex justify-between items-center" 
                        href='https://linkedin.com/in/kane-lariviere' target="_blank">
                            <p>kane-lariviere</p>
                            <RxArrowTopRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-100" />
                    </Link>
                </Subsection>
                <Subsection title="Email">
                    <Link className="group hover:underline underline-offset-4 font-medium tracking-wide flex justify-between items-center" 
                        href='mailto:hello@knlrvr.com' target="_blank">
                            <p>hello@knlrvr.com</p>
                            <RxArrowTopRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-100" />
                    </Link>
                </Subsection>
            </div>
        </Section>
    )
}