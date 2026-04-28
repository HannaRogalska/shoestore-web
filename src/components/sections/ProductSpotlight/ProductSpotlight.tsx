"use client";
import { useState } from "react";
import Image from "next/image";
import { ProductType } from "./types";
import { Thumbnails } from "./Thumbnails";

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
    thumbnails: [],
    size: [38, 39, 40, 41, 42, 43],
  },
  {
    id: "3",
    title: "Nike Air Max Plus",
    color: "White",
    price: 280,
    src: "/images/productSpotlight/white_air.png",
    thumbnails: [],
    size: [38, 39, 40, 41, 42, 43],
  },
];

const ProductSpotlight = () => {
  const [selectedVariant, setSelectedVariant] = useState(productData[0]);
  const [selectedSize, setSelectedSize] = useState(selectedVariant.size[0]);
  const thumbnails = Object.values(selectedVariant.thumbnails);

  const handleShoes = (el: ProductType) => {
    setSelectedVariant(el);
  };

  return (
    <section className="flex md:flex-row md:px-[60px] md:py-[80px]">
      <div className="flex flex-row items-start md:mr-[60px]">
        <Thumbnails data={thumbnails} />
        <div className="relative h-[536px] w-[536px]">
          <Image
            key={selectedVariant.id}
            src={selectedVariant.src}
            fill
            sizes="536px"
            alt="Nike shoes"
            className="object-contain"
          />
        </div>
      </div>
      <div>
        <div>
          <h2 className="text-title-size md:mb-[12px]">
            {selectedVariant.title}
          </h2>
          <p className="text-small-size text-[#737373] md:mb-[32px]">
            ${selectedVariant.price.toFixed(2)}
          </p>
        </div>
        <div>
          {productData.map((el) => (
            <button onClick={() => handleShoes(el)} key={el.id}>
              <Image
                src={el.src}
                width={88}
                height={88}
                alt="Nike shoes"
                style={{ height: "auto", width: "auto" }}
              />
            </button>
          ))}
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
};

export default ProductSpotlight;
