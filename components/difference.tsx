"use client";

import { FiArrowRight } from "react-icons/fi";

const Differrence = () => {
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
        className="mx-auto max-w-6xl  rounded-2xl bg-[#FFF5FB] overflow-hidden grid grid-cols-1 lg:grid-cols-2 items-stretch transition-transform
            duration-400
            ease-in-out
            hover:-translate-y-2"
      >
        {/* LEFT — content */}
        <div className="px-10 pt-20 pb-14 mb-20 flex flex-col justify-center">
          <h2 className="text-[42px] sm:text-[52px] font-bold text-[#0d1f0a] leading-[1.1] mb-5">
            Collaborating <br /> to make a change
          </h2>

          <p className="text-[16px] text-zinc-600 font-semibold leading-relaxed mb-5 max-w-sm">
            At Durapay, we are committed to supporting meaningful causes and
            giving back. Through our dedicated social impact programs and
            corporate social responsibility initiatives, we strive to make a
            difference in the communities we serve. By choosing Durapay, you're
            not just simplifying your global transactions but contributing to a
            better world
          </p>
          <img src="/heart.avif" alt="" className="w-25 " />
        </div>

        {/* RIGHT — floating brands behind image */}
        <div className="relative min-h-100 lg:min-h-0 overflow-hidden">
          {/* Image — z-[2] so it sits ON TOP of the bubbles */}
          <img
            src="/diff.webp"
            alt="Virtual card on phone"
            className="absolute inset-0 w-220 h-200 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Differrence;
