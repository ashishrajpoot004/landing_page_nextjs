'use client';

import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section id="hero" className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-white to-blue-100 px-6 text-center">
      <motion.h1 className="text-[42px] font-bold font-robotoCondensed text-[#222222]" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        Build Pixel Perfect UIs
      </motion.h1>
      <p className="text-lg text-[#0564b2] mt-4 max-w-xl">
        Create engaging, responsive websites with smooth animations using Next.js & TypeScript.
      </p>
    </section>
  );
}