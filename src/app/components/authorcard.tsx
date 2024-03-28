import Image from 'next/image'
import Link from 'next/link'
import { Reveal } from '../utils/reveal'

export default function AuthorCard() {
    return (
        <Reveal>
            <div className="flex items-center gap-4">
                <Image
                    src="/kane.jpg"
                    alt="twitter profile picture"
                    width={1000}
                    height={1000}
                    className="h-12 w-12 rounded-full"
                />
                <div className="text-sm flex flex-col">
                    <p className="font-medium">Kane Lariviere</p>
                    <p className="text-neutral-500 font-light tracking-wide">Software Developer</p>
                </div>
            </div>
        </Reveal>
    )
}