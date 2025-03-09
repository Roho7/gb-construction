"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const statsData = [
  {
    number: 19,
    label: "WATER PLANTS",
    description: "Water in water treatment plant is treated through physical processes for example filtration or settling and chemical processes such as coagulation and disinfection."
  },
  {
    number: 47,
    label: "ALL PROJECTS",
    description: "We have completed end number of projects successfully and have become the preferred choice of various government and non-government organization."
  }
];

export function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(210,50%,98%)] to-[hsl(210,50%,90%)] z-0"></div>
      
      {/* Content */}
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video Column */}
          <div className="relative rounded-lg overflow-hidden shadow-2xl">
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src="https://www.youtube.com/embed/Sqm_Do0QkAww" 
                title="GB Construction Project Video 2019"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            
            {/* Video Overlay */}
            <div className="absolute bottom-0 left-0 bg-gradient-to-r from-[hsl(210,100%,40%)] to-[hsl(210,100%,30%)] text-white py-3 px-6 rounded-tr-lg">
              <h3 className="text-lg font-bold">SONARPUR</h3>
              <p className="text-xs opacity-80">PROJECT VALUE: INR 10,00,00,000/-</p>
            </div>
          </div>
          
          {/* Stats Column */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              A Company involved in servicing, maintenance.
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {statsData.map((stat, index) => (
                <div key={index} className="relative">
                  {/* Stat Number with Gradient */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="mb-4"
                  >
                    <span className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-[hsl(210,100%,50%)] to-[hsl(200,100%,45%)] bg-clip-text text-transparent">
                      {stat.number}
                    </span>
                  </motion.div>
                  
                  {/* Stat Label */}
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.1 }}
                    className="text-lg font-semibold mb-3"
                  >
                    {stat.label}
                  </motion.h3>
                  
                  {/* Stat Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                    className="text-sm text-gray-600"
                  >
                    {stat.description}
                  </motion.p>
                  
                  {/* Decorative Element */}
                  <div className={cn(
                    "absolute -z-10 rounded-full blur-3xl opacity-20",
                    index === 0 ? "top-0 right-0 w-32 h-32 bg-[hsl(210,100%,50%)]" : "bottom-0 left-0 w-40 h-40 bg-[hsl(200,100%,45%)]"
                  )}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[hsl(210,100%,40%)] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[hsl(200,100%,45%)] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
    </section>
  );
} 