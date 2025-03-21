"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { getImages } from "@/app/_actions/queries";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";

export function Hero() {
  const [heroImages, setHeroImages] = useState<string[] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchHeroImage = async () => {
      const images = await getImages();
      setHeroImages(images.map(image => image.imageUrl).slice(0, 5));
    };
    fetchHeroImage();
  }, []);

  // Handle image rotation with a 5-second interval
  useEffect(() => {
    if (!heroImages || heroImages.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [heroImages]);

  return (
    <section className="relative">
      {/* Full-screen Hero with large image */}
      <div className="relative h-screen bg-black">
        {/* Image Slideshow */}
        {heroImages && heroImages.length > 0 && (
          <div className="absolute inset-0">
            {heroImages.map((imageUrl, index) => (
              <Image
                key={index}
                src={imageUrl}
                alt={`Hero image ${index + 1}`}
                fill
                className="object-cover transition-opacity duration-1000"
                priority={index === 0}
                style={{ 
                  opacity: index === currentImageIndex ? 0.8 : 0, // Increased opacity for more vibrant images
                  zIndex: index === currentImageIndex ? 1 : 0
                }}
              />
            ))}
            
            {/* Subtle gradient overlay for better text visibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-2"></div>
            
            {/* Modern image indicator dots - positioned at bottom */}
            <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-3 z-20">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                    index === currentImageIndex 
                      ? "bg-white scale-110" 
                      : "bg-white/40 hover:bg-white/60"
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                  aria-label={`View image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}
        
        {/* Hero Content - Bold, modern typography with strong headline */}
        <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 lg:px-8 z-10">
          <div className="container mx-auto">
            <div className="max-w-3xl">
              {/* Large, bold headline with modern typography */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                The <span className="text-blue-400">Leader</span> in Water Solutions
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-2xl">
                Building sustainable water infrastructure solutions that transform communities since 1983
              </p>
              
              {/* Modern CTA button with hover effect */}
              {/* <Button className="bg-blue-600 hover:bg-blue-700 text-white border-none shadow-lg px-8 py-6 text-lg rounded-none">
                Request a Consultation
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button> */}
            </div>
          </div>
        </div>
      </div>

      {/* Feature Boxes - Redesigned with cleaner, more modern look */}
      <div className="bg-white py-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature Box 1 */}
          <div className="bg-white p-8 group transition-all duration-300 hover:shadow-xl">
            <div className="mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Water Treatment Plants</h3>
            <p className="text-gray-600 mb-6">
              Our advanced water treatment solutions ensure clean, safe water for communities and industries.
            </p>
            <Link
              href="/business"
              className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-all duration-300"
            >
              Learn More
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* Feature Box 2 */}
          <div className="bg-white p-8 group transition-all duration-300 hover:shadow-xl">
            <div className="mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Raw Water Intake Plants</h3>
            <p className="text-gray-600 mb-6">
              Efficient raw water intake systems designed for optimal performance and reliability.
            </p>
            <Link
              href="/projects"
              className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-all duration-300"
            >
              View Projects
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* Feature Box 3 */}
          <div className="bg-white p-8 group transition-all duration-300 hover:shadow-xl">
            <div className="mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Overhead Reservoirs</h3>
            <p className="text-gray-600 mb-6">
              State-of-the-art overhead reservoir solutions for effective water storage and distribution.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-all duration-300"
            >
              Explore Solutions
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
