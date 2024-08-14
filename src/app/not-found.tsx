import Link from 'next/link'
import { Reveal } from './utils/reveal'
import { RxArrowLeft } from 'react-icons/rx'
 
export default function NotFound() {
  return (
    <div className="flex grow flex-col space-y-8">
            <Reveal>
                <span className="text-neutral-300 text-sm font-light tracking-wide leading-6 mt-2">
                    Well, dang. Now you&apos;ve done it. <br /> What were you thinking? <br /> This isn&apos;t real.
                </span>
            </Reveal>

            <Reveal>
                <Link href='/' className="inline-flex items-center gap-2 hover:underline underline-offset-4 font-light text-neutral-500 text-sm">
                    <RxArrowLeft /> get out of here
                </Link>
            </Reveal>

            <div className="h-auto grow"></div>
    </div>
  )
}