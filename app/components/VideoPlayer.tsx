'use client';
import { useState } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface VideoPlayerProps {
  url: string;
  className?: string;
  autoplay?: boolean;
  controls?: boolean;
}

export default function VideoPlayer({
  url,
  className = '',
  autoplay = false,
  controls = true,
}: VideoPlayerProps) {
  const [error, setError] = useState<string | null>(null);

  // Check if it's a YouTube URL and convert to embed format
  const getEmbedUrl = (url: string) => {
    try {
      const youtubeRegex = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/;
      const match = url.match(youtubeRegex);
      if (match) {
        return `https://www.youtube.com/embed/${match[1]}${autoplay ? '?autoplay=1' : ''}`;
      }
      // For direct video URLs or other sources, return as is
      return url;
    } catch (e) {
      setError('Invalid video URL');
      return url;
    }
  };

  const embedUrl = getEmbedUrl(url);
  const isYoutube = url.includes('youtube.com') || url.includes('youtu.be');
  const isDirectVideo =
    url.includes('.mp4') || url.includes('.webm') || url.includes('.ogg');

  if (error) {
    return (
      <div
        className={`rounded-lg border border-red-200 bg-red-50 p-6 text-center ${className}`}
      >
        <p className="mb-2 text-red-600">⚠️ Error Loading Video</p>
        <p className="text-sm text-red-500">{error}</p>
        <p className="mt-2 text-xs text-gray-500">URL: {url}</p>
      </div>
    );
  }

  return (
    <div
      className={`overflow-hidden rounded-lg bg-black shadow-lg ${className}`}
    >
      <div className="relative aspect-video">
        {isYoutube ? (
          <iframe
            src={embedUrl}
            width="100%"
            height="100%"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
            title="YouTube Video"
          />
        ) : isDirectVideo ? (
          <video
            src={url}
            controls={controls}
            autoPlay={autoplay}
            className="absolute inset-0 h-full w-full object-contain"
            onError={() =>
              setError(
                'Failed to load video. Please check if the URL is valid.'
              )
            }
          >
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-800 text-white">
            <div className="text-center">
              <p className="mb-2">🎬 Unsupported Video Format</p>
              <p className="text-sm text-gray-300">
                Please provide a YouTube URL or direct .mp4 link
              </p>
              <p className="mt-2 break-all text-xs text-gray-400">URL: {url}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
