import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-100 to-blue-200">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-blue-900">404</h1>
        <h2 className="mb-8 text-2xl text-blue-800">Page Not Found</h2>
        <p className="mb-8 text-blue-700">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <Link
          href="/"
          className="rounded bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-700"
        >
          Back Home
        </Link>
      </div>
    </div>
  );
}
