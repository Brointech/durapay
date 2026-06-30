import { Wallet } from "lucide-react";
import React from "react";

/* ---------- Inline icons (no external icon package required) ---------- */

function ShieldIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d="M12 2.5l8 3.5v5.2c0 5.1-3.4 8.9-8 10.3-4.6-1.4-8-5.2-8-10.3V6l8-3.5z" />
      <path d="M9 12.5l2 2 4-4.5" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <rect x="4.5" y="10.5" width="15" height="10" rx="2" />
      <path d="M7.5 10.5V7a4.5 4.5 0 0 1 9 0v3.5" />
    </svg>
  );
}

function BadgeCheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d="M12 2.75l2.3 1.3 2.6-.1 1.3 2.3 2.3 1.3-.1 2.6 1.3 2.3-1.3 2.3.1 2.6-2.3 1.3-1.3 2.3-2.6-.1-2.3 1.3-2.3-1.3-2.6.1-1.3-2.3-2.3-1.3.1-2.6-1.3-2.3 1.3-2.3-.1-2.6 2.3-1.3 1.3-2.3 2.6.1z" />
      <path d="M8.8 12.2l2.1 2.1 4.3-4.6" />
    </svg>
  );
}

/* ---------- Content (replace bracketed placeholders with real details) ---------- */

const trustItems = [
  {
    icon: <ShieldIcon />,
    title: "Licensed & Regulated",
    description: "DuraPay is licensed by the Central Bank of Nigeria (CBN)",
  },
  {
    icon: <LockIcon />,
    title: "Your Funds Are Protected",
    description:
      "Customer funds are held in segregated accounts with licenced banking partners",
  },
  {
    icon: <BadgeCheckIcon />,
    title: "Compliance & Security",
    description:
      "We comply with AML/CFT regulations and maintain PCI-DSS Level 1 certification for all card and payment data.",
  },
];

/* ---------- The component to copy into your footer ---------- */

export function FooterRegulatoryTrust() {
  return (
    <div className="bg-black border-t border-white/10 pt-8 pb-6 sm:pt-10">
      {/* Trust pillars: 1 col on mobile, 3 cols from md up */}
      {/* <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8 px-6 md:px-10">
        {trustItems.map((item, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1154da] text-white">
              {item.icon}
            </span>
            <div>
              <p className="text-sm font-semibold text-white">{item.title}</p>
              <p className="mt-1 text-[13px] leading-relaxed text-slate-100 sm:text-sm">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div> */}

      <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10 px-4 sm:px-6 lg:px-10 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-slate-300 flex items-center justify-center shrink-0">
            <Wallet className="w-5 h-5 text-black" />
          </div>
          <span className="font-bold lg:text-[20px] text-lg text-slate-100">
            Durapay
          </span>
        </div>

        {/* Legal disclaimer */}
        <p className="text-[12px] sm:text-sm lg:text-[14px] text-slate-100 leading-relaxed max-w-3xl lg:max-w-none">
          DuraPay is a financial technology company and is not a bank. Banking
          services are provided by licenced banking partners. Deposits are
          insured up to the maximum amount allowed by law. Virtual card and FX
          services are provided in partnership with licenced patners. With its
          registered address at No. 100 off Salvation Ministries Rd, Rivers
          State © {new Date().getFullYear()} DuraPay. All rights reserved.
        </p>
      </div>
    </div>
  );
}
