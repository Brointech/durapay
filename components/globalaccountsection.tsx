"use client";

import { Wallet } from "lucide-react";
import { useState } from "react";
import {
  FiArrowRight,
  FiCheck,
  FiCopy,
  FiHome,
  FiBriefcase,
  FiSend,
  FiRepeat,
  FiCreditCard,
  FiZap,
} from "react-icons/fi";

const accountDetails = [
  { label: "Account Holder", value: "Ifeoma Johnson" },
  { label: "Account Number", value: "8847 3920 1156" },
  { label: "ID Number", value: "**** **** 6016 1331" },
  { label: "NIN", value: "****-***-136" },
];

const perks = [
  "Transfers: Send money instantly to any bank",
  "Receive funds: Get paid easily with dedicated account details",
  "VTU & Bills: Buy airtime, data, and pay bills instantly",
  "Virtual USD Cards: Pay internationally without stress",
  "Physical Cards: Spend online and offline seamlessy",
];

const navItems = [
  { label: "Home", icon: FiHome, active: true },
  { label: "Accounts", icon: FiBriefcase, active: false },
  { label: "Payments", icon: FiSend, active: false },
  { label: "Transactions", icon: FiRepeat, active: false },
  { label: "Cards", icon: FiCreditCard, active: false },
];

const GlobalAccountSection = () => {
  const [copied, setCopied] = useState<number | null>(null);

  const handleCopy = (value: string, index: number) => {
    navigator.clipboard.writeText(value).catch(() => {});
    setCopied(index);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <section className="w-full px-6 py-16 bg-white">
      <div className="mx-auto max-w-6xl rounded-2xl bg-[#dce8fd] px-10 py-14 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div>
          <p className="text-xs lg:text-lg font-bold tracking-widest text-[#1154da] uppercase mb-4">
            Easy Account Opening
          </p>
          <h2 className="text-[38px] sm:text-[40px] font-extrabold text-[#0a1a3a] leading-[1.12] mb-5">
            Dowload Durapay,
            <br />
            Enjoy welcome bonuses!
          </h2>
          <p className="text-[15px] font-semibold text-[#3a4e6e] leading-relaxed mb-7 max-w-md">
            Everything you need exists in one app. Get a verified bank account
            instantly. Send money, Receive money — no middlemen, no delays, no
            hidden fees.
          </p>

          <div className="flex flex-col gap-3 mb-8">
            {perks.map((perk, i) => (
              <div
                key={i}
                className="flex items-center gap-3 text-sm font-semibold text-[#1a2e4a]"
              >
                <div className="w-5 h-5 rounded-full bg-[#1154da] flex font-semibold items-center justify-center flex-shrink-0">
                  <FiCheck className="text-white w-3 h-3" strokeWidth={3} />
                </div>
                {perk}
              </div>
            ))}
          </div>

          <button className="inline-flex items-center gap-2 bg-[#1154da] text-white font-bold text-[15px] px-7 py-3.5 rounded-xl hover:bg-[#023bac] transition-colors">
            Open your account <FiArrowRight />
          </button>
        </div>

        {/* RIGHT — UI mockup */}
        <div className="relative flex justify-center items-end min-h-[380px]">
          {/* Live badge */}
          <div className="absolute top-0 right-0 z-10 flex items-center gap-1.5 bg-[#e8f1fd] border border-[#b5d4f4] rounded-full px-3 py-1.5 text-[11px] font-bold text-[#0c447c]">
            <span className="w-2 h-2 rounded-full bg-[#1d9e75] animate-pulse" />
            Live account
          </div>

          {/* Phone mockup */}
          <div className="absolute left-0 bottom-0 w-[165px] bg-[#0a1a3a] rounded-[24px] p-2 z-[1]">
            <div className="bg-white rounded-[18px] overflow-hidden">
              <div className="bg-[#1154da] px-3 py-2.5 flex items-center gap-2">
                {/* <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center">
                  <img
                    src="/duralogo.png"
                    alt=""
                    className="w-10 object-contain"
                  />
                 
                </div> */}
                <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center">
                  <Wallet className="w-4 h-4 text-white" />
                </div>
                <span className="text-white text-xs lg:text-lg font-bold">
                  Durapay
                </span>
              </div>
              <div className="px-2 py-2 flex flex-col gap-0.5">
                {navItems.map(({ label, icon: Icon, active }) => (
                  <div
                    key={label}
                    className={`flex items-center gap-2 px-2 py-1.5 rounded-lg text-[11px] ${
                      active
                        ? "bg-[#e8f1fd] text-[#1154da] font-semibold"
                        : "text-[#3a4e6e]"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Account details card */}
          <div className="absolute right-0 top-8 w-[265px] bg-white rounded-2xl border border-[#c8d8f0] p-5 z-[2]">
            {/* Currency flags */}
            <div className="flex mb-4">
              {["NG", "US", "GP"].map((flag, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full border-2 border-white bg-[#f0f4ff] flex items-center justify-center text-lg"
                  style={{ marginLeft: i === 0 ? 0 : -8 }}
                >
                  {flag}
                </div>
              ))}
            </div>

            {accountDetails.map(({ label, value }, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-2.5 border-b border-[#e8f0fb] last:border-none"
              >
                <div>
                  <p className="text-[11px] text-[#7a90b0] mb-0.5">{label}</p>
                  <p className="text-[13px] font-semibold text-[#0a1a3a]">
                    {value}
                  </p>
                </div>
                <button
                  onClick={() => handleCopy(value, i)}
                  className="w-7 h-7 rounded-md bg-[#e8f1fd] flex items-center justify-center hover:bg-[#d0e4fb] transition-colors"
                  aria-label={`Copy ${label}`}
                >
                  {copied === i ? (
                    <FiCheck
                      className="w-3.5 h-3.5 text-[#1d9e75]"
                      strokeWidth={3}
                    />
                  ) : (
                    <FiCopy className="w-3.5 h-3.5 text-[#1154da]" />
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalAccountSection;
