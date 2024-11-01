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
                className='inline-flex items-center text-[#111] underline underline-offset-4 decoration-neutral-600 hover:decoration-neutral-200 transition-colors duration-100'>
                {children}
            </Link>
        )
    }

    return (
        <Link href={href} target='_blank' rel="noopener noreferrer" 
            className="text-neutral-600 hover:text-neutral-400 dark:text-neutral-300 underline underline-offset-4 decoration-neutral-600 hover:decoration-neutral-400 dark:hover:decoration-neutral-200 transition-colors duration-100">
            {children} 
            <RxArrowTopRight className="inline-block" />
        </Link>
    );
}

function InlineCode({ children }: { children: React.ReactNode}) {
    return (
        <span className="font-mono">
            &nbsp;`<span className="text-blue-400">{children}</span>`&nbsp;
        </span>
    )
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
        TweetComponent,
        InlineCode
    }
    
    if (!post) {
        notFound;
    }

    // const postMetadata = getPostMetadata().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    // const filteredPostMetadata = postMetadata.filter((p) => p.slug !== slug)
    // const postPreviews = filteredPostMetadata.slice(0, 3).map((filteredPost) => (
    //   <HomePostPreview key={filteredPost.slug} {...filteredPost} />
    // ));

    function getTimeSincePost(postDate: string): string {
        const currentDate = new Date();
        const postDateObj = new Date(postDate);
        const timeDifference = currentDate.getTime() - postDateObj.getTime();

        const millisecondsPerDay = 1000 * 60 * 60 * 24;
        const daysDifference = Math.floor(timeDifference / millisecondsPerDay);
        if (daysDifference < 30) {
            return `${daysDifference}d ago`
        }

        const monthsDifference = Math.floor(daysDifference / 30.44);
        if (monthsDifference < 12) {
            return `${monthsDifference}m ago`
        }

        const yearsDifference = Math.floor(daysDifference / 365.25); 
        return `${yearsDifference}y ago`;
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

                <div className="mt-2 mb-12">
                    <Reveal>
                        <div className="flex flex-col space-y-4 text-[var(--text)] -mb-4">
                            <p className="text-neutral-600 dark:text-neutral-400 text-xs">{post.data.date} <span className="text-neutral-500">({getTimeSincePost(post.data.date)})</span></p>
                            <h1 className="text-4xl sm:text-5xl tracking-tight font-semibold">
                                {post.data.title}
                            </h1>
                            <p className="text-neutral-500 dark:text-neutral-400 text-sm">
                                {post.data.description}
                            </p>
                            <div className="flex flex-wrap gap-y-2 pb-4"> 
                                {post.data.tags.map((tag: string) => (
                                    <p key={tag} className="mr-4 font-mono text-xs text-neutral-500">#{tag}</p>
                                ))}
                            </div>
                            <hr className="border-neutral-500" />
                        </div>
                    </Reveal>
                </div>

                <article className="blog prose text-[#111] dark:text-neutral-300 prose-headings:text-[#111] dark:prose-headings:text-neutral-200 prose-strong:text-[#111] dark:prose-strong:text-neutral-300 max-w-full
                                    prose-sm prose-code:text-sm prose-pre:bg-[#151515] prose-pre:mb-1
                                    prose-h6:text-xs prose-h6:text-neutral-400 dark:prose-h6:text-neutral-600 prose-p:font-light
                                    prose-h4:text-lg prose-h4:tracking-wide prose-h4:font-normal
                                    prose-h3:text-xl prose-h3:font-normal prose-h3:tracking-normal
                                    prose-h2:font-medium prose-h2:tracking-tight
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