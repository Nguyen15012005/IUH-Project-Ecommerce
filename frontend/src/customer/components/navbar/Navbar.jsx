import React, { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, IconButton, useMediaQuery, useTheme } from "@mui/material";
import {
  AddShoppingCart,
  FavoriteBorder,
  Search,
  Storefront,
} from "@mui/icons-material";

const Navbar = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));

  const [openSearch, setOpenSearch] = useState(false);
  const searchRef = useRef(null);

  // 👉 Click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setOpenSearch(false);
      }
    };

    if (openSearch) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openSearch]);

  // 👉 ESC để đóng
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") {
        setOpenSearch(false);
      }
    };

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className="navbar sticky top-0 z-50 bg-white shadow-sm text-gray-700">
      <Box>
        {/* Announcement */}
        <div className="bg-gradient-to-r from-[#100d0d] to-[#1a1614] h-8 flex items-center justify-center">
          <span className="text-[11px] tracking-[2px] uppercase text-white">
            ✦ Miễn phí vận chuyển cho đơn hàng trên 500.000đ ✦
          </span>
        </div>

        {/* MAIN NAV */}
        <div className="flex items-center justify-between px-4 md:px-6 lg:px-20 h-[70px] border-b border-gray-200">
          {/* LEFT */}
          <div className="flex items-center gap-3">
            {!isLarge && (
              <IconButton className="hover:bg-gray-100">
                <MenuIcon />
              </IconButton>
            )}

            {/* LOGO */}
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="flex flex-col leading-none">
                <span className="text-[40px] font-serif text-[#C9A96E]">D</span>
                <span className="text-[40px] font-serif text-[#C9A96E] -mt-6 ml-3">
                  Z
                </span>
              </div>

              <div className="flex flex-col">
                <h1 className="text-[18px] md:text-[20px] font-serif tracking-[3px] text-[#111] mb-2">
                  DAILY ZONE
                </h1>
                <span className="text-[9px] tracking-[5px] text-gray-400 uppercase">
                  Style your life
                </span>
              </div>
            </div>

            {/* MENU */}
            {isLarge && (
              <ul className="flex items-center ml-6 text-gray-700">
                {["Men Zone", "Women Zone", "Kid Zone", "Home & Furniture"].map(
                  (item) => (
                    <li
                      key={item}
                      className="
                        relative px-4 h-[70px] flex items-center cursor-pointer font-semibold
                        after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 
                        after:bg-black after:transition-all after:duration-300
                        hover:after:w-full hover:text-black
                      "
                    >
                      {item}
                    </li>
                  ),
                )}
              </ul>
            )}
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-2 lg:gap-4">
            {/* SEARCH */}
            <IconButton
              onClick={() => setOpenSearch(true)}
              className="hover:bg-gray-100"
            >
              <Search />
            </IconButton>

            <IconButton className="hover:bg-gray-100">
              <FavoriteBorder sx={{ fontSize: 24 }} />
            </IconButton>

            <IconButton className="hover:bg-gray-100 relative">
              <AddShoppingCart sx={{ fontSize: 24 }} />
              <span className="absolute -top-1 -right-1 min-w-[16px] h-[16px] flex items-center justify-center text-[10px] bg-black text-white rounded-full">
                2
              </span>
            </IconButton>

            {/* LOGIN */}
            <Button
              variant="contained"
              className="
                normal-case
                px-6 py-2
                bg-black text-white
                border border-black
                rounded-md
                tracking-wide
                shadow-none
                transition-all duration-300

                hover:bg-white
                hover:text-black
                hover:border-black
              "
            >
              Đăng nhập
            </Button>

            {/* SELL */}
            {isLarge && (
              <Button
                startIcon={<Storefront />}
                variant="outlined"
                className="
                  normal-case
                  px-6 py-2
                  border border-[#C6A15B]
                  text-[#C6A15B]
                  rounded-md
                  tracking-wide
                  transition-all duration-300

                  hover:bg-[#C6A15B]
                  hover:text-black
                "
              >
                Bán hàng
              </Button>
            )}
          </div>
        </div>

        {/* SEARCH DROPDOWN */}
        {openSearch && (
          <div
            ref={searchRef}
            className="w-full bg-white border-b border-gray-200 px-4 md:px-6 lg:px-20 py-4 flex items-center gap-3"
          >
            <Search className="text-gray-400" />

            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm..."
              className="flex-1 outline-none text-lg bg-transparent"
              autoFocus
            />

            <button
              onClick={() => setOpenSearch(false)}
              className="text-sm text-gray-500 hover:text-black"
            >
              Đóng
            </button>
          </div>
        )}
      </Box>
    </div>
  );
};

export default Navbar;
