"use client";

import { FiArrowRight, FiCheck } from "react-icons/fi";

const CurrencyExchange = () => {
  return (
    <section className="w-full px-6 py-16 bg-white">
      <div className="mx-auto max-w-6xl  grid grid-cols-1 lg:grid-cols-2 gap-3 items-stretch">
        {/* LEFT CARD — image */}
        <div className="rounded-2xl hidden lg:block  overflow-hidden min-h-[380px] lg:min-h-[420px] bg-white shadow-sm transition-transform duration-300 ease-in-out hover:-translate-y-2">
          <div className="min-h-[380px] lg:min-h-0">
            <img
              src="/sent.jpg"
              alt="Currency exchange"
              className="w-full h-[620px] object-cover object-center"
            />
          </div>
        </div>
        {/* RIGHT — Content */}
        <div className="rounded-2xl overflow-hidden min-h-[380px] lg:min-h-[620px] bg-[url('/world.avif')] bg-no-repeat bg-right-bottom  bg-cover bg-[#dce8fd] px-8 sm:px-12 py-12 flex flex-col justify-center shadow-sm transition-transform duration-300 ease-in-out hover:-translate-y-2">
          <p className="text-xs lg:text-lg font-semibold tracking-widest text-[#4F4A82]  uppercase mb-4 -mt-60">
            Currency Exchange
          </p>

          <h2 className="text-[36px] sm:text-[40px] font-extrabold text-[#1a0a2e] leading-[1.12] mb-5">
            {/* Convert money at
            <br />
            the best rates */}
            Money conversion at the best rates
          </h2>

          <p className="text-[16xpx] text-[#1a0a2e] font-semibold leading-relaxed mb-6 max-w-sm">
            Exchange major international currencies at the best <br />
            rates with ease. Quickly convert local currency to <br />
            foreign currency and back.
          </p>

          {/* CTA */}
          <button className="inline-flex items-center gap-3 text-[#1154da] font-bold text-[15px] group w-fit">
            Convert money
            <span className="w-8 h-8 rounded-full border-2 border-[#1154da] flex items-center justify-center group-hover:bg-[#1154da] transition-colors">
              <FiArrowRight className="w-4 h-4 group-hover:text-white transition-colors" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CurrencyExchange;
