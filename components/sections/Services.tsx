"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getImages, ImageType } from "@/app/_actions/queries";
import { cn } from "@/lib/utils";
import { ArrowRight, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    id: 'water-treatment-plants',
    title: "Water Treatment Plants",
    description: "Advanced water treatment solutions for clean, safe water supply to communities and industries.",
    link: "/business/water-treatment",
  },
  {
    id: 'water-intake-plants',
    title: "Raw Water Intake Plants",
    description: "Efficient raw water intake systems designed for optimal performance and reliability.",
    link: "/business/raw-water",
  },
  {
    id: 'overhead-reservoirs',
    title: "Overhead Reservoirs",
    description: "State-of-the-art overhead reservoir solutions for effective water storage and distribution.",
    link: "/business/overhead-reservoirs",
  },
  {
    id: 'radial-collector-well-projects',
    title: "Radial Collector Well Projects",
    description: "Innovative radial collector well systems for sustainable groundwater extraction.",
    link: "/business/radial-collector",
  },
  {
    id: 'effluent-treatment-plants',
    title: "Effluent Treatment Plants",
    description: "Comprehensive effluent treatment solutions for industrial and municipal wastewater.",
    link: "/business/effluent-treatment",
  },
];

export function Services() {
  const [loading, setLoading] = useState(true);
  const [servicesImageData, setServicesImageData] = useState<ImageType[]>([]);
  const [activeService, setActiveService] = useState<string | null>(null);
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  useEffect(() => {
    const fetchServicesImageData = async () => {
      try {
        const data = await getImages("/services");
        setServicesImageData(data);
        setLoading(false);
        // Set the first service as active by default
        if (data.length > 0 && services.length > 0) {
          setActiveService(services[0].id);
        }
      } catch (error) {
        console.error('Error fetching services image data:', error);
        setLoading(false);
      }
    };
    fetchServicesImageData();
  }, []);

  // Get the image URL for a service
  const getServiceImage = (serviceId: string) => {
    return servicesImageData.find(img => img.section === serviceId)?.imageUrl || null;
  };

  // Get the caption for a service
  const getServiceCaption = (serviceId: string) => {
    return servicesImageData.find(img => img.section === serviceId)?.caption || null;
  };

  // Find the active service object
  const activeServiceObj = services.find(service => service.id === activeService);
  const activeImageUrl = activeService ? getServiceImage(activeService) : null;
  const activeCaption = activeService ? getServiceCaption(activeService) : null;

  return (
    <section className="py-20 bg-white relative">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider text-blue-600 mb-2">OUR SERVICES</h3>
            <h2 className="text-3xl md:text-4xl font-bold">What We Build</h2>
          </div>
          
          <Link 
            href="/business" 
            className="inline-flex items-center mt-4 md:mt-0 text-blue-600 font-medium hover:text-blue-800 transition-colors group"
          >
            View All Services
            <span className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300">
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left side: Service list */}
          <div className="lg:col-span-4 space-y-1">
            {services.map((service) => (
              <motion.button
                key={service.id}
                className={cn(
                  "w-full text-left px-6 py-4 rounded-lg transition-all duration-300 relative overflow-hidden group",
                  activeService === service.id 
                    ? "bg-blue-600 text-white" 
                    : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                )}
                onClick={() => setActiveService(service.id)}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                whileHover={{ x: 8 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-medium text-lg">{service.title}</h3>
                  <ChevronRight className={cn(
                    "w-5 h-5 transition-transform duration-300",
                    activeService === service.id ? "text-white" : "text-blue-600",
                    (activeService === service.id || hoveredService === service.id) ? "translate-x-1" : ""
                  )} />
                </div>
                
                {/* Animated underline that appears on hover or when active */}
                <motion.div 
                  className={cn(
                    "absolute bottom-0 left-0 h-0.5",
                    activeService === service.id ? "bg-white" : "bg-blue-600"
                  )}
                  initial={{ width: 0 }}
                  animate={{ 
                    width: (activeService === service.id || hoveredService === service.id) ? "100%" : 0 
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </div>
          
          {/* Right side: Featured service with image */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {activeService && (
                <motion.div 
                  key={activeService}
                  className="bg-gray-50 rounded-xl overflow-hidden h-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                    {/* Image side */}
                    <div className={cn("relative h-64 md:h-full w-full", loading && "animate-pulse")}>
                      {activeImageUrl ? (
                        <Image
                          src={activeImageUrl}
                          alt={activeServiceObj?.title || "Service"}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-blue-100 flex items-center justify-center">
                          <span className="text-blue-400">Image loading...</span>
                        </div>
                      )}
                      {/* Subtle gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>
                    
                    {/* Content side */}
                    <div className="p-8 flex flex-col">
                      <h3 className="text-2xl font-bold mb-4 text-gray-900">{activeServiceObj?.title}</h3>
                      
                      <p className="text-gray-600 mb-6">
                        {activeCaption || activeServiceObj?.description || "Loading description..."}
                      </p>
                      
                      <div className="mt-auto">
                        <Link 
                          href={activeServiceObj?.link || "/business"}
                          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          Learn More
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-40 right-0 w-64 h-64 bg-blue-50 rounded-full opacity-30 -z-10 blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-50 rounded-full opacity-30 -z-10 blur-3xl" />
    </section>
  );
} 