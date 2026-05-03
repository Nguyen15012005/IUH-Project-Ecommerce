import React from "react";
import DealCard from "./DealCard";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";

const NextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute -right-3 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg p-2 rounded-full cursor-pointer hover:scale-110 transition"
  >
    <ChevronRight size={18} />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute -left-3 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg p-2 rounded-full cursor-pointer hover:scale-110 transition"
  >
    <ChevronLeft size={18} />
  </div>
);

const Deal = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 600,
    autoplaySpeed: 2500,
    cssEase: "ease-in-out",
    swipeToSlide: true,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="py-10 lg:px-20 relative">
      {/* 🔥 HEADER XỊN HƠN */}
      <div className="flex items-end justify-between mb-6">
        <div>
          <p className="text-sm text-red-500 font-semibold tracking-widest uppercase">
            Flash Sale
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-orange-400 to-red-500 text-transparent bg-clip-text">
            🔥 Deal Hot Hôm Nay
          </h2>
        </div>

        <button className="text-sm text-gray-600 hover:text-black transition">
          Xem tất cả →
        </button>
      </div>

      {/* Container để tránh dính mép */}
      <div className="relative ">
        {/* Gradient fade mềm hơn */}
        <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        {/* Slider */}
        <Slider {...settings}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
            <div key={index} className="px-2">
              <div className="transition duration-300 hover:-translate-y-2">
                <DealCard />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Deal;
