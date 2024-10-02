import Slider from "react-slick";
import CardComp from './CardComp'; // Assuming you have this file in the same directory
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardSlider = () => {
    // Updated Slick slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Show 4 slides for extra-large screens
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1536, // Extra-large screens (>1536px)
                settings: {
                    slidesToShow: 4, // Show 4 slides on extra-large screens
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1280, // Large screens (>1280px)
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024, // Medium screens (1024px to 1280px)
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768, // Small screens (640px to 1024px)
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640, // Very small screens (<640px)
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true, // Center the card on very small screens
                    centerPadding: '20px', // Add padding to prevent cramping
                },
            },
        ],
    };

    // Sample card data
    const cardData = [
        {
            imageSrc: "https://raw.githubusercontent.com/luukhopman/football-logos/refs/heads/master/logos/France%20-%20Ligue%201/Paris%20Saint-Germain.png",
            title: "Paris Saint Germain",
        },
        {
            imageSrc: "https://raw.githubusercontent.com/luukhopman/football-logos/refs/heads/master/logos/France%20-%20Ligue%201/Olympique%20Marseille.png",
            title: "Olympique Marseille",
        },
        {
            imageSrc: "https://raw.githubusercontent.com/luukhopman/football-logos/refs/heads/master/logos/Germany%20-%20Bundesliga/Bayer%2004%20Leverkusen.png",
            title: "Bayer 04 Leverkusen.",
        },
        {
            imageSrc: "https://raw.githubusercontent.com/luukhopman/football-logos/refs/heads/master/logos/Germany%20-%20Bundesliga/Bayern%20Munich.png",
            title: "Bayern Munich",
        },
        
        // Add more cards as needed
    ];

    return (
        <div className="w-full px-14 xl:px-40 lg:px-28  py-8">
            <Slider {...settings}>
                {cardData.map((card, index) => (
                    <div key={index}>
                        <CardComp
                            imageSrc={card.imageSrc}
                            title={card.title}
                            
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CardSlider;
