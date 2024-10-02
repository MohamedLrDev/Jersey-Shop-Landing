import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import your images
import jersey1 from "../../assets/images/3d_jerseys/fc-barcelona-2024.png";
import jersey2 from "../../assets/images/3d_jerseys/real-madrid-home-jersey.png";
import jersey3 from "../../assets/images/3d_jerseys/liverpool-2023-home-jersey.png";
import jersey4 from "../../assets/images/3d_jerseys/manchester-city-2024.png";
import jersey5 from "../../assets/images/3d_jerseys/argentina-2022.png";

export default function Main() {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        fade: true,
        cssEase: "linear",
    };
    const items = [
        {
            image: jersey1,
            title: "Barcelona jersey",
        },
        {
            image: jersey2,
            title: "Real Madrid jersey",
        },
        {
            image: jersey3,
            title: "Liverpool jersey",
        },
        {
            image: jersey4,
            title: "mancity jersey",
        },
        {
            image: jersey5,
            title: "Argentine jersey",
        },
    ];

    return (
        <div className="mt-8 sm:mt-12 pt-14 md:mt-16 py-4 w-full h-fit bg-[#F7F7F7] relative">
            <div className="absolute inset-0 pattern-dots pattern-blue-600 pattern-bg-transparent pattern-opacity-10 pattern-size-8" />
            <div className="relative z-10 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col justify-center text-[#1D3557] items-center w-full text-transform: capitalize">
                    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl flex flex-col sm:flex-row items-center text-center sm:text-left">
                        <span>Express</span>
                        <span className="hidden sm:inline-block w-10 sm:w-16 md:w-20 h-1 sm:h-2 bg-[#E63946] mx-2 sm:mx-4"></span>
                        <span>love</span>
                    </h1>
                    <p className="mt-2 sm:mt-4 text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center">
                        to your team{" "}
                        <span className="inline-block w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-[#E63946]"></span>
                    </p>
                </div>
                <div className="flex justify-center mt-6 sm:mt-8 md:mt-10">
                    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl">
                        <Slider {...settings}>
                            {items.map((item, index) => (
                                <div key={index} className="outline-none">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-auto pointer-events-none"
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}
