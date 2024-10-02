import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface propsType {
  image: string;
  title: string;
  desc: string;
  price: number;
  rating: string;
  reviews: number;
}

export default function CardComponent(props: propsType) {
  return (
    <Card className="w-full max-w-fit px-5 bg-[#F7F7F7] sm:max-w-xs md:max-w-sm lg:max-w-sm xl:max-w-xs mx-auto overflow-hidden transition-all duration-300 ease-in-out">
      <CardHeader className="p-0">
        <div className="h-48 w-full"> {/* Fixed height for the image container */}
          <img
            src={props.image}
            alt={props.title}
            className="w-full h-full object-contain  transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>
      </CardHeader>
      <CardContent className="p-2 md:p-4">
        <CardTitle className="text-xs md:text-sm lg:text-base font-semibold mb-1 md:mb-2">
          {props.title}
        </CardTitle>
        <p className="text-xs md:text-sm lg:text-base text-gray-600 mb-1 md:mb-2">
          {props.desc}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-lg md:text-xl font-bold">${props.price}</span>
          <div className="flex items-center">
            <span className="text-yellow-500 mr-1">{props.rating}</span>
            <span className="text-xs md:text-sm lg:text-base text-gray-600">
              ({props.reviews})
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-2 md:p-4 pt-0">
        <Button className="bg-[#1D3557] hover:bg-[#457B9D] w-full text-xs md:text-sm py-1 md:py-2">
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
