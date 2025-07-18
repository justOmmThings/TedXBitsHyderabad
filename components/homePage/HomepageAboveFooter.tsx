'use client'
import React from 'react'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline';
export default function AboveFooter() {
    return (
        <div className='bg-[#1f1f1f] w-full text-white overflow-x-hidden'>
            <div className='ml-21'>
                <div className='flex justify-between '>
                    <p className='text-[25px] mt-20 ml-20 mb-3'>Know someone who belongs on our Stage ?</p>
                    <p className='mt-20 text-[19px] -mr-3 flex items-center gap-2 mb-8 hover:text-[#ec0024] mr-24'><Link href="#" className='flex gap-2'>NOMINATE SPEAKER<ArrowRightIcon className='w-5  flex' /></Link></p>
                </div>
                <hr className="border-t border-white w-[1200px] my-0 ml-20 opacity-40" />
                <div className='flex justify-between'>
                    <p className='text-[25px] ml-20 mb-3 mt-8'>Eager to be a part of TEDxBITSHyderabad ?</p>
                    <p className=' text-[19px] -mr-3 mt-8 flex items-center gap-2 mb-8 hover:text-[#ec0024] mr-24'><Link href="#" className='flex gap-2'>BECOME A VOLUNTEER<ArrowRightIcon className='w-5  flex' /></Link></p>
                </div>
                <hr className="border-t border-white w-[1200px] my-0 ml-20 opacity-40" />
                <div className='flex justify-between'>
                    <p className='text-[25px] mt-8 ml-20 mb-3 mt-0'>Want to support TEDxBITSHyderabad as a sponsor ?</p>
                    <p className='text-[19px] -mr-3 mt-8 mb-40 flex items-center gap-2 hover:text-[#ec0024] mr-24'><Link href="#" className='flex gap-2'>PARTNER WITH US<ArrowRightIcon className='w-5 flex' /></Link></p>
                </div>
            </div>
        </div>
    );
}
