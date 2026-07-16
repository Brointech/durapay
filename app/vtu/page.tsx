"use client";

import { useState } from "react";

// ─── Icon Components ───────────────────────────────────────────────────────────
const PhoneIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    className="w-6 h-6"
  >
    <rect x="5" y="2" width="14" height="20" rx="2" />
    <circle cx="12" cy="18" r="1" fill="currentColor" />
  </svg>
);
const WifiIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    className="w-6 h-6"
  >
    <path
      d="M1.5 8.5C5.5 4.5 10.5 2.5 12 2.5c1.5 0 6.5 2 10.5 6"
      strokeLinecap="round"
    />
    <path
      d="M5 12.5C7.5 10 9.8 8.8 12 8.8s4.5 1.2 7 3.7"
      strokeLinecap="round"
    />
    <path
      d="M8.5 16.5C9.8 15.2 10.9 14.5 12 14.5s2.2.7 3.5 2"
      strokeLinecap="round"
    />
    <circle cx="12" cy="20" r="1.5" fill="currentColor" stroke="none" />
  </svg>
);
const TvIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    className="w-6 h-6"
  >
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M8 21h8M12 17v4" strokeLinecap="round" />
  </svg>
);
const ZapIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    className="w-6 h-6"
  >
    <path
      d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const GamepadIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    className="w-6 h-6"
  >
    <rect x="2" y="6" width="20" height="12" rx="5" />
    <path d="M6 12h4M8 10v4M15 11h2M15 13h2" strokeLinecap="round" />
  </svg>
);
const ShieldIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    className="w-6 h-6"
  >
    <path
      d="M12 2L4 6v6c0 5 3.6 9.7 8 11 4.4-1.3 8-6 8-11V6L12 2z"
      strokeLinejoin="round"
    />
    <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const BoltIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    className="w-5 h-5"
  >
    <path
      d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const ChevronRight = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    className="w-4 h-4"
  >
    <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const AppleIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);
const PlayStoreIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M3.18 23.76A2 2 0 0 1 2 22V2A2 2 0 0 1 3.18.24L13.6 12 3.18 23.76zM16.54 15.35L5.8 21.55l8.4-9.46 2.34 3.26zm2.1-1.19a2 2 0 0 0 0-4.32L16.08 8.6 13.6 12l2.48 3.4 2.56-1.24zM5.8 2.45l10.74 6.2-2.34 3.26L5.8 2.45z" />
  </svg>
);
const StarIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-4 h-4 text-amber-400"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);
const CheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    className="w-4 h-4"
  >
    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const ArrowRight = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    className="w-4 h-4"
  >
    <path
      d="M5 12h14M12 5l7 7-7 7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// ─── Types ─────────────────────────────────────────────────────────────────────
type Network = "MTN" | "Airtel" | "Glo" | "9mobile";
type VTUCategory = "airtime" | "data" | "tv" | "electricity" | "betting";

interface DataPlan {
  id: string;
  name: string;
  price: number;
  validity: string;
  popular?: boolean;
}

// ─── Data ──────────────────────────────────────────────────────────────────────
const NETWORKS: { id: Network; color: string; bg: string; border: string }[] = [
  {
    id: "MTN",
    color: "text-yellow-700",
    bg: "bg-yellow-50",
    border: "border-yellow-200",
  },
  {
    id: "Airtel",
    color: "text-red-700",
    bg: "bg-red-50",
    border: "border-red-200",
  },
  {
    id: "Glo",
    color: "text-green-700",
    bg: "bg-green-50",
    border: "border-green-200",
  },
  {
    id: "9mobile",
    color: "text-teal-700",
    bg: "bg-teal-50",
    border: "border-teal-200",
  },
];

const DATA_PLANS: Record<Network, DataPlan[]> = {
  MTN: [
    { id: "m1", name: "1GB", price: 300, validity: "1 day" },
    { id: "m2", name: "2GB", price: 500, validity: "2 days", popular: true },
    { id: "m3", name: "5GB", price: 1500, validity: "30 days" },
    { id: "m4", name: "10GB", price: 2500, validity: "30 days" },
    { id: "m5", name: "20GB", price: 4000, validity: "30 days" },
    { id: "m6", name: "50GB", price: 8500, validity: "30 days" },
  ],
  Airtel: [
    { id: "a1", name: "500MB", price: 200, validity: "1 day" },
    { id: "a2", name: "2GB", price: 500, validity: "2 days", popular: true },
    { id: "a3", name: "5GB", price: 1500, validity: "30 days" },
    { id: "a4", name: "10GB", price: 2000, validity: "30 days" },
    { id: "a5", name: "20GB", price: 3500, validity: "30 days" },
    { id: "a6", name: "Unlimited", price: 9000, validity: "30 days" },
  ],
  Glo: [
    { id: "g1", name: "1GB", price: 250, validity: "1 day" },
    { id: "g2", name: "3.5GB", price: 500, validity: "7 days", popular: true },
    { id: "g3", name: "7.5GB", price: 1500, validity: "30 days" },
    { id: "g4", name: "15GB", price: 2500, validity: "30 days" },
    { id: "g5", name: "30GB", price: 4000, validity: "30 days" },
    { id: "g6", name: "50GB", price: 6000, validity: "30 days" },
  ],
  "9mobile": [
    { id: "n1", name: "500MB", price: 200, validity: "1 day" },
    { id: "n2", name: "1.5GB", price: 500, validity: "30 days", popular: true },
    { id: "n3", name: "4.5GB", price: 1000, validity: "30 days" },
    { id: "n4", name: "11GB", price: 2000, validity: "30 days" },
    { id: "n5", name: "22.5GB", price: 4000, validity: "30 days" },
    { id: "n6", name: "30GB", price: 6000, validity: "30 days" },
  ],
};

const TV_PROVIDERS = ["DSTV", "GOtv", "Startimes", "Showmax"];
const ELECTRICITY_DISCOS = [
  "Abuja Electricity (AEDC)",
  "Eko Electricity (EKEDC)",
  "Ikeja Electricity (IKEDC)",
  "Ibadan Electricity (IBEDC)",
  "Kano Electricity (KEDCO)",
  "Port Harcourt Electricity (PHED)",
];
const BETTING_PROVIDERS = [
  "Bet9ja",
  "SportyBet",
  "1xBet",
  "BetKing",
  "Parimatch",
  "Betway",
];

const CATEGORIES: {
  id: VTUCategory;
  label: string;
  icon: React.ReactNode;
  desc: string;
}[] = [
  {
    id: "airtime",
    label: "Airtime",
    icon: <PhoneIcon />,
    desc: "Instant top-up",
  },
  { id: "data", label: "Data", icon: <WifiIcon />, desc: "All networks" },
  { id: "tv", label: "TV Bills", icon: <TvIcon />, desc: "DSTV, GOtv & more" },
  {
    id: "electricity",
    label: "Electricity",
    icon: <ZapIcon />,
    desc: "All DISCOs",
  },
  {
    id: "betting",
    label: "Betting",
    icon: <GamepadIcon />,
    desc: "Fund wallet",
  },
];

// ─── Sub-components ────────────────────────────────────────────────────────────

function NetworkSelector({
  selected,
  onSelect,
}: {
  selected: Network;
  onSelect: (n: Network) => void;
}) {
  return (
    <div className="grid grid-cols-4 gap-2">
      {NETWORKS.map((n) => (
        <button
          key={n.id}
          onClick={() => onSelect(n.id)}
          className={`py-2.5 rounded-xl text-sm font-semibold border-2 transition-all duration-150 ${
            selected === n.id
              ? `${n.bg} ${n.color} ${n.border} shadow-sm scale-[1.03]`
              : "bg-white border-gray-100 text-gray-500 hover:border-gray-200 hover:bg-gray-50"
          }`}
        >
          {n.id}
        </button>
      ))}
    </div>
  );
}

function AirtimeTab() {
  const [network, setNetwork] = useState<Network>("MTN");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const quickAmounts = [100, 200, 500, 1000, 2000, 5000];

  return (
    <div className="space-y-5">
      <NetworkSelector selected={network} onSelect={setNetwork} />
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1.5">
          Phone Number
        </label>
        <input
          type="tel"
          placeholder="0801 234 5678"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          maxLength={11}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00C896]/40 focus:border-[#00C896] text-sm transition"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1.5">
          Amount (₦)
        </label>
        <div className="grid grid-cols-3 gap-2 mb-3">
          {quickAmounts.map((a) => (
            <button
              key={a}
              onClick={() => setAmount(String(a))}
              className={`py-2 rounded-xl text-sm font-medium border transition-all duration-150 ${
                amount === String(a)
                  ? "bg-[#00C896] text-white border-[#00C896]"
                  : "bg-gray-50 text-gray-600 border-gray-100 hover:border-[#00C896]/40 hover:bg-[#00C896]/5"
              }`}
            >
              ₦{a.toLocaleString()}
            </button>
          ))}
        </div>
        <input
          type="number"
          placeholder="Or enter custom amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00C896]/40 focus:border-[#00C896] text-sm transition"
        />
      </div>
      <CTAButton
        label={`Buy ₦${amount ? Number(amount).toLocaleString() : "0"} Airtime`}
        disabled={!phone || !amount}
      />
    </div>
  );
}

function DataTab() {
  const [network, setNetwork] = useState<Network>("MTN");
  const [phone, setPhone] = useState("");
  const [selected, setSelected] = useState<string | null>(null);

  const plans = DATA_PLANS[network];

  return (
    <div className="space-y-5">
      <NetworkSelector selected={network} onSelect={setNetwork} />
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1.5">
          Phone Number
        </label>
        <input
          type="tel"
          placeholder="0801 234 5678"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          maxLength={11}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00C896]/40 focus:border-[#00C896] text-sm transition"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1.5">
          Select Plan
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {plans.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelected(p.id)}
              className={`relative p-3 rounded-xl border-2 text-left transition-all duration-150 ${
                selected === p.id
                  ? "border-[#00C896] bg-[#00C896]/5"
                  : "border-gray-100 bg-white hover:border-[#00C896]/30 hover:bg-[#00C896]/3"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-2 left-3 text-[10px] font-bold bg-amber-400 text-amber-900 px-2 py-0.5 rounded-full">
                  Popular
                </span>
              )}
              <p className="text-base font-bold text-gray-900">{p.name}</p>
              <p className="text-xs text-gray-500 mt-0.5">{p.validity}</p>
              <p className="text-sm font-semibold text-[#00C896] mt-1">
                ₦{p.price.toLocaleString()}
              </p>
            </button>
          ))}
        </div>
      </div>
      <CTAButton
        label={
          selected
            ? `Buy ${plans.find((p) => p.id === selected)?.name} — ₦${plans.find((p) => p.id === selected)?.price.toLocaleString()}`
            : "Select a Plan"
        }
        disabled={!phone || !selected}
      />
    </div>
  );
}

function TVTab() {
  const [provider, setProvider] = useState("");
  const [smartcard, setSmartcard] = useState("");
  const [plan, setPlan] = useState("");

  return (
    <div className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1.5">
          TV Provider
        </label>
        <div className="grid grid-cols-2 gap-2">
          {TV_PROVIDERS.map((p) => (
            <button
              key={p}
              onClick={() => setProvider(p)}
              className={`py-3 rounded-xl text-sm font-medium border-2 transition-all duration-150 ${
                provider === p
                  ? "border-[#00C896] bg-[#00C896]/5 text-[#00C896]"
                  : "border-gray-100 bg-white text-gray-600 hover:border-[#00C896]/30"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1.5">
          Smartcard / IUC Number
        </label>
        <input
          type="text"
          placeholder="Enter smartcard number"
          value={smartcard}
          onChange={(e) => setSmartcard(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00C896]/40 focus:border-[#00C896] text-sm transition"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1.5">
          Subscription Plan
        </label>
        <input
          type="text"
          placeholder="e.g. Compact, Premium"
          value={plan}
          onChange={(e) => setPlan(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00C896]/40 focus:border-[#00C896] text-sm transition"
        />
      </div>
      <CTAButton
        label="Pay TV Subscription"
        disabled={!provider || !smartcard || !plan}
      />
    </div>
  );
}

function ElectricityTab() {
  const [disco, setDisco] = useState("");
  const [meter, setMeter] = useState("");
  const [meterType, setMeterType] = useState<"prepaid" | "postpaid">("prepaid");
  const [amount, setAmount] = useState("");

  return (
    <div className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1.5">
          Distribution Company
        </label>
        <select
          value={disco}
          onChange={(e) => setDisco(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#00C896]/40 focus:border-[#00C896] text-sm bg-white transition"
        >
          <option value="">Select your DISCO</option>
          {ELECTRICITY_DISCOS.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1.5">
          Meter Type
        </label>
        <div className="grid grid-cols-2 gap-2">
          {(["prepaid", "postpaid"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setMeterType(t)}
              className={`py-3 rounded-xl text-sm font-medium border-2 capitalize transition-all duration-150 ${
                meterType === t
                  ? "border-[#00C896] bg-[#00C896]/5 text-[#00C896]"
                  : "border-gray-100 bg-white text-gray-600 hover:border-[#00C896]/30"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1.5">
          Meter Number
        </label>
        <input
          type="text"
          placeholder="Enter meter number"
          value={meter}
          onChange={(e) => setMeter(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00C896]/40 focus:border-[#00C896] text-sm transition"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1.5">
          Amount (₦)
        </label>
        <input
          type="number"
          placeholder="Minimum ₦1,000"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00C896]/40 focus:border-[#00C896] text-sm transition"
        />
      </div>
      <CTAButton
        label={`Pay ₦${amount ? Number(amount).toLocaleString() : "0"} Electricity`}
        disabled={!disco || !meter || !amount}
      />
    </div>
  );
}

function BettingTab() {
  const [provider, setProvider] = useState("");
  const [userId, setUserId] = useState("");
  const [amount, setAmount] = useState("");

  return (
    <div className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1.5">
          Betting Platform
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {BETTING_PROVIDERS.map((p) => (
            <button
              key={p}
              onClick={() => setProvider(p)}
              className={`py-3 rounded-xl text-sm font-medium border-2 transition-all duration-150 ${
                provider === p
                  ? "border-[#00C896] bg-[#00C896]/5 text-[#00C896]"
                  : "border-gray-100 bg-white text-gray-600 hover:border-[#00C896]/30"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1.5">
          User ID / Username
        </label>
        <input
          type="text"
          placeholder="Enter your betting user ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00C896]/40 focus:border-[#00C896] text-sm transition"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1.5">
          Amount (₦)
        </label>
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00C896]/40 focus:border-[#00C896] text-sm transition"
        />
      </div>
      <CTAButton
        label={`Fund ${provider || "Account"} — ₦${amount ? Number(amount).toLocaleString() : "0"}`}
        disabled={!provider || !userId || !amount}
      />
    </div>
  );
}

function CTAButton({ label, disabled }: { label: string; disabled?: boolean }) {
  return (
    <button
      disabled={disabled}
      className={`w-full py-3.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all duration-200 ${
        disabled
          ? "bg-gray-100 text-gray-400 cursor-not-allowed"
          : "bg-[#00C896] hover:bg-[#00b386] text-white shadow-lg shadow-[#00C896]/25 hover:shadow-[#00C896]/35 active:scale-[0.98]"
      }`}
    >
      {!disabled && <BoltIcon />}
      {label}
    </button>
  );
}

// ─── Main VTU Section ──────────────────────────────────────────────────────────
function VTUWidget() {
  const [activeCategory, setActiveCategory] = useState<VTUCategory>("airtime");

  return (
    <section
      id="vtu"
      className=" max-w-7xl mx-auto py-16 sm:py-24 bg-gradient-to-b from-white to-[#f0fdf9]"
    >
      <div className="px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#00C896] uppercase bg-[#00C896]/10 px-3 py-1.5 rounded-full mb-4">
            <BoltIcon /> Instant Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Pay bills. Top up. Done.
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            All your everyday payments in one place — faster than a bank,
            cheaper than agents.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_420px] gap-8 lg:gap-12 items-start">
          {/* Left column – category tiles + trust indicators */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`group p-4 rounded-2xl border-2 text-left transition-all duration-200 ${
                    activeCategory === cat.id
                      ? "border-[#00C896] bg-white shadow-lg shadow-[#00C896]/10"
                      : "border-transparent bg-white hover:border-gray-200 hover:shadow-md"
                  }`}
                >
                  <div
                    className={`inline-flex p-2.5 rounded-xl mb-3 transition-colors duration-200 ${
                      activeCategory === cat.id
                        ? "bg-[#00C896] text-white"
                        : "bg-gray-100 text-gray-500 group-hover:bg-[#00C896]/10 group-hover:text-[#00C896]"
                    }`}
                  >
                    {cat.icon}
                  </div>
                  <p
                    className={`font-bold text-sm ${activeCategory === cat.id ? "text-gray-900" : "text-gray-700"}`}
                  >
                    {cat.label}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">{cat.desc}</p>
                </button>
              ))}
            </div>

            {/* Trust indicators */}
            <div className="bg-white rounded-2xl border border-gray-100 p-5">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                Why people trust us
              </p>
              <div className="space-y-3">
                {[
                  {
                    icon: <BoltIcon />,
                    title: "Instant Delivery",
                    desc: "Airtime & data credited in under 5 seconds",
                  },
                  {
                    icon: <ShieldIcon />,
                    title: "CBN-Licensed",
                    desc: "Regulated, secure, and fully insured",
                  },
                  {
                    icon: <CheckIcon />,
                    title: "No Hidden Fees",
                    desc: "The price you see is what you pay",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <span className="mt-0.5 text-[#00C896]">{item.icon}</span>
                    <div>
                      <p className="text-sm font-semibold text-gray-800">
                        {item.title}
                      </p>
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats bar */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: "2M+", label: "Transactions" },
                { value: "99.9%", label: "Uptime" },
                { value: "< 5s", label: "Delivery" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-white rounded-2xl border border-gray-100 p-4 text-center"
                >
                  <p className="text-xl font-extrabold text-gray-900">
                    {s.value}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column – form card */}
          <div className="sticky top-6">
            <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/60 border border-gray-100 overflow-hidden">
              {/* Card header */}
              <div className="px-6 pt-6 pb-4 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-[#00C896]">
                      {CATEGORIES.find((c) => c.id === activeCategory)?.icon}
                    </span>
                    <h3 className="text-base font-bold text-gray-900">
                      {CATEGORIES.find((c) => c.id === activeCategory)?.label}
                    </h3>
                  </div>
                  <span className="flex items-center gap-1 text-xs text-[#00C896] font-semibold bg-[#00C896]/8 px-2.5 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 bg-[#00C896] rounded-full animate-pulse" />
                    Live
                  </span>
                </div>
              </div>

              {/* Tab nav (compact) */}
              <div className="flex overflow-x-auto px-4 pt-3 gap-1 scrollbar-hide">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150 ${
                      activeCategory === cat.id
                        ? "bg-[#00C896] text-white"
                        : "text-gray-500 hover:bg-gray-100"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Form body */}
              <div className="p-6">
                {activeCategory === "airtime" && <AirtimeTab />}
                {activeCategory === "data" && <DataTab />}
                {activeCategory === "tv" && <TVTab />}
                {activeCategory === "electricity" && <ElectricityTab />}
                {activeCategory === "betting" && <BettingTab />}
              </div>

              {/* Card footer */}
              <div className="px-6 pb-5 flex items-center justify-between">
                <p className="text-xs text-gray-400 flex items-center gap-1">
                  <ShieldIcon /> Secured by Paystack
                </p>
                <div className="flex gap-1">
                  {["visa", "mc", "bank"].map((b) => (
                    <span
                      key={b}
                      className="text-[10px] font-bold text-gray-400 bg-gray-50 border border-gray-100 px-1.5 py-0.5 rounded"
                    >
                      {b === "visa" ? "VISA" : b === "mc" ? "MC" : "BANK"}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Hero Section ──────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0a1628] min-h-[90vh] flex items-center">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #00C896 0%, transparent 50%), radial-gradient(circle at 80% 20%, #0ea5e9 0%, transparent 40%)`,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.03) 39px, rgba(255,255,255,0.03) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,0.03) 39px, rgba(255,255,255,0.03) 40px)`,
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-semibold px-4 py-2 rounded-full mb-6 border border-white/10">
              <span className="w-1.5 h-1.5 bg-[#00C896] rounded-full" />
              Nigeria's fastest VTU platform
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight">
              All Your Daily Payments <br /> in One place.
            </h1>
            <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-lg">
              With Durapay, you can handle everything from airtime <br />
              top-ups to electricity bills to betting in seconds, <br />
              all in one secure app.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="flex items-center gap-2.5 bg-white text-gray-900 px-5 py-3 rounded-xl text-sm font-bold hover:bg-gray-100 transition-colors">
                <AppleIcon /> App Store
              </button>
              <button className="flex items-center gap-2.5 bg-[#1154da] text-white px-5 py-3 rounded-xl text-sm font-bold hover:bg-[#023bac] transition-colors">
                <PlayStoreIcon /> Google Play
              </button>
            </div>
            <div className="flex items-center gap-4 mt-8">
              <div className="flex -space-x-2">
                {["#f59e0b", "#ef4444", "#3b82f6", "#8b5cf6"].map((c, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-[#0a1628]"
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 mb-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <StarIcon key={s} />
                  ))}
                </div>
                <p className="text-white/50 text-xs">500k+ happy users</p>
              </div>
            </div>
          </div>

          {/* Mock phone */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 sm:w-72 bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border-4 border-white/10">
                {/* Phone status bar */}
                <div className="bg-[#0a1628] px-6 pt-4 pb-2 flex items-center justify-between">
                  <span className="text-white/60 text-xs">9:41</span>
                  <div className="flex gap-1">
                    <div className="w-12 h-2 bg-white/20 rounded-full" />
                  </div>
                </div>
                {/* App UI mockup */}
                <div className="bg-[#0a1628] px-6 pb-6">
                  <p className="text-white/50 text-xs mt-1 mb-3">
                    Good morning, Chidi 👋
                  </p>
                  <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                    <p className="text-white/40 text-xs mb-1">Wallet Balance</p>
                    <p className="text-white text-2xl font-black">₦24,500.00</p>
                  </div>
                </div>
                <div className="bg-white px-4 py-4">
                  <div className="grid grid-cols-4 gap-2 mb-4">
                    {CATEGORIES.slice(0, 4).map((cat) => (
                      <div
                        key={cat.id}
                        className="flex flex-col items-center gap-1"
                      >
                        <div className="w-10 h-10 rounded-xl bg-[#023bac]/10 flex items-center justify-center text-[#407af0]">
                          <span className="scale-75">{cat.icon}</span>
                        </div>
                        <span className="text-[9px] text-gray-500">
                          {cat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    {[
                      {
                        label: "MTN 2GB",
                        amount: "₦500",
                        time: "2m ago",
                        color: "bg-yellow-400",
                      },
                      {
                        label: "AEDC Token",
                        amount: "₦5,000",
                        time: "1hr ago",
                        color: "bg-blue-400",
                      },
                      {
                        label: "GOtv Basic",
                        amount: "₦1,900",
                        time: "Today",
                        color: "bg-green-400",
                      },
                    ].map((tx) => (
                      <div
                        key={tx.label}
                        className="flex items-center justify-between py-1.5"
                      >
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${tx.color}`} />
                          <p className="text-xs font-medium text-gray-700">
                            {tx.label}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs font-bold text-gray-900">
                            {tx.amount}
                          </p>
                          <p className="text-[9px] text-gray-400">{tx.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -right-6 top-16 bg-[#023bac] text-white text-xs font-bold px-3 py-2 rounded-xl shadow-lg">
                <p className="text-[10px] font-normal opacity-80">
                  Delivered in
                </p>
                <p className="text-lg font-black leading-none">4.2s</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Features Section ──────────────────────────────────────────────────────────
function FeaturesSection() {
  const features = [
    {
      icon: <ZapIcon />,
      title: "Lightning Fast",
      desc: "Transactions complete in under 5 seconds — no page refreshes, no waiting.",
      color: "bg-amber-50 text-amber-600",
    },
    {
      icon: <ShieldIcon />,
      title: "Bank-Grade Security",
      desc: "End-to-end encryption and 2FA on every transaction. Your funds are always safe.",
      color: "bg-blue-50 text-blue-600",
    },
    {
      icon: <WifiIcon />,
      title: "All Networks Covered",
      desc: "MTN, Airtel, Glo, and 9mobile — full support across every major Nigerian network.",
      color: "bg-[#00C896]/10 text-[#00C896]",
    },
    {
      icon: <PhoneIcon />,
      title: "Works Offline",
      desc: "Queue your transactions and we'll process them the moment you're back online.",
      color: "bg-purple-50 text-purple-600",
    },
    {
      icon: <TvIcon />,
      title: "All Billers Supported",
      desc: "DSTV, GOtv, Startimes, all DISCOs, all major betting platforms — 200+ billers.",
      color: "bg-red-50 text-red-600",
    },
    {
      icon: <GamepadIcon />,
      title: "Cashback Rewards",
      desc: "Earn up to 2% cashback on every data purchase and bill payment you make.",
      color: "bg-green-50 text-green-600",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Built for everyday Nigerians
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            We obsessed over every detail so you don't have to think about it.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="p-6 rounded-2xl border border-gray-100 hover:shadow-lg hover:shadow-gray-100 transition-shadow duration-300"
            >
              <div className={`inline-flex p-3 rounded-xl mb-4 ${f.color}`}>
                {f.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Download CTA Section ──────────────────────────────────────────────────────
function DownloadSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#0a1628]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#00C896] uppercase bg-[#00C896]/10 px-3 py-1.5 rounded-full mb-6">
          Get the app
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
          Your pocket-sized bill payment hub
        </h2>
        <p className="text-white/50 text-lg mb-10 max-w-2xl mx-auto">
          Join 500,000+ Nigerians saving time and money on everyday
          transactions. Download free today.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <button className="flex items-center gap-3 bg-white text-gray-900 px-6 py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors shadow-lg">
            <AppleIcon />
            <div className="text-left">
              <p className="text-[10px] text-gray-500 font-normal leading-none mb-0.5">
                Download on the
              </p>
              <p className="text-sm font-bold leading-none">App Store</p>
            </div>
          </button>
          <button className="flex items-center gap-3 bg-[#00C896] text-white px-6 py-4 rounded-xl font-bold hover:bg-[#00b386] transition-colors shadow-lg shadow-[#00C896]/20">
            <PlayStoreIcon />
            <div className="text-left">
              <p className="text-[10px] text-white/70 font-normal leading-none mb-0.5">
                Get it on
              </p>
              <p className="text-sm font-bold leading-none">Google Play</p>
            </div>
          </button>
        </div>
        <div className="flex flex-wrap gap-6 justify-center text-white/40 text-sm">
          {[
            "Free to download",
            "No setup fees",
            "Works on all Android & iOS devices",
          ].map((t) => (
            <span key={t} className="flex items-center gap-2">
              <span className="text-[#00C896]">
                <CheckIcon />
              </span>{" "}
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ──────────────────────────────────────────────────────────────
function TestimonialsSection() {
  const testimonials = [
    {
      name: "Funmi A.",
      location: "Lagos",
      text: "I use it every morning to buy data. Takes less than 3 seconds. My entire family is now on it.",
      initials: "FA",
      color: "bg-[#00C896]/15 text-[#00C896]",
    },
    {
      name: "Emeka O.",
      location: "Abuja",
      text: "Paid my AEDC bill at midnight with zero stress. The token came instantly. Incredible service.",
      initials: "EO",
      color: "bg-blue-100 text-blue-600",
    },
    {
      name: "Blessing N.",
      location: "Port Harcourt",
      text: "The cashback feature is a game-changer. I saved over ₦4,000 last month just from buying data.",
      initials: "BN",
      color: "bg-purple-100 text-purple-600",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Loved across Nigeria
          </h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm"
            >
              <div className="flex gap-0.5 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <StarIcon key={s} />
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold ${t.color}`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {t.name}
                  </p>
                  <p className="text-xs text-gray-400">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// // ─── Navbar ────────────────────────────────────────────────────────────────────
// function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex items-center gap-2">
//             <div className="w-8 h-8 bg-[#00C896] rounded-xl flex items-center justify-center">
//               <BoltIcon />
//             </div>
//             <span className="font-black text-xl text-gray-900 tracking-tight">
//               PaySwift
//             </span>
//           </div>

//           // Desktop nav ___________________
//           <div className="hidden md:flex items-center gap-8">
//             {["Services", "Pricing", "About"].map((item) => (
//               <a
//                 key={item}
//                 href="#"
//                 className="text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium"
//               >
//                 {item}
//               </a>
//             ))}
//           </div>

//           <div className="flex items-center gap-3">
//             <a
//               href="#"
//               className="hidden sm:block text-sm font-semibold text-gray-700 hover:text-gray-900 transition-colors"
//             >
//               Log in
//             </a>
//             <a
//               href="#vtu"
//               className="flex items-center gap-1.5 text-sm font-bold bg-[#00C896] text-white px-4 py-2 rounded-xl hover:bg-[#00b386] transition-colors"
//             >
//               Get started <ArrowRight />
//             </a>
//             <button
//               className="md:hidden p-2 text-gray-500"
//               onClick={() => setOpen(!open)}
//               aria-label="Toggle menu"
//             >
//               <svg
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth={2}
//                 className="w-5 h-5"
//               >
//                 {open ? (
//                   <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
//                 ) : (
//                   <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>

//         // Mobile menu _____________
//         {open && (
//           <div className="md:hidden py-4 border-t border-gray-100">
//             {["Services", "Pricing", "About", "Log in"].map((item) => (
//               <a
//                 key={item}
//                 href="#"
//                 className="block py-3 text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium"
//               >
//                 {item}
//               </a>
//             ))}
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }

// ─── Footer ──
// function Footer() {
//   return (
//     <footer className="bg-[#0a1628] py-12">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
//           <div className="flex items-center gap-2">
//             <div className="w-7 h-7 bg-[#00C896] rounded-lg flex items-center justify-center">
//               <BoltIcon />
//             </div>
//             <span className="font-black text-lg text-white">PaySwift</span>
//           </div>
//           <p className="text-white/30 text-xs text-center">
//             © 2025 PaySwift Nigeria Ltd · CBN Licensed · RC: 12345678
//           </p>
//           <div className="flex gap-5">
//             {["Privacy", "Terms", "Support"].map((l) => (
//               <a
//                 key={l}
//                 href="#"
//                 className="text-white/40 hover:text-white/70 text-xs transition-colors"
//               >
//                 {l}
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function VTUPage() {
  return (
    <main className="min-h-screen font-sans antialiased">
      {/* <Navbar /> */}
      <HeroSection />
      <FeaturesSection />
      <VTUWidget />
      <TestimonialsSection />
      <DownloadSection />
      {/* <Footer /> */}
    </main>
  );
}
