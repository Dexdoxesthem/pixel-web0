'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import Image from 'next/image';
import { Play } from 'lucide-react';

export default function PortfolioInternal() {
  const params = useParams();
  const category = params.category as string;
  
  // Use a type guard to ensure the category exists in our data
  const data = portfolioData[category as keyof typeof portfolioData];

  if (!data) return <div className="py-20 text-center text-2xl font-bold">Project category not found.</div>;

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Category Hero */}
      <section className="relative h-[60vh] flex items-center justify-center bg-black overflow-hidden">
        {data.images[0] && (
           <Image src={data.images[0]} alt={data.title} fill className="object-cover opacity-60" priority />
        )}
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="text-5xl md:text-7xl font-bold uppercase tracking-tighter"
          >
            {data.title}
          </motion.h1>
          <p className="mt-4 text-xl font-light text-gray-300">{data.description}</p>
        </div>
      </section>

      {/* 2. Stats/Details Grid */}
      <section className="py-12 border-b border-gray-100 bg-white">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-between gap-8">
          {data.stats.map((stat: string, i: number) => (
            <div key={i} className="flex-1 text-center min-w-[200px]">
              <span className="block text-[#E31C3D] text-2xl font-bold">{stat}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. The Visual Gallery */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.images.map((img: string, i: number) => (
            <motion.div 
              key={i} 
              whileHover={{ scale: 1.02 }}
              className="relative aspect-square rounded-xl overflow-hidden shadow-lg group bg-gray-100"
            >
              <Image src={img} alt={`${data.title} gallery ${i}`} fill className="object-cover" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Video Showcase Section */}
      {data.videos.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">Video Productions</h2>
            <div className="grid md:grid-cols-2 gap-10">
              {data.videos.map((vid: string, i: number) => (
                <a key={i} href={vid} target="_blank" rel="noopener noreferrer" className="group cursor-pointer">
                  <div className="relative aspect-video bg-black rounded-2xl overflow-hidden flex items-center justify-center">
                    <Play size={64} className="text-white opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                    <p className="absolute bottom-4 left-4 text-white font-semibold">Watch Film</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}