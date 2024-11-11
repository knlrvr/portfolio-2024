import Link from 'next/link'
import { Reveal } from './utils/reveal'
import { RxArrowLeft } from 'react-icons/rx'
 
export default function NotFound() {
  return (
    <div className="flex grow flex-col space-y-8">
            <Reveal>
                <span className="text-neutral-600 dark:text-neutral-400 text-sm font-light tracking-wide leading-6 mt-2">
                    Well, dang. Now you&apos;ve done it. <br /> This isn&apos;t real. <br /> What were you thinking? 
                </span>
            </Reveal>

            <Reveal>
                <Link href="/" className="flex items-center gap-1 text-sm text-neutral-600 dark:text-neutral-400 group w-fit mb-16">
                    <span className="group-hover:-translate-x-1.5 transition duration-100">
                        <RxArrowLeft />
                    </span>
                    <span className="group-hover:underline underline-offset-4 ">Turn back now</span>
                </Link>
            </Reveal>

            <div className="h-auto grow"></div>
    </div>
  )
}