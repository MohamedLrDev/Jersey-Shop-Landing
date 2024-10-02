import React from "react";
import Navbar from "../components/layouts/Navbar";
import Main from "../components/layouts/Main";
import CardSlider from "../components/common/CardSlider";
import ProductHighlights from "../components/common/ProductHighlights";
import Footer from "../components/layouts/Footer";
import TeamsCarousel from "@/components/common/TeamsCarousel";
import NewArrivals from "@/components/common/NewArrivals";
import ProductPage from "@/components/common/ProductPage";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <CardSlider />
      <ProductHighlights />
      <NewArrivals />
      {/* <TeamsCarousel /> */}
      <Footer />
      <ProductPage />
    </div>
  );
};

export default Home;
