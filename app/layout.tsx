import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import dynamic from 'next/dynamic'

// Lazy load components for better performance
const Navbar = dynamic(() => import('@/components/Navbar'), {
  ssr: true,
  loading: () => <div className="h-16 bg-white shadow-lg" />
})

const Footer = dynamic(() => import('@/components/Footer'), {
  ssr: true,
})

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: 'Neokisan Innovations | Revolutionizing Pruning. Empowering Farmers.',
  description: 'Neokisan Innovations Pvt Ltd - Smart pruning solutions for horticultural farmers. Making farming healthier, safer and more productive with Prunolite.',
  keywords: 'agritech, pruning, horticulture, Prunolite, smart farming, agriculture innovation, grape farming',
  authors: [{ name: 'Neokisan Innovations' }],
  openGraph: {
    title: 'Neokisan Innovations | Revolutionizing Pruning. Empowering Farmers.',
    description: 'Smart pruning solutions for horticultural farmers',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Preload critical resources */}
        <link rel="preload" href="/images/hero-poster.jpg" as="image" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
