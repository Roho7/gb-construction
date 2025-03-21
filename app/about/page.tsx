import { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getImages } from "../_actions/queries";
import { Shield, Users, Heart, Scale, Ban, AlertCircle, Lock, FileCheck, MapPin } from "lucide-react";

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

      {/* Company Policies Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Company Policies</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8" />
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our commitment to excellence is reflected in our comprehensive policies that ensure a professional, ethical, and inclusive workplace environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Shield,
                title: "Quality & Safety Standards",
                content: "We uphold quality, safety, health, and environmental standards through strict SOPs, ensuring excellence in all our infrastructural projects. Continuous improvement remains a top priority."
              },
              {
                icon: Users,
                title: "HR Policies",
                content: "Our HR policies promote a disciplined, ethical workforce, ensuring fairness, professionalism, and accountability while fostering a respectful and cooperative work environment."
              },
              {
                icon: Heart,
                title: "Workplace Culture",
                content: "We value diversity, respect, and dignity, believing our success depends on employees' contributions and a supportive workplace culture."
              },
              {
                icon: Scale,
                title: "Code of Conduct",
                content: "Employees must follow ethical conduct to maintain a harmonious, productive workplace. Misconduct, uncooperativeness, or disruptions may lead to disciplinary action, including termination."
              },
              {
                icon: Ban,
                title: "Anti-Harassment Policy",
                content: "Harassment of any kind is strictly prohibited. We ensure a workplace free from discrimination based on race, caste, color, gender, or religion."
              },
              {
                icon: AlertCircle,
                title: "Conflict of Interest",
                content: "Employees must disclose conflicts of interest to management to ensure ethical decision-making and maintain transparency in company operations."
              },
              {
                icon: FileCheck,
                title: "Business Ethics",
                content: "Integrity is key—employees must avoid fraud, deception, or unfair dealings, ensuring ethical business practices at all times."
              },
              {
                icon: Lock,
                title: "Confidentiality",
                content: "Confidential company information must be protected, and employees are prohibited from competing with the company during or after employment."
              }
            ].map((policy, index) => (
              <div 
                key={index}
                className="group bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <policy.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{policy.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{policy.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policy Commitment Banner */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-6">Our Commitment to Excellence</h3>
            <p className="text-lg text-blue-100">
              These policies reflect our dedication to maintaining the highest standards of professional conduct, 
              ensuring a safe and inclusive workplace, and delivering exceptional value to our stakeholders.
            </p>
          </div>
        </div>
      </section>

      {/* Our Head Offices Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Head Offices</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8" />
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Strategic locations across West Bengal delivering excellence in water infrastructure
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              "Balurghat W.T.P",
              "Basirhat W.T.P",
              "Bongaon W.T.P",
              "New Town Intake",
              "Nabadwip W.T.P",
              "Sonarpur U.G.R",
              "Pujali W.T.P",
              "Purulia W.T.P",
              "Bongaon W.T.P",
              "Ranaghat Intake",
              "Serampore W.T.P",
              "Titagarh W.T.P"
            ].map((location, index) => (
              <div 
                key={index}
                className="group relative bg-gray-50 rounded-lg overflow-hidden hover:bg-blue-50 transition-colors duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-2 h-2 rounded-full bg-blue-600" />
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <MapPin className="w-4 h-4 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-gray-900 font-medium group-hover:text-blue-600 transition-colors">
                    {location}
                  </h3>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Efficient Resolution Approach */}
      {/* <section className="py-16 bg-white">
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
      </section> */}

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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="bg-white overflow-hidden shadow-sm">
              <div className="relative h-[300px]">
                <Image
                  src="/images/riju-ghoshal.png"
                  alt="Mr. Riju Ghoshal"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-gray-900">Mr. Riju Ghoshal</h3>
                <p className="text-blue-600 mb-4">Sr. Manager - Operation</p>
                <p className="text-gray-600">
                  With over 25 years of experience in the water infrastructure industry, 
                  Raj leads our strategic initiatives and overall business operations.
                </p>
              </div>
            </div>
            
            <div className="bg-white overflow-hidden shadow-sm">
              <div className="relative h-[300px]">
                <Image
                  src="/images/bhismadeb-konar.png"
                  alt="Mr. Bhismadeb Konar"
                  fill
                  className=" object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-gray-900">Mr. Bhismadeb Konar</h3>
                <p className="text-blue-600 mb-4">Sr. Manager - Projects</p>
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
      {/* <section className="py-16 bg-white">
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
      </section> */}

      <Footer />
    </main>
  );
} 