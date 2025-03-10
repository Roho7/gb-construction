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
      {/* Modern subtle grid pattern */}
      <div className="absolute inset-0 bg-white">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 0, 0, 0.02) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 0, 0, 0.02) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>
      
      {/* Modern blue gradient blob in top-right */}
      <motion.div 
        className="absolute -top-[200px] -right-[200px] w-[800px] h-[800px] rounded-full opacity-5 bg-gradient-to-br from-blue-600 to-blue-200"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.05, 0.07, 0.05],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      
      {/* Modern blue gradient blob in bottom-left */}
      <motion.div 
        className="absolute -bottom-[300px] -left-[300px] w-[900px] h-[900px] rounded-full opacity-5 bg-gradient-to-br from-blue-400 to-transparent"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.08, 0.05],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 2,
        }}
      />
      
      {/* Subtle horizontal line */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200/20 to-transparent" />
      
      {/* Subtle vertical line */}
      <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-blue-200/20 to-transparent" />
    </div>
  );
} 