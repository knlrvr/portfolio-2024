import Link from 'next/link'
import { Reveal } from '../utils/reveal';

import { RxArrowTopRight } from "react-icons/rx";

interface ProjectCardProps {
    url: string;
    title: string;
    description: string;
    // tech: Array<string>;
}

export default function ProjectCard({ url, title, description }: ProjectCardProps) {
    return (
        <Reveal>
            <div className="flex flex-col space-y-2">
                {/* href = {url} */}
                <Link href={`/works/${url}`} className="flex items-center justify-between gap-1 group">
                    <span className="group-hover:underline underline-offset-4 font-medium tracking-wide">{title} </span>
                    <RxArrowTopRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-100" />
                </Link>
                <p className="text-neutral-600 dark:text-neutral-400">{description}</p>
                {/* <p className="text-neutral-500 text-xs">{tech}</p> */}
            </div>
        </Reveal>
    )
}