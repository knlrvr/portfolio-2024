import { Reveal } from "../utils/reveal"

import Link from 'next/link'

export default function Contact() {
    return (
        <div className="text-sm">
            <Reveal>
                <span className="font-migra text-xl tracking-widest">Connect</span>
            </Reveal>
            
            <Reveal>
                <p className="mt-8 font-light tracking-wide">Find me at&nbsp;
                    <Link href="https://twitter.com/knlrvr"
                        className="underline underline-offset-4 hover:text-neutral-500 text-neutral-200 transition-colors duration-200">@knlrvr</Link> 
                    &nbsp;or&nbsp;
                    <Link href="mailto:hello@knlrvr.com"
                        className="underline underline-offset-4 hover:text-neutral-500 text-neutral-200 transition-colors duration-200">hello@knlrvr.com</Link> 
                </p>
            </Reveal>
        </div>
    )
}