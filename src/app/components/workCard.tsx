import Link from 'next/link'
import { Reveal } from '../utils/reveal';

import { RxArrowTopRight } from "react-icons/rx";
import Image from 'next/image';

interface WorkCardProps {
    title: string;
    imageUrl: string;
    org: string;
    description: string;
    location: string;
}

export default function WorkCard({ title, org, description, location, imageUrl }: WorkCardProps) {
    return (
        <Reveal>
            <div className="flex justify-center gap-4">
                <Image
                    src={`${imageUrl}`}
                    alt={`${org} logo`}
                    width={1000}
                    height={1000}
                    className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex flex-col space-y-1">
                    <div className="flex items-center">
                        <p className="font-medium tracking-wide">
                            {title} <span className="text-neutral-500 font-normal">&nbsp;&mdash;&nbsp; {org}</span>
                        </p>
                    </div>
                    <p className="text-neutral-600 dark:text-neutral-400">{description}</p>
                    <span className="text-neutral-500 text-sm pt-2">{location}</span>
                </div>
            </div>
        </Reveal>
    )
}