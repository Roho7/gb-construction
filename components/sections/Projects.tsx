"use client";

import { useEffect, useState, useRef, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { CategoryType, getCategories, getProjectsData, ProjectType } from "@/app/_actions/queries";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Calendar, ChevronLeft, ChevronRight, Search } from "lucide-react";
import { useData } from "@/app/_hooks/useData";
import { Button } from "../ui/button";



export function Projects() {
  const { projects, categories } = useData();
  const [activeFilter, setActiveFilter] = useState("all");

  const carouselRef = useRef<HTMLDivElement>(null);
  
  // For horizontal scrolling
  const handleScrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };
  
  const handleScrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  const displayedProjects = useMemo(() => projects.filter(project => {
    if (activeFilter === "all") return true;
    if (!project.categories) return false;
    return project.categories.some(category => category._ref === activeFilter);
  }), [projects, activeFilter]);

  // Helper function to get category titles from references
  const getCategoryTitles = (categoryRefs: Array<{_ref: string}> | undefined) => {
    if (!categoryRefs || categoryRefs.length === 0) return "Uncategorized";
    
    return categoryRefs
      .map(ref => categories.find(c => c._id === ref._ref)?.title)
      .filter(Boolean) // Remove any undefined values
      .join(", ");
  };

  return (
    <section className="py-20 bg-black text-white overflow-x-hidden">
      <div className="container mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Our Projects</h2>
          </div>
          
          {/* Filters - Redesigned as minimal buttons */}
          <div className="flex flex-wrap gap-6 mt-6 md:mt-0">
            {categories.map((category) => (
              <button
                key={category._id}
                className={`text-sm font-medium transition-all duration-300 relative capitalize ${
                  activeFilter === category._id
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
                onClick={() => setActiveFilter(category._id)}
              >
                {category.title}
                {activeFilter === category._id && (
                  <motion.div 
                    className="absolute -bottom-2 left-0 h-0.5 bg-blue-500" 
                    layoutId="activeFilter"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
            ))}
            <Button variant="ghost" size="sm" onClick={() => setActiveFilter("all")}>View All</Button>
          </div>
        </div>
      </div>
      
      {/* Project carousel navigation */}
      <div className="container flex justify-end mb-4">
        <div className="flex space-x-2">
          <button 
            onClick={handleScrollLeft}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={handleScrollRight}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      {/* Horizontal project carousel */}
      <div 
        ref={carouselRef}
        className="flex overflow-x-auto hide-scrollbar pb-8 px-4 -mx-4 snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {displayedProjects.map((project, index) => (
          <motion.div 
            key={index} 
            className="flex-shrink-0 w-[300px] md:w-[350px] snap-start mr-4 group relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ width: '380px' }}
          >
            <Link href={`/projects`} className="block h-full">
              <div className="relative h-[500px] overflow-hidden">
                {/* Project number */}
                <div className="absolute top-6 left-6 z-20">
                  <span className="text-white text-sm font-bold opacity-80">
                    {index < 9 ? `0${index + 1}` : index + 1}
                  </span>
                </div>
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>
                
                {project.mainImage && (
                  <Image
                    src={project.mainImage}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                )}
                
                {/* Project title at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center text-white/70 text-sm mb-4 capitalize">
                    <span>{getCategoryTitles(project.categories)}</span>
                  </div>
                  
                  {/* View button that appears on hover */}
                  <motion.div 
                    className="flex items-center text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center mr-3">
                      <Search className="w-4 h-4" />
                    </div>
                    <span>View Project</span>
                  </motion.div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      

      {/* Add custom CSS for hiding scrollbar */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
} 