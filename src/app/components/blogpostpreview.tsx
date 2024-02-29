import { PostMetadata } from '../utils/PostMetadata';

import Link from 'next/link'
import { Reveal } from '../utils/reveal';

const BlogPostPreview = (props: PostMetadata) => {
    return (
    <Reveal>
      <Link key={props.slug} className="flex flex-col w-full items-start my-4"
        href={`/blog/posts/${props.slug}`}>
        <p className="font-light tracking-wider underline underline-offset-2">{props.title}</p>
        <p className="font-light text-sm text-neutral-500 py-1">{props.description}</p>
        <span className="text-xs tracking-wider font-light mt-1 text-right">{props.date}</span>
      </Link>
    </Reveal>
    )
}

export default BlogPostPreview