import getPostMetadata from './utils/PostMetadata'

export const baseUrl = 'https://knlrvr.dev'

export default async function sitemap() {
  let blogs = getPostMetadata().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
  }))

  let routes = ['', '/blog', '/guestbook', '/tech'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
}