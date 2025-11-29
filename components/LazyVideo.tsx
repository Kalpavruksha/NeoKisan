'use client'

import { useState, useEffect, useRef } from 'react'

interface LazyVideoProps {
  src: string
  poster: string
  className?: string
  autoPlay?: boolean
  muted?: boolean
  loop?: boolean
  playsInline?: boolean
}

export default function LazyVideo({
  src,
  poster,
  className = '',
  autoPlay = false,
  muted = true,
  loop = false,
  playsInline = true,
}: LazyVideoProps) {
  const [shouldLoad, setShouldLoad] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only load video when it's about to enter viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true)
            observer.disconnect()
          }
        })
      },
      { rootMargin: '50px' } // Start loading 50px before entering viewport
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className={className}>
      {shouldLoad ? (
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          playsInline={playsInline}
          preload="metadata"
          poster={poster}
          onLoadedData={() => setIsLoaded(true)}
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <div 
          className="absolute top-0 left-0 w-full h-full object-cover bg-cover bg-center"
          style={{ backgroundImage: `url(${poster})` }}
        />
      )}
      {shouldLoad && !isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <div className="text-white text-sm">Loading...</div>
        </div>
      )}
    </div>
  )
}

