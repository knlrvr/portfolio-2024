import Link from 'next/link'
import { 
    FiCode, 
    FiGithub,  
    FiHeart,
    FiTriangle,
} from 'react-icons/fi'

import { Reveal } from '../utils/reveal';

export default function Footer() {
    return (
        <Reveal>
            <div className="flex flex-col">
                <div className="grow"></div>
                <div className="mt-10 border-t border-neutral-500 flex justify-between items-start pt-10 text-xs font-light tracking-wider text-neutral-500">
                    <div className="flex flex-col space-y-2">
                        <div className="flex items-center gap-1">
                            <FiHeart />
                            <p>Built by <Link href="https://github.com/knlrvr" target="_blank" aria-label='GitHub' className="text-neutral-200 hover:underline underline-offset-4">Kane Lariviere</Link>.</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <FiCode /> 
                            <p>Built with&nbsp;
                                <Link href="https://nextjs.org/" target="_blank" aria-label='Next.js' className="text-neutral-200 hover:underline underline-offset-4">
                                    Next.js
                                </Link>,&nbsp;
                                <Link href="https://tailwindcss.com/" target="_blank" aria-label='Tailwind' className="text-neutral-200 hover:underline underline-offset-4">
                                    Tailwind
                                </Link>, &&nbsp;
                                <Link href="https://www.convex.dev/" target="_blank" aria-label='Convex' className="text-neutral-200 hover:underline underline-offset-4">
                                    Convex
                                </Link>.
                            </p>
                        </div>
                        <div className="flex items-center gap-1">
                            <FiGithub />
                            <p>Source code available on <Link href="https://github.com/knlrvr/portfolio-2024" target="_blank" aria-label='Source Code on GitHub' className="text-neutral-200 hover:underline underline-offset-4">GitHub</Link>.</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <FiTriangle />
                            <p>Hosted on <Link href="https://vercel.com" target="_blank" aria-label='Vercel Hosting' className="text-neutral-200 hover:underline underline-offset-4">Vercel</Link>.</p>
                        </div>
                    </div>
                    {/* <div className="flex items-center gap-6 text-lg">
                        <Link href="https://github.com/knlrvr" target="_blank" aria-label='knlrvr on GitHub' className="hover:text-neutral-200 transition-colors duration-200">
                            <BsGithub />
                        </Link>
                        <Link href="https://www.linkedin.com/in/kane-lariviere" target="_blank" aria-label='LinkedIn' className="hover:text-neutral-200 transition-colors duration-200">
                            <BsLinkedin />
                        </Link>
                        <Link href="https://twitter.com/knlrvr" target="_blank" aria-label='Twitter' className="hover:text-neutral-200 transition-colors duration-200">
                            <BsTwitterX />
                        </Link>
                        <Link href="https://www.twitch.tv/knlrvr" target="_blank" aria-label='Twitch' className="hover:text-neutral-200 transition-colors duration-200">
                            <BsTwitch />
                        </Link>
                    </div> */}
                </div>
            </div>
        </Reveal>
    )
}