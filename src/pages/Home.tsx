// Home.tsx
import { useState } from "react";
import Navbar from "../components/layouts/Navbar";
import Main from "../components/layouts/Main";
import CardSlider from "../components/common/CardSlider";
import ProductHighlights from "../components/common/ProductHighlights";
import Footer from "../components/layouts/Footer";
import NewArrivals from "@/components/common/NewArrivals";
import Reviews from "@/components/common/CustomerReviews";

const Home = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.documentElement.classList.toggle("dark", newDarkMode); // Toggle the 'dark' class on the HTML element
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
      <Reviews />
      <Footer />
      {/* hello */}
    </div>
  );
};

export default Home;
