'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-black text-white">
      {/* Dynamic Placeholder Background */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://picsum.photos/seed/wedding/1920/1080" 
          alt="Pixel Photography Background" 
          fill
          className="object-cover opacity-40"
          priority
        />
      </div>
      
      <div className="z-10 text-center px-4 max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-extrabold mb-6 text-white drop-shadow-lg"
        >
          Welcome to <span className="text-[#E31C3D]">Pixel</span> Photography & Media Production
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl md:text-2xl font-light tracking-wide text-gray-200"
        >
          Creativity is our driving force.
        </motion.p>
      </div>

      <motion.a 
        href="#services"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, delay: 1, repeat: Infinity }}
        className="absolute bottom-10 z-10 text-[#E31C3D] hover:text-white transition-colors"
      >
        <ChevronDown size={48} />
      </motion.a>
    </section>
  );
}