'use client';
import { motion } from 'framer-motion';
import { Award, GraduationCap } from 'lucide-react';
import Image from 'next/image';

const founders = [
  {
    name: "RAHUL KUMAR MANNA",
    role: "Cinematographer / Production Head",
    image: "https://picsum.photos/seed/rahul/400/400",
    details: ["12+ Years Of Industry Experience", "Diploma on Cinematography, KFTI", "Diploma on Film Editing, IME"]
  },
  {
    name: "DEBARGHYA DAS",
    role: "Photographer / Marketing Head",
    image: "https://picsum.photos/seed/deb/400/400",
    details: ["7+ Years Of Industry Experience", "Diploma on Photography, RK Mission", "Master of Business Administration, BIBS"]
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-4xl font-bold text-center mb-12 text-gray-900">
          Our Story & Commitment
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {founders.map((founder, i) => (
            <motion.div key={i} whileHover={{ y: -10 }} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex flex-col items-center text-center">
              <div className="relative w-32 h-32 rounded-full border-4 border-[#E31C3D] overflow-hidden mb-6">
                <Image src={founder.image} alt={founder.name} fill className="object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-[#E31C3D]">{founder.name}</h3>
              <p className="text-gray-500 italic mb-6">{founder.role}</p>
              <ul className="text-left space-y-3">
                {founder.details.map((detail, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-gray-700">
                    <GraduationCap className="text-[#A0102B]" size={18}/> {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}