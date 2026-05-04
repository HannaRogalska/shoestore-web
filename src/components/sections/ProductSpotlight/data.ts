import { ProductType } from "./types";

export const PRODUCT_DATA: ProductType[] = [
  {
    id: "1",
    title: "Nike Air Max Plus",
    color: "Pink",
    price: 280,
    src: "/images/productSpotlight/pink_air.png",
    thumbnails: [
      "/images/productSpotlight/pink_air.png",
      "/images/productSpotlight/pink_air_detail_1.png",
      "/images/productSpotlight/pink_air_detail_2.png",
      "/images/productSpotlight/pink_air_detail_3.png",
      "/images/productSpotlight/pink_air_detail_4.png",
    ],
    size: [38, 39, 40, 41, 42, 43],
  },
  {
    id: "2",
    title: "Nike Air Max Plus",
    color: "Black",
    price: 280,
    src: "/images/productSpotlight/black_air.png",
    thumbnails: [
      "/images/productSpotlight/black_air.png",
    ],
    size: [38, 39, 40, 41, 42, 43],
  },
  {
    id: "3",
    title: "Nike Air Max Plus",
    color: "White",
    price: 280,
    src: "/images/productSpotlight/white_air.png",
    thumbnails: [
      "/images/productSpotlight/white_air.png",
    ],
    size: [38, 39, 40, 41, 42, 43],
  },
];