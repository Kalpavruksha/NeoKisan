import Link from 'next/link'
import dynamic from 'next/dynamic'
import type { Metadata } from 'next'

// Lazy load heavy components
const ProductImage = dynamic(() => import('@/components/ProductImage'), {
  loading: () => <div className="w-full h-full bg-gray-100 animate-pulse" />
})

const LazyVideo = dynamic(() => import('@/components/LazyVideo'), {
  ssr: false,
})

export const metadata: Metadata = {
  title: 'Home | Neokisan Innovations - Revolutionizing Pruning. Empowering Farmers.',
  description: 'Neokisan Innovations - Smart pruning solutions for horticultural farmers. Making farming healthier, safer and more productive.',
}

export default function Home() {
  return (
    <>
      {/* Hero Section with Video */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* VIDEO - Lazy Loaded */}
        <LazyVideo
          src="/videos/hero.mp4"
          poster="/images/hero-poster.jpg"
          className="absolute top-0 left-0 w-full h-full"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* HERO CONTENT with Glassmorphism */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4 text-white">
          <div className="glass-hero rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Revolutionizing Pruning. Empowering Farmers.
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-100">
              Safer • Faster • Smarter pruning solutions for horticulture
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products" className="bg-primary-600 hover:bg-primary-700 px-6 py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl">
                Explore Product
              </Link>
              <Link href="/careers" className="glass-card border-2 border-white/30 hover:border-white/50 px-6 py-3 rounded-lg transition-all duration-200">
                Join Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement with Parallax */}
      <section className="section-padding relative overflow-hidden">
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 parallax-bg opacity-20"
          style={{
            backgroundImage: 'url(/images/hero-poster.jpg)',
            backgroundAttachment: 'fixed',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white"></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Challenge
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pruning in horticulture is compulsory, but current methods are costly, unsafe, and inefficient.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card bg-red-50/80 p-6 rounded-xl border-l-4 border-red-500 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Health Risks</h3>
              <p className="text-gray-700">
                3 out of 5 labourers are allergic to Hydrogen Cyanamide, causing skin irritation, chemical burns, and respiratory issues.
              </p>
            </div>
            <div className="glass-card bg-yellow-50/80 p-6 rounded-xl border-l-4 border-yellow-500 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cost Burden</h3>
              <p className="text-gray-700">
                Farmers spend approximately ₹27,500 per acre. India spends ₹1082 crore (USD 130M) annually on pruning activities.
              </p>
            </div>
            <div className="glass-card bg-orange-50/80 p-6 rounded-xl border-l-4 border-orange-500 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Inefficiency</h3>
              <p className="text-gray-700">
                Manual application leads to over/under-application, non-uniform bud breaking, reduced yield, and high chemical wastage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Split-Screen Video + Text Section */}
      <section className="section-padding relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch min-h-[600px]">
            {/* Video Side */}
            <div className="relative overflow-hidden rounded-l-2xl lg:rounded-r-none lg:rounded-l-2xl">
              <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/videos/hero.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-transparent"></div>
            </div>

            {/* Text Side with Glassmorphism */}
            <div className="glass-card-dark p-8 md:p-12 flex flex-col justify-center rounded-r-2xl lg:rounded-l-none lg:rounded-r-2xl">
              <div className="inline-block bg-primary-600/30 backdrop-blur-sm text-primary-900 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-primary-400/30">
                FROM PROBLEM TO SOLUTION
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Traditional Pruning → Neokisan Innovation
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                    <span className="text-red-600 font-bold">✗</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Traditional Method</h3>
                    <p className="text-gray-700 text-sm">Manual cutting → Separate disinfection → Chemical handling risks</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center">
                    <span className="text-primary-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Neokisan Solution</h3>
                    <p className="text-gray-700 text-sm">One-step cutting + disinfection → Zero manual handling → Complete safety</p>
                  </div>
                </div>
              </div>
              <Link href="/products" className="btn-primary w-fit">
                Discover Prunolite
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Preview with Glass Cards */}
      <section className="section-padding relative overflow-hidden">
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 parallax-bg opacity-15"
          style={{
            backgroundImage: 'url(/images/hero-poster.jpg)',
            backgroundAttachment: 'fixed',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary-50/80 via-white/90 to-primary-50/80"></div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="glass-card rounded-2xl p-8 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Solution: Prunolite
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                An intelligent pruning device with integrated chemical applicator. Cutting and disinfection occur together, eliminating manual chemical handling.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">One-step pruning + disinfection</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Lower labour dependency</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">No chemical wastage</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Better bud break & yield</span>
                </li>
              </ul>
              <Link href="/products" className="btn-primary">
                Learn More
              </Link>
            </div>
            <div className="glass-card rounded-2xl p-8 shadow-xl">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden ring-4 ring-primary-200/50">
                <ProductImage
                  src="/images/products/prunolite-secateur.jpg"
                  alt="Prunolite Smart Secateur"
                  fallbackText="Prunolite Smart Secateur"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Opportunity with Glass Cards */}
      <section className="section-padding relative overflow-hidden">
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 parallax-bg opacity-10"
          style={{
            backgroundImage: 'url(/images/hero-poster.jpg)',
            backgroundAttachment: 'fixed',
          }}
        ></div>
        <div className="absolute inset-0 bg-white/95"></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Market Opportunity
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center glass-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl font-bold text-primary-600 mb-2">2 Cr+</div>
              <div className="text-gray-700">Horticultural Farmers in India</div>
            </div>
            <div className="text-center glass-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl font-bold text-primary-600 mb-2">30 Lakh+</div>
              <div className="text-gray-700">Prune-dependent Farmers (KA + MH)</div>
            </div>
            <div className="text-center glass-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl font-bold text-primary-600 mb-2">1.1 Lakh</div>
              <div className="text-gray-700">Grape Growers</div>
            </div>
            <div className="text-center glass-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl font-bold text-primary-600 mb-2">₹40 Cr</div>
              <div className="text-gray-700">Grape Sector Market (3-5 Years)</div>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Section with Glassmorphism */}
      <section className="section-padding relative overflow-hidden">
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 parallax-bg opacity-15"
          style={{
            backgroundImage: 'url(/images/hero-poster.jpg)',
            backgroundAttachment: 'fixed',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/95 via-white/95 to-gray-50/95"></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <div className="glass-card inline-block px-6 py-3 rounded-full mb-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Watch Our Story
              </h2>
            </div>
            <p className="text-xl text-gray-600">
              Learn more about Neokisan Innovations and our mission
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {/* YouTube Video Embed with Glass Border */}
            <div className="glass-card rounded-2xl p-4 shadow-2xl">
              <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden border-2 border-primary-300/30">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/1k1tZgNJkpo?rel=0&modestbranding=1&showinfo=0"
                  title="Neokisan Innovations - Our Story"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
            <div className="text-center mt-6">
              <a 
                href="https://youtube.com/@neokisaninnovations?si=aHDNRt8k7qFsjUgR" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-card-dark inline-flex items-center gap-2 text-white px-6 py-3 rounded-xl font-semibold text-lg transition-all hover:scale-105 shadow-lg"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                Subscribe to Our Channel
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Glassmorphism */}
      <section className="section-padding relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800">
        {/* Parallax Background Overlay */}
        <div 
          className="absolute inset-0 parallax-bg opacity-10"
          style={{
            backgroundImage: 'url(/images/hero-poster.jpg)',
            backgroundAttachment: 'fixed',
          }}
        ></div>
        
        <div className="container-custom text-center relative z-10">
          <div className="glass-hero inline-block px-8 py-6 rounded-2xl max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Transform Your Farming?
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Join us in revolutionizing horticultural pruning
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-primary-600 hover:bg-primary-50 font-semibold py-3 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl">
                Get in Touch
              </Link>
              <Link href="/products" className="glass-card border-2 border-white/40 hover:border-white/60 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200">
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

