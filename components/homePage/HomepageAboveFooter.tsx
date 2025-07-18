'use client'
import React from 'react'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { config } from '@/data/config';
export default function AboveFooter() {
    return (
        <div className='bg-[#1f1f1f] w-full text-white overflow-x-hidden'>
            <div className='ml-21'>
                <div className='flex justify-between '>
                    <p className='text-[25px] mt-20 ml-20 mb-3'>{config.homepageAboveFooter.ctas[0].text}</p>
                    <p className='mt-20 text-[19px] -mr-3 flex items-center gap-2 mb-8 hover:text-[#ec0024] mr-24'><Link href={config.homepageAboveFooter.ctas[0].button.link} className='flex gap-2'>{config.homepageAboveFooter.ctas[0].button.label}<ArrowRightIcon className='w-5  flex' /></Link></p>
                </div>
                <hr className="border-t border-white w-[1200px] my-0 ml-20 opacity-40" />
                <div className='flex justify-between'>
                    <p className='text-[25px] ml-20 mb-3 mt-8'>{config.homepageAboveFooter.ctas[1].text}</p>
                    <p className=' text-[19px] -mr-3 mt-8 flex items-center gap-2 mb-8 hover:text-[#ec0024] mr-24'><Link href={config.homepageAboveFooter.ctas[1].button.link} className='flex gap-2'>{config.homepageAboveFooter.ctas[1].button.label}<ArrowRightIcon className='w-5  flex' /></Link></p>
                </div>
                <hr className="border-t border-white w-[1200px] my-0 ml-20 opacity-40" />
                <div className='flex justify-between'>
                    <p className='text-[25px] mt-8 ml-20 mb-3 mt-0'>{config.homepageAboveFooter.ctas[2].text}</p>
                    <p className='text-[19px] -mr-3 mt-8 mb-40 flex items-center gap-2 hover:text-[#ec0024] mr-24'><Link href={config.homepageAboveFooter.ctas[2].button.link} className='flex gap-2'>{config.homepageAboveFooter.ctas[2].button.label}<ArrowRightIcon className='w-5 flex' /></Link></p>
                </div>
            </div>
        </div>
    );
}
