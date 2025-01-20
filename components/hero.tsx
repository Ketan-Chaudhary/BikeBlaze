"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    title: "SWITCH TO INDIA'S #1EV",
    subtitle: "Enjoy upto ₹20,000 off* on the Ola S1.",
    description: "S1 now starts at ₹69,999.",
    image: "/placeholder.svg?height=1080&width=1920&text=Slide1",
  },
  {
    title: "EXPERIENCE THE FUTURE",
    subtitle: "Revolutionary design meets cutting-edge technology.",
    description: "Ride the change with Ola Electric.",
    image: "/placeholder.svg?height=1080&width=1920&text=Slide2",
  },
  {
    title: "GO GREEN, GO ELECTRIC",
    subtitle: "Join the sustainable mobility revolution.",
    description: "Reduce your carbon footprint with Ola S1.",
    image: "/placeholder.svg?height=1080&width=1920&text=Slide3",
  },
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length)
  }

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">{slide.title}</h1>
            <p className="text-xl md:text-2xl mb-2">{slide.subtitle}</p>
            <p className="text-xl md:text-2xl mb-8">{slide.description}</p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                Buy Now →
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                Why Ola S1? →
              </Button>
            </div>
          </div>
        </div>
      ))}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white"
        onClick={goToPrevSlide}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white"
        onClick={goToNextSlide}
      >
        <ChevronRight className="h-8 w-8" />
      </Button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-white" : "bg-gray-400"}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  )
}

