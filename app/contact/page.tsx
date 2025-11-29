import ScrollReveal from '@/components/ScrollReveal'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Neokisan Innovations - Get in Touch',
  description: 'Contact Neokisan Innovations for product inquiries, demos, partnerships, or any questions about our pruning solutions.',
}

export default function Contact() {
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
                Get in Touch
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-light">
                Have questions? We'd love to hear from you
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Info & Form with Glassmorphism */}
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <ScrollReveal direction="right">
              <div className="glass-card rounded-2xl p-8 shadow-2xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
                
                <div className="space-y-6">
                  {[
                    { icon: '📧', title: 'Email', content: 'neokisaninnovations@gmail.com', link: 'mailto:neokisaninnovations@gmail.com' },
                    { icon: '📱', title: 'Phone', content: '+91 90191 42284', link: 'tel:+919019142284' },
                    { icon: '📍', title: 'Location', content: 'Deshpande Startups Foundation,\nHubballi-Dharwad, Karnataka\n(Vijayapura focus)', link: null },
                    { icon: '▶️', title: 'YouTube', content: '@neokisaninnovations', link: 'https://youtube.com/@neokisaninnovations' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 shadow-lg text-xl">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                        {item.link ? (
                          <a href={item.link} target={item.link.startsWith('http') ? '_blank' : undefined} rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined} className="text-primary-600 hover:text-primary-700 whitespace-pre-line">
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-gray-700 whitespace-pre-line">{item.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal direction="left">
              <div className="glass-card rounded-2xl p-8 shadow-2xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
                
                <form 
                  action="https://formsubmit.co/neokisaninnovations@gmail.com" 
                  method="POST" 
                  encType="multipart/form-data"
                  className="space-y-6"
                >
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_subject" value="New Contact Form Submission from Neokisan Website" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_next" value="/contact?success=true" />

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
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
                      Email *
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
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white/50 backdrop-blur-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white/50 backdrop-blur-sm"
                    >
                      <option value="">Select a subject</option>
                      <option value="product-inquiry">Product Inquiry</option>
                      <option value="demo-request">Demo Request</option>
                      <option value="partnership">Partnership</option>
                      <option value="investment">Investment</option>
                      <option value="media">Media Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white/50 backdrop-blur-sm"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold py-3 px-6 rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all shadow-lg hover:shadow-xl"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
