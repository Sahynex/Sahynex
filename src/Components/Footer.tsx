"use client";

import React from "react";
import Link from "next/link";
import {
  Linkedin,
  Instagram,
  Facebook,
  Twitter,
  Atom,
  Globe,
  Code,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0d1440] text-white py-16 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
        <div>
          <p className="mb-4 leading-relaxed text-gray-300">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at
          </p>
          <div className="flex gap-4 mt-6">
            <SocialIcon
              href="https://www.linkedin.com/company/sahynex/"
              icon={<Linkedin className="w-5 h-5" />}
            />
            <SocialIcon
              href="https://instagram.com"
              icon={<Instagram className="w-5 h-5" />}
            />
            <SocialIcon
              href="https://facebook.com"
              icon={<Facebook className="w-5 h-5" />}
            />
            <SocialIcon
              href="https://twitter.com"
              icon={<Twitter className="w-5 h-5" />}
            />
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-1">Services</h4>
          <div className="w-10 h-1 bg-red-500 mb-4 rounded"></div>
          <ul className="text-gray-300 space-y-2">
            <li>Web Design/Development</li>
            <li>App Development</li>
            <li>UI/UX Design</li>
            <li>HubSpot Integration</li>
            <li>Digital Marketing</li>
            <li>Website Migration</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-1">Career</h4>
          <div className="w-10 h-1 bg-red-500 mb-4 rounded"></div>
          <div className="space-y-4">
            <CareerItem
              href="https://reactjs.org"
              icon={<Atom className="w-5 h-5" />}
              title="ReactJs Dev. Intern"
            />
            <CareerItem
              href="https://wordpress.org"
              icon={<Globe className="w-5 h-5" />}
              title="Wordpress Dev. Intern"
            />

            <CareerItem
              href="https://www.python.org"
              icon={<Code className="w-5 h-5" />}
              title="Python Developer Intern"
            />
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-1">Subscribe Us</h4>
          <div className="w-10 h-1 bg-red-500 mb-4 rounded"></div>
          <p className="text-gray-300 mb-4 leading-relaxed">
            It is a long established fact that a reader will be distracted by
            the readable
          </p>
          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-2 rounded-md text-black bg-white focus:outline-none"
            />
            <button
              type="submit"
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}

const SocialIcon = ({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white text-red-500 p-2 rounded-md hover:bg-red-100 transition"
  >
    {icon}
  </Link>
);

const CareerItem = ({
  href,
  icon,
  title,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
}) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 group hover:opacity-90 transition"
  >
    <div className="bg-white text-red-500 p-2 w-10 h-10 rounded-md flex items-center justify-center">
      {icon}
    </div>
    <p className="text-red-500 font-medium group-hover:underline">{title}</p>
  </Link>
);
