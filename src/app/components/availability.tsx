import { Reveal } from "../utils/reveal"

import Link from 'next/link'

export default function Availability() {
    return (
        <div className="text-sm">
            <Reveal>
                <span className="font-medium text-base tracking-wider ">Availability</span>
            </Reveal>
            
            <Reveal>
                <p className="flex items-center gap-2 text-neutral-400 text-sm font-light tracking-wide leading-6 mt-4 italic">
                    <span className="h-2 w-2 rounded-full bg-red-500 inline-flex"></span>
                    Currently Unavailable
                </p>
            </Reveal>
        </div>
    )
}