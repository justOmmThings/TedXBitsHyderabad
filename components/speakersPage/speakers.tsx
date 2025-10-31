'use client';
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../Footer';
import { IoClose } from 'react-icons/io5';



// Sample speaker data with info section
// Sample speaker data with individual social media links
export const speakersData = [

{
id: 1,
name: "SUBASHISH PANI",
title: "Business Leader",
subtitle: "Visionary entrepreneur and innovation strategist",
image: "/speakersPageImages/img2.JPG",
event: "TEDx BITS Hyderabad",
theme: "MIND / SCAPES",
instagram: "https://instagram.com/thomaskehl",
linkedin: "https://linkedin.com/in/thomaskehl",
youtube: "https://youtube.com/@finanzfluss",
// info: "Thomas Kehl is a renowned media entrepreneur and bestselling author who co-founded FINANZFLUSS, one of Germany's leading financial education platforms. With over 10 years of experience in digital media and financial literacy, Thomas has helped millions of people understand complex financial concepts through engaging content. He is passionate about democratizing financial education and making investment knowledge accessible to everyone. His expertise spans across digital marketing, content creation, and financial markets."
},
{
id: 2,
name: "RISHIKESH SR",
title: "Tech Visionary",
subtitle: "Pioneering innovation in digital solutions",
image: "/speakersPageImages/img5.jpg",
event: "TEDx BITS Hyderabad",
theme: "MIND / SCAPES",
instagram: "https://instagram.com/thomaskehl",
linkedin: "https://linkedin.com/in/thomaskehl",
youtube: "https://youtube.com/@finanzfluss",
// info: "Thomas Kehl is a renowned media entrepreneur and bestselling author who co-founded FINANZFLUSS, one of Germany's leading financial education platforms. With over 10 years of experience in digital media and financial literacy, Thomas has helped millions of people understand complex financial concepts through engaging content. He is passionate about democratizing financial education and making investment knowledge accessible to everyone. His expertise spans across digital marketing, content creation, and financial markets."
},
{
id: 3,
name: "VIIVEK MASHRU",
title: "Creative Director",
subtitle: "Crafting compelling narratives and experiences",
image: "/speakersPageImages/img1.jpg",
event: "TEDx BITS Hyderabad",
theme: "MIND / SCAPES",
instagram: "https://instagram.com/thomaskehl",
linkedin: "https://linkedin.com/in/thomaskehl",
youtube: "https://youtube.com/@finanzfluss",
// info: "Thomas Kehl is a renowned media entrepreneur and bestselling author who co-founded FINANZFLUSS, one of Germany's leading financial education platforms. With over 10 years of experience in digital media and financial literacy, Thomas has helped millions of people understand complex financial concepts through engaging content. He is passionate about democratizing financial education and making investment knowledge accessible to everyone. His expertise spans across digital marketing, content creation, and financial markets."
},
{
id: 4,
name: "MITHOON",
title: "Singer-Composer",
subtitle: "Renowned for captivating compositions and performances",
image: "/speakersPageImages/img4.jpg",
event: "TEDx BITS Hyderabad",
theme: "MIND / SCAPES",
instagram: "https://instagram.com/thomaskehl",
linkedin: "https://linkedin.com/in/thomaskehl",
youtube: "https://youtube.com/@finanzfluss",
// info: "Thomas Kehl is a renowned media entrepreneur and bestselling author who co-founded FINANZFLUSS, one of Germany's leading financial education platforms. With over 10 years of experience in digital media and financial literacy, Thomas has helped millions of people understand complex financial concepts through engaging content. He is passionate about democratizing financial education and making investment knowledge accessible to everyone. His expertise spans across digital marketing, content creation, and financial markets."
},
{
id: 5,
name: "NEETA LULLA",
title: "Costume designer",
subtitle: "Celebrated couturier redefining Indian elegance",
image: "/speakersPageImages/img7.jpg",
event: "TEDx BITS Hyderabad",
theme: "MIND / SCAPES",
instagram: "https://instagram.com/thomaskehl",
linkedin: "https://linkedin.com/in/thomaskehl",
youtube: "https://youtube.com/@finanzfluss",
// info: "Thomas Kehl is a renowned media entrepreneur and bestselling author who co-founded FINANZFLUSS, one of Germany's leading financial education platforms. With over 10 years of experience in digital media and financial literacy, Thomas has helped millions of people understand complex financial concepts through engaging content. He is passionate about democratizing financial education and making investment knowledge accessible to everyone. His expertise spans across digital marketing, content creation, and financial markets."
},
{
id: 6,
name: "ARUN TIWARI",
title: "Missile Scientist",
subtitle: "Pioneering India's aerospace and defense technology",
image: "/speakersPageImages/img3.jpg",
event: "TEDx BITS Hyderabad",
theme: "MIND / SCAPES",
instagram: "https://instagram.com/thomaskehl",
linkedin: "https://linkedin.com/in/thomaskehl",
youtube: "https://youtube.com/@finanzfluss",
// info: "Thomas Kehl is a renowned media entrepreneur and bestselling author who co-founded FINANZFLUSS, one of Germany's leading financial education platforms. With over 10 years of experience in digital media and financial literacy, Thomas has helped millions of people understand complex financial concepts through engaging content. He is passionate about democratizing financial education and making investment knowledge accessible to everyone. His expertise spans across digital marketing, content creation, and financial markets."
},
{
id: 7,
name: "PANKAJ BHADOURIA",
title: "Celebrity Chef",
subtitle: "India's first MasterChef and culinary educator",
image: "/speakersPageImages/img8.jpg",
event: "TEDx BITS Hyderabad",
theme: "MIND / SCAPES",
instagram: "https://instagram.com/thomaskehl",
linkedin: "https://linkedin.com/in/thomaskehl",
youtube: "https://youtube.com/@finanzfluss",
// info: "Thomas Kehl is a renowned media entrepreneur and bestselling author who co-founded FINANZFLUSS, one of Germany's leading financial education platforms. With over 10 years of experience in digital media and financial literacy, Thomas has helped millions of people understand complex financial concepts through engaging content. He is passionate about democratizing financial education and making investment knowledge accessible to everyone. His expertise spans across digital marketing, content creation, and financial markets."
},
{
id: 8,
name: "ANUBHA BAJAJ",
title: "Indie Pop Artist",
subtitle: "Creating soulful indie melodies that connect hearts",
image: "/speakersPageImages/img6.jpg",
event: "TEDx BITS Hyderabad",
theme: "MIND / SCAPES",
instagram: "https://instagram.com/thomaskehl",
linkedin: "https://linkedin.com/in/thomaskehl",
youtube: "https://youtube.com/@finanzfluss",
// info: "Thomas Kehl is a renowned media entrepreneur and bestselling author who co-founded FINANZFLUSS, one of Germany's leading financial education platforms. With over 10 years of experience in digital media and financial literacy, Thomas has helped millions of people understand complex financial concepts through engaging content. He is passionate about democratizing financial education and making investment knowledge accessible to everyone. His expertise spans across digital marketing, content creation, and financial markets."
},
{
id: 9,
name: "RANVEER BRAR",
title: "Celebrity chef",
subtitle: "Renowned culinary artist and TV personality",
image: "/speakersPageImages/1.webp",
event: "TEDx BITS Hyderabad",
theme: "MIND / SCAPES",
instagram: "https://instagram.com/thomaskehl",
linkedin: "https://linkedin.com/in/thomaskehl",
youtube: "https://youtube.com/@finanzfluss",
// info: "Thomas Kehl is a renowned media entrepreneur and bestselling author who co-founded FINANZFLUSS, one of Germany's leading financial education platforms. With over 10 years of experience in digital media and financial literacy, Thomas has helped millions of people understand complex financial concepts through engaging content. He is passionate about democratizing financial education and making investment knowledge accessible to everyone. His expertise spans across digital marketing, content creation, and financial markets."
},
{
id: 10,
name: "ZOYA AGARWAL",
title: "Captain Zoya Agarwal",
subtitle: "Trailblazing Pilot & Aviation Pioneer",
image: "/speakersPageImages/2.webp",
event: "TEDx BITS Hyderabad",
theme: "MIND / SCAPES",
instagram: "https://instagram.com/adrianrouzbeh",
linkedin: "https://linkedin.com/in/adrianrouzbeh",
youtube: "https://youtube.com/@adrianrouzbeh",
// info: "Adrian Rouzbeh is a multi-faceted personality who combines business acumen with martial arts expertise. As a bestselling author, he has written extensively about personal development, discipline, and achieving peak performance. His entrepreneurial ventures span multiple industries, while his black belt in MMA demonstrates his commitment to physical and mental excellence. Adrian believes in the power of discipline and mental fortitude to overcome any obstacle in life."
},
{
id: 11,
name: "TRAVIN SINGH",
title: "Entrepreneur & Innovator",
subtitle: "Sustainability Advocate & FoodTech Visionary",
image: "/speakersPageImages/3.webp",
event: "TEDx BITS Hyderabad",
theme: "MIND / SCAPES",
instagram: "https://instagram.com/cynthiahansen",
linkedin: "https://linkedin.com/in/cynthiahansen",
youtube: "https://youtube.com/@cynthiahansen",
// info: "Cynthia Hansen is a visionary leader in the field of innovation and workforce development. As Managing Director of the Innovation Foundation, empowered by the Adecco Group, she spearheads initiatives that bridge the gap between emerging technologies and human potential. With a background in organizational psychology and change management, Cynthia has been instrumental in helping companies navigate digital transformation while maintaining their human-centered approach."
},
{
id: 12,
name: "DEVAAGYH DIXIT",
title: "Musical Prodigy",
subtitle: "India's Youngest & Fastest Drummer",
image: "/speakersPageImages/4.webp",
event: "TEDx BITS Hyderabad",
theme: "MIND / SCAPES",
instagram: "https://instagram.com/sarahjohnson",
linkedin: "https://linkedin.com/in/sarahjohnson",
youtube: "https://youtube.com/@futuretechlabs",
// info: "Sarah Johnson is a pioneering tech innovator and AI researcher who founded FutureTech Labs, a cutting-edge research facility focused on artificial intelligence and machine learning applications. With a PhD in Computer Science from MIT, Sarah has published over 50 research papers and holds multiple patents in AI technology. She is passionate about ethical AI development and ensuring technology serves humanity's best interests."
},
{
id: 13,
name: "NIKHIL KAMATH",
title: "Entrepreneur & Investor",
subtitle: "Co-founder of Zerodha & True Beacon",
image: "/speakersPageImages/5.webp",
event: "TEDx BITS Hyderabad",
theme: "MIND / SCAPES",
instagram: "https://instagram.com/michaelchen",
linkedin: "https://linkedin.com/in/michaelchen",
youtube: "https://youtube.com/@greensolutions",
// info: "Michael Chen is a dedicated sustainability expert and climate activist who serves as Director of Green Solutions Inc. With over 15 years of experience in environmental conservation and renewable energy, Michael has led numerous projects that have significantly reduced carbon footprints for major corporations. He holds a Master's degree in Environmental Science and is a certified sustainability professional who believes in the power of collective action to combat climate change."
},
{
id: 14,
name: "MONIKA SEYFRIED",
title: "Interaction Designer & Futurist",
subtitle: "Exploring Ethics, Ecology & Emerging Technologies",
image: "/speakersPageImages/6.webp",
event: "TEDx BITS Hyderabad",
theme: "MIND / SCAPES",
instagram: "https://instagram.com/elenarodriguez",
linkedin: "https://linkedin.com/in/elenarodriguez",
youtube: "https://youtube.com/@changemakersfoundation",
// info: "Elena Rodriguez is a passionate social impact leader and philanthropist who serves as CEO of the Change Makers Foundation. Her organization has impacted over 100,000 lives through education, healthcare, and community development programs across Latin America. Elena's approach combines strategic thinking with grassroots activism, and she has been recognized by the UN for her innovative approaches to sustainable development and social change."
},
{
id: 15,
name: "NARPATH RAMAN",
title: "Mentalist & Mind Reader",
subtitle: "Blending Mind, Magic & Reality",
image: "/speakersPageImages/9.webp",
event: "TEDx BITS Hyderabad",
theme: "MIND / SCAPES",
instagram: "https://instagram.com/elenarodriguez",
linkedin: "https://linkedin.com/in/elenarodriguez",
youtube: "https://youtube.com/@changemakersfoundation",
// info: "Elena Rodriguez is a passionate social impact leader and philanthropist who serves as CEO of the Change Makers Foundation. Her organization has impacted over 100,000 lives through education, healthcare, and community development programs across Latin America. Elena's approach combines strategic thinking with grassroots activism, and she has been recognized by the UN for her innovative approaches to sustainable development and social change."
},
{
id: 16,
name: "DR. PATRIZIA AZZI",
title: "Social Innovation Leader",
subtitle: "Bridging Research, Ethics & Human Rights",
image: "/speakersPageImages/7.webp",
event: "TEDx BITS Hyderabad",
theme: "MIND / SCAPES",
instagram: "https://instagram.com/elenarodriguez",
linkedin: "https://linkedin.com/in/elenarodriguez",
youtube: "https://youtube.com/@changemakersfoundation",
// info: "Elena Rodriguez is a passionate social impact leader and philanthropist who serves as CEO of the Change Makers Foundation. Her organization has impacted over 100,000 lives through education, healthcare, and community development programs across Latin America. Elena's approach combines strategic thinking with grassroots activism, and she has been recognized by the UN for her innovative approaches to sustainable development and social change."
},
{
id: 17,
name: "MANASA VARANASI",
title: "Miss India World 2020",
subtitle: "Engineer, Model & Advocate for Mental Health Awareness",
image: "/speakersPageImages/8.webp",
event: "TEDx BITS Hyderabad",
theme: "MIND / SCAPES",
instagram: "https://instagram.com/elenarodriguez",
linkedin: "https://linkedin.com/in/elenarodriguez",
youtube: "https://youtube.com/@changemakersfoundation",
// info: "Elena Rodriguez is a passionate social impact leader and philanthropist who serves as CEO of the Change Makers Foundation. Her organization has impacted over 100,000 lives through education, healthcare, and community development programs across Latin America. Elena's approach combines strategic thinking with grassroots activism, and she has been recognized by the UN for her innovative approaches to sustainable development and social change."
}

];



// Animated Network Background Component
const NetworkBackground = () => {
const canvasRef = useRef(null);



useEffect(() => {
const canvas = canvasRef.current;
const ctx = canvas.getContext('2d');



// Set canvas size
const resizeCanvas = () => {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
};



resizeCanvas();
window.addEventListener('resize', resizeCanvas);



// Particle system
const particles = [];
const numParticles = 60;
const maxDistance = 150; // Increased connection distance



// Create particles
for (let i = 0; i < numParticles; i++) {
particles.push({
x: Math.random() * canvas.width,
y: Math.random() * canvas.height,
vx: (Math.random() - 0.5) * 0.8,
vy: (Math.random() - 0.5) * 0.8,
radius: Math.random() * 1.5 + 1,
});
}



// Animation loop
const animate = () => {
ctx.clearRect(0, 0, canvas.width, canvas.height);



// Draw connections first (behind particles)
for (let i = 0; i < particles.length; i++) {
for (let j = i + 1; j < particles.length; j++) {
const dx = particles[j].x - particles[i].x;
const dy = particles[j].y - particles[i].y;
const distance = Math.sqrt(dx * dx + dy * dy);



if (distance < maxDistance) {
// Significantly increased opacity with minimum base opacity
const opacity = Math.max(0.2, (maxDistance - distance) / maxDistance * 0.7);



// Begin new path for each line
ctx.beginPath();
ctx.moveTo(particles[i].x, particles[i].y);
ctx.lineTo(particles[j].x, particles[j].y);
ctx.strokeStyle = `rgba(236, 0, 36, ${opacity})`; // TEDx red with much higher opacity
ctx.lineWidth = 1.5; // Thicker lines for better visibility
ctx.stroke();



// Add a subtle glow effect for even more prominence
ctx.beginPath();
ctx.moveTo(particles[i].x, particles[i].y);
ctx.lineTo(particles[j].x, particles[j].y);
ctx.strokeStyle = `rgba(255, 100, 120, ${opacity * 0.3})`; // Lighter red glow
ctx.lineWidth = 3;
ctx.stroke();
}
}
}



// Update and draw particles
particles.forEach((particle) => {
// Update position
particle.x += particle.vx;
particle.y += particle.vy;



// Bounce off edges
if (particle.x < 0 || particle.x > canvas.width) {
particle.vx *= -1;
particle.x = Math.max(0, Math.min(canvas.width, particle.x));
}
if (particle.y < 0 || particle.y > canvas.height) {
particle.vy *= -1;
particle.y = Math.max(0, Math.min(canvas.height, particle.y));
}



// Draw particle (white vertices with subtle glow)
// Main white dot
ctx.beginPath();
ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
ctx.fillStyle = 'rgba(255, 255, 255, 0.9)'; // Increased opacity for dots
ctx.fill();



// Subtle glow around dots
ctx.beginPath();
ctx.arc(particle.x, particle.y, particle.radius * 2, 0, Math.PI * 2);
ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
ctx.fill();
});



requestAnimationFrame(animate);
};



animate();



return () => {
window.removeEventListener('resize', resizeCanvas);
};
}, []);



return (
<canvas
ref={canvasRef}
className="fixed inset-0 pointer-events-none z-0"
style={{ background: 'transparent' }}
/>
);
};




// Modal Component for Speaker Details - Fully Responsive
// Modal Component for Speaker Details - With Social Media Icons
const SpeakerModal = ({ speaker, isOpen, onClose }) => {
  if (!isOpen || !speaker) return null;



  // Handle social media clicks using speaker's individual links
  const handleSocialClick = (platform) => {
    let url = '';
    switch(platform) {
      case 'instagram':
        url = speaker.instagram || '#'; // Fallback to # if no link provided
        break;
      case 'linkedin':
        url = speaker.linkedin || '#'; // Fallback to # if no link provided
        break;
      case 'youtube':
        url = speaker.youtube || '#'; // Fallback to # if no link provided
        break;
      default:
        return;
    }
    
    // Only open if there's a valid URL (not just #)
    if (url !== '#') {
      window.open(url, '_blank');
    }
  };



  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />



      {/* Modal Content - Wider and More Compact */}
      <div className="relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 w-full max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl overflow-hidden">
        {/* Close Button - Touch-friendly */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 p-2 sm:p-3 rounded-full hover:bg-gray-100 transition-colors duration-200 z-10"
        >
          <IoClose className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
        </button>



        {/* Speaker Image and Info - More Compact Layout */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 mb-6">
          <div className="flex-shrink-0 mx-auto sm:mx-0">
            <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-xl sm:rounded-2xl overflow-hidden">
              <Image
                src={speaker.image}
                alt={speaker.name}
                width={160}
                height={160}
                className="w-full h-full object-cover"
              />
            </div>
          </div>



          {/* Speaker Basic Info - Optimized for wider layout */}
          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight">
              {speaker.name}
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#ec0024] font-semibold mb-1 sm:mb-2 leading-tight">
              {speaker.title}
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-3 sm:mb-4 leading-tight">
              {speaker.subtitle}
            </p>
            <div className="inline-flex items-center bg-gray-100 rounded-full px-4 sm:px-5 py-2 sm:py-2.5 text-sm sm:text-base">
              <span className="font-semibold text-[#ec0024]">TEDx</span>
              <span className="text-gray-600 ml-1">BITS Hyderabad</span>
            </div>
          </div>
        </div>



        {/* Social Media Icons Section - Individual Links */}
        <div className="text-center">
          <div className="flex justify-center items-center gap-8 sm:gap-10 lg:gap-12">
            {/* Instagram Icon - Individual Link */}
            <button
              onClick={() => handleSocialClick('instagram')}
              className={`p-3 sm:p-4 lg:p-5 rounded-full bg-gray-50 hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 group ${
                speaker.instagram ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'
              }`}
              disabled={!speaker.instagram}
            >
              <svg 
                className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-[#ec0024] group-hover:text-[#d1001f]" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </button>



            {/* LinkedIn Icon - Individual Link */}
            <button
              onClick={() => handleSocialClick('linkedin')}
              className={`p-3 sm:p-4 lg:p-5 rounded-full bg-gray-50 hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 group ${
                speaker.linkedin ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'
              }`}
              disabled={!speaker.linkedin}
            >
              <svg 
                className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-[#ec0024] group-hover:text-[#d1001f]" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </button>



            {/* YouTube Icon - Individual Link */}
            <button
              onClick={() => handleSocialClick('youtube')}
              className={`p-3 sm:p-4 lg:p-5 rounded-full bg-gray-50 hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 group ${
                speaker.youtube ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'
              }`}
              disabled={!speaker.youtube}
            >
              <svg 
                className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-[#ec0024] group-hover:text-[#d1001f]" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};



// Fully Responsive Speaker Card Component
const SpeakerCard = ({ speaker, index, onClick }) => {
return (
<div
className="group relative overflow-hidden rounded-xl sm:rounded-2xl aspect-[3/4] cursor-pointer transform transition-transform duration-300 hover:scale-[1.02] z-10"
data-aos="fade-up"
data-aos-delay={index * 100}
onClick={() => onClick(speaker)}
>
{/* Background Image with Red Overlay */}
<div className="absolute inset-0 bg-gradient-to-b from-[#ec0024]/30 via-[#ec0024]/60 to-[#ec0024]/90">
<Image
src={speaker.image}
alt={speaker.name}
fill
className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 33vw"
/>
</div>



{/* Event Badge - Enhanced Red Color for BITS Hyderabad */}
<div className="absolute top-2 sm:top-3 left-2 sm:left-3 right-2 sm:right-3">
<div className="flex items-center justify-between text-white text-xs sm:text-sm">
<span className="font-bold">
<span className="text-white">TEDx</span>
<span className="text-red-400 font-extrabold"> BITS Hyderabad</span>
</span>
</div>
</div>



{/* Speaker Name - Responsive Typography */}
<div className="absolute inset-0 flex items-center justify-center">
<div className="text-center px-2 sm:px-3">
<h3 className="text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-red-200 via-red-300 to-red-500 leading-tight tracking-wider transform transition-all duration-500 group-hover:scale-105">
{speaker.name.split(' ').map((word, idx) => (
<div key={idx} className="block">
{word}
</div>
))}
</h3>
</div>
</div>



{/* Speaker Details - Responsive Bottom Section */}
<div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 md:p-4">
<div className="text-white text-center">
<p className="text-xs sm:text-sm font-medium leading-tight mb-1">
{speaker.title}
</p>
<p className="text-xs text-white/90 font-normal leading-tight">
{speaker.subtitle}
</p>
</div>
</div>



{/* Hover Overlay Effect */}
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />



{/* Click indicator */}
<div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-xl sm:rounded-2xl transition-colors duration-300" />
</div>
);
};



export default function SpeakersPage() {
const [selectedSpeaker, setSelectedSpeaker] = useState(null);
const [isModalOpen, setIsModalOpen] = useState(false);



useEffect(() => {
AOS.init({
duration: 600, // Reduced from 800ms to 600ms for faster animations
once: true,
easing: 'ease-out-cubic',
offset: 50, // Reduced from default 120px to 50px - triggers animations much earlier
anchorPlacement: 'top-bottom', // Animation triggers when top of element hits bottom of viewport
});
}, []);



const handleSpeakerClick = (speaker) => {
setSelectedSpeaker(speaker);
setIsModalOpen(true);
};



const handleCloseModal = () => {
setIsModalOpen(false);
setSelectedSpeaker(null);
};



// Prevent body scroll when modal is open
useEffect(() => {
if (isModalOpen) {
document.body.style.overflow = 'hidden';
} else {
document.body.style.overflow = 'unset';
}



return () => {
document.body.style.overflow = 'unset';
};
}, [isModalOpen]);



return (
<div className="min-h-screen bg-black text-white relative">
{/* Animated Network Background */}
<NetworkBackground />



{/* Header Section - Enhanced Responsive Typography */}
<div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-28 lg:pt-32 xl:pt-36 relative z-10">
<div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 mt-4">
<h1
className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 sm:mb-6 lg:mb-8 leading-tight"
data-aos="fade-down"
>
OUR <span className="text-[#ec0024]">SPEAKERS</span>
</h1>
<p
className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto leading-relaxed px-4 sm:px-0"
data-aos="fade-up"
data-aos-delay="200"
>
Nothing would be possible without our <span className="text-[#ec0024] font-semibold">inspiring</span> line-up of Speakers!
</p>
</div>
</div>



{/* Speakers Grid - 3 Columns with Better Spacing */}
<div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 pb-12 sm:pb-16 md:pb-20 lg:pb-24 relative z-10">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 xl:gap-16">
{speakersData.map((speaker, index) => (
<SpeakerCard
key={speaker.id}
speaker={speaker}
index={index}
onClick={handleSpeakerClick}
/>
))}
</div>
</div>



{/* Speaker Details Modal */}
<SpeakerModal
speaker={selectedSpeaker}
isOpen={isModalOpen}
onClose={handleCloseModal}
/>



<Footer/>
</div>
);
}

