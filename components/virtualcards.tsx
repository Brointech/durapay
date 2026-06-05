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
    <section className="w-full px-6 py-20 bg-white">
      {/* Keyframes for float animation */}
      <style>{`
        @keyframes floatUp {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-14px); }
        }
      `}</style>

      <div
        className="mx-auto max-w-6xl  rounded-2xl bg-[#e8f5e3] overflow-hidden grid grid-cols-1 lg:grid-cols-2 items-stretch transition-transform
    duration-400
    ease-in-out
    hover:-translate-y-2"
      >
        {/* LEFT — content */}
        <div className="px-10 pt-20 pb-14 mb-20 flex flex-col justify-center">
          <p className="text-xs lg:text-lg font-semibold tracking-widest text-[#1154da] uppercase mb-4">
            Virtual Cards
          </p>
          <h2 className="text-[42px] sm:text-[52px] font-bold text-[#0d1f0a] leading-[1.1] mb-5">
            Shop and spend
            <br />
            wherever you are
          </h2>

          <p className="text-[20px] text-black font-semibold leading-relaxed mb-40 max-w-sm">
            Use a virtual debit card that simply works <br />
            to make payments internationally.
          </p>
          {/* <div className="flex flex-col gap-3 mb-8">
            {perks.map((p) => (
              <div
                key={p}
                className="flex items-center gap-2.5 text-sm font-semibold text-[#1a3a10]"
              >
                <div className="w-5 h-5 rounded-full bg-[#1154da] flex items-center justify-center flex-shrink-0">
                  <FiCheck className="text-white w-3 h-3" strokeWidth={3} />
                </div>
                {p}
              </div>
            ))}
          </div> */}
          <button className=" inline-flex items-center gap-3 text-[#1154da] font-bold text-[15px] group w-fit">
            Get your card
            <span className="w-8 h-8 rounded-full border-2 border-[#1154da] flex items-center justify-center group-hover:bg-[#1154da] transition-colors">
              <FiArrowRight className="w-4 h-4 group-hover:text-white transition-colors" />
            </span>
          </button>
        </div>

        {/* RIGHT — floating brands behind image */}
        <div className="relative min-h-105 lg:min-h-0 overflow-hidden">
          {/* Brand bubbles — z-[1] so they sit BEHIND the image */}
          {/* {brands.map(
            ({ label, bg, color, size, style, delay, border, fontSize }) => (
              <div
                key={label}
                className={`absolute ${style} rounded-full flex items-center justify-center font-bold z-[1]`}
                style={{
                  width: size,
                  height: size,
                  background: bg,
                  color,
                  fontSize,
                  border: border ? "1.5px solid #e5e7eb" : undefined,
                  animation: `floatUp 3s ease-in-out ${delay} infinite`,
                }}
              >
                {label}
              </div>
            ),
          )} */}

          {/* Image — z-[2] so it sits ON TOP of the bubbles */}
          <img
            src="/virtual.avif"
            alt="Virtual card on phone"
            className="absolute inset-0 w-220 h-200 object-contain object-center mb-10 z-2"
          />
        </div>
      </div>
    </section>
  );
};

export default VirtualCardsSection;
