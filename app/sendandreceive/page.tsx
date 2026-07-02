"use client";

import {
  BadgeCheck,
  Bell,
  CheckIcon,
  Shield,
  SparkleIcon,
  Wallet,
} from "lucide-react";
import { useState } from "react";

type Feature = {
  title: string;
};

const Feature: Feature[] = [
  { title: "100% digital transfers" },
  { title: "The best exchange rates" },
  { title: "Speedy bank transfers" },
  { title: "Fair and transparent transfer fees" },
  { title: "Free p2p transfers" },
  { title: "Multiple payment schemes" },
  { title: "No virtual accounts required for transfers" },
  { title: "Enjoy multiple daily transfers" },
  { title: "Instant transaction notifications" },
  { title: "Anti-fraud protection" },
];

const FeatureCard = ({ title }: Feature) => {
  return (
    <div
      className="
        flex items-center gap-4
        rounded-full
        border border-slate-700/80
        bg-slate-950/60
        backdrop-blur-sm
        px-6 py-5
        min-h-[88px]
        shadow-[0_0_0_1px_rgba(255,255,255,0.03)]
        transition-all duration-300
        hover:border-violet-500/40
        hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]
      "
    >
      <SparkleIcon />

      <span className="text-white text-base md:text-lg font-medium">
        {title}
      </span>
    </div>
  );
};

const featur = [
  {
    title: "Protected and Regulated",
    description:
      "We are regulated by CBN and NDIC, giving you the confidence to transact globally with peace of mind.",
    icon: Shield,
    image: "/protected-regulated.webp",
  },
  {
    title: "Two-Factor Authentication",
    description:
      "Protect your account with additional security verification during every transaction.",
    icon: BadgeCheck,
    image: "/two-factor.webp",
  },
  {
    title: "Instant Notification",
    description:
      "Receive real-time alerts whenever money is sent, received or converted.",
    icon: Bell,
    image: "/instant-notification.avif",
  },
];

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

export default function Sendandreceive() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [active, setActive] = useState(0);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-white font-sans antialiased overflow-hidden">
      {/* ── Bottom-right curved blob (the large off-white sweep) ── */}
      {/* <svg
        className="absolute bottom-20 right-10 w-[65%] md:w-[55%] lg:w-[50%] h-auto"
        viewBox="0 0 700 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M700 520 H0 C80 520 160 480 200 400 C260 290 180 160 260 80 C330 10 450 0 540 20 C630 40 700 110 700 200 Z"
          fill="#dce6ff"
          opacity="0.55"
        />
        <path
          d="M700 520 H120 C200 520 300 490 360 420 C430 340 370 210 450 130 C510 60 610 40 670 70 C690 80 700 100 700 120 Z"
          fill="white"
          opacity="0.85"
        />
      </svg> */}
      {/* ── HERO ───────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#f8f9ff] -mt-6 md:-mt-0 lg:-mt-2 min-h-[90vh]">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,#eef3ff_0%,transparent_45%),radial-gradient(circle_at_bottom_right,#dbe8ff_0%,transparent_35%)]"></div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-10 py-20 md:py-24 lg:py-18 ">
          <div className="grid items-center gap-0 lg:grid-cols-2 md:grid-cols-2">
            {/* LEFT CONTENT */}
            <div className="max-w-2xl md:max-w-sm lg:max-w-2xl">
              <h1
                className="text-[48px] leading-[0.95] font-bold tracking-tight text-[#111827]
        sm:text-[65px] md:text-[54px]
        lg:text-[78px] w-[130%]"
              >
                The bank <br className="lg:hidden block" />
                account
                <br />
                for modern
                <br />
                professionals
              </h1>

              <p className="mt-6 md:mt-10 max-w-xl text-[18px] leading-[1.49] text-[#232323]">
                Open a free foreign bank account to receive
                <br className="hidden md:block " />
                payments globally. No minimum deposits required.
              </p>

              <button className="mt-12 rounded-xl bg-[#1154DA] px-8 py-5 text-lg font-semibold text-white transition hover:bg-[#0f49be]">
                Get yours now
              </button>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-end mt-8 lg:mt-0 ">
              <img
                src="/Handnew.avif"
                alt="Handnew"
                className="w-[240px] sm:w-[280px] md:w-[260px] lg:w-[250px] lg:-mt-8"
              />
            </div>
          </div>
        </div>

        {/* Bottom curved shape */}
        <div className="absolute bottom-0 right-0 h-44 w-[45%] rounded-tl-[120px] bg-white"></div>
      </section>

      {/* <section className="relative grid-bg -mt-14 lg:-mt-18 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-9 ">
         
          <div className="relative lg:hidden pt-28 pb-0 min-h-[90vh] flex flex-col">
            
            <div className="relative z-10 max-w-[65%] sm:max-w-[60%]">
              <h1 className="text-[46px] sm:text-[48px] font-bold leading-[1.05] tracking-tight mb-5 text-black">
                The bank account for contemporary professionals
              </h1>
              <p className="text-gray-600 text-[18px] sm:text-[16px] font-medium leading-relaxed mb-8">
                Start accepting payments from all over the world with a free
                international bank account.
              </p>
              <button className="flex items-center gap-3 rounded-2xl bg-[#1154da] px-6 py-3.5 text-[15px] font-semibold text-white shadow-lg transition hover:bg-[#023bac] active:scale-95">
                Obtain yours now
              </button>
            </div>

          
            <div className="absolute right-[-24px] top-20 bottom-0 w-[55%] sm:w-[48%] flex items-end">
              <img
                src="/Handnew.avif"
                alt="DuraPay App"
                className="w-full h-auto object-contain object-bottom"
              />
            </div>
          </div>

         
          <div className="hidden lg:flex gap-2 items-center justify-between py-28">
            <div className="slide-up lg:pt-10">
              <h1 className="text-[80px] font-bold leading-[1.05] tracking-tight mb-6 text-black">
                The bank account <br />
                for contemporary <br />
                professionals
              </h1>
              <p className="text-gray-700 text-[18px] font-medium leading-relaxed max-w-xl mb-8">
                Start accepting payments from all over the world with a free
                international bank account.
              </p>
              <button className="flex items-center gap-3 rounded-2xl bg-[#1154da] px-6 py-3.5 text-[14px] font-semibold text-white shadow-lg transition hover:bg-[#023bac] active:scale-95">
                Obtain yours now
              </button>
            </div>

            <div>
              <img
                src="/Handnew.avif"
                alt="DuraPay App"
                className="w-70 lg:mt-14"
              />
            </div>
          </div>
        </div>
      </section> */}
      {/* Next */}
      <section className=" mx-auto px-5 md:px-10 lg:px-8 py-20 lg:py-18">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between md:gap-0">
          <div className="w-14 h-14 md:w-18 md:h-18 lg:w-18 lg:h-18 rounded-lg bg-black flex items-center justify-center xs:mb-10">
            <Wallet className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-black/90 text-[26px] md:text-[50px] lg:text-[70px] font-bold leading-[1.10] tracking-tight">
            Get paid <br />
            like a local
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 mt-10 lg:mt-5">
          <img
            src="/Screenshot1.png"
            alt=""
            className="w-150 md:w-180 lg:w-95"
          />
          <img
            src="/Screenshot2.png"
            alt=""
            className="w-120 md:w-180 lg:w-95"
          />
          <img
            src="/Screenshot3.png"
            alt=""
            className="w-120 md:w-180 lg:w-95"
          />
        </div>
      </section>
      <section className="relative overflow-hidden bg-[#040B18] py-20 md:py-28 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between xs:text-center mb-10 lg:mb-10">
          <div className="w-18 h-18 rounded-lg bg-white flex items-center justify-center mb-6">
            <Wallet className="w-10 h-10 text-black" />
          </div>
          <h1 className="text-white text-[42px] lg:text-[70px] text-center font-bold leading-tight tracking-tight">
            Everything that comes <br />
            with Durapay's overseas <br /> bank accounts
          </h1>
        </div>

        {/* Background Glow */}
        <div className="absolute left-0 top-0 h-full w-full">
          <div className="absolute -left-32 top-20 h-[500px] w-[500px] rounded-full bg-violet-900/10 blur-[120px]" />
          <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-blue-900/10 blur-[100px]" />
        </div>

        {/* Decorative Shapes */}
        <div className="absolute left-0 top-20 hidden lg:block">
          <div className="h-[420px] w-[220px] border border-slate-800 rounded-r-[120px]" />
        </div>

        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Connector Lines */}
          <div className="absolute left-[18%] top-[15%] hidden xl:block h-[350px] w-[2px] bg-slate-800" />
          <div className="absolute left-[18%] top-[42%] hidden xl:block h-[2px] w-[120px] bg-slate-800" />

          <div
            className="
            grid
            gap-6
            sm:grid-cols-2
            lg:grid-cols-3
          "
          >
            {Feature.map((feature) => (
              <FeatureCard key={feature.title} title={feature.title} />
            ))}
          </div>
        </div>

        {/* Image Below */}
        <div className=" mt-16 flex justify-center">
          <img
            src="/black-hand-holding-card.avif"
            alt=""
            className="lg:w-190 w-50 md:w-70      
          object-cover"
          />
        </div>

        <div>
          <h1 className="font-bold text-white xs:text-center text-center leading-[1.15] text-[40px] lg:text-[70px]">
            Ready to experience <br /> borderless banking <br />
            with Durapay?
          </h1>
          {/* FINAL CTA */}
          <div className="flex items-center justify-center mt-10">
            <button className=" gap-3 rounded-2xl bg-[#1154da] px-6 py-3.5 sm:text-lg lg:text-[14px] font-semibold text-white shadow-lg transition hover:bg-[#023bac] active:scale-95">
              Get started for free
            </button>
          </div>
        </div>
      </section>
      {/* Next Phase */}
      <section className="max-w-7xl mx-auto py-20 lg:py-32 bg-white">
        <div className="px-6 lg:px-12">
          {/* Section heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-12 max-w-xl">
            Receive payments safely with our account security measures
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* LEFT */}
            <div className="space-y-6">
              {featur.map((feature, index) => {
                const Icon = feature.icon;
                const isActive = active === index;

                return (
                  <button
                    key={index}
                    onClick={() => setActive(isActive ? -1 : index)}
                    className={`w-full text-left rounded-3xl transition-all duration-300 ${
                      isActive
                        ? "bg-gray-100 p-8 border-b-4 border-blue-600"
                        : "p-6"
                    }`}
                  >
                    <div className="flex gap-4">
                      <Icon size={28} className="text-gray-900 shrink-0 mt-1" />
                      <div>
                        <h3 className="text-2xl text-black font-bold mb-3">
                          {feature.title}
                        </h3>
                        {isActive && (
                          <>
                            <p className="text-gray-600 leading-relaxed text-lg">
                              {feature.description}
                            </p>
                            {/* Image shown inline on mobile/tablet only */}
                            <div className="mt-6 lg:hidden rounded-2xl overflow-hidden bg-black aspect-[4/5]">
                              <img
                                src={feature.image}
                                alt={feature.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* RIGHT VISUAL — desktop only */}
            <div className="hidden lg:block sticky top-24 -mt-55 lg:-mt-47">
              <div className="rounded-3xl overflow-hidden bg-black h-[500px] xl:h-[590px] flex items-center justify-center">
                {active >= 0 && (
                  <img
                    key={active}
                    src={featur[active].image}
                    alt={featur[active].title}
                    className="w-full h-full object-contain transition-opacity duration-300"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DOWNLOAD ───────────────────────────────────────────────────────── */}
      <section id="download" className="py-24 px-6 relative overflow-hidden">
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
          <div className="mt-12 bg-white/[0.03] border border-blue/[0.08] rounded-2xl p-6 max-w-lg mx-auto">
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
                  className="bg-[#1154da] hover:bg-[#023bac] transition-colors text-white font-bold px-2 py-2.5 rounded-xl text-[12px] shrink-0"
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
    </div>
  );
}
