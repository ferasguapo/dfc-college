'use client'
import { useState } from 'react'

export default function AdBanner() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div className="fixed bottom-5 right-5 bg-white shadow-lg border border-gray-300 p-4 rounded-xl max-w-xs z-50">
      <button
        onClick={() => setVisible(false)}
        className="absolute top-1 right-2 text-gray-500 hover:text-gray-800"
      >
        ✖
      </button>
      <h3 className="font-bold text-lg mb-2">Sponsored Ad</h3>
      <p className="text-sm text-gray-700">
        🚀 Start your career today with top online certifications!
      </p>
      <a
        href="https://example.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline mt-2 inline-block"
      >
        Learn More
      </a>
    </div>
  )
}
