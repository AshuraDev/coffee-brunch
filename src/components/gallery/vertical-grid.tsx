"use client";

import Image from "next/image";
import React from "react";

interface VerticalGridProps {
  images: string[];
  duration?: string;
}

export const VerticalGrid = ({ images, duration = "20s" }: VerticalGridProps) => {
  return (
    <div className="slider relative h-full overflow-hidden">
      <div
        className="slider-track flex flex-col gap-y-2"
        style={{ "--scroll-duration": duration } as React.CSSProperties}
      >
        {images.concat(images).map((image, i) => (
          <div
            key={i}
            className="slider-item relative rounded-lg h-36 md:h-44 aspect-square overflow-hidden"
          >
            <Image
              src={image}
              alt="gallery"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
