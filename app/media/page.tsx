export default function MediaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      {/* Hero */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-purple-900 mb-6">
            Media & Downloads
          </h1>
          <p className="text-xl text-gray-700">
            Images, press materials, and resources for fans, educators, and media
          </p>
        </div>
      </section>

      {/* Featured Book */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-purple-900 mb-8">
            📚 The Book
          </h2>
          <div className="bg-white rounded-xl shadow-2xl p-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="aspect-[3/4] bg-gradient-to-br from-purple-200 to-blue-200 rounded-lg flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4">📖</div>
                    <p className="text-2xl font-bold text-purple-900">
                      Christebob Goes Fishing
                    </p>
                    <p className="text-gray-600 mt-2">Cover Coming Soon</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-purple-900 mb-4">
                  Christebob Goes Fishing
                </h3>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  A 40-page picture book about a magnificently scatterbrained teddy bear who learns that his "whirly, super-fast brain" isn't a problem—it's a gift.
                </p>
                <ul className="space-y-3 text-gray-700 mb-6">
                  <li className="flex items-start">
                    <span className="text-xl mr-3">✨</span>
                    <span>Perfect for ages 4-8</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl mr-3">❤️</span>
                    <span>Celebrates ADHD as a superpower</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl mr-3">📚</span>
                    <span>Hardcover, full-color illustrations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl mr-3">🎯</span>
                    <span>Available 2026</span>
                  </li>
                </ul>
                <button className="bg-purple-600 text-white px-6 py-3 rounded-full font-bold hover:bg-purple-700 transition-all">
                  Pre-order Coming Soon
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Character Images */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-purple-900 mb-8">
            🎨 Character Gallery
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Image 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src="/images/christebob-hero.jpg" 
                alt="Christebob" 
                className="w-full aspect-square object-cover"
              />
              <div className="p-4">
                <p className="text-center font-semibold text-purple-900">
                  Christebob the Bear
                </p>
              </div>
            </div>

            {/* Image 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src="/images/christebob-friend.jpg" 
                alt="Christebob and friend" 
                className="w-full aspect-square object-cover"
              />
              <div className="p-4">
                <p className="text-center font-semibold text-purple-900">
                  Christebob & Friend
                </p>
              </div>
            </div>

            {/* Image 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src="/images/christebob-river.jpg" 
                alt="Christebob at the river" 
                className="w-full aspect-square object-cover"
              />
              <div className="p-4">
                <p className="text-center font-semibold text-purple-900">
                  By the River
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Press Kit */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-purple-900 mb-8">
            📰 For Media & Educators
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Press Kit */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-2xl font-bold text-purple-900 mb-3">
                Press Kit
              </h3>
              <p className="text-gray-700 mb-6">
                High-resolution images, logos, fact sheets, and interview requests.
              </p>
              <button className="bg-purple-600 text-white px-6 py-3 rounded-full font-bold hover:bg-purple-700 transition-all">
                Download Press Kit
              </button>
            </div>

            {/* Educator Resources */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-4xl mb-4">🏫</div>
              <h3 className="text-2xl font-bold text-purple-900 mb-3">
                Educator Resources
              </h3>
              <p className="text-gray-700 mb-6">
                Lesson plans, discussion guides, and classroom activities.
              </p>
              <button className="bg-purple-600 text-white px-6 py-3 rounded-full font-bold hover:bg-purple-700 transition-all">
                Coming Soon
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-8 px-4 mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">
            📥 Downloads
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <ul className="space-y-4">
              <li className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                <div className="flex items-center">
                  <span className="text-2xl mr-4">📄</span>
                  <div>
                    <p className="font-bold text-purple-900">Christebob Character Sheet</p>
                    <p className="text-sm text-gray-600">PDF · 2.4 MB</p>
                  </div>
                </div>
                <button className="text-purple-600 font-bold hover:underline">
                  Download
                </button>
              </li>
              
              <li className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                <div className="flex items-center">
                  <span className="text-2xl mr-4">🎨</span>
                  <div>
                    <p className="font-bold text-purple-900">Coloring Pages</p>
                    <p className="text-sm text-gray-600">PDF · 1.8 MB</p>
                  </div>
                </div>
                <button className="text-purple-600 font-bold hover:underline">
                  Coming Soon
                </button>
              </li>
              
              <li className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                <div className="flex items-center">
                  <span className="text-2xl mr-4">🖼️</span>
                  <div>
                    <p className="font-bold text-purple-900">Wallpapers Pack</p>
                    <p className="text-sm text-gray-600">ZIP · 12.5 MB</p>
                  </div>
                </div>
                <button className="text-purple-600 font-bold hover:underline">
                  Coming Soon
                </button>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
