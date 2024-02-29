import Image from "next/image";
import Header from "./components/header";
import About from "./components/about";
import Projects from "./components/projects";
import BlogPreview from "./components/blog";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="space-y-14">
      <About />
      <Projects />
      <BlogPreview />
      {/* <div className="flex flex-grow" /> */}
    </main> 
  );
}
