"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react"; 

const Header = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  let timeoutId: NodeJS.Timeout;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setIsAboutOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setIsAboutOpen(false);
    }, 300);
  };

  return (
    <header className="bg-[#f7f7f7] px-4 md:px-6 py-4">
      <div className="flex items-center justify-between">
        <Link href="/">
          <Image
            src="/logo/sahynex.svg"
            alt="Sahynex Logo"
            width={160}
            height={50}
            className="h-auto w-auto"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-[#0e1f51] hover:text-[#EB505A] font-medium transition-colors">
            Home
          </Link>

          <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <button
              className="text-[#0e1f51] hover:text-[#EB505A] font-medium flex items-center transition-colors"
              onClick={() => setIsAboutOpen(!isAboutOpen)}
            >
              About Us
              <svg
                className={`ml-1 h-4 w-4 transition-transform ${isAboutOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isAboutOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                <Link
                  href="/About"
                  className="block px-4 py-2 text-sm text-[#0e1f51] hover:bg-[#f7f7f7] hover:text-[#EB505A] font-medium"
                >
                  About Us
                </Link>
                <Link
                  href="/Team"
                  className="block px-4 py-2 text-sm text-[#0e1f51] hover:bg-[#f7f7f7] hover:text-[#EB505A] font-medium"
                >
                  Our Team
                </Link>
                <Link
                  href="/Clients"
                  className="block px-4 py-2 text-sm text-[#0e1f51] hover:bg-[#f7f7f7] hover:text-[#EB505A] font-medium"
                >
                  Our Clients
                </Link>
              </div>
            )}
          </div>

          <Link href="/Services" className="text-[#0e1f51] hover:text-[#EB505A] font-medium transition-colors">
            Our Services
          </Link>
          <Link href="/Career" className="text-[#0e1f51] hover:text-[#EB505A] font-medium transition-colors">
            Career
          </Link>
          <Link href="/Contact" className="text-[#0e1f51] hover:text-[#EB505A] font-medium transition-colors">
            Contact
          </Link>

          <Link href="/Contact">
            <button className="bg-[#EB505A] hover:bg-[#d83a4f] text-white px-4 py-2 rounded-md font-medium ml-4 transition-colors">
              Get In Touch
            </button>
          </Link>
        </nav>

        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="mt-4 space-y-4 md:hidden">
          <Link href="/" className="block text-[#0e1f51] hover:text-[#EB505A] font-medium">
            Home
          </Link>

          <div>
            <details className="group">
              <summary className="text-[#0e1f51] hover:text-[#EB505A] font-medium cursor-pointer">
                About Us
              </summary>
              <div className="pl-4 mt-2 space-y-2">
                <Link href="/About" className="block text-sm text-[#0e1f51] hover:text-[#EB505A]">
                  About Us
                </Link>
                <Link href="/Team" className="block text-sm text-[#0e1f51] hover:text-[#EB505A]">
                  Our Team
                </Link>
                <Link href="/Clients" className="block text-sm text-[#0e1f51] hover:text-[#EB505A]">
                  Our Clients
                </Link>
              </div>
            </details>
          </div>

          <Link href="/Services" className="block text-[#0e1f51] hover:text-[#EB505A] font-medium">
            Our Services
          </Link>
          <Link href="/Career" className="block text-[#0e1f51] hover:text-[#EB505A] font-medium">
            Career
          </Link>
          <Link href="/Contact" className="block text-[#0e1f51] hover:text-[#EB505A] font-medium">
            Contact
          </Link>

          <Link href="/Contact">
            <button className="w-full bg-[#EB505A] hover:bg-[#d83a4f] text-white px-4 py-2 rounded-md font-medium">
              Get In Touch
            </button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
