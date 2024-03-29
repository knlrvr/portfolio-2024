import Image from 'next/image'
import Link from 'next/link'
import { Reveal } from '../utils/reveal'

export default function AuthorCard() {
    return (
        <Reveal>
            <div className="flex items-center gap-4 mt-2">
                <Image
                    src="/kane.jpg"
                    alt="twitter profile picture"
                    width={1000}
                    height={1000}
                    className="h-12 w-12 rounded-full"
                />
                <div className="flex flex-col">
                    <p className="font-medium text-base tracking-wide">Kane Lariviere <em className="text-neutral-400 font-light">( knlrvr )</em></p>
                    <p className="text-neutral-400 font-light tracking-wide text-sm">Software Developer</p>
                </div>
            </div>
        </Reveal>
    )
}