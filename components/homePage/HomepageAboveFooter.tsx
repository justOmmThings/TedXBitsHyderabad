'use client'
import React from 'react'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { config } from '@/data/config';

export default function AboveFooter() {
    return (
        <div className='bg-[#1f1f1f] w-full text-white overflow-x-hidden'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
                {/* First CTA */}
                <div className='flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-4 sm:gap-6 pt-8 sm:pt-12 lg:pt-16 xl:pt-20 pb-6'>
                    <h2 className='text-lg sm:text-xl md:text-2xl lg:text-[25px] font-normal leading-tight max-w-none sm:max-w-2xl lg:max-w-3xl'>
                        {config.homepageAboveFooter.ctas[0].text}
                    </h2>
                    <Link 
                        href={config.homepageAboveFooter.ctas[0].button.link} 
                        className='flex items-center gap-2 text-sm sm:text-base lg:text-[19px] hover:text-[#eb0027] transition-colors duration-300 whitespace-nowrap group'
                    >
                        <span>{config.homepageAboveFooter.ctas[0].button.label}</span>
                        <ArrowRightIcon className='w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300' />
                    </Link>
                </div>
                
                {/* Divider */}
                <hr className="border-t border-white/40 w-full" />
                
                {/* Second CTA */}
                <div className='flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-4 sm:gap-6 py-6 sm:py-8'>
                    <h2 className='text-lg sm:text-xl md:text-2xl lg:text-[25px] font-normal leading-tight max-w-none sm:max-w-2xl lg:max-w-3xl'>
                        {config.homepageAboveFooter.ctas[1].text}
                    </h2>
                    <Link 
                        href={config.homepageAboveFooter.ctas[1].button.link} 
                        className='flex items-center gap-2 text-sm sm:text-base lg:text-[19px] hover:text-[#eb0027] transition-colors duration-100 whitespace-nowrap group'
                    >
                        <span>{config.homepageAboveFooter.ctas[1].button.label}</span>
                        <ArrowRightIcon className='w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-100' />
                    </Link>
                </div>
                
                {/* Divider */}
                <hr className="border-t border-white/40 w-full" />
                
                {/* Third CTA */}
                <div className='flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-4 sm:gap-6 py-6 sm:py-8 pb-12 sm:pb-16 lg:pb-20 xl:pb-24'>
                    <h2 className='text-lg sm:text-xl md:text-2xl lg:text-[25px] font-normal leading-tight max-w-none sm:max-w-2xl lg:max-w-3xl'>
                        {config.homepageAboveFooter.ctas[2].text}
                    </h2>
                    <Link 
                        href={config.homepageAboveFooter.ctas[2].button.link} 
                        className='flex items-center gap-2 text-sm sm:text-base lg:text-[19px] hover:text-[#eb0027] transition-colors duration-100 whitespace-nowrap group'
                    >
                        <span>{config.homepageAboveFooter.ctas[2].button.label}</span>
                        <ArrowRightIcon className='w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-100' />
                    </Link>
                </div>
            </div>
        </div>
    );
}

