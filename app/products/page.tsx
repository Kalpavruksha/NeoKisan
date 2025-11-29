import Link from 'next/link'
import dynamic from 'next/dynamic'
import type { Metadata } from 'next'

// Lazy load heavy components for better performance
const ProductImage = dynamic(() => import('@/components/ProductImage'), {
  loading: () => <div className="w-full h-full bg-gray-100 animate-pulse" />
})

const ProductVideo = dynamic(() => import('@/components/ProductVideo'), {
  loading: () => <div className="w-full aspect-video bg-gray-100 rounded-2xl animate-pulse" />
})

const ScrollReveal = dynamic(() => import('@/components/ScrollReveal'), {
  ssr: true,
})

const LazyVideo = dynamic(() => import('@/components/LazyVideo'), {
  ssr: false,
})

export const metadata: Metadata = {
  title: 'Products | Neokisan Innovations - Prunolite & Smart Pruning Solutions',
  description: 'Explore Prunolite Smart Secateur and Controlled-Flow Protective Gloves - innovative pruning solutions for horticultural farmers.',
}

export default function Products() {
  return (
    <>
      {/* Hero with Background Video */}
      <section className="relative w-full h-[45vh] min-h-[400px] overflow-hidden">
        {/* Background Video - Lazy Loaded */}
        <LazyVideo
          src="/videos/products-background.mp4"
          poster="/images/products-poster.jpg"
          className="absolute top-0 left-0 w-full h-full"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Gradient Overlay with Glassmorphism */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>

        {/* Hero Content with Glassmorphism */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4 text-white">
          <div className="glass-hero rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-primary-200 bg-clip-text text-transparent">
              Our Products
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto font-light">
              Innovative solutions designed by farmers, built by engineers
            </p>
          </div>
        </div>
      </section>

      {/* Product 1: Prunolite Smart Secateur */}
      <section className="py-12 md:py-16 relative overflow-hidden">
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 parallax-bg opacity-5"
          style={{
            backgroundImage: 'url(/images/hero-poster.jpg)',
            backgroundAttachment: 'fixed',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-primary-50/30"></div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
            <ScrollReveal direction="right" className="order-2 lg:order-1">
              <div className="glass-card rounded-2xl p-6 md:p-8 shadow-2xl">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500/30 to-red-600/30 backdrop-blur-sm text-red-800 px-4 py-2 rounded-full text-sm font-bold mb-4 border-2 border-red-400/50 shadow-lg blink-red">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
                  </span>
                  PROTOTYPE STAGE
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Prunolite Smart Secateur
                </h2>
                <div className="mb-5">
                  <div className="inline-block bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 text-white px-5 py-2 rounded-xl font-bold text-base shadow-lg">
                    Price: Updated Soon
                  </div>
                </div>
                <p className="text-lg text-gray-800 mb-4 leading-relaxed font-semibold">
                  The world's first intelligent pruning device that combines cutting and chemical application in one revolutionary action.
                </p>
                <p className="text-base text-gray-600 mb-6 leading-relaxed">
                  Designed by farmers, engineered by experts. Transform your pruning workflow with safety, speed, and efficiency.
                </p>
              
                <ScrollReveal delay={100}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Components</h3>
                </ScrollReveal>
                <div className="grid grid-cols-1 gap-3 mb-6">
                  <ScrollReveal delay={150}>
                    <div className="glass-card bg-gradient-to-r from-white/80 to-primary-50/50 p-4 rounded-lg border-l-4 border-primary-600 shadow-md">
                      <div className="font-bold text-gray-900 mb-1">Smart Secateur</div>
                      <div className="text-xs text-gray-600">Precision cutting with integrated chemical applicator</div>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={200}>
                    <div className="glass-card bg-gradient-to-r from-white/80 to-primary-50/50 p-4 rounded-lg border-l-4 border-primary-600 shadow-md">
                      <div className="font-bold text-gray-900 mb-1">Backpack System</div>
                      <div className="text-xs text-gray-600">Lightweight ergonomic design with electric pump</div>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={250}>
                    <div className="glass-card bg-gradient-to-r from-white/80 to-primary-50/50 p-4 rounded-lg border-l-4 border-primary-600 shadow-md">
                      <div className="font-bold text-gray-900 mb-1">Rechargeable Battery</div>
                      <div className="text-xs text-gray-600">Long-lasting power for extended operations</div>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={300}>
                    <div className="glass-card bg-gradient-to-r from-white/80 to-primary-50/50 p-4 rounded-lg border-l-4 border-primary-600 shadow-md">
                      <div className="font-bold text-gray-900 mb-1">Liquid Supply System</div>
                      <div className="text-xs text-gray-600">Precise chemical delivery to cutting point</div>
                    </div>
                  </ScrollReveal>
                </div>

                <ScrollReveal delay={350}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h3>
                </ScrollReveal>
                <div className="space-y-3 mb-6">
                  <ScrollReveal delay={400}>
                    <div className="flex items-center gap-3 glass-card bg-gradient-to-r from-primary-50/80 to-white/80 p-4 rounded-lg shadow-md">
                      <div className="bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-full w-10 h-10 flex items-center justify-center text-base font-bold flex-shrink-0">1</div>
                      <div className="text-gray-800"><strong className="text-primary-700">Cut</strong> - Clean precision cut with secateur</div>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={450}>
                    <div className="flex items-center gap-3 glass-card bg-gradient-to-r from-primary-50/80 to-white/80 p-4 rounded-lg shadow-md">
                      <div className="bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-full w-10 h-10 flex items-center justify-center text-base font-bold flex-shrink-0">2</div>
                      <div className="text-gray-800"><strong className="text-primary-700">Apply</strong> - Automatic chemical dispensing</div>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={500}>
                    <div className="flex items-center gap-3 glass-card bg-gradient-to-r from-primary-50/80 to-white/80 p-4 rounded-lg shadow-md">
                      <div className="bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-full w-10 h-10 flex items-center justify-center text-base font-bold flex-shrink-0">3</div>
                      <div className="text-gray-800"><strong className="text-primary-700">Disinfect</strong> - Instant protection at cut end</div>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={550}>
                    <div className="flex items-center gap-3 glass-card bg-gradient-to-r from-primary-50/80 to-white/80 p-4 rounded-lg shadow-md">
                      <div className="bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-full w-10 h-10 flex items-center justify-center text-base font-bold flex-shrink-0">4</div>
                      <div className="text-gray-800"><strong className="text-primary-700">Grow</strong> - Better yields, season after season</div>
                    </div>
                  </ScrollReveal>
                </div>

                <ScrollReveal delay={600}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Benefits</h3>
                </ScrollReveal>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <ScrollReveal delay={650}>
                    <div className="glass-card bg-gradient-to-br from-primary-50/80 to-white/80 p-4 rounded-xl border border-primary-200/50 shadow-md">
                      <div className="text-2xl mb-2">⚡</div>
                      <div className="font-bold text-primary-700 mb-1">One-Step</div>
                      <div className="text-xs text-gray-600">Save 60% time</div>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={700}>
                    <div className="glass-card bg-gradient-to-br from-primary-50/80 to-white/80 p-4 rounded-xl border border-primary-200/50 shadow-md">
                      <div className="text-2xl mb-2">👥</div>
                      <div className="font-bold text-primary-700 mb-1">Lower Labour</div>
                      <div className="text-xs text-gray-600">50% reduction</div>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={750}>
                    <div className="glass-card bg-gradient-to-br from-primary-50/80 to-white/80 p-4 rounded-xl border border-primary-200/50 shadow-md">
                      <div className="text-2xl mb-2">💰</div>
                      <div className="font-bold text-primary-700 mb-1">No Wastage</div>
                      <div className="text-xs text-gray-600">40% cost save</div>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={800}>
                    <div className="glass-card bg-gradient-to-br from-primary-50/80 to-white/80 p-4 rounded-xl border border-primary-200/50 shadow-md">
                      <div className="text-2xl mb-2">📈</div>
                      <div className="font-bold text-primary-700 mb-1">Better Yield</div>
                      <div className="text-xs text-gray-600">15-20% increase</div>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="left" className="order-1 lg:order-2">
              <div className="space-y-4">
                <div className="relative glass-card rounded-2xl aspect-square overflow-hidden shadow-xl ring-2 ring-primary-200/50">
                  <ProductImage
                    src="/images/products/prunolite-secateur.jpg"
                    alt="Prunolite Smart Secateur"
                    fallbackText="Prunolite Smart Secateur Image"
                  />
                </div>
                {/* Pruning Video Showcase */}
                <ProductVideo
                  src="/videos/pruning-demo.mp4"
                  poster="/images/products/prunolite-secateur.jpg"
                  title="Prunolite in Action - Pruning Demo"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Product 2: Controlled-Flow Protective Gloves */}
      <section className="py-12 md:py-16 relative overflow-hidden">
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 parallax-bg opacity-5"
          style={{
            backgroundImage: 'url(/images/hero-poster.jpg)',
            backgroundAttachment: 'fixed',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/40 via-white to-green-50/30"></div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <ScrollReveal direction="right">
              <div className="space-y-4">
                <div className="relative glass-card rounded-2xl aspect-square overflow-hidden shadow-xl ring-2 ring-green-200/50">
                  <ProductImage
                    src="/images/products/protective-gloves.jpg"
                    alt="Controlled-Flow Protective Gloves"
                    fallbackText="Controlled-Flow Protective Gloves Image"
                  />
                </div>
                {/* Gloves Video Showcase */}
                <ProductVideo
                  src="/videos/gloves-demo.mp4"
                  poster="/images/products/protective-gloves.jpg"
                  title="Protective Gloves in Action - Safe Application Demo"
                />
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="left">
              <div className="glass-card rounded-2xl p-6 md:p-8 shadow-2xl">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500/30 to-red-600/30 backdrop-blur-sm text-red-800 px-4 py-2 rounded-full text-sm font-bold mb-4 border-2 border-red-400/50 shadow-lg blink-red">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
                  </span>
                  FIELD-READY • SELLING NOW
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Controlled-Flow Protective Gloves
                </h2>
                <div className="mb-5">
                  <div className="inline-block bg-gradient-to-r from-green-600 via-emerald-700 to-green-800 text-white px-5 py-2 rounded-xl font-bold text-base shadow-lg">
                    Price: Updated Soon
                  </div>
                </div>
                <p className="text-lg text-gray-800 mb-4 leading-relaxed font-semibold">
                  Game-changing solution for safe chemical application. Zero exposure, maximum efficiency.
                </p>
                <p className="text-base text-gray-600 mb-6 leading-relaxed">
                  Deployed across 200+ acres with proven results. Transforming how farmers handle chemical application safely.
                </p>
                
                <ScrollReveal delay={100}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h3>
                </ScrollReveal>
                <div className="grid grid-cols-1 gap-3 mb-6">
                  <ScrollReveal delay={150}>
                    <div className="glass-card bg-gradient-to-r from-white/80 to-green-50/50 p-4 rounded-lg border-l-4 border-green-600 shadow-md">
                      <div className="font-bold text-gray-900 mb-1">Adjustable Flow Control</div>
                      <div className="text-xs text-gray-600">Precision dial for uniform application</div>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={200}>
                    <div className="glass-card bg-gradient-to-r from-white/80 to-green-50/50 p-4 rounded-lg border-l-4 border-green-600 shadow-md">
                      <div className="font-bold text-gray-900 mb-1">Dual-Hand Operation</div>
                      <div className="text-xs text-gray-600">Double your application speed</div>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={250}>
                    <div className="glass-card bg-gradient-to-r from-white/80 to-green-50/50 p-4 rounded-lg border-l-4 border-green-600 shadow-md">
                      <div className="font-bold text-gray-900 mb-1">Zero Direct Contact</div>
                      <div className="text-xs text-gray-600">Complete barrier protection</div>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={300}>
                    <div className="glass-card bg-gradient-to-r from-white/80 to-green-50/50 p-4 rounded-lg border-l-4 border-green-600 shadow-md">
                      <div className="font-bold text-gray-900 mb-1">Prunolite Compatible</div>
                      <div className="text-xs text-gray-600">Seamless system integration</div>
                    </div>
                  </ScrollReveal>
                </div>

                <ScrollReveal delay={350}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Benefits</h3>
                </ScrollReveal>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <ScrollReveal delay={400}>
                    <div className="glass-card bg-gradient-to-br from-green-50/80 to-white/80 p-4 rounded-xl border border-green-200/50 shadow-md">
                      <div className="text-2xl mb-2">⚡</div>
                      <div className="font-bold text-green-700 mb-1">Fast</div>
                      <div className="text-xs text-gray-600">40% faster</div>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={450}>
                    <div className="glass-card bg-gradient-to-br from-green-50/80 to-white/80 p-4 rounded-xl border border-green-200/50 shadow-md">
                      <div className="text-2xl mb-2">🎯</div>
                      <div className="font-bold text-green-700 mb-1">Precise</div>
                      <div className="text-xs text-gray-600">Uniform dosage</div>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={500}>
                    <div className="glass-card bg-gradient-to-br from-green-50/80 to-white/80 p-4 rounded-xl border border-green-200/50 shadow-md">
                      <div className="text-2xl mb-2">🛡️</div>
                      <div className="font-bold text-green-700 mb-1">Safe</div>
                      <div className="text-xs text-gray-600">Zero exposure</div>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={550}>
                    <div className="glass-card bg-gradient-to-br from-green-50/80 to-white/80 p-4 rounded-xl border border-green-200/50 shadow-md">
                      <div className="text-2xl mb-2">💧</div>
                      <div className="font-bold text-green-700 mb-1">Clean</div>
                      <div className="text-xs text-gray-600">No spills</div>
                    </div>
                  </ScrollReveal>
                </div>

                <ScrollReveal delay={600}>
                  <div className="glass-card bg-gradient-to-r from-green-50/80 to-emerald-50/80 p-5 rounded-xl border border-green-200/50 shadow-md">
                    <p className="text-gray-800 mb-1 font-bold text-lg">
                      ✅ Proven in the Field
                    </p>
                    <p className="text-gray-700 text-sm">
                      <strong>20 units sold</strong> • <strong>200+ acres</strong> deployed • Karnataka & Maharashtra
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Innovation Principle with Glassmorphism */}
      <section className="py-12 md:py-16 relative overflow-hidden">
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 parallax-bg opacity-10"
          style={{
            backgroundImage: 'url(/images/hero-poster.jpg)',
            backgroundAttachment: 'fixed',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <div className="glass-hero rounded-2xl p-8 md:p-10 shadow-2xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-5 text-white">
                  Our Innovation Principle
                </h2>
                <p className="text-xl md:text-2xl mb-6 text-primary-100 font-light">
                  "Cutting and disinfection should occur together."
                </p>
                <p className="text-base md:text-lg mb-8 text-primary-50 leading-relaxed max-w-3xl mx-auto">
                  When a plant is cut, the cut end touches the secateur blade. We created a delivery mechanism at that exact contact point, eliminating the need for separate chemical application steps.
                </p>
                <ScrollReveal delay={200}>
                  <div className="glass-card-dark bg-white/10 p-6 rounded-xl border-2 border-white/20">
                    <p className="text-lg md:text-xl italic text-white mb-3">
                      "Innovation doesn't come from labs. It comes from listening to farmers."
                    </p>
                    <p className="text-base text-primary-200 font-semibold">— Abhishek M. Kajagar, Co-founder</p>
                  </div>
                </ScrollReveal>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA with Glassmorphism */}
      <section className="py-12 md:py-16 relative overflow-hidden">
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 parallax-bg opacity-8"
          style={{
            backgroundImage: 'url(/images/hero-poster.jpg)',
            backgroundAttachment: 'fixed',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-primary-50/40"></div>
        
        <div className="container-custom text-center relative z-10">
          <ScrollReveal>
            <div className="glass-card rounded-2xl p-8 md:p-10 max-w-3xl mx-auto shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-gray-900 to-primary-700 bg-clip-text text-transparent">
                Interested in Our Products?
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mb-6 font-light">
                Get in touch to learn more or schedule a demo
              </p>
              <Link href="/contact" className="inline-block bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-bold py-3 px-8 rounded-xl text-base shadow-lg hover:shadow-xl transition-all hover:scale-105">
                Contact Us
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

