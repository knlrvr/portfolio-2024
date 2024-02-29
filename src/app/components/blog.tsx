import Link from 'next/link'

import getPostMetadata from "../utils/PostMetadata"

import PostPreview from "./homepostpreview";
import { Reveal } from '../utils/reveal';

export default function BlogPreview() {

    const postMetadata = getPostMetadata().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    const filteredPostMetadata = postMetadata.filter((p) => p.slug)
    const postPreviews = filteredPostMetadata.slice(0, 3).map((filteredPost) => (
    <PostPreview key={filteredPost.slug} {...filteredPost} />
    ));

    return (
        <div className="text-sm">
            <Reveal>
                <span className="font-migra text-xl tracking-widest">Blog</span>
            </Reveal>
            
            <div className="mt-8">
                {postPreviews}
            </div>

            <Link href="/blog" className="text-sm text-neutral-500 underline underline-offset-4 hover:text-neutral-200 transition-colors duration-200">
                All posts &rarr;
            </Link>
        </div>
    )
}