"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion, useScroll, useTransform } from "framer-motion"
import { config } from "@/data/config"

interface HomepageHeaderProps {
    className?: string
    bgClassName?: string
}

export function HomepageHeader({ className, bgClassName }: HomepageHeaderProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
    const [isVisible, setIsVisible] = React.useState(true)

    const { scrollYProgress } = useScroll()
    const yLogo = useTransform(scrollYProgress, [0, 0.3], [0, -15]) // Move up by 15px
    const opacityLogo = useTransform(scrollYProgress, [0, 0.3], [1, 0.7]) // Fade to 70%
    const yNav = useTransform(scrollYProgress, [0, 0.3], [0, -10]) // Move up by 10px
    const opacityNav = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]) // Fade to 80%

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        // Run once on mount in case page is not at top
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                bgClassName ?? "bg-black/70 backdrop-blur",
                isVisible ? "translate-y-0" : "-translate-y-full",
                className,
            )}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo as homepage link, no text beside it */}
                    <Link href="/" className="flex items-center h-full" aria-label="Go to homepage">
                        <div className="flex items-center h-full">
                            <div className="relative w-72 h-28 lg:w-96 lg:h-36 flex items-center">
                                <Image src={config.images.logo} alt="TEDx BITS Hyderabad Logo" fill className="object-contain" priority />
                            </div>
                        </div>
                    </Link>
                    {/* Desktop Navigation + CTA Button as a right flex group */}
                    <div className="hidden md:flex items-center ml-auto gap-8">
                        <motion.nav className="flex items-center space-x-8" style={{ y: yNav, opacity: opacityNav }}>
                            {config.navigation.slice(0, 4).map((nav) => (
                                <Link key={nav.href} href={nav.href} className="text-base font-medium text-white transition-colors hover:text-red-300">
                                    {nav.label}
                                </Link>
                            ))}
                        </motion.nav>
                        <Button asChild className={cn("bg-transparent border border-red-300 text-red-400 hover:bg-red-50 hover:border-red-400 hover:text-red-600 font-medium transition-all duration-300")}>
                            <Link href={config.navigation[4].href}>
                                {config.ui.register}
                            </Link>
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
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg">
                            {config.navigation.slice(0, 4).map((nav) => (
                                <Link
                                    key={nav.href}
                                    href={nav.href}
                                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-md"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {nav.label}
                                </Link>
                            ))}
                            <div className="px-3 py-2">
                                <Button asChild className="w-full bg-red-600 hover:bg-red-700 text-white font-medium">
                                    <Link href={config.navigation[4].href} onClick={() => setIsMobileMenuOpen(false)}>
                                        {config.ui.register}
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
} 