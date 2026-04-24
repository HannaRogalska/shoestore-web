"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// import "swiper/swiper.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Slide } from "./types";
import { HeroButton } from "./HeroButton";
import { HeroContent } from "./HeroContent";
import Image from "next/image";

const slides: Slide[] = [
  { id: 1, alt: "Banner", src: "/images/hero/hero-banner.jpg" },
  { id: 2, alt: "Air max", src: "/images/hero/air_max.jpg" },
  { id: 3, alt: "Just do it", src: "/images/hero/shoes.jpg" },
];

export const Hero = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
    >
      {slides.map((slide) => (
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
