"use client"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Image from "next/image"
import { useRef } from "react"

export function HomeCarousel() {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }))

  return (
    <Carousel
      plugins={[plugin.current]}
      onMouseLeave={plugin.current.reset}
      className="mx-auto flex justify-center w-full"
    >
      <CarouselContent>
        {Array.from({ length: 4 }).map((_, index, array) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="relative">
                <CardContent
                  className={`flex aspect-square items-center justify-center h-[300px] w-full z-10 `}
                >
                  <Image
                    src={`/carousel${index + 1}.png`}
                    fill
                    style={{ objectFit: "cover" }}
                    alt={`Carousel ${index + 1}`}
                    className="rounded-xl"
                  />
                  <div className="h-full flex items-end text-white text-lg md:text-2xl font-bold z-10">
                    Bali, Indonesia
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
