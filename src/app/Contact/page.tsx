"use client";

import { FC } from "react";
import Link from "next/link";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

const ContactForm: FC = () => {
  return (
    <section className="bg-gradient-to-br from-[#2C2F7D] to-[#431344] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#EB505A] text-sm font-semibold tracking-wider">
            \ Get In Touch \
          </p>
          <h2 className="text-white text-3xl sm:text-4xl font-bold mt-2">
            Hey! Let's Talk
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-gradient-to-br from-[#ebeefa] to-[#F8E2E6] rounded-lg p-6 sm:p-8 shadow-lg border border-white/20">
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 rounded-md bg-gray-100 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#EB505A] transition "
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded-md bg-gray-100 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#EB505A] transition"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full p-3 rounded-md bg-gray-100 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#EB505A] transition"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 rounded-md bg-gray-100 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#EB505A] transition resize-none"
              />
              <button
                type="submit"
                className="bg-[#EB505A] hover:bg-[#e03e4b] transition-colors text-white font-semibold px-6 py-3 rounded-md w-full"
              >
                Send Now
              </button>
            </form>
          </div>

          <div className="bg-[#fde1e6] backdrop-blur-md rounded-lg p-6 sm:p-8 shadow-lg border border-white/20 text-[#322a56] space-y-8 w-86">
            <div className="flex items-start">
              <div className="mt-1 mr-4">
                <FiPhone size={20} className="text-[#EB505A]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#EB505A]">
                  Call Anytime
                </h3>
                <p className=" text-[#322a56]">+91 23678447867</p>
                <p className=" text-[#322a56]">+91 67477473984</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="mt-1 mr-4">
                <FiMail size={20} className="text-[#EB505A]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#EB505A]">
                  Send Email
                </h3>
                <p className=" text-[#322a56]">connect@sahynex.com</p>
                <p className=" text-[#322a56]">hello@sahynex.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="mt-1 mr-4">
                <FiMapPin size={20} className="text-[#EB505A]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#EB505A]">
                  Visit Us
                </h3>
                <p className=" text-[#322a56]">5th floor Sahyadri campus</p>
                <p className=" text-[#322a56]">Adyar Mangaluru</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#322a56]">
                Follow us
              </h3>
              <div className="flex space-x-4">
                <Link href="https://www.linkedin.com/company/sahynex/" target="_blank">
                  <div className="p-2 bg-[#EB505A] rounded-md text-white hover:bg-[#e03e4b] cursor-pointer">
                    <FaLinkedinIn size={20} />
                  </div>
                </Link>
                <Link href="https://instagram.com" target="_blank">
                  <div className="p-2 bg-[#EB505A] rounded-md text-white hover:bg-[#e03e4b] cursor-pointer">
                    <FaInstagram size={20} />
                  </div>
                </Link>
                <Link href="https://facebook.com" target="_blank">
                  <div className="p-2 bg-[#EB505A] rounded-md text-white hover:bg-[#e03e4b] cursor-pointer">
                    <FaFacebookF size={20} />
                  </div>
                </Link>
                <Link href="https://twitter.com" target="_blank">
                  <div className="p-2 bg-[#EB505A] rounded-md text-white hover:bg-[#e03e4b] cursor-pointer">
                    <FaTwitter size={20} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
