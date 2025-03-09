"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { getImages } from "@/app/_actions/queries";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

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
      {/* Main Hero */}
      <div className="relative h-[80vh] bg-black">
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
                  opacity: index === currentImageIndex ? 0.6 : 0, // Fixed opacity value
                  zIndex: index === currentImageIndex ? 1 : 0
                }}
              />
            ))}
            
            {/* Dark overlay to improve text visibility */}
            <div className="absolute inset-0 bg-black/30 z-2"></div>
            
            {/* Image indicator dots */}
            <div className="absolute top-8 left-0 right-0 flex justify-center gap-2">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 z-[90] cursor-pointer ${
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
        
        {/* Hero Content - Now with higher z-index and consistent styling */}
        <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 lg:px-8 z-10">
          <div className="container mx-auto">
            <div className="relative">
              {/* Optional text shadow for better visibility */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 max-w-4xl drop-shadow-lg">
                GB Construction
              </h1>
              <p className="text-lg md:text-xl text-white mb-8 max-w-2xl drop-shadow-md">
                The leader in water management solutions
              </p>
              
              {/* Optional: Add a CTA button for better engagement */}
                <Button className="bg-blue-600 hover:bg-blue-700 text-white border-none shadow-lg">
                  Get in Touch
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Boxes */}
      <div className="container mx-auto -mt-24 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Feature Box 1 */}
        <div className="relative overflow-hidden rounded-lg shadow-xl p-8 md:p-10 group">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(210,100%,40%)] to-[hsl(200,100%,30%)] transition-transform duration-700 group-hover:scale-105"></div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-white opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-white opacity-5"></div>
          
          {/* Content */}
          <div className="relative z-10 text-white">
            <h2 className="text-2xl font-bold mb-4 group-hover:translate-x-1 transition-transform duration-300">
              Welcome to GB Construction 
            </h2>
            <p className="text-white/90 mb-6 leading-relaxed">
              G.B. Construction (GBC) was established in the year 2004 and since
              inception GBC is engaged in Water System Management projects
              especially Water Treatment Plants which are directly related to the
              infrastructural development of our country and through the years, GB
              has gained the confidence of their clients in the Government and
              Semi-Government Sectors.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center text-sm font-medium text-white hover:text-white/80 border-b border-transparent hover:border-white/50 pb-1 transition-all duration-300"
            >
              EXPLORE MORE
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>

        {/* Feature Box 2 */}
        <div className="relative overflow-hidden rounded-lg shadow-xl p-8 md:p-10 group">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(210,70%,30%)] to-[hsl(220,70%,20%)] transition-transform duration-700 group-hover:scale-105"></div>
          
          {/* Decorative Elements */}
          <div className="absolute -bottom-20 -right-20 w-48 h-48 rounded-full bg-white opacity-5"></div>
          <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-white opacity-5"></div>
          
          {/* Content */}
          <div className="relative z-10 text-white">
            <h2 className="text-2xl font-bold mb-4 group-hover:translate-x-1 transition-transform duration-300">
              Knowledge and foresight to shape sustainable places
            </h2>
            <p className="text-white/90 mb-6 leading-relaxed">
              Dedicated to leveraging our expertise in knowledge and insight about
              engineering excellence, we create sustainable water infrastructure
              that transforms communities and improves lives.
            </p>
            <Link
              href="/projects"
              className="inline-flex items-center text-sm font-medium text-white hover:text-white/80 border-b border-transparent hover:border-white/50 pb-1 transition-all duration-300"
            >
              VIEW PROJECTS
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
