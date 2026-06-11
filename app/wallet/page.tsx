// "use client";

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
} from "lucide-react";

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

  return (
    <section className="relative py-20 lg:py-32 bg-white overflow-hidden">
      {/* Background Blur */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#00B86B]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#00B86B]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 text-[#00B86B] text-sm font-semibold mb-6">
            Your Money, Your Control
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-6">
            A wallet built for
            <span className="text-[#00B86B]"> everyday life</span>
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

                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  Fund your wallet, transfer money, save for goals, create
                  virtual cards, pay bills, buy gift cards, and earn rewards —
                  all from one powerful financial app.
                </p>

                <button className="bg-[#00B86B] hover:bg-[#009e5a] text-white px-8 py-4 rounded-xl font-semibold transition">
                  Open a Wallet
                </button>
              </div>

              {/* Right Wallet Preview */}
              <div className="flex justify-center">
                <div className="bg-white rounded-3xl p-6 w-full max-w-md shadow-2xl">
                  <div className="flex justify-between items-center mb-8">
                    <div>
                      <p className="text-sm text-gray-500">Total Balance</p>
                      <h4 className="text-3xl font-bold text-black">
                        ₦2,450,000
                      </h4>
                    </div>

                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <Wallet className="text-[#00B86B]" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-2xl p-4 flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-500">NGN Wallet</p>
                        <p className="font-semibold text-black">₦1,850,000</p>
                      </div>

                      <span className="text-green-600 font-medium">Active</span>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-4 flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-500">USD Wallet</p>
                        <p className="font-semibold text-black">$385.50</p>
                      </div>

                      <span className="text-green-600 font-medium">Active</span>
                    </div>

                    <div className="bg-green-50 rounded-2xl p-4">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">
                          Cashback Earned
                        </span>
                        <span className="font-bold text-[#00B86B]">
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
                <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center mb-6">
                  <Icon size={28} className="text-[#00B86B]" />
                </div>

                <h3 className="text-xl font-bold text-black mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
