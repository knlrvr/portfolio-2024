import { Reveal } from '@/app/utils/reveal';
import { notFound } from "next/navigation";
import getPostMetadata from '@/app/utils/PostMetadata';

import HomePostPreview from '@/app/components/homepostpreview';

import fs from 'fs'
import matter from "gray-matter";
import { MDXRemote } from 'next-mdx-remote/rsc'

import type { Metadata } from "next";

import { CodeBlock } from '@/app/components/codeblock';
import { TweetComponent } from '@/app/components/tweet';
import Callout from '@/app/components/blog/callout';
import Edit from '@/app/components/blog/edit';

import Link from 'next/link';

import { RxArrowTopRight } from "react-icons/rx"; 

const getPostContent = (slug: string) => {
    const folder = "posts";
    const file = `${folder}/${slug}.mdx`;
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

export async function generateMetadata({ 
    params
}: any): Promise<Metadata | undefined> {
    let post = getPostMetadata().find((post) => post.slug === params.slug);
    
    if (!post) {
        return;
    }

    let {
        title,
        date: publishedTime,
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
            publishedTime,
            url: `https://knlrvr.dev/blog/${post.slug}`,
            images: [
                {
                    url: ogImage,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title, 
            description,
            images: [
                ogImage
            ]
        },
    };
}

interface BlogLinkProps {
    href: string;
    children: React.ReactNode;
}

function BlogLink({ href, children }: BlogLinkProps) {

    if (href.startsWith('#' || '/')) {
        return (
            <Link href={href}
                className='inline-flex items-center text-neutral-200 underline underline-offset-4 decoration-neutral-600 hover:decoration-neutral-200 transition-colors duration-100'>
                {children}
            </Link>
        )
    }

    return (
        <Link href={href} target='_blank' rel="noopener noreferrer" 
            className="text-neutral-200 underline underline-offset-4 decoration-neutral-600 hover:decoration-neutral-400 dark:hover:decoration-neutral-200 transition-colors duration-100">
            {children} 
            <RxArrowTopRight className="inline-block" />
        </Link>
    );
}

const PostPage = (props: PostPageProps) => {

    const slug = props.params.slug;
    const post = getPostContent(slug);

    const components = {
        code: ({ node, inline, className, children, ...props }: any) => (
            <CodeBlock language={props.language} value={children} />
        ),
        Callout,
        Edit,
        BlogLink,
        TweetComponent
    }
    
    if (!post) {
        notFound;
    }

    const postMetadata = getPostMetadata().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    const filteredPostMetadata = postMetadata.filter((p) => p.slug !== slug)
    const postPreviews = filteredPostMetadata.slice(0, 3).map((filteredPost) => (
      <HomePostPreview key={filteredPost.slug} {...filteredPost} />
    ));


    function getTimeSincePost(postDate: string) {
        const currentDate = new Date();
        const postDateObj = new Date(postDate);
        const timeDifference = currentDate.getTime() - postDateObj.getTime();
    
        const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
        const monthsDifference = Math.floor(daysDifference / 30);
        const yearsDifference = Math.floor(monthsDifference / 12);
    
        if (yearsDifference > 0) {
            return `${yearsDifference}yr ago`;
        } else if (monthsDifference > 0) {
            return `${monthsDifference}mo ago`;
        } else {
            return `${daysDifference}d ago`;
        }
    }

    return (
        <section className="">
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
                        <div className="flex flex-col space-y-2 text-[var(--text)]">
                            <span className="text-3xl sm:text-4xl tracking-tight">
                                {post.data.title}
                            </span>
                            <div className="flex flex-col justify-between items-start">
                                <p className="mb-4 w-fit font-light tracking-wider text-sm">
                                    {post.data.date} <span className="text-neutral-500">({getTimeSincePost(post.data.date)})</span>
                                </p>
                            </div>
                        </div>
                    </Reveal>
                </div>



                <div className="flex flex-col mb-8 space-y-2">
                    <Reveal>
                        <div className="flex flex-wrap gap-y-2"> 
                            {post.data.tags.map((tag: string) => (
                                <p key={tag} className="mr-4 font-mono text-xs text-neutral-500 underline underline-offset-4">#{tag}</p>
                            ))}
                        </div>
                    </Reveal>
                </div>

                <article className="blog prose text-neutral-300 prose-headings:text-neutral-200 prose-strong:text-neutral-300 max-w-full
                                    prose-sm prose-code:text-sm prose-pre:bg-[#151515] prose-pre:mb-1
                                    prose-h6:text-xs prose-h6:text-neutral-600 prose-p:font-light
                                    prose-h4:text-lg prose-h4:tracking-wider prose-h4:font-normal
                                    prose-h3:text-xl prose-h3:font-normal prose-h3:tracking-wider
                                    prose-h2:font-medium prose-h2:tracking-wide
                                    prose-hr:border-neutral-500
                                    prose-img:rounded-sm
                ">
                    <Reveal>
                        <MDXRemote
                            source={post.content}
                            components={{...components}}
                        /> 
                    </Reveal>
                </article>
            </div>
        </section>
    )
}

export default PostPage