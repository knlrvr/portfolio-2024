import GuestbookForm from "../components/guestbookform";

import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Kane Lariviere | Guestbook',
    description: 'Guestbook | Kane Lariviere • Software Engineer. Full Stack Developer. Designer.',
  }

export default function Guestbook() {
    return (
        <GuestbookForm />
    )
}