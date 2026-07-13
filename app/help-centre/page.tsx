"use client";

import { useMemo, useState } from "react";
import {
  FiSearch,
  FiCreditCard,
  FiRepeat,
  FiGift,
  FiShield,
  FiDollarSign,
  FiSmartphone,
  FiFileText,
  FiAlertCircle,
  FiRefreshCw,
  FiArrowRight,
  FiMail,
} from "react-icons/fi";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

type Category = {
  id: string;
  title: string;
  description: string;
  articleCount: number;
  authorCount: number;
  icon: React.ReactNode;
};

const CATEGORIES: Category[] = [
  {
    id: "account",
    title: "Managing your account",
    description: "Set up, verify, and stay in control of your DuraPay account.",
    articleCount: 32,
    authorCount: 4,
    icon: <FiShield className="h-5 w-5" />,
  },
  {
    id: "kyc",
    title: "KYC verification",
    description: "What you need to know to get fully verified, faster.",
    articleCount: 8,
    authorCount: 2,
    icon: <FiFileText className="h-5 w-5" />,
  },
  {
    id: "transfers",
    title: "Sending & receiving money",
    description: "Move money locally and abroad, and get paid in NGN or USD.",
    articleCount: 41,
    authorCount: 5,
    icon: <FiRepeat className="h-5 w-5" />,
  },
  {
    id: "cards",
    title: "Virtual cards",
    description: "Create, fund, and use your virtual dollar and naira cards.",
    articleCount: 29,
    authorCount: 3,
    icon: <FiCreditCard className="h-5 w-5" />,
  },
  {
    id: "giftcards",
    title: "Gift cards, airtime & VTU",
    description: "Buy gift cards, airtime, data, and pay bills in one place.",
    articleCount: 14,
    authorCount: 2,
    icon: <FiGift className="h-5 w-5" />,
  },
  {
    id: "fees",
    title: "Fees & pricing",
    description: "Transparent breakdowns of what every transaction costs.",
    articleCount: 12,
    authorCount: 2,
    icon: <FiDollarSign className="h-5 w-5" />,
  },
  {
    id: "vtu",
    title: "Wallet & VTU",
    description: "Top up, withdraw, and manage your wallet balance.",
    articleCount: 18,
    authorCount: 3,
    icon: <FiSmartphone className="h-5 w-5" />,
  },
  {
    id: "troubleshooting",
    title: "Troubleshooting errors",
    description: "Common error messages explained, and how to fix them.",
    articleCount: 9,
    authorCount: 1,
    icon: <FiAlertCircle className="h-5 w-5" />,
  },
  {
    id: "disputes",
    title: "Chargebacks & refunds",
    description: "Get help with disputes, refunds, and reversal timelines.",
    articleCount: 6,
    authorCount: 1,
    icon: <FiRefreshCw className="h-5 w-5" />,
  },
];

const POPULAR_ARTICLES = [
  "How to create a DuraPay virtual card: step-by-step guide",
  "How to fund your NGN wallet instantly",
  "Is DuraPay safe? Regulation, licensing & fund protection explained",
  "How to send money abroad from Nigeria with DuraPay",
  "Setting up Two-Factor Authentication (2FA) on your account",
  "How to buy gift cards and get instant NGN value",
  "Understanding DuraPay transfer and card fees",
  "What to do if your transaction fails or is delayed",
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

const HelpCentre = () => {
  const [query, setQuery] = useState("");

  const filteredCategories = useMemo(() => {
    if (!query.trim()) return CATEGORIES;
    const q = query.toLowerCase();
    return CATEGORIES.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <main className="min-h-screen bg-[#F7F9FC]">
      {/* ---------------------------------------------------------------- */}
      {/* Hero / search                                                    */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-[#00246C] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {/* subtle grid texture */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />

        <div className="relative mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#8FA8E8]">
            DuraPay Help Desk
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Advice and answers from the DuraPay team
          </h1>
          <p className="mt-4 text-base text-[#C4D2F0] sm:text-lg">
            Search our help center or browse a topic below.
          </p>

          <form
            role="search"
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto mt-8 flex max-w-xl items-center gap-2 rounded-xl bg-white p-2 shadow-lg shadow-black/10 ring-1 ring-black/5 focus-within:ring-2 focus-within:ring-[#1154DA]"
          >
            <FiSearch className="ml-2 h-5 w-5 shrink-0 text-slate-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for articles..."
              className="w-full min-w-0 bg-transparent px-1 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none sm:text-base"
            />
            <button
              type="submit"
              className="hidden shrink-0 rounded-lg bg-[#1154DA] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#0e46b8] sm:inline-flex"
            >
              Search
            </button>
          </form>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Category grid                                                    */}
      {/* ---------------------------------------------------------------- */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <h2 className="text-lg font-semibold text-[#0B1220] sm:text-xl">
          Browse by topic
        </h2>

        {filteredCategories.length === 0 ? (
          <p className="mt-6 rounded-lg border border-dashed border-[#DCE3F0] bg-white px-4 py-8 text-center text-sm text-slate-500">
            No topics match &ldquo;{query}&rdquo;. Try a different search term.
          </p>
        ) : (
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCategories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="group relative flex flex-col rounded-xl bg-white p-5 shadow-sm ring-1 ring-[#E7ECF6] transition-all hover:-translate-y-0.5 hover:shadow-md hover:ring-[#1154DA]/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1154DA]"
              >
                {/* torn-receipt top edge */}
                <div
                  aria-hidden
                  className="absolute -top-px left-4 right-4 h-px"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(90deg, #C9D6EE 0 6px, transparent 6px 12px)",
                  }}
                />

                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#EEF2FD] text-[#1154DA]">
                    {category.icon}
                  </span>
                  <h3 className="text-sm font-semibold leading-snug text-[#0B1220] sm:text-base">
                    {category.title}
                  </h3>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  {category.description}
                </p>

                <div className="mt-4 flex items-center justify-between border-t border-[#EEF1F8] pt-3">
                  <span className="font-mono text-xs text-slate-400">
                    {category.authorCount} author
                    {category.authorCount > 1 ? "s" : ""} ·{" "}
                    {category.articleCount} articles
                  </span>
                  <FiArrowRight className="h-4 w-4 text-slate-300 transition-transform group-hover:translate-x-0.5 group-hover:text-[#1154DA]" />
                </div>
              </a>
            ))}
          </div>
        )}
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Popular articles                                                 */}
      {/* ---------------------------------------------------------------- */}
      <section className="border-t border-[#E7ECF6] bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-lg font-semibold text-[#0B1220] sm:text-xl">
            Popular articles
          </h2>

          <ol className="mt-6 divide-y divide-[#EEF1F8]">
            {POPULAR_ARTICLES.map((title, i) => (
              <li key={title}>
                <a
                  href="#"
                  className="group flex items-start gap-4 py-4 focus:outline-none"
                >
                  <span className="mt-0.5 font-mono text-xs text-[#9CB0DE]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-sm leading-relaxed text-slate-700 group-hover:text-[#1154DA] sm:text-base">
                    {title}
                  </span>
                  <FiArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-slate-300 transition-transform group-hover:translate-x-0.5 group-hover:text-[#1154DA]" />
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Contact strip                                                    */}
      {/* ---------------------------------------------------------------- */}
      <section className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 rounded-2xl bg-[#EEF2FD] p-8 text-center sm:p-10">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#1154DA] shadow-sm">
            <FiMail className="h-5 w-5" />
          </span>
          <h2 className="text-lg font-semibold text-[#0B1220] sm:text-xl">
            Still need help?
          </h2>
          <p className="max-w-md text-sm text-slate-500 sm:text-base">
            Our support team typically replies within a few hours.
          </p>
          <a
            href="mailto:support@durapay.co"
            className="mt-2 inline-flex items-center gap-2 rounded-lg bg-[#1154DA] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#0e46b8] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00246C] focus-visible:ring-offset-2"
          >
            Contact support
            <FiArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </main>
  );
};

export default HelpCentre;
