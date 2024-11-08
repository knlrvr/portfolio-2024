import Image from 'next/image'
import { Reveal } from '../utils/reveal'
import { Braces, MapPin } from 'lucide-react'

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
                    <div className="text-neutral-600 dark:text-neutral-400 tracking-wide text-sm flex items-center gap-1">
                        <Braces className="w-3 h-3" />
                        <p>Software Developer</p>
                    </div>
                    <div className="text-neutral-500 tracking-wide text-sm flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <p>Charlotte, NC, USA</p>
                    </div>
                </div>
            </div>
        </Reveal>
    )
}