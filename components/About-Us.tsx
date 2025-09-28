"use client" // This page uses client-side features like hooks and event listeners

import React, { useEffect, useRef, useState, type ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Dialog } from "@/components/ui/dialog" // Assuming shadcn Dialog
import { Button } from "@/components/ui/button" // Assuming shadcn Button
import { Linkedin } from "lucide-react" // Using Lucide React for LinkedIn icon
import { config } from "@/data/config"
import Footer from "@/components/Footer"

// --- CONFIGURATION AND SETTINGS ---
// These settings are defined here for easy access and modification.
// For production, ensure these values are properly integrated into your actual config.ts file.

// Define the structure for team members, assuming this will be added to config.ts
interface TeamMember {
    name: string
    role: string
    photo: string // Path to individual photo
    quote: string
    linkedin: string // LinkedIn URL
    contactInfo?: string // Additional contact info (e.g., email, phone)
}

// Define the structure for the aboutPageSection in config.ts, extending existing structure
interface AboutPageSectionConfig {
    mainHeading: {
        bold: string
        rest: string
    }
    aboutTED: {
        heading: string
        highlight: string
        text: string
    }
    aboutTEDx: {
        heading: string
        highlight: string
        text: string
    }
    teamSection: {
        preHeading: string
        mainHeading: {
            bold: string
            rest: string
        }
        teamLabel: string
        description: string
        members: TeamMember[] // Array of team members
        groupPhoto: string // Path to group photo
    }
}

// Helper function to safely access config properties, falling back to mock data
const getAboutPageConfig = (): AboutPageSectionConfig => {
    // In this version, config.aboutPageSection.teamSection.members is already populated
    // with MOCK_TEAM_MEMBERS for preview purposes, so no further fallback logic is needed here.
    return config.aboutPageSection as AboutPageSectionConfig
}

const aboutPageConfig = config.aboutPageSection

// --- UTILITY COMPONENTS ---

/**
 * SmoothScrollProvider component to enable smooth scrolling using Lenis.
 * It dynamically imports Lenis to ensure it only runs on the client-side.
 */
const SmoothScrollProvider = ({ children }: { children: ReactNode }) => {
    useEffect(() => {
        // Dynamically import Lenis to ensure it only runs on the client
        import("@studio-freight/lenis").then((module) => {
            const Lenis = module.default
            const lenis = new Lenis({
                duration: 0.8, // Reduced duration for faster scroll
                easing: (t: number) => t, // Linear easing for more direct feel
                touchMultiplier: 2.5, // Adjusted for smoother trackpad scrolling
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



/**
 * ScrollProgressIndicator component displays a progress bar at the top of the page
 * indicating the user's scroll position.
 */
function ScrollProgressIndicator() {
    const { scrollYProgress } = useScroll()
    const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-[#eb0027] z-[51] origin-[0%]" // Higher z-index than navbar
            style={{ scaleX }}
        />
    )
}

// --- SECTION 1: HERO SECTION (LAYER 1) ---
/**
 * HeroSection displays the main introductory text with parallax and zoom effects.
 * This is treated as the first layer.
 */
function HeroSection({ text }: { text: { bold: string; rest: string } }) {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"], // Start animation when element enters viewport, end when it leaves
    })

    // Parallax effect for the text
    const y = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"])
    // Text zoom effect
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1]) // Zoom in slightly then back to normal

    return (
        <section
            ref={ref}
            className="relative h-[100dvh] flex items-center justify-center bg-black text-white overflow-hidden z-10"
        >
            <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold text-center leading-tight px-4"
                style={{ y, scale }}
            >
                <span className="text-[#eb0027] uppercase">{text.bold}</span>
                {text.rest.split("organization").map((part, index) => (
                    <React.Fragment key={index}>
                        {part}
                        {index === 0 && <br />} {/* Add line break after "organization" */}
                    </React.Fragment>
                ))}
            </motion.h1>
        </section>
    )
}

// --- SECTION 2: ABOUT TEXT COLUMNS (LAYER 2) ---
/**
 * AboutTextSection displays two columns of text about TED and TEDx with reveal and parallax effects.
 * This is treated as the second layer.
 */
interface AboutTextSectionProps {
    aboutTED: { heading: string; highlight: string; text: string }
    aboutTEDx: { heading: string; highlight: string; text: string }
}

function AboutTextSection({ aboutTED, aboutTEDx }: AboutTextSectionProps) {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    })

    // Unified parallax effect for both columns
    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]) // Apply the same range to both

    return (
        <section ref={ref} className="relative py-24 md:py-32 bg-black text-white z-20">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                {" "}
                {/* Changed max-w-6xl to max-w-7xl */}
                <div className="grid md:grid-cols-2 gap-12 md:gap-24">
                    {/* About TED Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1.0, delay: 0.2, ease: "easeOut" }}
                        style={{ y: y }} // Apply the unified 'y' transform
                        className="flex flex-col"
                    >
                        <h2 className="text-6xl md:text-7xl font-bold mb-6 text-gray-100">
                            {" "}
                            {aboutTED.heading}
                            <span className="text-[#eb0027] uppercase">{aboutTED.highlight}</span>
                        </h2>
                        <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed">{aboutTED.text}</p>{" "}
                    </motion.div>

                    {/* About TEDx Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1.0, delay: 0.4, ease: "easeOut" }}
                        style={{ y: y }} // Apply the unified 'y' transform
                        className="flex flex-col"
                    >
                        <h2 className="text-6xl md:text-7xl font-bold mb-6 text-gray-100">
                            {" "}
                            {aboutTEDx.heading}
                            <span className="text-[#eb0027] uppercase">{aboutTEDx.highlight}</span>
                        </h2>
                        <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed">{aboutTEDx.text}</p>{" "}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

// --- TEAM MEMBER MODAL ---
/**
 * TeamMemberModal displays detailed information about a selected team member in a full-screen dialog.
 * It includes a rotated name, full-height photo, quote, and contact information.
 */
interface TeamMemberModalProps {
    member: TeamMember
    onClose: () => void
}

function TeamMemberModal({ member, onClose }: TeamMemberModalProps) {
    return (
        <Dialog open={true} onOpenChange={onClose}>
            <div className="fixed inset-0 flex items-center justify-center z-[100] bg-black/80">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="relative bg-neutral-900 w-full h-full flex flex-col md:flex-row overflow-hidden"
                >
                    {/* Close Button */}
                    <button
                        className="absolute top-4 right-4 text-gray-400 hover:text-white text-3xl z-10"
                        onClick={onClose}
                        aria-label="Close"
                    >
                        &times;
                    </button>

                    {/* Left: Rotated Name (Desktop only) */}
                    <div className="hidden md:flex items-center justify-center p-4 bg-black text-white flex-shrink-0 md:w-[150px]">
                        <div className="transform -rotate-90 whitespace-nowrap text-5xl font-extrabold tracking-wider origin-center py-8 px-4">
                            {member.name}
                        </div>
                    </div>

                    {/* Center: Photo */}
                    <div className="relative flex-1 min-h-[300px] md:min-h-full">
                        <Image
                            src={member.photo || "/placeholder.svg"}
                            alt={member.name}
                            fill
                            className="object-cover object-center"
                            priority // Load immediately for modal
                        />
                    </div>

                    {/* Right: Details */}
                    <div className="flex-1 p-6 md:p-8 flex flex-col justify-between text-gray-200 md:w-[250px]">
                        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
                            <h3 className="text-3xl font-bold text-white mb-2 md:hidden">{member.name}</h3>{" "}
                            {/* Show name on mobile */}
                            <p className="text-xl font-semibold text-gray-300 mb-4">{member.role}</p>
                            <blockquote className="text-lg italic text-center md:text-left mb-6 border-l-4 border-[#eb0027] pl-4">
                                &ldquo;{member.quote}&rdquo;
                            </blockquote>
                        </div>

                        <div className="flex flex-col items-center md:items-start mt-auto">
                            {member.linkedin && (
                                <Link
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-[#eb0027] hover:text-[#b8001d] transition-colors mb-2"
                                >
                                    <Linkedin className="w-6 h-6" />
                                    <span>LinkedIn Profile</span>
                                </Link>
                            )}
                            {member.contactInfo && <p className="text-md text-gray-400">{member.contactInfo}</p>}
                        </div>
                    </div>
                </motion.div>
            </div>
        </Dialog>
    )
}

// --- SECTION 4: TEAM MEMBERS (LAYER 3) ---
/**
 * TeamSection displays the team members with a main heading, description,
 * and a list of clickable names that reveal a modal on click.
 * This is treated as the third layer.
 */
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

    // Parallax effect for the entire section content
    const sectionY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]) // Reduced range to lessen perceived overlap

    return (
        <section ref={ref} className="relative py-32 md:py-48 pb-52 md:pb-72 bg-black text-white z-30">
            <motion.div
                className="container mx-auto px-4 md:px-6 max-w-6xl text-center"
                style={{ y: sectionY }} // Apply parallax to the entire content container
            >
                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <p className="text-2xl md:text-3xl text-gray-400 font-light mb-2">{preHeading}</p>
                    <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
                        <span className="text-[#eb0027] uppercase">{mainHeading.bold}</span>
                        {mainHeading.rest}
                    </h2>
                    <h3 className="text-7xl md:text-8xl font-extrabold text-gray-200 mb-8">{teamLabel}</h3>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">{description}</p>
                </motion.div>

                {/* Team Member Names List */}
                <div className="flex flex-col items-center space-y-4 mt-16">
                    {members.map((member, index) => (
                        <motion.button
                            key={member.name}
                            className="text-7xl md:text-8xl font-bold hover:text-[#eb0027] transition-colors duration-200 cursor-pointer"
                            whileHover={{ scale: 1.05, y: -5 }} // Subtle jump/bounce
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.15 }} // Faster transition for hover/tap
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

// --- MAIN ABOUT US PAGE COMPONENT ---
/**
 * The main About Us page component, orchestrating all sections and effects.
 */
export default function AboutUsPage() {
    return (
        <SmoothScrollProvider>
            {/* Removed 'overflow-hidden' from this main div to allow Lenis to control scrolling */}
            <div className="about-us-page relative flex flex-col min-h-[100dvh] bg-black">
                {/* Main content area with layers */}
                <main className="relative w-full flex-1">
                    {/* Navbar (fixed, transparent, disappears on scroll) */}

                    {/* Scroll Progress Indicator */}
                    <ScrollProgressIndicator />

                    {/* Layer 1: Hero Section */}
                    <HeroSection text={aboutPageConfig.mainHeading} />

                    {/* Layer 2: About Text Columns */}
                    <AboutTextSection aboutTED={aboutPageConfig.aboutTED} aboutTEDx={aboutPageConfig.aboutTEDx} />


                </main>

            </div>
        </SmoothScrollProvider>
    )
}
