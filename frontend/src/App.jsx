import React from "react";
import { ThemeProvider } from "@mui/material";
import Navbar from "./customer/components/navbar/Navbar";
import CustomeTheme from "./theme/CustomeThem";
import Home from "./customer/pages/home/Home";
import Footer from "./customer/components/footer/Footer";

const App = () => {
  return (
    <div>
      <ThemeProvider theme={CustomeTheme}>
        <div className="">
          <Navbar />
          <Home />
          <Footer/>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default App;
