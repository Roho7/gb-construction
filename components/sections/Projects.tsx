"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getProjectsData, ProjectType } from "@/app/_actions/queries";

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

  const displayedProjects = showAllProjects ? projects : projects.slice(0, 8);

  useEffect(() => {
    const fetchProjects = async () => {
      const projects = await getProjectsData();
      setProjects(projects);
    };
    fetchProjects();
  }, []);

  return (
    <section className="py-20">
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
            <div key={project.title} className="group">
              <Link href={project.title} className="block">
                <div className="relative h-64 mb-4 overflow-hidden">
                  <Image
                    src={project.mainImage}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">{project.categories}</p>
                  <h3 className="text-base font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500">{project.startedAt}</p>
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