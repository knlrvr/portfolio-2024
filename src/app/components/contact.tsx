import { Reveal } from "../utils/reveal"

import Link from 'next/link'
import { Section, Subsection } from "./section"

export default function Contact() {
    return (
        <Section title="Links">
            <div className="space-y-4">
                <Subsection title="GitHub">
                    <Link className="hover:underline underline-offset-4 font-medium tracking-wide" 
                        href='https://github.com/knlrvr' target="_blank">
                            @knlrvr
                    </Link>
                </Subsection>
                <Subsection title="Twitter">
                    <Link className="hover:underline underline-offset-4 font-medium tracking-wide" 
                        href='https://twitter.com/knlrvr' target="_blank">
                            @knlrvr
                        </Link>
                </Subsection>
                <Subsection title="LinkedIn">
                    <Link className="hover:underline underline-offset-4 font-medium tracking-wide" 
                        href='https://linkedin.com/in/kane-lariviere' target="_blank">
                            kane-lariviere
                    </Link>
                </Subsection>
                <Subsection title="Email">
                    <Link className="hover:underline underline-offset-4 font-medium tracking-wide" 
                        href='mailto:hello@knlrvr.com' target="_blank">
                            hello@knlrvr.com
                    </Link>
                </Subsection>
            </div>
        </Section>
    )
}