import { Button } from "@/components/ui/button"
import Image from "next/image"

const gigModels = [
  {
    name: "OLA Gig",
    specs: "112km range | 25 kmph top speed | Single portable battery",
    price: "Introductory price ₹39,999",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "OLA Gig+",
    specs: "Up to 157km Range | 45 kmph top speed | Up to 2 portable batteries",
    price: "Introductory price ₹49,999*",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export function GigModels() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Your reliable partner for every gig</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {gigModels.map((model, index) => (
            <div key={index} className="bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={model.image || "/placeholder.svg"}
                alt={model.name}
                width={600}
                height={400}
                className="w-full"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{model.name}</h3>
                <p className="text-gray-600 mb-4">{model.specs}</p>
                <p className="font-semibold mb-4">{model.price}</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="flex-1">Reserve at ₹499 →</Button>
                  <Button variant="outline" className="flex-1">
                    Explore {model.name.split(" ")[1]} →
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

