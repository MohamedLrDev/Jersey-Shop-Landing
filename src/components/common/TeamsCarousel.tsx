
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function TeamsCarousel() {
  const items = [
    {
      title: "Premium Football Jersey",
      description: "Official team colors and design",
      price: "$89.99",
      rating: "★★★★",
      reviews: 42,
      image: "https://placehold.co/300x300"
    },
    {
      title: "Deluxe Basketball Shoes",
      description: "High-performance court shoes",
      price: "$129.99",
      rating: "★★★★★",
      reviews: 58,
      image: "https://placehold.co/300x300"
    },
    {
      title: "Pro Tennis Racket",
      description: "Lightweight and powerful",
      price: "$199.99",
      rating: "★★★★½",
      reviews: 36,
      image: "https://placehold.co/300x300"
    },
    {
      title: "Pro Tennis Racket",
      description: "Lightweight and powerful",
      price: "$199.99",
      rating: "★★★★½",
      reviews: 36,
      image: "https://placehold.co/300x300"
    }
  ]

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-5xl my-7 mx-auto"
    >
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 ">
            <Card className="w-full max-w-sm mx-auto overflow-hidden">
              <CardHeader className="p-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-lg font-semibold mb-2">{item.title}</CardTitle>
                <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold">{item.price}</span>
                  <div className="flex items-center">
                    <span className="text-yellow-500 mr-1">{item.rating}</span>
                    <span className="text-sm text-gray-600">({item.reviews})</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full">Add to Cart</Button>
              </CardFooter>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}