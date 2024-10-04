import barca from "../../assets/images/barca-jersey.png";
import { CheckCircle, ThumbsUp, Bolt, Handshake } from "lucide-react";

const ProductHighlights = () => {
  return (
    <div className="flex flex-col dark:text-white items-center lg:px-12 text-[#1D3557] my-8 px-8">
      {/* Title Section */}
      <h1 className="text-4xl mb-2 text-center">
        Get<span className="font-semibold text-[#E63946]"> YOUR </span>
        jersey
      </h1>
      <p className="text-gray-500 mb-8 text-lg text-center">
        Discover the best quality jerseys, representing your favorite teams and moments in sports history.
      </p>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl">
        {/* Left Text Block */}
        <div className="flex-1 text-center">
          <div className="flex flex-col items-center mb-8">
            <CheckCircle size={48} className="text-[#E63946]" />
            <p className="text-gray-500 mt-4">
              Authentic, high-quality jerseys for all passionate sports fans.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <ThumbsUp size={48} className="text-[#E63946]" />
            <p className="text-gray-500 mt-4">
              Highly recommended by our customers for the perfect fit and feel.
            </p>
          </div>
        </div>

        {/* Image Section with Button */}
        <div className="flex-1 flex flex-col items-center">
          <img
            src={barca}
            alt="Barcelona Jersey"
            className="w-64 h-64 object-contain mb-8"
          />
          <button className="px-6 py-2 mb-4 bg-gradient-to-r from-[#E63946] to-[#1D3557] text-white rounded-full cursor-pointer shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
            Buy now
          </button>
        </div>

        {/* Right Text Block */}
        <div className="flex-1 text-center md:pl-8">
          <div className="flex flex-col items-center mb-8">
            <Bolt size={48} className="text-[#E63946]" />
            <p className="text-gray-500 mt-4">
              Fast and reliable delivery service to get your jerseys quickly.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Handshake size={48} className="text-[#E63946]" />
            <p className="text-gray-500 mt-4">
              Trusted by thousands of fans for exceptional customer service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHighlights;
