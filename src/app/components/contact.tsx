import { Reveal } from "../utils/reveal"

import Link from 'next/link'

export default function Contact() {
    return (
        <div className="text-sm">
            <Reveal>
                <span className="font-medium text-base tracking-wider ">Links</span>
            </Reveal>
            

            <div className="flex flex-col space-y-4 mt-4">
                <Reveal>
                    <div className="flex justify-between">
                        <p className="text-neutral-500">
                            GitHub
                        </p>
                        <Link className="hover:underline underline-offset-4 font-medium tracking-wide" 
                            href='https://github.com/knlrvr' target="_blank">
                            @knlrvr
                        </Link>
                    </div>
                </Reveal>
                <Reveal>
                    <div className="flex justify-between">
                        <p className="text-neutral-500">
                            Twitter
                        </p>
                        <Link className="hover:underline underline-offset-4 font-medium tracking-wide" 
                            href='https://twitter.com/knlrvr' target="_blank">
                            @knlrvr
                        </Link>
                    </div>
                </Reveal>
                <Reveal>
                    <div className="flex justify-between">
                        <p className="text-neutral-500">
                            LinkedIn
                        </p>
                        <Link className="hover:underline underline-offset-4 font-medium tracking-wide" 
                            href='https://linkedin.com/in/kane-lariviere' target="_blank">
                            kane-lariviere
                        </Link>
                    </div>
                </Reveal>
                <Reveal>
                    <div className="flex justify-between">
                        <p className="text-neutral-500">
                            Email
                        </p>
                        <Link className="hover:underline underline-offset-4 font-medium tracking-wide" 
                            href='mailto:hello@knlrvr.com' target="_blank">
                            hello@knlrvr.com
                        </Link>
                    </div>
                </Reveal>
            </div>
        </div>
    )
}