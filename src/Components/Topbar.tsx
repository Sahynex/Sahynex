'use client';

import Link from 'next/link';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { IoGlobeOutline } from 'react-icons/io5';

const TopBar = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#5C7FE0] via-[#745087] to-[#ff0000] text-white text-xs sm:text-sm px-4 sm:px-6 py-2">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
        <div className="text-center sm:text-left">
          Email:{' '}
          <Link href="mailto:sahynexsolutions@gmail.com" className=" hover:text-yellow-300">
            sahynexsolutions@gmail.com
          </Link>
        </div>

        <div className="flex items-center flex-wrap justify-center gap-3">
          <Link
            href="https://instagram.com"
            target="_blank"
            className="hover:text-yellow-400"
          >
            <FaInstagram size={14} />
          </Link>
          <Link
            href="https://facebook.com"
            target="_blank"
            className="hover:text-yellow-400"
          >
            <FaFacebookF size={14} />
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            className="hover:text-yellow-400"
          >
            <FaTwitter size={14} />
          </Link>

          <Link
            href="#"
            className="flex items-center gap-1 border border-white rounded-full px-3 py-1 hover:bg-white hover:text-black transition text-xs"
          >
            <IoGlobeOutline size={14} />
            <span>English</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
