import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    title: "Fresh Laundry Service",
    description: "Fast, Reliable & Affordable Laundry Solutions",
  },
  {
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    title: "Professional Cleaning",
    description: "We Take Care Of Your Clothes",
  },
  {
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    title: "Doorstep Pickup",
    description: "Easy Pickup & Delivery Service",
  },
];

function HeroSlider() {
  return (
    <div className="w-full h-[90vh]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[90vh]">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/50"></div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    {slide.title}
                  </h1>

                  <p className="text-lg md:text-2xl mb-6">
                    {slide.description}
                  </p>

                  <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HeroSlider;
