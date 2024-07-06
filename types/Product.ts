// types/Product.ts
import { StaticImageData } from "next/image";

export interface Product {
  id: number;
  image: StaticImageData | string;
  title: string;
  discount: boolean;
  price: string;
  soldOut: boolean;
  buttonText: string;
  slashedPrice?: string;
}
