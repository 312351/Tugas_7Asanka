'use client';
import React from "react";

export default function MapAmanKila() {
  return (
    <div className="min-h-5 relative aspect-[16/9] md:aspect-[16/8]">
      <div className="max-w-[1580px] relative aspect-[16/9] md:aspect-[16/8] min-h-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.165980299945!2d115.52712663411383!3d-8.500681831454806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd20f0417c2d0f9%3A0xb8ab0ba94f8b7f57!2sAmankila%2C%20Manggis%2C%20Karangasem%20Regency%2C%20Bali!5e0!3m2!1sen!2sid!4v1756311809364!5m2!1sen!2sid"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg"
        ></iframe>
      </div>
    </div>
  );
}
