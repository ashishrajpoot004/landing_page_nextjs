'use client';

export function Newsletter() {
  return (
    <section id="newsletter" className="py-16 px-6 text-center bg-gray-50">
      <h2 className="text-[24px] font-semibold font-nter text-[#222222] mb-4">Subscribe to our Newsletter</h2>
      <form className="flex flex-col sm:flex-row justify-center gap-4">
        <input type="email" required placeholder="Enter your email" className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none" />
        <button type="submit" className="bg-[#1959ac] text-white px-6 py-2 rounded-md hover:bg-[#0564b2]">Subscribe</button>
      </form>
    </section>
  );
}