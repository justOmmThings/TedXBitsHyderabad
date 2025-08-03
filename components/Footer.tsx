'use client';
import React from 'react';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import Link from 'next/link';
import { config } from '../data/config';

export default function Footer() {
  // Helper to render the correct icon
  const renderSocialIcon = (icon: string) => {
    switch (icon) {
      case 'facebook':
        return <FaFacebookF />;
      case 'instagram':
        return <FaInstagram />;
      case 'close':
        return <IoClose />;
      case 'linkedin':
        return <FaLinkedinIn />;
      case 'youtube':
        return <FaYoutube />;
      case 'dots':
        return <HiOutlineDotsHorizontal />;
      default:
        return null;
    }
  };
  return (
    <footer className="bg-[#ec0024] text-white w-full overflow-x-hidden">
      <div className="w-full flex items-center justify-center align-center">
        {/*<img src="/tedxfootertext.png" className='w-[500px] h-[290px] mt-4'></img>*/}
        <img src={`/${config.footer.campusImage}`} alt="CampusImage" className='w-full h-auto mt-10 opacity-60' />
      </div>
      <hr className="border-t border-white lg:w-[1300px] w-[370px] my-2 lg:mt-7 lg:ml-9 ml-8 opacity-60" />
      <div className="w-full mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">
        {/* Left Section */}
        <div className='flex flex-col -mt-1'>
          <div>
            <Link href="#"><img src={`/${config.footer.logo}`} className='w-[400px] cursor-pointer lg:pb-0 lg:mb-0'></img></Link>
          </div>
          <div className="text-[13px] mt-3 ml-6 ">{config.footer.copyright}</div>
          <div className="flex gap-4 text-white text-xl mt-6 ml-6 mb-6">
            {config.footer.socialLinks.map((item, idx) => (
              <Link href={item.url} key={idx}>{renderSocialIcon(item.icon)}</Link>
            ))}
          </div>
        </div>
        {/* Right Section */}
        <div className="grid grid-cols-2 gap-40 text-[18px]">
          <div className="flex flex-col lg:gap-2 gap-0">
            {config.footer.leftLinks.map((item, idx) => (
              <p className='my-2 lg:text-1xl text-[17px] lg:ml-0 ml-3' key={idx}><a href={item.url}>{item.label}</a></p>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            {config.footer.rightLinks.map((item, idx) => (
              <p className='my-2 lg:text-1xl text-[17px] lg:mr-0' key={idx}><a href={item.url} className='my-1'>{item.label}</a></p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
