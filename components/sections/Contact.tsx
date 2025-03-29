"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function Contact() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Email submitted:", email);
    // Reset form
    setEmail("");
    // Show success message
    alert("Thank you for subscribing to our newsletter!");
  };

  return (
    <section className="py-12 bg-primary text-white">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="text-xl font-bold mb-2">Visit one of our offices around West Bengal</h2>
              <p className="text-white/80 text-sm">
                GB Construction has offices in major cities across West Bengal
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="mt-6 md:mt-0 flex w-full max-w-sm">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-r-none"
            />
            <Button type="submit" className="bg-white text-primary hover:bg-white/90 rounded-l-none">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
} 