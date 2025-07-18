'use client';

import Image from 'next/image';
import Link from 'next/link';

const ConnectFooter = () => {
  return (
    <div className="relative w-full h-[300px]">
      <div className="absolute inset-0">
        <Image
          src="/images/connect-Footer.jpg" 
          alt="Connect Banner"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800/70 via-purple-600/50 to-red-600/80 z-10"></div>
      </div>

      <div className="relative z-20 h-full flex justify-between items-center px-10 text-white">
        <div>
          <h2 className="text-2xl font-bold text-yellow-300">
            Connect with a Sahynex representative!
          </h2>
          <p className="mt-2 text-sm">
            Got any quarries? Want to know more about our services? <br />
            <Link href="/Contact" className="text-white font-bold ">
              Contact us now!
            </Link>
          </p>
        </div>

        <Link href="/Contact">
          <button className="bg-white text-red-500 font-semibold px-4 py-2 rounded shadow hover:bg-red-100 transition">
            Get In Touch
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ConnectFooter;
