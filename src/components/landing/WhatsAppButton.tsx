'use client';

import { FaWhatsapp } from 'react-icons/fa';
import { HiPhone } from 'react-icons/hi';

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href="tel:+919783916343"
        className="w-14 h-14 bg-primary-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        title="Call Us"
      >
        <HiPhone className="w-6 h-6 text-white" />
      </a>
      <a
        href="https://wa.me/919783916343?text=Hi%20DH%20Financial%20Services!%20I%20want%20to%20know%20about%20your%20loan%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-7 h-7 text-white" />
      </a>
    </div>
  );
}
