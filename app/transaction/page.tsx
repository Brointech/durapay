"use client";

import {
  ArrowRight,
  Globe,
  Repeat,
  ShieldCheck,
  CheckIcon,
} from "lucide-react";
import { useState } from "react";

const transaction = [
  {
    service: "Local Transfers",
    fee: "Free",
    description: "Send money to local bank accounts instantly.",
  },
  {
    service: "International Transfers",
    fee: "From 0.5%",
    description: "Competitive fees for global transfers.",
  },
  {
    service: "USD Receiving Account",
    fee: "Free",
    description: "Receive USD payments from abroad.",
  },
  {
    service: "Virtual Card",
    fee: "Free",
    description: "Create and manage virtual cards.",
  },
];

const conversionFees = [
  {
    currency: "USD → NGN",
    fee: "0.35%",
  },
  {
    currency: "GBP → NGN",
    fee: "0.40%",
  },
  {
    currency: "EUR → NGN",
    fee: "0.40%",
  },
  {
    currency: "USD → GBP",
    fee: "0.50%",
  },
];

const AppleIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const PlayStoreIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M3.18 23.76c.3.17.64.22.99.14l12.76-7.37-2.95-2.95-10.8 10.18zM.5 1.73C.19 2.08 0 2.63 0 3.33v17.34c0 .7.19 1.25.5 1.6l.08.08 9.71-9.71v-.22L.58 1.65.5 1.73zM20.67 10.27l-2.78-1.6-3.31 3.31 3.31 3.31 2.8-1.62c.8-.46.8-1.21-.02-1.4zM3.18.24L15.99 7.6l-2.95 2.95L2.24.37C2.6.3 2.91.07 3.18.24z" />
  </svg>
);

export default function Transaction() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [active, setActive] = useState(0);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="bg-white py-20 px-6 sm:px-14 lg:px-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Hero */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            Transaction Fees
          </span>

          <h1 className="mt-6 text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
            Transparent transfer and conversion fees
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            No hidden charges. Know exactly what you'll pay before every
            transaction.
          </p>
        </div>

        {/* Transfer Fees */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900">Transfer Fees</h2>

          <div className="mt-8 overflow-hidden rounded-3xl border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px]">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-5 text-left text-sm font-semibold">
                      Service
                    </th>
                    <th className="px-6 py-5 text-left text-sm font-semibold">
                      Fee
                    </th>
                    <th className="px-6 py-5 text-left text-sm font-semibold">
                      Description
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {transaction.map((item) => (
                    <tr key={item.service} className="border-t border-gray-200">
                      <td className="px-6 py-5 font-medium">{item.service}</td>

                      <td className="px-6 py-5 font-semibold text-blue-600">
                        {item.fee}
                      </td>

                      <td className="px-6 py-5 text-gray-600">
                        {item.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Conversion Fees */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-gray-900">
            Currency Conversion Fees
          </h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {conversionFees.map((item) => (
              <div
                key={item.currency}
                className="rounded-3xl border border-gray-200 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <Repeat className="text-blue-600" size={30} />

                <h3 className="mt-5 text-lg font-semibold">{item.currency}</h3>

                <p className="mt-3 text-3xl font-bold text-blue-600">
                  {item.fee}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mt-24 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-gray-50 p-8">
            <Globe size={32} className="text-blue-600" />

            <h3 className="mt-5 text-xl font-semibold">Global Transfers</h3>

            <p className="mt-3 text-gray-600">
              Move money across multiple countries with competitive pricing.
            </p>
          </div>

          <div className="rounded-3xl bg-gray-50 p-8">
            <Repeat size={32} className="text-blue-600" />

            <h3 className="mt-5 text-xl font-semibold">Fair Exchange Rates</h3>

            <p className="mt-3 text-gray-600">
              Transparent conversion rates with low markups.
            </p>
          </div>

          <div className="rounded-3xl bg-gray-50 p-8">
            <ShieldCheck size={32} className="text-blue-600" />

            <h3 className="mt-5 text-xl font-semibold">No Hidden Charges</h3>

            <p className="mt-3 text-gray-600">
              Every fee is shown before you complete your transaction.
            </p>
          </div>
        </div>

        {/* Transparency Banner */}
        <div className="mt-24 rounded-3xl bg-[#0D1526] px-8 py-16 text-center text-white">
          <h2 className="text-3xl font-bold lg:text-4xl">
            Transparent pricing from day one
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-300">
            We believe global payments should be simple. That's why we clearly
            display all fees before you send or convert money.
          </p>

          <button className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-black transition hover:scale-105">
            Start Transferring
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* ── DOWNLOAD ───────────────────────────────────────────────────────── */}
      <section id="download" className="py-24 relative overflow-hidden">
        {/* BG */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/20 to-transparent pointer-events-none" />
        <div className="absolute inset-0 grid-bg pointer-events-none opacity-50" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#1154da] text-sm lg:text-lg font-semibold uppercase tracking-widest mb-4">
            Download Durapay
          </p>
          <h2 className="text-3xl text-black sm:text-5xl font-bold leading-tight mb-5">
            Ready to send money
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-400">
              the smart way?
            </span>
          </h2>
          <p className="text-zinc-900 text-lg mb-10 max-w-md mx-auto">
            Join over 2 million Nigerians already using Swiftpay to send,
            receive, and manage money effortlessly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="group flex items-center gap-3 bg-white text-black hover:bg-zinc-100 transition-colors px-6 py-4 rounded-2xl font-semibold text-sm"
            >
              <AppleIcon className="w-6 h-6 shrink-0" />
              <div className="text-left">
                <p className="text-xs font-normal text-black/90">
                  Download on the
                </p>
                <p className="font-bold">App Store</p>
              </div>
            </a>
            <a
              href="#"
              className="group flex items-center gap-3 bg-white text-black hover:bg-zinc-100 transition-colors px-6 py-4 rounded-2xl font-semibold text-sm"
            >
              <PlayStoreIcon className="w-6 h-6 shrink-0" />
              <div className="text-left">
                <p className="text-xs font-normal text-black/90">Get it on</p>
                <p className="font-bold">Google Play</p>
              </div>
            </a>
          </div>

          {/* Email waitlist */}
          <div className="mt-12 bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 max-w-sm mx-auto">
            <p className="font-semibold mb-1 text-black/90 text-sm">
              Get early access
            </p>
            <p className="text-zinc-800 text-xs mb-4">
              Be first to know about new features & exclusive offers.
            </p>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white placeholder-zinc-600 outline-none focus:border-[#023bac] transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#1154da] hover:bg-[#023bac] transition-colors text-white font-bold px-4 py-2.5 rounded-xl text-sm shrink-0"
                >
                  Notify me
                </button>
              </form>
            ) : (
              <div className="flex items-center justify-center gap-2 py-2 text-emerald-400 text-sm font-medium">
                <CheckIcon className="w-4 h-4" />
                You're on the list!
              </div>
            )}
          </div>
        </div>
      </section>
    </section>
  );
}
