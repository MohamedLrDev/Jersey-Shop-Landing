// Home.tsx
import { useState, useEffect } from "react";
import Navbar from "../components/layouts/Navbar";
import Main from "../components/layouts/Main";
import CardSlider from "../components/common/CardSlider";
import ProductHighlights from "../components/common/ProductHighlights";
import Footer from "../components/layouts/Footer";
import NewArrivals from "@/components/common/NewArrivals";
import Lenis from "lenis";
// import Reviews from "@/components/common/CustomerReviews";
import CustomerRCarousel from '@/components/common/CustomerRCarousel'
const Home = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.documentElement.classList.toggle("dark", newDarkMode); // Toggle the 'dark' class on the HTML element
  };
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time:any) {
      lenis.raf(time);
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  return (
    <div>
      <div>
        <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      </div>
      <Main />
      <CardSlider />
      <ProductHighlights />
      <NewArrivals />
      {/* <Reviews /> */}
      <CustomerRCarousel />
      <Footer />
      {/* hello */}
    </div>
  );
};

export default Home;
