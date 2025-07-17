"use client" // This page uses client-side features like hooks and event listeners

import React, { useEffect, useRef, useState, type ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Dialog } from "@/components/ui/dialog" // Assuming shadcn Dialog
import { Button } from "@/components/ui/button" // Assuming shadcn Button
import { Linkedin } from "lucide-react" // Using Lucide React for LinkedIn icon
import { config } from "@/data/config"

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
                direction: "vertical",
                gestureDirection: "vertical",
                smooth: true,
                mouseMultiplier: 2.0, // Increased for more aggressive mouse wheel scrolling
                smoothTouch: true, // Enabled for smoother trackpad scrolling
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

// --- NAVBAR COMPONENT ---
/**
 * TransparentNavbar component, adapted from HomepageHeader.tsx.
 * It is fixed at the top, transparent, and disappears as the user scrolls down.
 */
interface TransparentNavbarProps {
    logoSrc: string
    navLinks: { label: string; href: string }[]
    registerText: string
    registerHref: string
}

function TransparentNavbar({ logoSrc, navLinks, registerText, registerHref }: TransparentNavbarProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isVisible, setIsVisible] = useState(true) // Controls visibility based on scroll

    const { scrollYProgress } = useScroll()
    // Navbar should be transparent and only visible at the very top, then disappear
    // We use opacity to make it fade out as soon as scroll starts
    const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]) // Fades out quickly
    const y = useTransform(scrollYProgress, [0, 0.05], ["0%", "-100%"]) // Moves up quickly

    useEffect(() => {
        const handleScroll = () => {
            // Navbar is visible only when scrollY is 0
            setIsVisible(window.scrollY === 0)
        }
        window.addEventListener("scroll", handleScroll)
        handleScroll() // Set initial state
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    return (
        <motion.header
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
            style={{ opacity, y, pointerEvents: isVisible ? "auto" : "none" }} // Disable pointer events when hidden
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo as homepage link */}
                    <Link href="/" className="flex items-center h-full" aria-label="Go to homepage">
                        <div className="relative w-40 h-12 lg:w-56 lg:h-16 flex items-center">
                            <Image
                                src={logoSrc || "/placeholder.svg"}
                                alt="TEDx BITS Hyderabad Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </Link>
                    {/* Desktop Navigation + CTA Button */}
                    <div className="hidden md:flex items-center ml-auto gap-8">
                        <nav className="flex items-center space-x-8">
                            {navLinks.map((nav) => (
                                <Link
                                    key={nav.href}
                                    href={nav.href}
                                    className="text-base font-medium text-white transition-colors hover:text-red-400"
                                >
                                    {nav.label}
                                </Link>
                            ))}
                        </nav>
                        <Button
                            asChild
                            className="bg-transparent border border-red-400 text-red-400 hover:bg-red-900/20 hover:border-red-500 hover:text-red-500 font-medium transition-all duration-300"
                        >
                            <Link href={registerHref}>{registerText}</Link>
                        </Button>
                    </div>
                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMobileMenu}
                        className="md:hidden p-2 rounded-md transition-colors text-white"
                        aria-label="Toggle mobile menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-black/90 backdrop-blur-md rounded-lg mt-2 shadow-lg">
                            {navLinks.map((nav) => (
                                <Link
                                    key={nav.href}
                                    href={nav.href}
                                    className="block px-3 py-2 text-base font-medium text-gray-200 hover:text-red-400 hover:bg-gray-800 rounded-md"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {nav.label}
                                </Link>
                            ))}
                            <div className="px-3 py-2">
                                <Button asChild className="w-full bg-red-600 hover:bg-red-700 text-white font-medium">
                                    <Link href={registerHref} onClick={() => setIsMobileMenuOpen(false)}>
                                        {registerText}
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </motion.header>
    )
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
            className="fixed top-0 left-0 right-0 h-1 bg-[#dc2626] z-[51] origin-[0%]" // Higher z-index than navbar
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
                <span className="text-[#dc2626] uppercase">{text.bold}</span>
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
                            <span className="text-[#dc2626] uppercase">{aboutTED.highlight}</span>
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
                            <span className="text-[#dc2626] uppercase">{aboutTEDx.highlight}</span>
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
                            <blockquote className="text-lg italic text-center md:text-left mb-6 border-l-4 border-[#dc2626] pl-4">
                                &ldquo;{member.quote}&rdquo;
                            </blockquote>
                        </div>

                        <div className="flex flex-col items-center md:items-start mt-auto">
                            {member.linkedin && (
                                <Link
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-red-400 hover:text-red-500 transition-colors mb-2"
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
    const sectionY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]) // Adjusted range for noticeable effect

    return (
        <section ref={ref} className="relative py-32 md:py-48 bg-black text-white z-30">
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
                        <span className="text-[#dc2626] uppercase">{mainHeading.bold}</span>
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
                            className="text-8xl md:text-9xl font-bold hover:text-red-400 transition-colors duration-200 cursor-pointer"
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
                    <TransparentNavbar
                        logoSrc={config.images.logo}
                        navLinks={config.navigation.slice(0, 4)} // Assuming first 4 are main nav links
                        registerText={config.ui.register}
                        registerHref={config.navigation[4].href} // Assuming last one is register
                    />

                    {/* Scroll Progress Indicator */}
                    <ScrollProgressIndicator />

                    {/* Layer 1: Hero Section */}
                    <HeroSection text={aboutPageConfig.mainHeading} />

                    {/* Layer 2: About Text Columns */}
                    <AboutTextSection aboutTED={aboutPageConfig.aboutTED} aboutTEDx={aboutPageConfig.aboutTEDx} />

                    {/* Layer 3: Team Members Section */}
                    <TeamSection
                        preHeading={aboutPageConfig.teamSection.preHeading}
                        mainHeading={aboutPageConfig.teamSection.mainHeading}
                        teamLabel={aboutPageConfig.teamSection.teamLabel}
                        description={aboutPageConfig.teamSection.description}
                        members={aboutPageConfig.teamSection.members}
                    />
                </main>
            </div>
        </SmoothScrollProvider>
    )
}
