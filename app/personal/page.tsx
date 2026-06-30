"use client";

import { section } from "framer-motion/client";
import { Download, Wallet } from "lucide-react";

const Personal = () => {
  return (
    <section>
      <div className="relative overflow-hidden w-full bg-[#4BA8D8] min-h-screen flex flex-col  ">
        {/* ── BACKGROUND LAYERS ── */}

        {/* Base sky-blue gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: `
            radial-gradient(ellipse 80% 80% at 72% 45%, rgba(160, 215, 245, 0.50) 0%, transparent 60%),
            radial-gradient(ellipse 55% 70% at 100% 85%, rgba(45, 130, 185, 0.40) 0%, transparent 55%),
            radial-gradient(ellipse 50% 55% at 0% 15%, rgba(180, 225, 250, 0.30) 0%, transparent 50%),
            linear-gradient(155deg, #7ecef0 0%, #4BA8D8 38%, #3490c0 68%, #2878aa 100%)
          `,
          }}
        />

        {/* Grain overlay */}
        <div
          className="absolute inset-0 opacity-[0.055] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "128px 128px",
          }}
        />

        {/* Right-side light bloom */}
        <div
          className="absolute top-0 right-0 w-[55%] h-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 65% 75% at 78% 28%, rgba(210, 238, 252, 0.28) 0%, transparent 60%)",
          }}
        />

        {/* Floor reflection */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[30%] pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(150, 210, 240, 0.22) 0%, transparent 100%)",
          }}
        />

        {/* ── WHITE CURVED SHAPE — desktop only ── */}
        <div
          className="absolute bottom-0 right-0 pointer-events-none hidden lg:block"
          style={{
            width: "clamp(260px, 48vw, 720px)",
            height: "clamp(90px, 22vw, 280px)",
          }}
        >
          <svg
            viewBox="0 0 720 280"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <path
              d="M720 280 H0 Q180 280 360 120 Q500 10 720 80 Z"
              fill="white"
            />
          </svg>
        </div>

        {/* ── MOBILE/TABLET: full white bottom curve spanning full width ── */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none lg:hidden">
          <svg
            viewBox="0 0 375 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            preserveAspectRatio="none"
          >
            <path d="M0 80 Q187.5 0 375 80 Z" fill="white" />
          </svg>
        </div>

        {/* ── HERO CONTENT ── */}
        <div className="relative z-10 flex-1 flex flex-col lg:grid lg:grid-cols-2 mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-10 bg-[url('/asian.png')] bg-cover bg-center bg-no-repeat">
          {/* TEXT — top section on mobile */}
          <div className="flex flex-col justify-center pt-28 pb-8 lg:pt-0 lg:pb-0">
            <h1 className="text-[36px] font-bold leading-[1.12] tracking-[-1.5px] text-white sm:text-[46px] md:text-[52px] lg:text-[60px] xl:text-[68px]">
              Complete Global
              <br />
              banking for
              <br />
              freelancers
            </h1>

            <p className="mt-5 max-w-[480px] text-[15px] sm:text-[17px] lg:text-[18px] font-medium leading-relaxed text-white/90">
              Create international bank accounts tailored for freelancers to
              work and earn across borders. Access invoicing features, a global
              virtual USD card & manage multiple currencies.
            </p>

            <div className="mt-7">
              <button className="flex items-center gap-3 rounded-2xl bg-[#1154da] px-6 py-3.5 text-base sm:text-lg font-semibold text-white shadow-lg transition hover:bg-[#023bac] active:scale-95">
                {/* <Download className="w-5 h-5" /> */}
                Create your free account{" "}
              </button>
            </div>
          </div>

          {/* IMAGE — desktop: pinned to bottom-right */}
          {/* <div className="hidden lg:flex items-end justify-center lg:justify-end">
            <img
              src="/fullasian.png"
              alt="DuraPay App"
              loading="lazy"
              className="w-auto h-[75vh] max-h-[700px] object-contain object-bottom drop-shadow-2xl"
            />
          </div> */}

          {/* IMAGE — mobile/tablet: flush to bottom, no gap */}
          {/* <div className="flex lg:hidden justify-center items-end mt-auto">
            <img
              src="/bluehero.png"
              alt="DuraPay App"
              loading="lazy"
              className="
              w-[85%]
              max-w-[360px]
              sm:max-w-[460px]
              h-auto
              object-contain
              object-bottom
              mb-10
            "
            />
          </div> */}
        </div>
      </div>
      <div className="w-full max-w-7xl px-6 sm:px-10 lg:px-10">
        <div className="flex items-end justify-between mt-30 mb-7">
          <h1 className="font-bold text-black text-[18px] md:text-[26px] lg:text-[54px] leading-tight tracking-tight ">
            Free USD, GBP and EUR <br className="hidden lg:block" />
            accounts to receive <br className="hidden lg:block" />
            instant payments from <br className="hidden lg:block" />
            your clients
          </h1>
          <div className="hidden md:flex md:w-14 md:h-10 lg:w-18 lg:h-18 rounded-lg bg-black flex items-center justify-center mb-6">
            <Wallet className="w-9 h-5 lg:w-10 lg:h-10 text-white" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-2">
          <img src="/screenshot1.png" alt="" className="md:w-150 lg:w-100" />
          <img src="/screenshot2.png" alt="" className="md:w-80 lg:w-100" />
          <img src="/screenshot3.png" alt="" className="md:w-80 lg:w-100" />
        </div>
        <div className="">
          <h1 className="font-bold text-center text-black lg:text-[50px] leading-tight tracking-tight mb-7 mt-10">
            <span>Join millions of satisfied digital</span> <br />
            <span>global banking with Durapay</span> <br />
            <span>gurus who enjoy stress-free </span>
          </h1>
        </div>
        <div className="text-center mb-5">
          <button className=" gap-3 rounded-2xl bg-[#1154da] px-6 py-3.5 text-base sm:text-lg font-semibold text-white shadow-lg transition hover:bg-[#023bac] active:scale-95">
            Open a free Durapay account{" "}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Personal;
