import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Projects } from "@/components/sections/Projects";
import { getImages } from "../_actions/queries";

export const metadata: Metadata = {
  title: "Business Segment - GB Construction",
  description: "Explore GB Construction's business segments including Water Treatment Plants, Effluent Treatment Plants, Overhead Reservoirs, and more.",
};

export default async function BusinessPage() {
  // Business segments data
  const businessImages = await getImages("/business");
  // Latest news data
  const latestNews = [
    {
      id: 1,
      title: "Commercial Ministry to Hike Import Duty on Aluminium",
      image: "/images/news-1.jpg",
      date: "October 23, 2023",
      author: "Admin",
      comments: 0,
      excerpt: "The commerce ministry is in favor of hiking import duty on aluminium with a view to support domestic manufacturers...",
    },
    {
      id: 2,
      title: "Commercial Ministry to Hike Import Duty on Aluminium",
      image: "/images/news-2.jpg",
      date: "October 22, 2023",
      author: "Admin",
      comments: 0,
      excerpt: "The commerce ministry is in favor of hiking import duty on aluminium with a view to support domestic manufacturers...",
    },
    {
      id: 3,
      title: "Commercial Ministry to Hike Import Duty on Aluminium",
      image: "/images/news-3.jpg",
      date: "October 21, 2023",
      author: "Admin",
      comments: 0,
      excerpt: "The commerce ministry is in favor of hiking import duty on aluminium with a view to support domestic manufacturers...",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] w-full">
        <div className="absolute inset-0 bg-blue-900/60 z-10" />
        {businessImages && <Image
          src={businessImages?.find(image => image.section === 'header')?.imageUrl || "/images/business-hero.jpg"}
          alt="GB Construction Business Segment"
          fill
          className="object-cover"
          priority
        />}
        <div className="container relative z-20 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Business Segment
          </h1>
          <div className="w-20 h-1 bg-blue-400 mb-6" />
        </div>
      </section>

      {/* Our Business Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Business</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-12" />
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-700 mb-6 leading-relaxed">
                Born to meet the growing demand of industry, GB Construction is known for its dynamic Water Treatment Plants, Raw 
                Water Intake Plants, Overhead Reservoirs and more. Our range ensures the supply of disinfected water for the 
                consumption of humans. We provide cost-effective and better alternative for drinking water applications. Based upon 
                conventional technology, we aim at serving the clients in an appropriate manner. All our turnkey projects are bound to 
                ensure better water treatment and in return harmless water to environment. Projects planned by us prove to be of great 
                help in minimizing the issue related with sedimentation.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Further we have started in concentrating Effluent Treatment Project to clean up our environment against massive 
                industrial pollution in terms of Common Effluent Treatment Plant (C.E.T.P.).
              </p>
            </div>
          </div>

          {/* Top Business Segments */}
          <div className="container">
            <Projects />
          </div>


        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Latest News</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-12" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestNews.map((news) => (
              <div key={news.id} className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 hover:text-blue-600 transition-colors">
                    <Link href={`/news/${news.id}`}>
                      {news.title}
                    </Link>
                  </h3>
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <div className="flex items-center mr-4">
                      <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span>{news.author}</span>
                    </div>
                    <div className="flex items-center mr-4">
                      <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{news.date}</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                      </svg>
                      <span>{news.comments} Comments</span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{news.excerpt}</p>
                  <Link 
                    href={`/news/${news.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
                  >
                    Read More
                    <svg className="ml-1 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 