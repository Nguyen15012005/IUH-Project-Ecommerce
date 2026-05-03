import React from "react";

const DealCard = () => {
  return (
    <div className="w-[14rem] bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden cursor-pointer group">
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1549298916-b41d501d3772"
          alt=""
          className="w-full h-48 object-cover group-hover:scale-110 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <p className="text-sm text-gray-500">Sneaker</p>

        <p className="text-lg font-semibold text-gray-800 line-clamp-2">
          Giày Sneaker Thời Trang Cao Cấp
        </p>

        <p className="text-red-500 font-bold text-xl">-20%</p>

        {/* CTA */}
        <button className="w-full mt-2 bg-gradient-to-r from-orange-400 to-red-500 text-white py-2 rounded-xl text-sm font-medium hover:opacity-90 transition">
          Mua ngay
        </button>
      </div>
    </div>
  );
};

export default DealCard;
