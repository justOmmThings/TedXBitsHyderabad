'use client'
import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { config } from '@/data/config';
export default function BelowHeader() {
    const { ref, inView } = useInView({
        triggerOnce: true, // only animate once
        threshold: 0.4,     // 10% of section is visible
    });
    useEffect(() => {
        AOS.init({
            duration: 1000, // animation duration in ms
            once: true,     // animate only once
        })
    }, [])

    return (
        <div className='bg-[#1f1f1f] w-full text-white overflow-x-hidden'>
            <div className='flex justify-between'>
                <div className='flex flex-col  items-center align-center text-[300px] ml-30 my-20'>
                    {config.homepageBelowHeader.sectionTitles.map((title, idx) => (
                        <p
                            key={idx}
                            className={`text-[60px] font-bold${title.color ? ` text-[90px] ml-8` : ''}`}
                            style={title.color ? { color: title.color } : {}}
                        >
                            {title.text}
                        </p>
                    ))}
                </div>
                <div className='scrollbar-hide'>
                    <div ref={ref} data-aos="fade-up" className='scrollbar-hide'>
                        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-12 text-center mr-[80px] mt-[150px]">
                            {config.homepageBelowHeader.stats.map((stat, idx) => (
                                <div key={idx}>
                                    <h2 className="text-7xl font-extrabold">
                                        {inView && <CountUp end={stat.value} duration={3} separator="," suffix={stat.suffix || ''} />}
                                    </h2>
                                    <p className="mt-2 text-lg tracking-wide">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}