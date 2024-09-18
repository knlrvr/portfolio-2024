import About from "./components/about";
import Projects from "./components/projects";
import BlogPreview from "./components/blog";
import OnRepeat from "./components/onrepeat";
import Contact from "./components/contact";

import type { Metadata } from 'next'
import Gallery from "./components/gallery";
import AuthorCard from "./components/authorcard";
import Work from "./components/work";

export const metadata: Metadata = {
  title: 'Kane Lariviere | Portfolio',
  description: 'Kane Lariviere • Software Developer • Portfolio',
}

export default function Home() {
  return (
    <main className="space-y-16">     
      <AuthorCard /> 
      <About />
      {/* <Work /> */}
      <Projects />
      <BlogPreview />
      <Contact />
      <Gallery />
      <OnRepeat />
    </main> 
  );
}
