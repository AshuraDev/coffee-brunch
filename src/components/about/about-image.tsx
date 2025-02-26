import Image from "next/image";
import React from "react";

export const AboutImage = () => {
  const pictures = [
    "/images/about.jpg",
    "/images/about.jpg",
    "/images/about.jpg",
    "/images/about.jpg",
  ];

  return (
    <div className="relative grid grid-cols-2 gap-4 w-full">
      {pictures.map((image, i) => (
        <div key={i} className="relative h-[200px] overflow-hidden">
          <Image
            src={image}
            alt="a propos de nous"
            fill
            className="object-cover hover:scale-105 duration-500 overflow-hidden"
          />
        </div>
      ))}
    </div>
  );
};
