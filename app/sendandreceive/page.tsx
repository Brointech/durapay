"use client";

import { BadgeCheck, Bell, Shield, SparkleIcon, Wallet } from "lucide-react";
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
      <svg
        className="absolute bottom-0 right-0 w-[65%] md:w-[55%] lg:w-[50%] h-auto"
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
      </svg>
      {/* ── Top-right soft accent circle ── */}
      {/* <div
        className="absolute -top-24 -right-24 w-[340px] h-[340px] md:w-[420px] md:h-[420px] rounded-full opacity-30"
        style={{ background: "#c7d7ff" }}
        aria-hidden="true"
      /> */}
      // ── HERO ─────────────────────────────────────────────────────────────
      <section className="relative grid-bg -mt-16">
        {/* Same container as navbar */}
        <div className="relative max-w-7xl mx-auto px-4 lg:px-9 py-20 lg:py-28">
          <div className="flex gap-2 lg:gap-2 items-center justify-between">
            {/* Copy */}
            <div className="slide-up  lg:pt-10">
              <h1 className="xs:text-center lg:text-base text-[28px] md:text-6xl lg:text-[80px] font-bold leading-[1.05] tracking-tight mb-6">
                <span className="text-black">The bank account</span> <br />
                <span className="text-black">for contemporary</span> <br />
                <span className="text-black"> professionals</span>
              </h1>
              <p className="xs:text-center text-gray-700 text-[14px] lg:text-[18px] font-medium md:text-xl leading-relaxed max-w-xl mb-8">
                Start accepting payments from all over the <br />
                world with a free international bank account.
              </p>

              {/* CTA */}
              <button className="flex items-center gap-3 rounded-2xl bg-[#1154da] px-6 py-3.5 sm:text-lg lg:text-[14px] font-semibold text-white shadow-lg transition hover:bg-[#023bac] active:scale-95">
                Obtain yours now
              </button>
            </div>
            {/* Right side */}
            <div className="">
              <img
                src="/Handnew.avif"
                alt=""
                className="w-40 lg:w-70 lg:mt-14 "
              />
            </div>
          </div>
        </div>
      </section>
      {/* Next */}
      <section className=" mx-auto px-6 lg:px-10 py-20 lg:py-18">
        <div className="flex items-baseline justify-between xs:text-center">
          <h1 className="text-black text-[42px] lg:text-[80px] font-bold leading-[1.00] tracking-tight">
            Earn as much <br />
            as a local
          </h1>
          <div className="w-18 h-18 rounded-lg bg-black flex items-center justify-center xs:mb-10 lg:mb-10">
            <Wallet className="w-10 h-10 text-white" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 mt-10 lg:mt-5">
          <img src="/Screenshot1.png" alt="" className="w-110 lg:w-95" />
          <img src="/Screenshot2.png" alt="" className="w-110 lg:w-95" />
          <img src="/Screenshot3.png" alt="" className="w-110 lg:w-95" />
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
    </div>
  );
}
