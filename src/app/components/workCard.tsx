import Link from 'next/link'
import { Reveal } from '../utils/reveal';

import { RxArrowTopRight } from "react-icons/rx";

interface WorkCardProps {
    title: string;
    org: string;
    description: string;
}

export default function WorkCard({ title, org, description }: WorkCardProps) {
    return (
        <Reveal>
            <div className="flex flex-col space-y-1">
                <div className="flex items-center">
                    <p className="font-medium tracking-wide">
                        {title} <span className="text-neutral-500 font-normal">&nbsp;&mdash;&nbsp; {org}</span>
                    </p>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400">{description}</p>
            </div>
        </Reveal>
    )
}