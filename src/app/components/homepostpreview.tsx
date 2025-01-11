import { PostMetadata } from '../utils/PostMetadata';

import Link from 'next/link'

const HomePostPreview = (props: PostMetadata) => {
    return (
      <Link key={props.slug} className="flex flex-col space-y-1 group py-4 first:pt-0"
        href={`/blog/${props.slug}`}>
          <div className="flex justify-between">
            <p className="group-hover:underline underline-offset-4 font-medium tracking-wide">{props.title}</p>
            <p className="text-neutral-500 text-sm text-right">{props.date}</p>
          </div>
          <p className="pt-1 text-neutral-600 dark:text-neutral-400 ">{props.description}</p>
      </Link>
    )
}

export default HomePostPreview