"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const products = [
  {
    name: "OLA S1 Pro",
    specs: "195km Range | 0-40 km/h in 2.6 sec",
    price: "Starting at ₹3,299/month OR ₹1,29,999",
    image: "/placeholder.svg?height=400&width=600&text=S1Pro",
  },
  {
    name: "OLA S1 Air",
    specs: "151km Range | 0-40 km/h in 3.3 sec",
    price: "Starting at ₹2,699/month OR ₹1,07,499",
    image: "/placeholder.svg?height=400&width=600&text=S1Air",
  },
  {
    name: "OLA S1X",
    specs: "193km Range | 0-40 km/h in 3.3 sec",
    price: "Starting at ₹1,899/month OR ₹69,999",
    image: "/placeholder.svg?height=400&width=600&text=S1X",
  },
]

export function ProductShowcase() {
  const [currentProduct, setCurrentProduct] = useState(0)

  const goToPrevProduct = () => {
    setCurrentProduct((prev) => (prev - 1 + products.length) % products.length)
  }

  const goToNextProduct = () => {
    setCurrentProduct((prev) => (prev + 1) % products.length)
  }

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">There's an S1 for everyone</h2>
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentProduct * 100}%)` }}
            >
              {products.map((product, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-2xl mx-auto">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={600}
                      height={400}
                      className="w-full"
                    />
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                      <p className="text-gray-600 mb-4">{product.specs}</p>
                      <p className="font-semibold mb-4">{product.price}</p>
                      <div className="flex justify-between items-center">
                        <Button variant="link" className="text-blue-600">
                          View in 360° →
                        </Button>
                        <Button variant="link" className="text-blue-600">
                          Video Brochure
                        </Button>
                      </div>
                      <Button className="w-full mt-4">Explore {product.name.split(" ")[1]} →</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 transform -translate-y-1/2"
            onClick={goToPrevProduct}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 transform -translate-y-1/2"
            onClick={goToNextProduct}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        </div>
        <div className="flex justify-center mt-6 space-x-2">
          {products.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${index === currentProduct ? "bg-blue-600" : "bg-gray-300"}`}
              onClick={() => setCurrentProduct(index)}
            />
          ))}
        </div>
        <div className="text-center mt-8">
          <Button variant="link" className="text-blue-600 text-lg">
            More about Ola S1 series →
          </Button>
        </div>
      </div>
    </section>
  )
}

