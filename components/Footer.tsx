'use client';
import React from 'react';
import {useEffect} from 'react';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import Link from 'next/link';
import { config } from '../data/config';

export default function Footer() {
  useEffect(() => {
    const setViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    // Set initial viewport height
    setViewportHeight();

    // Update on resize and orientation change
    window.addEventListener('resize', setViewportHeight);
    window.addEventListener('orientationchange', setViewportHeight);

    // Force recalculation after orientation change delay
    const handleOrientationChange = () => {
      setTimeout(setViewportHeight, 100);
      setTimeout(setViewportHeight, 300);
      setTimeout(setViewportHeight, 500);
    };

    window.addEventListener('orientationchange', handleOrientationChange);

    return () => {
      window.removeEventListener('resize', setViewportHeight);
      window.removeEventListener('orientationchange', setViewportHeight);
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []);

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
    <footer 
      className="bg-[#ec0024] text-white w-full overflow-x-hidden relative"
      style={{
        minHeight: 'auto',
        paddingBottom: 'env(safe-area-inset-bottom, 0px)'
      }}
    >
      {/* Campus Image Section */}
      <div className="w-full flex items-center justify-center">
        <img 
          src={`/${config.footer.campusImage}`} 
          alt="Campus Image" 
          className="w-full max-w-7xl h-auto mt-6 sm:mt-8 lg:mt-10 opacity-60 px-4 sm:px-6 lg:px-8" 
        />
      </div>

      {/* Divider Line */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <hr className="border-t border-white/60 w-full mt-4 sm:mt-6 lg:mt-7" />
      </div>

      {/* Main Footer Content */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 pb-12 sm:pb-16 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Left Section - Logo, Copyright, Social Links */}
          <div className="flex flex-col space-y-4 sm:space-y-6">
            {/* Logo */}
            <div className="flex justify-center lg:justify-start">
              <Link href="/" className="inline-block">
                <img 
                  src={`/${config.footer.logo}`} 
                  alt="TEDx Logo"
                  className="h-12 sm:h-16 lg:h-20 w-auto cursor-pointer" 
                />
              </Link>
            </div>

            {/* Copyright */}
            <div className="text-xs sm:text-sm lg:text-[13px] text-center lg:text-left lg:ml-6">
              {config.footer.copyright}
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start lg:ml-6 gap-4 sm:gap-5 lg:gap-6">
              {config.footer.socialLinks.map((item, idx) => (
                <Link 
                  href={item.url} 
                  key={idx}
                  className="text-lg sm:text-xl lg:text-2xl hover:text-white/80 transition-colors duration-300 p-1"
                  aria-label={`${item.icon} social link`}
                >
                  {renderSocialIcon(item.icon)}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Section - Navigation Links */}
          <div className="mt-6 lg:mt-0">
            {/* Mobile Layout - Single Column */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-6 sm:gap-8">
              <div className="flex flex-col space-y-3 sm:space-y-4">
                {config.footer.leftLinks.map((item, idx) => (
                  <Link 
                    href={item.url} 
                    key={idx}
                    className="text-base sm:text-lg hover:text-white/80 transition-colors duration-300 text-center sm:text-left"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col space-y-3 sm:space-y-4">
                {config.footer.rightLinks.map((item, idx) => (
                  <Link 
                    href={item.url} 
                    key={idx}
                    className="text-base sm:text-lg hover:text-white/80 transition-colors duration-300 text-center sm:text-left"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Desktop Layout - Two Columns with Proper Spacing */}
            <div className="hidden lg:grid lg:grid-cols-2 lg:gap-20 xl:gap-32">
              <div className="flex flex-col space-y-4">
                {config.footer.leftLinks.map((item, idx) => (
                  <Link 
                    href={item.url} 
                    key={idx}
                    className="text-lg xl:text-xl hover:text-white/80 transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col space-y-4">
                {config.footer.rightLinks.map((item, idx) => (
                  <Link 
                    href={item.url} 
                    key={idx}
                    className="text-lg xl:text-xl hover:text-white/80 transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

