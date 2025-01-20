import { Button } from "@/components/ui/button"
import Image from "next/image"

const newsItems = [
  {
    year: 2023,
    title: "Bhavish Aggarwal recognized on the inaugural TIME100 Climate List",
    source: "TIME",
    logo: "/placeholder.svg?height=50&width=100&text=TIME",
  },
  {
    year: 2023,
    title: "Ola electric rolls out last year end offers on S1 Air and S1 Pro",
    source: "HT Auto",
    logo: "/placeholder.svg?height=50&width=100&text=HTAuto",
  },
]

export function News() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Watch the Electric Revolution Unfold</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {newsItems.map((item, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold">{item.year}</span>
                <Image src={item.logo || "/placeholder.svg"} alt={item.source} width={100} height={50} />
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <Button variant="link" className="text-blue-600">
                Read More →
              </Button>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button variant="outline" className="mr-4">
            2023
          </Button>
          <Button variant="outline">2022</Button>
        </div>
      </div>
    </section>
  )
}

