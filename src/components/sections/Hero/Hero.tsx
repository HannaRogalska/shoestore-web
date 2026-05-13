"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { HeroButton } from "./HeroButton";
import { HeroContent } from "./HeroContent";
import Image from "next/image";
import { SLIDE_DATA } from "./data";
import { Container } from "../../Container";

export const Hero = () => {
  if (!SLIDE_DATA || SLIDE_DATA.length === 0) return null;

  return (
    <div className="relative h-150 w-full md:h-190">
      <div className="relative z-10 h-full">
        <Container>
          <HeroContent />
          <HeroButton />
        </Container>
      </div>
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
          className="h-full w-full"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {SLIDE_DATA.map((slide, index) => (
            <SwiperSlide key={slide.id} className="relative h-full w-full">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover object-[40%_80%]"
                priority={index === 0}
                sizes="100vw"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
