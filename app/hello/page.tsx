export const metadata = {
  title: 'Hello from Christebob! | Contact & Say Hi',
  description: 'Say hello to Christebob! Get in touch, share your story, or just say hi. We love hearing from families navigating ADHD together.',
}

export default function HelloPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">👋</div>
          <h1 className="text-5xl font-bold text-purple-900 mb-6">
            Hello from Christebob!
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            We love hearing from families, educators, and ADHD advocates. Drop us a line!
          </p>
        </div>
      </section>

      {/* Quick Connect */}
      <section className="py-8 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Email */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-shadow">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-2xl font-bold text-purple-900 mb-3">
                Email Us
              </h3>
              <p className="text-gray-600 mb-4">
                Got a question? Want to share your story?
              </p>
              <a 
                href="mailto:chriscoynetalent@gmail.com?subject=Hello%20from%20Christebob.com"
                className="text-purple-600 font-bold hover:underline"
              >
                chriscoynetalent@gmail.com
              </a>
            </div>

            {/* Social */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-shadow">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-2xl font-bold text-purple-900 mb-3">
                Follow Us
              </h3>
              <p className="text-gray-600 mb-4">
                Behind-the-scenes, updates & community
              </p>
              <div className="space-y-2">
                <div className="text-purple-600 font-bold">@ChristebobBear</div>
                <div className="text-sm text-gray-500">(Coming soon!)</div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-shadow">
              <div className="text-4xl mb-4">✉️</div>
              <h3 className="text-2xl font-bold text-purple-900 mb-3">
                Newsletter
              </h3>
              <p className="text-gray-600 mb-4">
                Get updates, free resources & exclusive content
              </p>
              <button className="bg-purple-600 text-white px-6 py-3 rounded-full font-bold hover:bg-purple-700 transition-all">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch Form (Simple Contact) */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-2xl p-8">
            <h2 className="text-3xl font-bold text-purple-900 mb-6 text-center">
              Send Us a Message
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Questions about the book or series? Want to partner with us? Just want to say hi? We'd love to hear from you!
            </p>
            
            <form className="space-y-6" action="mailto:chriscoynetalent@gmail.com" method="post" encType="text/plain">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Christopher-Theodore-Robert..."
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option>General Inquiry</option>
                  <option>Book Pre-Order Question</option>
                  <option>Series Information</option>
                  <option>Educator Resources</option>
                  <option>Partnership Opportunity</option>
                  <option>Press/Media Inquiry</option>
                  <option>Just Saying Hi!</option>
                  <option>Share My ADHD Story</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Tell us what's on your mind..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 text-white px-8 py-4 rounded-full text-xl font-bold hover:bg-purple-700 transition-all transform hover:scale-105"
              >
                Send Message
              </button>
            </form>

            <p className="text-sm text-gray-500 text-center mt-6">
              We typically respond within 24-48 hours. 💜
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-100 to-blue-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">
            Partnership Opportunities
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">📚 Educators</h3>
              <p className="text-gray-700 mb-4">
                Interested in using Christebob in your classroom? We offer free lesson plans, discussion guides, and bulk book discounts.
              </p>
              <a href="mailto:chriscoynetalent@gmail.com?subject=Educator%20Partnership" className="text-purple-600 font-bold hover:underline">
                Get in Touch →
              </a>
            </div>

            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">🎬 Media</h3>
              <p className="text-gray-700 mb-4">
                Press inquiries, interviews, and media kits. We'd love to share Christebob's story with your audience.
              </p>
              <a href="mailto:chriscoynetalent@gmail.com?subject=Media%20Inquiry" className="text-purple-600 font-bold hover:underline">
                Press Kit →
              </a>
            </div>

            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">🤝 Partners</h3>
              <p className="text-gray-700 mb-4">
                ADHD organizations, advocacy groups, and content creators: let's collaborate to reach more families.
              </p>
              <a href="mailto:chriscoynetalent@gmail.com?subject=Partnership%20Opportunity" className="text-purple-600 font-bold hover:underline">
                Let's Talk →
              </a>
            </div>

            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">🏢 Licensing</h3>
              <p className="text-gray-700 mb-4">
                Interested in Christebob merchandise, adaptations, or distribution? We're exploring all opportunities.
              </p>
              <a href="mailto:chriscoynetalent@gmail.com?subject=Licensing%20Inquiry" className="text-purple-600 font-bold hover:underline">
                Licensing Info →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Hits */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">
            Quick Questions
          </h2>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-6 shadow">
              <h3 className="font-bold text-purple-900 mb-2">When does the book come out?</h3>
              <p className="text-gray-700">
                "Christebob Goes Fishing" is coming in 2026! Sign up for our newsletter to be notified when pre-orders open.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow">
              <h3 className="font-bold text-purple-900 mb-2">Where can I watch the series?</h3>
              <p className="text-gray-700">
                The 52-episode animated series launches January 2026. Platform details coming soon—sign up for updates!
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow">
              <h3 className="font-bold text-purple-900 mb-2">Are there resources for teachers?</h3>
              <p className="text-gray-700">
                Yes! Visit our <a href="/media" className="text-purple-600 font-bold hover:underline">Media page</a> for free lesson plans, discussion guides, and classroom activities.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow">
              <h3 className="font-bold text-purple-900 mb-2">Can I share my ADHD story?</h3>
              <p className="text-gray-700">
                Absolutely! We love hearing from families. Use the contact form above or email us directly. Your story matters. 💜
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Thanks for Stopping By!</h2>
          <p className="text-xl mb-8">
            Whether you're here for the first time or the hundredth, we're glad you're part of the Christebob family.
          </p>
          <p className="text-2xl font-bold">
            💜 You're not alone. We're in this together.
          </p>
        </div>
      </section>
    </div>
  );
}
