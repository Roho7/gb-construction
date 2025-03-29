"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Business", href: "/business" },
  { name: "Projects", href: "/projects" },
  { name: "Investors", href: "/investors" },
];

export function Topbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll effect for transparent to solid Topbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <div 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white shadow-md py-4" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center z-10">
          <span className={`text-2xl font-bold tracking-tight ${scrolled ? 'text-blue-600' : 'text-white'}`}>
            GB Construction
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                scrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              {item.name}
            </Link>
          ))}
          
          {/* Contact Button */}
          <Button 
            className={`ml-4 rounded-none px-6 py-5 flex items-center ${
              scrolled 
                ? "bg-blue-600 hover:bg-blue-700 text-white" 
                : "bg-white hover:bg-gray-100 text-blue-600"
            }`}
            onClick={() => {
              window.location.href = "/contact";
            }}
          >
            <Phone className="w-4 h-4 mr-2" />
            Contact Us
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              className={`lg:hidden ${scrolled ? 'text-gray-800' : 'text-white'}`} 
              aria-label="Menu"
            >
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] p-0">
            <div className="flex flex-col h-full bg-white">
              <div className="flex justify-between items-center p-6 border-b">
                <span className="text-xl font-bold text-blue-600">GB Construction</span>
              </div>
              <nav className="flex flex-col p-6 space-y-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-gray-800 hover:text-blue-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-none w-full mt-4 py-6">
                  <Phone className="w-4 h-4 mr-2" />
                  Contact Us
                </Button>
              </nav>
              <div className="mt-auto p-6 border-t">
                <p className="text-sm text-gray-500">
                  © 2023 GB Construction. All rights reserved.
                </p>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
} 