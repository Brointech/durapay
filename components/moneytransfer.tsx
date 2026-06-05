"use client";

import { FiArrowRight, FiCheck } from "react-icons/fi";

const MoneyTransfer = () => {
  return (
    <section className="w-full px-6 py-16 bg-white">
      <div className="mx-auto max-w-6xl  grid grid-cols-1 lg:grid-cols-2 gap-2 items-stretch">
        {/* LEFT CARD — image */}
        <div className="rounded-2xl overflow-hidden w-[480px] shadow-sm transition-transform duration-300 ease-in-out hover:-translate-y-2">
          <div className="min-h-[380px] lg:min-h-0 ">
            <img
              src="/yellowdesign.png"
              alt="Currency exchange"
              className="w-full h-full object-cover object-center"
              style={{ minHeight: "420px" }}
            />
          </div>
        </div>
        {/* RIGHT — content */}
        <div className="rounded-2xl min-h-[420px] max-w-[580px] bg-[url('/')]  bg-[#FEF1E6] px-10 sm:px-14 py-14 flex flex-col justify-center shadow-sm transition-transform duration-300 ease-in-out hover:-translate-y-2">
          <p className="text-xs lg:text-lg font-semibold tracking-widest text-[#4F4A82] uppercase mb-5">
            Money Transfer
          </p>

          <h2 className="text-[36px] sm:text-[40px] font-extrabold text-[#1a0a2e] leading-[1.12] mb-5">
            Transfer funds to your customers and family members worldwide.
          </h2>

          <p className="text-[20px] text-[#1a0a2e] font-semibold leading-relaxed mb-6 max-w-sm">
            Local or foreign payments? We'll deliver it on schedule.
          </p>

          {/* CTA */}
          <button className="inline-flex items-center gap-3 text-[#1154da] font-bold text-[15px] group w-fit">
            Initiate a transfer
            <span className="w-8 h-8 rounded-full border-2 border-[#1154da] flex items-center justify-center group-hover:bg-[#1154da] transition-colors">
              <FiArrowRight className="w-4 h-4 group-hover:text-white transition-colors" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default MoneyTransfer;
