// data/featureItems.tsx
import React from "react";
import { FeatureItem } from "@/.next/types/navbar";

// ── SVG icon helpers ──────────────────────────────────────────────────────────
// Each returns a clean 20×20 SVG so there's no external icon dependency.
// Swap for your preferred icon library (Heroicons, Lucide, Tabler, etc.)

const Icon = ({ children }: { children: React.ReactNode }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

export const WalletIcon = () => (
  <Icon>
    <path d="M21 12V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2v-5z" />
    <path d="M21 12H16a2 2 0 000 4h5" />
  </Icon>
);

export const TransferIcon = () => (
  <Icon>
    <path d="M5 12h14M14 7l5 5-5 5" />
  </Icon>
);

export const ReceiveIcon = () => (
  <Icon>
    <path d="M12 5v14M7 14l5 5 5-5" />
  </Icon>
);

export const VtuIcon = () => (
  <Icon>
    <rect x={5} y={2} width={14} height={20} rx={2} />
    <path d="M12 18h.01" />
  </Icon>
);

export const GiftCardIcon = () => (
  <Icon>
    <path d="M20 12v10H4V12" />
    <path d="M22 7H2v5h20V7z" />
    <path d="M12 22V7M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z" />
    <path d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z" />
  </Icon>
);

export const SavingsIcon = () => (
  <Icon>
    <path d="M19 8a7 7 0 10-14 0" />
    <path d="M5 8v8a2 2 0 002 2h10a2 2 0 002-2V8" />
    <path d="M12 14v4M9 18h6" />
  </Icon>
);

export const VirtualCardIcon = () => (
  <Icon>
    <rect x={2} y={5} width={20} height={14} rx={2} />
    <path d="M2 10h20M6 15h2M10 15h4" />
  </Icon>
);

export const PhysicalCardIcon = () => (
  <Icon>
    <rect x={2} y={5} width={20} height={14} rx={2} />
    <path d="M2 10h20" />
    <circle cx={6} cy={15} r={1} />
  </Icon>
);

export const RewardsIcon = () => (
  <Icon>
    <path d="M8 21l4-8 4 8M3 9l9-7 9 7" />
    <path d="M12 2v19" />
  </Icon>
);

export const CashbackIcon = () => (
  <Icon>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    <path d="M15 8.5A2.5 2.5 0 0012.5 6h-1A2.5 2.5 0 009 8.5v0A2.5 2.5 0 0011.5 11h1a2.5 2.5 0 010 5h-1A2.5 2.5 0 009 13.5M12 5v1M12 18v1" />
  </Icon>
);

// ── Feature items list ─────────────────────────────────────────────────────────

export const featureItems: FeatureItem[] = [
  {
    id: "wallet",
    label: "Wallet",
    description: "Manage your balance",
    href: "/wallet",
    icon: <WalletIcon />,
    iconBg: "bg-teal-50 text-teal-600",
  },
  {
    id: "transfers",
    label: "Transfers",
    description: "Send money fast",
    href: "/transfers",
    icon: <TransferIcon />,
    iconBg: "bg-blue-50 text-blue-600",
  },
  {
    id: "receive-funds",
    label: "Receive Funds",
    description: "Accept payments",
    href: "/receive",
    icon: <ReceiveIcon />,
    iconBg: "bg-green-50 text-green-600",
  },
  {
    id: "vtu",
    label: "VTU",
    description: "Airtime & data top-up",
    href: "/vtu",
    icon: <VtuIcon />,
    iconBg: "bg-amber-50 text-amber-600",
  },
  {
    id: "gift-cards",
    label: "Gift Cards",
    description: "Buy & redeem cards",
    href: "/gift-cards",
    icon: <GiftCardIcon />,
    iconBg: "bg-pink-50 text-pink-600",
  },
  {
    id: "savings",
    label: "Savings",
    description: "Grow your money",
    href: "/savings",
    icon: <SavingsIcon />,
    iconBg: "bg-teal-50 text-teal-600",
  },
  {
    id: "virtual-cards",
    label: "Virtual Cards",
    description: "Instant online cards",
    href: "/virtual-cards",
    icon: <VirtualCardIcon />,
    iconBg: "bg-blue-50 text-blue-600",
  },
  {
    id: "physical-cards",
    label: "Physical Cards",
    description: "Delivered to you",
    href: "/physical-cards",
    icon: <PhysicalCardIcon />,
    iconBg: "bg-amber-50 text-amber-600",
  },
  {
    id: "rewards",
    label: "Rewards",
    description: "Earn on every spend",
    href: "/rewards",
    icon: <RewardsIcon />,
    iconBg: "bg-green-50 text-green-600",
  },
  {
    id: "cashbacks",
    label: "Cashbacks",
    description: "Money back, always",
    href: "/cashbacks",
    icon: <CashbackIcon />,
    iconBg: "bg-pink-50 text-pink-600",
  },
];
