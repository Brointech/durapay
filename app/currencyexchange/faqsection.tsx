"use client";

import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { FAQS } from "./currency";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function toggle(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <section className="bg-[#F7F9FD] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-bold text-[#00246C] sm:text-3xl">
              Have questions?
            </h2>
            <p className="mt-1 text-sm text-[#00246C]/60">
              For your frequently asked questions.
            </p>
          </div>
          <a
            href="#help-centre"
            className="shrink-0 rounded-full bg-[#1154da] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0e46b8]"
          >
            Go to help centre
          </a>
        </div>

        <div className="mt-10 divide-y divide-[#00246C]/10 rounded-2xl bg-white px-2 shadow-sm ring-1 ring-[#00246C]/5 sm:px-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="py-2">
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-3.5 text-left"
                >
                  <span className="text-sm font-semibold text-[#00246C] sm:text-base">
                    {faq.question}
                  </span>
                  <FiPlus
                    aria-hidden
                    className={`h-4 w-4 shrink-0 text-[#1154da] transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ease-in-out ${
                    isOpen ? "max-h-40 pb-4 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-sm text-[#00246C]/60">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
