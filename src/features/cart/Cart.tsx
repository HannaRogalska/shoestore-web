import { ShoesType } from "./types";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const shoes: ShoesType[] = [
  {
    id: "1",
    src: "/images/cart/shoes-1.png",
    alt: "Red sneakers",
    title: "Nike Streakfly 2",
    price: 300,
  },
  {
    id: "2",
    src: "/images/cart/shoes-2.png",
    alt: "White sneakers with a black Swoosh",
    title: "Nike Pegasus Premium",
    price: 350,
  },
  {
    id: "3",
    src: "/images/cart/shoes-3.png",
    alt: "Black sneakers with a white Swoosh",
    title: "Nike Pegasus 41",
    price: 280,
  },
  {
    id: "4",
    src: "/images/cart/shoes-4.png",
    alt: "White sneakers",
    title: "Nike Revolution 7",
    price: 440,
  },
];
export const Cart = () => {
  return (
    <Carousel className="w-full" opts={{ loop: false, align: "start" }}>
      <CarouselContent className="-ml-1">
        {shoes.map((el) => (
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
              <div className="text-[#737373]">${el.price}</div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-5 hidden translate-x-0 md:flex md:disabled:hidden" />
      <CarouselNext className="right-5 hidden translate-x-0 md:flex md:disabled:hidden" />
    </Carousel>
  );
};
