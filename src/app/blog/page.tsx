import React from 'react'

import { Reveal } from '../utils/reveal';

import getPostMetadata from '../utils/PostMetadata';
import BlogPostPreview from '../components/blogpostpreview';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kane Lariviere | Blog',
  description: 'Blog | Kane Lariviere',
}

const Blog = () => {

  const postMetadata = getPostMetadata().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const postPreviews = postMetadata.map((post) => (
    <BlogPostPreview key={post.slug} {...post}/>
  ));

  return (
    <div className="">

      <Reveal>
        <div className="flex flex-col">
          {postPreviews}
        </div>
      </Reveal>

    </div>
  )
}

export default Blog 