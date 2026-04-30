import { ButtonProps } from "./types";


export const ProductButton = ({ selectedVariant, onSelectSize }: ButtonProps) => {
  return (
    <div className="mb-[32px] grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-3">
      {selectedVariant.size.map((el, index) => (
        <button
          type="button"
          onClick={() => onSelectSize(el)}
          key={index}
          className="btn-ui h-[52px] w-full transition-colors hover:border-[#111111]"
        >
          UE {el}
        </button>
      ))}
    </div>
  );
};


