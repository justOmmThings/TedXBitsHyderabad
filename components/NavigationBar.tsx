"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Image as ImageIcon, Users, UserCheck, Mail, UserPlus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { images, navigation, navigationConfig } from '@/data/config';

// Icon mapping
const iconMap = {
    Image: ImageIcon,
    Users,
    UserCheck,
    Mail,
    UserPlus,
};

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > navigationConfig.animation.scrollThreshold);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    return (
        <>
            {/* Top Bar with Logo and Menu Button */}
            <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out ${isScrolled
                ? 'bg-white/10 backdrop-blur-xl shadow-lg border-b border-white/10 -translate-y-full'
                : 'bg-transparent translate-y-0'
                }`}>
                <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
                    <div className="flex justify-between items-center h-16 sm:h-18 lg:h-20">
                        {/* Logo (image only, no text) */}
                        <Link href="/" className="flex items-center group cursor-pointer h-full">
                            <div className="h-12 sm:h-14 lg:h-16 w-auto flex items-center py-2">
                                <Image
                                    src={`/${images.logo}`}
                                    alt="Logo"
                                    width={210}
                                    height={78}
                                    className="object-contain h-8 sm:h-10 lg:h-12 w-auto"
                                    priority
                                />
                            </div>
                        </Link>

                        {/* Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="group relative p-2 sm:p-3 lg:p-4 text-white hover:text-[#eb0027] transition-all duration-150 rounded-full backdrop-blur-sm"
                        >
                            <div className="relative w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8">
                                <Menu className={`absolute inset-0 w-full h-full transition-all duration-200 ${isMenuOpen ? 'opacity-0 rotate-180 scale-75' : 'opacity-100 rotate-0 scale-100'
                                    }`} />
                                <X className={`absolute inset-0 w-full h-full transition-all duration-200 ${isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-75'
                                    }`} />
                            </div>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Full-screen Menu Overlay */}
            <div className={`fixed inset-0 z-50 transition-all duration-700 ease-in-out ${isMenuOpen
                ? 'opacity-100 visible'
                : 'opacity-0 invisible'
                }`}>
                {/* Background with blur effect */}
                <div className={`absolute inset-0 bg-gradient-to-br from-[#eb0027]/95 via-black/95 to-black/95 backdrop-blur-2xl transition-all duration-700 ${isMenuOpen ? 'scale-100' : 'scale-110'
                    }`}></div>

                {/* Menu Content */}
                <div className="relative h-full flex flex-col justify-center items-center text-center">
                    {/* Close Button */}
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className={`absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8 group p-2 sm:p-3 text-white/80 hover:text-white transition-all duration-150 hover:bg-white/10 rounded-full backdrop-blur-sm transform ${isMenuOpen
                            ? 'translate-y-0 opacity-100 rotate-0'
                            : 'translate-y-4 opacity-0 rotate-90'
                            }`}
                        style={{
                            transitionDelay: isMenuOpen ? '300ms' : '0ms'
                        }}
                    >
                        <X className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 transition-all duration-150 group-hover:scale-110 group-hover:rotate-90" />
                    </button>

                    {/* Navigation Links + CTA Button */}
                    <div className="flex flex-col items-center gap-6 sm:gap-8 lg:gap-12">
                        {navigation.map((item, index) => (
                            <div
                                key={item.label}
                                className={`transform transition-all duration-300 ease-out ${isMenuOpen
                                    ? 'translate-y-0 opacity-100'
                                    : 'translate-y-8 opacity-0'
                                    }`}
                                style={{
                                    transitionDelay: isMenuOpen ? `${index * navigationConfig.animation.menuItemDelay + 200}ms` : '0ms'
                                }}
                            >
                                <Link
                                    href={item.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="group flex items-center justify-center space-x-2 sm:space-x-3 lg:space-x-4 text-white hover:text-[#eb0027] transition-all duration-150 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-wide group-hover:tracking-wider"
                                >
                                    {(() => {
                                        const IconComponent = iconMap[item.icon as keyof typeof iconMap];
                                        return IconComponent ? <IconComponent className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 transition-all duration-150 group-hover:scale-125 group-hover:rotate-12" /> : null;
                                    })()}
                                    <span className="group-hover:-translate-y-2 transition-transform duration-150">{item.label}</span>
                                </Link>
                            </div>
                        ))}
                        {/* CTA Button */}
                        <div className={`mt-6 sm:mt-8 transform transition-all duration-300 ease-out ${isMenuOpen
                            ? 'translate-y-0 opacity-100'
                            : 'translate-y-8 opacity-0'
                            }`}
                            style={{
                                transitionDelay: isMenuOpen ? `${navigation.length * navigationConfig.animation.menuItemDelay + navigationConfig.animation.ctaDelay}ms` : '0ms'
                            }}>
                            <Link
                                href={navigationConfig.registerButton.link}
                                onClick={() => setIsMenuOpen(false)}
                                className="group relative overflow-hidden bg-white/20 backdrop-blur-sm text-white px-8 py-4 sm:px-12 sm:py-5 lg:px-16 lg:py-6 rounded-full text-lg sm:text-xl lg:text-2xl xl:text-3xl font-medium transition-all duration-200 hover:bg-white/30 hover:scale-105 sm:hover:scale-110 hover:shadow-2xl hover:shadow-[#eb0027]/50 border border-white/30"
                            >
                                <span className="relative z-10">{navigationConfig.registerButton.text}</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-[#eb0027]/50 to-gray-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-full"></div>
                            </Link>
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-1/4 left-1/4 w-24 h-24 sm:w-32 sm:h-32 bg-[#eb0027]/20 rounded-full blur-2xl sm:blur-3xl animate-pulse hidden sm:block"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-32 h-32 sm:w-48 sm:h-48 bg-gray-500/20 rounded-full blur-2xl sm:blur-3xl animate-pulse hidden sm:block" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-1/2 right-1/3 w-16 h-16 sm:w-24 sm:h-24 bg-[#eb0027]/20 rounded-full blur-xl sm:blur-2xl animate-pulse hidden sm:block" style={{ animationDelay: '2s' }}></div>
                </div>
            </div>
        </>
    );
};

export default Navigation; 