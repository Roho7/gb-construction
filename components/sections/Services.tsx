"use client";

import { useEffect, useMemo, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { getImages, ImageType } from "@/app/_actions/queries";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { motion, useAnimationControls, useMotionValue } from "framer-motion";

const services = [
  {
    id: 'water-treatment-plants',
    title: "Water Treatment Plants",
    link: "/business/water-treatment",
  },
  {
    id: 'water-intake-plants',
    title: "Raw Water Intake Plants",
    link: "/business/raw-water",
  },
  {
    id: 'overhead-reservoirs',
    title: "Overhead Reservoirs",
    link: "/business/overhead-reservoirs",
  },
  {
    id: 'radial-collector-well-projects',
    title: "Radial Collector Well Projects",
    link: "/business/radial-collector",
  },
  {
    id: 'effluent-treatment-plants',
    title: "Effluent Treatment Plants",
    link: "/business/effluent-treatment",
  },
];

export function Services() {
  const [loading, setLoading] = useState(true);
  const [servicesImageData, setServicesImageData] = useState<ImageType[]>([]);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const controls = useAnimationControls();

  const servicesDataWithImage = useMemo(() => {
    return services.map(service => {
      return {
        ...service,
        image: servicesImageData.find(img => img.section === service.id)?.imageUrl || null,
        caption: servicesImageData.find(img => img.section === service.id)?.caption || null
      }
    })
  }, [servicesImageData]);

  // Clone services data to ensure continuous scrolling
  const extendedServices = useMemo(() => {
    return [...servicesDataWithImage, ...servicesDataWithImage, ...servicesDataWithImage];
  }, [servicesDataWithImage]);

  // Auto-scroll animation with Framer Motion
  useEffect(() => {
    if (loading) return;

    const startScrolling = async () => {
      // Calculate total width to scroll
      const container = containerRef.current;
      if (!container) return;
      
      const totalWidth = container.scrollWidth / 3;
      
      // Start the animation
      if (!isPaused) {
        await controls.start({
          x: -totalWidth,
          transition: {
            duration: 30,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop"
          }
        });
      } else {
        controls.stop();
      }
    };

    startScrolling();
  }, [controls, isPaused, loading]);

  useEffect(() => {
    const fetchServicesImageData = async () => {
      try {
        const data = await getImages("/services");
        setServicesImageData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching services image data:', error);
        setLoading(false);
      }
    };
    fetchServicesImageData();
  }, []);

  return (
    <section className="py-20 relative overflow-hidden">
      
      <div className="container">
        <div className="text-center mb-12">
          <h3 className="text-sm font-medium uppercase tracking-wider text-[hsl(210,100%,40%)] mb-2">OUR SERVICES</h3>
          <div className="w-16 h-1 bg-[hsl(210,100%,40%)] mx-auto mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What we Build</h2>
        </div>

        {/* Services Carousel - Single Row with Framer Motion */}
        <div className="relative overflow-hidden pb-4">
          <motion.div 
            ref={containerRef}
            className="flex gap-8"
            animate={controls}
            style={{ x }}
            onHoverStart={() => setIsPaused(true)}
            onHoverEnd={() => setIsPaused(false)}
          >
            {extendedServices.map((service, index) => (
              <motion.div 
                key={`${service.id}-${index}`} 
                className="w-[320px] flex-shrink-0 bg-white rounded-xl overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  zIndex: 10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: { duration: 0.3 }
                }}
                initial={{ boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" }}
                onHoverStart={() => setIsPaused(true)}
                onHoverEnd={() => setIsPaused(false)}
              >
                <div className={cn("relative h-64 w-full overflow-hidden", loading && "animate-pulse")}>
                  {service.image && (
                    <motion.div className="absolute inset-0">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                      {/* Gradient overlay that intensifies on hover */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/40 to-transparent"
                        initial={{ opacity: 0.6 }}
                        whileHover={{ opacity: 0.8 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  )}
                  
                  {/* Title overlay on the image */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-1 drop-shadow-md">{service.title}</h3>
                    {/* Animated accent line */}
                    <motion.div 
                      className="h-0.5 bg-blue-400 w-12"
                      whileHover={{ width: 60 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>
                
                <div className="p-6 bg-white">
                  <p className="text-sm text-gray-600 mb-5 line-clamp-3">{service.caption}</p>
                  
                  <Link 
                    href={service.link} 
                    className="group inline-flex items-center text-sm font-medium text-[hsl(210,100%,40%)] hover:text-[hsl(210,100%,50%)] relative"
                  >
                    <span className="relative z-10">See more</span>
                    {/* Animated arrow */}
                    <motion.span 
                      className="ml-1 relative z-10"
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.span>
                    
                    {/* Animated underline */}
                    <motion.span 
                      className="absolute bottom-0 left-0 h-[1px] bg-[hsl(210,100%,40%)]"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </div>
                
                {/* Decorative corner accent */}
                <motion.div 
                  className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-blue-400/20 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
} 