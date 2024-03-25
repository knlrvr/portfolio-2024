'use client'

import { usePathname } from "next/navigation"

import Link from 'next/link'


const items = [
    { label: 'blog', href: '/blog', },
    { label: 'guestbook', href: '/guestbook' }
]

export default function Header() {

    let path = usePathname();

    let backHref = '/';
    if (path.includes('/blog/')) {
        backHref = '/blog';
    } else if (path === '/guestbook') {
        backHref = '/';
    }

    return (
        <div className="flex justify-between items-center font-light mb-12 text-neutral-500 text-sm">
            <Link href={backHref} className="hover:underline underline-offset-4">&larr; back</Link>
            <ul className="flex gap-8">
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