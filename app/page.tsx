'use client';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-blue-900 mb-8 tracking-wide">
          Christebob
        </h1>
        
        <div className="relative w-96 h-96 mx-auto mb-8">
          <Image
            src="/fisherbear.jpg"
            alt="Christebob the Bear"
            fill
            className="object-cover rounded-full shadow-2xl"
            priority
          />
        </div>
        
        <p className="text-2xl text-blue-800 font-medium">
          Stories for Creative Minds
        </p>
      </div>
    </main>
  );
}Claude Code: Start New Chat
Claude Code: Start New Chat

