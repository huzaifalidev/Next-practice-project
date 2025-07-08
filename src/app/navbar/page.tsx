'use client';

import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="flex justify-evenly bg-gray-500 p-4 text-white">
      <Link href="/" className="mx-4">Home</Link>
      <Link href="/about" className="mx-4">About</Link>
      <Link href="/contact" className="mx-4">Contact</Link>
    </nav>
  );
}
