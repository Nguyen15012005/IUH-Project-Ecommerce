import { Button, Divider } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const PricingCard = ({ coupon }) => {
  const navigate = useNavigate();

  // 👉 fake data (sau này thay bằng cart thật)
  const subtotal = 500000; // tạm tính
  const shipping = 79000;

  // 👉 logic giảm giá
  let discount = 0;

  if (coupon === "SAVE20") {
    discount = subtotal * 0.2; // giảm 20%
  }

  const total = subtotal - discount + shipping;

  return (
    <div className="bg-white rounded-xl shadow-sm border">
      {/* CONTENT */}
      <div className="space-y-4 p-5 text-sm">
        <div className="flex justify-between items-center text-gray-600">
          <span>Tạm tính</span>
          <span className="font-medium text-gray-800">
            {subtotal.toLocaleString()}đ
          </span>
        </div>

        <div className="flex justify-between items-center text-gray-600">
          <span>Giảm giá</span>
          <span className="text-green-600 font-medium">
            -{discount.toLocaleString()}đ
          </span>
        </div>

        <div className="flex justify-between items-center text-gray-600">
          <span>Phí vận chuyển</span>
          <span className="font-medium text-gray-800">
            {shipping.toLocaleString()}đ
          </span>
        </div>

        <div className="flex justify-between items-center text-gray-600">
          <span>Phí nền tảng</span>
          <span className="text-teal-600 font-medium">Miễn phí</span>
        </div>
      </div>

      <Divider />

      {/* TOTAL */}
      <div className="px-5 py-4 flex justify-between items-center bg-gray-50 rounded-b-xl">
        <span className="font-semibold text-lg">Tổng tiền</span>
        <span className="font-bold text-lg text-red-500">
          {total.toLocaleString()}đ
        </span>
      </div>
    </div>
  );
};

export default PricingCard;
