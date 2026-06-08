"use client";

import { FiArrowRight, FiCheck } from "react-icons/fi";

const perks = [
  "Instant card creation — ready in seconds",
  "Accepted on Netflix, Amazon, Spotify & more",
  "Freeze, unfreeze or delete anytime",
  "Set spending limits per card",
];

const brands = [
  {
    label: "SHEIN",
    bg: "#fff",
    color: "#111",
    size: 60,
    style: "top-[10%] left-[5%]",
    delay: "0s",
    border: true,
    fontSize: 11,
  },
  {
    label: "PS",
    bg: "#0070f3",
    color: "#fff",
    size: 54,
    style: "top-[5%] right-[15%]",
    delay: "0.4s",
    fontSize: 13,
  },
  {
    label: "N",
    bg: "#e50914",
    color: "#fff",
    size: 50,
    style: "top-[45%] right-[8%]",
    delay: "0.8s",
    fontSize: 22,
  },
  {
    label: "a",
    bg: "#ff9900",
    color: "#fff",
    size: 52,
    style: "bottom-[30%] right-[12%]",
    delay: "0.2s",
    fontSize: 24,
  },
  {
    label: "D",
    bg: "#1a1aff",
    color: "#fff",
    size: 50,
    style: "bottom-[35%] left-[6%]",
    delay: "1s",
    fontSize: 20,
  },
  {
    label: "EBAY",
    bg: "#fff",
    color: "#1a1aff",
    size: 46,
    style: "top-[40%] left-[2%]",
    delay: "0.6s",
    border: true,
    fontSize: 11,
  },
];

const VirtualCardsSection = () => {
  return (
    <section className="w-full bg-white transition-transform duration-300 ease-in-out hover:-translate-y-2 px-6 lg:px-10 py-16">
      <div className=" mx-auto max-w-7xl px-6 rounded-[32px] bg-[#edf4df] overflow-hidden grid lg:grid-cols-2 items-center gap-10 ">
        {/* LEFT — content */}
        <div className="px-6 pt-20 pb-14 mb-20 flex flex-col justify-center">
          <p className="text-xs lg:text-lg font-semibold tracking-widest text-[#1154da] uppercase mb-4">
            Virtual Cards
          </p>
          <h2 className="text-[38px] sm:text-[52px] font-bold text-[#0d1f0a] leading-[1.1] mb-5">
            Shop and spend
            <br />
            anywhere
          </h2>
          <p className="text-[18px] text-black font-semibold leading-relaxed mb-10 max-w-sm">
            Use a virtual debit card that simply <br />
            works to make payments globaly.
          </p>
          <button className=" inline-flex items-center gap-3 text-[#1154da] font-bold text-[15px] group w-fit">
            Get your card
            <span className="w-8 h-8 rounded-full border-2 border-[#1154da] flex items-center justify-center group-hover:bg-[#1154da] transition-colors">
              <FiArrowRight className="w-4 h-4 group-hover:text-white transition-colors" />
            </span>
          </button>
        </div>
        {/* RIGHT — floating brands behind image */}
        <div className="relative min-h-90 lg:min-h-100">
          <img
            src="/virtual.avif"
            alt="Virtual card on phone"
            className="absolute inset-0 w-75 lg:w-200 ml-5 h-auto object-contain object-center z-2"
          />
        </div>
      </div>
    </section>
  );
};

export default VirtualCardsSection;
