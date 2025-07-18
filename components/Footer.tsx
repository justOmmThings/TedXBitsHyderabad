'use client';
import React from 'react';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import Link from 'next/link';
export default function Footer() {
  return (
    <footer className="bg-[#ec0024] text-white w-full overflow-x-hidden">
      <div className="w-full flex items-center justify-center align-center">
        {/*<img src="/tedxfootertext.png" className='w-[500px] h-[290px] mt-4'></img>*/}
        <img src="/data/bitshydnew.png" alt="CampusImage" className='w-full h-auto mt-10 opacity-80' />
      </div>
      <hr className="border-t border-white w-[1300px] my-2 mt-7 ml-9 opacity-60" />
      <div className="w-full mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">
        {/* Left Section */}

        <div className='flex flex-col -mt-1'>
          <div>
            <Link href="#"><img src="/data/logo-white.png" className='w-[400px] cursor-pointer'></img></Link>
          </div>
          <div className="text-[13px] mt-3 ml-6 ">© TEDxBITSHyderabad 2025</div>
          <div className="flex gap-4 text-white text-xl mt-6 ml-6">
            <Link href="#"><FaFacebookF className='' /></Link>
            <Link href="#"><FaInstagram className='' /></Link>
            <Link href="#"><IoClose className='' /></Link>
            <Link href="#"><FaLinkedinIn className='' /></Link>
            <Link href="#"><FaYoutube className='' /></Link>
            <Link href="#"><HiOutlineDotsHorizontal className='' /></Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-2 gap-40 text-[18px]">
          <div className="flex flex-col gap-2">
            <p className='my-1'><a href="#">EVENTS</a></p>
            <p className='my-1'><a href="#">ABOUT</a></p>
            <p className='my-1'><a href="#">CONTACT US</a></p>
            <p className='my-1'><a href="#">ATTENDEE <br></br>RULES & REGULATIONS</a></p>
          </div>
          <div className="flex flex-col gap-2">
            <p className='my-1'><a href="#" className='my-1'>VOLUNTEER</a></p>
            <p className='my-1'><a href="#" className='my-1'>NOMINATE SPEAKER</a></p>
            <p className='my-1'><a href="#" className='my-1'>SPONSOR</a></p>
            <p className='my-1'><a href="#" className='my-1'>PRESS / MEDIA COVERAGE</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
