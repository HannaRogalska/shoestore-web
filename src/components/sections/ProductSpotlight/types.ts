export interface ProductType {
  id: string;
  title: string;
  src: string;
  color: string;
  price: number;
  thumbnails: string[];
  size: number[];
}

export type ThumbnailsProps = {
  data: string[];
  onSelect: (src: string) => void;
  selectedImage: string;
};
export type ButtonProps = {
  selectedVariant: ProductType;
  onSelectSize: (el: number) => void;
  selectedSize: number;
};
