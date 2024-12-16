'use client'

import { usePathname } from "next/navigation"

import Link from 'next/link'

import { LuSmile, LuSquareSlash } from 'react-icons/lu'
import { RxArrowLeft } from "react-icons/rx";
import { ThemeToggle } from "./theme-toggle";
import { SquareChevronRight } from "lucide-react";

const items = [
    { label: 'blog', href: '/blog', },
    { label: 'guestbook', href: '/guestbook' },
    { label: 'my tech', href: '/tech' }
]

export default function Header() {

    let path = usePathname();

    let backHref = '/';
    if(path.includes('/blog/')) {
        backHref = '/blog'
    };

    return (
        <div className="flex justify-between items-center font-light mb-12 text-neutral-500 text-sm">
            
            {path.includes('/guestbook') || path.includes('/blog') || path.includes('/tech') || path.includes('/works')  ? (
                <Link href={backHref} className="inline-flex items-center gap-2 hover:underline underline-offset-4"><RxArrowLeft /> back </Link>
            ) : (
                <div className="flex items-center gap-2">
                    <SquareChevronRight className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
                    <h2>knlrvr</h2>
                </div>
            )} 

            <ul className="flex items-center gap-4">
                {items.map((item) => (
                    <li key={item.href} className="">
                        <Link href={item.href} className="hover:underline underline-offset-4">
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}