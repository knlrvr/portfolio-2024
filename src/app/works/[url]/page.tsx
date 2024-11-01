import Link from 'next/link'
import Image from 'next/image';
import { Reveal } from '@/app/utils/reveal';

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kane Lariviere | Works',
  description: 'Kane Lariviere • Software Developer • Works',
}

import {
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
    tags?: string[];
    year: string;
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
                <div className="mt-4 mb-4">
                    <Reveal>
                      <div className="flex justify-between items-center">
                          <h1 className="text-3xl sm:text-4xl tracking-tight font-semibold">
                              {projects?.title} &mdash;
                          </h1>
                          <span className="text-neutral-600 dark:text-neutral-400">{projects.category}</span>
                      </div>
                    </Reveal>
                </div>
            </Reveal>
  
          <Reveal>
            <div className="flex flex-col space-y-12 mb-12">
              <div className="font-light">
                  <p key={projects?.title} className="blog text-sm mt-4">
                    {projects?.overview}
                  </p>
              </div>

              <div className="text-sm grid grid-cols-1 sm:grid-cols-3 gap-y-6">
                <div className="w-full flex flex-col">
                  <span className="font-light tracking-wider text-xs mb-1 text-neutral-500">Year</span>
                  <span className="border-t border-neutral-500 w-full pt-2 font-light">{projects?.year}</span>
                </div>
                <div className="w-full flex flex-col">
                  <span className="font-light tracking-wider text-xs mb-1 text-neutral-500">Tech</span>
                    <span className="border-t border-neutral-500 w-full pt-2 flex flex-col space-y-1.5">
                      {projects?.tags && projects?.tags.map((tag, index) => (
                        <span key={index} className="text-sm flex font-light">
                          {tag}
                        </span>
                      ))}
                    </span>
                  </div>
                  <div className="w-full flex flex-col text-sm">
                    <span className="font-light tracking-wider text-xs mb-1 text-neutral-500">View</span>
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
        </div>
  )
}


export async function generateStaticParams() {
    return [
        { url: "studico" },
        { url: "theskyisfake" },
        { url: "templateportfolio" },
    ] 
}

const fetchWorksData = (url: string): Work => {
    const projectDataMap: { [key: string]: Work } = {
      
      studico: {
        url: 'studico',
        brand: {
          src: '/brand/studico-brand-2.png',
          alt: 'studico logo',
          width: 1000,
          height: 1000,
          className: 'w-full h-full'
        },
        git: 'https://github.com/knlrvr/studico',
        live: 'https://studico.vercel.app/',
        title: 'Studico',
        category: 'Music Production',
        overview: 'Studico is a web-based music production assistance suite that empowers users to create, collaborate, and share their music. Studico offers a robust tracking system for various aspects of music production, including tasks, file upload and storage, and messaging. Studico is meant for small to medium-sized teams, and allows them to have everything they need in one place.',
        tags: ['TypeScipt', 'React', 'Next.js', 'Tailwind', 'shadcn/ui', 'Convex', 'Clerk'],
        year: '2024 ~',
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
      },
  
      // abstract: {
      //   url: 'abstract',
      //   brand: {
      //     src: '/brand/abs-brand-new.png',
      //     alt: 'Abstract Store',
      //     width: 1000,
      //     height: 1000,
      //     className: 'w-full h-full'
      //   },
      //   git: 'https://github.com/knlrvr/abstract',
      //   live: 'https://abstract-eight.vercel.app/',
      //   title: 'Abstract',
      //   category: 'Ecommerce',
      //   overview: 'Abstract is an innovative ecommerce store that offers a unique focus on concepts related to consumerism and materialism. Instead of traditional physical products, Abstract specializes in selling these thought-provoking concepts themselves. By challenging conventional notions of commerce, Abstract provides customers with an intellectual and philosophical exploration of consumerism and materialism.',
      //   tags: ['JavaScript', 'React', 'Next.js', 'Tailwind', 'MongoDB'],
      //   year: '2023',
      // },

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
      },
    };

    const projectData = projectDataMap[url];
  
    return projectData;
  };