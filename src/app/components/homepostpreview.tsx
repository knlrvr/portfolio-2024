import { PostMetadata } from '../utils/PostMetadata';

import Link from 'next/link'
import { Reveal } from '../utils/reveal';
import { RxArrowTopRight } from 'react-icons/rx';

const HomePostPreview = (props: PostMetadata) => {
    return (
      <Link key={props.slug} className="flex justify-between mb-6 group"
        href={`/blog/${props.slug}`}>
          <div className="">
            <p className="group-hover:underline underline-offset-4 tracking-wide">{props.title}</p>
          </div>
          <RxArrowTopRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-100" />
      </Link>
    )
}

export default HomePostPreview