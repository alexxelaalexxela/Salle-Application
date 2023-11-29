import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Slider: React.FC = () => {
  const slides = [
    { message: "Spacious and Elegant" },
    { message: "Modern Design" },
    { message: "Beautiful View" },
    { message: "Fully Equipped" },
    { message: "Comfortable and Cozy" },
  ];

  return (
    <div className="my-10">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="rounded-lg shadow-lg"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex h-64 items-center justify-center rounded-lg bg-primary text-center text-white">
              {slide.message}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
