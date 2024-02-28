import Link from 'next/link'

import { RxArrowTopRight } from "react-icons/rx";

interface ProjectCardProps {
    url: string;
    title: string;
    description: string;
}

export default function ProjectCard({ url, title, description }: ProjectCardProps) {
    return (
        <div className="flex flex-col space-y-2">
            <Link href={url} className="flex items-center gap-1 group w-fit">
                <span className="underline underline-offset-4 group-hover:text-neutral-500 transition-colors duration-200">{title} </span>
                <RxArrowTopRight className="group-hover:text-neutral-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-200" />
            </Link>
            <p className="text-neutral-500">{description}</p>
        </div>
    )
}