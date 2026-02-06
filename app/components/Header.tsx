'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/hello', label: 'Hello' },
    { href: '/watch', label: 'Watch Video' },
    { href: '/media', label: 'Media Center' },
  ];

  return (
    <header className="bg-white shadow-sm">
      <nav className="mx-auto max-w-4xl px-4 py-4">
        <div className="flex space-x-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`hover:text-blue-600 ${pathname === href ? 'font-medium text-blue-600' : 'text-gray-600'}`}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
