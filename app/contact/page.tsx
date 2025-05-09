import { Metadata } from "next";
import { Mail, MapPin, Phone, Twitter, Instagram, Linkedin, Facebook, Youtube } from "lucide-react";
import PageHeader from "@/components/layout/page-header";

export const metadata: Metadata = {
  title: "Contact GB Construction - Get in Touch",
  description: "Contact GB Construction for inquiries about water treatment plants, infrastructure projects, or career opportunities. Reach our offices in Kolkata and West Bengal.",
};

export default async function ContactPage() {

  return (
    <main className="min-h-screen flex flex-col">     
      {/* Hero Section */}
      <PageHeader title="Contact Us" />

      {/* Contact Information Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Office Addresses */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <MapPin className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold">Our Offices</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Registered Address:</h4>
                  <p className="text-gray-600">
                  R-257 Bipasa Apartment, Haldia Mecheda Road, Purba<br />
                  Srikrishnapur, P.S. -Sutahata, Purba Medinipur
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Branch Office:</h4>
                  <p className="text-gray-600">
                  196, Raja Rammohan Roy Road, Kolkata -700008
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <Phone className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold">Contact Details</h3>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-600">
                  <span className="font-semibold">Phone/Telefax:</span><br />
                  +91 7003463735
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">E-mail:</span><br />
                  info@gbconstruction.in
                </p>
              </div>
            </div>

            {/* Query Sections */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <Mail className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold">Department Queries</h3>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-600">
                  <span className="font-semibold">Job Related:</span><br />
                  hr@gbcinfrastructure.in
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">General Information:</span><br />
                  info@gbconstruction.in
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Purchase Related:</span><br />
                  marketing@gbcinfrastructure.in
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Projects Related:</span><br />
                  projects@gbcinfrastructure.in
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Accounts Related:</span><br />
                  accounts@gbcinfrastructure.in
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Plant Operation & Maintenance:</span><br />
                  operation_maintainance@gbcinfrastructure.in
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Connect With Us</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { url: "https://x.com/gbcinfra", label: "Twitter", icon: Twitter },
              { url: "https://www.instagram.com/gbcinfrastructurepvtltd/", label: "Instagram", icon: Instagram },
              { url: "https://www.linkedin.com/company/gbc-infrastructure-pvt-ltd/", label: "LinkedIn", icon: Linkedin },
              { url: "https://www.facebook.com/gbcipltd", label: "Facebook", icon: Facebook },
              { url: "https://www.youtube.com/channel/UC0XNM0jT3LVjuQlarBPn7g/featured", label: "YouTube", icon: Youtube }
            ].map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all hover:translate-y-[-2px]"
              >
                <link.icon className="w-5 h-5 text-blue-600" />
                <span className="font-medium text-gray-700">{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
