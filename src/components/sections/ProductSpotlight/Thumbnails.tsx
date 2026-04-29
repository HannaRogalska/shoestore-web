import Image from "next/image";
import { ThumbnailsProps } from "./types";


export const Thumbnails = ({ data, onSelect }: ThumbnailsProps) => {
  return (
    <div className="flex md:flex-col">
      {data.length > 0 &&
        data.map((el, index) => (
          <button
            type="button"
            onClick={() => onSelect(el)}
            key={`${el}-${index}`}
            className="md:w-[88px] mr-[16px] md:mb-[24px]"
          >
            <img
              src={el}
              alt={`thumbnail ${index + 1}`}
              className="object-cover"
            />
          </button>
        ))}
    </div>
  );
};
