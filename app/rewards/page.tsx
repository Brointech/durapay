"use clients";

// import { useState } from "react";
const navLinks = [
  { label: "For Shoppers", href: "#" },
  { label: "For Brands", href: "#" },
  { label: "For Retailers", href: "#" },
  { label: "FAQ", href: "#faq" },
];

const moments = [
  {
    tag: "Before you buy",
    title: "Check the going price nearby",
    body: "Compare what people are paying for the same item across nearby shops before you spend a single naira.",
    cta: "Check a price",
  },
  {
    tag: "When you pay",
    title: "Cashback on bills you already pay",
    body: "Airtime, data, power, transport — the spending you can't avoid quietly earns cashback in the background.",
    cta: "See what qualifies",
  },
  {
    tag: "After you buy",
    title: "Snap the receipt, bank the reward",
    body: "One photo turns a paper receipt into tracked spending and a cashback point, automatically matched to the brand.",
    cta: "Snap a receipt",
  },
];

const steps = [
  {
    n: "01",
    title: "Download the app",
    body: "Set up in a couple of minutes — no card required to start earning.",
  },
  {
    n: "02",
    title: "Shop and pay like normal",
    body: "Online or in person, nothing changes about how you already shop.",
  },
  {
    n: "03",
    title: "Snap the receipt",
    body: "We read it, match it to a brand, and add the points to your balance.",
  },
  {
    n: "04",
    title: "Redeem instantly",
    body: "Trade points for airtime, data, power units, or send them to a friend.",
  },
];

const stats = [
  { value: "65,000+", label: "Stores, online and offline" },
  { value: "₦480M+", label: "Cashback redeemed by users" },
  { value: "120K+", label: "Active members nationwide" },
];

const testimonials = [
  {
    quote:
      "I didn't track my spending until I started snapping receipts. Now the same shopping I was already doing earns money back.",
    name: "Amaka O.",
    city: "Lagos",
  },
  {
    quote:
      "Every receipt feels like a small win. I've gotten my friends on it too, now we compare who saved more this month.",
    name: "Daniel U.",
    city: "Abuja",
  },
  {
    quote:
      "It actually knows the shops near me and shows real offers, not generic discounts. Feels built for how I actually spend.",
    name: "Halima B.",
    city: "Ibadan",
  },
];

const faqs = [
  {
    q: "How does it actually work?",
    a: "You shop, you snap the receipt, we match it to a brand and credit cashback points. You can also check prices nearby before you spend, so the savings start before checkout.",
  },
  {
    q: "Is it free to use?",
    a: "Yes. Snapping receipts and redeeming points for airtime, data, or power costs nothing. A paid tier exists for shoppers who want higher cashback rates and extra perks.",
  },
  {
    q: "Which receipts qualify?",
    a: "Most everyday purchases — groceries, fuel, meals, market runs — as long as the receipt is a valid, readable, non-handwritten paper receipt.",
  },
  {
    q: "What can I redeem points for?",
    a: "Airtime, data bundles, and electricity units from major providers, with the option to send points to friends or unlock extra cashback boosts.",
  },
  {
    q: "Is my data safe?",
    a: "Receipts are used only to track spending and calculate rewards. Nothing is sold or shared beyond what's needed to run the program.",
  },
];

function ReceiptIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M6 3h12a1 1 0 0 1 1 1v16l-2.5-1.5L14 20l-2.5-1.5L9 20l-2.5-1.5L4 20V4a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M8 8h8M8 11.5h8M8 15h5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={`h-5 w-5 shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Repeating perforation divider — the signature receipt-edge motif. */
function PerforatedDivider() {
  return (
    <div className="relative h-6 w-full overflow-hidden" aria-hidden="true">
      <div
        className="absolute inset-x-0 top-0 h-6"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, #FBF6EC 0 5px, transparent 5.5px)",
          backgroundSize: "20px 20px",
          backgroundPosition: "10px -10px",
          backgroundColor: "#14110F",
        }}
      />
    </div>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-[#FBF6EC] text-[#14110F] antialiased">
      {/* ---------------- HERO ---------------- */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-14 sm:px-8 sm:pt-20 lg:grid-cols-2 lg:gap-8 lg:pb-24 lg:pt-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#D8CDB8] bg-white/60 px-3 py-1 text-xs font-medium uppercase tracking-wide text-[#2F4A36]">
              Everyday spending, rewarded
            </span>
            <h1 className="mt-5 font-serif text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Get cashback wherever you spend money
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-[#14110F]/70 sm:text-lg">
              Groceries, fuel, bills, self-care, food — the spending you're
              already doing quietly earns cashback the moment you snap the
              receipt.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#download"
                className="rounded-full bg-[#E8862C] px-7 py-3.5 text-center text-sm font-semibold text-[#14110F] shadow-[0_4px_0_0_#14110F] transition-transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-[0_1px_0_0_#14110F]"
              >
                Get the app — it's free
              </a>
              <a
                href="#how-it-works"
                className="rounded-full border border-[#14110F]/20 px-7 py-3.5 text-center text-sm font-semibold text-[#14110F]/80 transition-colors hover:bg-white/60"
              >
                See how it works
              </a>
            </div>
            <div className="mt-9 flex items-center gap-4 text-xs text-[#14110F]/60">
              <div className="flex -space-x-2">
                {["#E8862C", "#2F4A36", "#14110F", "#C97A2A"].map((c, i) => (
                  <span
                    key={i}
                    className="h-7 w-7 rounded-full border-2 border-[#FBF6EC]"
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
              <p>Joined by 120,000+ shoppers earning every week</p>
            </div>
          </div>

          {/* Signature visual: a torn receipt card with a perforated top edge */}
          <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
            <div className="absolute -right-4 -top-4 hidden h-full w-full rounded-[28px] bg-[#2F4A36]/15 sm:block" />
            <div className="relative rounded-[28px] bg-white shadow-xl shadow-[#14110F]/10">
              <PerforatedDivider />
              <div className="px-6 py-6 sm:px-8 sm:py-8">
                <p className="text-xs uppercase tracking-[0.2em] text-[#14110F]/40">
                  Receipt
                </p>
                <p className="mt-1 font-serif text-lg font-medium">
                  Daily Mart, Lekki
                </p>
                <div className="mt-5 space-y-2 text-sm text-[#14110F]/70">
                  <div className="flex justify-between">
                    <span>Rice, 5kg</span>
                    <span>₦11,200</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cooking oil</span>
                    <span>₦4,800</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Eggs, crate</span>
                    <span>₦3,500</span>
                  </div>
                </div>
                <div className="mt-5 border-t border-dashed border-[#D8CDB8] pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-[#14110F]/70">
                      Total
                    </span>
                    <span className="font-serif text-xl font-semibold">
                      ₦19,500
                    </span>
                  </div>
                  <div className="mt-3 flex items-center justify-between rounded-xl bg-[#2F4A36]/10 px-4 py-3">
                    <span className="text-sm font-medium text-[#2F4A36]">
                      Cashback earned
                    </span>
                    <span className="font-serif text-lg font-semibold text-[#2F4A36]">
                      +₦780
                    </span>
                  </div>
                </div>
              </div>
              <div className="rotate-180">
                <PerforatedDivider />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- THREE MOMENTS ---------------- */}
      <section className="border-t border-[#D8CDB8] bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
              Cashback at every stage of spending
            </h2>
            <p className="mt-3 text-[#14110F]/70">
              Save money before you buy, earn it back when you pay, and bank it
              again the moment you snap your receipt.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {moments.map((m) => (
              <div
                key={m.title}
                className="flex flex-col rounded-2xl border border-[#D8CDB8] bg-[#FBF6EC] p-6 transition-shadow hover:shadow-md"
              >
                <span className="inline-flex w-fit items-center rounded-full bg-[#E8862C]/15 px-3 py-1 text-xs font-semibold text-[#C97A2A]">
                  {m.tag}
                </span>
                <h3 className="mt-4 font-serif text-xl font-semibold leading-snug">
                  {m.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[#14110F]/70">
                  {m.body}
                </p>
                <a
                  href="#download"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[#14110F] underline decoration-[#E8862C] decoration-2 underline-offset-4"
                >
                  {m.cta} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- STATS ---------------- */}
      <section className="bg-[#14110F] text-[#FBF6EC]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid gap-10 sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label} className="text-center sm:text-left">
                <p className="font-serif text-4xl font-semibold sm:text-5xl">
                  {s.value}
                </p>
                <p className="mt-2 text-sm text-[#FBF6EC]/60">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- HOW IT WORKS ---------------- */}
      <section id="how-it-works" className="bg-[#FBF6EC]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
              Getting started takes four steps
            </h2>
            <p className="mt-3 text-[#14110F]/70">
              From download to redeeming your first reward, the whole loop fits
              inside a normal shopping trip.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-[#D8CDB8] bg-[#D8CDB8] sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n} className="bg-white p-6 sm:p-7">
                <span className="font-serif text-3xl font-semibold text-[#E8862C]">
                  {s.n}
                </span>
                <h3 className="mt-4 text-base font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#14110F]/70">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- TESTIMONIALS ---------------- */}
      <section className="border-t border-[#D8CDB8] bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-xl">
              <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
                Why shoppers stick with it
              </h2>
              <p className="mt-3 text-[#14110F]/70">
                Real people, real receipts, real cashback redeemed every week.
              </p>
            </div>
            <div className="text-left sm:text-right">
              <p className="font-serif text-3xl font-semibold">100K+</p>
              <p className="text-sm text-[#14110F]/60">
                Active receipt-snappers nationwide
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="flex flex-col justify-between rounded-2xl border border-[#D8CDB8] bg-[#FBF6EC] p-6"
              >
                <blockquote className="text-sm leading-relaxed text-[#14110F]/80">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2F4A36] text-xs font-semibold text-[#FBF6EC]">
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-[#14110F]/50">{t.city}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- FAQ ----------------
      <section id="faq" className="bg-[#FBF6EC]">
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-24">
          <h2 className="text-center font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            Frequently asked questions
          </h2>

          <div className="mt-10 divide-y divide-[#D8CDB8] border-y border-[#D8CDB8]">
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={f.q}>
                  <button
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    onClick={() => setOpenFaq(open ? null : i)}
                    aria-expanded={open}
                  >
                    <span className="text-base font-semibold sm:text-lg">
                      {f.q}
                    </span>
                    <ChevronIcon open={open} />
                  </button>
                  <div
                    className={`grid overflow-hidden transition-all duration-300 ease-out ${
                      open
                        ? "grid-rows-[1fr] pb-5 opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <p className="min-h-0 text-sm leading-relaxed text-[#14110F]/70 sm:text-base">
                      {f.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* ---------------- CTA ---------------- */}
      <section id="download" className="bg-[#2F4A36]">
        <div className="mx-auto max-w-7xl px-5 py-16 text-center sm:px-8 sm:py-24">
          <h2 className="mx-auto max-w-2xl font-serif text-3xl font-semibold tracking-tight text-[#FBF6EC] sm:text-4xl lg:text-5xl">
            Start earning cashback on spending you're already doing
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[#FBF6EC]/70">
            Download the app, snap your first receipt, and watch your balance
            grow.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#"
              className="w-full rounded-full bg-[#E8862C] px-7 py-3.5 text-sm font-semibold text-[#14110F] sm:w-auto"
            >
              Download for iOS
            </a>
            <a
              href="#"
              className="w-full rounded-full border border-[#FBF6EC]/30 px-7 py-3.5 text-sm font-semibold text-[#FBF6EC] sm:w-auto"
            >
              Download for Android
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
// function useState(arg0: boolean): [any, any] {
//   throw new Error("Function not implemented.");
// }
