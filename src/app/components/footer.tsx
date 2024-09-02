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
                    <div className="flex flex-col space-y-2 text-neutral-600 dark:text-neutral-400">
                        <div className="flex items-center gap-1">
                            <FiHeart />
                            <p>Built by <Link href="https://github.com/knlrvr" target="_blank" aria-label='GitHub' className="text-[#111] dark:text-neutral-200 hover:underline underline-offset-4">Kane Lariviere</Link>.</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <FiCode /> 
                            <p>Built with&nbsp;
                                <Link href="https://nextjs.org/" target="_blank" aria-label='Next.js' className="text-[#111] dark:text-neutral-200 hover:underline underline-offset-4">
                                    Next.js
                                </Link>,&nbsp;
                                <Link href="https://tailwindcss.com/" target="_blank" aria-label='Tailwind' className="text-[#111] dark:text-neutral-200 hover:underline underline-offset-4">
                                    Tailwind
                                </Link>, &&nbsp;
                                <Link href="https://www.convex.dev/" target="_blank" aria-label='Convex' className="text-[#111] dark:text-neutral-200 hover:underline underline-offset-4">
                                    Convex
                                </Link>.
                            </p>
                        </div>
                        <div className="flex items-center gap-1">
                            <FiGithub />
                            <p>Source code available on <Link href="https://github.com/knlrvr/portfolio-2024" target="_blank" aria-label='Source Code on GitHub' className="text-[#111] dark:text-neutral-200 hover:underline underline-offset-4">GitHub</Link>.</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <FiTriangle />
                            <p>Hosted on <Link href="https://vercel.com" target="_blank" aria-label='Vercel Hosting' className="text-[#111] dark:text-neutral-200 hover:underline underline-offset-4">Vercel</Link>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Reveal>
    )
}