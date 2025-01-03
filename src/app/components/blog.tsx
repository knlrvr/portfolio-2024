import Link from 'next/link'

import getPostMetadata from "../utils/PostMetadata"

import PostPreview from "./homepostpreview";

import { RxArrowRight } from "react-icons/rx";
import { Section, Subsection } from './section';

export default function BlogPreview() {

    const postMetadata = getPostMetadata().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    const filteredPostMetadata = postMetadata.filter((p) => p.slug)

    const postPreviews = filteredPostMetadata.slice(0, 3).map((filteredPost) => (
        <PostPreview key={filteredPost.slug} {...filteredPost} />
    ));

    return (
        <>
        <Section title="Blog">
            <Subsection title="Recent ~">
                <div>{postPreviews}</div>
                <Link href="/blog" className="flex items-center gap-1 text-sm text-neutral-600 dark:text-neutral-400 group w-fit mt-4">
                    <span className="group-hover:underline underline-offset-4 ">All posts</span>
                    <span className="group-hover:translate-x-1.5 transition duration-100">
                        <RxArrowRight />
                    </span>
                </Link>
            </Subsection>
        </Section>
        </>
    )
}