"use client";
import { useState } from "react";
import Image from "next/image";
import { ProductType } from "./types";
import { Thumbnails } from "./Thumbnails";
import { ProductButton } from "./ProductButton";
import { PRODUCT_DATA } from "./data";
import { Star } from "lucide-react";
import { Container } from "../../Container";



const ProductSpotlight = () => {

  const [selectedVariant, setSelectedVariant] = useState(PRODUCT_DATA[0]);
  const [selectedImage, setSelectedImage] = useState(PRODUCT_DATA[0].src);
  const [selectedSize, setSelectedSize] = useState(PRODUCT_DATA[0].size[0]);

  const thumbnails = selectedVariant.thumbnails;

  const handleShoes = (el: ProductType) => {
    setSelectedVariant(el);
    setSelectedImage(el.src);
    setSelectedSize(el.size[0]);
  };

  const onSelect = (el: string) => {
    setSelectedImage(el);
  };

  const onSelectSize = (el: number) => {
    setSelectedSize(el);
  };
   if (!PRODUCT_DATA || PRODUCT_DATA.length === 0) {
     return null;
   }

  return (
    <section>
      <Container>
        <div className="flex flex-col gap-10 px-[16px] py-[60px] md:flex-row md:px-0 md:py-[80px]">
          <div className="flex max-w-full flex-col-reverse items-start gap-6 md:flex-row">
            <Thumbnails
              data={thumbnails}
              onSelect={onSelect}
              selectedImage={selectedImage}
            />
            <div className="relative aspect-square w-full md:h-[500px]">
              <Image
                src={selectedImage}
                alt={selectedVariant.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 500px"
              />
              <div className="absolute top-[16px] left-[16px] z-10 flex flex-row items-center bg-[#FFFFFF] p-[8px]">
                <Star className="mr-[4px] h-[10px] w-[10px] fill-[#111111]" />
                <p className="text-[14px]/[20px] rounded-[4px]">Highly Rated</p>
              </div>
            </div>
          </div>

          <div className="w-full min-w-0">
            <div>
              <h2 className="text-title-size mb-[12px]">
                {selectedVariant.title}
              </h2>
              <p className="text-small-size mb-[24px] text-(--color-text-gray)">
                ${selectedVariant.price.toFixed(2)}
              </p>
            </div>

            <div className="mb-[24px] flex flex-row md:flex-shrink-0">
              {PRODUCT_DATA.map((el) => {
                const isActive = selectedVariant.id === el.id;
                return (
                  <button
                    onClick={() => handleShoes(el)}
                    key={el.id}
                    className={`relative mr-[16px] h-[88px] w-[88px] flex-shrink-0 overflow-hidden rounded-[8px] last:mr-0 ${
                      isActive
                        ? "rounded-[8px] border border-[2px] border-[#111111]"
                        : ""
                    }`}
                  >
                    <Image
                      src={el.src}
                      fill
                      sizes="88px"
                      alt={`Nike shoes ${el.title}`}
                      className="object-cover"
                    />
                  </button>
                );
              })}
            </div>

            <div>
              <p className="mb-[12px] text-[14px]">
                Select Size: {selectedSize}
              </p>
              <ProductButton
                selectedVariant={selectedVariant}
                onSelectSize={onSelectSize}
                selectedSize={selectedSize}
              />
            </div>

            <div>
              <button
                type="button"
                className="btn-ui mb-[32px] h-[56px] w-full bg-[#111111] text-[#FFFFFF]"
              >
                Add To Bag
              </button>
            </div>
            <p className="text-[14px] text-(--color-text-gray) ">
              Let your attitude have the edge in your Nike Air Max Plus, a Tuned
              Air experience that offers premium stability and unbelievable
              cushioning.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProductSpotlight;
