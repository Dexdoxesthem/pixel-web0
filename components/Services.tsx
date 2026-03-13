'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Camera, Video, Heart, Box, Star, Baby, Sparkles } from 'lucide-react';

// Using the exact slug names we defined for the folder structure
const services = [
  { title: 'Weddings', icon: Heart, slug: 'wedding' },
  { title: 'Advertisements', icon: Video, slug: 'advertisements' },
  { title: 'Rice Ceremony & Birthday', icon: Baby, slug: 'ceremonies_parties' },
  { title: 'Pre-Weddings', icon: Sparkles, slug: 'prewedding' },
  { title: 'Model Shoot', icon: Star, slug: 'model_shoot' },
  { title: 'Product Shoot', icon: Box, slug: 'product_shoot' },
  { title: 'Other Events', icon: Camera, slug: 'other' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#F8F8F8]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-gray-900"
        >
          What Moment Are We Capturing For You?
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              /* Wrap the card in a Link for navigation */
              <Link key={index} href={`/portfolio/${service.slug}`} className="block">
                <motion.div 
                  variants={cardVariants}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="bg-white p-8 rounded-xl text-center border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#E31C3D] transition-all cursor-pointer flex flex-col items-center justify-center gap-5 group h-full"
                >
                  <div className="p-4 rounded-full bg-red-50 group-hover:bg-[#E31C3D] transition-colors">
                    <Icon size={32} className="text-[#E31C3D] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-semibold text-gray-800 text-lg leading-tight">
                    {service.title}
                  </h3>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#A0102B] opacity-0 group-hover:opacity-100 transition-opacity">
                    View Portfolio
                  </span>
                </motion.div>
              </Link>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}