"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Background() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return null;
  
  return (
    <div className="fixed inset-0 -z-40 overflow-hidden pointer-events-none">
      {/* Subtle grid is already applied via CSS */}
      
      {/* Large gradient circle in the top-right */}
      <div 
        className="absolute -top-[300px] -right-[300px] w-[600px] h-[600px] rounded-full opacity-10 bg-gradient-to-br from-[hsl(210,100%,40%)] to-transparent"
      />
      
      {/* Large gradient circle in the bottom-left */}
      <div 
        className="absolute -bottom-[300px] -left-[300px] w-[600px] h-[600px] rounded-full opacity-10 bg-gradient-to-br from-[hsl(210,100%,40%)] to-transparent"
      />
      
      {/* Animated dots - REMOVED */}
      
      {/* Diagonal lines */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-0 left-1/4 w-px h-full bg-[hsl(210,100%,40%)] transform -rotate-45" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-[hsl(210,100%,40%)] transform rotate-45" />
      </div>
    </div>
  );
} 