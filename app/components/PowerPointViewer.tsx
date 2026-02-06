'use client';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import react-pdf components to avoid SSR issues
const Document = dynamic(
  () => import('react-pdf').then((mod) => mod.Document),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-96 animate-pulse items-center justify-center rounded-lg bg-gray-200">
        Loading PDF viewer...
      </div>
    ),
  }
);

const Page = dynamic(() => import('react-pdf').then((mod) => mod.Page), {
  ssr: false,
});

// Set up PDF.js worker - using CDN fallback
if (typeof window !== 'undefined') {
  import('react-pdf').then(({ pdfjs }) => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
  });
}

interface PowerPointViewerProps {
  file: string | File;
  className?: string;
}

export default function PowerPointViewer({
  file,
  className = '',
}: PowerPointViewerProps) {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
    setIsLoading(false);
    setError(null);
  }

  function onDocumentLoadError(error: Error): void {
    setError(
      'Failed to load document. Please check if the file is a valid PDF.'
    );
    setIsLoading(false);
    console.error('Error loading document:', error);
  }

  const goToPrevPage = () => {
    setPageNumber((prev) => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setPageNumber((prev) => Math.min(prev + 1, numPages || 1));
  };

  if (error) {
    return (
      <div
        className={`rounded-lg border border-red-200 bg-red-50 p-6 text-center ${className}`}
      >
        <p className="mb-2 text-red-600">⚠️ Error Loading Document</p>
        <p className="text-sm text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div
      className={`overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg ${className}`}
    >
      {isLoading && (
        <div className="flex items-center justify-center p-8">
          <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-blue-600"></div>
          <span className="ml-2 text-gray-600">Loading document...</span>
        </div>
      )}

      <div className="flex flex-col items-center">
        <Document
          file={file}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onDocumentLoadError}
          loading={null}
          className="max-w-full"
        >
          <Page
            pageNumber={pageNumber}
            className="max-w-full"
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>

        {numPages && (
          <div className="flex w-full items-center justify-between border-t border-gray-200 bg-gray-50 px-6 py-4">
            <button
              onClick={goToPrevPage}
              disabled={pageNumber <= 1}
              className="rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-300"
            >
              Previous
            </button>

            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">
                Page{' '}
                <input
                  type="number"
                  min={1}
                  max={numPages}
                  value={pageNumber}
                  onChange={(e) => {
                    const page = parseInt(e.target.value);
                    if (page >= 1 && page <= numPages) {
                      setPageNumber(page);
                    }
                  }}
                  className="w-16 rounded border border-gray-300 px-2 py-1 text-center"
                />{' '}
                of {numPages}
              </span>
            </div>

            <button
              onClick={goToNextPage}
              disabled={pageNumber >= numPages}
              className="rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-300"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
