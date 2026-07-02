// export default function Page() {
//   return null;
// }

"use client";

import { useState } from "react";
import {
  Search,
  CreditCard,
  Globe,
  Shield,
  Wallet,
  ChevronDown,
} from "lucide-react";

const categories = [
  {
    title: "Account",
    icon: Wallet,
    description: "Manage your account settings and profile.",
  },
  {
    title: "Transfers",
    icon: Globe,
    description: "Learn about local and international transfers.",
  },
  {
    title: "Cards",
    icon: CreditCard,
    description: "Virtual and physical card support.",
  },
  {
    title: "Security",
    icon: Shield,
    description: "Keep your account secure and protected.",
  },
];

const articles = [
  "How do I create a DuraPay account?",
  "How to verify your identity",
  "How international transfers work",
  "How to order a physical card",
  "How to reset your password",
  "Transaction failed? Here's what to do",
];

const faqs = [
  {
    question: "How long do transfers take?",
    answer:
      "Local transfers are usually instant while international transfers may take between a few minutes and 2 business days.",
  },
  {
    question: "Can I hold multiple currencies?",
    answer:
      "Yes, DuraPay allows you to receive, send and manage multiple currencies from a single account.",
  },
  {
    question: "Is my money secure?",
    answer:
      "Absolutely. We use bank-grade encryption and advanced fraud detection systems.",
  },
  {
    question: "How do I contact support?",
    answer:
      "You can contact our support team through live chat, email, or the support form below.",
  },
];

const HelpCentre = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="bg-[#f7f9fc] py-20px-6 sm:px-10 lg:px-10">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            Help Center
          </span>

          <h1 className="mt-6 text-4xl font-bold text-gray-900 md:text-6xl">
            How can we help you today?
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Find answers, guides, and support for everything DuraPay.
          </p>

          {/* Search */}
          <div className="mx-auto mt-10 max-w-2xl">
            <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm">
              <Search className="text-gray-400" size={22} />
              <input
                type="text"
                placeholder="Search for articles..."
                className="w-full bg-transparent outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-10">
          <h2 className="text-center text-3xl font-bold text-gray-900">
            Browse Help Topics
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-gray-200 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
                    <Icon className="text-blue-600" size={28} />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* POPULAR ARTICLES */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-10">
          <h2 className="text-center text-3xl font-bold text-gray-900">
            Popular Articles
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <div
                key={article}
                className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:shadow-md"
              >
                <h3 className="font-medium text-gray-900">{article}</h3>

                <button className="mt-4 text-sm font-semibold text-blue-600">
                  Read Article →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 sm:px-10 lg:px-10">
          <h2 className="text-center text-3xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>

          <div className="mt-12 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-gray-200"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-medium text-gray-900">
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={20}
                    className={`transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openFaq === index && (
                  <div className="border-t border-gray-200 px-6 py-5 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SUPPORT */}
      <section className="pb-20">
        <div className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-10 ">
          <div className="rounded-3xl bg-blue-800 px-8 py-14 text-center text-white md:px-16">
            <h2 className="text-3xl font-bold">Still need help?</h2>

            <p className="mt-4 text-blue-100">
              Our support team is available 24/7 to help with any questions.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <button className="rounded-xl bg-white px-8 py-4 font-semibold text-blue-600">
                Contact Support
              </button>

              <button className="rounded-xl border border-white px-8 py-4 font-semibold text-white">
                Live Chat
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HelpCentre;
