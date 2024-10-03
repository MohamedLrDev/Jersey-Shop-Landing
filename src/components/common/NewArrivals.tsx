import { Button } from "@/components/ui/button";
import CardComponent from "./CardComponent";
import jersey from '../../assets/images/jerseys/ac-milan-jersey.png';
import jersey2 from '../../assets/images/jerseys/jersey-3d.png';
import jersey3 from '../../assets/images/jerseys/bayern-jersey.png';
import jersey4 from '../../assets/images/jerseys/betis-jersey.png';
import { useState, useEffect } from "react";

const NewArrivals = () => {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);
  const [isMediumScreen, setIsMediumScreen] = useState<boolean>(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 640); // Adjust for small screens
      setIsMediumScreen(window.innerWidth >= 768 && window.innerWidth < 1280); // Between 768px and 1279px
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const items = [
    {
      title: "Ac Milan Home",
      desc: "Official team colors and design",
      price: 89.99,
      rating: "★★★★",
      reviews: 42,
      image: jersey,
    },
    {
      title: "Fc Barcelona Home",
      desc: "High-performance court shoes",
      price: 129.99,
      rating: "★★★★★",
      reviews: 58,
      image: jersey2,
    },
    {
      title: "Bayern Muinich Home",
      desc: "Lightweight and powerful",
      price: 199.99,
      rating: "★★★★½",
      reviews: 36,
      image: jersey3,
    },
    {
      title: "Real Betis Away",
      desc: "Lightweight and powerful",
      price: 199.99,
      rating: "★★★★½",
      reviews: 36,
      image: jersey4,
    },
  ];

  const displayedData = isSmallScreen ? items.slice(0, 2) : items;

  return (
    <div className="relative w-full h-auto px-12 pb-6 bg-[#A8DADC]">
      <h1 className="capitalize text-4xl py-6 text-center text-[#1D3557]">
        Check our <span className="font-semibold text-[#E63946]">new</span> arrivals
      </h1>

      {/* Grid for items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-0  mb-16">
        {displayedData.map((product, index) => (
          <CardComponent
            key={index}
            image={product.image}
            title={product.title}
            desc={product.desc}
            price={product.price}
            rating={product.rating}
            reviews={product.reviews}
          />
        ))}
      </div>

      {/* Manually positioned button */}
      <div
        className={`absolute ${isMediumScreen ? "left-1/2 transform translate-x-1/2 bottom-10 -translate-y-[200px]" : "bottom-6 left-0 right-0"} flex justify-center`}
      >
        <Button
          variant="outline"
          className="bg-[#A8DADC] px-10 border-2 rounded-none font-semibold text-[#1D3557] border-[#1D3557] hover:bg-[#A8DADC] shadow-lg hover:text-[#1D3557] transition-transform duration-300 ease-in-out hover:scale-105"
        >
          View more articles
        </Button>
      </div>
    </div>
  );
};

export default NewArrivals;
