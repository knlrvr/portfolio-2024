import React from 'react'

import getPostMetadata from '../utils/PostMetadata';
import BlogPostPreview from '../components/blogpostpreview';

import type { Metadata } from 'next';
import { Section, Subsection } from '../components/section';

export const metadata: Metadata = {
  title: 'Kane Lariviere | Blog',
  description: 'Kane Lariviere • Software Developer • Blog',
}

const Blog = () => {

  const postMetadata = getPostMetadata().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const postPreviews = postMetadata.map((post) => (
    <Subsection><BlogPostPreview key={post.slug} {...post}/></Subsection>
  ));

  return (
    <Subsection>
      <div className="">
        {postPreviews}
      </div>
    </Subsection>
  )
}

export default Blog 