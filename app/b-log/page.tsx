"use client";

import { useState } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────

type Category =
  | "All"
  | "Product"
  | "Finance Tips"
  | "Security"
  | "Company"
  | "Developer";

interface BlogPost {
  id: number;
  category: Category;
  tag?: string;
  title: string;
  excerpt: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  accent: string; // tailwind bg class for card accent
  icon: string; // emoji / icon character
  featured?: boolean;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const POSTS: BlogPost[] = [
  {
    id: 1,
    category: "Product",
    tag: "New",
    title:
      "Introducing DuraPay USD Virtual Cards — spend globally, pay locally",
    excerpt:
      "Your new USD virtual card lives inside DuraPay. Fund it from your NGN wallet, use it anywhere Visa is accepted, and never worry about exchange rates again.",
    author: "Emeka Obi",
    authorRole: "Product Lead",
    date: "Jun 9, 2025",
    readTime: "5 min read",
    accent: "from-[#1154da] to-[#0d3fa6]",
    icon: "💳",
    featured: true,
  },
  {
    id: 2,
    category: "Finance Tips",
    title: "How to build a savings habit that actually sticks",
    excerpt:
      "Small, automated transfers beat willpower every time. Here's how DuraPay Savings Vaults help you automate discipline so you don't have to think about it.",
    author: "Chisom Eze",
    authorRole: "Personal Finance Writer",
    date: "Jun 5, 2025",
    readTime: "4 min read",
    accent: "from-[#0e3d2f] to-[#0a2a20]",
    icon: "🏦",
  },
  {
    id: 3,
    category: "Security",
    title: "How DuraPay keeps your money safe — explained simply",
    excerpt:
      "From biometric locks to NDIC-backed insurance, this is every layer of protection standing between your balance and the bad guys.",
    author: "Tunde Adeyemi",
    authorRole: "Head of Trust & Safety",
    date: "May 28, 2025",
    readTime: "6 min read",
    accent: "from-[#2d1f5e] to-[#1a1240]",
    icon: "🔐",
  },
  {
    id: 4,
    category: "Product",
    title: "Cashback on every transfer — how DuraPay Rewards works",
    excerpt:
      "Every naira you move earns you points. Redeem them for airtime, data, or straight cash. No hoops, no expiry dates.",
    author: "Adaeze Nwosu",
    authorRole: "Growth & Rewards",
    date: "May 20, 2025",
    readTime: "3 min read",
    accent: "from-[#4a2400] to-[#2e1700]",
    icon: "🎁",
  },
  {
    id: 5,
    category: "Company",
    title: "One million users: a letter from our CEO",
    excerpt:
      "We started DuraPay to make everyday money easy for every Nigerian. Crossing one million users means something enormous to us — and it's only the beginning.",
    author: "Kelechi Nwachukwu",
    authorRole: "CEO, DuraPay",
    date: "May 12, 2025",
    readTime: "7 min read",
    accent: "from-[#0f3d2a] to-[#082a1c]",
    icon: "🇳🇬",
  },
  {
    id: 6,
    category: "Finance Tips",
    title:
      "Understanding electricity token top-ups — and why DuraPay is faster",
    excerpt:
      "NEPA, PHCN, DisCo — the alphabet soup of Nigerian electricity. We break it down and show you how DuraPay buys tokens in under 10 seconds.",
    author: "Fatima Bello",
    authorRole: "Content & Education",
    date: "May 3, 2025",
    readTime: "4 min read",
    accent: "from-[#3b2000] to-[#241400]",
    icon: "⚡",
  },
  {
    id: 7,
    category: "Developer",
    title: "DuraPay API: accept payments on your platform in minutes",
    excerpt:
      "Our REST API and webhook system make it simple to embed wallets, trigger payouts, and reconcile transactions — all with a single integration.",
    author: "Daniel Afolabi",
    authorRole: "Developer Relations",
    date: "Apr 24, 2025",
    readTime: "8 min read",
    accent: "from-[#001f3a] to-[#001128]",
    icon: "⚙️",
  },
  {
    id: 8,
    category: "Product",
    title: "Physical NGN debit cards are here — order yours today",
    excerpt:
      "DuraPay's physical Visa card taps into your wallet balance. Use it at any ATM or POS terminal in Nigeria. Order takes 3–5 business days.",
    author: "Yemi Omotosho",
    authorRole: "Cards Product Manager",
    date: "Apr 15, 2025",
    readTime: "3 min read",
    accent: "from-[#1154da] to-[#0c3fa0]",
    icon: "🃏",
  },
];

const CATEGORIES: Category[] = [
  "All",
  "Product",
  "Finance Tips",
  "Security",
  "Company",
  "Developer",
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function CategoryPill({
  label,
  active,
  onClick,
}: {
  label: Category;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`
        relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200
        ${
          active
            ? "bg-[#1154da] text-white shadow-[0_0_12px_rgba(17,84,218,0.45)]"
            : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white/80"
        }
      `}
    >
      {label}
    </button>
  );
}

function FeaturedCard({ post }: { post: BlogPost }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#111118] hover:border-white/20 transition-all duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-5">
        {/* Left — graphic accent */}
        <div
          className={`
            relative lg:col-span-2 min-h-[200px] lg:min-h-0
            bg-gradient-to-br ${post.accent}
            flex items-center justify-center overflow-hidden
          `}
        >
          {/* Decorative circles */}
          <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full bg-white/5" />
          <div className="absolute -bottom-8 -right-8 w-36 h-36 rounded-full bg-white/5" />
          <span className="relative text-8xl select-none">{post.icon}</span>

          {/* Tag */}
          {post.tag && (
            <span className="absolute top-4 left-4 bg-[#00C896] text-[#001a12] text-xs font-semibold px-2.5 py-1 rounded-full">
              {post.tag}
            </span>
          )}
        </div>

        {/* Right — content */}
        <div className="lg:col-span-3 p-7 lg:p-10 flex flex-col justify-between gap-6">
          <div className="space-y-4">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#1154da]">
              {post.category}
            </span>
            <h2 className="text-xl lg:text-2xl font-semibold text-white leading-snug group-hover:text-[#93b4ff] transition-colors duration-200">
              {post.title}
            </h2>
            <p className="text-sm text-white/55 leading-relaxed">
              {post.excerpt}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#1154da]/30 flex items-center justify-center text-xs font-bold text-[#93b4ff]">
                {post.author.charAt(0)}
              </div>
              <div>
                <p className="text-xs font-medium text-white/80">
                  {post.author}
                </p>
                <p className="text-[11px] text-white/35">{post.authorRole}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-white/40">{post.date}</p>
              <p className="text-[11px] text-white/30">{post.readTime}</p>
            </div>
          </div>

          <a
            href="#"
            className="self-start inline-flex items-center gap-2 text-sm font-medium text-[#93b4ff] hover:text-white transition-colors duration-200"
          >
            Read article
            <svg
              className="w-4 h-4 translate-x-0 group-hover:translate-x-0.5 transition-transform"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111118] hover:border-white/20 transition-all duration-300 hover:-translate-y-0.5">
      {/* Card header / visual */}
      <div
        className={`relative h-36 bg-gradient-to-br ${post.accent} flex items-center justify-center overflow-hidden`}
      >
        <div className="absolute -top-6 -left-6 w-28 h-28 rounded-full bg-white/5" />
        <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-white/5" />
        <span className="relative text-5xl select-none">{post.icon}</span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <span className="text-[10px] font-semibold tracking-widest uppercase text-[#1154da]">
          {post.category}
        </span>
        <h3 className="text-sm font-semibold text-white leading-snug group-hover:text-[#93b4ff] transition-colors duration-200 line-clamp-2">
          {post.title}
        </h3>
        <p className="text-xs text-white/45 leading-relaxed line-clamp-3 flex-1">
          {post.excerpt}
        </p>

        <div className="mt-auto pt-3 border-t border-white/[0.07] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#1154da]/25 flex items-center justify-center text-[10px] font-bold text-[#93b4ff]">
              {post.author.charAt(0)}
            </div>
            <span className="text-[11px] text-white/45">{post.author}</span>
          </div>
          <span className="text-[11px] text-white/30">{post.readTime}</span>
        </div>
      </div>
    </article>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function DurapayBlogSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const featured = POSTS.find((p) => p.featured)!;

  const filtered =
    activeCategory === "All"
      ? POSTS.filter((p) => !p.featured)
      : POSTS.filter((p) => p.category === activeCategory && !p.featured);

  // If active category matches featured, include it in the grid instead
  const showFeaturedSeparately =
    activeCategory === "All" || activeCategory !== featured.category;

  const gridPosts =
    activeCategory === featured.category
      ? POSTS.filter((p) => p.category === activeCategory)
      : filtered;

  return (
    <section className="bg-[#0A0A0F] min-h-screen px-4 sm:px-6 lg:px-10 py-16 lg:py-24">
      <div className="max-w-6xl mx-auto">
        {/* ── Section header ── */}
        <div className="mb-10 lg:mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="space-y-2">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1154da]">
              DuraPay Blog
            </p>
            <h1 className="text-3xl lg:text-4xl font-semibold text-white leading-tight">
              Insights on money,
              <br className="hidden sm:block" /> product & beyond
            </h1>
            <p className="text-sm text-white/45 max-w-md">
              Tips on saving smarter, product announcements, security guides,
              and stories from the DuraPay team.
            </p>
          </div>

          {/* Newsletter CTA */}
          <div className="shrink-0">
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl p-1 pl-4">
              <input
                type="email"
                placeholder="your@email.com"
                className="bg-transparent text-sm text-white placeholder:text-white/30 outline-none w-36 lg:w-44"
              />
              <button className="bg-[#1154da] hover:bg-[#1a66ff] transition-colors text-white text-xs font-semibold px-4 py-2 rounded-lg whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-[11px] text-white/25 mt-1.5 text-center">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* ── Category filter ── */}
        <div className="flex items-center gap-2 flex-wrap mb-8 lg:mb-10">
          {CATEGORIES.map((cat) => (
            <CategoryPill
              key={cat}
              label={cat}
              active={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
            />
          ))}
        </div>

        {/* ── Featured post ── */}
        {showFeaturedSeparately && (
          <div className="mb-8 lg:mb-10">
            <FeaturedCard post={featured} />
          </div>
        )}

        {/* ── Posts grid ── */}
        {gridPosts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {gridPosts.map((post) =>
              post.featured && activeCategory === post.category ? (
                <div key={post.id} className="sm:col-span-2 lg:col-span-3">
                  <FeaturedCard post={post} />
                </div>
              ) : (
                <BlogCard key={post.id} post={post} />
              ),
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <span className="text-5xl mb-4">📭</span>
            <p className="text-white/40 text-sm">
              No posts in this category yet.
            </p>
            <button
              onClick={() => setActiveCategory("All")}
              className="mt-4 text-sm text-[#93b4ff] hover:text-white transition-colors"
            >
              View all posts →
            </button>
          </div>
        )}

        {/* ── Load more ── */}
        <div className="mt-10 lg:mt-14 flex justify-center">
          <button className="flex items-center gap-2 text-sm font-medium text-white/50 hover:text-white border border-white/10 hover:border-white/25 px-6 py-2.5 rounded-full transition-all duration-200">
            Load more articles
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
