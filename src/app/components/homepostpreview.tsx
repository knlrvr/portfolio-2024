import { PostMetadata } from '../utils/PostMetadata';

import Link from 'next/link'
import { Reveal } from '../utils/reveal';

const HomePostPreview = (props: PostMetadata) => {
    return (
    <Reveal>
      <Link key={props.slug} className="flex flex-col sm:flex-row sm:justify-between w-full items-start sm:items-center mb-6 group"
        href={`/blog/${props.slug}`}>
          <div className="">
            <p className="text-neutral-300 font-light tracking-wider group-hover:underline underline-offset-4 text-sm">{props.title}</p>
            {/* <p className="font-light text-xs text-neutral-500 py-1">{props.description}</p> */}
          </div>
        <span className="text-xs tracking-wider font-light sm:text-right text-neutral-500">{props.date}</span>
      </Link>
    </Reveal>
    )
}

export default HomePostPreview