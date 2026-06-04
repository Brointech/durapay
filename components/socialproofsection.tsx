"use client";

import { useState } from "react";

const logos = [
  "Forbes",
  "CNBC",
  "TechCrunch",
  "The Guardian",
  "Techpoint Africa",
  "Financial Times",
  "TECHCITY",
  "Bloomberg",
  "Business Day",
];

const SocialProofSection = () => {
  const [toggleOn, setToggleOn] = useState(true);

  const allLogos = [...logos, ...logos, ...logos];

  return (
    <section className="w-full py-16 px-6 text-center bg-white overflow-hidden">
      {/* MARQUEE KEYFRAMES — inline so no tailwind config needed */}
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .marquee-track {
          display: flex;
          gap: 56px;
          width: max-content;
          animation: marquee 20s linear infinite;
          align-items: center;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        .marquee-outer {
          overflow: hidden;
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%);
          mask-image: linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%);
        }
        @keyframes sparkpulse {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50%       { opacity: 1;   transform: scale(1.3); }
        }
      `}</style>

      {/* AS SEEN ON */}
      <div className="flex items-center justify-center gap-6 mb-12 flex-wrap">
        <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase whitespace-nowrap">
          As seen on
        </span>
        <div className="w-px h-5 bg-gray-200" />
        <div className="marquee-outer w-full max-w-2xl">
          <div className="marquee-track">
            {allLogos.map((logo, i) => (
              <span
                key={i}
                className="text-[17px] font-bold text-gray-400 hover:text-gray-800 transition-all duration-200 whitespace-nowrap cursor-default select-none"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* HEADLINE + SPARKLES */}
      <div className="relative inline-block mb-2">
        {[
          { pos: "-top-3 -left-6", delay: "0s" },
          { pos: "top-2 -right-7", delay: "0.5s" },
          { pos: "-bottom-2 left-2", delay: "1s" },
          { pos: "-top-1 right-2", delay: "0.8s" },
        ].map(({ pos, delay }, i) => (
          <span
            key={i}
            className={`absolute ${pos} text-[#5e93fb] text-sm pointer-events-none`}
            style={{ animation: `sparkpulse 2s ease-in-out ${delay} infinite` }}
          >
            ✦
          </span>
        ))}

        <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-gray-900 leading-tight">
          Access Smarter Payment
        </h2>
        <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-bold leading-tight">
          <span className="text-[#1154da]">
            {" "}
            Seamless Transfers & Secure Banking{" "}
          </span>
          {/* <button
            onClick={() => setToggleOn(!toggleOn)}
            className={`inline-flex items-center rounded-full p-1 transition-colors duration-300 align-middle relative -top-1 ${
              toggleOn ? "bg-[#1154da]" : "bg-[#87aefc]"
            }`}
            style={{ width: 60, height: 34 }}
            aria-label="Toggle global"
          >
            <span
              className={`w-7 h-7 rounded-full bg-white flex items-center justify-center shadow transition-transform duration-300 ${
                toggleOn ? "translate-x-[26px]" : "translate-x-0"
              }`}
            >
              <svg
                className="w-4 h-4 text-[#1154da]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13 2L4.5 13.5H11L10 22l8.5-11.5H13.5L13 2z" />
              </svg>
            </span>
          </button> */}
        </h2>
      </div>

      <p className="text-gray-500 text-base mt-4 mb-10">
        Trusted by thousands of Nigerians and businesses for seamless global
        banking and everyday lifestyle needs.
      </p>

      {/* STATS ROW */}
      <div className="flex justify-center items-center gap-10 flex-wrap">
        {[
          { num: "200K+", label: "Active users" },
          { num: "20+", label: "Countries" },
          { num: "N100M+", label: "Transferred" },
          { num: "4.9★", label: "App store rating" },
        ].map((stat, i, arr) => (
          <div key={i} className="flex items-center gap-10">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{stat.num}</div>
              <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
            </div>
            {i < arr.length - 1 && <div className="w-px h-10 bg-gray-200" />}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SocialProofSection;
