import { Button, Divider, IconButton } from "@mui/material";
import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { IoMdAddCircle } from "react-icons/io";
import { MdRemoveCircle } from "react-icons/md";

const CartItem = ({ item }) => {
  const [quantity, setQuantity] = useState(1);

  // ➕ tăng số lượng
  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  // ➖ giảm số lượng
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  // ❌ xoá sản phẩm
  const handleRemove = () => {
    console.log("Remove item:", item);
  };

  return (
    <div className="border rounded-xl relative bg-white shadow-sm hover:shadow-md transition">
      {/* CONTENT */}
      <div className="p-4 flex gap-4">
        {/* IMAGE */}
        <div>
          <img
            className="w-[90px] h-[110px] object-cover rounded-lg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW1yhlTpkCnujnhzP-xioiy9RdDQkKLMnMSg&s"
            alt=""
          />
        </div>

        {/* INFO */}
        <div className="space-y-1 flex-1">
          <h1 className="font-semibold text-base text-gray-800 line-clamp-2">
            {item?.name || "Tên sản phẩm"}
          </h1>

          <p className="text-gray-600 text-sm line-clamp-2">
            Turquoise Blue Stonework Satin Designer Saree
          </p>

          <p className="text-gray-400 text-xs">
            <strong>Người bán:</strong> Natural Lifestyle Products Private
            Limited
          </p>

          <p className="text-xs text-green-600 font-medium">
            7 ngày đổi trả miễn phí
          </p>

          {/* ✅ CHỈ SỬA Ở ĐÂY */}
          <p className="text-xs text-gray-500">
            <strong>Số lượng:</strong> {quantity}
          </p>
        </div>
      </div>

      <Divider />

      {/* ACTION */}
      <div className="px-4 py-3 flex justify-between items-center">
        {/* QUANTITY */}
        <div className="flex items-center gap-2 bg-gray-100 px-2 py-1 rounded-lg">
          <Button size="small" onClick={handleDecrease}>
            <MdRemoveCircle
              className={`${quantity === 1 ? "text-gray-300" : "text-red-600"}`}
            />
          </Button>

          <span className="px-2 font-semibold text-gray-800">{quantity}</span>

          <Button size="small" onClick={handleIncrease}>
            <IoMdAddCircle className="text-teal-600" />
          </Button>
        </div>

        {/* PRICE */}
        <div>
          <p className="text-red-500 font-semibold text-base">
            {(item?.price || 100000) * quantity}đ
          </p>
        </div>
      </div>

      {/* REMOVE */}
      <div className="absolute top-2 right-2">
        <IconButton
          size="small"
          onClick={handleRemove}
          sx={{
            background: "#fff",
            boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
            "&:hover": { background: "#f5f5f5" },
          }}
        >
          <AiFillCloseCircle className="text-gray-500 hover:text-red-500" />
        </IconButton>
      </div>
    </div>
  );
};

export default CartItem;
