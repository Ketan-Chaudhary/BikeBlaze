import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Sankalp2024() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Sankalp 2024</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-96">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Sankalp 2024 Event"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                Watch Sankalp 2024 Highlights
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {["The Future Of Motorcycling", "Bharat cell", "MoveOS 5", "Gen 3 Platform"].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">{item}</h3>
                <p className="text-gray-600 mb-4">
                  {index === 0 && "It's all about the journey within"}
                  {index === 1 && "Powering the future of India"}
                  {index === 2 && "An upgrade like never before"}
                  {index === 3 && "Advanced, scalable next-gen 2-wheeler platform"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

