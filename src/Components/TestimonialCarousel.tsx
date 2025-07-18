"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

interface Testimonial {
  name: string;
  title: string;
  image: string;
  message: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Samual Karl",
    title: "CEO",
    image: "/testimonials/user1.svg",
    message:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    name: "Heggade Vahini",
    title: "CEO",
    image: "/testimonials/user2.svg",
    message:
      "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using content here.",
  },
  {
    name: "Shreek’s Blogs",
    title: "CEO",
    image: "/testimonials/user3.svg",
    message:
      "Using Lorem Ipsum allows designers to focus on layout and design elements, making it easier to visualize the final product.",
  },
];

export default function TestimonialCarousel() {
  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-10">
        <p className="text-red-500 font-semibold">\\ From our Customers \\</p>
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
          Testimonials
        </h2>
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        pagination={{ clickable: true }}
        className="max-w-5xl mx-auto px-4"
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1.5 },
          1024: { slidesPerView: 2 },
        }}
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index} className="h-full">
            <div className="bg-gray-50 rounded-lg shadow-md p-6 mx-2 h-full flex flex-col justify-between transition-all duration-300">
              <div className="flex justify-items-start mb-4">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />
              </div>

              <p className="text-sm text-gray-700 mb-4 text-center">
                {t.message}
              </p>

              <div className="text-left mt-4">
                <p className="text-sm font-semibold text-pink-600">{t.name}</p>
                <p className="text-xs text-gray-500">{t.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
