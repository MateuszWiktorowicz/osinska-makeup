import { iconMap } from "@/assets/icons";
import { Image } from "../image/image";

type IconKey = keyof typeof iconMap;

export interface Service {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: IconKey;
}

export interface ServiceVariant extends Service {
  image: Image;
  price: number;
  promotionPrice: number;
  time: number;
}
