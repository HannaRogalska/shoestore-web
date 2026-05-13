import { ButtonProps } from "./types";


export const ProductButton = ({
  selectedVariant,
  onSelectSize,
  selectedSize,
}: ButtonProps) => {
  return (
    <div className="mb-8 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-3">
      {selectedVariant.size.map((el, index) => {
        const isActive = el === selectedSize;
        return (
          <button
            type="button"
            onClick={() => onSelectSize(el)}
            key={index}
            className={`${isActive ? "btn-ui border-foreground cursor-pointer" : ""} btn-ui border-stroke h-[52px] w-full cursor-pointer transition-colors hover:border-[#111111]`}
          >
            EU {el}
          </button>
        );
      })}
    </div>
  );
};


