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
    description: string;
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

    return (
        <div className="">
  
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
            <div className="grid grid-cols-1 gap-4 mb-8">
              <div className="font-light mb-6 sm:mb-10">
                  <p key={projects?.title} className="blog text-sm">
                    {projects?.description}
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
        description: 'TTRPCompanion is a gaming utility app that allows users to track their character\'s stats in D&D or other TTRPG Campaigns. Typically, other available tools weigh on the very basic stats of characters like total HP, ability scores, etc. while TTRPCompanion allows users to track stats that blur the lines between player & character. These stats include total sessions, total time played, total damage dealt, & more! TTRPCompanion allows you to immerse yourself in your own gameplay, without taking you away from your character. Previous version built with tRPC, Prisma, NextAuth, & Supabase.',
        tags: ['TypeScipt', 'React', 'Next.js', 'Tailwind', 'Convex', 'Clerk', 'Jest'],
        year: '2023 ~',
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
        description: 'The Sky Is Fake is a full stack social media/image sharing app. Users can sign in through a variety of platforms via Clerk and upload pictures to be featured in the gallery. The gallery showcases images of the sky that seem just a little too picturesque to be real. Users can also like the pictures that are featured in the gallery.',
        tags: ['TypeScript', 'React', 'Next.js', 'Tailwind', 'Convex', 'Clerk'],
        year: '2023 ~',
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
        description: 'Abstract is an innovative ecommerce store that offers a unique focus on concepts related to consumerism and materialism. Instead of traditional physical products, Abstract specializes in selling these thought-provoking concepts themselves. By challenging conventional notions of commerce, Abstract provides customers with an intellectual and philosophical exploration of consumerism and materialism.',
        tags: ['JavaScript', 'React', 'Next.js', 'Tailwind', 'MongoDB'],
        year: '2023',
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
        description: 'This portfolio template is a \'clone\' of Bartosz Jarocki\'s Next.js + shadcn/ui CV. Anyone who wants to use this can fork the repo and edit the JSON, and they\'re good to go!',
        tags: ['HTML', 'CSS', 'JavaScript'],
        year: '2024 ~',
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
        git: 'https://github.com/knlrvr/kanelariviere',
        live: '',
        title: 'My Personal Portfolio',
        category: 'Misc',
        description: 'My personal portfolio is where you are now! Take a look around! If you\'d like, you can navigate to the Guestbook page and leave me a note!',
        tags: ['TypeScript', 'React', 'Next.js', 'Tailwind', 'Framer Motion', 'Convex'],
        year: '2023',
        next: '/works/ttrpc',
        nextTitle: 'TTRPCompanion'
      },
    };


    // Retrieve the project data based on the provided URL
    const projectData = projectDataMap[url];
  
    // Return the project data
    return projectData;
  };