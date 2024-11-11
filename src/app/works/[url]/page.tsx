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
import { MoveLeft } from 'lucide-react';
import { Subsection } from '@/app/components/section';

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

const toParagraphs = (text: string) => {
  // Split the text by one or more newline characters
  const paragraphs = text.split(/\n{2,}/)
  
  return paragraphs.map((paragraph, index) => (
    <p key={index} className="blog text-sm mt-4" style={{ marginTop: index > 0 ? '1.5rem' : '1rem' }}>
      {paragraph}
    </p>
  ))
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
              <div className={`flex justify-center mt-8`}>
  
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
            <div className="flex flex-col space-y-12">
              <div className="font-light">
                  <p key={projects?.title} className="blog text-sm mt-4">
                    {toParagraphs(projects?.overview)}
                  </p>
              </div>

              <hr className="border-neutral-500" 
              />
              <div className="grid grid-cols-3">
                <Subsection title="Year">
                  <span className="font-light text-neutral-600 dark:text-neutral-400">{projects?.year}</span>
                </Subsection>
                <Subsection title="Tech">
                  {projects?.tags && projects?.tags.map((tag, index) => (
                    <span key={index} className=" text-neutral-600 dark:text-neutral-400 mb-2 text-sm flex font-light">
                      {tag}
                    </span>
                  ))}
                </Subsection>
                <Subsection title="View">
                  <div className="space-y-2 text-neutral-600 dark:text-neutral-400">
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
                  </div>
                </Subsection>
              </div>
             
            </div>
          </Reveal>
        </div>
  )
}


export async function generateStaticParams() {
    return [
        { url: "fenili" },
        { url: "studico" },
        { url: "theskyisfake" },
        { url: "templateportfolio" },
    ] 
}

const fetchWorksData = (url: string): Work => {
    const projectDataMap: { [key: string]: Work } = {
      
      fenili: {
        url: 'fenili',
        brand: {
          src: '/brand/fenili-brand.png',
          alt: 'fenili logo',
          width: 1000,
          height: 1000,
          className: 'w-full h-full'
        },
        live: 'https://fenili.store/',
        title: 'Fenili Apparel',
        category: 'Ecommerce',
        overview: 'Fenili is an apparel and lifestyle brand specializing in custom, made-to-order clothing. This site is a high-performance, server-rendered Next.js application that uses Shopify as a headless CMS and takes full advantage of React Server Components, Server Actions, Suspense, useOptimistic, and more from Next.js to ensure a seamless user & admin experience. \n\n This site is still under construction and is actively contributed to every week.',
        tags: ['TypeScipt', 'React', 'Next.js', 'Tailwind', 'Shopify', 'ngrok'],
        year: '2024 ~',
      },

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
        overview: 'Studico is a web-based music production assistance suite that empowers users to create, collaborate, and share their music. Studico offers a robust tracking system for various aspects of music production, including tasks, file upload and storage, and messaging. Studico is meant for small to medium-sized teams, and allows them to have everything they need in one place. \n\n If you\'re interested in a demo of the site, demo login details can be found in the github repository.',
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