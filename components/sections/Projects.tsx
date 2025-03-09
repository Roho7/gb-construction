"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getCategories, getProjectsData, ProjectType } from "@/app/_actions/queries";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Tag } from "lucide-react";

const filters = [
  { name: "SHOW ALL PROJECTS", value: "all" },
  { name: "SORT: NEWEST", value: "newest" },
  { name: "TYPE", value: "type" },
  { name: "COUNTRY", value: "country" },
];

export function Projects() {
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [categories, setCategories] = useState<Record<string, string>>({});

  const displayedProjects = showAllProjects ? projects : projects.slice(0, 8);

  useEffect(() => {
    const fetchProjects = async () => {
      const projects = await getProjectsData();
      const categoriesData = await getCategories();
      
      // Create a lookup object with category ID as key and title as value
      const categoriesMap = categoriesData.reduce((acc, category) => {
        acc[category._id] = category.title;
        return acc;
      }, {} as Record<string, string>);
      
      setProjects(projects);
      setCategories(categoriesMap);
    };
    fetchProjects();
  }, []);

  // Helper function to get category titles from references
  const getCategoryTitles = (categoryRefs: Array<{_ref: string}> | undefined) => {
    if (!categoryRefs || categoryRefs.length === 0) return "Uncategorized";
    
    return categoryRefs
      .map(ref => categories[ref._ref])
      .filter(Boolean) // Remove any undefined values
      .join(", ");
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider text-blue-600 mb-2">Our Portfolio</h3>
            <h2 className="text-3xl md:text-4xl font-bold">Our Projects</h2>
          </div>
          
          {/* Filters - Redesigned as pills */}
          <div className="flex flex-wrap gap-3 mt-6 md:mt-0">
            {filters.map((filter) => (
              <button
                key={filter.value}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                  activeFilter === filter.value
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-white text-gray-600 hover:bg-gray-100 hover:text-blue-600"
                }`}
                onClick={() => setActiveFilter(filter.value)}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Projects Grid - Enhanced with motion and modern styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedProjects.map((project, index) => (
            <motion.div 
              key={index} 
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/projects`} className="block">
                <div className="relative h-64 overflow-hidden">
                  {/* Overlay gradient that appears on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  
                  {project.mainImage && (
                    <Image
                      src={project.mainImage}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  )}
                  
                  {/* Category tag that floats on the image */}
                  {project.categories && <div className="absolute top-4 right-4 z-20">
                    <span className="bg-white/90 backdrop-blur-sm text-blue-600 text-xs font-medium px-3 py-1 rounded-full shadow-sm capitalize">
                      {getCategoryTitles(project.categories)}
                    </span>
                  </div>}
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{project.startedAt || "Ongoing"}</span>
                  </div>
                  
                  {/* View project link with animated underline */}
                  <div className="flex items-center text-blue-600 font-medium text-sm mt-2 relative">
                    <span>View Project</span>
                    <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
                    {/* Animated underline */}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600/30 group-hover:w-[105px] transition-all duration-300"></span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        {/* View All Projects Button - Redesigned */}
        {!showAllProjects && projects.length > 20 && (
          <div className="text-center mt-12">
            <motion.button
              onClick={() => setShowAllProjects(true)}
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              VIEW ALL PROJECTS
              <ArrowRight className="ml-2 h-4 w-4" />
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
} 