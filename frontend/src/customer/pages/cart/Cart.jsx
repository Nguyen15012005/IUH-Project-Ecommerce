import { Alert, Button, IconButton, Snackbar, TextField } from "@mui/material";
import React, { useState } from "react";
import PricingCard from "./PricingCard";
import { Close, Favorite, FavoriteBorder, LocalOffer } from "@mui/icons-material";
import CartItem from "./CartItem";
import { red } from "@mui/material/colors";

const Cart = () => {
  const [couponInput, setCouponInput] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // 👉 APPLY COUPON
  const handleApplyCoupon = () => {
    if (!couponInput.trim()) return;

    // giả lập check mã
    if (couponInput === "SAVE20") {
      setAppliedCoupon(couponInput);
      setErrorMessage(""); // 👈 thêm dòng này
      setOpenSnackbar(true);
    } else {
      setErrorMessage("Mã không hợp lệ");
      setOpenSnackbar(true);
    }
  };

  // 👉 REMOVE COUPON
  const handleRemoveCoupon = () => {
    setAppliedCoupon("");
    setCouponInput("");
  };

  return (
    <div>
      <div className="pt-10 px-5 sm:px-10 md:px-20 lg:px-30 min-h-screen bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="cartItemSection lg:col-span-2 space-y-4">
            {[1, 1, 1, 1, 1, 1].map((item, index) => (
              <div key={index}>
                <CartItem item={item} />
              </div>
            ))}
          </div>

          {/* Pricing Summary */}
          <div className="col-span-1 text-sm space-y-4">
            {/* COUPON */}
            <div className="bg-white border rounded-xl px-5 py-4 space-y-4 shadow-sm">
              <div className="flex text-center justify-center items-center gap-2 font-medium text-gray-700">
                <LocalOffer sx={{ color: red[700], fontSize: "30px" }} />
                <span className="text-2xl font-bold text-gray-600">
                  Áp dụng mã giảm giá
                </span>
              </div>

              <div className="flex gap-2 items-center">
                <TextField
                  size="small"
                  fullWidth
                  placeholder="Nhập mã..."
                  value={couponInput}
                  onChange={(e) => setCouponInput(e.target.value)}
                />
                <Button
                  onClick={handleApplyCoupon}
                  variant="contained"
                  sx={{
                    height: "40px",
                    minWidth: "90px",
                    background: "#C6A15B",
                    "&:hover": { background: "#a07830" },
                    borderRadius: "8px",
                    whiteSpace: "nowrap",
                  }}
                >
                  Áp dụng
                </Button>
              </div>

              {/* Applied coupon */}
              {appliedCoupon && (
                <div className="flex">
                  <div className="px-3 py-1 border rounded-full flex items-center gap-2 bg-gray-100">
                    <span className="text-xs font-medium text-gray-700">
                      {appliedCoupon}
                    </span>
                    <IconButton size="small" onClick={handleRemoveCoupon}>
                      <Close className="text-red-500" />
                    </IconButton>
                  </div>
                </div>
              )}
            </div>

            {/* PRICING */}
            <section className="bg-white border rounded-xl shadow-sm">
              <PricingCard coupon={appliedCoupon} />
              <div className="p-5 pt-0">
                <Button
                  sx={{
                    py: "12px",
                    borderRadius: "10px",
                    background: "#C6A15B",
                    fontWeight: 600,
                    "&:hover": { background: "#a07830" },
                  }}
                  variant="contained"
                  fullWidth
                >
                  Thanh toán
                </Button>
              </div>
            </section>

            {/* WISHLIST */}
            <div className="bg-white border rounded-xl px-5 py-4 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition">
              <span className="font-medium text-gray-700">
                Thêm từ danh sách yêu thích
              </span>
              <Favorite sx={{ fontSize: 24, color:red[500] }} />
            </div>
          </div>
        </div>
      </div>

      {/* EMPTY CART */}
      <div className="h-[85vh] flex justify-center items-center flex-col bg-gray-50">
        <div className="text-center py-5">
          <h1 className="text-xl font-semibold text-gray-800">
            Giỏ hàng của bạn đang trống
          </h1>
          <p className="text-gray-500 text-sm mt-2">
            Hãy thêm sản phẩm để tiếp tục mua sắm
          </p>
        </div>

        <Button
          variant="outlined"
          sx={{
            py: "11px",
            borderRadius: "8px",
          }}
        >
          Thêm từ danh sách yêu thích
        </Button>
      </div>

      {/* SNACKBAR */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }} // 👈 thêm dòng này
      >
        <Alert severity={errorMessage ? "error" : "success"}>
          {errorMessage || "Áp dụng mã thành công"}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Cart;
