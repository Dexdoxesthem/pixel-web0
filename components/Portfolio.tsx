'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-12">Creative Showcase</h2>
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <motion.div key={i} whileHover={{ scale: 1.02 }} className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
            <Image src={`https://picsum.photos/seed/pixel-${i}/600/600`} alt="Portfolio" fill className="object-cover" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}