'use client'

import { useState, useRef } from 'react'

interface ProductVideoProps {
  src: string
  poster: string
  title: string
}

export default function ProductVideo({ src, poster, title }: ProductVideoProps) {
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showOverlay, setShowOverlay] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setIsPlaying(true)
      setShowOverlay(false)
    }
  }

  if (hasError) {
    return (
      <div className="w-full aspect-video flex items-center justify-center bg-gray-100 rounded-2xl">
        <div className="text-center p-4">
          <p className="text-gray-400 text-sm mb-2">Video unavailable</p>
          <p className="text-gray-500 text-xs">{title}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full rounded-2xl overflow-hidden shadow-xl ring-2 ring-primary-200/50 bg-black group cursor-pointer" onClick={handlePlay}>
      <video
        ref={videoRef}
        className="w-full h-auto"
        controls={isPlaying}
        playsInline
        preload="metadata"
        poster={poster}
        onError={() => {
          setHasError(true)
          setIsLoading(false)
        }}
        onLoadedData={() => setIsLoading(false)}
        onCanPlay={() => setIsLoading(false)}
        onPause={() => {
          setIsPlaying(false)
          setShowOverlay(true)
        }}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Play Overlay with Description */}
      {showOverlay && !isPlaying && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity duration-300 group-hover:bg-black/70">
          <div className="text-center p-6">
            {/* Play Button */}
            <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center mb-4 shadow-2xl group-hover:scale-110 transition-transform duration-300 mx-auto">
              <svg className="w-10 h-10 text-primary-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            {/* Description Text */}
            <p className="text-white text-lg font-bold mb-2">Click here to see the demo</p>
            <p className="text-white/90 text-sm max-w-xs mx-auto">{title}</p>
            <p className="text-white/70 text-xs mt-3">Watch the tool in action</p>
          </div>
        </div>
      )}

      {isLoading && !showOverlay && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <div className="text-white text-sm">Loading video...</div>
        </div>
      )}
      
      {/* Title Overlay at Bottom */}
      {isPlaying && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-4 pointer-events-none">
          <p className="text-white text-sm font-semibold">{title}</p>
        </div>
      )}
    </div>
  )
}
