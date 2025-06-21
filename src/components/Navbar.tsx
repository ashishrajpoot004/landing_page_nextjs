'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export function Navbar() {
  return (
    <motion.nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md fixed w-full z-50" initial={{ y: -50 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
      <div className="text-xl font-bold text-[#222222]">WebbyWolf</div>
      <div className="space-x-4">
        <Link href="#hero" className="text-[#0564b2] hover:text-[#1959ac]">Home</Link>
        <Link href="#newsletter" className="text-[#0564b2] hover:text-[#1959ac]">Newsletter</Link>
        <Link href="#contact" className="text-[#0564b2] hover:text-[#1959ac]">Contact</Link>
      </div>
    </motion.nav>
  );
}
