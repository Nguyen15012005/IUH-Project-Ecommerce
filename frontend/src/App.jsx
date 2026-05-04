import React from "react";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./customer/components/navbar/Navbar";
import CustomeTheme from "./theme/CustomeThem";
import Home from "./customer/pages/home/Home";
import Footer from "./customer/components/footer/Footer";
import SellerLayout from "./seller/components/SellerLayout";
import Dashboard from "./seller/pages/dashboard/Dashboard";
import OrderList from "./seller/pages/orders/OrderList";

const App = () => {
  return (
    <ThemeProvider theme={CustomeTheme}>
      <Router>
        <Routes>
          {/* Customer Routes */}
          <Route
            path="/"
            element={
              <div className="">
                <Navbar />
                <Home />
                <Footer />
              </div>
            }
          />

          {/* Seller Routes */}
          <Route path="/seller" element={<SellerLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="products" element={<div className="p-10">Danh sách sản phẩm (Đang phát triển)</div>} />
            <Route path="add-product" element={<div className="p-10">Thêm sản phẩm (Đang phát triển)</div>} />
            <Route path="orders" element={<OrderList />} />
            <Route path="profile" element={<div className="p-10">Hồ sơ người bán (Đang phát triển)</div>} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
