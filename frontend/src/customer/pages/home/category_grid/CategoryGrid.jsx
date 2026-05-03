import React from "react";

const Item = ({ img1, img2, title }) => {
  return (
    <div className="relative w-full h-full group overflow-hidden rounded-xl cursor-pointer">
      {/* Image */}
      <img
        className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
        src={img1}
        alt=""
      />

      {/* Hover Image */}
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-0 transition duration-700 group-hover:opacity-100 group-hover:scale-110"
        src={img2}
        alt=""
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

      {/* Content */}
      <div className="absolute bottom-4 left-4 right-4 text-white">
        <p className="text-lg font-semibold">{title}</p>

        <button className="mt-2 px-4 py-1.5 bg-white text-black text-xs rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition duration-500">
          Khám phá
        </button>
      </div>
    </div>
  );
};

const CategoryGrid = () => {
  return (
    <div className="px-3 md:px-5 lg:px-20 py-6">
      <div
        className="
          grid gap-4
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-12
          auto-rows-[180px]
          lg:grid-rows-6
          lg:h-[600px]
        "
      >
        {/* LEFT BIG */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-3 lg:row-span-6">
          <Item
            title="Thời trang nữ"
            img1="https://pos.nvncdn.com/04d215-119681/ps/Vay-nu-thiet-ke-Nara-dress-Text-han-cao-cap-HIU-design.jpg?v=1760209002"
            img2="https://images.unsplash.com/photo-1549298916-b41d501d3772"
          />
        </div>

        {/* TOP */}
        <div className="col-span-1 lg:col-span-3 lg:row-span-3">
          <Item
            title="Sneaker"
            img1="https://images.unsplash.com/photo-1549298916-b41d501d3772"
            img2="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
          />
        </div>

        <div className="col-span-1 lg:col-span-3 lg:row-span-3">
          <Item
            title="Thể thao"
            img1="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
            img2="https://images.unsplash.com/photo-1593032465175-481ac7f401a0"
          />
        </div>

        {/* RIGHT BIG */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-3 lg:row-span-6">
          <Item
            title="Phụ kiện"
            img1="https://images.unsplash.com/photo-1593032465175-481ac7f401a0"
            img2="https://images.unsplash.com/photo-1617038220319-276d3cfab638"
          />
        </div>

        {/* BOTTOM */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-4 lg:row-span-3">
          <Item
            title="Túi xách"
            img1="https://images.unsplash.com/photo-1617038220319-276d3cfab638"
            img2="https://images.unsplash.com/photo-1583394838336-acd977736f90"
          />
        </div>

        <div className="col-span-1 lg:col-span-2 lg:row-span-3">
          <Item
            title="Giày thể thao"
            img1="https://images.unsplash.com/photo-1583394838336-acd977736f90"
            img2="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryGrid;
