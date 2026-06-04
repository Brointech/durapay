"use client";

import { useState } from "react";

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

// ─── Mock Phone Mockup ────────────────────────────────────────────────────────

const PhoneMockup = () => (
  <div className="relative mx-auto w-[220px] sm:w-[260px]">
    {/* Glow */}
    <div className="absolute inset-0 rounded-[2.5rem]  blur-3xl scale-110" />
    {/* Phone shell */}
    <div className="relative bg-[#023bac] rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden">
      {/* Notch */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#023bac] rounded-full z-10" />
      {/* Screen */}
      <div className="bg-white min-h-[460px] sm:min-h-[520px] p-6 pt-10 flex flex-col gap-3">
        {/* Header */}
        <div className="flex items-center justify-between mt-4 mb-2">
          <div>
            <p className="text-[#023bac] font-semibold text-[10px] tracking-wide uppercase">
              Send Money
            </p>
            <p className="text-zinc-800 text-sm font-semibold">
              Quick Transfer
            </p>
          </div>
          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
            <ZapIcon className="w-4 h-4 text-blue-400" />
          </div>
        </div>

        {/* Amount */}
        <div className="bg-white/5 rounded-2xl p-4 border border-white/[0.06]">
          <p className="text-black font-semibold text-[10px] uppercase tracking-widest mb-1">
            Amount
          </p>
          <div className="flex items-baseline gap-1">
            <span className="text-[#1154da] text-lg font-medium">₦</span>
            <span className="text-[#1154da] text-3xl font-bold tracking-tight">
              50,000
            </span>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-1.5">
            {["₦5k", "₦10k", "₦20k"].map((a) => (
              <button
                key={a}
                className="bg-white/[0.06] rounded-lg py-1 text-[10px] text-[#1154da] font-medium hover:bg-[#a0ccf0] transition-colors"
              >
                {a}
              </button>
            ))}
          </div>
        </div>

        {/* Recipient */}
        <div className="bg-white/5 rounded-2xl p-3 border border-white/[0.06] flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white text-sm font-bold shrink-0">
            AK
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-black text-xs font-medium truncate">
              Amaka Kelechi
            </p>
            <p className="text-black text-[10px]">Durapay · 0123456789</p>
          </div>
          <CheckIcon className="w-4 h-4 text-[#1154da] shrink-0" />
        </div>

        {/* Status bar */}
        <div className="bg-gray-300 border  rounded-xl px-3 py-2 flex items-center gap-2">
          <ZapIcon className="w-3.5 h-3.5 text-[#407af0] shrink-0" />
          <p className="text-[#023bac] text-[10px] font-medium">
            Instant · Arrives in ~5 seconds
          </p>
        </div>

        {/* Send button */}
        <button className="mt-auto bg-blue-600 hover:bg-blue-800 transition-colors text-white font-bold rounded-2xl py-3 text-sm tracking-wide">
          Send Money →
        </button>

        {/* Recent */}
        <p className="text-black font-semibold text-[9px] text-center uppercase tracking-widest">
          Recent · Today
        </p>
        {[
          { name: "Femi O.", amount: "₦12,000", bank: "Access" },
          { name: "Ngozi A.", amount: "₦5,500", bank: "UBA" },
        ].map((tx) => (
          <div key={tx.name} className="flex items-center justify-between py-1">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-zinc-900" />
              <div>
                <p className="text-white text-[10px] font-medium -mt-3">
                  {tx.name}
                </p>
                <p className="text-zinc-600 text-[9px]">{tx.bank}</p>
              </div>
            </div>
            <p className="text-[#023bac] text-[10px] font-semibold">
              {tx.amount}
            </p>
          </div>
        ))}
      </div>
    </div>
    {/* Home indicator */}
    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-16 h-1 bg-white/20 rounded-full" />
  </div>
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

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function TransferPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-white font-sans antialiased overflow-x-hidden">
      // ── HERO ─────────────────────────────────────────────────────────────
      <section className="relative overflow-hidden grid-bg -mt-16">
        {/* Radial glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px]" />
        </div>

        {/* Same container as navbar */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Copy */}
            <div className="slide-up">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-[#1154da] rounded-full px-4 py-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#1154da] animate-pulse" />
                <span className="text-[#1154da] text-sm font-medium">
                  Nigeria's fastest money app
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
                <span className="text-[#1154da]">Send Money</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-400">
                  Instantly.
                </span>
                <br />
                <span className="text-[#1154da]">Anywhere.</span>
              </h1>

              <p className="text-gray-700 lg:text-[18px] font-medium md:text-xl leading-relaxed max-w-xl mb-8">
                Transfer funds to any Nigerian bank in seconds. <br />
                No stress, no hidden charges — just fast, secure <br />
                money movement from your pocket.
              </p>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#download"
                  className="group flex items-center justify-center gap-2 bg-[#1154da] hover:bg-[#023bac] transition-colors text-white font-semibold px-8 py-4 rounded-2xl"
                >
                  <AppleIcon className="w-5 h-5" />
                  App Store
                  <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#download"
                  className="group flex items-center justify-center gap-2 bg-[#1154da] hover:bg-[#023bac] transition-colors text-white font-semibold px-8 py-4 rounded-2xl"
                >
                  <PlayStoreIcon className="w-5 h-5" />
                  Google Play
                </a>
              </div>

              {/* Trust badges */}
              <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-gray-700">
                <span className="flex items-center gap-2">
                  <ShieldCheckIcon className="w-4 h-4 text-blue-500" />
                  CBN Licensed
                </span>

                <span className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-blue-500" />
                  NDIC Insured
                </span>
              </div>
            </div>

            {/* Phone Mockup */}
            <div className="flex justify-center lg:justify-end">
              <PhoneMockup />
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
