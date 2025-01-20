import Image from "next/image"
import { Star } from "lucide-react"

export function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-lg">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "The Ola S1 has transformed my daily commute. It's efficient, stylish, and the performance is
                outstanding."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-200 mr-4" />
                <div>
                  <h4 className="font-semibold">Customer Name</h4>
                  <p className="text-sm text-gray-500">S1 Pro Owner</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

