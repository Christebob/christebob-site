'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-100 to-blue-200">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-blue-900">Oops!</h1>
        <h2 className="mb-8 text-2xl text-blue-800">Something went wrong</h2>
        <p className="mb-8 text-blue-700">
          We're sorry, but something unexpected happened.
        </p>
        <button
          onClick={reset}
          className="rounded bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-700"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
