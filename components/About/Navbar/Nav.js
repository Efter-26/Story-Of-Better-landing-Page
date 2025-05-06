'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-gradient-to-b from-white to-gray-100 shadow-md">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <div className="flex-shrink-0">
            <Link href="/">
              <Image 
                src="/images/logo.png"
                alt="Better E-Mart Logo"
                width={140}
                height={50}
                className="object-contain"
              />
            </Link>
          </div>

          <div className="hidden md:flex space-x-8 text-lg text-gray-700 font-bold">
            <Link href="/" className="hover:text-green-500">Better E-Mart</Link>
            <Link href="/founders" className="hover:text-green-500">Founders</Link>
            <Link href="/contact" className="hover:text-green-500">Contact Us</Link>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* This for Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-4 mt-4 text-lg text-gray-700 font-bold">
            <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-green-500">Better E-Mart</Link>
            <Link href="/founders" onClick={() => setIsOpen(false)} className="hover:text-green-500">Founders</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-green-500">Contact Us</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
