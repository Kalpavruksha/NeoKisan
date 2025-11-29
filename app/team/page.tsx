import ScrollReveal from '@/components/ScrollReveal'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Team | Neokisan Innovations - Founders & Advisors',
  description: 'Meet the team behind Neokisan Innovations - founders, engineers, and advisors working to revolutionize horticultural pruning.',
}

export default function Team() {
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
                Our Team
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-light">
                Passionate individuals dedicated to transforming agriculture
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Founders with Glassmorphism */}
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
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center bg-gradient-to-r from-gray-900 to-primary-700 bg-clip-text text-transparent">
              Founders
            </h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { initial: 'A', name: 'Abhishek M. Kajagar', role: 'Co-founder', education: 'Graduate, College of Agriculture, Dharwad', focus: 'Agriculture, Strategy, Product' },
              { initial: 'M', name: 'Manoj B. Sadhunavar', role: 'R&D & Engineering Lead', education: '', focus: 'R&D, Engineering, Manufacturing' },
              { initial: 'B', name: 'Bhavath Jai Singh', role: 'Electronics Engineer', education: '', focus: 'Electronics & Communication Engineer' },
            ].map((founder, idx) => (
              <ScrollReveal key={idx} delay={idx * 100} direction="up">
                <div className="glass-card rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-white text-4xl font-bold">{founder.initial}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{founder.name}</h3>
                  <p className="text-primary-600 font-semibold mb-4">{founder.role}</p>
                  {founder.education && <p className="text-gray-600 text-sm mb-4">{founder.education}</p>}
                  <div className="text-gray-700 text-sm">
                    <p className="mb-2"><strong>Focus:</strong></p>
                    <p>{founder.focus}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors with Glassmorphism */}
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
              Advisors & Mentors
            </h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { initial: 'H', name: 'Hemanshu Jain', title: 'CEO, Khayal', subtitle: 'Angel Investor' },
              { initial: 'R', name: 'Dr. R. V. Hegde', title: 'Professor', subtitle: 'UAS Dharwad' },
              { initial: 'M', name: 'Manish Jaiswal', title: 'CEO, Deshpande Startups', subtitle: 'Hubballi-Dharwad' },
              { initial: 'S', name: 'Dr. S. S. Dolli', title: 'CEO', subtitle: 'Krishik AIC' },
            ].map((advisor, idx) => (
              <ScrollReveal key={idx} delay={idx * 50} direction="up">
                <div className="glass-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-white text-2xl font-bold">{advisor.initial}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">{advisor.name}</h3>
                  <p className="text-gray-600 text-sm text-center mb-2">{advisor.title}</p>
                  <p className="text-gray-500 text-xs text-center">{advisor.subtitle}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA with Glassmorphism */}
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
        
        <div className="container-custom text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Join Our Mission
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Be part of the team revolutionizing agriculture
            </p>
            <a href="/careers" className="glass-card-dark px-8 py-3 rounded-lg font-semibold text-white hover:bg-white/20 transition-all inline-block">
              View Open Positions
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
