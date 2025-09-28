'use client'
import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { config } from '@/data/config';

export default function BelowHeader() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1, // Changed from 0.3 to 0.1 - triggers when only 10% is visible
        rootMargin: '100px 0px', // Added rootMargin to trigger even earlier
    });

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div className='bg-[#1f1f1f] w-full text-white overflow-x-hidden'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
                
                {/* Main Container */}
                <div className='flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-12 xl:gap-16 py-12 sm:py-16 lg:py-20'>
                    
                    {/* Title Section - No Animation */}
                    <div className='flex flex-col items-center lg:items-start flex-shrink-0 w-full lg:w-auto lg:max-w-md xl:max-w-lg'>
                        {config.homepageBelowHeader.sectionTitles.map((title, idx) => (
                            <h1
                                key={idx}
                                className={`font-bold text-center lg:text-left leading-tight ${
                                    title.color ? 'text-red-600' : 'text-white'
                                } text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[90px] mb-2 sm:mb-3`}
                            >
                                {title.text}
                            </h1>
                        ))}
                    </div>

                    {/* Stats Section */}
                    <div ref={ref} className='w-full lg:flex-1 lg:max-w-3xl' data-aos="fade-left" data-aos-delay="200">
                        {/* Mobile Layout: 2 columns */}
                        <div className="grid grid-cols-2 sm:hidden gap-6 text-center">
                            {config.homepageBelowHeader.stats.map((stat, idx) => (
                                <div key={idx} className="flex flex-col items-center space-y-2">
                                    <div className="text-3xl xs:text-4xl font-extrabold min-h-[3rem] flex items-center">
                                        {inView && (
                                            <CountUp
                                                end={stat.value}
                                                duration={2.5 + idx * 0.3}
                                                separator=","
                                                suffix={stat.suffix || ''}
                                            />
                                        )}
                                    </div>
                                    <p className="text-xs xs:text-sm tracking-wide uppercase font-medium opacity-90">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Tablet Layout: 3 columns on first row, 3 on second */}
                        <div className="hidden sm:grid md:hidden grid-cols-3 gap-6 lg:gap-8 text-center">
                            {config.homepageBelowHeader.stats.map((stat, idx) => (
                                <div key={idx} className="flex flex-col items-center space-y-3">
                                    <div className="text-4xl sm:text-5xl font-extrabold min-h-[4rem] flex items-center">
                                        {inView && (
                                            <CountUp
                                                end={stat.value}
                                                duration={2.5 + idx * 0.3}
                                                separator=","
                                                suffix={stat.suffix || ''}
                                            />
                                        )}
                                    </div>
                                    <p className="text-sm sm:text-base tracking-wide uppercase font-medium opacity-90">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Desktop Layout: 3 columns on top, 3 on bottom */}
                        <div className="hidden md:grid grid-cols-3 gap-8 lg:gap-10 xl:gap-12 text-center">
                            {config.homepageBelowHeader.stats.map((stat, idx) => (
                                <div key={idx} className="flex flex-col items-center space-y-4">
                                    <div className="text-5xl lg:text-6xl xl:text-7xl font-extrabold min-h-[5rem] lg:min-h-[6rem] flex items-center">
                                        {inView && (
                                            <CountUp
                                                end={stat.value}
                                                duration={2.5 + idx * 0.3}
                                                separator=","
                                                suffix={stat.suffix || ''}
                                            />
                                        )}
                                    </div>
                                    <p className="text-base lg:text-lg xl:text-xl tracking-wide uppercase font-medium opacity-90">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
