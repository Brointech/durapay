"use client";

import { useRouter } from "next/navigation";

import { motion } from "framer-motion";
// framer-motion may not be installed in some environments.
// Provide a lightweight fallback Motion wrapper so the component still renders.
// const motion: any = {
//   div: (props: any) => {
//     const { children, ...rest } = props;
//     return <div {...rest}>{children}</div>;
//   },
// };

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
import { link } from "fs";

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

  const router = useRouter();

  return (
    <section className="w-full px-6 md:px-10 lg:px-10  lg:py-16 bg-white">
      <div
        onClick={() => router.push("/sendandreceive")}
        className="cursor-pointer mx-auto max-w-7xl rounded-2xl bg-[#dce8fd] px-10 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12 justify-end transition-transform
    duration-400
    ease-in-out
    hover:-translate-y-2"
      >
        {/************************* LEFT CONTENT **************************/}
        <div className="max-w-xl">
          <div className="md:flex flex-col justify-between gap-5">
            <p className="mb-4 text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-[#1154da]">
              INTERNATIONAL ACCOUNTS
            </p>
            <h2 className="cursor-pointer text-[36px] sm:text-[42px] md:text-[48px] lg:text-[56px] font-bold text-[#0a1a3a] leading-[1.1] mb-5">
              <span> Create a global</span> <br className="lg:hidden block" />
              <span> multi-currency</span> <br />
              <span> account.</span>
            </h2>
            <p className="text-[19px] md:text-[17px] lg:text-[18px] font-semibold text-black leading-relaxed mb-7 max-w-md">
              Get a bank account instantly. You can access and receive your
              global payments <br className="hidden lg:block" />
              at any time.
            </p>
          </div>
          <button className="inline-flex items-center gap-3 text-[#1154da] font-semibold text-[18px] group w-fit">
            Get it right away
            <span className="w-8 h-8 rounded-full border-2 border-[#1154da] flex items-center justify-center group-hover:bg-[#1154da] transition-colors">
              <FiArrowRight className="w-4 h-4 group-hover:text-white transition-colors" />
            </span>
          </button>
        </div>
        {/* RIGHT — UI mockup  */}
        <div className="relative w-full w-[40%] md:w-[60%] lg:w-full items-baseline min-h-[280px] sm:min-h-[320px] md:min-h-[380px] lg:min-h-[450px]">
          <img
            src="/greyy.avif"
            alt=""
            className="absolute bottom-0 left-0
          md:w-[110%]
          lg:w-full
          max-w-[450px]
          md:max-w-[480px]
          lg:max-w-[650px]
          object-cover         
          lg:translate-x-6
          xl:translate-x-10
          "
          />
        </div>
      </div>
    </section>
  );
};

export default GlobalAccountSection;
