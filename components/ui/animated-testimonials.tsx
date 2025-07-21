"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

type Speaker = {
  name: string;
  title: string;
  image: string;
  description?: string;
};

export const SpeakerCarousel = ({
  speakers,
  autoplay = false,
}: {
  speakers: Speaker[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % speakers.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + speakers.length) % speakers.length);
  };

  const handleThumbnailClick = (index: number) => {
    setActive(index);
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      
      {/* Main content */}
      <div className="relative z-20 flex flex-col min-h-screen">
        {/* Top section - Main carousel */}
        <div className="flex-1 flex">
          {/* Left side - Speaker info */}
          <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="space-y-6"
              >
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-white/70 text-lg md:text-xl font-light tracking-wide"
                >
                  Our Memorable Speaker
                </motion.p>
                
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-red-500 leading-none tracking-tight"
                >
                  {speakers[active].name.split(' ').map((word, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        delay: 0.4 + (index * 0.1),
                        duration: 0.6,
                        ease: "easeOut"
                      }}
                    >
                      {word}
                    </motion.div>
                  ))}
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-white/80 text-xl md:text-2xl font-medium max-w-md"
                >
                  {speakers[active].title}
                </motion.p>
                
                {speakers[active].description && (
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="text-white/60 text-lg max-w-lg leading-relaxed"
                  >
                    {speakers[active].description}
                  </motion.p>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4 mt-12"
            >
              <button
                onClick={handlePrev}
                className="group flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/20 hover:border-red-500 hover:bg-red-500/10 transition-all duration-300"
              >
                <IconArrowLeft className="h-6 w-6 text-white/70 group-hover:text-red-500 transition-colors duration-300" />
              </button>
              <button
                onClick={handleNext}
                className="group flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/20 hover:border-red-500 hover:bg-red-500/10 transition-all duration-300"
              >
                <IconArrowRight className="h-6 w-6 text-white/70 group-hover:text-red-500 transition-colors duration-300" />
              </button>
            </motion.div>
          </div>

          {/* Right side - Speaker image */}
          <div className="flex-1 relative flex items-center justify-center p-8">
            <div className="relative w-full max-w-lg">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-red-500/20 via-transparent to-transparent rounded-2xl" />
                  <img
                    src={speakers[active].image}
                    alt={speakers[active].name}
                    className="w-full h-auto rounded-2xl shadow-2xl shadow-red-500/10"
                    draggable={false}
                  />
                  
                  {/* Spotlight effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/50 rounded-2xl" />
                </motion.div>
              </AnimatePresence>
              
              {/* Background geometric shapes */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-red-500/10 rounded-full blur-xl" />
              <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-red-500/5 rounded-full blur-lg" />
            </div>
          </div>
        </div>

        {/* Bottom section - Thumbnail carousel */}
        <div className="relative px-8 md:px-16 lg:px-20 pb-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex items-center gap-4"
          >
            {/* Left navigation for thumbnails */}
            <button
              onClick={handlePrev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 hover:border-red-500/50 hover:bg-red-500/10 transition-all duration-300"
            >
              <IconArrowLeft className="h-4 w-4 text-white/50 hover:text-red-500" />
            </button>

            {/* Thumbnail images */}
            <div className="flex-1 flex justify-center gap-4 overflow-hidden">
              <div className="flex gap-4 transition-transform duration-500 ease-out">
                {speakers.map((speaker, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleThumbnailClick(index)}
                    className={`relative flex-shrink-0 overflow-hidden rounded-lg transition-all duration-300 ${
                      index === active
                        ? 'ring-2 ring-red-500 ring-offset-2 ring-offset-gray-900 scale-110'
                        : 'opacity-60 hover:opacity-80 hover:scale-105'
                    }`}
                    whileHover={{ scale: index === active ? 1.1 : 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="h-16 w-16 md:h-20 md:w-20 object-cover object-center"
                      draggable={false}
                    />
                    
                    {/* Active overlay */}
                    {index === active && (
                      <motion.div
                        layoutId="activeThumb"
                        className="absolute inset-0 bg-red-500/20 rounded-lg"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                    
                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Right navigation for thumbnails */}
            <button
              onClick={handleNext}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 hover:border-red-500/50 hover:bg-red-500/10 transition-all duration-300"
            >
              <IconArrowRight className="h-4 w-4 text-white/50 hover:text-red-500" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>
    </div>
  );
};
