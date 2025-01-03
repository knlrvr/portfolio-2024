import { PostMetadata } from '../utils/PostMetadata';

import Link from 'next/link'
import { Reveal } from '../utils/reveal';

const BlogPostPreview = (props: PostMetadata) => {
    return (
    <Reveal>
      <Link key={props.slug} className="flex flex-col space-y-2 group py-6"
        href={`/blog/${props.slug}`}>
          <div className="flex items-center justify-between">
            <p className="group-hover:underline underline-offset-4 font-medium text-sm">{props.title}</p>
            <p className="text-neutral-600 dark:text-neutral-400">{props.date}</p>
          </div>
        <p className="text-sm font-light text-neutral-500">{props.description}</p>
      </Link>
    </Reveal>
    )
}

export default BlogPostPreview