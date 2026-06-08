"use client";

import { ArrowRight, Globe, Repeat, ShieldCheck } from "lucide-react";

const transferFees = [
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

export default function TransactionFeesSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
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
                  {transferFees.map((item) => (
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
    </section>
  );
}
