"use client";

import Image from "next/image";
import { ThumbnailsProps } from "./types";

export const Thumbnails = ({ data, onSelect }: ThumbnailsProps) => {
  return (
    <div className="flex flex-row gap-3 md:flex-col">
      {data.map((el, index) => (
        <button
          key={index}
          onClick={() => onSelect(el)}
          className="relative h-[88px] w-[88px] overflow-hidden"
          type="button"
        >
          <Image
            src={el}
            alt={`thumbnail ${index + 1}`}
            fill
            className="object-cover"
            sizes="88px"
          />
        </button>
      ))}
    </div>
  );
};
