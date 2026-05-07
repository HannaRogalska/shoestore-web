import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SHOES_DATA } from "./data";

export const Cart = () => {
  if (!SHOES_DATA || SHOES_DATA.length === 0) {
    return null;
  }
  return (
    <Carousel className="w-full" opts={{ loop: false, align: "start" }}>
      <CarouselContent>
        {SHOES_DATA.map((el) => (
          <CarouselItem
            key={el.id}
            className="min-w-0 basis-[50%] md:basis-1/3"
          >
            <div className="flex flex-col">
              <Image
                src={el.src}
                width={312}
                height={312}
                alt={el.alt}
                className="mb-[16px] h-auto w-full rounded-xl"
              />
              <h3 className="text-[16px]">{el.title}</h3>
              <div className="text-[text-gray]">${el.price.toFixed(2)}</div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-[-10] hidden translate-x-0 md:flex md:disabled:hidden" />
      <CarouselNext className="right-[-10] hidden translate-x-0 md:flex md:disabled:hidden" />
    </Carousel>
  );
};
