import Image from 'next/image'
import { Reveal } from '../utils/reveal'

export default function AuthorCard() {
    return (
        <Reveal>
            <div className="flex items-center gap-4 mt-2 mb-16">
                <Image
                    src="/kane.jpg"
                    alt="twitter profile picture"
                    width={1000}
                    height={1000}
                    className="h-20 w-20 rounded-full"
                />
                <div className="flex flex-col">
                    <p className="font-light text-2xl tracking-wide">Kane Lariviere</p>
                    <p className="text-neutral-400 font-light tracking-wide text-sm">Software Developer</p>
                    <p className="text-neutral-500 tracking-wide text-sm">knlrvr</p>
                </div>
            </div>
        </Reveal>
    )
}