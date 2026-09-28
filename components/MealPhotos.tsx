import Image from "next/image";
import { cn } from "@/lib/utils";

export const mealPhotos = {
  jollof: { src: "/images/meals/jollof-rice.jpg", alt: "Jollof rice with fried plantain and grilled chicken" },
  egusi: { src: "/images/meals/egusi-soup.jpg", alt: "Egusi soup with assorted meat" },
  efoRice: { src: "/images/meals/rice-efo-riro.jpg", alt: "White rice served with efo riro" },
  ofada: { src: "/images/meals/ofada-stew.jpg", alt: "Ofada stew with assorted meat" },
  eba: { src: "/images/meals/eba-native-soup.jpg", alt: "Eba served with a rich native soup", position: "object-[center_22%]" },
  poundedYam: { src: "/images/meals/pounded-yam-fish-soup.jpg", alt: "Pounded yam with fish vegetable soup" },
  fishStew: { src: "/images/meals/fish-stew.jpg", alt: "Fish in red pepper stew" },
  chickenStew: { src: "/images/meals/rice-chicken-stew.jpg", alt: "White rice with chicken and vegetable stew" },
  eggAvocado: { src: "/images/meals/egg-avocado-salad.jpg", alt: "Boiled egg and avocado salad" },
  fruit: { src: "/images/meals/fruit-bowl.jpg", alt: "Fruit bowl of banana, pineapple, green apple, mango and coconut", position: "object-[center_70%]" },
} as const;

export type MealPhotoKey = keyof typeof mealPhotos;

export function MealPhoto({ type }: { type: MealPhotoKey }) {
  const photo: { src: string; alt: string; position?: string } = mealPhotos[type];
  return (
    <div className="relative aspect-[4/3] overflow-hidden bg-alternate">
      <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 640px) 82vw, 340px" className={cn("object-cover transition-transform duration-500 group-hover:scale-105", photo.position)} />
    </div>
  );
}
