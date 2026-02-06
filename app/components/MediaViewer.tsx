'use client';
import { useState, useRef } from 'react';
import { Upload, Link, FileText, Video } from 'lucide-react';
import PowerPointViewer from './PowerPointViewer';
import VideoPlayer from './VideoPlayer';

type MediaType = 'none' | 'pdf' | 'video';

interface MediaItem {
  type: MediaType;
  content: string | File;
  title?: string;
}

export default function MediaViewer() {
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);
  const [activeTab, setActiveTab] = useState<number>(0);
  const [videoUrl, setVideoUrl] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (
        file.type === 'application/pdf' ||
        file.name.toLowerCase().endsWith('.pdf')
      ) {
        const newMediaItem: MediaItem = {
          type: 'pdf',
          content: file,
          title: file.name,
        };
        setMediaItems((prev) => [...prev, newMediaItem]);
        setActiveTab(mediaItems.length);
      } else {
        alert(
          'Please upload a PDF file. PowerPoint files need to be converted to PDF first.'
        );
      }
    }
  };

  const handleVideoUrlAdd = () => {
    if (videoUrl.trim()) {
      // Check if it's a valid YouTube URL or other supported video URL
      if (
        videoUrl.includes('youtube.com') ||
        videoUrl.includes('youtu.be') ||
        videoUrl.includes('.mp4')
      ) {
        const newMediaItem: MediaItem = {
          type: 'video',
          content: videoUrl.trim(),
          title: `Video ${mediaItems.filter((item) => item.type === 'video').length + 1}`,
        };
        setMediaItems((prev) => [...prev, newMediaItem]);
        setActiveTab(mediaItems.length);
        setVideoUrl('');
      } else {
        alert('Please enter a valid YouTube URL or direct video link (.mp4)');
      }
    }
  };

  const removeMediaItem = (index: number) => {
    setMediaItems((prev) => prev.filter((_, i) => i !== index));
    if (activeTab >= mediaItems.length - 1) {
      setActiveTab(Math.max(0, mediaItems.length - 2));
    }
  };

  return (
    <div className="mx-auto w-full max-w-6xl p-6">
      <div className="overflow-hidden rounded-lg bg-white shadow-lg">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
          <h2 className="mb-4 text-2xl font-bold">📚 Media Viewer</h2>
          <p className="text-blue-100">
            Upload PowerPoint presentations (as PDF) and add YouTube videos
          </p>
        </div>

        {/* Upload Controls */}
        <div className="border-b border-gray-200 bg-gray-50 p-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* File Upload */}
            <div className="space-y-3">
              <label className="block text-sm font-medium text-gray-700">
                <FileText className="mr-1 inline h-4 w-4" />
                Upload PDF (PowerPoint converted to PDF)
              </label>
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf"
                onChange={handleFileUpload}
                className="hidden"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="flex w-full items-center justify-center rounded-lg border-2 border-dashed border-blue-300 px-4 py-3 text-blue-600 transition-colors hover:border-blue-400 hover:text-blue-700"
              >
                <Upload className="mr-2 h-5 w-5" />
                Choose PDF File
              </button>
            </div>

            {/* Video URL Input */}
            <div className="space-y-3">
              <label className="block text-sm font-medium text-gray-700">
                <Video className="mr-1 inline h-4 w-4" />
                Add Video URL (YouTube or .mp4)
              </label>
              <div className="flex space-x-2">
                <input
                  type="url"
                  value={videoUrl}
                  onChange={(e) => setVideoUrl(e.target.value)}
                  placeholder="https://youtube.com/watch?v=... or direct .mp4 link"
                  className="flex-1 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={handleVideoUrlAdd}
                  disabled={!videoUrl.trim()}
                  className="rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-300"
                >
                  <Link className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Media Tabs */}
        {mediaItems.length > 0 && (
          <div className="border-b border-gray-200">
            <div className="flex flex-wrap px-6">
              {mediaItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`border-b-2 px-4 py-3 text-sm font-medium transition-colors ${
                    activeTab === index
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-600 hover:border-gray-300 hover:text-gray-900'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    {item.type === 'pdf' ? (
                      <FileText className="h-4 w-4" />
                    ) : (
                      <Video className="h-4 w-4" />
                    )}
                    <span>{item.title}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        removeMediaItem(index);
                      }}
                      className="ml-2 text-red-500 hover:text-red-700"
                    >
                      ×
                    </button>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Media Content */}
        <div className="p-6">
          {mediaItems.length === 0 ? (
            <div className="py-12 text-center text-gray-500">
              <div className="mb-4 text-6xl">📱</div>
              <h3 className="mb-2 text-xl font-medium">
                No media uploaded yet
              </h3>
              <p>Upload a PDF or add a video URL to get started</p>
            </div>
          ) : (
            <div className="space-y-6">
              {mediaItems[activeTab]?.type === 'pdf' && (
                <PowerPointViewer
                  file={mediaItems[activeTab].content as File}
                  className="w-full"
                />
              )}
              {mediaItems[activeTab]?.type === 'video' && (
                <VideoPlayer
                  url={mediaItems[activeTab].content as string}
                  className="w-full"
                  controls={true}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
