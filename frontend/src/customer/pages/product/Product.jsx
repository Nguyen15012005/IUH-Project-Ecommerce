import React, { useState } from "react";
import FilterSection from "./FilterSection";
import { useTheme } from "@emotion/react";
import {
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  useMediaQuery,
} from "@mui/material";
import ProductCard from "./product_card/ProductCard";

const Product = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));

  const [sort, setSort] = useState();
  const [page, setPage] = useState(1);

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  const handlePageChange = (value) => {
    setPage(value);
  };

  return (
    <div className="mt-10">
      {/* TITLE */}
      <section className="px-3 lg:px-10 mb-5 relative overflow-hidden">
        <img
          className="w-full h-[220px] sm:h-[260px] lg:h-[400px] object-cover rounded-lg"
          src="../../../../public/assets/image/men_hero.jpg"
          alt=""
        />

        <div className="absolute inset-0 bg-black/20 lg:bg-transparent rounded-lg"></div>

        <div className="absolute inset-0 flex items-center">
          <div className="px-4 sm:px-6 lg:ml-16 max-w-[90%] lg:max-w-[500px] text-left text-gray-700 lg:text-[#123467]">
            <p className="text-[10px] sm:text-xs lg:text-base tracking-widest uppercase opacity-80 lg:text-gray-500">
              New Collection
            </p>

            <h2 className="text-xl sm:text-2xl lg:text-6xl font-bold leading-tight mt-1">
              Đưa tên sản phẩm
            </h2>

            <p className="text-xs sm:text-sm lg:text-base mt-2 opacity-90 lg:text-gray-600">
              Khám phá những thiết kế mới nhất dành cho bạn.
            </p>
          </div>
        </div>
      </section>

      <div className="lg:flex gap-6 px-4 lg:px-10">
        {/* FILTER DESKTOP */}
        <aside className="w-[260px] shrink-0 hidden lg:block">
          <div className="sticky top-24">
            <FilterSection />
          </div>
        </aside>

        {/* RIGHT CONTENT */}
        <div className="flex-1 space-y-5">
          {/* ✅ MOBILE TOP BAR */}
          <div className="lg:hidden flex items-center justify-between px-2 sticky top-0 bg-white z-30 py-4">
            <FilterSection />

            <FormControl size="small" sx={{ width: "160px" }}>
              <InputLabel>Sắp Xếp</InputLabel>
              <Select value={sort} label="Sắp Xếp" onChange={handleSortChange}>
                <MenuItem value="low_to_high">Giá: Thấp → Cao</MenuItem>
                <MenuItem value="high_to_low">Giá: Cao → Thấp</MenuItem>
              </Select>
            </FormControl>
          </div>

          {/* ✅ DESKTOP SORT */}
          <div className="hidden lg:flex justify-end items-center px-2 lg:px-0">
            <FormControl size="small" sx={{ width: "180px" }}>
              <InputLabel>Sắp Xếp</InputLabel>
              <Select value={sort} label="Sắp Xếp" onChange={handleSortChange}>
                <MenuItem value="low_to_high">Giá: Thấp → Cao</MenuItem>
                <MenuItem value="high_to_low">Giá: Cao → Thấp</MenuItem>
              </Select>
            </FormControl>
          </div>

          <Divider />

          {/* PRODUCT GRID */}
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-3 lg:px-1 justify-items-center">
            {[1, 2, 3, 4, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
              <ProductCard key={index} />
            ))}
          </section>

          <div className="flex justify-center mt-10 pt-10">
            <Pagination
              onChange={(e, value) => handlePageChange(value)}
              count={10}
              variant="outlined"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
