import React from "react";
import { VerticalGrid } from "./vertical-grid";

export const GridMotion = () => {
  const galleryList = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
    "/images/6.jpg",
  ];
  return (
    <div className="flex items-center justify-center bg-secondary overflow-hidden h-[500px] rounded-xl w-full relative">
      <div className="pointer-events-none z-10 absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"/>
      <div className="pointer-events-none z-10 absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"/>
      <div className="flex justify-start items-start gap-x-2 h-[900px] incline">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="flex-shrink-0">
            <VerticalGrid 
              images={galleryList} 
              duration={index % 2 === 0 ? "20s" : "30s"} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};
