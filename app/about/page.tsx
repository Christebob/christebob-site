export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-purple-900 mb-6">
                Meet Christebob
              </h1>
              <p className="text-xl text-gray-700 mb-4 leading-relaxed">
                Christopher-Theodore-Robert-Bear—Christebob for short—has a brain that fizzles and pops with brilliant ideas.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                He's magnificently scatterbrained, wonderfully creative, and totally normal. Just like millions of kids (and grown-ups!) with ADHD, Christebob sees the world in a special, beautiful way.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/images/christebob-hero.jpg" 
                alt="Christebob the bear"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-purple-900 mb-8">Our Mission</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-gradient-to-br from-purple-100 to-blue-100 p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-purple-800 mb-3">✨ Celebrate Neurodiversity</h3>
              <p className="text-gray-700">
                ADHD isn't a deficit—it's an abundance of creativity, energy, and brilliant ideas. We're here to help kids see their differences as superpowers.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-purple-800 mb-3">🤗 End the Stigma</h3>
              <p className="text-gray-700">
                Every child deserves to feel understood and accepted. Through Christebob's adventures, we're rewriting the narrative around ADHD.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-purple-800 mb-3">❤️ You're Not Alone</h3>
              <p className="text-gray-700">
                Millions of families navigate ADHD every day. Christebob is a friend who understands—a character kids and parents can see themselves in.
              </p>
            </div>
            <div className="bg-gradient-to-br from-pink-100 to-purple-100 p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-purple-800 mb-3">🚀 Build Resilience</h3>
              <p className="text-gray-700">
                Learning to "drive your brain" takes practice. Christebob shows kids that it's okay to struggle, ask for help, and become the best version of yourself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Story Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-purple-900 mb-8 text-center">The Story</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              In our debut picture book, <strong>Christebob Goes Fishing</strong>, our lovable bear learns an important lesson about patience, focus, and accepting himself just as he is.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              After too many trips to the principal's office for things that felt... helpful (redesigning the school flag during math class, anyone?), Christebob discovers he has a "wonderful, whirly, super-fast brain." It's a gift—but like all gifts, it comes with responsibilities.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              With the help of Mama Bear and Dr. Trombone, Christebob learns that his only choice is to try. To become the driver of his own brain. To be the best version of himself.
            </p>
            <div className="bg-purple-100 border-l-4 border-purple-600 p-6 rounded-r-lg">
              <p className="text-xl font-semibold text-purple-900 italic">
                "Your only alternative is to keep doing what you've been doing. We will always be your pit crew."
              </p>
              <p className="text-gray-600 mt-2">— Mama Bear</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Series Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-purple-100 to-blue-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-purple-900 mb-8 text-center">Coming in 2026</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-purple-800 mb-4">📺 The Animated Series</h3>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Get ready for <strong>52 episodes</strong> of Christebob's adventures! Launching January 2026, the series will follow Christebob and his friends as they navigate school, friendship, and all the ups and downs of having a brain that works a little differently.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-2xl mr-3">🎨</span>
                  <span>Vibrant animation that brings Christebob's world to life</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">🧠</span>
                  <span>Educational content woven into every story</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">💙</span>
                  <span>Heart, humor, and real talk about ADHD</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img 
                src="/images/christebob-friend.jpg" 
                alt="Christebob and friend"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Creator Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-purple-900 mb-6">About the Creator</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            <strong>Chris Coyne</strong> is an entrepreneur, storyteller, and parent of neurodivergent children. After years of watching his kids navigate a world not always built for their brilliant, busy brains, Chris created Christebob—a character who celebrates ADHD as a superpower, not a setback.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Through Christebob Creative LLC, Chris is building a universe of books, shows, and resources that help families understand, accept, and thrive with ADHD.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Join Christebob's Adventures</h2>
          <p className="text-xl mb-8">
            Be the first to know about new books, show updates, and behind-the-scenes content.
          </p>
          <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-xl font-bold hover:bg-purple-100 transition-all transform hover:scale-105">
            Sign Up for Updates
          </button>
        </div>
      </section>
    </div>
  );
}
