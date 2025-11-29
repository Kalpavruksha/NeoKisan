import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers | Neokisan Innovations - Join Our Team',
  description: 'Join Neokisan Innovations and help revolutionize horticultural farming. View open positions and apply today.',
}

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

