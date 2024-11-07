import { PostMetadata } from '../utils/PostMetadata';

import Link from 'next/link'
import { RxArrowTopRight } from 'react-icons/rx';

const HomePostPreview = (props: PostMetadata) => {
    return (
      <Link key={props.slug} className="flex flex-col space-y-1 mb-6 group"
        href={`/blog/${props.slug}`}>
          <div className="flex justify-between">
            <p className="group-hover:underline underline-offset-4 font-medium tracking-wide">{props.title}</p>
            <RxArrowTopRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-100" />
          </div>
          <p className="pt-1 text-neutral-600 dark:text-neutral-400 ">{props.description}</p>
          <p className="text-neutral-500 text-sm">{props.date}</p>
      </Link>
    )
}

export default HomePostPreview