"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { getImages } from "@/app/_actions/queries";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const [heroImage, setHeroImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchHeroImage = async () => {
      const images = await getImages("/home");

      setHeroImage(images[0].imageUrl);
    };
    fetchHeroImage();
  }, []);

  return (
    <section className="relative">
      {/* Main Hero */}
      <div className="relative h-[80vh] bg-black">
        {heroImage && (
          <Image
            src={heroImage || ""}
            alt="Modern building"
            fill
            className="object-cover opacity-70"
            priority
          />
        )}
        <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 max-w-4xl">
              GB Construction
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-8">
              We use our knowledge and foresight to shape the way people live,
              work, and connect.
            </p>
          </div>
        </div>
      </div>

      {/* Feature Boxes */}
      <div className="container mx-auto -mt-24 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Feature Box 1 */}
        <div className="relative overflow-hidden rounded-lg shadow-xl p-8 md:p-10 group">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(210,100%,40%)] to-[hsl(200,100%,30%)] transition-transform duration-700 group-hover:scale-105"></div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-white opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-white opacity-5"></div>
          
          {/* Content */}
          <div className="relative z-10 text-white">
            <h2 className="text-2xl font-bold mb-4 group-hover:translate-x-1 transition-transform duration-300">
              Welcome to GB Construction 
            </h2>
            <p className="text-white/90 mb-6 leading-relaxed">
              G.B. Construction (GBC) was established in the year 2004 and since
              inception GBC is engaged in Water System Management projects
              especially Water Treatment Plants which are directly related to the
              infrastructural development of our country and through the years, GB
              has gained the confidence of their clients in the Government and
              Semi-Government Sectors.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center text-sm font-medium text-white hover:text-white/80 border-b border-transparent hover:border-white/50 pb-1 transition-all duration-300"
            >
              EXPLORE MORE
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>

        {/* Feature Box 2 */}
        <div className="relative overflow-hidden rounded-lg shadow-xl p-8 md:p-10 group">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(210,70%,30%)] to-[hsl(220,70%,20%)] transition-transform duration-700 group-hover:scale-105"></div>
          
          {/* Decorative Elements */}
          <div className="absolute -bottom-20 -right-20 w-48 h-48 rounded-full bg-white opacity-5"></div>
          <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-white opacity-5"></div>
          
          {/* Content */}
          <div className="relative z-10 text-white">
            <h2 className="text-2xl font-bold mb-4 group-hover:translate-x-1 transition-transform duration-300">
              Knowledge and foresight to shape sustainable places
            </h2>
            <p className="text-white/90 mb-6 leading-relaxed">
              Dedicated to leveraging our expertise in knowledge and insight about
              engineering excellence, we create sustainable water infrastructure
              that transforms communities and improves lives.
            </p>
            <Link
              href="/projects"
              className="inline-flex items-center text-sm font-medium text-white hover:text-white/80 border-b border-transparent hover:border-white/50 pb-1 transition-all duration-300"
            >
              VIEW PROJECTS
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
