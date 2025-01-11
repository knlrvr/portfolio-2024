import { Reveal } from "../utils/reveal"

import Link from 'next/link'
import { Section, Subsection } from "./section"
import { RxArrowTopRight } from "react-icons/rx"

export default function Contact() {
    return (
        <Section title="Links">
            <div className="space-y-4 text-sm">
                    <Link className="group hover:underline underline-offset-4 font-medium tracking-wide flex justify-between items-center" 
                        href='https://github.com/knlrvr' target="_blank">
                            <p>@knlrvr <span className="text-neutral-500 font-light">( GitHub )</span></p>
                            <RxArrowTopRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-100" />
                    </Link>
                    <Link className="group hover:underline underline-offset-4 font-medium tracking-wide flex justify-between items-center" 
                        href='https://twitter.com/knlrvr' target="_blank">
                            <p>@knlrvr <span className="text-neutral-500 font-light">( Twitter )</span></p>
                            <RxArrowTopRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-100" />
                        </Link>
                    <Link className="group hover:underline underline-offset-4 font-medium tracking-wide flex justify-between items-center" 
                        href='https://linkedin.com/in/kane-lariviere' target="_blank">
                            <p>kane-lariviere <span className="text-neutral-500 font-light">( LinkedIn )</span></p>
                            <RxArrowTopRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-100" />
                    </Link>
                    <Link className="group hover:underline underline-offset-4 font-medium tracking-wide flex justify-between items-center" 
                        href='mailto:hello@knlrvr.com' target="_blank">
                            <p>hello@knlrvr.com <span className="text-neutral-500 font-light">( Email )</span></p>
                            <RxArrowTopRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-100" />
                    </Link>
            </div>
        </Section>
    )
}