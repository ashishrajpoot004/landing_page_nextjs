'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Newsletter } from '@/components/Newsletter';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="bg-white text-[#222222]">
      <Navbar />
      <Hero />
      <Newsletter />
      <ContactForm />
      <Footer />
    </main>
  );
};