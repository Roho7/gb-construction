import { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FileText, Download, BookOpen, FileCode, Building2 } from "lucide-react";
import { getImages } from "../_actions/queries";

export const metadata: Metadata = {
  title: "Investor Relations - GB Construction",
  description: "Access GB Construction's investor resources including corporate presentations, annual reports, company policies, and brochures.",
};

export default async function InvestorsPage() {
  // Fetch investor page images
  let investorImages = null;
  try {
    const imageData = await getImages("/investors");
    if (imageData.length > 0) {
      investorImages = imageData;
    }
  } catch (error) {
    console.error("Error fetching investor images:", error);
  }

  const investorResources = [
    {
      title: "Corporate Presentation",
      description: "Comprehensive overview of GB Construction's business model, strategy, and growth prospects.",
      icon: Building2,
      url: "https://gbconstruction.in/wp-content/uploads/2019/10/7.pdf"
    },
    {
      title: "Annual Reports",
      description: "Detailed financial statements and performance metrics for informed investment decisions.",
      icon: FileText,
      url: "https://gbconstruction.in/investors/#"
    },
    {
      title: "Company Policy",
      description: "Rules & regulations governing our operations and corporate governance framework.",
      icon: FileCode,
      url: "https://gbconstruction.in/wp-content/uploads/2019/10/8.pdf"
    },
    {
      title: "Company Brochure",
      description: "Explore our services, projects, and commitment to excellence in water infrastructure.",
      icon: BookOpen,
      url: "https://gbconstruction.in/wp-content/uploads/2019/10/9.pdf"
    }
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] w-full">
        <div className="absolute inset-0 bg-gray-900/60 z-10" />
        {investorImages && <Image
          src={investorImages?.find(image => image.section === 'header')?.imageUrl || "/images/investors-hero.jpg"}
          alt="GB Construction Investors"
          fill
          className="object-cover"
          priority
        />}
        <div className="container relative z-20 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Investor Relations
          </h1>
          <div className="w-20 h-1 bg-blue-400 mb-6" />
          <p className="text-white text-xl max-w-2xl">
            Access new oppourtunities to grow your wealth with GB Construction
          </p>
        </div>
      </section>

      {/* Investor Resources Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Investor Resources</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8" />
            <p className="text-gray-600 text-lg">
              Everything you need to know about investing in GB Construction&apos;s growth story
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {investorResources.map((resource, index) => (
              <div 
                key={index}
                className="group relative bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <resource.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{resource.title}</h3>
                    <p className="text-gray-600 mb-4">{resource.description}</p>
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group-hover:translate-x-2 transition-transform"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Invest Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Why Invest in GB Construction?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6">
                <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">40+ Years Legacy</h3>
                <p className="text-blue-100">Proven track record of excellence in water infrastructure</p>
              </div>
              <div className="p-6">
                <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">200+ Projects</h3>
                <p className="text-blue-100">Successfully completed projects across India</p>
              </div>
              <div className="p-6">
                <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Sustainable Growth</h3>
                <p className="text-blue-100">Committed to long-term value creation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
