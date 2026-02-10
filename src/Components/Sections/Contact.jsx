import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6 text-center">

          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          {/* Contact Info */}
          <div className="space-y-4 text-lg">

            <p className="text-white/90">
              📞 <span className="font-semibold">Contact:</span>{" "}
              <a
                href="tel:8309303427"
                className="text-blue-400 hover:underline"
              >
                8309303427
              </a>
            </p>

            <p className="text-white/90">
              📧 <span className="font-semibold">Email:</span>{" "}
              <a
                href="mailto:battelanka8@gmail.com"
                className="text-blue-400 hover:underline"
              >
                battelanka8@gmail.com
              </a>
            </p>

          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
};
