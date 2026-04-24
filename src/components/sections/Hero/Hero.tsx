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

const slides: Slide[] = [
  { id: 1, alt: "Banner", href: "/images/hero/hero-banner.jpg" },
  { id: 2, alt: "Air max", href: "/images/hero/air_max.jpg" },
  { id: 3, alt: "Just do it", href: "/images/hero/shoes.jpg" },
];

export const Hero = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      // autoplay={{
      //   delay: 3000,
      //   disableOnInteraction: false,
      // }}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          {
            <div className="relative">
             <HeroContent/>

              <img
                src={slide.href}
                alt={slide.alt}
                className="h-150 w-full object-cover object-[40%_80%] lg:h-187.5 lg:w-360 lg:object-[40%_80%]"
              />
              <HeroButton />
            </div>
          }
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
