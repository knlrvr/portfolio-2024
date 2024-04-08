import { PostMetadata } from '../utils/PostMetadata';

import Link from 'next/link'
import { Reveal } from '../utils/reveal';

const BlogPostPreview = (props: PostMetadata) => {
    return (
    <Reveal>
      <Link key={props.slug} className="flex flex-col space-y-2 mb-12 group"
        href={`/blog/${props.slug}`}>
        <p className="font-light tracking-wider group-hover:underline underline-offset-4 text-sm">{props.title}</p>
        <p className="text-sm font-light text-neutral-400">{props.description}</p>
        <span className="text-xs tracking-wider text-neutral-500">{props.date}</span>
      </Link>
    </Reveal>
    )
}

export default BlogPostPreview