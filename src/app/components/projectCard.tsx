import Link from 'next/link'
import { Reveal } from '../utils/reveal';

import { RxArrowTopRight } from "react-icons/rx";
import Image from 'next/image';

interface ProjectCardProps {
    url: string;
    title: string;
    description: string;
    imageUrl: string;
}

export default function ProjectCard({ url, title, description, imageUrl }: ProjectCardProps) {
    return (
        <Reveal>
            <Link href={`/works/${url}`} className="flex items-start justify-between gap-1 group">
            <div className="flex flex-col justify-center gap-4 w-full">
                <Image
                    src={`${imageUrl}`}
                    alt={`${title} logo`}
                    width={1000}
                    height={1000}
                    className="w-8 h-8 rounded-lg object-cover"
                />
                <div className="flex flex-col space-y-1">
                    <div className="flex items-center">
                        <div className="group-hover:underline underline-offset-4 font-medium tracking-wide flex items-center justify-between w-full">
                            <p>{title}</p>
                            <RxArrowTopRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-100" />
                        </div>
                    </div>
                    <p className="text-neutral-600 dark:text-neutral-400">{description}</p>
                </div>
            </div>
            </Link>
        </Reveal>
    )
}