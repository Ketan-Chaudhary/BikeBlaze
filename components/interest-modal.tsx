"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

export function InterestModal() {
  const [isOpen, setIsOpen] = useState(true)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full relative">
        <button onClick={() => setIsOpen(false)} className="absolute right-4 top-4 text-gray-500 hover:text-gray-700">
          <X className="h-5 w-5" />
        </button>
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">Are you interested to get home the Ola Scooter?</h2>
          <Input type="text" placeholder="Name" className="w-full" />
          <Input type="tel" placeholder="Phone Number" className="w-full" />
          <Input type="text" placeholder="Pincode" className="w-full" />
          <div className="flex items-center space-x-2">
            <Checkbox id="whatsapp" />
            <label htmlFor="whatsapp" className="text-sm text-gray-600">
              Get updates on Whatsapp
            </label>
          </div>
          <Button className="w-full bg-gray-600 hover:bg-gray-700">I&apos;m Interested</Button>
        </div>
      </div>
    </div>
  )
}

