import ScrollReveal from '@/components/ScrollReveal'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Neokisan Innovations - Our Story & Mission',
  description: 'Learn about Neokisan Innovations, our mission to empower horticultural farmers, and the story behind Prunolite.',
}

export default function About() {
  return (
    <>
      {/* Hero with Parallax */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 parallax-bg opacity-50"
          style={{
            backgroundImage: 'url(/images/hero-poster.jpg)',
            backgroundAttachment: 'fixed',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/80 via-white/70 to-primary-100/60"></div>
        
        <div className="container-custom text-center relative z-10">
          <ScrollReveal>
            <div className="glass-hero rounded-3xl p-10 md:p-12 max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-gray-900 to-primary-700 bg-clip-text text-transparent">
                About Neokisan Innovations
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-light">
                Built by Engineers. Designed by Farmers.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission & Vision with Glassmorphism */}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal direction="right">
              <div className="glass-card rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Make farming healthier, safer and more productive through innovative pruning solutions that empower horticultural farmers.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left">
              <div className="glass-card rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Empower every horticultural farmer with safe and efficient pruning tools, starting from India and expanding globally.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Founder Story with Glassmorphism */}
      <section className="py-12 md:py-16 relative overflow-hidden">
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 parallax-bg opacity-5"
          style={{
            backgroundImage: 'url(/images/hero-poster.jpg)',
            backgroundAttachment: 'fixed',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-primary-50/20"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center bg-gradient-to-r from-gray-900 to-primary-700 bg-clip-text text-transparent">
                The Founder&apos;s Story
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={100}>
              <div className="glass-card rounded-2xl p-8 md:p-10 shadow-2xl">
                <div className="flex items-center mb-6">
                  <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary-600 text-2xl font-bold">A</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Abhishek M. Kajagar</h3>
                    <p className="text-gray-600">Co-founder, Neokisan Innovations Pvt Ltd</p>
                    <p className="text-gray-500 text-sm">Graduate, College of Agriculture, Dharwad</p>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-6">
                    Abhishek developed the idea for Prunolite during his fourth year of college while working closely with horticultural farmers. Through deep field interaction, he gained a practical understanding of pruning challenges in crops like grapes.
                  </p>

                  <h4 className="text-xl font-semibold text-gray-900 mb-4">The Conventional Challenge</h4>
                  <p className="text-gray-700 mb-6">
                    The conventional pruning process involves:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-6 ml-4">
                    <li>Cutting unwanted and diseased twigs</li>
                    <li>Disinfecting cut ends</li>
                    <li>Applying Hydrogen Cyanamide for bud breaking</li>
                  </ol>
                  <p className="text-gray-700 mb-6">
                    This multi-step workflow consumes high labour, time and cost — and exposes workers directly to hazardous chemicals.
                  </p>

                  <h4 className="text-xl font-semibold text-gray-900 mb-4">The Insight</h4>
                  <p className="text-gray-700 mb-6">
                    Abhishek observed that after cutting, the sap naturally smears on the secateur blade. This insight led to the creation of an integrated system where chemical application occurs at the moment of cutting — forming the foundation for Prunolite.
                  </p>

                  <div className="bg-primary-50 border-l-4 border-primary-600 p-6 my-8">
                    <p className="text-lg italic text-gray-800">
                      &quot;Innovation doesn&apos;t come from labs. It comes from listening to farmers.&quot;
                    </p>
                    <p className="mt-2 text-primary-700 font-semibold">— Abhishek M. Kajagar</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Company Info with Glassmorphism */}
      <section className="py-12 md:py-16 relative overflow-hidden">
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 parallax-bg opacity-5"
          style={{
            backgroundImage: 'url(/images/hero-poster.jpg)',
            backgroundAttachment: 'fixed',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-white via-primary-50/30 to-slate-50"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center bg-gradient-to-r from-gray-900 to-primary-700 bg-clip-text text-transparent">
                Company Information
              </h2>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: 'Company Name', value: 'Neokisan Innovations Pvt Ltd' },
                { label: 'Industry', value: 'Agri-technology / Horticulture Innovation' },
                { label: 'Focus Area', value: 'Smart pruning solutions for horticultural farmers' },
                { label: 'Flagship Product', value: 'Prunolite' },
                { label: 'Target Market', value: 'Grape farmers, expanding to other horticultural crops' },
                { label: 'Operating Region', value: 'Karnataka (Vijayapura focus), Maharashtra' },
              ].map((item, idx) => (
                <ScrollReveal key={idx} delay={idx * 50} direction={idx % 2 === 0 ? 'right' : 'left'}>
                  <div className="glass-card rounded-xl p-5 shadow-lg hover:shadow-xl transition-shadow">
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm uppercase tracking-wide">{item.label}</h3>
                    <p className="text-gray-700">{item.value}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Incubation Partner with Glassmorphism */}
      <section className="py-12 md:py-16 relative overflow-hidden">
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 parallax-bg opacity-5"
          style={{
            backgroundImage: 'url(/images/hero-poster.jpg)',
            backgroundAttachment: 'fixed',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-white via-primary-50/30 to-slate-50"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="glass-card rounded-2xl p-8 md:p-10 shadow-2xl text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-gray-900 to-primary-700 bg-clip-text text-transparent">
                  INCUBATED AT
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                  Neokisan Innovations Pvt Ltd is proudly incubated at <strong className="text-primary-700">Deshpande Foundation</strong>, Hubballi-Dharwad, one of India&apos;s leading startup ecosystems for innovation, entrepreneurship, and social impact.
                </p>
                <p className="text-base text-gray-600 mt-4 italic">
                  Supported and mentored by Deshpande Foundation and Deshpande Startups, Hubballi-Dharwad.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Expansion Plan with Glassmorphism */}
      <section className="py-12 md:py-16 relative overflow-hidden">
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 parallax-bg opacity-10"
          style={{
            backgroundImage: 'url(/images/hero-poster.jpg)',
            backgroundAttachment: 'fixed',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Our Growth Journey
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[
                { phase: 'Phase 1', title: 'Pan-India Expansion' },
                { phase: 'Phase 2', title: 'Global Viticulture Markets' },
                { phase: 'Phase 3', title: 'Multi-Crop Solutions' },
              ].map((item, idx) => (
                <ScrollReveal key={idx} delay={idx * 100} direction="up">
                  <div className="glass-card-dark rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                    <div className="text-3xl font-bold mb-2 text-white">{item.phase}</div>
                    <div className="text-primary-100 text-lg">{item.title}</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
