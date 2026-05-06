"use client";

import Image from "next/image";
import { ThumbnailsProps } from "./types";

export const Thumbnails = ({ data, onSelect, selectedImage }: ThumbnailsProps) => {
  return (
    <div className="scrollbar-hide flex w-full flex-row gap-2 overflow-x-auto md:grid md:h-[500px] md:w-[88px] md:flex-shrink-0 md:auto-rows-min md:grid-cols-1 md:gap-[8px] md:overflow-hidden">
      {data.map((el, index) => {
        const isActive = el === selectedImage;
        return (
          <button
            key={index}
            onClick={() => onSelect(el)}
            className={`relative h-[88px] w-[88px] flex-shrink-0 overflow-hidden rounded-[8px] ${
              isActive
                ? "rounded-[8px] border border-[2px] border-[#111111]"
                : ""
            }`}
            type="button"
          >
            <Image
              src={el}
              alt={`thumbnail ${index + 1}`}
              fill
              className="rounded-[8px] object-cover"
              sizes="88px"
            />
          </button>
        );
      })}
    </div>
  );
};
