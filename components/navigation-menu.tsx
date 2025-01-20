import { useState } from "react"
import { X, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export function NavigationMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setIsOpen(false)} />}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6">
          <button onClick={() => setIsOpen(false)} className="absolute right-6 top-6">
            <X className="h-6 w-6" />
          </button>
          <nav className="mt-16 space-y-6">
            <a href="#" className="block text-lg hover:text-gray-600">
              S1 Pro
            </a>
            <a href="#" className="block text-lg hover:text-gray-600">
              S1 Air
            </a>
            <a href="#" className="block text-lg hover:text-gray-600">
              S1 X
            </a>
            <a href="#" className="block text-lg hover:text-gray-600">
              Experience Centers
            </a>
            <a href="#" className="block text-lg hover:text-gray-600">
              Service
            </a>
            <a href="#" className="block text-lg hover:text-gray-600">
              Accessories
            </a>
            <a href="#" className="block text-lg hover:text-gray-600">
              Company
            </a>
          </nav>
          <div className="mt-8">
            <Button className="w-full mb-4">Book a Test Ride</Button>
            <Button variant="outline" className="w-full">
              Buy Now
            </Button>
          </div>
        </div>
      </div>
      <button onClick={() => setIsOpen(true)} className="text-white hover:text-gray-200">
        <Menu className="h-6 w-6" />
      </button>
    </>
  )
}

