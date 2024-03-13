import GuestbookForm from "../components/guestbookform";

import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Kane Lariviere | Guestbook',
    description: 'Kane Lariviere • Software Developer • Guestbook',
  }

export default function Guestbook() {
    return (
        <GuestbookForm />
    )
}