import Link from 'next/link'
import { Reveal } from '../utils/reveal';

import { RxArrowTopRight } from "react-icons/rx";

interface ProjectCardProps {
    url: string;
    title: string;
    description: string;
    // tech: string[];
}

export default function ProjectCard({ url, title, description }: ProjectCardProps) {
    return (
        <Reveal>
            <div className="flex flex-col space-y-2">
                <Link href={url} target="_blank" className="flex items-center gap-1 group w-fit">
                    <span className="group-hover:underline underline-offset-4">{title} </span>
                    <RxArrowTopRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-100" />
                </Link>
                <p className="text-neutral-500">{description}</p>
            </div>
        </Reveal>
    )
}