import { Quote, User } from "lucide-react"; // Importing Lucide icons
// import footballMohamedSalah from '../../assets/images/wallpapers/football-mohamed-salah.jpg';

const Reviews = () => {
  return (
    <section className="w-full bg-cover bg-center text-white py-12 relative" style={{ backgroundImage: `url(https://i.pinimg.com/564x/93/3b/48/933b48d45c34291c2bd0de92868ac27a.jpg)`, backgroundPosition: '40% 0%' }}>
      {/* Black Transparent Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative max-w-screen-xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 2xl:px-96 text-center space-y-6">
        {/* Title */}
        <h1 className="sm:max-3xl:text-3xl text-2xl font-bold uppercase">Customers Reviews</h1>

        {/* Quote Section */}
        <div className="flex flex-col items-center space-y-4">
          <Quote size={40} /> {/* Lucide Quote Icon */}
          <User size={48} /> {/* Lucide User Icon */}
        </div>

        {/* Review Text */}
        <p className="text-sm md:text-base leading-relaxed">
          I’ve been a huge AC Milan fan for years, and this jersey did not
          disappoint! The quality is top-notch, and it fits perfectly. I’ve worn
          it to several games, and it still looks brand new after multiple
          washes. Highly recommended!
        </p>

        {/* Author */}
        <h2 className="font-bold text-lg">James M., Milan</h2>
      </div>
    </section>
  );
};

export default Reviews;
