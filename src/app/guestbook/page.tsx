import GuestbookForm from "../components/guestbookform";

import type { Metadata } from 'next'
import { Section } from "../components/section";

export const metadata: Metadata = {
    title: 'Kane Lariviere | Guestbook',
    description: 'Kane Lariviere • Software Developer • Guestbook',
  }

export default function Guestbook() {
    return (
      <Section title="Guestbook">
        <GuestbookForm />
      </Section>
    )
}