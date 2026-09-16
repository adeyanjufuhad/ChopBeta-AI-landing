import Image from "next/image";

const mealImages = {
  jollof: { src: "/images/meal-jollof.png", alt: "Illustrated bowl of Nigerian jollof rice with fried plantain" },
  efo: { src: "/images/meal-efo-amala.png", alt: "Illustrated plate of efo riro with amala" },
  moi: { src: "/images/meal-moi-akara.png", alt: "Illustrated plate of moi moi with akara" },
  beans: { src: "/images/meal-beans-plantain.png", alt: "Illustrated Nigerian beans with fried plantain" },
  pepper: { src: "/images/meal-pepper-soup.png", alt: "Illustrated bowl of Nigerian pepper soup" },
} as const;

export function MealIllustration({ type }: { type: keyof typeof mealImages }) {
  const image = mealImages[type];
  return (
    <div className="relative aspect-[3/2] overflow-hidden bg-alternate">
      <Image src={image.src} alt={image.alt} fill sizes="(max-width: 640px) 82vw, 320px" className="object-cover" />
    </div>
  );
}
