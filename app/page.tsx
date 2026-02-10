'use client';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="text-center md:text-left">
            <h1 className="text-7xl md:text-8xl font-bold text-blue-900 mb-6 tracking-wide">
              Christebob
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">
              The Magnificently Scatterbrained Bear
            </h2>
            <p className="text-xl md:text-2xl text-blue-700 mb-8 leading-relaxed">
              Your child's High Definition (HD) thinking isn't broken.
              <br />
              <strong>It's perfectly designed for a world where AI thinks the same way.</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transition-all transform hover:scale-105">
                Join the Adventure
              </button>
              <button className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-4 px-8 rounded-full text-lg shadow-lg border-2 border-blue-600 transition-all transform hover:scale-105">
                Pre-Order the Book
              </button>
            </div>
          </div>
          
          {/* Right Column - Hero Image */}
          <div className="relative w-full h-96 md:h-[500px]">
            <Image
              src="/images/christebob-hero.jpg"
              alt="Christebob the magnificently scatterbrained bear"
              fill
              className="object-cover rounded-3xl shadow-2xl"
              priority
            />
          </div>
        </div>
        
        {/* Value Props */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl text-center">
            <div className="text-5xl mb-4">✨</div>
            <h3 className="text-2xl font-bold text-blue-900 mb-3">Celebrate HD Thinking</h3>
            <p className="text-blue-700">
              Pattern recognition. Parallel processing. Creative problem-solving. Your child's HD mind is a competitive advantage.
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl text-center">
            <div className="text-5xl mb-4">🤗</div>
            <h3 className="text-2xl font-bold text-blue-900 mb-3">No More "Broken" Narrative</h3>
            <p className="text-blue-700">
              Your brain is perfectly designed for the future. Not a disorder to fix—a different operating system to master.
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl text-center">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-blue-900 mb-3">Built by HD Thinker</h3>
            <p className="text-blue-700">
              Created by someone who spent 40 years believing he was defective—until AI showed him the truth.
            </p>
          </div>
        </div>
        
        {/* Launch Info */}
        <div className="mt-20 bg-blue-800 text-white rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Coming January 2027</h3>
          <p className="text-xl md:text-2xl mb-6">
            📚 Picture book: "Christebob Goes Fishing"<br />
            🎬 52-episode animated series
          </p>
          <p className="text-lg text-blue-200">
            Created for the 7-15 million HD thinking children who have ZERO major franchises representing them.
          </p>
        </div>
      </div>
    </main>
  );
  }

