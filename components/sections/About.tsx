"use client";

import { getProjectsData } from "@/app/_actions/queries";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, BarChart3, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";

// Company values
const values = [
  {
    icon: <Award className="w-6 h-6" />,
    title: "Excellence",
    description: "We strive for excellence in every project, delivering the highest quality water infrastructure solutions."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Collaboration",
    description: "We believe in the power of collaboration, working closely with clients, communities, and partners."
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Reliability",
    description: "Our commitment to reliability ensures that our solutions stand the test of time."
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Innovation",
    description: "We continuously innovate to develop sustainable water management solutions for a better future."
  }
];

// Team members
const teamMembers = [
  {
    name: "Riju Ghoshal",
    position: "Sr. Manager - Operation",
    image: "/images/riju-ghoshal.png"
  },
  {
    name: "Mr. Bhismadeb Konar",
    position: "Sr. Manager - Projects",
    image: "/images/bhismadeb-konar.png"
  }
];

// Stats
const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "185", label: "Completed Projects" },
  { value: "110", label: "Team Members" },
  { value: "5", label: "International Offices" }
];

export function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-gray-50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent z-0"></div>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Building a <span className="text-gradient">Sustainable</span> Future Through Water Innovation
              </motion.h1>
              <motion.p 
                className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Since 2004, GB Construction has been at the forefront of water infrastructure development, 
                creating innovative solutions that transform communities and improve lives across India and Asia.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link 
                  href="/projects" 
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Explore Our Projects
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            </div>
            <div className="relative">
              <motion.div
                className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
              >
                <Image 
                  src="https://images.unsplash.com/photo-1574786039102-6dca0c135cef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80" 
                  alt="Water treatment plant" 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-white text-lg font-medium">Bringing clean water to communities since 2004</p>
                </div>
              </motion.div>
              {/* Decorative elements */}
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-blue-100 rounded-full opacity-50 -z-10"></div>
              <div className="absolute -top-8 -right-8 w-40 h-40 bg-blue-200 rounded-full opacity-30 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 leading-relaxed">
              G.B. Construction (GBC) was established in 2004 with a vision to revolutionize water infrastructure in India. 
              Since inception, we have been engaged in Water System Management projects, especially Water Treatment Plants 
              which are directly related to the infrastructural development of our country. Through the years, 
              GB has gained the confidence of clients in Government and Semi-Government Sectors through our 
              commitment to excellence, innovation, and reliability.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative mt-20">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-200"></div>
            
            {/* Timeline items */}
            <div className="space-y-16">
              <TimelineItem 
                year="2004" 
                title="Company Founded" 
                description="GB Construction was established with a focus on water infrastructure projects."
                position="left"
              />
              <TimelineItem 
                year="2010" 
                title="Expansion Across India" 
                description="Expanded operations to cover multiple states across India with major water treatment projects."
                position="right"
              />
              <TimelineItem 
                year="2015" 
                title="International Projects" 
                description="Began undertaking international projects in neighboring Asian countries."
                position="left"
              />
              <TimelineItem 
                year="2020" 
                title="Innovation Center" 
                description="Established our Research & Innovation Center for developing sustainable water solutions."
                position="right"
              />
              <TimelineItem 
                year="2024" 
                title="Present Day" 
                description="Leading water infrastructure company with over 185 completed projects across Asia."
                position="left"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Values</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our core values guide everything we do, from how we approach projects to how we interact with clients and communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Leadership</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the experienced team leading GB Constructions mission to transform water infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative h-80 mb-4 overflow-hidden rounded-xl">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-blue-600">{member.position}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Financial Strength</h2>
              <div className="w-16 h-1 bg-blue-600 mb-8"></div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                GB Construction maintains a strong financial position, enabling us to undertake complex water infrastructure projects 
                and deliver exceptional value to our shareholders. Our strategic investments in innovation and sustainable technologies 
                have positioned us for continued growth in the water management sector.
              </p>
              
              <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
                <h3 className="text-sm font-semibold mb-2">GB Construction (GB A B):</h3>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">SEK 215.0</span>
                  <span className="text-sm text-green-600 ml-2">+0.8%</span>
                  <span className="text-xs text-gray-500 ml-2">SEK +1.7</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">DELAYED 15 MIN</p>
              </div>
              
              <Link 
                href="/investors" 
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Investor Relations
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold mb-2">Q2 2024</h3>
                <p className="text-gray-600 mb-4">Interim Report</p>
                <p className="text-xs text-gray-500">Published on July 19, 2024</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold mb-2">SEK 1.2B</h3>
                <p className="text-gray-600 mb-4">Annual Revenue</p>
                <p className="text-xs text-gray-500">Fiscal Year 2023</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold mb-2">SEK 215M</h3>
                <p className="text-gray-600 mb-4">Operating Profit</p>
                <p className="text-xs text-gray-500">Fiscal Year 2023</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold mb-2">18%</h3>
                <p className="text-gray-600 mb-4">Growth Rate</p>
                <p className="text-xs text-gray-500">Year-over-Year</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Water Infrastructure?</h2>
            <p className="text-xl opacity-90 mb-8">
              Partner with GB Construction for innovative, sustainable water solutions that make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                Contact Us
              </Link>
              <Link 
                href="/projects" 
                className="px-8 py-4 bg-transparent border border-white text-white rounded-lg hover:bg-white/10 transition-colors font-medium"
              >
                View Our Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Timeline Item Component
function TimelineItem({ year, title, description, position }: { 
  year: string; 
  title: string; 
  description: string; 
  position: 'left' | 'right' 
}) {
  return (
    <motion.div 
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Center dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-blue-600 border-4 border-white"></div>
      
      {/* Content */}
      <div className={`w-5/12 ${position === 'left' ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-3">
            {year}
          </span>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </motion.div>
  );
} 