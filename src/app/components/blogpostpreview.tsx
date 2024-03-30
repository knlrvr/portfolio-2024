import { PostMetadata } from '../utils/PostMetadata';

import Link from 'next/link'
import { Reveal } from '../utils/reveal';

const BlogPostPreview = (props: PostMetadata) => {
    return (
    <Reveal>
      <Link key={props.slug} className="flex flex-col sm:flex-row sm:justify-between w-full items-start sm:items-center mb-6 group"
        href={`/blog/posts/${props.slug}`}>
        <p className="font-light tracking-wider group-hover:underline underline-offset-4 text-sm">{props.title}</p>
        <span className="text-xs tracking-wider font-light mt-1 text-right text-neutral-500">{props.date}</span>
      </Link>
    </Reveal>
    )
}

export default BlogPostPreview