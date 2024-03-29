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