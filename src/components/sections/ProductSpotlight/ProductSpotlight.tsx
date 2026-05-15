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
  if (!PRODUCT_DATA || PRODUCT_DATA.length === 0) return null;
  const firstVariant = PRODUCT_DATA[0];

  const [selectedVariant, setSelectedVariant] =
    useState<ProductType>(firstVariant);
  const [selectedImage, setSelectedImage] = useState<string>(firstVariant.src);
  const [selectedSize, setSelectedSize] = useState<number>(
    firstVariant.size[0]
  );

  const thumbnails = selectedVariant.thumbnails || [];

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
    <section>
      <Container>
        <div className="flex flex-col gap-10 px-4 py-15 md:flex-row md:px-0 md:py-20">
          <div className="flex max-w-full flex-col-reverse items-start gap-6 md:flex-row">
            <Thumbnails
              data={thumbnails}
              onSelect={onSelect}
              selectedImage={selectedImage}
            />
            <div className="relative aspect-square w-full md:h-125">
              <Image
                src={selectedImage}
                alt={selectedVariant.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 500px"
              />
              <div className="absolute top-4 left-4 z-10 flex flex-row items-center bg-white p-2">
                <Star className="fill-foreground mr-1 h-[10px] w-[10px]" />
                <p className="rounded-lg text-sm">Highly Rated</p>
              </div>
            </div>
          </div>

          <div className="w-full min-w-0">
            <div>
              <h2 className="mb-3 text-3xl">{selectedVariant.title}</h2>
              <p className="text-text-gray mb-6">
                ${selectedVariant.price.toFixed(2)}
              </p>
            </div>

            <div className="mb-6 flex flex-row md:shrink-0">
              {PRODUCT_DATA.map((el) => {
                const isActive = selectedVariant.id === el.id;
                return (
                  <button
                    onClick={() => handleShoes(el)}
                    key={el.id}
                    className={`relative mr-4 h-22 w-22 cursor-pointer overflow-hidden rounded-[8px] last:mr-0 ${
                      isActive ? "border-foreground rounded-[8px] border-2" : ""
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
              <p className="mb-3 text-sm">Select Size: {selectedSize}</p>
              <ProductButton
                selectedVariant={selectedVariant}
                onSelectSize={onSelectSize}
                selectedSize={selectedSize}
              />
            </div>

            <div>
              <button
                type="button"
                className="btn-ui bg-foreground hover:bg-text-gray mb-8 h-14 w-full cursor-pointer text-white"
              >
                Add To Bag
              </button>
            </div>
            <p className="text-text-gray text-sm">
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
