"use client"

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, X, Play, Pause } from 'lucide-react'
import Image from 'next/image'

const WorkshopGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [imagesLoaded, setImagesLoaded] = useState<Set<number>>(new Set())

  // Generate image data
  const images = Array.from({ length: 26 }, (_, i) => ({
    id: i + 1,
    src: `/workshops-slide/${i + 1}.jpeg`,
    alt: `Workshop Session ${i + 1}`,
    title: `Workshop Session ${i + 1}`
  }))

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % images.length)
    }, 4000)
    
    return () => clearInterval(interval)
  }, [isAutoPlaying, images.length])

  const nextSlide = () => setCurrentSlide(prev => (prev + 1) % images.length)
  const prevSlide = () => setCurrentSlide(prev => (prev - 1 + images.length) % images.length)

  const openLightbox = (index: number) => setSelectedImage(index)
  const closeLightbox = () => setSelectedImage(null)

  const nextInLightbox = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length)
    }
  }

  const prevInLightbox = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length)
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-xl">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
            Workshop Gallery
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the energy and innovation from our hands-on AI workshops
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-8"></div>
        </div>

        {/* Main Slider */}
        <div className="relative mb-12 max-w-6xl mx-auto">
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden bg-gray-800 shadow-2xl">
            <div 
              className="flex h-full transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {images.map((image, index) => (
                <div key={image.id} className="min-w-full h-full relative">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                    onClick={() => openLightbox(index)}
                    onLoad={() => setImagesLoaded(prev => new Set([...prev, index]))}
                    priority={index < 3}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  {/* <div className="absolute bottom-8 left-8 text-white">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">{image.title}</h3>
                    <p className="text-sm md:text-base opacity-90">
                      {index + 1} of {images.length}
                    </p>
                  </div> */}
                </div>
              ))}
            </div>

            {/* Navigation Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-200 group"
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-200 group"
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>

            {/* Auto-play Toggle */}
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-200"
            >
              {isAutoPlaying ? (
                <Pause className="w-5 h-5 text-white" />
              ) : (
                <Play className="w-5 h-5 text-white" />
              )}
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Thumbnail Grid */}
        {/* <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-4 max-w-7xl mx-auto">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`relative aspect-square rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                index === currentSlide ? 'ring-2 ring-blue-500 scale-105' : ''
              }`}
              onClick={() => {
                setCurrentSlide(index)
                openLightbox(index)
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300" />
              {index === currentSlide && (
                <div className="absolute inset-0 bg-blue-500/20" />
              )}
            </div>
          ))}
        </div> */}

        {/* Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl font-bold text-blue-400 mb-2">26+</div>
            <h3 className="text-xl font-semibold text-white mb-2">Workshop Sessions</h3>
            <p className="text-gray-400">Comprehensive learning experiences</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-purple-400 mb-2">500+</div>
            <h3 className="text-xl font-semibold text-white mb-2">Participants</h3>
            <p className="text-gray-400">Engaged learners worldwide</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-green-400 mb-2">100%</div>
            <h3 className="text-xl font-semibold text-white mb-2">Hands-on</h3>
            <p className="text-gray-400">Practical learning approach</p>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-7xl max-h-full">
            <Image
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              width={1200}
              height={800}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Navigation in Lightbox */}
            <button
              onClick={prevInLightbox}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-3 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={nextInLightbox}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-3 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Image Info */}
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold mb-1">{images[selectedImage].title}</h3>
              <p className="text-sm opacity-75">
                {selectedImage + 1} of {images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default WorkshopGallery