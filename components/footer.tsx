import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"

const footerSections = [
  {
    title: "Products",
    items: ["Ola S1 Pro", "Ola S1 Air", "Ola S1 X+", "Ola Gig", "Ola S1 Z", "Roadster", "Roadster X", "Roadster Pro"],
  },
  {
    title: "Tech & Design",
    items: ["Software", "Cell Tech", "Performance", "Design", "Gigafactory"],
  },
  {
    title: "Ownership",
    items: ["Ola Electric Store", "4000 Stores", "Hypercharger", "Accessories", "Battery Warranty", "Hyperservice"],
  },
  {
    title: "Company",
    items: [
      "About Us",
      "Investor",
      "Manufacturing",
      "Newsroom",
      "Careers",
      "Community",
      "Referrals",
      "Krutrim",
      "Future Factory",
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Subscribe to learn about our latest news</h3>
          <div className="flex">
            <Input type="email" placeholder="Enter your email" className="mr-2" />
            <Button>→</Button>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-bold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a href="#" className="hover:text-gray-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center border-t border-gray-700 pt-8">
          <div>
            <Image src="/placeholder.svg?height=40&width=80&text=OLA" alt="OLA" width={80} height={40} />
            <p className="mt-2 text-sm">Copyright © 2024 Ola Electric Mobility Ltd. All Rights Reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300">
              <Facebook />
            </a>
            <a href="#" className="hover:text-gray-300">
              <Twitter />
            </a>
            <a href="#" className="hover:text-gray-300">
              <Instagram />
            </a>
            <a href="#" className="hover:text-gray-300">
              <Linkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

