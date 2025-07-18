import Image from "next/image";
import React from "react";
import { Lightbulb, Target } from "lucide-react";
import Link from "next/link";

const Whatwedo = () => {
  return (
    <div>
      <section className="bg-[#f9f9f9] py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          <div className="rounded-2xl overflow-hidden shadow-lg h-full">
            <Image
              src="/images/what-we-do.jpg"
              alt="Developer at work"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="flex flex-col justify-between h-full">
            <div>
              <p className="text-red-500 font-semibold mb-3 text-[16px]">
                \ What We Do \
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-[#0e1f51] leading-tight mb-5">
                We Develop Product That <br />
                People Love to Use.
              </h2>

              <p className="text-gray-700 mb-4 max-w-xl text-[15.5px] leading-relaxed">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed, Lorem Ipsum is that
                it has a more-or-less normal distribution of letters, as opposed
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="bg-white p-5 rounded-xl shadow flex items-start gap-4">
                <div className="bg-red-100 p-2.5 rounded-full text-red-500">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-red-600 font-semibold text-base">
                    Our Vision
                  </h4>
                  <p className="text-sm text-gray-600">
                    It is a long established fact that
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow flex items-start gap-4">
                <div className="bg-red-100 p-2.5 rounded-full text-red-500">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-red-600 font-semibold text-base">
                    Our Goal
                  </h4>
                  <p className="text-sm text-gray-600">
                    It is a long established fact that
                  </p>
                </div>
              </div>
            </div>

            <div>
              <Link
                href="/About"
                className="text-sm font-semibold text-[#0e1f51] hover:text-[#EB505A] flex items-center gap-1"
              >
                <span>READ MORE</span>
                <span className="text-red-500 text-lg"></span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Whatwedo;
