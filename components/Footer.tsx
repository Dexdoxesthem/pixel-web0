'use client';
import { Facebook, Instagram, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#111] text-white py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="flex justify-center gap-6 mb-8">
          <a href="#" className="hover:text-[#E31C3D]"><Facebook size={24}/></a>
          <a href="#" className="hover:text-[#E31C3D]"><Instagram size={24}/></a>
        </div>
        <p className="text-gray-500">© 2026 Pixel Photography & Media Production. All Rights Reserved.</p>
      </div>
    </footer>
  );
}