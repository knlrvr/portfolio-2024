import Link from 'next/link'
import { 
    FiCode, 
    FiGithub, 
    FiSmile, 
    FiTriangle,
    FiLinkedin
} from 'react-icons/fi'

import { 
    FaXTwitter,
    FaThreads,
    FaTwitch,
    FaEnvelope,
} from "react-icons/fa6";
import { Reveal } from '../utils/reveal';




export default function Footer() {
    return (
        <Reveal>
            <div className="flex flex-col">
                <div className="grow"></div>
                <div className="mt-12 border-t border-neutral-200 flex flex-col sm:flex-row space-y-12 sm:space-y-0 justify-between items-start pt-8 text-xs font-light tracking-wider text-neutral-500">
                    <div className="flex flex-col space-y-2">
                        <div className="flex items-center gap-1">
                            <FiSmile />
                            <p>Built by <Link href="https://github.com/knlrvr" className="underline underline-offset-4 hover:text-neutral-200 transition-colors duration-200">Kane Lariviere</Link>.</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <FiCode /> 
                            <p>Built with&nbsp;
                                <Link href="https://nextjs.org/" className="underline underline-offset-4 hover:text-neutral-200 transition-colors duration-200">
                                    Next.js
                                </Link>,&nbsp;
                                <Link href="https://tailwindcss.com/" className="underline underline-offset-4 hover:text-neutral-200 transition-colors duration-200">
                                    Tailwind
                                </Link>, &&nbsp;
                                <Link href="https://www.convex.dev/" className="underline underline-offset-4 hover:text-neutral-200 transition-colors duration-200">
                                    Convex
                                </Link>.
                            </p>
                        </div>
                        <div className="flex items-center gap-1">
                            <FiGithub />
                            <p>Source code available on <Link href="https://github.com/knlrvr/kanelariviere-new" className="underline underline-offset-4 hover:text-neutral-200 transition-colors duration-200">GitHub</Link>.</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <FiTriangle />
                            <p>Hosted on <Link href="https://vercel.com" className="underline underline-offset-4 hover:text-neutral-200 transition-colors duration-200">Vercel</Link>.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 text-lg sm:text-sm">
                        <Link href="mailto:hello@knlrvr.com" className="border border-neutral-500 p-1 rounded-sm hover:text-neutral-200 hover:border-neutral-200 transition-colors duration-200">
                            <FaEnvelope />
                        </Link>
                        <Link href="https://github.com/knlrvr" className="border border-neutral-500 p-1 rounded-sm hover:text-neutral-200 hover:border-neutral-200 transition-colors duration-200">
                            <FiGithub />
                        </Link>
                        <Link href="https://www.linkedin.com/in/kane-lariviere" className="border border-neutral-500 p-1 rounded-sm hover:text-neutral-200 hover:border-neutral-200 transition-colors duration-200">
                            <FiLinkedin />
                        </Link>
                        <Link href="https://twitter.com/knlrvr" className="border border-neutral-500 p-1 rounded-sm hover:text-neutral-200 hover:border-neutral-200 transition-colors duration-200">
                            <FaXTwitter />
                        </Link>
                        <Link href="https://www.threads.net/@kanelarivieresucks" className="border border-neutral-500 p-1 rounded-sm hover:text-neutral-200 hover:border-neutral-200 transition-colors duration-200">
                            <FaThreads />
                        </Link>
                        <Link href="https://www.twitch.tv/knlrvr" className="border border-neutral-500 p-1 rounded-sm hover:text-neutral-200 hover:border-neutral-200 transition-colors duration-200">
                            <FaTwitch />
                        </Link>
                    </div>
                </div>
            </div>
        </Reveal>
    )
}