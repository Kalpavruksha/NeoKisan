'use client'

import { useState } from 'react'

interface ProductImageProps {
  src: string
  alt: string
  fallbackText: string
}

export default function ProductImage({ src, alt, fallbackText }: ProductImageProps) {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-100">
        <span className="text-gray-400 text-lg">{fallbackText}</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-contain object-center p-6 hover:scale-105 transition-transform duration-300"
      onError={() => setHasError(true)}
    />
  )
}

