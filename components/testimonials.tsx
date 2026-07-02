"use client";

// import React from "react";

import { Quote, Star } from "lucide-react";

<Quote size={32} className="text-[#007BFF] mb-6" />;

// const testimonials = [
//   {
//     quote: (
//       <>
//         DuraPay has completely changed how I manage <br />
//         my finances. Transfers are instant, <br />
//         reliable, and stress-free.
//       </>
//     ),
//     name: "Chinedu Okafor",
//     role: "Business Owner",
//   },
//   {
//     quote:
//       "Receiving payments from clients has never been easier. The app is fast, secure, and incredibly intuitive.",
//     name: "Amina Bello",
//     role: "Freelancer",
//   },
//   {
//     quote:
//       "From bill payments to everyday transfers, DuraPay makes banking feel effortless. Highly recommended.",
//     name: "David Johnson",
//     role: "Software Engineer",
//   },
//   {
//     quote:
//       "From bill payments to everyday transfers, DuraPay makes banking feel effortless. Highly recommended.",
//     name: "David Johnson",
//     role: "Software Engineer",
//   },
//   {
//     quote:
//       "From bill payments to everyday transfers, DuraPay makes banking feel effortless. Highly recommended.",
//     name: "David Johnson",
//     role: "Software Engineer",
//   },
//   {
//     quote:
//       "From bill payments to everyday transfers, DuraPay makes banking feel effortless. Highly recommended.",
//     name: "David Johnson",
//     role: "Software Engineer",
//   },
// ];

const testimonials = [
  {
    id: "1",
    name: "Chioma Okafor",
    location: "Lagos",
    text: "I send money to my parents in the village every week. It arrives in seconds and they get an SMS instantly. No stress at all.",
    rating: 5,
    avatar: "CO",
  },
  {
    id: "2",
    name: "Emmanuel Adeyemi",
    location: "Abuja",
    text: "Bought airtime for my whole family during a blackout. The app worked when everything else failed. Truly reliable.",
    rating: 5,
    avatar: "EA",
  },
  {
    id: "3",
    name: "Amina Ibrahim",
    location: "Kano",
    text: "The gift vouchers are perfect for my small business. I send them to loyal customers and they love the experience.",
    rating: 5,
    avatar: "AI",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Heading */}
        {/* <div className="text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-[28px] font-bold text-[#00246C]">
            What Our Customers Say
          </h2>
          <div className="w-24 h-1.5 bg-[#1154da] rounded-full mx-auto mt-5" />
        </div> */}

        {/* Testimonials */}
        <section className="py-20 sm:py-28 px-6 sm:px-10 lg:px-10 ">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Loved by Nigerians
              </h2>
              <p className="text-lg text-slate-600">
                Real stories from real users across the country.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white text-sm font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-slate-500">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        {/* <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <span
              key={index}
              className="bg-white rounded-3xl p-8 lg:p-6 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              
              <div className="mb-6">
                <Quote size={30} strokeWidth={1.5} className="text-[#1154da]" />
              </div>

              
              <p className="text-gray-900 font-semibold text-[14px] leading-relaxed">
                "{testimonial.quote}"
              </p>
            
              <div className="mt-8">
                <h4 className="text-[#1154da] font-bold text-xl">
                  - {testimonial.name}
                </h4>
                <p className="text-gray-600 mt-1">{testimonial.role}</p>
              </div>
            </span>
          ))}
        </div> */}
      </div>
    </section>
  );
}
