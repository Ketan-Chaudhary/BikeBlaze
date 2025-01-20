"use client";

import { X } from "lucide-react";
import { useState } from "react";

export function NotificationBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-[#1a1a1a] text-white py-2 px-4 text-center relative">
      <p className="text-sm text-gray-300">
        Switch to India&apos;s #1 EV with up to ₹20,000 off on the Ola S1. S1 now starts at ₹69,999.{" "}
        <a href="#" className="text-green-500 hover:underline">
          Know more
        </a>
      </p>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
        aria-label="Close Notification"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}