import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Reviews from "@/components/common/CustomerReviews";

const CustomerRCarousel = () => {
  const reviews = [
    {
      title: "Jersey Quality",
      content:
        "I’ve been a huge AC Milan fan for years, and this jersey did not disappoint! The quality is top-notch, and it fits perfectly. I’ve worn it to several games, and it still looks brand new after multiple washes. Highly recommended!",
      author: "James M.",
      location: "Milan",
    },
    {
      title: "Fast Delivery",
      content:
        "I ordered the Bayern Munich jersey, and it arrived faster than expected! The design is authentic, and I love the attention to detail. It was a birthday gift for my brother, and he was thrilled!",
      author: "Sarah L.",
      location: "Munich",
    },
    {
      title: "Excellent Customer Service",
      content:
        "Had a question about the sizes, and the customer support team was incredibly helpful. They guided me to pick the perfect size, and the jersey fits just right. Amazing service!",
      author: "Carlos R.",
      location: "Barcelona",
    },
    {
      title: "Great Product, Minor Sizing Issue",
      content:
        "I absolutely love my new Barcelona jersey! The quality is fantastic, and it looks just like the one worn by the team. My only complaint is that the size runs a little small, so make sure to order a size up if you're unsure.",
      author: "Emily T.",
      location: "London",
    },
    {
      title: "Authentic Jerseys",
      content:
        "This is my second purchase, and I’m once again impressed by the authenticity of these jerseys. The material is breathable, and I can wear it all day at the stadium without any discomfort. Worth every penny!",
      author: "Liam K.",
      location: "New York",
    },
    {
      title: "Perfect Gift",
      content:
        "Bought the Paris Saint-Germain jersey as a gift for my boyfriend, and he loves it! The colors are vibrant, and the quality is excellent. The packaging was also nicely done. I’ll definitely be shopping here again!",
      author: "Amanda G.",
      location: "Paris",
    },
    {
      title: "Great Fit and Style",
      content:
        "This Real Betis away jersey is everything I wanted! It fits perfectly, and the material feels really high-end. I’ve worn it to a couple of matches, and I’ve received tons of compliments!",
      author: "Oscar V.",
      location: "Seville",
    },
    {
      title: "Favorite Jersey",
      content:
        "I collect jerseys from all my favorite teams, and this one has to be my favorite. The attention to detail is amazing, and it’s comfortable to wear during matches or just out and about.",
      author: "Daniel P.",
      location: "Toronto",
    },
    {
      title: "Happy with Purchase",
      content:
        "Overall, I’m really happy with my purchase. The jersey looks fantastic, and the fabric is nice and light. I just wish there were more color options available for customization.",
      author: "Kevin J.",
      location: "Sydney",
    },
    {
      title: "Will Buy Again",
      content:
        "I wasn’t sure what to expect at first, but this jersey exceeded my expectations. The stitching and fabric quality are great, and it feels like the real deal. I’ll be back for more soon!",
      author: "Samantha W.",
      location: "Manchester",
    },
  ];

  // State for tracking the active index
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to auto-slide the carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000); // Change slide every 5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <div className="relative overflow-hidden w-full mb-20">
      <h1 className="capitalize text-3xl md:max-3xl:text-4xl mt-6 text-center text-[#1D3557] px-3 dark:text-white">
        hear from our{" "}
        <span className="font-semibold text-[#E63946] ">
          Happy
        </span>{" "}
        Customers 😃
      </h1>
      <Carousel>
        <CarouselContent className="relative h-[45vh] md:max-3xl:h-[40vh]  ">
          {reviews.map((item, index) => (
            <CarouselItem
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                activeIndex === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <Reviews
                author={item.author}
                content={item.content}
                title={item.title}
                location={item.location}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CustomerRCarousel;
