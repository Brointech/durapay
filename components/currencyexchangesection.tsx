"use client";

import { FiArrowRight, FiCheck } from "react-icons/fi";

const CurrencyExchangeSection = () => {
  return (
    <section className="w-full px-6 py-16 bg-white">
      <div
        className="mx-auto max-w-6xl rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[620px] transition-transform
    duration-400
    ease-in-out
    hover:-translate-y-2"
      >
        {/* LEFT — image */}
        <div className="relative min-h-[380px] lg:min-h-0">
          <img
            src="/sent.jpg"
            alt="Currency exchange"
            className="absolute inset-0 w-full object-cover object-center"
          />
        </div>

        {/* RIGHT — content */}
        <div className="relative  bg-[url('/world.avif')] bg-no-repeat bg-right-bottom bg-cover bg-[#dce8fd] px-8 sm:px-12 py-12 flex flex-col justify-center">
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

          {/* Perks */}
          {/* <div className="flex flex-col gap-3 mb-8">
            {[
              "Zero hidden fees",
              "Live interbank rates",
              "Instant conversion",
            ].map((p) => (
              <div
                key={p}
                className="flex items-center gap-2 text-sm font-semibold text-[#1154da]"
              >
                <div className="w-5 h-5 rounded-full bg-[#1154da] flex items-center justify-center flex-shrink-0">
                  <FiCheck className="text-white w-3 h-3" strokeWidth={3} />
                </div>
                {p}
              </div>
            ))}
          </div> */}

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

export default CurrencyExchangeSection;
