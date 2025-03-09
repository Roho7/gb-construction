import { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getImages } from "../_actions/queries";

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
      
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] w-full">
        <div className="absolute inset-0 bg-gray-900/60 z-10" />
        {aboutImages && <Image
          src={aboutImages?.find(image => image.section === 'header')?.imageUrl || "/images/water-treatment-plant.jpg"}
          alt="GB Construction Water Treatment Plant"
          fill
          className="object-cover"
          priority
        />}
        <div className="container relative z-20 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            About Us
          </h1>
          <div className="w-20 h-1 bg-blue-400 mb-6" />
          <p className="text-white text-lg md:text-xl max-w-2xl">
            Building sustainable water infrastructure solutions since 1983
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About GB Construction</h2>
              <div className="w-16 h-1 bg-blue-600 mb-8" />
              <p className="text-gray-700 mb-6">
                GB Construction (GBC) was established in the year 1983 and since inception, 
                GBC is a Water Sector Management company, primarily dealing with 
                Irrigation Plants and all kinds related to the filtration and development of 
                water resources. The company has been recognized as one of the leading 
                companies in the water treatment sector in India, having delivered a 
                diverse range of water filtration solutions.
              </p>
              <p className="text-gray-700 mb-6">
                GBC is committed to being among the superior quality firms in the field. 
                The company has a well-established reputation and acknowledged expertise 
                in the Construction field (water treatment). Having successfully completed 
                more than 200 projects across India, GBC has also diversified and consolidated 
                its presence in the water treatment sector in other parts of India.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
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

      {/* Our Mission & Values */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Values</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mb-8" />
            <p className="text-gray-700 max-w-3xl mx-auto">
              We are guided by our commitment to excellence, sustainability, and innovation in every project we undertake.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md transition-transform hover:scale-105">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Excellence</h3>
              <p className="text-gray-700">
                We strive for excellence in all aspects of our work, from planning and design to execution and maintenance, ensuring the highest quality standards.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md transition-transform hover:scale-105">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Sustainability</h3>
              <p className="text-gray-700">
                We are committed to developing sustainable water solutions that minimize environmental impact and promote responsible resource management.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md transition-transform hover:scale-105">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-700">
                We continuously seek innovative approaches and technologies to improve water treatment processes and deliver more efficient solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6">Founder Speaks</h2>
              <div className="w-16 h-1 bg-blue-600 mb-8" />
              <p className="text-gray-700 mb-6 italic">
              &quot;It takes great pride and purpose to have built a company with a single 
                focus. Our vision is simple: to be a leader in water management. As a 
                founder, I am incredibly honored to be a part of this journey where we 
                have been transforming the water infrastructure landscape for over 4 decades.&quot;
              </p>
              <p className="text-gray-700 mb-6">
                The journey has been one of growth, learning, and innovation. We have 
                evolved from a small regional player to an established name in the water 
                treatment industry across multiple states in India. Our commitment to quality, 
                reliability, and customer satisfaction has been the cornerstone of our success.
              </p>
              <div className="flex items-center">
                <p className="font-bold">Mr. Sanjay Gupta</p>
                <span className="mx-2">•</span>
                <p className="text-gray-600">Founder & Chairman</p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl order-1 md:order-2">
              <Image
                src="/images/founder.jpg"
                alt="GB Construction Founder"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mb-8" />
            <p className="text-gray-700 max-w-3xl mx-auto">
              Meet the experienced professionals who guide our company&apos;s vision and operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
              <div className="relative h-[300px]">
                <Image
                  src="/images/director1.jpg"
                  alt="Mr. Raj Sharma"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Mr. Raj Sharma</h3>
                <p className="text-blue-600 mb-4">Managing Director</p>
                <p className="text-gray-700">
                  With over 25 years of experience in the water infrastructure industry, 
                  Raj leads our strategic initiatives and overall business operations.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
              <div className="relative h-[300px]">
                <Image
                  src="/images/director2.jpg"
                  alt="Ms. Priya Patel"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Ms. Priya Patel</h3>
                <p className="text-blue-600 mb-4">Technical Director</p>
                <p className="text-gray-700">
                  Priya oversees all technical aspects of our projects, bringing innovative 
                  engineering solutions to complex water treatment challenges.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
              <div className="relative h-[300px]">
                <Image
                  src="/images/director3.jpg"
                  alt="Mr. Vikram Singh"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Mr. Vikram Singh</h3>
                <p className="text-blue-600 mb-4">Director - Operations</p>
                <p className="text-gray-700">
                  Vikram ensures smooth execution of all projects, maintaining our high 
                  standards of quality and timely delivery across all sites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Facts */}
      <section className="py-16 md:py-24 bg-blue-700 text-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">GB Construction at a Glance</h2>
            <div className="w-16 h-1 bg-white mx-auto mb-8" />
          </div>
          
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

      {/* Company Policies */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Company Policies</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mb-8" />
            <p className="text-gray-700 max-w-3xl mx-auto">
              Our commitment to ethical business practices and responsible operations guides everything we do.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-start mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Quality Policy</h3>
                  <p className="text-gray-700">
                    We are committed to delivering the highest quality water infrastructure projects that meet or exceed client expectations and industry standards.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-start mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Environmental Policy</h3>
                  <p className="text-gray-700">
                    We are dedicated to minimizing environmental impact through sustainable practices and innovative solutions in all our water treatment projects.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-start mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Health & Safety Policy</h3>
                  <p className="text-gray-700">
                    The safety of our employees, contractors, and the public is our top priority. We maintain rigorous safety standards across all our operations.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-start mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Delivery Policy</h3>
                  <p className="text-gray-700">
                    We are committed to completing all projects on time and within budget, without compromising on quality or safety standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 