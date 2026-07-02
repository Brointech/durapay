"use client";
import { useState } from "react";

import { section } from "framer-motion/client";
import { Download } from "lucide-react";

import {
  BadgeCheck,
  Bell,
  CheckIcon,
  Shield,
  SparkleIcon,
  Wallet,
} from "lucide-react";

export default function BusinessPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [active, setActive] = useState(0);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  const AppleIcon = ({ className = "" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );

  const PlayStoreIcon = ({ className = "" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.18 23.76c.3.17.64.22.99.14l12.76-7.37-2.95-2.95-10.8 10.18zM.5 1.73C.19 2.08 0 2.63 0 3.33v17.34c0 .7.19 1.25.5 1.6l.08.08 9.71-9.71v-.22L.58 1.65.5 1.73zM20.67 10.27l-2.78-1.6-3.31 3.31 3.31 3.31 2.8-1.62c.8-.46.8-1.21-.02-1.4zM3.18.24L15.99 7.6l-2.95 2.95L2.24.37C2.6.3 2.91.07 3.18.24z" />
    </svg>
  );

  return (
    <section>
      <div className="relative overflow-hidden w-full bg-gray-200 min-h-screen flex flex-col  ">
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
        <div className="relative z-10 flex-1 flex flex-col lg:grid lg:grid-cols-2 mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-10">
          {/* TEXT — top section on mobile */}
          <div className="flex flex-col justify-center pt-28 pb-8 lg:pt-0 lg:pb-0">
            <h1 className="text-[36px] font-bold leading-[1.12] tracking-[-1.5px] text-white sm:text-[46px] md:text-[52px] lg:text-[55px] xl:text-[58px]">
              The Global app for <br />
              startups & companies
            </h1>

            <p className="mt-5 max-w-[480px] text-[15px] sm:text-[17px] lg:text-[18px] font-medium leading-relaxed text-white/90">
              Create international bank accounts tailored for freelancers to
              work and earn across borders. Access invoicing features, a global
              virtual USD card & manage multiple currencies.
            </p>

            <div className="mt-7">
              <button className="flex items-center gap-3 rounded-2xl bg-[#1154da] px-6 py-3.5 text-base sm:text-lg font-semibold text-white shadow-lg transition hover:bg-[#023bac] active:scale-95">
                {/* <Download className="w-5 h-5" /> */}
                Get a free Durapy account{" "}
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
          <div className="flex lg:hidden justify-center items-end mt-auto">
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
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl px-6 sm:px-10 lg:px-10 ">
        <div className="mt-30 mb-7">
          <h1 className="font-bold text-black lg:text-[58px] leading-tight tracking-tight ">
            Free USD, GBP and EUR <br />
            accounts to receive <br /> instant payments from <br />
            your clients
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
          <img
            src="/Screenshot1.png"
            alt=""
            className="w-130 md:w-180 lg:w-95"
          />
          <img
            src="/Screenshot2.png"
            alt=""
            className="w-130 md:w-180 lg:w-95"
          />
          <img
            src="/Screenshot3.png"
            alt=""
            className="w-130 md:w-180 lg:w-95"
          />
        </div>
        <div className="">
          <h1 className="font-bold text-center text-black text-[22px] md:text-[42px] lg:text-[50px] leading-tight tracking-tight mb-7 mt-10">
            <span>Join millions of satisfied digital</span> <br />
            <span>global banking with Durapay</span> <br />
            <span>gurus who enjoy stress-free </span>
          </h1>
        </div>
        <div className="text-center mb-5">
          <button className=" gap-3 rounded-2xl bg-[#1154da] px-6 py-3.5 text-base sm:text-lg font-semibold text-white shadow-lg transition hover:bg-[#023bac] active:scale-95">
            {/* <Download className="w-5 h-5" /> */}
            Open a free Durapay account{" "}
          </button>
        </div>
      </div>

      {/* ── DOWNLOAD ───────────────────────────────────────────────────────── */}
      <section id="download" className="py-24 relative overflow-hidden">
        {/* BG */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/20 to-transparent pointer-events-none" />
        <div className="absolute inset-0 grid-bg pointer-events-none opacity-50" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#1154da] text-sm lg:text-lg font-semibold uppercase tracking-widest mb-4">
            Download Durapay
          </p>
          <h2 className="text-3xl text-black sm:text-5xl font-bold leading-tight mb-5">
            Ready to send money
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-400">
              the smart way?
            </span>
          </h2>
          <p className="text-zinc-900 text-lg mb-10 max-w-md mx-auto">
            Join over 2 million Nigerians already using Swiftpay to send,
            receive, and manage money effortlessly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="group flex items-center gap-3 bg-white text-black hover:bg-zinc-100 transition-colors px-6 py-4 rounded-2xl font-semibold text-sm"
            >
              <AppleIcon className="w-6 h-6 shrink-0" />
              <div className="text-left">
                <p className="text-xs font-normal text-black/90">
                  Download on the
                </p>
                <p className="font-bold">App Store</p>
              </div>
            </a>
            <a
              href="#"
              className="group flex items-center gap-3 bg-white text-black hover:bg-zinc-100 transition-colors px-6 py-4 rounded-2xl font-semibold text-sm"
            >
              <PlayStoreIcon className="w-6 h-6 shrink-0" />
              <div className="text-left">
                <p className="text-xs font-normal text-black/90">Get it on</p>
                <p className="font-bold">Google Play</p>
              </div>
            </a>
          </div>

          {/* Email waitlist */}
          <div className="mt-12 bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 max-w-sm mx-auto">
            <p className="font-semibold mb-1 text-black/90 text-sm">
              Get early access
            </p>
            <p className="text-zinc-800 text-xs mb-4">
              Be first to know about new features & exclusive offers.
            </p>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white placeholder-zinc-600 outline-none focus:border-[#023bac] transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#1154da] hover:bg-[#023bac] transition-colors text-white font-bold px-4 py-2.5 rounded-xl text-sm shrink-0"
                >
                  Notify me
                </button>
              </form>
            ) : (
              <div className="flex items-center justify-center gap-2 py-2 text-emerald-400 text-sm font-medium">
                <CheckIcon className="w-4 h-4" />
                You're on the list!
              </div>
            )}
          </div>
        </div>
      </section>
    </section>
  );
}
