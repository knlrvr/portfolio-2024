import { Reveal } from "../utils/reveal"

import Link from 'next/link'

export default function Contact() {
    return (
        <div className="text-sm">
            <Reveal>
                <span className="font-medium text-base tracking-wide">Connect</span>
            </Reveal>
            
            <Reveal>
                <p className="mt-4 font-light tracking-wide text-neutral-400">Find me at&nbsp;
                    <Link href="https://twitter.com/knlrvr" target="_blank"
                        className="hover:underline underline-offset-4">@knlrvr</Link> 
                    &nbsp;or&nbsp;
                    <Link href="mailto:hello@knlrvr.com" target="_blank"
                        className="hover:underline underline-offset-4">hello@knlrvr.com</Link> 
                </p>
            </Reveal>
        </div>
    )
}