"use client";
import { useState } from "react";
import Image from "next/image";
import { ProductType } from "./types";
import { Thumbnails } from "./Thumbnails";
import { ProductButton } from "./ProductButton";
import { PRODUCT_DATA } from "./data";



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

  return (
    <section className="flex flex-col gap-10 py-[60px] md:py-[80px] lg:flex-row">
      <div className="flex max-w-full flex-col-reverse items-start gap-6 md:flex-row">
        <Thumbnails data={thumbnails} onSelect={onSelect} />
        <div className="relative aspect-square w-full md:h-[500px]">
          <Image
            src={selectedImage}
            alt={selectedVariant.title}
            fill
            className="object-cover px-[40px]"
            sizes="(max-width: 768px) 100vw, 500px"
          />
        </div>
      </div>

      <div className="w-full min-w-0">
        <div className="md:mt-[24px] md:mb-[32px]">
          <h2 className="text-title-size mb-[12px]">{selectedVariant.title}</h2>
          <p className="text-small-size mb-[24px] text-(--color-text-gray)">
            ${selectedVariant.price.toFixed(2)}
          </p>
        </div>

        <div className="mb-[24px] flex flex-row md:flex-shrink-0">
          {PRODUCT_DATA.map((el) => (
            <button
              onClick={() => handleShoes(el)}
              key={el.id}
              className="relative mr-[8px] h-[88px] w-[88px] last:mr-0 md:mb-[32px]"
            >
              <Image
                src={el.src}
                fill
                sizes="88px"
                alt={`Nike shoes ${el.title}`}
                className="object-cover"
              />
            </button>
          ))}
        </div>

        <div>
          <p className="mb-[12px] text-[14px]">Select Size: {selectedSize}</p>
          <ProductButton
            selectedVariant={selectedVariant}
            onSelectSize={onSelectSize}
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
        <p className="text-[14px] text-(--color-text-gray)">
          Let your attitude have the edge in your Nike Air Max Plus, a Tuned Air
          experience that offers premium stability and unbelievable cushioning.
        </p>
      </div>
    </section>
  );
};

export default ProductSpotlight;
