import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getImages } from "../_actions/queries";
import { About } from "@/components/sections/About";
import { ArrowRight, Award, BarChart3, Clock, Globe, Shield, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About GB Construction - Our History & Vision",
  description: "Learn about GB Construction's journey, our mission, values, and the team behind our success in water infrastructure projects across India and Asia.",
};

export default async function AboutPage() {
  // Fetch data on the server
  let aboutImages = null;
  try {
    const imageData = await getImages("/about");
    if (imageData.length > 0) {
      aboutImages = imageData;
    }
  } catch (error) {
    console.error("Error fetching about images:", error);
  }
    
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section - Clean and Professional */}
      <section className="relative h-[400px] md:h-[500px] w-full">
        <div className="absolute inset-0 bg-gray-900/60 z-10" />
        {aboutImages && <Image
          src={aboutImages?.find(image => image.section === 'header')?.imageUrl || "/images/business-hero.jpg"}
          alt="GB Construction Business Segment"
          fill
          className="object-cover"
          priority
        />}
        <div className="container relative z-20 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              About GB Construction
          </h1>
          <div className="w-20 h-1 bg-blue-400 mb-6" />
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Who we are</h2>
              <div className="w-16 h-1 bg-blue-600 mb-8"></div>
              <div className="space-y-6 text-gray-600">
                <p className="text-lg leading-relaxed">
                  GB Construction (GBC) was established in 1983 with a vision to revolutionize water infrastructure in India. 
                  Since inception, we have been engaged in Water System Management projects, especially Water Treatment Plants 
                  which are directly related to the infrastructural development of our country.
                </p>
                <p className="text-lg leading-relaxed">
                  The company has been recognized as one of the leading companies in the water treatment sector in India, 
                  having delivered a diverse range of water filtration solutions across 15+ states.
                </p>
                <p className="text-lg leading-relaxed">
                  GBC is committed to being among the superior quality firms in the field. Our well-established reputation 
                  and acknowledged expertise have enabled us to successfully complete more than 200 projects across India.
                </p>
              </div>
            </div>
            
            <div className="h-full w-full relative">
                <Image
                  src={aboutImages?.find(image => image.section === 'body')?.imageUrl || "/images/company-building.jpg"}
                  alt="GB Construction Headquarters"
                  fill
                  className="object-cover"
                />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Reputation & Business Disruption</h3>
              <p className="text-gray-600 mb-6">
                GBC&apos;s legal team addresses potential legal challenges to protect reputation and minimize business disruption.
              </p>
              <Link 
                href="/business" 
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors group"
              >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="bg-white p-8 shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Minimize Operational Disruptions</h3>
              <p className="text-gray-600 mb-6">
                Our legal team works to minimize operational disruptions while addressing legal challenges effectively.
              </p>
              <Link 
                href="/business" 
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors group"
              >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="bg-white p-8 shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Tailored Legal Strategies</h3>
              <p className="text-gray-600 mb-6">
                We develop customized legal strategies including mediation and negotiation to achieve optimal outcomes.
              </p>
              <Link 
                href="/business" 
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors group"
              >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Efficient Resolution Approach */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Efficient Resolution Approach</h2>
              <div className="w-16 h-1 bg-blue-600 mb-8"></div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                In our case study process, we utilized an efficient resolution approach tailored to the client&apos;s specific needs and objectives. Through meticulous analysis, strategic planning, and effective execution, we guided the client towards successful outcomes while minimizing disruption to their operations throughout the process.
              </p>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Assessment & Analysis</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1">•</div>
                    <span>Conduct in-depth interviews</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1">•</div>
                    <span>Evaluate existing processes & systems</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1">•</div>
                    <span>Identify potential areas for improvement</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="relative order-1 lg:order-2">
              <div className="relative h-[500px] overflow-hidden">
                <Image
                  src="/images/executive.jpg"
                  alt="Executive Portrait"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-blue-900/90 p-8 text-white">
                <p className="italic font-medium text-lg">Highly satisfied with exceptional legal service.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Leadership Team</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals who guide our company&apos;s vision and operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white overflow-hidden shadow-sm">
              <div className="relative h-[300px]">
                <Image
                  src="/images/founder.jpg"
                  alt="Mr. Sanjay Gupta"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-gray-900">Mr. Sanjay Gupta</h3>
                <p className="text-blue-600 mb-4">Founder & Chairman</p>
                <p className="text-gray-600">
                  Leading GB Construction&apos;s mission to transform water infrastructure for over 4 decades.
                </p>
              </div>
            </div>
            
            <div className="bg-white overflow-hidden shadow-sm">
              <div className="relative h-[300px]">
                <Image
                  src="/images/director1.jpg"
                  alt="Mr. Raj Sharma"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-gray-900">Mr. Raj Sharma</h3>
                <p className="text-blue-600 mb-4">Managing Director</p>
                <p className="text-gray-600">
                  With over 25 years of experience in the water infrastructure industry, 
                  Raj leads our strategic initiatives and overall business operations.
                </p>
              </div>
            </div>
            
            <div className="bg-white overflow-hidden shadow-sm">
              <div className="relative h-[300px]">
                <Image
                  src="/images/director2.jpg"
                  alt="Ms. Priya Patel"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-gray-900">Ms. Priya Patel</h3>
                <p className="text-blue-600 mb-4">Technical Director</p>
                <p className="text-gray-600">
                  Priya oversees all technical aspects of our projects, bringing innovative 
                  engineering solutions to complex water treatment challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Facts */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-4">40+</div>
              <p className="text-xl">Years of Excellence</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold mb-4">200+</div>
              <p className="text-xl">Projects Completed</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold mb-4">15+</div>
              <p className="text-xl">States Across India</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold mb-4">500+</div>
              <p className="text-xl">Skilled Professionals</p>
            </div>
          </div>
        </div>
      </section>

      {/* JOIN US/CAREERS Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Join Our Team</h2>
              <div className="w-16 h-1 bg-blue-600 mb-8"></div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At GB Construction, we&apos;re always looking for talented individuals who are passionate about water infrastructure and sustainable solutions. Join our team of experts and be part of creating innovative water management systems that transform communities.
              </p>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Civil Engineer</h3>
                  <p className="text-gray-600 mb-4">
                    We&apos;re looking for experienced civil engineers with expertise in water treatment plant design and construction.
                  </p>
                  <Link 
                    href="/careers" 
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors group"
                  >
                    Apply Now
                    <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                
                <div className="bg-gray-50 p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Project Manager</h3>
                  <p className="text-gray-600 mb-4">
                    Seeking detail-oriented project managers to oversee water infrastructure projects across India.
                  </p>
                  <Link 
                    href="/careers" 
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors group"
                  >
                    Apply Now
                    <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
              
              <div className="mt-8">
                <Link 
                  href="/careers" 
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                >
                  View All Openings
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative h-[500px] overflow-hidden">
                <Image
                  src="/images/team-working.jpg"
                  alt="Team Working Together"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 