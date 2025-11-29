import ScrollReveal from '@/components/ScrollReveal'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers | Neokisan Innovations - Join Our Team',
  description: 'Join Neokisan Innovations and help revolutionize horticultural farming. View open positions and apply today.',
}

export default function Careers() {
  return (
    <>
      {/* Hero with Parallax */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 parallax-bg opacity-10"
          style={{
            backgroundImage: 'url(/images/hero-poster.jpg)',
            backgroundAttachment: 'fixed',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-100/50"></div>
        
        <div className="container-custom text-center relative z-10">
          <ScrollReveal>
            <div className="glass-hero rounded-3xl p-10 md:p-12 max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-gray-900 to-primary-700 bg-clip-text text-transparent">
                Careers at Neokisan
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-light">
                Join us in revolutionizing horticultural farming
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Join Us with Glassmorphism */}
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
              Why Join Neokisan?
            </h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: '💡', title: 'Innovation', desc: 'Work on cutting-edge agritech solutions that make a real difference' },
              { icon: '🌱', title: 'Impact', desc: 'Help improve the lives of millions of farmers across India' },
              { icon: '🚀', title: 'Growth', desc: 'Be part of a fast-growing startup with global ambitions' },
            ].map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 100} direction="up">
                <div className="glass-card rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form with Glassmorphism */}
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
          <div className="max-w-2xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center bg-gradient-to-r from-gray-900 to-primary-700 bg-clip-text text-transparent">
                Apply Now
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={100}>
              <form 
                action="https://formsubmit.co/neokisaninnovations@gmail.com" 
                method="POST" 
                encType="multipart/form-data"
                className="glass-card rounded-2xl p-8 md:p-10 shadow-2xl space-y-6"
              >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="New Career Application from Neokisan Website" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value="/careers?success=true" />

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white/50 backdrop-blur-sm"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white/50 backdrop-blur-sm"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white/50 backdrop-blur-sm"
                  />
                </div>

                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                    Position of Interest *
                  </label>
                  <select
                    id="position"
                    name="position"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white/50 backdrop-blur-sm"
                  >
                    <option value="">Select a position</option>
                    <option value="agriculture-specialist">Agriculture Specialist</option>
                    <option value="r-d-engineer">R&D Engineer</option>
                    <option value="electronics-engineer">Electronics Engineer</option>
                    <option value="manufacturing-engineer">Manufacturing Engineer</option>
                    <option value="sales-marketing">Sales & Marketing</option>
                    <option value="operations">Operations</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                    Years of Experience *
                  </label>
                  <input
                    type="text"
                    id="experience"
                    name="experience"
                    required
                    placeholder="e.g., 2 years"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white/50 backdrop-blur-sm"
                  />
                </div>

                <div>
                  <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">
                    Resume/CV (PDF, DOC, DOCX) *
                  </label>
                  <input
                    type="file"
                    id="resume"
                    name="attachment"
                    required
                    accept=".pdf,.doc,.docx"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white/50 backdrop-blur-sm"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Cover Letter / Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white/50 backdrop-blur-sm"
                    placeholder="Tell us why you're interested in joining Neokisan..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold py-3 px-6 rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all shadow-lg hover:shadow-xl"
                >
                  Submit Application
                </button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
