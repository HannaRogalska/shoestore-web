"use client";
import { useState } from "react";
import Image from "next/image";
import { ProductType } from "./types";
import { Thumbnails } from "./Thumbnails";
import { ProductButton } from "./ProductButton";

const productData: ProductType[] = [
  {
    id: "1",
    title: "Nike Air Max Plus",
    color: "Pink",
    price: 280,
    src: "/images/productSpotlight/pink_air.png",
    thumbnails: [
      "/images/productSpotlight/pink_air.png",
      "/images/productSpotlight/pink_air_detail_1.png",
      "/images/productSpotlight/pink_air_detail_2.png",
      "/images/productSpotlight/pink_air_detail_3.png",
      "/images/productSpotlight/pink_air_detail_4.png",
    ],
    size: [38, 39, 40, 41, 42, 43],
  },
  {
    id: "2",
    title: "Nike Air Max Plus",
    color: "Black",
    price: 280,
    src: "/images/productSpotlight/black_air.png",
    thumbnails: [
      "/images/productSpotlight/black_air.png",
      "/images/productSpotlight/black_air.png",
      "/images/productSpotlight/black_air.png",
      "/images/productSpotlight/black_air.png",
      "/images/productSpotlight/black_air.png",
    ],
    size: [38, 39, 40, 41, 42, 43],
  },
  {
    id: "3",
    title: "Nike Air Max Plus",
    color: "White",
    price: 280,
    src: "/images/productSpotlight/white_air.png",
    thumbnails: [
      "/images/productSpotlight/white_air.png",
      "/images/productSpotlight/white_air.png",
      "/images/productSpotlight/white_air.png",
      "/images/productSpotlight/white_air.png",
      "/images/productSpotlight/white_air.png",
    ],
    size: [38, 39, 40, 41, 42, 43],
  },
];

const ProductSpotlight = () => {
  const [selectedVariant, setSelectedVariant] = useState(productData[0]);
  const [selectedImage, setSelectedImage] = useState(productData[0].src);
  const [selectedSize, setSelectedSize] = useState(productData[0].size[0]);

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
    <section className="flex flex-col gap-10 py-[60px] lg:flex-row lg:py-[80px]">
      <div className="flex max-w-full flex-col-reverse items-start gap-6 md:flex-row">
        <Thumbnails data={thumbnails} onSelect={onSelect} />
        <div className="relative aspect-square w-full lg:h-[500px]">
          <Image
            src={selectedImage}
            alt={selectedVariant.title}
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="w-full min-w-0">
        <div className="mt-[24px] mb-[32px]">
          <h2 className="text-title-size">{selectedVariant.title}</h2>
          <p className="text-small-size text-(--color-text-gray)">
            ${selectedVariant.price.toFixed(2)}
          </p>
        </div>

        <div>
          {productData.map((el) => (
            <button
              onClick={() => handleShoes(el)}
              key={el.id}
              className="relative mr-[8px] mb-[32px] h-[88px] w-[88px] last:mr-0"
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
