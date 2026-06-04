"use client";

// import React from "react";

import { Quote } from "lucide-react";

<Quote size={32} className="text-[#007BFF] mb-6" />;

const testimonials = [
  {
    quote: (
      <>
        DuraPay has completely changed how I manage <br />
        my finances. Transfers are instant, <br />
        reliable, and stress-free.
      </>
    ),
    name: "Chinedu Okafor",
    role: "Business Owner",
  },
  {
    quote:
      "Receiving payments from clients has never been easier. The app is fast, secure, and incredibly intuitive.",
    name: "Amina Bello",
    role: "Freelancer",
  },
  {
    quote:
      "From bill payments to everyday transfers, DuraPay makes banking feel effortless. Highly recommended.",
    name: "David Johnson",
    role: "Software Engineer",
  },
  {
    quote:
      "From bill payments to everyday transfers, DuraPay makes banking feel effortless. Highly recommended.",
    name: "David Johnson",
    role: "Software Engineer",
  },
  {
    quote:
      "From bill payments to everyday transfers, DuraPay makes banking feel effortless. Highly recommended.",
    name: "David Johnson",
    role: "Software Engineer",
  },
  {
    quote:
      "From bill payments to everyday transfers, DuraPay makes banking feel effortless. Highly recommended.",
    name: "David Johnson",
    role: "Software Engineer",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-[28px] font-bold text-[#00246C]">
            What Our Customers Say
          </h2>
          <div className="w-24 h-1.5 bg-[#1154da] rounded-full mx-auto mt-5" />
        </div>

        {/* Testimonials Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <span
              key={index}
              className="bg-white rounded-3xl p-8 lg:p-6 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote size={30} strokeWidth={1.5} className="text-[#1154da]" />
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-900 font-semibold text-[14px] leading-relaxed">
                "{testimonial.quote}"
              </p>
              {/* Customer */}
              <div className="mt-8">
                <h4 className="text-[#1154da] font-bold text-xl">
                  - {testimonial.name}
                </h4>
                <p className="text-gray-600 mt-1">{testimonial.role}</p>
              </div>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
