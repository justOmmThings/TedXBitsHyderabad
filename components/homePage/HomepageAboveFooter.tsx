'use client'
import React from 'react'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { config } from '@/data/config';
export default function AboveFooter() {
    return (
        <div className='bg-[#1f1f1f] w-full text-white overflow-x-hidden'>
            <div className='lg:ml-21'>
                <div className='flex justify-between '>
                    <p className='lg:text-[25px] text-[20px] lg:mt-20 mt-10 lg:ml-20 ml-6 mb-3 lg:mr-0 mr-8'>{config.homepageAboveFooter.ctas[0].text}</p>
                    <p className='lg:mt-20 mt-10 lg:text-[19px] text-[16px] -mr-3 lg:ml-0 ml-0 flex items-center gap-2 mb-8 hover:text-[#eb0027] lg:mr-24'><Link href={config.homepageAboveFooter.ctas[0].button.link} className='flex gap-2'>{config.homepageAboveFooter.ctas[0].button.label}<ArrowRightIcon className='w-5  flex' /></Link></p>
                </div>
                <hr className="border-t border-white lg:w-[1200px] w-[400px] my-0 lg:ml-20 ml-4 opacity-40" />
                <div className='flex justify-between'>
                    <p className='lg:text-[25px] text-[20px] lg:ml-20 ml-6 mb-3 mt-8'>{config.homepageAboveFooter.ctas[1].text}</p>
                    <p className=' lg:text-[19px] text-[16px] lg:-mr-3 -mr-9 mt-8 lg:ml-0 ml-0 flex items-center lg:gap-2 gap-0 mb-8 hover:text-[#eb0027] lg:mr-24'><Link href={config.homepageAboveFooter.ctas[1].button.link} className='flex gap-2'>{config.homepageAboveFooter.ctas[1].button.label}<ArrowRightIcon className='w-5  flex' /></Link></p>
                </div>
                <hr className="border-t border-white lg:w-[1200px] w-[400px] my-0 lg:ml-20 ml-4 opacity-40" />
                <div className='flex justify-between'>
                    <p className='lg:text-[25px] text-[20px] mt-8 lg:ml-20 ml-6 mb-3 mt-0'>{config.homepageAboveFooter.ctas[2].text}</p>
                    <p className='lg:text-[19px] text-[16px] -mr-3 mt-8 lg:mb-40 mb-40 flex items-center gap-2 hover:text-[#eb0027] lg:mr-24'><Link href={config.homepageAboveFooter.ctas[2].button.link} className='flex gap-2'>{config.homepageAboveFooter.ctas[2].button.label}<ArrowRightIcon className='w-5 flex' /></Link></p>
                </div>
            </div>
        </div>
    );
}
