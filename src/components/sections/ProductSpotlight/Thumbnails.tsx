import Image from "next/image";
import { ThumbnailsProps } from "./types";


export const Thumbnails = ({ data }: ThumbnailsProps) => {
  return (
    <div className="md:mr-[24px] md:flex md:flex-col">
      {data.length > 0 &&
        data.map((el, index) => (
          <div
            key={`${el}-${index}`}
            className="relative mb-[24px] h-[88px] w-[88px] last:mb-0"
          >
            <Image
              src={el}
              fill
              alt="Nike shoes"
              className="object-cover md:mb-[24px] md:last:mb-0"
              sizes="88px"
            />
          </div>
        ))}
    </div>
  );
};
