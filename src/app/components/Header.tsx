'use server';

import Link from 'next/link';

export default async function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-white text-gray-700 shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="text-2xl font-bold text-blue-700">
          <Link href="/">Filter Car</Link>
        </div>

        <nav className="flex space-x-4">
          <Link href="/" className="hover:text-blue-700">
            Home
          </Link>
        </nav>
      </div>
    </header>
  );
}
