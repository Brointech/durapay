"use client";

import { Link } from "react-router-dom";

import { FiArrowRight, FiCheck } from "react-icons/fi";

const CurrencyExchange = () => {
  return (
    // <section className="w-full px-6 lg:px-10 md:py-10 py-16 bg-white">
    //   <div className="flex flex-col lg:flex-row gap-6">
    //     {/* LEFT — Image */}
    //     <div className="rounded-2xl overflow-hidden bg-white shadow-sm transition-transform duration-300 ease-in-out hover:-translate-y-2">
    //       <img
    //         src="/Sent.jpg"
    //         alt="Currency exchange"
    //         className="w-full lg:h-full md:min-h-[300px] lg:min-h-[620px] object-cover"
    //       />
    //     </div>

    //     {/* RIGHT — Content */}
    //     <div className="w-full lg:w-3/5 rounded-2xl overflow-hidden min-h-[620px] lg:min-h-[620px] bg-[url('/world.avif')] bg-cover lg:bg-right-bottom bg-no-repeat bg-[#dce8fd] px-6 sm:px-10 lg:px-12 py-12 flex flex-col gap-5 justify-center shadow-sm transition-transform duration-300 ease-in-out hover:-translate-y-2">
    //       <p className="text-xs lg:text-lg font-semibold tracking-widest text-[#4F4A82] uppercase lg:-mt-60 -mt-50">
    //         Currency Exchange
    //       </p>

    //       <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a0a2e] leading-tight">
    //         Money conversion at the best rates
    //       </h2>

    //       <p className="text-base text-[#1a0a2e] font-semibold lg:text-[17px] leading-relaxed max-w-lg">
    //         Exchange major international currencies at the best rates with ease.
    //         Quickly convert local currency to foreign currency and back.
    //       </p>

    //       <button className="inline-flex items-center gap-3 text-[#1154da] font-bold text-[15px] group w-fit">
    //         Convert money
    //         <span className="w-8 h-8 rounded-full border-2 border-[#1154da] flex items-center justify-center group-hover:bg-[#1154da] transition-colors">
    //           <FiArrowRight className="w-4 h-4 group-hover:text-white transition-colors" />
    //         </span>
    //       </button>
    //     </div>
    //   </div>
    // </section>

    <section
      className="px-6 md:px-10 lg:px-10 pt-6 bg-white bg-"
      style={{ backgroundImage: "url('/')" }}
    >
      <div className=" mx-auto max-w-7xl flex flex-col md:flex-row gap-6">
        {/* LEFT — Image */}
        <div className="hidden sm:block md:w-2/5 lg:w-2/5 rounded-2xl overflow-hidden bg-white shadow-sm transition-transform duration-300 ease-in-out hover:-translate-y-2">
          <img
            src="/Sent.jpg"
            alt="Currency exchange"
            className="w-full h-full min-h-[420px] md:min-h-[520px] lg:min-h-[620px]  object-cover"
          />
        </div>
        {/* RIGHT - Content */}
        <div className="relative flex min-h-[500px] w-full flex-col justify-center overflow-hidden rounded-3xl bg-[#dce8fd] bg-[url('/world.avif')] bg-cover bg-center px-8 py-12 shadow-lg transition-all duration-300 hover:-translate-y-2 md:w-3/5 lg:px-14">
          {/* Optional overlay */}
          <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px]" />

          <div className="relative z-10 max-w-xl space-y-6">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4F4A82]">
              Currency Exchange
            </p>

            <h2 className="text-4xl font-bold leading-tight text-[#1a0a2e] md:text-5xl lg:text-6xl">
              Convert money at the best rates
            </h2>

            <p className="text-base leading-relaxed text-[#1a0a2e] md:text-lg">
              Effortlessly exchange major world currencies at competitive rates.
              Convert money from local to foreign currencies and back within
              seconds.
            </p>

            <button className="group inline-flex w-fit items-center gap-3 font-semibold text-[#1154da] transition-all hover:gap-4">
              Convert Money
              <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#1154da] transition-all duration-300 group-hover:bg-[#1154da]">
                <FiArrowRight className="h-4 w-4 transition-colors group-hover:text-white" />
              </span>
            </button>
          </div>
        </div>

        {/* RIGHT — Content */}
        {/* <div className="w-full md:w-3/5 rounded-2xl overflow-hidden min-h-[420px] sm:min-h-[480px] md:min-h-[520px] lg:min-h-[720px] bg-[url('/world.avif')] bg-cover bg-center lg:bg-cover bg-no-repeat bg-[#dce8fd] px-6 sm:px-10 lg:px-12 py-50 md:py-12 flex flex-col gap-5 justify-center shadow-sm transition-transform duration-300 ease-in-out hover:-translate-y-2">
          <p className="text-xs md:text-sm lg:text-lg font-bold tracking-widest text-[#4F4A82] uppercase lg:-mt-50 -mt-30">
            Currency Exchange
          </p>

          <h2 className="text-[32px] md:text-4xl lg:text-5xl font-bold text-[#1a0a2e] leading-none tracting-tight">
            Convert money <br className="lg:hidden block" />
            at the best <br className="lg:hidden block" />
            rates
          </h2>

          <p className="text-base text-[#1a0a2e] font-semibold text-[14px] md:text-[17px] lg:text-[18px] leading-relaxed max-w-lg">
            Effortlessly exchange major world currencies at the best rates.
            Convert money from local to foreign and back in a flash.
          </p>

          <button className="inline-flex items-center gap-3 text-[#1154da] font-semibold text-[15px] group w-fit">
            Convert money
            <span className="w-8 h-8 rounded-full border-2 border-[#1154da] flex items-center justify-center group-hover:bg-[#1154da] transition-colors">
              <FiArrowRight className="w-4 h-4 group-hover:text-white transition-colors" />
            </span>
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default CurrencyExchange;
