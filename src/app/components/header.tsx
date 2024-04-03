'use client'

import { usePathname } from "next/navigation"

import Link from 'next/link'

import { LuSquareSlash } from 'react-icons/lu'

const items = [
    { label: 'blog', href: '/blog', },
    { label: 'guestbook', href: '/guestbook' },
    { label: <LuSquareSlash />, href: '/tech' }
]

export default function Header() {

    let path = usePathname();

    let backHref = '/';
    if(path.includes('/blog/')) {
        backHref = '/blog'
    };

    return (
        <div className="flex justify-between items-center font-light mb-12 text-neutral-500 text-sm">
            
            {path.includes('/guestbook') || path.includes('/blog') || path.includes('/tech') ? (
                <Link href={backHref} className="hover:underline underline-offset-4">&larr; back </Link>
            ) : (
                <div className="">knlrvr</div>
            )} 

            <ul className="flex items-center gap-8">
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