import { getProjectsData } from "@/app/_actions/queries";
import Link from "next/link";

const features = [
  {
    id: 1,
    title: "Explore our world-class projects",
    description: "Discover our portfolio of innovative water infrastructure projects that have transformed communities across India and Asia.",
    link: "/projects",
  },
  {
    id: 2,
    title: "Shape the future with us",
    description: "Join our team of experts and be part of creating sustainable water solutions that will benefit generations to come.",
    link: "/careers",
  },
  {
    id: 3,
    title: "Shaping a sustainable society",
    description: "Learn how our water treatment solutions contribute to environmental sustainability and community development.",
    link: "/sustainability",
  },
  {
    id: 4,
    title: "Why invest in GB Construction?",
    description: "Discover the financial benefits and growth potential of investing in our innovative water infrastructure company.",
    link: "/investors",
  },
];

export async function  About() {
  const projects = await getProjectsData();
  return (
    <section className="py-20">
      <div className="container">
        {/* Financial Info */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 border-b border-gray-200 pb-8">
          <div>
            <p className="text-xs text-gray-500 mb-2">Published on July 19 at 7:00 AM CEST</p>
            <h2 className="text-2xl font-bold mb-2">GB Construction interim report second quarter 2024</h2>
          </div>
          <div className="mt-4 md:mt-0 bg-gray-100 p-4">
            <h3 className="text-sm font-semibold mb-2">GB A B:</h3>
            <div className="flex items-baseline">
              <span className="text-2xl font-bold">SEK 215.0</span>
              <span className="text-sm text-green-600 ml-2">+0.8%</span>
              <span className="text-xs text-gray-500 ml-2">SEK +1.7</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">DELAYED 15 MIN</p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div key={project.title} className="border-t border-gray-200 pt-6 group">
              <h3 className="text-lg font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{project.description}</p>
              {/* <Link 
                href={feature.link} 
                className="inline-flex items-center text-xs font-medium text-primary group-hover:text-primary/80"
              >
                EXPLORE MORE
                <svg className="ml-1 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 