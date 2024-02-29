import { PostMetadata } from '../utils/PostMetadata';

import Link from 'next/link'
import { Reveal } from '../utils/reveal';

const HomePostPreview = (props: PostMetadata) => {
    return (
    <Reveal>
      <Link key={props.slug} className="flex justify-between w-full items-center my-6"
        href={`/blog/posts/${props.slug}`}>
          <div className="">
            <p className="font-light tracking-wider underline underline-offset-2 text-xs sm:text-sm">{props.title}</p>
            {/* <p className="font-light text-xs text-neutral-500 py-1">{props.description}</p> */}
          </div>
        <span className="text-xs tracking-wider font-light mt-1 text-right">{props.date}</span>
      </Link>
    </Reveal>
    )
}

export default HomePostPreview