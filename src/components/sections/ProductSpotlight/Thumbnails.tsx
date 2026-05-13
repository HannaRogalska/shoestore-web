"use client";

import Image from "next/image";
import { ThumbnailsProps } from "./types";

export const Thumbnails = ({ data, onSelect, selectedImage }: ThumbnailsProps) => {
  return (
    <div className="scrollbar-hide grid w-full grid-flow-col gap-[15px] overflow-x-auto md:w-22 md:grid-flow-row md:grid-cols-1">
      {data.map((el, index) => {
        const isActive = el === selectedImage;
        return (
          <button
            key={index}
            onClick={() => onSelect(el)}
            className={`relative h-22 w-22 cursor-pointer rounded-[8px] md:w-auto ${
              isActive ? "btn-ui border-2" : ""
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
