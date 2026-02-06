export default function WatchPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-purple-900 mb-6">
            Watch Christebob
          </h1>
          <p className="text-xl text-gray-700 mb-12">
            Sneak peeks, behind-the-scenes footage, and coming soon—the full series!
          </p>
        </div>
      </section>

      {/* Featured Video */}
      <section className="py-8 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-purple-900 mb-6">
              🎬 Sneak Peek: Christebob Goes Fishing
            </h2>
            
            {/* VIDEO PLACEHOLDER - Replace with your YouTube embed */}
            <div className="aspect-video bg-gradient-to-br from-purple-200 to-blue-200 rounded-lg mb-6 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🎥</div>
                <p className="text-2xl font-bold text-purple-900">Video Coming Soon!</p>
                <p className="text-gray-600 mt-2">
                  Upload your video to YouTube and paste the embed code here
                </p>
              </div>
            </div>
            
            {/* WHEN YOU HAVE YOUR YOUTUBE VIDEO, UNCOMMENT THIS AND ADD YOUR VIDEO ID:
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE" 
                title="Christebob Goes Fishing Sneak Peek" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            */}
            
            <p className="text-lg text-gray-700 mt-4">
              Watch as Christebob learns about patience, fishing, and what happens when your brain wants to do seventeen things at once!
            </p>
          </div>
        </div>
      </section>

      {/* More Videos Grid */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">
            Behind the Scenes
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Video Card 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-4xl mb-2">🎨</div>
                  <p className="font-bold text-purple-900">Character Design</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-purple-900 mb-2">
                  Creating Christebob
                </h3>
                <p className="text-gray-600">
                  Coming Soon: See how we brought our lovable bear to life!
                </p>
              </div>
            </div>

            {/* Video Card 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-blue-200 to-purple-200 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-4xl mb-2">📚</div>
                  <p className="font-bold text-purple-900">Story Time</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-purple-900 mb-2">
                  Read-Along
                </h3>
                <p className="text-gray-600">
                  Coming Soon: Listen to Christebob Goes Fishing narrated by the author!
                </p>
              </div>
            </div>

            {/* Video Card 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-pink-200 to-blue-200 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-4xl mb-2">📺</div>
                  <p className="font-bold text-purple-900">Series Teaser</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-purple-900 mb-2">
                  52-Episode Series
                </h3>
                <p className="text-gray-600">
                  Coming January 2026: Get a first look at the animated series!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Banner */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">📺 Full Series Coming January 2026</h2>
          <p className="text-xl mb-8">
            52 episodes of Christebob's adventures are on the way. Sign up to be notified when we launch!
          </p>
          <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-xl font-bold hover:bg-purple-100 transition-all transform hover:scale-105">
            Get Launch Updates
          </button>
        </div>
      </section>
    </div>
  );
}
