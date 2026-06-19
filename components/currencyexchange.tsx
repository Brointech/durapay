"use client";

import { Link } from "react-router-dom";
import { link } from "fs";
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
      className="w-full px-6 md:px-8 lg:px-12 py-16 bg-white bg-"
      style={{ backgroundImage: "url('/')" }}
    >
      <div className="flex flex-col md:flex-row gap-6">
        {/* LEFT — Image */}
        <div className="md:w-2/5 lg:w-2/5 rounded-2xl overflow-hidden bg-white shadow-sm transition-transform duration-300 ease-in-out hover:-translate-y-2">
          <img
            src="/sent.jpg"
            alt="Currency exchange"
            className="w-full max-w-[480px] h-full min-h-[420px] md:min-h-[520px] lg:min-h-[620px] object-cover"
          />
        </div>

        {/* RIGHT — Content */}
        <div className="md:w-3/5 lg:w-3/5 p-2  rounded-2xl overflow-hidden min-h-[520px] md:min-h-[520px] lg:min-h-[720px] bg-[url('/world.avif')] bg-cover bg-no-repeat bg-[#dce8fd] px-6 sm:px-10 lg:px-12 py-12 flex flex-col gap-5 justify-center shadow-sm transition-transform duration-300 ease-in-out hover:-translate-y-2">
          <p className="text-xs md:text-sm lg:text-lg font-semibold tracking-widest text-[#4F4A82] uppercase pt-0 lg:pt-0 lg:-mt-50">
            Currency Exchange
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a0a2e] leading-[1.19]">
            Money conversion at <br />
            the best rates
          </h2>

          <p className="text-base text-[#1a0a2e] font-semibold md:text-[17px] lg:text-[18px] leading-relaxed max-w-lg">
            Exchange major international currencies at the best rates with ease.
            Quickly convert local currency to foreign currency.
          </p>

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
