import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Neokisan Innovations - Get in Touch',
  description: 'Contact Neokisan Innovations for product inquiries, demos, partnerships, or any questions about our smart pruning solutions.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

