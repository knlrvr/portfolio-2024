import Link from 'next/link'
import { Reveal } from '../utils/reveal';

import { RxArrowTopRight } from "react-icons/rx";
import Image from 'next/image';

interface WorkCardProps {
    title: string;
    org: string;
    description: string;
}

export default function WorkCard({ title, org, description }: WorkCardProps) {
    return (
        <Reveal>
            <div className="flex flex-col justify-center gap-4">
                <div className="flex flex-col space-y-1">
                    <div className="">
                        <p className="font-medium tracking-wide">
                            {title} <span className="font-normal">&nbsp;&mdash;&nbsp; {org}</span>
                        </p>
                    </div>
                    <p className="text-neutral-500">{description}</p>
                </div>
            </div>
        </Reveal>
    )
}