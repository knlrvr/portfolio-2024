import { PostMetadata } from '../utils/PostMetadata';

import Link from 'next/link'
import { RxArrowTopRight } from 'react-icons/rx';

const HomePostPreview = (props: PostMetadata) => {
    return (
      <Link key={props.slug} className="flex flex-col space-y-1 mb-6 group"
        href={`/blog/${props.slug}`}>
          <div className="flex justify-between">
            <p className="group-hover:underline underline-offset-4 tracking-wide">{props.title}</p>
            <RxArrowTopRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-100" />
          </div>
          <p className="text-neutral-500 text-sm">{props.date}</p>
      </Link>
    )
}

export default HomePostPreview