"use client";

import { Download, Wallet } from "lucide-react";
import { useState } from "react";

import { Shield, Bell, BadgeCheck } from "lucide-react";
import { image, img } from "framer-motion/client";
import { FiArrowRight, FiGlobe } from "react-icons/fi";
// ─── Icon Components ──────────────────────────────────────────────────────────

const ArrowRightIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 12h14M12 5l7 7-7 7"
    />
  </svg>
);

const ShieldCheckIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
);

const ZapIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </svg>
);

const GlobeIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
  >
    <circle cx="12" cy="12" r="10" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"
    />
  </svg>
);

const SmartphoneIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
  >
    <rect x="5" y="2" width="14" height="20" rx="2" />
    <path strokeLinecap="round" d="M12 18h.01" />
  </svg>
);

const UsersIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
    />
    <circle cx="9" cy="7" r="4" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
    />
  </svg>
);

const CreditCardIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
  >
    <rect x="1" y="4" width="22" height="16" rx="2" />
    <path strokeLinecap="round" d="M1 10h22" />
  </svg>
);

const CheckIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

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

// ─── Data ─────────────────────────────────────────────────────────────────────

const features = [
  {
    icon: ZapIcon,
    color: "from-emerald-400 to-teal-400",
    bg: "bg-emerald-500/10",
    title: "Instant Transfers",
    desc: "Send money to any Nigerian bank in under 5 seconds — no delays, no excuses.",
  },
  {
    icon: ShieldCheckIcon,
    color: "from-sky-400 to-blue-400",
    bg: "bg-sky-500/10",
    title: "Bank-Grade Security",
    desc: "256-bit encryption, biometric auth, and real-time fraud detection keep your money safe.",
  },
  {
    icon: GlobeIcon,
    color: "from-violet-400 to-purple-400",
    bg: "bg-violet-500/10",
    title: "All Nigerian Banks",
    desc: "Send to GTBank, Access, UBA, Zenith, First Bank, Kuda, OPay, and 50+ more.",
  },
  {
    icon: CreditCardIcon,
    color: "from-amber-400 to-orange-400",
    bg: "bg-amber-500/10",
    title: "Zero Hidden Fees",
    desc: "See exactly what you pay before you confirm. No surprise charges. Ever.",
  },
  {
    icon: UsersIcon,
    color: "from-pink-400 to-rose-400",
    bg: "bg-pink-500/10",
    title: "Save Beneficiaries",
    desc: "Store your frequent recipients and send money with just two taps next time.",
  },
  {
    icon: SmartphoneIcon,
    color: "from-lime-400 to-green-400",
    bg: "bg-lime-500/10",
    title: "Works Offline",
    desc: "Queue transfers even without internet. They send the moment you reconnect.",
  },
];

const steps = [
  {
    num: "01",
    title: "Enter Amount",
    desc: "Type how much you want to send or tap a quick amount.",
  },
  {
    num: "02",
    title: "Choose Recipient",
    desc: "Search saved contacts or enter a new bank account number.",
  },
  {
    num: "03",
    title: "Confirm & Send",
    desc: "Review details, authenticate with face ID or PIN, and you're done.",
  },
];

const stats = [
  { value: "2M+", label: "Active Users" },
  { value: "₦500B+", label: "Transferred" },
  { value: "99.98%", label: "Uptime" },
  { value: "5 sec", label: "Avg. Transfer Time" },
];

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

const SparkleIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5 text-violet-500 shrink-0"
  >
    <path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4L12 2z" />
  </svg>
);

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
// ─── Main Page ────────────────────────────────────────────────────────────────

export default function TransferPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [active, setActive] = useState(0);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-white font-sans antialiased overflow-hidden">
      // ── HERO ─────────────────────────────────────────────────────────────
      <section className="relative overflow-hidden bg-[#f8f9ff] -mt-14 lg:-mt-8">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,#eef3ff_0%,transparent_45%),radial-gradient(circle_at_bottom_right,#dbe8ff_0%,transparent_35%)]"></div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-10 py-20 lg:py-18">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* LEFT CONTENT */}
            <div className="max-w-2xl ">
              <h1
                className="text-[52px] leading-[1.09] font-bold tracking-tight text-[#111827]
        sm:text-[65px]
        lg:text-[78px] w-[130%]"
              >
                Local and
                <br />
                international <br className="sm:hidden block" /> money
                <br />
                transfers
              </h1>

              <p className="mt-10 max-w-xl text-[18px] leading-[1.49] text-[#232323]">
                Redefine the way you send money across the globe.
                <br className="hidden lg:block" />
                Make instant, secure deposits into any bank account
                <br className="hidden lg:block" />
                at unrivaled rates.
              </p>

              <button className="mt-12 rounded-xl bg-[#1154DA] px-8 py-5 text-lg font-semibold text-white transition hover:bg-[#0f49be]">
                Make a transfer
              </button>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="/mapp.webp"
                alt="World Map"
                className="w-[280px] sm:w-[260px] lg:w-[250px] lg:-mt-8"
              />
            </div>
          </div>
        </div>

        {/* Bottom curved shape */}
        <div className="absolute bottom-0 right-0 h-44 w-[45%] rounded-tl-[120px] bg-white"></div>
      </section>
      {/* Next Phase*/}
      <section className="max-w-7xl mx-auto px-6 md:px-10 lg:px-10 py-20 lg:py-18">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between md:gap-0">
          <div className="w-16 h-16 md:w-18 md:h-18 lg:w-18 lg:h-18 rounded-lg bg-black flex items-center justify-center order-1 md:order-2 lg:mb-6 md:-mt-4">
            <Wallet className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-black/90 text-[30px] md:text-[40px] lg:text-[60px] font-bold leading-[1.10] tracking-tight order-2 md:order-1">
            Send money <br className="sm:hidden block" /> abroad the easy{" "}
            <br className="hidden:lg block" /> way
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-8 mt-10 lg:mt-10">
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
      </section>
      {/* Next phase */}
      <section className="bg-[#040B18] max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-18">
        <div>
          <h1 className="text-center lg:text-center text-white text-[42px] lg:text-[65px] font-bold leading-tight tracking-tight">
            <span> Why you should make </span> <br />
            <span> money transfers with </span> <br />
            <span> Durapay</span>
          </h1>
        </div>
      </section>
      {/* Next Phase */}
      <section className="relative overflow-hidden bg-[#040B18] py-20 md:py-28 px-4 sm:px-6 lg:px-8">
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
            {features.map((feature) => (
              <FeatureCard key={feature.title} title={feature.title} />
            ))}
          </div>
        </div>
        {/* Image Below */}
        <div className=" mt-16 flex justify-center">
          <img
            src="/blackhand.webp"
            alt=""
            className="lg:w-92 w-50 md:w-70      
          object-cover"
          />
        </div>

        <div>
          <h1 className="font-bold text-white xs:text-center text-center text-[40px] lg:text-[70px]">
            Make your first money <br />
            transfer with Durapay
          </h1>
          {/* FINAL CTA */}
          <div className="flex items-center justify-center mt-10">
            <button className=" gap-3 rounded-2xl bg-[#1154da] px-6 py-3.5 sm:text-lg lg:text-[14px] font-semibold text-white shadow-lg transition hover:bg-[#023bac] active:scale-95">
              Start now
            </button>
          </div>
        </div>
      </section>
      {/* Next Phase */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-12 max-w-xl">
            Receive payments safely with our account security measures
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* LEFT */}
            <div className="space-y-6">
              {featur.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <button
                    key={index}
                    onClick={() => setActive(index)}
                    className={`w-full text-left rounded-3xl transition-all duration-300 ${
                      active === index
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

                        {active === index && (
                          <p className="text-gray-600 leading-relaxed text-lg">
                            {feature.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* RIGHT VISUAL */}
            <div className="hidden lg:block sticky top-24 -mt-55 lg:-mt-47">
              <div className="rounded-3xl overflow-hidden bg-black h-[500px] xl:h-[590px] flex items-center justify-center">
                <img
                  key={active}
                  src={featur[active].image}
                  alt={featur[active].title}
                  className="w-full h-full object-contain transition-opacity duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* HOW IT WORKS */}
      <section
        id="how-it-works"
        className="py-24 max-w-6xl mx-auto px-4 sm:px-6"
      >
        <div className="text-center mb-14">
          <p className="text-[#1154da] text-sm lg:text-lg font-semibold uppercase tracking-widest mb-3">
            How it Works
          </p>
          <h2 className="text-3xl text-black sm:text-4xl font-bold">
            Three taps to transfer
          </h2>
          <p className="text-gray-800 mt-3 max-w-md mx-auto">
            We removed every unnecessary step. Sending money should feel this
            simple.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-10 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-gradient-to-r from-transparent via-black to-transparent" />

          {steps.map((s, i) => (
            <div
              key={s.num}
              className="bg-white shadow-sm border  rounded-2xl p-6 hover:border-black transition-colors group"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="relative w-12 h-12 rounded-2xl bg-blue-800 border border-blue-800 flex items-center justify-center mb-5 pulse-ring group-hover:bg-black transition-colors">
                <span className="text-gray-200 font-bold text-sm">{s.num}</span>
              </div>
              <h3 className="font-bold text-black text-lg mb-2">{s.title}</h3>
              <p className="text-zinc-900 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="#download"
            className="inline-flex items-center gap-2 text-[#1154da] font-semibold text-sm lg:text-lg transition-colors"
          >
            Download Durapay and try it now{" "}
            <ArrowRightIcon className="w-4 h-4" />
          </a>
        </div>
      </section>
      {/* FEATURES  */}
      <section
        id="features"
        className="py-24 bg-white/[0.02] border-y border-white/[0.06]"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[#1154da] text-sm lg:text-lg font-semibold uppercase tracking-widest mb-3">
              Features
            </p>
            <h2 className="text-3xl text-zinc-900 sm:text-4xl font-bold">
              Everything you need. Nothing you don't.
            </h2>
            <p className="text-zinc-900 mt-3 max-w-lg mx-auto">
              Built specifically for Nigerians who need fast, reliable transfers
              every single day.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white shadow-sm border border-white/[0.07] rounded-2xl p-6 hover:border-white/20 transition-all hover:-translate-y-0.5 group"
              >
                <div
                  className={`w-11 h-11 rounded-xl ${f.bg} flex items-center justify-center mb-4`}
                >
                  <f.icon
                    className={`w-5 h-5 bg-clip-text text-blue-600 bg-gradient-to-br ${f.color}`}
                  />
                </div>
                <h3 className="font-bold text-base text-black mb-2 group-hover:text-[#1154da] transition-colors">
                  {f.title}
                </h3>
                <p className="text-gray-800 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ── SECURITY ───────────────────────────────────────────────────────── */}
      <section id="security" className="py-24 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Illustration */}
          <div className="order-2 lg:order-1">
            <div className="bg-[#0d0d0d] border border-white/[0.07] rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center">
                  <ShieldCheckIcon className="w-5 h-5 text-sky-400" />
                </div>
                <div>
                  <p className="font-bold text-white text-sm">
                    Security Overview
                  </p>
                  <p className="text-zinc-500 text-xs">
                    All systems operational
                  </p>
                </div>
                <span className="ml-auto flex items-center gap-1.5 text-emerald-400 text-xs font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Live
                </span>
              </div>

              {[
                {
                  label: "Encryption",
                  val: "256-bit AES",
                  pct: 100,
                  color: "bg-emerald-500",
                },
                {
                  label: "Fraud Detection",
                  val: "AI-powered",
                  pct: 98,
                  color: "bg-sky-500",
                },
                {
                  label: "Uptime",
                  val: "99.98%",
                  pct: 99,
                  color: "bg-violet-500",
                },
                {
                  label: "2FA Coverage",
                  val: "100% of accounts",
                  pct: 100,
                  color: "bg-amber-500",
                },
              ].map((item) => (
                <div key={item.label} className="mb-5">
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-zinc-300 font-medium">
                      {item.label}
                    </span>
                    <span className="text-zinc-500 text-xs">{item.val}</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${item.color} rounded-full transition-all duration-1000`}
                      style={{ width: `${item.pct}%` }}
                    />
                  </div>
                </div>
              ))}

              <div className="mt-6 p-4 bg-emerald-500/5 border border-emerald-500/15 rounded-xl flex gap-3">
                <ShieldCheckIcon className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-zinc-300 text-xs leading-relaxed">
                  Your money and data are protected by the same security
                  standards used by top Nigerian commercial banks.
                </p>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="order-1 lg:order-2">
            <p className="text-[#007A55] text-sm lg:text-lg font-semibold uppercase tracking-widest mb-4">
              Security
            </p>
            <h2 className="text-3xl text-gray-900 sm:text-4xl font-bold leading-tight mb-5">
              Your money is
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-400">
                fortress-level
              </span>{" "}
              safe.
            </h2>
            <p className="text-black leading-relaxed mb-8">
              We're CBN-licensed and NDIC-insured. Every transaction is
              encrypted end-to-end and monitored by our AI fraud engine in real
              time.
            </p>

            <ul className="space-y-3">
              {[
                "Biometric login — face ID & fingerprint",
                "Real-time transaction alerts",
                "Instant card & account freeze",
                "24/7 fraud monitoring team",
                "Data never sold to third parties",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-black"
                >
                  <div className="w-5 h-5 rounded-full bg-[#023bac] flex items-center justify-center shrink-0">
                    <CheckIcon className="w-3 h-3 text-white" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#download"
              className="mt-8 inline-flex items-center gap-2 bg-[#023bac] hover:bg-[#1154da] transition-colors text-white font-bold px-6 py-3 rounded-xl text-sm"
            >
              Start transferring safely <ArrowRightIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
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
                  className="flex-1 bg-white/5 border border-blue/10 rounded-xl px-3 py-2.5 text-sm text-white placeholder-zinc-600 outline-none focus:border-[#023bac] transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#1154da] hover:bg-[#023bac] transition-colors text-white font-bold px-2 py-2.5 rounded-xl text-[12px]shrink-0"
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
      {/* ── FOOTER ─────────────────────────────────────────────────────────── */}
      {/* <footer className="border-t border-white/[0.06] py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-500 flex items-center justify-center">
              <ZapIcon className="w-3.5 h-3.5 text-black" />
            </div>
            <span
              className="font-bold"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Swiftpay
            </span>
          </div>
          <p className="text-zinc-600 text-xs">
            © 2025 Swiftpay Ltd · CBN Licensed · NDIC Insured · Lagos, Nigeria
          </p>
          <div className="flex gap-5 text-xs text-zinc-500">
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
