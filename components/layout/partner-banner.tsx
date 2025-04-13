'use client';

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function PartnerBanner() {
  const router = useRouter();

  const goToPartnerSite = () => {
    window.open('https://gbcinfrastructure.in', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative py-16 bg-white text-blue-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Choose Your Destination
            </h2>
            <p className="text-blue-900 text-lg">
              Explore our construction solutions or visit our infrastructure partner
            </p>
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Partner Site Button */}
            <Button 
              variant="ghost" 
              onClick={goToPartnerSite}
              className="w-full h-40 flex flex-col items-center justify-center gap-4 border-2 border-white/20 bg-blue-900 hover:bg-blue-800 hover:border-white transition-all duration-300"
            >
              <div className="w-24 h-24 relative">
                <Image
                  src="/images/gbc-logo.png"
                  alt="GBC Construction Logo"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <span className="text-lg font-semibold text-white group-hover:text-blue-900 transition-colors duration-300">Visit GBC Construction</span>
            </Button>

            {/* Stay Here Button */}
            <Button 
              variant="default"
              onClick={() => router.push('/')}
              className="cursor-pointerw-full h-40 flex flex-col items-center justify-center gap-4 bg-white hover:bg-blue-50 border-2 border-blue-900"
            >
              <div className="w-24 h-24 relative">
                <Image
                  src="/images/logo.png"
                  alt="GBC Infrastructure Logo"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <span className="text-lg font-semibold text-blue-900 group-hover:text-blue-900 transition-colors duration-300">Stay at GBC Infrastructure</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 