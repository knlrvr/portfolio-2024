import Link from 'next/link'
import Image from 'next/image';
import { Reveal } from '@/app/utils/reveal';

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kane Lariviere | Works',
  description: 'Kane Lariviere • Software Developer • Works',
}

import {
    RxArrowRight,
    RxArrowTopRight
} from 'react-icons/rx'

interface Work {
    url: string;
    brand?: {
      src: string;
      alt: string;
      width: number;
      height: number;
      className: string;
    };
    git?: string;
    live?: string;
    title: string;
    category: string;
    overview: string;
    more: string;
    tags?: string[];
    year: string;
    next: string;
    nextTitle: string;
}

export default async function WorksPage(
{
    params, 
}: {
    params: { 
        url: string
    };
}) {

    const projects = fetchWorksData(params.url);

    const paragraphs = projects?.more.split('\n');

    return (
        <div className="">  
          {projects?.brand && (
            <Reveal>
              <div className={`flex justify-center`}>
  
                <Image 
                  src={projects?.brand.src}
                  alt={projects?.brand.alt}
                  width={projects?.brand.width}
                  height={projects?.brand.height}
                  className={projects?.brand.className}
                />
              </div>
            </Reveal>
          )}

            <Reveal> 
                <div className="mt-4 mb-8">
                    <Reveal>
                        <div className="flex flex-col">
                            <span className="my-2 text-3xl sm:text-4xl tracking-tight">
                                {projects?.title}
                            </span>
                            <div className="flex flex-col justify-between items-start">
                                <span className="w-fit font-light tracking-widest text-neutral-400 text-xs rounded-full border px-4 py-1 border-neutral-400">
                                    {projects?.category}
                                </span>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </Reveal>
  
          <Reveal>
            <div className="flex flex-col space-y-12">
              <div className="font-light">
                  <span className="font-medium tracking-wide text-xl">Overview</span>
                  <p key={projects?.title} className="blog text-sm mt-4">
                    {projects?.overview}
                  </p>
              </div>

              <div className="text-sm grid grid-cols-1 sm:grid-cols-3 gap-y-6">
                <div className="w-full flex flex-col">
                  <span className="font-light tracking-wider text-xs mb-1 text-neutral-400">Year</span>
                  <span className="border-t border-neutral-500 w-full pt-2 font-light">{projects?.year}</span>
                </div>
                <div className="w-full flex flex-col">
                  <span className="font-light tracking-wider text-xs mb-1 text-neutral-400">Tech</span>
                    <span className="border-t border-neutral-500 w-full pt-2 flex flex-col space-y-1.5">
                      {projects?.tags && projects?.tags.map((tag, index) => (
                        <span key={index} className="text-sm flex font-light">
                          {tag}
                        </span>
                      ))}
                    </span>
                  </div>
                  <div className="w-full flex flex-col text-sm">
                    <span className="font-light tracking-wider text-xs mb-1 text-neutral-400">View</span>
                    <span className="border-t border-neutral-500 w-full pt-2 flex flex-col space-y-1.5">
                    {projects?.git && ( 
                      <Link href={`${projects?.git}`} target="_blank"
                        className="flex items-center group">
                        <span className="font-light group-hover:underline underline-offset-4 transition duration-100">Open Code</span>
                        <RxArrowTopRight
                          className="ml-3 text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition duration-100"/>
                      </Link>
                    )}
                    {projects?.live && (
                      <Link href={`${projects?.live}`} target="_blank"
                        className="flex items-center group">
                        <span className="font-light group-hover:underline underline-offset-4 transition duration-100">Open Live</span>
                        <RxArrowTopRight
                          className="ml-[1.17rem] text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition duration-200"/>
                      </Link>
                    )}
                  </span>
                </div>
              </div>

              <div>
                <div className="font-light mt-12">
                  <span className="font-medium tracking-wide text-xl">More Info</span>
                  <p className="blog text-sm mt-4">
                    {paragraphs.map((paragraph, index) => (
                      <p key={index} className="mb-4">{paragraph}</p>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
  
          {/* <Reveal>
            <div className="pt-24 pb-12 flex md:justify-end justify-center">
              <Link href={`${projects?.next}`}
                className="group flex items-center space-x-2 w-fit">
                <span className="group-hover:underline underline-offset-4 transition-colors duration-100 font-light text-sm">{projects?.nextTitle}</span>
                <RxArrowRight className="text-lg group-hover:translate-x-2 duration-100" />
              </Link>
            </div>
          </Reveal> */}
        </div>
  )
}


export async function generateStaticParams() {
    return [
        { url: "ttrpc" },
        { url: "theskyisfake" },
        { url: "abstract" },
        { url: "templateportfolio" },
        { url: "personalportfolio"}
    ] 
}

const fetchWorksData = (url: string): Work => {
    // Create an object that maps the project URLs to their respective data
    const projectDataMap: { [key: string]: Work } = {
      
      ttrpc: {
        url: 'ttrpc',
        brand: {
          src: '/brand/ttrpc-brand-new.png',
          alt: 'ttrpc logo',
          width: 1000,
          height: 1000,
          className: 'w-full h-full'
        },
        git: 'https://github.com/knlrvr/ttrpc',
        live: 'https://ttrpc.vercel.app/',
        title: 'TTRPCompanion',
        category: 'Gaming Utility',
        overview: 'TTRPCompanion is a gaming utility app that allows users to track their character\'s stats in D&D or other TTRPG Campaigns. Typically, other available tools weigh on the very basic stats of characters like total HP, ability scores, etc. while TTRPCompanion allows users to track stats that blur the lines between player & character. These stats include total sessions, total time played, total damage dealt, & more! TTRPCompanion allows you to immerse yourself in your own gameplay, without taking you away from your character. Previous version built with tRPC, Prisma, NextAuth, & Supabase.',
        tags: ['TypeScipt', 'React', 'Next.js', 'Tailwind', 'Convex', 'Clerk', 'Jest'],
        year: '2023 ~',
        more: 'I\'m an avid D&D player, and there wasn\'t a single tool that I found that was able to accomplish what I wanted. So I built it! TTRPCompanion is the consolidation of my favorite tools, and what they were missing.\n The tech I used to build TTRPC were chosen specifically for the DX. I wanted to enjoy the build, not just the finished product. The front end is built with TypeScript, Next.js, & Tailwind with shadcn/ui. I chose Next.js because it\'s feature-rich out-of-the-box, so I was able to accomplish . I chose shadcn/ui so that I could style quickly and efficiently and focus more on the functionality of the app, rather than how it looked.\n In the first version of TTRPCompanion, I used tRPC, Prisma, and Supabase for the back end. I never had any issues with it, but I wanted to explore other options as it became apparent that those technologies weren\'t meeting the needs of the project. In the newest version, I chose Convex for it\'s strong type safety and realtime updates. TTRPCompanion is highly collaborative, so I didn\'t want there to be any question in what users were seeing.',
        next: '/works/theskyisfake',
        nextTitle: 'The Sky Is Fake'
      },
  
      theskyisfake: {
        url: 'theskyisfake',
        brand: {
          src: '/brand/tsif-brand-new.png',
          alt: 'The Sky Is Fake',
          width: 1000,
          height: 1000,
          className: 'w-full h-full'
        },
        git: 'https://github.com/knlrvr/theskyisfake',
        live: 'https://www.theskyisfake.org',
        title: 'The Sky Is Fake',
        category: 'Social Media',
        overview: 'The Sky Is Fake is a full stack social media/image sharing app. Users can sign in through a variety of platforms via Clerk and upload pictures to be featured in the gallery. The gallery showcases images of the sky that seem just a little too picturesque to be real. Users can also like the pictures that are featured in the gallery.',
        tags: ['TypeScript', 'React', 'Next.js', 'Tailwind', 'Convex', 'Clerk'],
        year: '2023 ~',
        more: 'My family had a group chat where we would often send each other pictures of the sky and say \'the sky is fake\', which my brother had started. A few years ago, my brother passed, but we would still send each other these pictures. I decided I wanted to extend that sentiment to others with The Sky Is Fake.\n The Sky Is Fake lets visitors sign in through various platforms with authentication handled by Clerk, and upload their images. The backend, including file upload & storage, is handled entirely by Convex.',
        next: '/works/abstract',
        nextTitle: 'Abstract'
      },
  
      abstract: {
        url: 'abstract',
        brand: {
          src: '/brand/abs-brand-new.png',
          alt: 'Abstract Store',
          width: 1000,
          height: 1000,
          className: 'w-full h-full'
        },
        git: 'https://github.com/knlrvr/abstract',
        live: 'https://abstract-eight.vercel.app/',
        title: 'Abstract',
        category: 'Ecommerce',
        overview: 'Abstract is an innovative ecommerce store that offers a unique focus on concepts related to consumerism and materialism. Instead of traditional physical products, Abstract specializes in selling these thought-provoking concepts themselves. By challenging conventional notions of commerce, Abstract provides customers with an intellectual and philosophical exploration of consumerism and materialism.',
        tags: ['JavaScript', 'React', 'Next.js', 'Tailwind', 'MongoDB'],
        year: '2023',
        more: 'I didn\'t want to make another generic ecommerce experience, so I decided to use concepts rather than actual products, but still deliver them to visitors as actual products.\n The front end is built with JavaScript, React, and Tailwind. The back end utilizes MongoDB. I chose MongoDB because I wanted to experiment with document-oriented databases and their flexibility.',
        next: '/works/templateportfolio',
        nextTitle: 'Portfolio Template'
      },

      templateportfolio: {
        url: 'templateportfolio',
        brand: {
          src: '/brand/template.png',
          alt: 'Portfolio Template',
          width: 1000,
          height: 1000,
          className: 'w-full h-full'
        },
        git: 'https://github.com/knlrvr/portfolio-template',
        live: 'https://portfolio-template-knlrvr.vercel.app/',
        title: 'Portfolio Template',
        category: 'Portfolio',
        overview: 'This portfolio template is a clone of Bartosz Jarocki\'s Next.js + shadcn/ui CV. Anyone who wants to use this can fork the repo and edit the JSON, and they\'re good to go!',
        tags: ['HTML', 'CSS', 'JavaScript'],
        year: '2024 ~',
        more: 'I came across a CV built with Next.js & shadcn/ui by Bartosz Jarocki. As much as I loved it, as well as what it was built with, it seemed like overengineering. So I rebuilt & slightly altered the design with HTML + CSS. Then I rebuilt it again to pull the information from a JSON file so that anyone who liked it would be able to use it!\n My favorite part about this template is that projects have an \'online\' or \'offline\' key. \'Offline\' projects are rendered in a muted container, and \'online\' projects are rendered in a link container with a little more styling so that users may be more inclined to view them.\n',
        next: '/works/personalportfolio',
        nextTitle: 'Personal Portfolio'
      },
  
      personalportfolio: {
        url: 'personalportfolio',
        brand: {
          src: '/brand/logo-new.png',
          alt: 'Personal Portfolio',
          width: 1000,
          height: 1000,
          className: 'w-full h-full'
        },
        git: 'https://github.com/knlrvr/portfolio-2024',
        live: '',
        title: 'My Personal Portfolio',
        category: 'Misc',
        overview: 'My personal portfolio is where you are now! Take a look around! If you\'d like, you can navigate to the Guestbook page and leave me a note!',
        tags: ['TypeScript', 'React', 'Next.js', 'Tailwind', 'Framer Motion', 'Convex'],
        year: '2023',
        more: 'I spent a lot of time trying to design my previous portfolios. This year, 2024, I decided to focus more on the code and let the design come second. In doing so, I settled on a minimal design that still delivers content in a digestible way, and I was able to spend more time optimizing performance, SEO, etc.\n The front end is built with TypeScript, Next.js, & Tailwind. The backend (only utilized by the guestbook) is built with Convex.',
        next: '/works/ttrpc',
        nextTitle: 'TTRPCompanion'
      },
    };


    // Retrieve the project data based on the provided URL
    const projectData = projectDataMap[url];
  
    // Return the project data
    return projectData;
  };