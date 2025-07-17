'use client'
import React,{useEffect,useState} from 'react';
import CountUp from 'react-countup';
import  { useInView } from 'react-intersection-observer';
import AOS from 'aos'
import 'aos/dist/aos.css'
export default function BelowHeader () {
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
                    <p className='text-[60px] font-bold'>A</p>
                    <p className='text-[60px] font-bold'>DECADE</p>
                    <p className='text-[60px] font-bold'>OF</p>
                    <p className='text-[90px] font-bold text-[#eb0027] ml-8'>IMPACT</p>
                </div>
                <div className='scrollbar-hide'>
                <div ref={ref} data-aos="fade-up" className='scrollbar-hide'>
                    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-12 text-center mr-[80px] mt-[150px]">
                            {/* 1 */}
                            <div>
                            <h2 className="text-7xl font-extrabold">
                               {inView && <CountUp end={28} duration={3}/>}
                            </h2>
                            <p className="mt-2 text-lg tracking-wide">EVENTS</p>
                            </div>

                            {/* 2 */}
                            <div>
                            <h2 className="text-7xl font-extrabold">
                                {inView && <CountUp end={15000} duration={2}/>}
                            </h2>
                            <p className="mt-2 text-lg tracking-wide">ATTENDEES</p>
                            </div>

                            {/* 3 */}
                            <div>
                            <h2 className="text-7xl font-extrabold">
                               { inView && <CountUp end={100} duration={2.5} separator="," suffix="K+"/>}
                            </h2>
                            <p className="mt-2 text-lg tracking-wide">SOCIAL REACH</p>
                            </div>

                            {/* 4 */}
                            <div>
                            <h2 className="text-7xl font-extrabold">
                               { inView && <CountUp end={100} duration={2.5} separator="," suffix="+"/> }
                            </h2>
                            <p className="mt-2 text-lg tracking-wide">SPEAKERS</p>
                            </div>

                            {/* 5 */}
                            <div>
                            <h2 className="text-7xl font-extrabold">
                              { inView &&  <CountUp end={12.1} duration={3} separator="," suffix="M+"/> }
                            </h2>
                            <p className="mt-2 text-lg tracking-wide">VIEWS</p>
                            </div>

                            {/* 6 */}
                            <div>
                            <h2 className="text-7xl font-extrabold">
                              { inView &&  <CountUp end={10} duration={3} separator="," suffix="+"/> }
                            </h2>
                            <p className="mt-2 text-lg tracking-wide">YEARS</p>
                            </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}