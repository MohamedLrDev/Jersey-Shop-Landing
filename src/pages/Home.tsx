import {  useState } from "react";
import Navbar from "../components/layouts/Navbar";
import Main from "../components/layouts/Main";
import CardSlider from "../components/common/CardSlider";
import ProductHighlights from "../components/common/ProductHighlights";
import Footer from "../components/layouts/Footer";
// import TeamsCarousel from "@/components/common/TeamsCarousel";
import NewArrivals from "@/components/common/NewArrivals";
// import ProductPage from "@/components/common/ProductPage";

const Home = () => {
  const [darkMode, setDarkMode] = useState < boolean > (false);
  
  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode); // Toggle the 'dark' class on the HTML element
  };

  return (
    <div>
      <div>
        <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      </div>
      <Main />
      <CardSlider />
      <ProductHighlights />
      <NewArrivals />
      {/* <TeamsCarousel /> */}
      <Footer />
      {/* <ProductPage /> */}
    </div>
  );
};

export default Home;
