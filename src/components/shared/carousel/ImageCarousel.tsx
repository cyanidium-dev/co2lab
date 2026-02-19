"use client";

import Image from "next/image";
import * as motion from "motion/react-client";

import type { StaticImageData } from "next/image";

export type CarouselImage = {
  src: StaticImageData | string;
  alt?: string;
};

const slideInTransition = {
  duration: 1.2,
  ease: [0.33, 0, 0.2, 1] as const,
};

const viewport = { once: true, margin: "-50px" };

const cardPositionClasses = [
  "carousel-right-card",
  "carousel-center-card",
  "carousel-left-card",
] as const;

type ImageCarouselProps = {
  images: CarouselImage[];
};

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const cards = images.slice(0, 3).map((img, idx) => ({
    id: idx,
    image: img,
    className: cardPositionClasses[idx],
  }));

  return (
    <div className="relative w-full min-w-0 flex-1 h-[193px] lg:h-[252px] overflow-hidden">
      <div className="carousel-card-stack w-full h-full min-h-[193px] lg:min-h-[252px]">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`carousel-card-item ${card.className} w-full h-full rounded-[12px] overflow-hidden shadow-[inset_0_0_60px_rgba(0,0,0,0.2)]`}
          >
            <Image
              src={card.image.src}
              alt={card.image.alt ?? ""}
              fill
              {...(typeof card.image.src === "object" &&
              "blurDataURL" in card.image.src
                ? { placeholder: "blur" as const }
                : {})}
              className="object-cover"
              sizes="(max-width: 1024px) 80vw, 564px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
