// components/navbar/FeaturesDropdown.tsx
"use client"; // remove if not using Next.js App Router

import React from "react";
import Link from "next/link"; // swap for <a> if not using Next.js
import { featureItems } from "@/app/data/featureitems";
import { FeatureItem } from "@/.next/types/navbar";

// ── Single feature item tile ──────────────────────────────────────────────────

interface FeatureTileProps {
  item: FeatureItem;
  onClick?: () => void;
}

const FeatureTile: React.FC<FeatureTileProps> = ({ item, onClick }) => (
  <Link
    href={item.href}
    onClick={onClick}
    className={`
      group flex flex-col gap-2.5 p-3 rounded-xl
      border border-black/[0.08]
      bg-white hover:border-teal-400 hover:bg-teal-50
      transition-all duration-150 cursor-pointer
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400
    `}
  >
    {/* Icon */}
    <div
      className={`
        w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0
        ${item.iconBg}
        group-hover:scale-105 transition-transform duration-150
      `}
    >
      {item.icon}
    </div>

    {/* Text */}
    <div>
      <p className="text-[13px] font-semibold text-gray-900 leading-tight">
        {item.label}
      </p>
      <p className="text-[11px] text-gray-500 mt-0.5 leading-snug">
        {item.description}
      </p>
    </div>
  </Link>
);

// ── Promo banner at the bottom of the dropdown ────────────────────────────────

const PromoBanner: React.FC = () => (
  <div className="flex items-center justify-between pt-4 mt-4 border-t border-black/[0.06]">
    <div className="flex items-center gap-3">
      <div className="w-9 h-9 rounded-lg bg-teal-600 flex items-center justify-center flex-shrink-0">
        {/* Sparkle icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={18}
          height={18}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#E1F5EE"
          strokeWidth={1.75}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" />
          <path d="M19 15l.75 2.25L22 18l-2.25.75L19 21l-.75-2.25L16 18l2.25-.75L19 15z" />
        </svg>
      </div>
      <div>
        <p className="text-[12px] font-semibold text-gray-800">
          New: Earn 5% cashback this month
        </p>
        <p className="text-[11px] text-gray-500">
          Limited-time offer for all users
        </p>
      </div>
    </div>

    <Link
      href="/features"
      className="
        flex items-center gap-1 text-[12px] font-semibold text-teal-600
        hover:text-teal-800 transition-colors duration-150
        focus-visible:outline-none focus-visible:underline
        whitespace-nowrap
      "
    >
      See all features
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={14}
        height={14}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M5 12h14M14 7l5 5-5 5" />
      </svg>
    </Link>
  </div>
);

// ── Main dropdown panel ───────────────────────────────────────────────────────

interface FeaturesDropdownProps {
  onClose: () => void;
}

const FeaturesDropdown: React.FC<FeaturesDropdownProps> = ({ onClose }) => (
  <div
    className="
      absolute top-full left-0 right-0 z-50
      bg-white border-b border-black/[0.08]
      shadow-[0_8px_32px_rgba(0,0,0,0.08)]
      animate-in fade-in slide-in-from-top-2 duration-150
    "
    role="region"
    aria-label="Features menu"
  >
    <div className="max-w-5xl mx-auto px-6 py-5">
      {/* Section label */}
      <p className="text-[10px] font-semibold tracking-[0.1em] uppercase text-gray-400 mb-4 pb-3 border-b border-black/[0.06]">
        All features
      </p>

      {/* 5-column grid on desktop, 2-col on tablet, 1-col on mobile */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5">
        {featureItems.map((item) => (
          <FeatureTile key={item.id} item={item} onClick={onClose} />
        ))}
      </div>

      <PromoBanner />
    </div>
  </div>
);

export default FeaturesDropdown;
