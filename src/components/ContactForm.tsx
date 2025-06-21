'use client';

export function ContactForm() {
  return (
    <section id="contact" className="py-16 px-6 text-center bg-white">
      <h2 className="text-[24px] font-semibold font-nter text-[#222222] mb-4">Contact Us</h2>
      <form className="max-w-xl mx-auto flex flex-col gap-4">
        <input type="text" placeholder="Name" className="px-4 py-2 border border-gray-300 rounded-md" required />
        <input type="email" placeholder="Email" className="px-4 py-2 border border-gray-300 rounded-md" required />
        <textarea placeholder="Message" rows={5} className="px-4 py-2 border border-gray-300 rounded-md" required></textarea>
        <button type="submit" className="bg-[#1959ac] text-white px-6 py-2 rounded-md hover:bg-[#0564b2]">Send Message</button>
      </form>
    </section>
  );
}
