"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/effect-creative";
import Image from "next/image";

export const HeroImage = () => {
  return (
    <Swiper
      className="relative aspect-square w-full bg-transparent pointer-events-none"
    //   grabCursor
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      speed={1000}
      slidesPerView={1}
      loop
      modules={[Autoplay]}
    >
      
      <SwiperSlide>
        <Image
          src={"/images/slide2.png"}
          alt="hero-image"
          fill
          className="object-contain"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={"/images/slide3.png"}
          alt="hero-image"
          fill
          className="object-contain"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={"/images/slide4.png"}
          alt="hero-image"
          fill
          className="object-contain"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={"/images/slide5.png"}
          alt="hero-image"
          fill
          className="object-contain"
        />
      </SwiperSlide>
    </Swiper>
  );
};
