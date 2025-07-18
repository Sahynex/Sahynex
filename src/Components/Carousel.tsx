'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';

const Carousel = () => {
  return (
    <div className="w-full h-[300px] sm:h-[400px] md:h-[100vh] relative">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image
              src="/images/slide1.jpg"
              alt="Slide 1"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
              priority
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-start">
              <div className="px-4 sm:px-8 md:px-12 max-w-md sm:max-w-lg text-white space-y-2">
                <p className="text-yellow-400 text-sm font-medium">IT Solutions</p>
                <h1 className="text-lg sm:text-3xl md:text-5xl font-bold leading-snug sm:leading-tight">
                  Professional IT <br className="hidden sm:block" />
                  Services for Business
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image
              src="/images/slide1.jpg"
              alt="Slide 2"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-start">
              <div className="px-4 sm:px-8 md:px-12 max-w-md sm:max-w-lg text-white space-y-2">
                <p className="text-yellow-400 text-sm font-medium">IT Solutions</p>
                <h1 className="text-lg sm:text-3xl md:text-5xl font-bold leading-snug sm:leading-tight">
                  Marketing Solutions
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
