"use client";

import { useState, useEffect, useRef } from "react";

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
  const [toggleOn, setToggleOn] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const hasTriggered = useRef(false); // ensures it only auto-fires once, not every time it scrolls in/out

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setToggleOn(entry.isIntersecting);
      },
      { threshold: 0.6 },
    );

    if (toggleRef.current) observer.observe(toggleRef.current);

    return () => {
      if (toggleRef.current) observer.unobserve(toggleRef.current);
    };
  }, []);

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
                className="text-[17px] font-bold text-gray-400 hover:text-gray-900 transition-all duration-200 whitespace-nowrap cursor-default select-none"
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
            className={`absolute ${pos} text-[#CEAFF4] text-sm pointer-events-none`}
            style={{ animation: `sparkpulse 2s ease-in-out ${delay} infinite` }}
          >
            ✦
          </span>
        ))}

        <div className="flex items-center justify-center lg:mb-8">
          <img
            src="/iso.avif"
            alt=""
            className="w-[280px] sm:w-[260px] lg:w-[70px]"
          />
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-[66px] font-bold text-gray-900 leading-tight">
          No Limits, No Borders
        </h2>
        <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-bold leading-tight">
          <span className="text-[#5E19B3]"> Go global</span>
          <button
            ref={toggleRef}
            onClick={() => setToggleOn(!toggleOn)}
            className={`inline-flex items-center rounded-full p-1.5 transition-colors duration-700 align-middle relative -top-1 ${
              toggleOn ? "bg-[#EDE9FE]" : "bg-[#EDE9FE]"
            }`}
            style={{ width: 60, height: 36 }}
            aria-label="Toggle global"
          >
            <span
              className={`w-7 h-7 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] flex items-center justify-center shadow-md transition-transform duration-700 ${
                toggleOn ? "translate-x-[26px]" : "translate-x-0"
              }`}
            >
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13 2L4.5 13.5H11L10 22l8.5-11.5H13.5L13 2z" />
              </svg>
            </span>
          </button>
        </h2>
      </div>
      {/* 
      <p className="text-gray-500 text-base mt-4 mb-10">
        Trusted by thousands of Nigerians and businesses for seamless global
        banking and everyday lifestyle needs.
      </p> */}

      {/* STATS ROW */}
      {/* <div className="flex justify-center items-center gap-10 flex-wrap">
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
      </div> */}
    </section>
  );
};

export default SocialProofSection;
