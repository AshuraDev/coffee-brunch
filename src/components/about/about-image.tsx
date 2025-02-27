import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export const AboutImage = () => {
  const pictures = [
    "/images/about.jpg",
    "/images/about2.jpg",
    "/images/about3.jpg",
    "/images/about4.jpg",
  ];

  return (
    <div className="w-full overflow-hidden">
      <div className="grid grid-cols-2 gap-4 h-full place-items-center">
        {pictures.map((picture, i) => (
          <div
            key={i}
            className={cn(
              "h-full w-full flex min-h-[180px] md:min-h-[200px] lg:min-h-[250px]",
              i === 0 && "items-end justify-end",
              i === 1 && "items-end justify-start",
              i === 2 && "items-start justify-end",
              i === 3 && "items-start justify-start"
            )}
          >
            <div
              className={cn(
                "bg-input shrink-0 h-full aspect-square relative",
                i === 0 || i === 3 ? "h-full" : "h-3/4"
              )}
            >
              <Image
                src={picture}
                alt="a propos de nous"
                fill
                className="object-cover hover:scale-105 duration-500 overflow-hidden"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
