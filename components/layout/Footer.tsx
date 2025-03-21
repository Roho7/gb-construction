import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone, Twitter, Instagram, Linkedin, Facebook } from "lucide-react";
import Image from "next/image";
export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      {/* Main Footer */}
      <div className="container py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Logo and Info */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
               <Image src="/images/logo.png" alt="GB Construction" width={100} height={100} />
            </Link>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
            GB Construction specializes in turnkey water infrastructure projects, delivering efficient, cost-effective, and sustainable solutions.
            </p>
            <div className="flex space-x-4">
              <Link 
                href="#" 
                className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 hover:bg-blue-100 transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link 
                href="#" 
                className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 hover:bg-blue-100 transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </Link>
              <Link 
                href="#" 
                className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 hover:bg-blue-100 transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </Link>
              <Link 
                href="#" 
                className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 hover:bg-blue-100 transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-gray-900">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2 text-blue-600" />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/business" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2 text-blue-600" />
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2 text-blue-600" />
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/investors" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2 text-blue-600" />
                  Investors
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2 text-blue-600" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-gray-900">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-600">
                  GB Construction<br />
                  SE-123 45 Kolkata<br />
                  India
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                <span className="text-gray-600">+91 7903453725</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                <Link href="mailto:info@gbconstruction.in" className="text-gray-600 hover:text-blue-600 transition-colors">
                  info@gbconstruction.in
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-gray-900">Newsletter</h3>
            <p className="text-sm text-gray-600 mb-4">
              Subscribe to our newsletter to receive updates on our latest projects and offers.
            </p>
            <form className="space-y-2">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 px-4 py-2 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
                <button 
                  type="submit" 
                  className="bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 transition-colors"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              <p className="text-xs text-gray-500">
                By subscribing, you agree to our Privacy Policy.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-200">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} GB Construction. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/terms" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                Terms of Use
              </Link>
              <Link href="/privacy" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 