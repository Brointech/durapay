"use client";

// const Wallet = () => {
//   return (
//     <main className="bg-white pt-24">
//       {/* Hero Section */}
//       <section className="px-6 md:px-10 lg:px-12 py-16 -mt-13">
//         <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
//           <div>
//             <span className="inline-block bg-blue-100 text-[#1154da] px-4 py-2 rounded-full text-sm font-semibold">
//               Wallet
//             </span>
//             <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-[#00246C] leading-tight">
//               One Wallet.
//               <br />
//               Unlimited Possibilities.
//             </h1>

//             <p className="mt-6 text-lg text-gray-600 max-w-xl">
//               Receive, send, store, and manage your money globally with a secure
//               wallet designed for modern professionals and businesses.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 mt-8">
//               <button className="bg-[#1154da] text-white px-8 py-4 rounded-2xl font-semibold hover:bg-[#023bac] transition">
//                 Get Started
//               </button>

//               <button className="border-2 border-[#1154da] text-[#1154da] px-8 py-4 rounded-2xl font-semibold hover:bg-blue-50 transition">
//                 Learn More
//               </button>
//             </div>
//           </div>

//           {/* Wallet Card */}
//           <div className="flex justify-center">
//             <div className="bg-gradient-to-br from-[#1154da] to-[#00246C] rounded-3xl p-8 text-white w-full max-w-md shadow-2xl">
//               <p className="text-sm opacity-80">Available Balance</p>

//               <h2 className="text-4xl font-bold mt-3">N42,580.45</h2>

//               <div className="flex justify-between mt-10">
//                 <div>
//                   <p className="text-sm opacity-80">USD</p>
//                   <p className="font-semibold">$8,240</p>
//                 </div>

//                 <div>
//                   <p className="text-sm opacity-80">GBP</p>
//                   <p className="font-semibold">£2,100</p>
//                 </div>

//                 <div>
//                   <p className="text-sm opacity-80">EUR</p>
//                   <p className="font-semibold">€1,950</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features */}
//       <section className="bg-[#f8fafc] py-20 px-6 md:px-10 lg:px-20">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-center text-3xl md:text-4xl font-bold text-[#00246C]">
//             Everything You Need In One Wallet
//           </h2>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
//             {[
//               {
//                 title: "Receive Money",
//                 desc: "Get paid globally with local and foreign accounts.",
//               },
//               {
//                 title: "Send Transfers",
//                 desc: "Move money instantly across countries.",
//               },
//               {
//                 title: "Currency Exchange",
//                 desc: "Convert currencies at competitive rates.",
//               },
//               {
//                 title: "Secure Storage",
//                 desc: "Keep funds protected with advanced security.",
//               },
//             ].map((item) => (
//               <div
//                 key={item.title}
//                 className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-lg transition"
//               >
//                 <h3 className="text-xl font-semibold text-[#00246C]">
//                   {item.title}
//                 </h3>

//                 <p className="mt-3 text-gray-600">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Multi Currency */}
//       <section className="py-20 px-6 md:px-10 lg:px-20">
//         <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
//           <div>
//             <h2 className="text-3xl md:text-5xl font-bold text-[#00246C]">
//               Hold Multiple Currencies
//             </h2>

//             <p className="mt-6 text-gray-600 text-lg">
//               Keep and manage USD, GBP, EUR, NGN and more in one wallet. Convert
//               between currencies instantly whenever you need.
//             </p>

//             <ul className="mt-8 space-y-4">
//               <li>✓ Real-time exchange rates</li>
//               <li>✓ Instant currency conversion</li>
//               <li>✓ Global account access</li>
//               <li>✓ No hidden fees</li>
//             </ul>
//           </div>

//           <div className="bg-[#f8fafc] rounded-3xl p-8">
//             <div className="space-y-4">
//               {[
//                 "🇺🇸 USD Wallet",
//                 "🇬🇧 GBP Wallet",
//                 "🇪🇺 EUR Wallet",
//                 "🇳🇬 NGN Wallet",
//               ].map((currency) => (
//                 <div
//                   key={currency}
//                   className="bg-white rounded-2xl p-5 flex justify-between items-center shadow-sm"
//                 >
//                   <span>{currency}</span>
//                   <span className="font-semibold">Active</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Security */}
//       <section className="bg-[#00246C] text-white py-20 px-6 md:px-10 lg:px-20">
//         <div className="max-w-5xl mx-auto text-center">
//           <h2 className="text-3xl md:text-5xl font-bold">
//             Security You Can Trust
//           </h2>

//           <p className="mt-6 text-lg text-blue-100">
//             Your funds and personal data are protected with industry-leading
//             security standards and fraud monitoring systems.
//           </p>

//           <div className="grid sm:grid-cols-3 gap-6 mt-12">
//             <div>
//               <h3 className="text-2xl font-bold">256-bit</h3>
//               <p>Encryption</p>
//             </div>

//             <div>
//               <h3 className="text-2xl font-bold">24/7</h3>
//               <p>Fraud Monitoring</p>
//             </div>

//             <div>
//               <h3 className="text-2xl font-bold">100%</h3>
//               <p>Secure Access</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-20 px-6 md:px-10 lg:px-20">
//         <div className="max-w-5xl mx-auto bg-[#1154da] rounded-[32px] p-10 md:p-16 text-center text-white">
//           <h2 className="text-3xl md:text-5xl font-bold">
//             Open Your Wallet Today
//           </h2>

//           <p className="mt-5 text-lg text-blue-100">
//             Join thousands of users sending, receiving, and managing money
//             globally with Durapay.
//           </p>

//           <button className="mt-8 bg-white text-[#1154da] px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition">
//             Create Free Account
//           </button>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Wallet;

import {
  Wallet,
  ArrowUpRight,
  ArrowDownLeft,
  CreditCard,
  PiggyBank,
  Gift,
  ShieldCheck,
  CheckIcon,
} from "lucide-react";
import { useState } from "react";

export default function WalletSection() {
  const features = [
    {
      icon: Wallet,
      title: "Manage Multiple Wallets",
      description:
        "Hold and manage NGN and USD balances from one place. Track spending, savings, and incoming funds effortlessly.",
    },
    {
      icon: ArrowUpRight,
      title: "Instant Transfers",
      description:
        "Send money to banks, Durapay users, and loved ones instantly with secure and reliable transfers.",
    },
    {
      icon: ArrowDownLeft,
      title: "Receive Funds Easily",
      description:
        "Receive payments directly into your wallet and access your money whenever you need it.",
    },
    {
      icon: CreditCard,
      title: "Virtual & Physical Cards",
      description:
        "Create USD virtual cards for online payments and use your Durapay physical card for everyday purchases.",
    },
    {
      icon: PiggyBank,
      title: "Save With Purpose",
      description:
        "Set savings goals, automate contributions, and watch your money grow over time.",
    },
    {
      icon: Gift,
      title: "Rewards & Cashback",
      description:
        "Earn cashback and rewards on eligible transactions and enjoy more value from every spend.",
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

  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [active, setActive] = useState(0);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="relative py-20 lg:py-32 bg-white overflow-hidden">
      {/* Background Blur */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#1154da]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#1154da]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-[#1154da] text-sm lg:text-[16px] font-bold mb-6">
            Your Money, Your Control
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-6">
            A wallet built for
            <span className="text-blue-800"> everyday life</span>
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Whether you're sending money, paying bills, buying airtime, managing
            savings, or spending globally with virtual cards, Durapay gives you
            everything you need in one secure wallet.
          </p>
        </div>

        {/* Hero Wallet Card */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-[#0B1220] to-[#111827] rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-12 items-center p-8 md:p-12 lg:p-16">
              {/* Left */}
              <div>
                <span className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm mb-6">
                  <ShieldCheck size={16} />
                  Secure Financial Management
                </span>

                <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
                  Everything you need to manage your money.
                </h3>

                <p className="text-gray-100 text-lg leading-relaxed mb-8">
                  Fund your wallet, transfer money, save for goals, create
                  virtual cards, pay bills, buy gift cards, and earn rewards —
                  all from one powerful financial app.
                </p>

                <button className="bg-[#1154da] hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold transition">
                  Open a Wallet
                </button>
              </div>

              {/* Right Wallet Preview */}
              <div className="flex justify-center">
                <div className="bg-white rounded-3xl p-6 w-full max-w-md shadow-2xl">
                  <div className="flex justify-between items-center mb-8">
                    <div>
                      <p className="text-sm text-gray-700">Total Balance</p>
                      <h4 className="text-3xl font-bold text-black">
                        ₦2,450,000
                      </h4>
                    </div>

                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Wallet className="text-[#1154da]" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-blue-50 rounded-2xl p-4 flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-700">NGN Wallet</p>
                        <p className="font-semibold text-black">₦1,850,000</p>
                      </div>

                      <span className="text-blue-600 font-medium">Active</span>
                    </div>

                    <div className="bg-blue-50 rounded-2xl p-4 flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-700">USD Wallet</p>
                        <p className="font-semibold text-black">$385.50</p>
                      </div>

                      <span className="text-blue-600 font-medium">Active</span>
                    </div>

                    <div className="bg-blue-50 rounded-2xl p-4">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-700">
                          Cashback Earned
                        </span>
                        <span className="font-bold text-[#1154da]">
                          ₦12,500
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                  <Icon size={28} className="text-[#1154da]" />
                </div>

                <h3 className="text-xl font-bold text-black mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Multi Currency */}
      <section className="px-6 md:px-10 lg:px-14">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center py-20 ">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#00246C]">
              Hold Multiple Currencies
            </h2>

            <p className="mt-6 text-gray-700 text-lg">
              Keep and manage USD, GBP, EUR, NGN and more in one wallet. Convert
              between currencies instantly whenever you need.
            </p>

            <ul className="mt-8 space-y-4">
              <li>✓ Real-time exchange rates</li>
              <li>✓ Instant currency conversion</li>
              <li>✓ Global account access</li>
              <li>✓ No hidden fees</li>
            </ul>
          </div>

          <div className="bg-[#f8fafc] rounded-3xl p-8">
            <div className="space-y-4">
              {[
                "🇺🇸 USD Wallet",
                "🇬🇧 GBP Wallet",
                "🇪🇺 EUR Wallet",
                "🇳🇬 NGN Wallet",
              ].map((currency) => (
                <div
                  key={currency}
                  className="bg-white rounded-2xl p-5 flex justify-between items-center shadow-sm"
                >
                  <span>{currency}</span>
                  <span className="font-semibold">Active</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="bg-[#00246C] text-white py-20 px-6 md:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold">
            Security You Can Trust
          </h2>

          <p className="mt-6 text-lg text-blue-100">
            Your funds and personal data are protected with industry-leading
            security standards and fraud monitoring systems.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            <div>
              <h3 className="text-2xl font-bold">256-bit</h3>
              <p>Encryption</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">24/7</h3>
              <p>Fraud Monitoring</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">100%</h3>
              <p>Secure Access</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto bg-[#1154da] rounded-[32px] p-10 md:p-16 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold">
            Open Your Wallet Today
          </h2>

          <p className="mt-5 text-lg text-blue-100">
            Join thousands of users sending, receiving, and managing money
            globally with Durapay.
          </p>

          <button className="mt-8 bg-white text-[#1154da] px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition">
            Create Free Account
          </button>
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
    </section>
  );
}
