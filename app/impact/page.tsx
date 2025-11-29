import ScrollReveal from '@/components/ScrollReveal'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impact | Neokisan Innovations - Social Impact & SDG Alignment',
  description: 'Learn about Neokisan Innovations social impact, SDG alignment, and how Prunolite improves farmer lives.',
}

export default function Impact() {
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
                Our Impact
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-light">
                Prunolite is not just a product — it is a movement.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SDG Alignment with Glassmorphism */}
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
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-gray-900 to-primary-700 bg-clip-text text-transparent">
                Aligned with UN Sustainable Development Goals
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="glass-card rounded-2xl p-10 shadow-2xl">
                <div className="text-6xl font-bold text-primary-600 mb-4">SDG 2</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Zero Hunger</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  By improving yield and farmer income, Prunolite contributes directly to ending hunger and achieving food security.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Impact Areas with Glassmorphism */}
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
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center bg-gradient-to-r from-gray-900 to-primary-700 bg-clip-text text-transparent">
              How Prunolite Creates Impact
            </h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '📈', title: 'Improves Yield', desc: 'Uniform bud breaking and precise chemical application lead to better crop yields and higher quality produce.', color: 'green' },
              { icon: '💰', title: 'Improves Farmer Income', desc: 'Reduced costs per acre and increased yields directly translate to higher profitability for farmers.', color: 'blue' },
              { icon: '🛡️', title: 'Improves Health Safety', desc: 'Eliminates direct contact with hazardous chemicals, protecting workers from skin irritation, burns, and respiratory issues.', color: 'red' },
              { icon: '👥', title: 'Reduces Labour', desc: 'One-step process reduces dependency on manual labour, making farming operations more efficient and cost-effective.', color: 'purple' },
              { icon: '💵', title: 'Reduces Cost', desc: 'Lower chemical wastage and reduced labour requirements significantly decrease the cost per acre for farmers.', color: 'yellow' },
              { icon: '⚡', title: 'Faster Operations', desc: 'Integrated cutting and disinfection speeds up the pruning cycle, allowing farmers to cover more area in less time.', color: 'indigo' },
            ].map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 50} direction="up">
                <div className="glass-card rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                  <div className={`w-16 h-16 bg-${item.color}-100 rounded-full flex items-center justify-center mb-4 text-3xl`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Problem vs Solution with Glassmorphism */}
      <section className="py-12 md:py-16 relative overflow-hidden">
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 parallax-bg opacity-5"
          style={{
            backgroundImage: 'url(/images/hero-poster.jpg)',
            backgroundAttachment: 'fixed',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-primary-50/30"></div>
        
        <div className="container-custom relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center bg-gradient-to-r from-gray-900 to-primary-700 bg-clip-text text-transparent">
              The Transformation
            </h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ScrollReveal direction="right">
              <div className="glass-card rounded-2xl p-8 shadow-2xl border-l-4 border-red-500">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Before Prunolite</h3>
                <ul className="space-y-3 text-gray-700">
                  {[
                    '₹27,500 per acre cost',
                    '3 out of 5 workers allergic to chemicals',
                    'Non-uniform bud breaking',
                    'High chemical wastage',
                    'Manual, time-consuming process',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left">
              <div className="glass-card rounded-2xl p-8 shadow-2xl border-l-4 border-green-500">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">With Prunolite</h3>
                <ul className="space-y-3 text-gray-700">
                  {[
                    'Reduced cost per acre',
                    'Zero direct chemical contact',
                    'Uniform bud breaking',
                    'No chemical wastage',
                    'One-step automated process',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Market Impact Numbers with Glassmorphism */}
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
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
              Market Impact Potential
            </h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: '₹1082 Cr', title: 'Annual pruning cost in India', subtitle: 'Potential savings opportunity' },
              { number: '2 Cr+', title: 'Horticultural farmers', subtitle: 'Potential beneficiaries' },
              { number: '60%', title: 'Workers at risk', subtitle: 'Can be protected from chemical exposure' },
            ].map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 100} direction="up">
                <div className="glass-card-dark rounded-2xl p-8 text-center shadow-2xl hover:shadow-3xl transition-all hover:scale-105">
                  <div className="text-5xl font-bold mb-4 text-white">{item.number}</div>
                  <div className="text-xl text-primary-100 mb-2">{item.title}</div>
                  <div className="text-sm text-primary-200">{item.subtitle}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
