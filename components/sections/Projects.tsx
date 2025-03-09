"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "West End Water Treatment Plant",
    location: "Kolkata, India",
    category: "water-treatment",
    image: "/images/project-1.jpg",
    link: "/projects/west-end-water-treatment",
    type: "WATER TREATMENT",
  },
  {
    id: 2,
    title: "Tilya Park Water Treatment Plant",
    location: "Tilya Park, Sweden",
    category: "water-treatment",
    image: "/images/project-2.jpg",
    link: "/projects/tilya-park-water-treatment",
    type: "PARKS",
  },
  {
    id: 3,
    title: "University of Connecticut, Local Hall",
    location: "Connecticut, USA",
    category: "education",
    image: "/images/project-3.jpg",
    link: "/projects/university-connecticut",
    type: "SCHOOLS",
  },
  {
    id: 4,
    title: "Viaduc, Örebro Water Treatment Plant",
    location: "Örebro, Sweden",
    category: "water-treatment",
    image: "/images/project-4.jpg",
    link: "/projects/viaduc-orebro",
    type: "HOMES",
  },
  {
    id: 5,
    title: "Luxury apartments in the heart of Kungsholmen",
    location: "Stockholm, Sweden",
    category: "residential",
    image: "/images/project-5.jpg",
    link: "/projects/luxury-apartments-kungsholmen",
    type: "HOMES",
  },
  {
    id: 6,
    title: "Terminal 2 Renovation, Boston, MA",
    location: "Boston, USA",
    category: "infrastructure",
    image: "/images/project-6.jpg",
    link: "/projects/terminal-2-renovation",
    type: "INFRASTRUCTURE",
  },
  {
    id: 7,
    title: "Houston Independent School District (HISD)",
    location: "Houston, USA",
    category: "education",
    image: "/images/project-7.jpg",
    link: "/projects/houston-school-district",
    type: "SCHOOLS",
  },
  {
    id: 8,
    title: "Åkersberga Office Building",
    location: "Åkersberga, Finland",
    category: "commercial",
    image: "/images/project-8.jpg",
    link: "/projects/akersberga-office",
    type: "OFFICES",
  },
];

const filters = [
  { name: "SHOW ALL PROJECTS", value: "all" },
  { name: "SORT: NEWEST", value: "newest" },
  { name: "TYPE", value: "type" },
  { name: "COUNTRY", value: "country" },
];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [showAllProjects, setShowAllProjects] = useState(false);

  const displayedProjects = showAllProjects ? projects : projects.slice(0, 8);

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12">Our Projects</h2>
        
        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8 border-b border-gray-200 pb-4">
          {filters.map((filter) => (
            <button
              key={filter.value}
              className={`text-xs font-medium py-1 ${
                activeFilter === filter.value
                  ? "text-primary border-b-2 border-primary"
                  : "text-gray-500 hover:text-primary"
              }`}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.name}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedProjects.map((project) => (
            <div key={project.id} className="group">
              <Link href={project.link} className="block">
                <div className="relative h-64 mb-4 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">{project.type}</p>
                  <h3 className="text-base font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500">{project.location}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
        
        {/* View All Projects Button */}
        {!showAllProjects && projects.length > 8 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAllProjects(true)}
              className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80"
            >
              VIEW ALL PROJECTS
              <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
} 