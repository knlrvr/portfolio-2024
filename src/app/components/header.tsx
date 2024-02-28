'use client'

import { usePathname } from "next/navigation"

import Link from 'next/link'


const items = [
    { label: 'blog', href: '/blog', },
    { label: 'guestbook', href: '/guestbook' }
]

export default function Header() {

    let path = usePathname();

    return (
        <div className="flex justify-between items-center font-light mb-12 text-neutral-500 text-sm">
            {path?.includes('/blog') || path?.includes('/guestbook') ? (
                <Link href="/" className=" hover:underline underline-offset-4">&larr; Back</Link>
            ) : (
                <Link href="/" className="font-migra text-lg">knlrvr</Link>
            )}
            <ul className="flex gap-8">
                {items.map((item) => (
                    <li key={item.href} className="">
                        <Link href={item.href}>
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}