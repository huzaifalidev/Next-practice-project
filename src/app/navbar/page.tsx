'use client';

import Link from "next/link";
import { useAppSelector } from "@/store/hooks";
export default function Navbar() {
  const counterValue = useAppSelector((state) => state.counter.value);
  return (
    <nav className="flex justify-evenly bg-gray-500 p-4 text-white">
      <Link href="/" className="mx-4">Home</Link>
      <Link href="/about" className="mx-4">About</Link>
      <Link href="/contact" className="mx-4">Contact counter: {counterValue}</Link>
    </nav>
  );
}
