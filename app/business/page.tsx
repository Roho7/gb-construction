import { Metadata } from "next";
import { Projects } from "@/components/sections/Projects";
import PageHeader from "@/components/layout/page-header";

export const metadata: Metadata = {
  title: "Business Segment - GB Construction",
  description: "Explore GB Construction's business segments including Water Treatment Plants, Effluent Treatment Plants, Overhead Reservoirs, and more.",
};

export default async function BusinessPage() {

  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <PageHeader title="Our Business" />

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

      
    </main>
  );
} 