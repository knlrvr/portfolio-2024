import About from "./components/about";
import Projects from "./components/projects";
import BlogPreview from "./components/blog";
import Contact from "./components/contact";

import type { Metadata } from 'next'
import Gallery from "./components/gallery";
import Work from "./components/work";

export const metadata: Metadata = {
  title: 'Kane Lariviere | Portfolio',
  description: 'Kane Lariviere • Software Developer • Portfolio',
}

export default function Home() {
  return (
    <main className="">     

      <About />
      <Work />
      <Projects />
      <BlogPreview />
      <Contact />
      <Gallery />
    </main> 
  );
}
