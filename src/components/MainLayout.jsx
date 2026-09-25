import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import { Outlet, useLocation } from "react-router-dom";

function MainLayout() {
  
  // refresh and scroll fix (from gemini)
  const location = useLocation();

  useEffect(()=>{

    // window.dispatchEvent(new Event('resize'));

    window.scrollTo(0, 0);

  }, [location.pathname])
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;