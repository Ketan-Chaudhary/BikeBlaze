import Image from "next/image"
import { Battery, Zap, Timer } from "lucide-react"

export function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Why Choose Ola S1?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Battery className="h-12 w-12" />
            </div>
            <h3 className="text-xl font-semibold mb-4">181 km Range</h3>
            <p className="text-gray-600">Industry-leading range that takes you further on a single charge</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Zap className="h-12 w-12" />
            </div>
            <h3 className="text-xl font-semibold mb-4">116 km/h Top Speed</h3>
            <p className="text-gray-600">Powerful performance for an exhilarating ride</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Timer className="h-12 w-12" />
            </div>
            <h3 className="text-xl font-semibold mb-4">0-40 in 2.8s</h3>
            <p className="text-gray-600">Quick acceleration for urban mobility</p>
          </div>
        </div>
      </div>
    </section>
  )
}

