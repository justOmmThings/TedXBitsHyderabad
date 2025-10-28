"use client"

import React, { useEffect, useRef, useState, type ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Dialog } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Linkedin } from "lucide-react"
import { config } from "@/data/config"
import Footer from "@/components/Footer"

// --- TYPES ---
interface TeamMember {
    name: string
    role: string
    photo: string
    quote: string
    linkedin: string
    contactInfo?: string
}

// --- UTILITY COMPONENTS ---
const SmoothScrollProvider = ({ children }: { children: ReactNode }) => {
    useEffect(() => {
        import("@studio-freight/lenis").then((module) => {
            const Lenis = module.default
            const lenis = new Lenis({
                duration: 0.8,
                easing: (t: number) => t,
                touchMultiplier: 2.5,
                infinite: false,
            })

            function raf(time: number) {
                lenis.raf(time)
                requestAnimationFrame(raf)
            }

            requestAnimationFrame(raf)

            return () => {
                lenis.destroy()
            }
        })
    }, [])

    return <>{children}</>
}

function ScrollProgressIndicator() {
    const { scrollYProgress } = useScroll()
    const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-[#eb0027] z-[51] origin-[0%]"
            style={{ scaleX }}
        />
    )
}

// --- NETWORK BACKGROUND COMPONENT ---
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
                        // Significantly increased opacity with minimum base opacity
                        const opacity = Math.max(0.2, (maxDistance - distance) / maxDistance * 0.7)

                        // Begin new path for each line
                        ctx.beginPath()
                        ctx.moveTo(particles[i].x, particles[i].y)
                        ctx.lineTo(particles[j].x, particles[j].y)
                        ctx.strokeStyle = `rgba(236, 0, 36, ${opacity})` // TEDx red with much higher opacity
                        ctx.lineWidth = 1.5 // Thicker lines for better visibility
                        ctx.stroke()

                        // Add a subtle glow effect for even more prominence
                        ctx.beginPath()
                        ctx.moveTo(particles[i].x, particles[i].y)
                        ctx.lineTo(particles[j].x, particles[j].y)
                        ctx.strokeStyle = `rgba(255, 100, 120, ${opacity * 0.3})` // Lighter red glow
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

                // Draw particle (white vertices with subtle glow)
                // Main white dot
                ctx.beginPath()
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
                ctx.fillStyle = 'rgba(255, 255, 255, 0.9)' // Increased opacity for dots
                ctx.fill()

                // Subtle glow around dots
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

// --- TEAM MEMBER MODAL ---
interface TeamMemberModalProps {
    member: TeamMember
    onClose: () => void
}

function TeamMemberModal({ member, onClose }: TeamMemberModalProps) {
    return (
        <Dialog open={true} onOpenChange={onClose}>
            <div className="fixed inset-0 flex items-center justify-center z-[100] bg-black/90 p-2 sm:p-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="relative bg-neutral-900 w-[96%] max-w-lg sm:w-full sm:max-w-7xl h-auto max-h-[99vh] sm:h-[90vh] md:h-full md:max-h-[90vh] flex flex-col md:flex-row overflow-hidden rounded-lg shadow-2xl"
                >
                    {/* Close Button */}
                    <button
                        className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-400 hover:text-white text-2xl sm:text-3xl z-20 bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition-all"
                        onClick={onClose}
                        aria-label="Close"
                    >
                        &times;
                    </button>

                    {/* Left: Rotated Name (Desktop only) */}
                    <div className="hidden lg:flex items-center justify-center p-4 bg-black text-white flex-shrink-0 w-[120px] xl:w-[150px]">
                        <div className="transform -rotate-90 whitespace-nowrap text-3xl xl:text-5xl font-extrabold tracking-wider origin-center py-6 xl:py-8 px-3 xl:px-4">
                            {member.name}
                        </div>
                    </div>

                    {/* Center: Photo */}
                    <div className="relative flex-1 min-h-[240px] sm:min-h-[280px] md:min-h-full overflow-hidden">
                        <Image
                            src={member.photo || "/placeholder.svg"}
                            alt={member.name}
                            fill
                            className="object-cover object-center"
                            priority
                        />
                    </div>

                    {/* Right: Details */}
                    <div className="flex-1 p-4 sm:p-6 md:p-8 flex flex-col justify-between text-gray-200 md:w-[280px] lg:w-[320px] xl:w-[350px] overflow-y-auto">
                        <div className="flex flex-col items-center md:items-start mb-3 md:mb-6">
                            <h3 className="text-xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 lg:hidden text-center md:text-left">{member.name}</h3>
                            <p className="text-base sm:text-xl font-semibold text-gray-300 mb-2 sm:mb-4 text-center md:text-left">{member.role}</p>
                            <blockquote className="text-sm sm:text-lg italic text-center md:text-left mb-3 sm:mb-6 border-l-4 border-[#eb0027] pl-3 sm:pl-4 leading-relaxed">
                                &ldquo;{member.quote}&rdquo;
                            </blockquote>
                        </div>

                        <div className="flex flex-col items-center md:items-start mt-auto space-y-2">
                            {member.linkedin && (
                                <Link
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-[#eb0027] hover:text-[#b8001d] transition-colors text-sm sm:text-base"
                                >
                                    <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                                    <span>LinkedIn Profile</span>
                                </Link>
                            )}
                            {member.contactInfo && <p className="text-sm sm:text-base text-gray-400 text-center md:text-left">{member.contactInfo}</p>}
                        </div>
                    </div>
                </motion.div>
            </div>
        </Dialog>
    )
}

// --- HERO SECTION FOR EXECUTIVES ---
function ExecutivesHeroSection() {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    })

    const y = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"])
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1])

    return (
        <section
            ref={ref}
            className="relative h-[100dvh] flex items-center justify-center text-white overflow-hidden"
        >
            <motion.h1
                className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-extrabold text-center leading-tight px-4 sm:px-6"
                style={{ y, scale }}
            >
                <span className="text-[#eb0027] uppercase">TEDx</span>
                <br />
                BITS Hyderabad
                <br />
                <span className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">TEAM</span>
            </motion.h1>
        </section>
    )
}

// --- TEAM SECTION ---
interface TeamSectionProps {
    preHeading: string
    mainHeading: { bold: string; rest: string }
    teamLabel: string
    description: string
    members: TeamMember[]
}

function TeamSection({ preHeading, mainHeading, teamLabel, description, members }: TeamSectionProps) {
    const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    })

    const sectionY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"])

    return (
        <section ref={ref} className="relative py-16 sm:py-24 md:py-32 lg:py-48 pb-24 sm:pb-32 md:pb-52 lg:pb-72 text-white">
            <motion.div
                className="container mx-auto px-4 sm:px-6 md:px-8 max-w-6xl text-center"
                style={{ y: sectionY }}
            >
                {/* Description only - heading already shown in hero */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8 sm:mb-12"
                >
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">{description}</p>
                </motion.div>

                {/* Team Member Names List */}
                <div className="flex flex-col items-center space-y-3 sm:space-y-4 md:space-y-6 mt-8 sm:mt-12 md:mt-16">
                    {members.map((member, index) => (
                        <motion.button
                            key={member.name}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold hover:text-[#eb0027] transition-colors duration-200 cursor-pointer px-2 sm:px-4"
                            whileHover={{ scale: 1.05, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.15 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            onClick={() => setSelectedMember(member)}
                        >
                            {member.name}
                        </motion.button>
                    ))}
                </div>
            </motion.div>

            {selectedMember && <TeamMemberModal member={selectedMember} onClose={() => setSelectedMember(null)} />}
        </section>
    )
}

// --- MAIN EXECUTIVES PAGE COMPONENT ---
export default function ExecutivesPage() {
    const teamSectionConfig = config.aboutPageSection.teamSection

    return (
        <SmoothScrollProvider>
            <div className="executives-page relative flex flex-col min-h-[100dvh] bg-black">
                {/* Background particles spanning entire page - fixed position */}
                <NetworkBackground />
                <main className="relative w-full flex-1 z-10">
                    <ScrollProgressIndicator />

                    {/* Hero Section */}
                    <ExecutivesHeroSection />

                    {/* Team Members Section */}
                    <TeamSection
                        preHeading={teamSectionConfig.preHeading}
                        mainHeading={teamSectionConfig.mainHeading}
                        teamLabel={teamSectionConfig.teamLabel}
                        description={teamSectionConfig.description}
                        members={teamSectionConfig.members}
                    />
                </main>

                <div className="relative z-10">
                    <Footer />
                </div>
            </div>
        </SmoothScrollProvider>
    )
}
