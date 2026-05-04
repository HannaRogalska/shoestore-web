import { ButtonProps } from "./types";


export const ProductButton = ({
  selectedVariant,
  onSelectSize,
  selectedSize,
}: ButtonProps) => {
  return (
    <div className="mb-[32px] grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-3">
      {selectedVariant.size.map((el, index) => {
        const isActive = el === selectedSize;
        return (
          <button
            type="button"
            onClick={() => onSelectSize(el)}
            key={index}
            className={`${isActive ? "rounded-[8px] border border-[#111111]" : ""} btn-ui h-[52px] w-full transition-colors hover:border-[#111111]`}
          >
            UE {el}
          </button>
        );
      })}
    </div>
  );
};


