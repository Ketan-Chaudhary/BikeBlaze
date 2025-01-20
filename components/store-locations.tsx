import { Button } from "@/components/ui/button"
import Image from "next/image"

const stores = [
  {
    name: "Ola Electric Store, Jayanagar",
    address: "#363, Ground floor, 10th B Main Rd, Jayanagar 3rd Block, Jayanagar, Bengaluru, Karnataka 560011",
  },
  {
    name: "Ola Electric Store, Rr Nagar",
    address:
      "Bhoopanna Building, Kenchena Halli Rd, Janankshi Layout, 5th Stage, RR Nagar, Bengaluru, Karnataka 560098",
  },
  {
    name: "Ola Electric Store, Yelahanka",
    address: "290-284, 15th A Cross Rd, Yelahanka Satellite Town, Yelahanka, Bengaluru, Karnataka 560064",
  },
]

export function StoreLocations() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Come on over. Meet us in Bangalore</h2>
        <p className="text-center text-xl mb-12">
          Ola Electric Stores. Because nothing beats a one on one with the S1.
        </p>
        <div className="relative mb-12">
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="Ola Electric Store"
            width={1200}
            height={600}
            className="w-full rounded-lg"
          />
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
            <Button size="icon" variant="outline" className="bg-white text-black hover:bg-gray-200">
              &lt;
            </Button>
          </div>
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
            <Button size="icon" variant="outline" className="bg-white text-black hover:bg-gray-200">
              &gt;
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {stores.map((store, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">{store.name}</h3>
              <p className="text-gray-600 mb-4">{store.address}</p>
              <Button>Schedule a visit →</Button>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button variant="link" className="text-blue-600 text-lg">
            More about Ola Electric Stores →
          </Button>
        </div>
      </div>
    </section>
  )
}

