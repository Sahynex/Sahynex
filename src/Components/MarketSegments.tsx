"use client";

import Image from "next/image";
import React from "react";

const marketData = [
  {
    title: "Organizations Spiritual Centers",
    description:
      "We offer websites, digital invitations, and other creative services for organizations and spiritual centers making it easier to connect with their communities and share important moments.",
    icon: "/icons/temple-icon.svg",
    image: "/images/spiritual.jpg",
  },
  {
    title: "E-Newspapers Magazines",
    description:
      "We design and develop engaging platforms for e-magazines and e-newspapers, enabling easy content publishing, reader interaction and seamless digital distribution.",
    icon: "/icons/newspaper-icon.svg",
    image: "/images/news.jpg",
  },
  {
    title: "Education Institution Companies",
    description:
      "We build tailored websites and digital solutions for educational institutions and companies, including tools like attendance management, event registration and internal communication helping streamline operations and boost efficiency.",
    icon: "/icons/school-icon.svg",
    image: "/images/education.jpg",
  },
];

const MarketSegments = () => {
  return (
    <section className="py-12 px-6 md:px-16 bg-white flex flex-col justify-center">
      <div className="text-center mb-12">
       <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#150099] via-[#732C7B] to-[#FF3C5F] bg-clip-text text-transparent mb-3">
  Market Segments
</h3>

        <p className="max-w-2xl mx-auto text-gray-600 text-base md:text-lg">
          We tailor our solutions by understanding key customer groups based on
          behavior, needs and industry trends helping businesses connect better
          with their audience and drive growth.
        </p>
      </div>

      <div className="space-y-12">
        {marketData.map((segment, index) => (
          <div
            key={index}
            className="grid md:grid-cols-2 gap-8 items-center bg-gray-50 rounded-2xl p-6 shadow-sm"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-5">
                <Image
                  src={segment.icon}
                  alt="icon"
                  width={100}
                  height={100}
                  className="min-w-[80px]"
                />
                <h4 className="text-xl md:text-2xl font-semibold text-[#EB505A] leading-snug">
                  {segment.title.split(" ").slice(0, 2).join(" ")} <br />
                  {segment.title.split(" ").slice(2).join(" ")}
                </h4>
              </div>
              <p className="text-gray-700 text-base leading-relaxed pl-[100px]">
                {segment.description}
              </p>
            </div>

            <div className="relative w-full h-64 md:h-72 rounded-lg overflow-hidden">
              <Image
                src={segment.image}
                alt={segment.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MarketSegments;
