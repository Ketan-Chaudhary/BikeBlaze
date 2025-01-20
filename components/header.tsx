"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const products = [
  [
    {
      name: "Ola S1 Pro",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-20%20085956-KOg4TX2CpXfXagz0UlRepJrM9LMv0l.png",
      href: "#",
    },
    {
      name: "Ola S1 Air",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-20%20085956-KOg4TX2CpXfXagz0UlRepJrM9LMv0l.png",
      href: "#",
    },
    {
      name: "Ola S1 X",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-20%20085956-KOg4TX2CpXfXagz0UlRepJrM9LMv0l.png",
      href: "#",
    },
  ],
  [
    {
      name: "Ola S1 Z",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-20%20085956-KOg4TX2CpXfXagz0UlRepJrM9LMv0l.png",
      href: "#",
    },
    {
      name: "Ola Gig",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-20%20085956-KOg4TX2CpXfXagz0UlRepJrM9LMv0l.png",
      href: "#",
    },
  ],
  [
    {
      name: "Roadster X",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-20%20085956-KOg4TX2CpXfXagz0UlRepJrM9LMv0l.png",
      href: "#",
    },
    {
      name: "Roadster",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-20%20085956-KOg4TX2CpXfXagz0UlRepJrM9LMv0l.png",
      href: "#",
    },
    {
      name: "Roadster Pro",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-20%20085956-KOg4TX2CpXfXagz0UlRepJrM9LMv0l.png",
      href: "#",
    },
  ],
]

const navigation = [
  {
    title: "Tech & Design",
    items: ["Software", "Cell Tech", "Manufacturing", "Performance", "Design"],
  },
  {
    title: "Ownership",
    items: [
      "Electric Store",
      "Hypercharger",
      "Community",
      "Referrals",
      "Hyperservice",
      "Battery Warranty",
      "Break All Barriers",
      "Accessories",
      "Charger Refund",
    ],
  },
  {
    title: "Our Company",
    items: ["About Us", "Investor Relations", "News & Events", "Blogs", "Careers", "Partner with us"],
  },
  {
    title: "Account",
    items: ["Sign in", "Support"],
  },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
        ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Image src="/placeholder.svg" alt="OLA" width={80} height={40} />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`${isScrolled ? "text-black" : "text-white"} ${isMenuOpen ? "hidden" : ""}`}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 overflow-y-auto">
          <div className="container mx-auto px-4 pt-8 pb-16">
            <div className="flex justify-end mb-4">
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)} className="hover:bg-transparent">
                <X className="h-6 w-6" />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-x-16">
              {/* Products Section */}
              <div className="space-y-20">
                {products.map((row, rowIndex) => (
                  <div key={rowIndex} className="grid grid-cols-3 gap-x-8">
                    {row.map((product, index) => (
                      <Link key={index} href={product.href} className="group text-center">
                        <div className="relative aspect-square mb-4 bg-[#f8f8f8] rounded-lg overflow-hidden">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            fill
                            className="object-contain p-6 transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <span className="text-sm font-normal text-gray-900">{product.name}</span>
                      </Link>
                    ))}
                  </div>
                ))}
              </div>

              {/* Navigation Section */}
              <div className="grid grid-cols-4 gap-x-8">
                {navigation.map((column, index) => (
                  <div key={index} className="space-y-8">
                    <h3 className="text-sm font-normal text-gray-500">{column.title}</h3>
                    <ul className="space-y-4">
                      {column.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <Link href="#" className="text-sm text-gray-900 hover:text-gray-600 transition-colors">
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

