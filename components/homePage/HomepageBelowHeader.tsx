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
        threshold: 0.4,
    });

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div className='bg-[#1f1f1f] w-full text-white overflow-x-hidden'>
            <div className='flex flex-col lg:flex-row items-center justify-center px-6 py-16'>
                
                {/* Title Section */}
                <div className='flex flex-col items-center items-start mb-12 lg:mb-0'>
                    {config.homepageBelowHeader.sectionTitles.map((title, idx) => (
                        <p
                            key={idx}
                            className={`font-bold text-center ${
                                title.color ? 'text-red-600' : ''
                            } text-6xl lg:text-[90px] my-2`}
                        >
                            {title.text}
                        </p>
                    ))}
                </div>

                {/* Stats Section */}
                <div ref={ref} data-aos="fade-up" className='w-full'>
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8 text-center">
                        {config.homepageBelowHeader.stats.map((stat, idx) => (
                            <div key={idx}>
                                <h2 className="text-5xl sm:text-6xl font-extrabold">
                                    {inView && (
                                        <CountUp
                                            end={stat.value}
                                            duration={3}
                                            separator=","
                                            suffix={stat.suffix || ''}
                                        />
                                    )}
                                </h2>
                                <p className="mt-2 text-base sm:text-lg tracking-wide">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
