import Link from 'next/link'
import { Reveal } from '../utils/reveal';

import { RxArrowTopRight } from "react-icons/rx";
import Image from 'next/image';

interface WorkCardProps {
    title: string;
    org: string;
    description: string;
    tech: string[];
}

export default function WorkCard({ title, org, description, tech }: WorkCardProps) {
    return (
        <Reveal>
            <div className="flex flex-col justify-center gap-4">
                {/* <Image
                    src={`${imageUrl}`}
                    alt={`${org} logo`}
                    width={1000}
                    height={1000}
                    className="w-8 h-8 rounded-full object-cover"
                /> */}
                <div className="flex flex-col space-y-1">
                    <div className="flex items-center">
                        <p className="font-medium tracking-wide">
                            {title} <span className="font-normal">&nbsp;&mdash;&nbsp; {org}</span>
                        </p>
                    </div>
                    <p className="text-neutral-600 dark:text-neutral-400">{description}</p>
                    <div className="flex flex-wrap gap-1 pt-2 text-neutral-500 font-light">
                        {tech.map((item) => (
                            <span
                                key={item}
                                className=""
                            >{item}</span>
                        ))}
                    </div>
                </div>
            </div>
        </Reveal>
    )
}