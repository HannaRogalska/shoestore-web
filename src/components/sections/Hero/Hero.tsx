"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { HeroButton } from "./HeroButton";
import { HeroContent } from "./HeroContent";
import Image from "next/image";
import { SLIDE_DATA } from "./data";



export const Hero = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      slidesPerView={1}
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
    >
      {SLIDE_DATA.map((slide) => (
        <SwiperSlide key={slide.id}>
          {
            <div className="relative h-[600px] w-full md:h-[750px]">
              <HeroContent />
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover object-[40%_80%]"
                priority={slide.id === 1}
              />
              <HeroButton />
            </div>
          }
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
