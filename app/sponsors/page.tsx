"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import Footer from "@/components/Footer"
import { useRef, useEffect } from "react"

interface SponsorTier {
    title: string
    subtitle: string
    sponsors: { name: string; logo: string }[]
    tierColor: string
    bgGradient: string
}

const sponsorTiers: SponsorTier[] = [
    {
        title: "Platinum Sponsor",
        subtitle: "Our Premier Partner",
        tierColor: "text-gray-200",
        bgGradient: "from-gray-400/10 to-gray-300/10",
        sponsors: [
            { name: "Platinum Sponsor", logo: "/sponsors-2020/sponsor1_2024.png" }
        ]
    },
    {
        title: "Food Partner",
        subtitle: "Fueling Innovation",
        tierColor: "text-orange-400",
        bgGradient: "from-orange-500/10 to-amber-500/10",
        sponsors: [
            { name: "Food Partner", logo: "/sponsors-2020/sponsor2_2024.png" }
        ]
    },
    {
        title: "Logistics Partner",
        subtitle: "Keeping Us Moving",
        tierColor: "text-blue-400",
        bgGradient: "from-blue-500/10 to-cyan-500/10",
        sponsors: [
            { name: "Logistics Partner", logo: "/sponsors-2020/sponsor3_2024.png" }
        ]
    },
    {
        title: "Travel Partner",
        subtitle: "Making Connections Possible",
        tierColor: "text-green-400",
        bgGradient: "from-green-500/10 to-emerald-500/10",
        sponsors: [
            { name: "Travel Partner", logo: "/sponsors-2020/sponsor4_2024.png" }
        ]
    },
    {
        title: "Gaming Partner",
        subtitle: "Powering Play",
        tierColor: "text-purple-400",
        bgGradient: "from-purple-500/10 to-violet-500/10",
        sponsors: [
            { name: "Gaming Partner", logo: "/sponsors-2020/sponsor5_2024.png" }
        ]
    },
    {
        title: "Luxury Partner",
        subtitle: "Elevating Excellence",
        tierColor: "text-yellow-400",
        bgGradient: "from-yellow-500/10 to-amber-500/10",
        sponsors: [
            { name: "Luxury Partner", logo: "/sponsors-2020/sponsor6_2024.png" }
        ]
    }
]

const additionalSponsors = [
    { name: "Sponsor 7", logo: "/sponsors-2020/sponsor7_2024.png" },
    { name: "Audi", logo: "/sponsors-2020/audi.png" },
    { name: "SBI", logo: "/sponsors-2020/sbi.png" },
    { name: "Sky Events", logo: "/sponsors-2020/skyevents.jpg" },
    { name: "Red Bull", logo: "/sponsors-2020/2.png" },
    { name: "Portronics", logo: "/sponsors-2020/3.png" },
    { name: "Monster", logo: "/sponsors-2020/4.png" },
    { name: "Ixigo", logo: "/sponsors-2020/5.png" },
    { name: "Gamooga", logo: "/sponsors-2020/6.png" }
]

// List of logos that are completely black and should be inverted to white
const blackLogos: string[] = []

// Animated Network Background Component
const NetworkBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const animationIdRef = useRef<number | undefined>(undefined)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        resizeCanvas()

        // Particle system
        const particles: Array<{
            x: number
            y: number
            vx: number
            vy: number
            radius: number
        }> = []
        const numParticles = 60
        const maxDistance = 150

        // Create particles
        for (let i = 0; i < numParticles; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.8,
                vy: (Math.random() - 0.5) * 0.8,
                radius: Math.random() * 1.5 + 1,
            })
        }

        let isRunning = true

        // Animation loop
        const animate = () => {
            if (!isRunning || !canvas || !ctx) return

            // Clear the canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Draw connections first (behind particles)
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[j].x - particles[i].x
                    const dy = particles[j].y - particles[i].y
                    const distance = Math.sqrt(dx * dx + dy * dy)

                    if (distance < maxDistance) {
                        const opacity = Math.max(0.2, (maxDistance - distance) / maxDistance * 0.7)

                        // Main line
                        ctx.beginPath()
                        ctx.moveTo(particles[i].x, particles[i].y)
                        ctx.lineTo(particles[j].x, particles[j].y)
                        ctx.strokeStyle = `rgba(236, 0, 36, ${opacity})`
                        ctx.lineWidth = 1.5
                        ctx.stroke()

                        // Glow effect
                        ctx.beginPath()
                        ctx.moveTo(particles[i].x, particles[i].y)
                        ctx.lineTo(particles[j].x, particles[j].y)
                        ctx.strokeStyle = `rgba(255, 100, 120, ${opacity * 0.3})`
                        ctx.lineWidth = 3
                        ctx.stroke()
                    }
                }
            }

            // Update and draw particles
            particles.forEach((particle) => {
                // Update position
                particle.x += particle.vx
                particle.y += particle.vy

                // Bounce off edges
                if (particle.x < 0 || particle.x > canvas.width) {
                    particle.vx *= -1
                    particle.x = Math.max(0, Math.min(canvas.width, particle.x))
                }
                if (particle.y < 0 || particle.y > canvas.height) {
                    particle.vy *= -1
                    particle.y = Math.max(0, Math.min(canvas.height, particle.y))
                }

                // Draw particle
                ctx.beginPath()
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
                ctx.fillStyle = 'rgba(255, 255, 255, 0.9)'
                ctx.fill()

                // Glow around dots
                ctx.beginPath()
                ctx.arc(particle.x, particle.y, particle.radius * 2, 0, Math.PI * 2)
                ctx.fillStyle = 'rgba(255, 255, 255, 0.1)'
                ctx.fill()
            })

            // Continue animation
            animationIdRef.current = requestAnimationFrame(animate)
        }

        // Start animation
        animate()

        // Handle resize
        const handleResize = () => {
            resizeCanvas()
            // Recreate particles for new canvas size
            particles.length = 0
            for (let i = 0; i < numParticles; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.8,
                    vy: (Math.random() - 0.5) * 0.8,
                    radius: Math.random() * 1.5 + 1,
                })
            }
        }

        window.addEventListener('resize', handleResize)

        // Cleanup function
        return () => {
            isRunning = false
            if (animationIdRef.current) {
                cancelAnimationFrame(animationIdRef.current)
            }
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{ background: 'transparent' }}
        />
    )
}

const SponsorCard = ({ sponsor, index }: { sponsor: { name: string; logo: string }, index: number }) => {
    const shouldInvert = blackLogos.includes(sponsor.name)

    return (
        <motion.div
            className="p-8 transition-all duration-300 group cursor-pointer max-w-md mx-auto w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{
                scale: 1.05
            }}
            whileTap={{ scale: 0.98 }}
        >
            <div className="relative w-full h-64 mb-6 flex items-center justify-center">
                <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    fill
                    className={`object-contain group-hover:brightness-110 group-hover:scale-105 transition-all duration-500 ${shouldInvert ? 'filter brightness-0 invert' : ''
                        }`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            <h3 className="text-white font-semibold text-center text-lg group-hover:text-white/90 transition-colors">
                {sponsor.name}
            </h3>
        </motion.div>
    )
}

const SponsorTierSection = ({ tier, index }: { tier: SponsorTier, index: number }) => (
    <motion.section
        className="py-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: index * 0.2 }}
    >
        <div className="container mx-auto px-4 md:px-6">
            <div className="p-4 mb-8">
                <motion.h2
                    className={cn("text-4xl md:text-5xl font-bold text-center mb-4", tier.tierColor)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                >
                    {tier.title}
                </motion.h2>
                <motion.p
                    className="text-white/70 text-center text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                >
                    {tier.subtitle}
                </motion.p>
            </div>

            <div className={cn(
                "grid gap-8",
                tier.sponsors.length === 1
                    ? "grid-cols-1 place-items-center"
                    : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            )}>
                {tier.sponsors.map((sponsor, sponsorIndex) => (
                    <SponsorCard
                        key={sponsor.name}
                        sponsor={sponsor}
                        index={sponsorIndex}
                    />
                ))}
            </div>
        </div>
    </motion.section>
)

export default function SponsorsPage() {
    return (
        <div className="relative flex flex-col min-h-[100dvh] bg-black text-white overflow-hidden">
            {/* Background particles spanning entire page including footer */}
            <NetworkBackground />

            {/* Content */}
            <div className="relative z-10 flex-1 pt-28 md:pt-32 pb-16">
                {/* Hero Section */}
                <motion.section
                    className="relative py-24 md:py-32 lg:py-40"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <div className="container mx-auto px-4 md:px-6 relative z-10">
                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent">
                                Our Sponsors
                            </h1>
                            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                                Meet the incredible organizations that make TEDxBITS Hyderabad possible.
                                Their support drives innovation and spreads ideas worth sharing.
                            </p>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Sponsor Tiers */}
                {sponsorTiers.map((tier, index) => (
                    <SponsorTierSection key={tier.title} tier={tier} index={index} />
                ))}

                {/* Additional Sponsors Section */}
                <motion.section
                    className="py-8"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: sponsorTiers.length * 0.2 }}
                >
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="p-4 mb-8">
                            <motion.h2
                                className="text-4xl md:text-5xl font-bold text-center mb-4 text-red-400"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 + sponsorTiers.length * 0.2 }}
                            >
                                Our Supporters
                            </motion.h2>
                            <motion.p
                                className="text-white/70 text-center text-lg"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 + sponsorTiers.length * 0.2 }}
                            >
                                Thank you to all our supporting partners
                            </motion.p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {additionalSponsors.map((sponsor, sponsorIndex) => (
                                <SponsorCard
                                    key={sponsor.name}
                                    sponsor={sponsor}
                                    index={sponsorIndex}
                                />
                            ))}
                        </div>
                    </div>
                </motion.section>

            </div>

            <div className="relative z-10">
                <Footer />
            </div>
        </div>
    )
}