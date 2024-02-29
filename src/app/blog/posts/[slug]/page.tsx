import { Reveal } from '@/app/utils/reveal';
import Link from 'next/link'

import { notFound } from "next/navigation";

import getPostMetadata from '@/app/utils/PostMetadata';

import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

import fs from 'fs'
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

import type { Metadata } from "next";
import PostPreview from '@/app/components/homepostpreview';
import AuthorCard from '@/app/components/authorcard';

const getPostContent = (slug: string) => {
    const folder = "posts/";
    const file = `${folder}/${slug}.md`;
    const content = fs.readFileSync(file, 'utf8');
    const matterResult = matter(content);
    return matterResult;
}

export const generateStaticParams = async () => {
    const posts = getPostMetadata();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

interface PostPageProps {
    params: {
        slug: string;
    }
}

interface CodeBlockProps {
    language: string;
    value: string;
}

const CodeBlock = ({ language, value }: CodeBlockProps) => {
    return <SyntaxHighlighter language={language} style={a11yDark}>{value}</SyntaxHighlighter>
}

export async function generateMetadata({ 
    params
}: any): Promise<Metadata | undefined> {
    let post = getPostMetadata().find((post) => post.slug === params.slug);
    
    if (!post) {
        return;
    }

    let {
        title,
        description,
        image,
    } = post;

    let ogImage = image
    ? `https://knlrvr.dev${image}`
    : `https://knlrvr.dev/og?title=${title}`

    return {
        title, 
        description,
        openGraph: {
            title, 
            description,
            type: 'article',
            url: `https://knlrvr.dev/blog/${post.slug}`,
            images: [
                {
                    url: ogImage,
                }
            ]
        },
        twitter: {
            card: 'summary_large_image',
            title, 
            description,
            images: [ogImage]
        },
    };
}

const PostPage = (props: PostPageProps) => {

    const slug = props.params.slug;
    const post = getPostContent(slug);

    const components = {
        code: ({ node, inline, className, children, ...props }: any) => (
            <CodeBlock language={props.language} value={children}/>
        )
    }
    
    if (!post) {
        notFound;
    }

    const postMetadata = getPostMetadata().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    const filteredPostMetadata = postMetadata.filter((p) => p.slug !== slug)
    const postPreviews = filteredPostMetadata.slice(0, 3).map((filteredPost) => (
      <PostPreview key={filteredPost.slug} {...filteredPost} />
    ));

    return (
        <section>
            <script
                type='application/ld+json'
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        headline: post.data.title,
                        description: post.data.description,
                        author: {
                            '@type': 'Person',
                            name: 'Kane Lariviere',
                        }
                    })
                }}
            />
            <div className="">

                <div className="mt-2 mb-2">
                    <Reveal>
                        <div className="flex flex-col">
                            <span className="mt-2 mb-6 font-migra text-4xl sm:text-5xl tracking-wider">
                                {post.data.title}
                            </span>
                            <span className="w-fit font-light tracking-wider text-sm">
                                {post.data.date}
                            </span>
                        </div>
                    </Reveal>
                </div>

                {/* <Reveal>
                    <AuthorCard />
                </Reveal> */}

                <div className="flex flex-col mb-12 space-y-2">
                    {/* <hr className="bg-neutral-500 border-0 h-[0.05rem]"/> */}
                    {/* <span className="text-xs">Tags &mdash;</span> */}
                    <Reveal>
                        <div className="flex flex-wrap gap-y-2 pt-4">
                            {post.data.tags.map((tag: string) => (
                                <p key={tag} className="mr-4 font-mono text-xs text-neutral-500 underline underline-offset-4">#{tag}</p>
                            ))}
                        </div>
                    </Reveal>
                </div>

                <article className="prose text-neutral-200 prose-strong:text-neutral-200 prose-headings:text-neutral-200
                                    prose-[15px] prose-pre:bg-[#2b2b2b] prose-pre:my-2 prose-a:text-blue-500 max-w-full
                                    prose-h6:text-xs prose-p:font-light
                                    prose-h5:text-xs prose-h5:border prose-h5:border-b-none prose-h5:border-neutral-500 prose-h5:p-4 prose-h5:rounded-lg prose-h5:bg-opacity-25 prose-h5:border-opacity-50
                                    prose-h4:text-lg prose-h4:tracking-wider prose-h4:font-normal
                                    prose-h3:text-xl prose-h3:font-medium prose-h3:tracking-wide
                                    prose-h2:font-light prose-h2:tracking-wider
                                    prose-quoteless prose-blockquote:border prose-blockquote:rounded-2xl prose-blockquote:not-italic prose-blockquote:border-neutral-500 prose-blockquote:bg-neutral-500 prose-blockquote:bg-opacity-10 prose-blockquote:text-xs prose-blockquote:text-neutral-500 prose-blockquote:px-4
                                    prose-hr:border-neutral-500
                ">
                    <Reveal>
                        <ReactMarkdown className=""
                            components={components}
                        >{post.content}</ReactMarkdown> 
                    </Reveal>
                </article>

            </div>
        </section>
    )
}

export default PostPage