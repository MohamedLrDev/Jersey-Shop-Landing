import { Quote, User } from "lucide-react"; // Importing Lucide icons

interface reviews {
  content: string;
  title: string;
  author: string;
  location: string;
}

const Reviews = ({ content, author, title, location }: reviews) => {
  return (
    <section className="w-full text-[#1D3557] dark:text-white mt-7 relative">
      {/* Content */}
      <div className="relative max-w-screen-xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 2xl:px-96 text-center space-y-6">
        {/* Title */}
        <h1 className="sm:max-3xl:text-3xl text-2xl font-bold uppercase">{title}</h1>

        {/* Quote Section */}
        <div className="flex flex-col items-center space-y-4">
          <Quote size={40} /> {/* Lucide Quote Icon */}
          <User size={48} /> {/* Lucide User Icon */}
        </div>

        {/* Review Text */}
        <p className="text-sm md:text-base leading-relaxed">
          {content}
        </p>

        {/* Author */}
        <h2 className="font-bold text-lg">{author}__{location}</h2>
      </div>
    </section>
  );
};

export default Reviews;
