import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Manufacturing() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-96">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Futurefactory"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <div className="absolute bottom-4 left-4">
              <h3 className="text-2xl font-bold text-white mb-2">Futurefactory</h3>
              <p className="text-white mb-4">Largest integrated and automated E2W manufacturing plant in India.</p>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                Learn more →
              </Button>
            </div>
          </div>
          <div className="relative h-96">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Gigafactory"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <div className="absolute bottom-4 left-4">
              <h3 className="text-2xl font-bold text-white mb-2">Gigafactory</h3>
              <p className="text-white mb-4">India's big leap in building the future of energy.</p>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                Learn more →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

