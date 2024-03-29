import { Reveal } from "../utils/reveal";
import AuthorCard from "./authorcard";
import Link from "next/link";

export default function About() {
    return (
        <Reveal>
            {/* <span></span> */}
            <div className="flex flex-col space-y-16">
                <AuthorCard />

                <div className="text-sm">
                    <Reveal>
                        <span className="font-medium text-base tracking-wide">About</span>
                    </Reveal>
                    
                    <Reveal>
                        <p className="text-neutral-400 text-sm font-light tracking-wide leading-6 mt-4">
                            Hi! I&apos;m <span className="text-blue-200">Kane</span>. I&apos;m a software developer based in the US. My work is focused on building engaging & memorable experiences
                            for the web while advocating for <em>accessibility</em>, <em>affordability</em>, & <em>equity</em>. 
                            <br />
                        </p>
                    </Reveal>
                </div>
            </div>
        </Reveal>
    )
}