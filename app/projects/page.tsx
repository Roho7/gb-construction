
import { Metadata } from "next";
import { Projects } from "@/components/sections/Projects";
import { Building2, CheckCircle2, Timer } from "lucide-react";
import PageHeader from "@/components/layout/page-header";
import { siteConfig } from "../_utils/utils";


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: siteConfig().title,
    description: siteConfig().description,
    openGraph: {
      title: siteConfig().title,
      description: siteConfig().description,
      type: 'website',
      url: siteConfig().baseUrl,
      images: [
        {
          url: siteConfig().ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig().name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: siteConfig().title,
      description: siteConfig().description,
      images: [siteConfig().ogImage],
      creator: siteConfig().twitter,
    },
  };
}

export default async function ProjectsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <PageHeader title="Projects" />

      {/* Excellence in Execution Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Excellence in Execution</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8" />
            <p className="text-gray-600 text-lg leading-relaxed">
              We have successfully completed numerous projects, earning the trust of government and non-government organizations. Our professional competence and precision ensure excellence in every execution. Specializing in turnkey solutions, we contribute significantly to the nation&apos;s infrastructure development.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6">
              <CheckCircle2 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Completed Projects</h3>
              <p className="text-gray-600">
                Successfully delivered water infrastructure projects across urban and rural areas
              </p>
            </div>
            <div className="text-center p-6">
              <Timer className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Ongoing Projects</h3>
              <p className="text-gray-600">
                Expanding our portfolio with new and challenging infrastructure solutions
              </p>
            </div>
            <div className="text-center p-6">
              <Building2 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">O&M Projects</h3>
              <p className="text-gray-600">
                Effective operation and maintenance of water treatment facilities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Component */}
      <Projects />
    </main>
  );
} 