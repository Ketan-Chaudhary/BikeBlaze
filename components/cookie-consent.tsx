"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#1a1a1a] text-white p-4 flex items-center justify-between">
      <p className="text-sm text-gray-300">
        We use cookies to ensure that we give you the best experience.{" "}
        <a href="#" className="underline">
          Learn more
        </a>
        .
      </p>
      <Button onClick={() => setIsVisible(false)} className="bg-green-600 hover:bg-green-700">
        Got it
      </Button>
    </div>
  )
}

