import Image from 'next/image'
import Link from 'next/link'

export default function AuthorCard() {
    return (
        <div className="flex items-center gap-2">
            <Image
                src="/kane.jpg"
                alt="twitter profile picture"
                width={1000}
                height={1000}
                className="h-12 w-12 rounded-full"
            />
            <div className="text-sm flex flex-col text-neutral-500">
                <p className="">Kane Lariviere (ó﹏ò｡)</p>
                <Link href="https://twitter.com/knlrvr" 
                    target="_blank" 
                    className="tracking-wide font-mono underline underline-offset-2 hover:text-neutral-200 transition-colors duration-200"
                >
                    @knlrvr
                </Link>
            </div>
        </div>
    )
}