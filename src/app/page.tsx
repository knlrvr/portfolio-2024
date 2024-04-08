import About from "./components/about";
import Projects from "./components/projects";
import BlogPreview from "./components/blog";
import OnRepeat from "./components/onrepeat";
import Contact from "./components/contact";

import type { Metadata } from 'next'
import Gallery from "./components/gallery";

export const metadata: Metadata = {
  title: 'Kane Lariviere | Portfolio',
  description: 'Kane Lariviere • Software Developer • Portfolio',
}

export default function Home() {
  return (
    <main className="space-y-20">
      <About />
      <Projects />
      <BlogPreview />
      <Contact />
      <Gallery />
      <OnRepeat />
    </main> 
  );
}
