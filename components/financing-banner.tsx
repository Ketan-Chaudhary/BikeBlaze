import { Button } from "@/components/ui/button"

export function FinancingBanner() {
  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">ENJOY EASY FINANCING BENEFITS ON THE OLA S1</h2>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>Zero worries with a 0% processing fee</li>
          <li>Zero Down payment</li>
          <li>Interest rates now starting at just 6.99% across an array of banking partners</li>
        </ul>
        <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
          Learn More →
        </Button>
      </div>
    </section>
  )
}

