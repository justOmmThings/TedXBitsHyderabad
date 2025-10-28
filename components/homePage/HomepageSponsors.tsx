"use client"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { config } from "@/data/config"

interface HomepageSponsorsProps {
    className?: string
}

export function HomepageSponsors({ className }: HomepageSponsorsProps) {
    const [isDesktop, setIsDesktop] = useState(true)

    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 768px)")
        const update = () => setIsDesktop(mediaQuery.matches)
        update()
        mediaQuery.addEventListener("change", update)
        return () => mediaQuery.removeEventListener("change", update)
    }, [])

    const LogoWrapper = ({ src, alt }: { src: string; alt: string }) => (
        <motion.div
            className={cn(
                "p-4 flex-shrink-0 min-w-fit cursor-pointer group",
                config.animation.useGlassyBg &&
                "bg-white/10 backdrop-blur-md rounded-xl shadow-md border border-white/10"
            )}
            whileHover={{
                scale: 1.05,
                transition: { duration: 0.2, ease: "easeOut" }
            }}
            whileTap={{ scale: 0.95 }}
        >
            <Image
                src={src}
                alt={alt}
                width={300}
                height={150}
                className="max-h-[150px] w-auto filter grayscale group-hover:grayscale-0 transition-all duration-300"
            />
        </motion.div>
    )

    const renderMarqueeRow = (reverse = false, key = "row") => (
        <div className="relative w-full overflow-hidden pt-2 pb-4">
            <motion.div
                className="flex gap-x-8 w-max"
                style={{ willChange: "transform" }}
                animate={{
                    x: reverse ? ["-50%", "0%"] : ["0%", "-50%"]
                }}
                transition={{
                    duration: config.animation.animationDuration,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "loop",
                    repeatDelay: 0,
                    type: "tween"
                }}
            >
                {/* Create enough duplicates for smooth infinite scroll */}
                {Array.from({ length: 20 }, (_, setIndex) =>
                    config.images.sponsorLogos.map((logo, i) => (
                        <LogoWrapper
                            key={`${key}-set${setIndex}-logo${i}`}
                            src={logo}
                            alt={`Logo ${i + 1}`}
                        />
                    ))
                )}
            </motion.div>
        </div>
    )

    return (
        <motion.section
            className={cn("w-full py-16 md:py-20 lg:py-24 bg-[#1f1f1f] overflow-hidden", className)}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
                <motion.h2
                    className="text-3xl font-bold tracking-tighter text-center mb-4 sm:text-4xl md:text-5xl text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {config.event.sponsorSection.title}
                </motion.h2>
                <motion.p
                    className="text-white/70 text-center max-w-2xl mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    {config.event.sponsorSection.description}
                </motion.p>
            </div>
            {renderMarqueeRow(false, "row1")}
            {config.animation.enableDoubleRow && isDesktop && renderMarqueeRow(true, "row2")}
        </motion.section>
    )
}