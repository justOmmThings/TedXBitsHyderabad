"use client"

import * as React from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { gallery as galleryConfig } from "@/data/config"

export default function GalleryPage() {
    const originalSlides = React.useMemo(() => galleryConfig.slides, [])

    // Create infinite loop by duplicating slides: [slides, slides, slides]
    const slides = React.useMemo(() => [
        ...originalSlides,
        ...originalSlides,
        ...originalSlides
    ], [originalSlides])

    const originalCount = originalSlides.length
    const [index, setIndex] = React.useState(originalCount) // Start at the middle set
    const [isTransitioning, setIsTransitioning] = React.useState(true)

    // Drag / swipe handling state
    const [isDragging, setIsDragging] = React.useState(false)
    const [dragOffset, setDragOffset] = React.useState(0) // px offset while dragging
    const startXRef = React.useRef<number | null>(null)

    const goPrev = React.useCallback(() => {
        setIndex(prev => prev - 1)
    }, [])

    const goNext = React.useCallback(() => {
        setIndex(prev => prev + 1)
    }, [])

    // Handle infinite loop by resetting position when reaching boundaries
    React.useEffect(() => {
        if (index >= originalCount * 2) {
            // We've reached the end of the second set, jump to start of middle set
            const timer = setTimeout(() => {
                setIsTransitioning(false)
                setIndex(originalCount)
                // Re-enable transitions after a brief delay
                requestAnimationFrame(() => {
                    setIsTransitioning(true)
                })
            }, 350) // Match the transition duration
            return () => clearTimeout(timer)
        } else if (index < originalCount) {
            // We've reached the start of the first set, jump to start of second set
            const timer = setTimeout(() => {
                setIsTransitioning(false)
                setIndex(originalCount * 2 - 1)
                // Re-enable transitions after a brief delay
                requestAnimationFrame(() => {
                    setIsTransitioning(true)
                })
            }, 350) // Match the transition duration
            return () => clearTimeout(timer)
        }
    }, [index, originalCount])

    // Keyboard support: ArrowLeft / ArrowRight
    React.useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") {
                e.preventDefault()
                goPrev()
            } else if (e.key === "ArrowRight") {
                e.preventDefault()
                goNext()
            }
        }
        window.addEventListener("keydown", onKeyDown)
        return () => window.removeEventListener("keydown", onKeyDown)
    }, [goPrev, goNext])

    // Pointer / touch handlers (unified using pointer events)
    const onPointerDown = (e: React.PointerEvent) => {
        startXRef.current = e.clientX
        setIsDragging(true)
    }

    const onPointerMove = (e: React.PointerEvent) => {
        if (!isDragging || startXRef.current == null) return
        const delta = e.clientX - startXRef.current
        setDragOffset(delta)
    }

    const finishDrag = () => {
        if (startXRef.current == null) return
        const delta = dragOffset
        const threshold = 50 // slightly lower threshold for more responsive feel
        if (delta < -threshold) {
            goNext()
        } else if (delta > threshold) {
            goPrev()
        }
        // reset
        setDragOffset(0)
        setIsDragging(false)
        startXRef.current = null
    }

    const onPointerUp = () => finishDrag()
    const onPointerLeave = () => isDragging && finishDrag()

    // Preload all images once (prevents perceived delay on first navigation)
    React.useEffect(() => {
        if (typeof window === 'undefined') return
        originalSlides.forEach(slide => {
            const img = new window.Image()
            img.src = slide.src
        })
    }, [originalSlides])

    return (
        <main className="w-full relative overflow-hidden">
            <div className="relative z-10 w-full max-w-6xl pt-8 sm:pt-12 md:pt-16 pb-6 sm:pb-8 text-left px-6 md:px-12">
                <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight mb-8">
                    <span className="text-[#eb0027]">{galleryConfig.heading}</span>
                </h1>
                {galleryConfig.description && (
                    <p className="text-xl md:text-2xl leading-relaxed text-gray-300 max-w-3xl">
                        {galleryConfig.description}
                    </p>
                )}
            </div>
            {/* Full-bleed wrapper. Ensures edge-to-edge even inside a centered container */}
            <section
                className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen"
                aria-roledescription="carousel"
                aria-label="Gallery carousel"
            >
                <div
                    className="relative h-[55vh] xs:h-[60vh] sm:h-[65vh] md:h-[70vh] lg:h-[75vh] xl:h-[80vh] overflow-hidden touch-pan-y select-none"
                    onPointerDown={onPointerDown}
                    onPointerMove={onPointerMove}
                    onPointerUp={onPointerUp}
                    onPointerLeave={onPointerLeave}
                >
                    {/* Track */}
                    <div
                        id="carousel-track"
                        className={`flex h-full will-change-transform ${isDragging || !isTransitioning ? '' : 'transition-transform duration-350 ease-out'}`}
                        style={{ transform: `translateX(calc(-${index * 100}vw + ${dragOffset}px))` }}
                        aria-live="polite"
                    >
                        {slides.map((slide, i) => (
                            <div
                                key={`${i}-${slide.src}`}
                                className="relative h-full w-screen shrink-0 grow-0"
                                role="group"
                                aria-roledescription="slide"
                                aria-label={`${((i % originalCount) + 1)} of ${originalCount}`}
                            >
                                <Image
                                    src={slide.src || "/placeholder.svg"}
                                    alt={slide.alt}
                                    fill
                                    priority={Math.abs(i - index) <= 1} // prioritize current & neighbor for instant switch
                                    loading={Math.abs(i - index) <= 2 ? 'eager' : 'lazy'}
                                    decoding="async"
                                    sizes="100vw"
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Edge Navigation Buttons (vertically centered) */}
                    <button
                        type="button"
                        aria-label="Previous slide"
                        onClick={(e) => { e.stopPropagation(); goPrev(); }}
                        className="group absolute top-1/2 -translate-y-1/2 left-3 sm:left-4 md:left-8 h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center rounded-full border border-[#eb0027] bg-[#eb0027] text-white shadow-lg shadow-[#eb0027]/30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#eb0027]/60 hover:brightness-110 active:scale-95"
                    >
                        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 transition-transform group-hover:-translate-x-0.5" />
                    </button>
                    <button
                        type="button"
                        aria-label="Next slide"
                        onClick={(e) => { e.stopPropagation(); goNext(); }}
                        className="group absolute top-1/2 -translate-y-1/2 right-3 sm:right-4 md:right-8 h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center rounded-full border border-[#eb0027] bg-[#eb0027] text-white shadow-lg shadow-[#eb0027]/30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#eb0027]/60 hover:brightness-110 active:scale-95"
                    >
                        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 transition-transform group-hover:translate-x-0.5" />
                    </button>

                    {/* Removed slide counter per request */}

                </div>
            </section>
        </main>
    )
}
