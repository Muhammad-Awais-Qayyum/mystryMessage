'use client'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import AutoPlay from 'embla-carousel-autoplay'
import messages from '../../messages.json'
export default function Home() {
 
  return (
    <>
    <main className=" flex-grow flex flex-col items-center justify-center px-3 md:px-24 py-12">
      <section className=" text-center mb-8 md:mb-12">
        <h1   style={{fontFamily:'cursive' }} className="transparent-text gradient-span text-2xl md:text-4xl font-bold">
          Dive into the World of Anonymous Conversations
        </h1>
        <p style={{fontFamily:'cursive' }}  className=" mt-3 md:mt-4  text-base md:text-lg">
          Explore Mystery Message - Where your identity remain a secret.
        </p>
      </section>


      <Carousel
        plugins={[AutoPlay({ delay: 2000 })]}
        className="w-full max-w-xs">
        <CarouselContent>
          {
            messages.map((message, index) => (<CarouselItem key={index}>
              <div className="">
                <Card>
                  <CardHeader style={{fontFamily:'cursive' }}  className=" text-center">
                    {message.title}
                  </CardHeader>
                  <CardContent className="flex aspect-video items-center justify-center ">
                    <span style={{fontFamily:'cursive' }}  className="text-lg text-center font-semibold">{message.content}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>))
          }
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

    </main>
    <footer style={{fontFamily:'cursive' }}  className=" text-center p-1">
    &copy; 2024 Your Mystery Message. All rights reserved.
    </footer>
    </>
  );
}
